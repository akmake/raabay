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
  alternates: { canonical: 'https://raabay.co.il' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    title: 'כתיבה לרבי מליובאוויטש | מכתב לאוהל',
    description: 'שלחו מכתב לרבי — בקשה, תפילה, תודה או ברכה.',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כתיבה לרבי מליובאוויטש',
    description: 'שלחו מכתב לרבי — בקשה, תפילה, תודה או ברכה.',
    images: ['/הרבי.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://raabay.co.il/#website',
      url: 'https://raabay.co.il',
      name: 'כתיבה לרבי',
      description: 'שלחו מכתב לרבי מליובאוויטש — בקשה, תפילה, תודה או ברכה',
      inLanguage: 'he',
    },
    {
      '@type': 'Organization',
      '@id': 'https://raabay.co.il/#organization',
      name: 'כתיבה לרבי',
      url: 'https://raabay.co.il',
      logo: {
        '@type': 'ImageObject',
        url: 'https://raabay.co.il/%D7%94%D7%A8%D7%91%D7%99.webp',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'מהו האוהל הקדוש?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'האוהל הוא מקום קבורת הרבי מליובאוויטש בקווינס, ניו יורק. מאות אלפי אנשים מכל העולם מגיעים ופונים אליו, פתוח 24 שעות ביממה.',
          },
        },
        {
          '@type': 'Question',
          name: 'כיצד כותבים מכתב לרבי?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'כותבים בלשון חופשית — בקשה, תפילה, תודה, שאלה. אין נוסח נכון ואין מילים שגויות. הרבי ביקש לפרט ולכתוב על כל דבר, גם על בשורות טובות.',
          },
        },
        {
          '@type': 'Question',
          name: 'מהו פדיון נפש?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'פדיון נפש (פ"נ) הוא מכתב בקשת ברכה בנוסח מסורתי — "אנא לעורר רחמים רבים על [שם] בן/בת [שם האם]". נהוג לכתוב בערב ראש השנה, יום הולדת ובמועדים חסידיים.',
          },
        },
        {
          '@type': 'Question',
          name: 'האם המכתב מגיע לאוהל?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'כן. כל מכתב מודפס ונשלח פיזית לאוהל הקדוש — שם הוא מונח ליד ציון הרבי בקווינס, ניו יורק.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
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
