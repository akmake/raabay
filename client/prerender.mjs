// Post-build static prerender.
// Serves the built dist/, drives a real browser over every route, and writes
// the fully-rendered HTML (content + per-page meta/OG tags) back to disk so
// crawlers and social scrapers get real HTML without running JS.
//
// Designed to never break the deploy: if the browser can't launch (e.g. no
// Chromium on the build host) it logs a warning and exits 0 — the site still
// works as a normal SPA, just without the prerendered HTML.
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const ROUTES = [
  '/',
  '/write',
  '/write-pidyon',
  '/mikhtav',
  '/pidyon',
  '/maala',
  '/ohel',
  '/contact',
  '/accessibility',
  '/privacy',
  '/terms',
];

const PORT = 4179;
const distDir = path.resolve('dist');

let server;
let browser;

try {
  server = await preview({ preview: { port: PORT } });
  const base = `http://localhost:${PORT}`;

  browser = await puppeteer.launch({
    headless: 'new',
    // --no-sandbox is required on most Linux servers/containers (restricted user
    // namespaces). Safe here: we only render our own trusted, local content.
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  for (const route of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluateHandle('document.fonts.ready');
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML);
    const outPath = route === '/' ? path.join(distDir, 'index.html') : path.join(distDir, route, 'index.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf8');
    console.log('prerendered', route.padEnd(16), '->', path.relative(distDir, outPath));
    await page.close();
  }

  console.log('prerender done');
} catch (err) {
  console.warn('\n⚠️  prerender skipped — build still OK, site works as SPA.');
  console.warn('   reason:', err.message.split('\n')[0]);
} finally {
  if (browser) await browser.close().catch(() => {});
  if (server) await new Promise((res) => server.httpServer.close(res));
}

process.exit(0);
