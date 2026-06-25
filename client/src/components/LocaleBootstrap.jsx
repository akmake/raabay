import { useEffect } from 'react';
import i18n, { LOCALES, LOCALE_STORAGE_KEY, setLocale } from '@/i18n';
import { localeFromTimeZone } from '@/i18n/locale-preference';

const BOT_PATTERN = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|googleother/i;

// On first visit (no saved preference), guess the language from the visitor's
// time zone. Once the visitor picks a language manually it is persisted and
// this never overrides it.
export default function LocaleBootstrap() {
  useEffect(() => {
    if (BOT_PATTERN.test(navigator.userAgent)) return;

    try {
      if (localStorage.getItem(LOCALE_STORAGE_KEY)) return;
    } catch {
      return;
    }

    // Only infer when we're still on the default (Hebrew) language.
    if (i18n.language !== 'he') return;

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const detected = localeFromTimeZone(timeZone);

    if (detected !== i18n.language && LOCALES.includes(detected)) {
      setLocale(detected);
    }
  }, []);

  return null;
}
