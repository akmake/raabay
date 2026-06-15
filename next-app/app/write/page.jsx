import WriteClient from './WriteClient';

export const metadata = {
  title: 'כתיבת מכתב לרבי | שלחו מכתב לאוהל הקדוש',
  description: 'כתבו מכתב לרבי מליובאוויטש — בקשה, תפילה, תודה או ברכה. המכתב ישלח לאוהל הקדוש בקווינס, ניו יורק. פשוט, מהיר ופרטי.',
  keywords: ['כתיבת מכתב לרבי', 'מכתב לאוהל', 'שליחת מכתב לרבי', 'בקשה לרבי', 'תפילה לאוהל'],
  alternates: { canonical: 'https://raabay.co.il/write' },
  openGraph: {
    title: 'כתיבת מכתב לרבי',
    description: 'כתבו מכתב לרבי — בקשה, תפילה, תודה או ברכה. המכתב מגיע לאוהל הקדוש.',
    url: 'https://raabay.co.il/write',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function WritePage() {
  return <WriteClient />;
}
