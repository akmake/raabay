import WriteClient from '@/app/write/WriteClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'שלח מכתב לרבי מליובאוויטש אונליין | כתיבת מכתב לרבי',
    description: 'שלח מכתב בקשת ברכה לרבי מליובאוויטש אונליין — המכתב מודפס ונשלח לאוהל הקדוש בקווינס. פשוט, מהיר ופרטי.',
    alternates: getAlternates(locale, '/write'),
    openGraph: {
      type: 'article',
      title: 'שלח מכתב לרבי מליובאוויטש אונליין',
      description: 'כתוב ושלח מכתב בקשת ברכה לרבי — המכתב מגיע לאוהל הקדוש.',
      url: buildUrl(locale, '/write'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function WritePage() {
  return <WriteClient />;
}
