import nodemailer from 'nodemailer';

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const getHebrewDate = () => {
  try {
    return new Intl.DateTimeFormat('he-u-ca-hebrew', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  } catch {
    return new Date().toLocaleDateString('he');
  }
};

const buildLetterFile = ({ mode, name, motherName, gender, text }) => {
  const modeLabel = mode === 'pan' ? 'פדיון נפש' : 'מכתב';
  const displayName = name?.trim() || '';
  const hebrewDate = getHebrewDate();

  const panNusach = mode === 'pan' && displayName
    ? `<div style="font-size:22px;text-align:center;margin-bottom:24px;line-height:1.8;">
        <strong>פ״נ</strong><br/>
        אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל
        <span style="color:#b5864a;"> ${displayName} ${gender || 'בן'} ${motherName?.trim() || ''}</span>
       </div>`
    : '';

  const safeText = (text || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');

  return `<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
<meta charset="UTF-8"/>
<style>
  body { font-family: "Arial", sans-serif; background:#fdfaf5; color:#1e1a17; margin:0; padding:0; }
  .page { max-width:680px; margin:60px auto; background:#fff; border:1px solid #e4dcd0; padding:72px 80px 64px; box-shadow:0 4px 32px rgba(0,0,0,.08); }
  .bh { text-align:center; font-size:18px; color:#b5864a; margin-bottom:6px; letter-spacing:.08em; }
  .date { text-align:center; font-size:13px; color:#9c9490; margin-bottom:48px; }
  .gold-line { width:56px; height:2px; background:#b5864a; margin:0 auto 36px; }
  .letter-body { font-size:19px; line-height:2.1; color:#1e1a17; white-space:pre-wrap; }
  .footer { margin-top:56px; border-top:1px solid #e4dcd0; padding-top:20px; font-size:13px; color:#9c9490; text-align:center; }
</style>
</head>
<body>
<div class="page">
  <div class="bh">ב״ה</div>
  <div class="date">${hebrewDate}</div>
  <div class="gold-line"></div>
  ${panNusach}
  <div class="letter-body">${safeText}</div>
  <div class="footer">נשלח דרך כתיבה לרבי · writingtotherabbi.com</div>
</div>
</body>
</html>`;
};

export const sendLetter = async (req, res, next) => {
  try {
    const { mode, name, motherName, gender, text, image } = req.body;

    const modeLabel = mode === 'pan' ? 'פדיון נפש' : 'מכתב';
    const displayName = name?.trim() || 'אנונימי';
    const subject = `${modeLabel} חדש — ${displayName}`;

    const attachments = [];

    // typed text → HTML file attachment
    if (text?.trim()) {
      const html = buildLetterFile({ mode, name, motherName, gender, text });
      attachments.push({
        filename: `${modeLabel}-${displayName}.html`,
        content: Buffer.from(html, 'utf-8'),
        contentType: 'text/html; charset=utf-8',
      });
    }

    // handwritten image → image attachment
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
      ${motherName?.trim() ? `בן/בת: ${gender || ''} ${motherName.trim()}<br/>` : ''}
      ${text?.trim() ? 'תוכן: ראו קובץ מצורף' : ''}
      ${image?.data ? '<br/>כתב יד: ראו קובץ מצורף' : ''}
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
