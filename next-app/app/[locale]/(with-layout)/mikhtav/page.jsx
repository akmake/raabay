import MikhtavClient from '@/app/(with-layout)/mikhtav/MikhtavClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'איך כותבים מכתב לרבי מליובאוויטש',
  description: 'מדריך שלב-אחר-שלב לכתיבת מכתב לרבי מליובאוויטש — נוסח, שלבי הכנה וכתיבה.',
  inLanguage: 'he',
  step: [
    { '@type': 'HowToStep', name: 'הכנה רוחנית', text: 'נטילת ידיים, רגע של כוונה, נתינת צדקה וקבלת החלטה טובה.', position: 1 },
    { '@type': 'HowToStep', name: 'פתיחת המכתב', text: 'פותחים ב"לכבוד כבוד קדושת אדמו"ר" ומציינים שם עברי ושם האם.', position: 2 },
    { '@type': 'HowToStep', name: 'כתיבת הבקשה', text: 'כותבים בלשון חופשית — בקשה, תפילה, תודה או שאלה.', position: 3 },
    { '@type': 'HowToStep', name: 'שליחה לאוהל הקדוש', text: 'המכתב מודפס ונשלח פיזית לציון הרבי באוהל הקדוש בקווינס, ניו יורק.', position: 4 },
  ],
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'איך כותבים מכתב לרבי | נוסח כתיבה לרבי מליובאוויטש',
    description: 'איך כותבים מכתב לרבי מליובאוויטש — נוסח מכתב לרבי, שלבי הכתיבה, מה כותבים ואיך. מדריך מלא.',
    alternates: getAlternates(locale, '/mikhtav'),
    openGraph: {
      type: 'article',
      title: 'איך כותבים מכתב לרבי | נוסח ושלבי הכתיבה',
      description: 'נוסח מכתב לרבי מליובאוויטש, שלבי הכתיבה ומה כותבים — מדריך מלא.',
      url: buildUrl(locale, '/mikhtav'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function MikhtavPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MikhtavClient />
    </>
  );
}
