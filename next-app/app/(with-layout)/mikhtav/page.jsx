import MikhtavClient from './MikhtavClient';

export const metadata = {
  title: 'כיצד כותבים מכתב לרבי | המנהג, הנוסח והמשמעות',
  description: 'מדריך מלא לכתיבת מכתב לרבי מליובאוויטש — מה כותבים, כיצד כותבים, ומה ההבדל בין מכתב לפדיון נפש. הרבי ביקש לכתוב על כל דבר, גם על בשורות טובות.',
  keywords: ['מכתב לרבי', 'כתיבת מכתב לרבי', 'כיצד כותבים לרבי', 'ליובאוויטש', 'חב"ד', 'מה כותבים לרבי'],
  alternates: { canonical: 'https://raabay.co.il/mikhtav' },
  openGraph: {
    title: 'כיצד כותבים מכתב לרבי',
    description: 'מדריך מלא — מה כותבים, כיצד כותבים, ולמה המילים מגיעות גם היום.',
    url: 'https://raabay.co.il/mikhtav',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function MikhtavPage() {
  return <MikhtavClient />;
}
