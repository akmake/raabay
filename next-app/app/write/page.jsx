import WriteClient from './WriteClient';

export const metadata = {
  title: 'שלח מכתב לרבי מליובאוויטש אונליין | כתיבת מכתב לרבי',
  description: 'שלח מכתב בקשת ברכה לרבי מליובאוויטש אונליין — כתיבה לרבי וקבלת ברכה ועצה. המכתב מודפס ונשלח לאוהל הקדוש בקווינס. פשוט, מהיר ופרטי.',
  keywords: [
    'מכתב לרבי אונליין', 'שלח מכתב לרבי', 'שלח מכתב בקשת ברכה לרבי מליובאוויטש',
    'כתיבת מכתב לרבי', 'בקשת ברכה מהרבי מליובאוויטש',
    'כתיבה לרבי וקבלת ברכה ועצה', 'מכתב לאוהל',
  ],
  alternates: { canonical: 'https://writingtotherabbi.com/write' },
  openGraph: {
    title: 'שלח מכתב לרבי מליובאוויטש אונליין',
    description: 'כתוב ושלח מכתב בקשת ברכה לרבי — המכתב מגיע לאוהל הקדוש.',
    url: 'https://writingtotherabbi.com/write',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function WritePage() {
  return <WriteClient />;
}
