import PidyonClient from './PidyonClient';

export const metadata = {
  title: 'פדיון נפש לרבי | מדריך מלא — נוסח, הכנה ומשמעות',
  description: 'כל מה שצריך לדעת על פדיון נפש לרבי מליובאוויטש — מהו פ"נ, מתי כותבים, הכנה לפני הכתיבה, הנוסח המקובל ופורמט השם. מדריך חסידי מלא.',
  keywords: ['פדיון נפש', 'פ"נ לרבי', 'כתיבת פ"נ', 'פדיון נפש ליובאוויטש', 'ראש השנה פ"נ', 'נוסח פדיון נפש', 'חב"ד'],
  alternates: { canonical: 'https://raabay.co.il/pidyon' },
  openGraph: {
    title: 'פדיון נפש לרבי | מדריך מלא',
    description: 'כל מה שצריך לדעת על פדיון נפש לרבי — נוסח, הכנה, זמנים מיוחדים ומשמעות.',
    url: 'https://raabay.co.il/pidyon',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function PidyonPage() {
  return <PidyonClient />;
}
