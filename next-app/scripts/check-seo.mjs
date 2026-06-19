const baseUrl = process.env.SEO_BASE_URL || 'http://localhost:3000';
const canonicalBase = 'https://writingtotherabbi.com';
const localePrefixes = ['', '/en', '/fr', '/es', '/it', '/ru'];
const pagePaths = ['', '/write', '/write-pidyon', '/mikhtav', '/pidyon', '/maala', '/ohel', '/contact'];
const legalPaths = ['/privacy', '/terms', '/accessibility'];

const decode = (value = '') => value
  .replaceAll('&quot;', '"')
  .replaceAll('&#x27;', "'")
  .replaceAll('&amp;', '&');

const getTagValue = (html, pattern) => decode(html.match(pattern)?.[1]?.trim());

const failures = [];
const titles = new Map();

async function inspect(route, shouldIndex) {
  const response = await fetch(`${baseUrl}${route || '/'}`);
  const html = await response.text();
  const title = getTagValue(html, /<title>([^<]+)<\/title>/i);
  const description = getTagValue(html, /<meta[^>]+name="description"[^>]+content="([^"]+)"/i);
  const canonical = getTagValue(html, /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i);
  const robots = getTagValue(html, /<meta[^>]+name="robots"[^>]+content="([^"]+)"/i);
  const h1 = html.match(/<h1\b[^>]*>/gi) || [];
  const expectedCanonical = route ? `${canonicalBase}${route}` : canonicalBase;

  if (!response.ok) failures.push(`${route || '/'} returned ${response.status}`);
  if (!title) failures.push(`${route || '/'} is missing a title`);
  if (!description && shouldIndex) failures.push(`${route || '/'} is missing a description`);
  if (canonical !== expectedCanonical) failures.push(`${route || '/'} canonical is ${canonical || 'missing'}; expected ${expectedCanonical}`);
  if (h1.length !== 1) failures.push(`${route || '/'} has ${h1.length} H1 elements`);
  if (shouldIndex && /noindex/i.test(robots)) failures.push(`${route || '/'} is unexpectedly noindex`);
  if (!shouldIndex && !/noindex/i.test(robots)) failures.push(`${route || '/'} must be noindex`);

  if (shouldIndex && title) {
    const duplicate = titles.get(title);
    if (duplicate) failures.push(`${route || '/'} duplicates the title used by ${duplicate}`);
    titles.set(title, route || '/');
  }
}

for (const prefix of localePrefixes) {
  for (const path of pagePaths) await inspect(`${prefix}${path}`, true);
}

for (const path of legalPaths) await inspect(path, false);

if (failures.length) {
  console.error(`SEO checks failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`SEO checks passed for ${localePrefixes.length * pagePaths.length + legalPaths.length} routes.`);
