import { useEffect } from 'react';
import { useLocale } from '@/i18n';

// Keeps <html lang> and <html dir> in sync with the active language.
// Hebrew is RTL; every other supported locale is LTR.
export default function LocaleHtml() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
