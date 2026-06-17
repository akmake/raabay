import PidyonClient from '@/app/(with-layout)/pidyon/PidyonClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'כיצד כותבים פדיון נפש לרבי מליובאוויטש',
  description: 'מדריך שלב-אחר-שלב לכתיבת פדיון נפש — נוסח, שלבי הכנה, מתי כותבים.',
  inLanguage: 'he',
  step: [
    { '@type': 'HowToStep', name: 'הכנה — נטילת ידיים', text: 'נוטלים ידיים לפני כתיבת הפ"נ — מעשה של טהרה וכוונה.', position: 1 },
    { '@type': 'HowToStep', name: 'כתיבה לאחר התפילה', text: 'הזמן המומלץ לכתיבה הוא לאחר תפילת שחרית.', position: 2 },
    { '@type': 'HowToStep', name: 'כתיבת הפ"נ בנוסח', text: 'אנא לעורר רחמים רבים על נפש רוח נשמה של [שם] בן/בת [שם האם] — ואחר כך ממשיכים בלשון אישית.', position: 3 },
    { '@type': 'HowToStep', name: 'שליחה לאוהל', text: 'הפ"נ מודפס ונשלח פיזית לציון הרבי באוהל הקדוש בקווינס, ניו יורק.', position: 4 },
  ],
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'כיצד כותבים פדיון נפש | נוסח פ"נ לרבי מליובאוויטש',
    description: 'כל מה שצריך לדעת על כתיבת פדיון נפש לרבי מליובאוויטש — נוסח, הכנה, זמנים מיוחדים. מדריך מלא ומפורט.',
    alternates: getAlternates(locale, '/pidyon'),
    openGraph: {
      type: 'article',
      title: 'כיצד כותבים פדיון נפש | נוסח פ"נ לרבי',
      description: 'נוסח פדיון נפש, שלבי ההכנה וזמנים מיוחדים — מדריך מלא.',
      url: buildUrl(locale, '/pidyon'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function PidyonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PidyonClient />
    </>
  );
}
