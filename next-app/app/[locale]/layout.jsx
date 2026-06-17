import { headers } from 'next/headers';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import HtmlDir from '@/components/HtmlDir';
import { getAlternates } from '@/app/seo-utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const headersList = await headers();
  const strippedPath = headersList.get('x-stripped-path') || '/';
  return {
    alternates: getAlternates(locale, strippedPath),
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <HtmlDir locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
