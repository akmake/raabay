import MaalaClient from '@/app/(with-layout)/maala/MaalaClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'מעלת הכתיבה לרבי | למה לכתוב מכתב לרבי מליובאוויטש',
    description: 'מדוע מאות אלפי אנשים כותבים לרבי מליובאוויטש — המשמעות הרוחנית של הכתיבה, מה שהרבי אמר, וסיפורים.',
    alternates: getAlternates(locale, '/maala'),
    openGraph: {
      type: 'article',
      title: 'מעלת הכתיבה לרבי מליובאוויטש',
      description: 'המשמעות הרוחנית של כתיבת מכתב לרבי — מה שהרבי אמר וסיפורים.',
      url: buildUrl(locale, '/maala'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function MaalaPage() {
  return <MaalaClient />;
}
