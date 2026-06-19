'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  AUTO_LOCALE_COOKIE,
  MANUAL_LOCALE_COOKIE,
  localeFromTimeZone,
} from '@/i18n/locale-preference';

const BOT_PATTERN = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|googleother/i;

function readCookie(name) {
  const prefix = `${name}=`;
  return document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(prefix))
    ?.slice(prefix.length);
}

function writeAutoLocale(locale) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${AUTO_LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 7}; SameSite=Lax${secure}`;
}

export default function LocaleBootstrap() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (BOT_PATTERN.test(navigator.userAgent)) return;
    if (readCookie(MANUAL_LOCALE_COOKIE) || readCookie(AUTO_LOCALE_COOKIE)) return;

    // A non-default locale in the URL is an explicit destination. Only infer
    // location when the visitor arrived at the unprefixed Hebrew homepage.
    if (locale !== 'he') return;

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const detectedLocale = localeFromTimeZone(timeZone);
    writeAutoLocale(detectedLocale);

    if (detectedLocale !== locale) {
      router.replace(pathname, { locale: detectedLocale });
    }
  }, [locale, pathname, router]);

  return null;
}
