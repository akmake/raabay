import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['he', 'en', 'fr', 'es', 'it', 'ru'],
  defaultLocale: 'he',
  localePrefix: 'as-needed',
  // Locale selection is handled by our middleware. next-intl's default
  // Accept-Language detection cannot tell whether a visitor is in Israel.
  localeDetection: false,
  localeCookie: false,
});
