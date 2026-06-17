const BASE = 'https://writingtotherabbi.com';
const LOCALES = ['he', 'en', 'fr', 'es', 'it', 'ru'];

export function buildUrl(locale, path) {
  if (locale === 'he') return `${BASE}${path}`;
  const p = path === '/' ? '' : path;
  return `${BASE}/${locale}${p}`;
}

export function getAlternates(locale, path) {
  const languages = Object.fromEntries(LOCALES.map(l => [l, buildUrl(l, path)]));
  languages['x-default'] = buildUrl('he', path);
  return { canonical: buildUrl(locale, path), languages };
}
