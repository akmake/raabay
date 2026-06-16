import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FONT_PATH = path.join(__dirname, '../fonts/FrankRuhlLibre.ttf');

// Embed the font once at startup as a base64 data URI so the PDF never
// depends on the network or on file paths at render time.
const FONT_DATA_URI = (() => {
  const b64 = readFileSync(FONT_PATH).toString('base64');
  return `data:font/ttf;base64,${b64}`;
})();

const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// Preserve the writer's paragraphs/line breaks exactly as typed.
const textToHtml = (text = '') => escapeHtml(text).replace(/\r?\n/g, '<br/>');

/**
 * Builds the full HTML document for a letter / pan.
 * Plain white page, a single uniform font size and color — a real browser
 * engine handles all Hebrew / RTL / BiDi shaping.
 */
export const buildLetterHTML = ({ mode, name, motherName, gender, text, hebrewDate }) => {
  const displayName = escapeHtml(name?.trim() || '');
  const displayMother = escapeHtml(motherName?.trim() || '');
  const displayGender = escapeHtml(gender || 'בן');
  const isPan = mode === 'pan';

  let main;
  if (isPan) {
    const nusach = `אנא לעורר רחמים רבים על ${displayName || '[שם]'} ${displayGender} ${displayMother || '[שם האם]'}`;
    const request = text?.trim() ? ' ' + textToHtml(text.replace(/^\s+/, '')) : '';
    main = `<div class="pan-heading">פ״נ</div>
      <div class="block body">${nusach}${request}</div>`;
  } else {
    const signature = displayName
      ? `${displayName}${displayMother ? ` ${displayGender} ${displayMother}` : ''}`
      : '';
    main = `<div class="block">לכבוד כ"ק אדמו"ר</div>
      <div class="gap"></div>
      <div class="body">${textToHtml(text || '')}</div>
      ${signature ? `<div class="block" style="margin-top:28px">${signature}</div>` : ''}`;
  }

  return `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8"/>
<style>
  @font-face {
    font-family: 'Frank Ruhl Libre';
    src: url('${FONT_DATA_URI}') format('truetype');
    font-weight: 300 900;
    font-display: block;
  }

  @page { size: A4; margin: 25mm 22mm; }

  * { box-sizing: border-box; }

  html, body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    color: #1a1a1a;
    font-family: 'Frank Ruhl Libre', Georgia, serif;
    direction: rtl;
  }

  body {
    font-size: 16px;
    line-height: 1.9;
  }

  .bh   { text-align: right;  margin-bottom: 2px; }
  .date { text-align: right;  margin-bottom: 26px; }

  .block { text-align: right; margin-bottom: 4px; }
  .gap   { height: 18px; }

  .pan-heading { text-align: center; margin-bottom: 10px; }

  .body {
    text-align: right;
    word-wrap: break-word;
  }
</style>
</head>
<body>
  ${!isPan ? `<div class="bh">ב״ה</div><div class="date">${escapeHtml(hebrewDate)}</div>` : ''}
  ${main}
</body>
</html>`;
};
