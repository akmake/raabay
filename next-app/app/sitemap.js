const BASE = 'https://writingtotherabbi.com';
const LOCALES = ['he', 'en', 'fr', 'es', 'it', 'ru'];

const pages = [
  { path: '/',             priority: 1.0, freq: 'weekly'  },
  { path: '/write',        priority: 0.9, freq: 'monthly' },
  { path: '/pidyon',       priority: 0.8, freq: 'monthly' },
  { path: '/ohel',         priority: 0.8, freq: 'monthly' },
  { path: '/mikhtav',      priority: 0.7, freq: 'monthly' },
  { path: '/maala',        priority: 0.7, freq: 'monthly' },
  { path: '/write-pidyon', priority: 0.6, freq: 'monthly' },
  { path: '/contact',      priority: 0.4, freq: 'yearly'  },
];

function getUrl(locale, path) {
  if (locale === 'he') return `${BASE}${path}`;
  return path === '/' ? `${BASE}/${locale}` : `${BASE}/${locale}${path}`;
}

export default function sitemap() {
  return pages.flatMap(({ path, priority, freq }) =>
    LOCALES.map(locale => ({
      url: getUrl(locale, path),
      changeFrequency: freq,
      priority: locale === 'he' ? priority : Math.round(priority * 85) / 100,
    }))
  );
}
