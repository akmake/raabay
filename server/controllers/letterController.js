import nodemailer from 'nodemailer';
import { HDate } from '@hebcal/core';
import { buildLetterHTML } from '../utils/letterTemplate.js';
import { renderHtmlToPdf } from '../utils/pdfRenderer.js';

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

const HEBREW_MONTHS = [
  '', 'ניסן', 'אייר', 'סיוון', 'תמוז', 'אב', 'אלול',
  'תשרי', 'חשוון', 'כסלו', 'טבת', 'שבט', 'אדר', "אדר ב'",
];

const toGematria = (n) => {
  const h = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
  const t = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const o = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  let s = h[Math.floor(n / 100)];
  const r = n % 100;
  if (r === 15) s += 'טו';
  else if (r === 16) s += 'טז';
  else { s += t[Math.floor(r / 10)]; s += o[r % 10]; }
  if (!s) return '';
  return s.length === 1 ? s + '׳' : s.slice(0, -1) + '״' + s.slice(-1);
};

const getHebrewDate = () => {
  try {
    const hd = new HDate();
    const day = toGematria(hd.getDate());
    const month = HEBREW_MONTHS[hd.getMonth()];
    const year = toGematria(hd.getFullYear() % 1000);
    return `${day} ב${month} ${year}`;
  } catch {
    return new Intl.DateTimeFormat('he-u-ca-hebrew', {
      day: 'numeric', month: 'long', year: 'numeric',
    }).format(new Date());
  }
};

const generatePDF = ({ mode, name, motherName, gender, text }) => {
  const html = buildLetterHTML({
    mode,
    name,
    motherName,
    gender,
    text,
    hebrewDate: getHebrewDate(),
  });
  return renderHtmlToPdf(html);
};

// Quick preview: render the PDF and return it inline (no email). Used by the
// "תצוגה מקדימה" button so you can see exactly what will be sent.
export const previewLetter = async (req, res, next) => {
  try {
    const { mode, name, motherName, gender, text } = req.body;
    const pdfBuffer = await generatePDF({ mode, name, motherName, gender, text });
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="preview.pdf"',
    });
    res.send(pdfBuffer);
  } catch (err) {
    next(err);
  }
};

export const sendLetter = async (req, res, next) => {
  try {
    const { mode, name, motherName, gender, text, image } = req.body;

    const modeLabel = mode === 'pan' ? 'פדיון נפש' : 'מכתב';
    const displayName = name?.trim() || 'אנונימי';
    const subject = `${modeLabel} חדש — ${displayName}`;

    const attachments = [];

    if (text?.trim()) {
      const pdfBuffer = await generatePDF({ mode, name, motherName, gender, text });
      attachments.push({
        filename: `${modeLabel}-${displayName}.pdf`,
        content: pdfBuffer,
        contentType: 'application/pdf',
      });
    }

    if (image?.data) {
      attachments.push({
        filename: image.filename || 'כתב-יד.jpg',
        content: image.data,
        encoding: 'base64',
        contentType: image.mimetype || 'image/jpeg',
      });
    }

    const emailBody = `<div dir="rtl" style="font-family:Arial,sans-serif;font-size:15px;color:#5c5550;line-height:1.8;">
      <strong style="color:#1e1a17;">${modeLabel} חדש התקבל</strong><br/>
      שם: ${displayName}<br/>
      ${motherName?.trim() ? `${gender || 'בן/בת'}: ${motherName.trim()}<br/>` : ''}
      תוכן: ראו קובץ PDF מצורף
    </div>`;

    const transporter = createTransporter();
    await transporter.sendMail({
      from: `"כתיבה לרבי" <${process.env.SMTP_USER}>`,
      to: process.env.LETTER_EMAIL,
      subject,
      html: emailBody,
      attachments,
    });

    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
