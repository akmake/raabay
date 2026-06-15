import WritePidyonClient from './WritePidyonClient';

export const metadata = {
  title: 'כתיבת פדיון נפש | שלחו פ"נ לרבי מליובאוויטש',
  description: 'כתבו פדיון נפש לרבי מליובאוויטש בנוסח המקובל. הפ"נ ישלח לאוהל הקדוש בקווינס, ניו יורק — בהכנה מלאה וכוונה אמיתית.',
  keywords: ['כתיבת פדיון נפש', 'פ"נ לרבי', 'שליחת פ"נ', 'פדיון נפש אונליין', 'פ"נ לאוהל'],
  alternates: { canonical: 'https://raabay.co.il/write-pidyon' },
  openGraph: {
    title: 'כתיבת פדיון נפש לרבי',
    description: 'כתבו פ"נ לרבי מליובאוויטש — הפ"נ ישלח לאוהל הקדוש בקווינס.',
    url: 'https://raabay.co.il/write-pidyon',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function WritePidyonPage() {
  return <WritePidyonClient />;
}
