// Post-build static prerender.
// Serves the built dist/, drives a real browser over every route, and writes
// the fully-rendered HTML (content + per-page meta/OG tags) back to disk so
// crawlers and social scrapers get real HTML without running JS.
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

const server = await preview({ preview: { port: PORT } });
const base = `http://localhost:${PORT}`;
const browser = await puppeteer.launch({ headless: 'new' });

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

await browser.close();
await server.httpServer.close();
console.log('prerender done');
process.exit(0);
