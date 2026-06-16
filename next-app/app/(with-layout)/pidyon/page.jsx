import PidyonClient from './PidyonClient';

export const metadata = {
  title: 'נוסח כתיבת פ"נ לרבי | פדיון נפש לרבי מליובאוויטש — מדריך מלא',
  description: 'נוסח כתיבת פ"נ לרבי מליובאוויטש — "אנא לעורר רחמים רבים". מתי כותבים פדיון נפש, הכנה לכתיבה, פורמט השם ושלבי הכתיבה. מדריך חסידי מלא.',
  keywords: [
    'נוסח כתיבת פן לרבי', 'פדיון נפש לרבי', 'פ"נ לרבי', 'כתיבת פ"נ',
    'נוסח פדיון נפש ליובאוויטש', 'שלח מכתב בקשת ברכה לרבי מליובאוויטש',
    'בקשת ברכה מהרבי מליובאוויטש', 'ראש השנה פ"נ', 'חב"ד',
  ],
  alternates: { canonical: 'https://raabay.co.il/pidyon' },
  openGraph: {
    title: 'נוסח כתיבת פ"נ לרבי | פדיון נפש מליובאוויטש',
    description: 'נוסח פדיון נפש לרבי, שלבי הכתיבה, מתי כותבים ומה כותבים.',
    url: 'https://raabay.co.il/pidyon',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function PidyonPage() {
  return <PidyonClient />;
}
