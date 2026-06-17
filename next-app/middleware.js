import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const NON_DEFAULT_LOCALES = ['en', 'fr', 'es', 'it', 'ru'];

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const response = intlMiddleware(request);

  const { pathname } = request.nextUrl;
  let strippedPath = pathname;
  for (const locale of NON_DEFAULT_LOCALES) {
    if (strippedPath.startsWith(`/${locale}/`)) {
      strippedPath = strippedPath.slice(locale.length + 1);
      break;
    }
    if (strippedPath === `/${locale}`) {
      strippedPath = '/';
      break;
    }
  }

  if (response) {
    response.headers.set('x-stripped-path', strippedPath || '/');
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
