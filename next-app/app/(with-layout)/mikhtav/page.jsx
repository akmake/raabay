import MikhtavClient from './MikhtavClient';

export const metadata = {
  title: 'איך כותבים מכתב לרבי | נוסח כתיבה לרבי מליובאוויטש',
  description: 'איך כותבים מכתב לרבי מליובאוויטש — נוסח מכתב לרבי, שלבי הכתיבה, מה כותבים ואיך. כתיבה לרבי וקבלת ברכה ועצה. מדריך מלא.',
  keywords: [
    'איך כותבים מכתב לרבי', 'נוסח כתיבה לרבי', 'נוסח מכתב לרבי מלובביץ',
    'שלבי הכתיבה לרבי', 'כתיבת מכתב לרבי', 'מה כותבים לרבי',
    'כתיבה לרבי וקבלת ברכה ועצה', 'ליובאוויטש', 'חב"ד',
  ],
  alternates: { canonical: 'https://writingtotherabbi.com/mikhtav' },
  openGraph: {
    title: 'איך כותבים מכתב לרבי | נוסח ושלבי הכתיבה',
    description: 'נוסח מכתב לרבי מליובאוויטש, שלבי הכתיבה ומה כותבים — מדריך מלא.',
    url: 'https://writingtotherabbi.com/mikhtav',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function MikhtavPage() {
  return <MikhtavClient />;
}
