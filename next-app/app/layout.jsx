import './globals.css';
import Providers from './providers';

export const metadata = {
  metadataBase: new URL('https://raabay.co.il'),
  title: {
    default: 'כתיבת מכתב לרבי מליובאוויטש | בקשת ברכה לאוהל | מכתב לרבי אונליין',
    template: '%s | כתיבה לרבי',
  },
  description:
    'שלחו מכתב בקשת ברכה לרבי מליובאוויטש — כתיבה לרבי וקבלת ברכה ועצה. נוסח מכתב לרבי, נוסח פ"נ, שלבי הכתיבה — הכל במקום אחד. מכתב לרבי אונליין.',
  keywords: [
    'מכתב לרבי', 'כתיבה לרבי', 'כתיבת מכתב לרבי', 'מכתב לרבי אונליין',
    'שלח מכתב בקשת ברכה לרבי מליובאוויטש', 'בקשת ברכה מהרבי מליובאוויטש',
    'כתיבה לרבי וקבלת ברכה ועצה', 'איך כותבים מכתב לרבי',
    'נוסח כתיבה לרבי', 'נוסח מכתב לרבי מלובביץ',
    'שלבי הכתיבה לרבי', 'אוהל', 'פדיון נפש', 'נוסח פן לרבי',
    'ליובאוויטש', 'חב״ד',
  ],
  icons: {
    icon: '/הרבי.webp',
    apple: '/הרבי.webp',
  },
  alternates: { canonical: 'https://raabay.co.il' },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    title: 'כתיבת מכתב לרבי מליובאוויטש | בקשת ברכה לאוהל',
    description: 'שלחו מכתב בקשת ברכה לרבי מליובאוויטש — נוסח מכתב, שלבי כתיבה, פ"נ. הכל אונליין.',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'כתיבת מכתב לרבי מליובאוויטש',
    description: 'שלחו מכתב בקשת ברכה לרבי — נוסח, שלבי כתיבה ופ"נ אונליין.',
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
      name: 'כתיבה לרבי — מכתב לרבי מליובאוויטש אונליין',
      description: 'שלחו מכתב בקשת ברכה לרבי מליובאוויטש — כתיבה לרבי וקבלת ברכה ועצה',
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
          name: 'איך כותבים מכתב לרבי מליובאוויטש?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'כותבים בלשון חופשית — בקשה, תפילה, תודה או שאלה. פותחים ב"לכבוד כבוד קדושת אדמו"ר", מציינים שם עברי ושם האם, וכותבים את הבקשה. אין נוסח נכון ואין מילים שגויות — הרבי ביקש לפרט ולכתוב על כל דבר.',
          },
        },
        {
          '@type': 'Question',
          name: 'מהו נוסח כתיבת פ"נ (פדיון נפש) לרבי?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'נוסח פדיון נפש לרבי: "אנא לעורר רחמים רבים על [שם] בן/בת [שם האם]" — ואחר כך ממשיכים לכתוב את הבקשה האישית. כותבים בגוף שלישי, ללא "אני".',
          },
        },
        {
          '@type': 'Question',
          name: 'מהם שלבי הכתיבה לרבי?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'שלבי הכתיבה לרבי: א. נטילת ידיים והכנה רוחנית. ב. קבלת החלטה טובה — "כלי" לברכה. ג. כתיבת המכתב בלשון חופשית עם שם עברי ושם האם. ד. שליחה — המכתב מודפס ומונח בציון הקדוש הקדוש.',
          },
        },
        {
          '@type': 'Question',
          name: 'כיצד שולחים מכתב בקשת ברכה לרבי מליובאוויטש?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'נכנסים לאתר raabay.co.il, כותבים את המכתב או הפ"נ אונליין, ושולחים. המכתב מודפס ונשלח פיזית לאוהל הקדוש בקווינס, ניו יורק — שם הוא מונח על ציון הרבי.',
          },
        },
        {
          '@type': 'Question',
          name: 'מה ההבדל בין מכתב לרבי לפדיון נפש?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'מכתב לרבי הוא כתיבה חופשית בכל לשון ובכל עת. פדיון נפש (פ"נ) הוא כתיבה בנוסח מסורתי מובנה, נהוג בזמנים מיוחדים כמו ערב ראש השנה, יום הולדת וימים חסידיים.',
          },
        },
        {
          '@type': 'Question',
          name: 'האם ניתן לשלוח מכתב לרבי מליובאוויטש אונליין?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'כן. באתר raabay.co.il ניתן לכתוב ולשלוח מכתב לרבי מליובאוויטש אונליין. המכתב מודפס ונשלח פיזית לאוהל הקדוש בקווינס, ניו יורק.',
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
