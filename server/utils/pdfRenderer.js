import puppeteer from 'puppeteer';

// A single shared browser instance, launched lazily and reused across
// requests. Launching Chromium per request would add ~1s and a lot of
// memory churn; one warm browser keeps PDF generation fast.
let browserPromise = null;

const launch = () =>
  puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

const getBrowser = async () => {
  if (!browserPromise) {
    browserPromise = launch();
  }
  let browser = await browserPromise;
  if (!browser.connected) {
    // Browser died (crash / OOM) — relaunch for the next caller.
    browserPromise = launch();
    browser = await browserPromise;
  }
  return browser;
};

/**
 * Render an HTML string to an A4 PDF buffer using a real browser engine,
 * which gives correct Hebrew / RTL / BiDi shaping out of the box.
 */
export const renderHtmlToPdf = async (html) => {
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    await page.setContent(html, { waitUntil: 'networkidle0' });
    // The font is embedded as a base64 data URI; make sure it is parsed
    // before we snapshot the page.
    await page.evaluateHandle('document.fonts.ready');
    // page.pdf() returns a Uint8Array; wrap it in a Buffer so Express /
    // nodemailer treat it as binary instead of serializing it to JSON.
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    });
    return Buffer.from(pdf);
  } finally {
    await page.close();
  }
};

// Close the browser cleanly on shutdown so we don't leak Chromium processes.
const shutdown = async () => {
  if (browserPromise) {
    try {
      const browser = await browserPromise;
      await browser.close();
    } catch {
      /* already gone */
    }
  }
};

process.once('SIGINT', shutdown);
process.once('SIGTERM', shutdown);
