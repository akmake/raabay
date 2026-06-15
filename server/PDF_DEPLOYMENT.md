# הפקת PDF (מכתב / פ"נ) — דרישות פריסה

המכתב והפ"נ מומרים ל־PDF באמצעות **Puppeteer** (דפדפן Chromium אמיתי),
כדי שהעברית תצא בכיוון הנכון (RTL/BiDi) ושה־PDF ייראה בדיוק כמו ה"נייר" שעל המסך.

הקבצים המעורבים:
- `utils/letterTemplate.js` — בונה את ה־HTML של המכתב, מטמיע את הפונט `fonts/FrankRuhlLibre.ttf`.
- `utils/pdfRenderer.js` — מנהל דפדפן Puppeteer משותף ומרנדר HTML ל־PDF.
- `controllers/letterController.js` — מחבר הכל ושולח במייל.

---

## מקומי (Windows / Mac)
עובד מהקופסה. `npm install` מוריד את Chromium אוטומטית. אין צורך בשום דבר נוסף.

---

## שרת לינוקס (VPS — Ubuntu / Debian)
Chromium יורד אוטומטית ב־`npm install`, אבל הוא צריך כמה ספריות מערכת.
התקן אותן פעם אחת:

```bash
sudo apt-get update && sudo apt-get install -y \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
  libgbm1 libpango-1.0-0 libcairo2 libasound2 libatspi2.0-0 \
  fonts-liberation
```

אם Chromium לא ירד בזמן ההתקנה, אפשר לאלץ:
```bash
npx puppeteer browsers install chrome
```

---

## Docker
הוסף את הספריות לאימג'. דוגמה (על בסיס `node:20-slim`):

```dockerfile
FROM node:20-slim
RUN apt-get update && apt-get install -y \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
  libgbm1 libpango-1.0-0 libcairo2 libasound2 libatspi2.0-0 \
  fonts-liberation \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app/server
COPY server/package*.json ./
RUN npm ci                 # מוריד Chromium אוטומטית
COPY server/ ./
CMD ["node", "index.js"]
```

---

## PaaS (Render / Railway וכו')
רוב הפלטפורמות מזהות Puppeteer אוטומטית. אם Chromium חסר בזמן ריצה:
1. ודא ש־`npm install` (ולא רק `npm ci --omit=dev`) רץ — Chromium יורד ב־postinstall.
2. אם הפלטפורמה לא מאפשרת הורדה, הצבע על Chrome מותקן דרך משתנה סביבה:
   `PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium`.

> הערה: השרת מחזיק **דפדפן אחד משותף** שנפתח פעם אחת (ראה `utils/pdfRenderer.js`),
> כך שהפקת PDF מהירה ולא פותחת תהליך חדש בכל בקשה.
