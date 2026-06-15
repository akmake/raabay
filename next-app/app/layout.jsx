import './globals.css';
import Providers from './providers';

export const metadata = {
  metadataBase: new URL('https://raabay.co.il'),
  title: {
    default: 'כתיבה לרבי מליובאוויטש | מכתב לאוהל | בקשה וברכה',
    template: '%s | כתיבה לרבי',
  },
  description:
    'שלחו מכתב לרבי מליובאוויטש — בקשה, תפילה, תודה או ברכה. אלפי אנשים מכל העולם ממשיכים לכתוב לרבי דרך האוהל.',
  keywords: ['מכתב לרבי', 'כתיבה לרבי', 'אוהל', 'פדיון נפש', 'ברכה מהרבי', 'ליובאוויטש', 'חב״ד'],
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    title: 'כתיבה לרבי מליובאוויטש | מכתב לאוהל',
    description: 'שלחו מכתב לרבי — בקשה, תפילה, תודה או ברכה.',
    images: [{ url: '/הרבי.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כתיבה לרבי מליובאוויטש',
    description: 'שלחו מכתב לרבי — בקשה, תפילה, תודה או ברכה.',
    images: ['/הרבי.webp'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
