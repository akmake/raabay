import MaalaClient from './MaalaClient';

export const metadata = {
  title: 'מעלת הכתיבה לרבי | למה כותבים מכתב לרבי מליובאוויטש',
  description: 'מעלת הכתיבה לרבי מליובאוויטש — הרבי קרא כל מכתב בעצמו, הפ"נ פועל עוד לפני שמגיע, וסיפורים מרגשים על כוח הכתיבה. "כל המפרט הרי זה משובח."',
  keywords: [
    'מעלת הכתיבה לרבי', 'כתיבה לרבי', 'למה כותבים לרבי', 'פדיון נפש לרבי',
    'הרבי קרא כל מכתב', 'כוח הכתיבה לרבי', 'כותב להקב"ה', 'ליובאוויטש', 'חב"ד',
  ],
  alternates: { canonical: 'https://raabay.co.il/maala' },
  openGraph: {
    title: 'מעלת הכתיבה לרבי מליובאוויטש',
    description: 'הרבי קרא כל מכתב בעצמו. הפ"נ פועל עוד לפני שמגיע. סיפורים אמיתיים על כוח הכתיבה לרבי.',
    url: 'https://raabay.co.il/maala',
    images: [{ url: '/הרבי.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function MaalaPage() {
  return <MaalaClient />;
}
