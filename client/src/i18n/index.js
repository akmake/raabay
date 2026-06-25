import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import he from '@/messages/he.json';
import en from '@/messages/en.json';
import fr from '@/messages/fr.json';
import es from '@/messages/es.json';
import it from '@/messages/it.json';
import ru from '@/messages/ru.json';

export const LOCALES = ['he', 'en', 'fr', 'es', 'it', 'ru'];
export const DEFAULT_LOCALE = 'he';
export const LOCALE_STORAGE_KEY = 'SITE_LOCALE';

const resources = {
  he: { translation: he },
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  it: { translation: it },
  ru: { translation: ru },
};

function getInitialLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && LOCALES.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable */
  }
  return DEFAULT_LOCALE;
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLocale(),
  fallbackLng: DEFAULT_LOCALE,
  // The translations were authored for next-intl, which uses single-brace
  // placeholders like {year}. Match that here instead of i18next's {{year}}.
  interpolation: { escapeValue: false, prefix: '{', suffix: '}' },
  returnNull: false,
  react: { useSuspense: false },
});

export default i18n;

/**
 * Drop-in replacement for next-intl's useTranslations(namespace).
 * Returns a scoped translate function: t('key', { vars }).
 */
export function useTranslations(namespace) {
  const { t } = useTranslation();
  return (key, vars) => t(namespace ? `${namespace}.${key}` : key, vars);
}

/** Drop-in replacement for next-intl's useLocale(). */
export function useLocale() {
  const { i18n: instance } = useTranslation();
  return instance.language;
}

/** Persist + switch the active language. */
export function setLocale(locale) {
  if (!LOCALES.includes(locale)) return;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  i18n.changeLanguage(locale);
}
