import OhelClient from './OhelClient';

export const metadata = {
  title: 'מהו האוהל הקדוש | ציון הרבי מליובאוויטש בקווינס',
  description: 'האוהל הוא מקום קבורת הרבי מליובאוויטש בקווינס, ניו יורק. מאות אלפי אנשים מכל העולם פונים אליו בתפילה ובקשה — 24 שעות ביממה, 7 ימים בשבוע.',
  keywords: ['אוהל', 'ציון הרבי', 'אוהל הרבי', 'קווינס', 'ליובאוויטש', 'חב"ד', 'תפילה באוהל', 'מקום הרבי'],
  alternates: { canonical: 'https://raabay.co.il/ohel' },
  openGraph: {
    title: 'מהו האוהל הקדוש | ציון הרבי מליובאוויטש',
    description: 'מקום הקבורה של הרבי מליובאוויטש — שער להתקשרות ותפילה, פתוח 24 שעות ביממה.',
    url: 'https://raabay.co.il/ohel',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש' }],
  },
};

export default function OhelPage() {
  return <OhelClient />;
}
