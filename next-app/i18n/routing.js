import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['he', 'en', 'fr', 'es', 'it', 'ru'],
  defaultLocale: 'he',
  localeDetection: true,
  localeCookie: {
    name: 'NEXT_LOCALE',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax',
  },
});
