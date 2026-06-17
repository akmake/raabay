import MaalaClient from '@/app/(with-layout)/maala/MaalaClient';

export const metadata = {
  title: 'מעלת הכתיבה לרבי | למה לכתוב מכתב לרבי מליובאוויטש',
  description: 'מדוע מאות אלפי אנשים כותבים לרבי מליובאוויטש — המשמעות הרוחנית של הכתיבה, מה שהרבי אמר, וסיפורים.',
  alternates: { canonical: 'https://writingtotherabbi.com/maala' },
  openGraph: {
    type: 'article',
    title: 'מעלת הכתיבה לרבי מליובאוויטש',
    description: 'המשמעות הרוחנית של כתיבת מכתב לרבי — מה שהרבי אמר וסיפורים.',
    url: 'https://writingtotherabbi.com/maala',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
  },
};

export default function MaalaPage() {
  return <MaalaClient />;
}
