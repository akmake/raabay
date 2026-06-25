import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://writingtotherabbi.com';
const OG_IMAGE = `${SITE_URL}/rebbe.webp`;

// Per-route SEO. Title + description reuse the translations each page already
// has, so everything is localized. The prerender step (prerender.mjs) runs a
// real browser, so these effect-applied tags get baked into the static HTML.
const PAGES = {
  '/': { title: (t) => `${t('home.h1')} ${t('home.h1Gold')}`, desc: (t) => t('home.desc') },
  '/write': { title: (t) => t('write.chooseTitle'), desc: (t) => t('write.chooseDesc') },
  '/write-pidyon': { title: (t) => t('write.panModeTitle'), desc: (t) => t('write.chooseDesc') },
  '/mikhtav': { title: (t) => `${t('mikhtav.h1')} ${t('mikhtav.h1Gold')}`, desc: (t) => t('mikhtav.desc') },
  '/pidyon': { title: (t) => `${t('pidyon.h1')} ${t('pidyon.h1Gold')}`, desc: (t) => t('pidyon.desc') },
  '/maala': { title: (t) => `${t('maala.h1')} ${t('maala.h1Gold')}`, desc: (t) => t('maala.desc') },
  '/ohel': { title: (t) => `${t('ohel.h1')} ${t('ohel.h1Gold')}`, desc: (t) => t('ohel.desc') },
  '/contact': { title: (t) => t('contact.h1'), desc: (t) => t('contact.desc') },
  '/accessibility': { title: () => 'הצהרת נגישות', desc: () => 'הצהרת הנגישות של אתר כתיבה לרבי.' },
  '/privacy': { title: () => 'מדיניות פרטיות', desc: () => 'מדיניות הפרטיות של אתר כתיבה לרבי — איזה מידע נאסף וכיצד.' },
  '/terms': { title: () => 'תנאי שימוש', desc: () => 'תנאי השימוש של אתר כתיבה לרבי.' },
};

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const siteName = t('nav.siteName');
    const page = PAGES[pathname] || PAGES['/'];
    const title = `${page.title(t).trim()} | ${siteName}`;
    const desc = (page.desc(t) || '').trim();
    const url = SITE_URL + (pathname === '/' ? '/' : pathname);
    const ogLocale = i18n.language === 'he' ? 'he_IL' : 'en_US';

    document.title = title;
    upsertMeta('name', 'description', desc);
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', siteName);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:locale', ogLocale);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image', OG_IMAGE);
  }, [pathname, t, i18n.language]);

  return null;
}
