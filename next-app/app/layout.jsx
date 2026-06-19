import './globals.css';
import { Frank_Ruhl_Libre, Assistant, Noto_Serif } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import Providers from './providers';

const frankRuhl = Frank_Ruhl_Libre({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
});

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const notoSerif = Noto_Serif({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://writingtotherabbi.com'),
  title: {
    default: 'כתיבת מכתב לרבי מליובאוויטש | בקשת ברכה לאוהל | מכתב לרבי אונליין',
    template: '%s | כתיבה לרבי',
  },
  description:
    'שלחו מכתב בקשת ברכה לרבי מליובאוויטש — כתיבה לרבי וקבלת ברכה ועצה. נוסח מכתב לרבי, נוסח פ"נ, שלבי הכתיבה — הכל במקום אחד. מכתב לרבי אונליין.',
  icons: {
    icon: '/rebbe.webp',
    apple: '/rebbe.webp',
  },
  alternates: { canonical: 'https://writingtotherabbi.com' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    title: 'כתיבת מכתב לרבי מליובאוויטש | בקשת ברכה לאוהל',
    description: 'שלחו מכתב בקשת ברכה לרבי מליובאוויטש — נוסח מכתב, שלבי כתיבה, פ"נ. הכל אונליין.',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כתיבת מכתב לרבי מליובאוויטש',
    description: 'שלחו מכתב בקשת ברכה לרבי — נוסח, שלבי כתיבה ופ"נ אונליין.',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

const SITE_NAMES = {
  he: 'כתיבה לרבי',
  en: 'Writing to the Rebbe',
  fr: 'Écrire au Rabbi',
  es: 'Escribir al Rebe',
  it: 'Scrivere al Rebbe',
  ru: 'Написать Ребе',
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  const serifClass = locale === 'ru' ? notoSerif.className : frankRuhl.className;
  const siteName = SITE_NAMES[locale] || SITE_NAMES.he;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://writingtotherabbi.com/#website',
        url: 'https://writingtotherabbi.com',
        name: siteName,
        inLanguage: locale,
      },
      {
        '@type': 'Organization',
        '@id': 'https://writingtotherabbi.com/#organization',
        name: siteName,
        url: 'https://writingtotherabbi.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://writingtotherabbi.com/rebbe.webp',
        },
      },
    ],
  };

  return (
    <html lang={locale} dir={dir} className={`${serifClass} ${assistant.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
