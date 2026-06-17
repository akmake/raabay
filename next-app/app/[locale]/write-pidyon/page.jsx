import WritePidyonClient from '@/app/write-pidyon/WritePidyonClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'כתיבת פדיון נפש | שלחו פ"נ לרבי מליובאוויטש',
    description: 'כתבו פדיון נפש לרבי מליובאוויטש בנוסח המקובל. הפ"נ ישלח לאוהל הקדוש בקווינס, ניו יורק.',
    alternates: getAlternates(locale, '/write-pidyon'),
    openGraph: {
      type: 'article',
      title: 'כתיבת פדיון נפש לרבי',
      description: 'כתבו פ"נ לרבי מליובאוויטש — הפ"נ ישלח לאוהל הקדוש בקווינס.',
      url: buildUrl(locale, '/write-pidyon'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function WritePidyonPage() {
  return <WritePidyonClient />;
}
