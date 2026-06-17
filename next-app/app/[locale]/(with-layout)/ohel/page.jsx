import OhelClient from '@/app/(with-layout)/ohel/OhelClient';

export const metadata = {
  title: 'מהו האוהל הקדוש | ציון הרבי מליובאוויטש בקווינס',
  description: 'האוהל הוא מקום קבורת הרבי מליובאוויטש בקווינס, ניו יורק. מאות אלפי אנשים מכל העולם פונים אליו בתפילה ובקשה — 24 שעות ביממה, 7 ימים בשבוע.',
  alternates: { canonical: 'https://writingtotherabbi.com/ohel' },
  openGraph: {
    type: 'article',
    title: 'מהו האוהל הקדוש | ציון הרבי מליובאוויטש',
    description: 'מקום הקבורה של הרבי מליובאוויטש — שער להתקשרות ותפילה, פתוח 24 שעות ביממה.',
    url: 'https://writingtotherabbi.com/ohel',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
  },
};

export default function OhelPage() {
  return <OhelClient />;
}
