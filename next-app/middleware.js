import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';
import {
  AUTO_LOCALE_COOKIE,
  LOCALE_COOKIE_OPTIONS,
  MANUAL_LOCALE_COOKIE,
  isSupportedLocale,
  localeFromCountry,
} from './i18n/locale-preference';

const handleI18nRouting = createMiddleware(routing);

const COUNTRY_HEADERS = [
  'cf-ipcountry',
  'x-vercel-ip-country',
  'x-country-code',
  'x-geo-country',
  'cloudfront-viewer-country',
];

const BOT_PATTERN = /bot|crawler|spider|slurp|bingpreview|facebookexternalhit|googleother/i;

function getRequestCountry(request) {
  for (const header of COUNTRY_HEADERS) {
    const value = request.headers.get(header)?.split(',')[0]?.trim();
    if (value && value.length === 2 && !['XX', 'T1', 'EU'].includes(value.toUpperCase())) {
      return value;
    }
  }

  return request.geo?.country || null;
}

function redirectToLocale(request, locale) {
  if (locale === routing.defaultLocale) return handleI18nRouting(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname === '/' ? '' : url.pathname}`;
  return NextResponse.redirect(url);
}

export default function middleware(request) {
  const firstSegment = request.nextUrl.pathname.split('/')[1];

  // A locale in the URL is always explicit and must never be geo-overridden.
  if (isSupportedLocale(firstSegment)) {
    return handleI18nRouting(request);
  }

  // Search engines should consistently crawl the Hebrew root page. Their
  // datacenter country must not decide which homepage Google indexes.
  if (BOT_PATTERN.test(request.headers.get('user-agent') || '')) {
    return handleI18nRouting(request);
  }

  const manualLocale = request.cookies.get(MANUAL_LOCALE_COOKIE)?.value;
  if (isSupportedLocale(manualLocale)) {
    return redirectToLocale(request, manualLocale);
  }

  const countryLocale = localeFromCountry(getRequestCountry(request));
  if (countryLocale) {
    const response = redirectToLocale(request, countryLocale);
    response.cookies.set(AUTO_LOCALE_COOKIE, countryLocale, {
      ...LOCALE_COOKIE_OPTIONS,
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  const autoLocale = request.cookies.get(AUTO_LOCALE_COOKIE)?.value;
  if (isSupportedLocale(autoLocale)) {
    return redirectToLocale(request, autoLocale);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
