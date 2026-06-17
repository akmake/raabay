import WritePidyonClient from '@/app/write-pidyon/WritePidyonClient';

export const metadata = {
  title: 'כתיבת פדיון נפש | שלחו פ"נ לרבי מליובאוויטש',
  description: 'כתבו פדיון נפש לרבי מליובאוויטש בנוסח המקובל. הפ"נ ישלח לאוהל הקדוש בקווינס, ניו יורק.',
  alternates: { canonical: 'https://writingtotherabbi.com/write-pidyon' },
  openGraph: {
    type: 'article',
    title: 'כתיבת פדיון נפש לרבי',
    description: 'כתבו פ"נ לרבי מליובאוויטש — הפ"נ ישלח לאוהל הקדוש בקווינס.',
    url: 'https://writingtotherabbi.com/write-pidyon',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
  },
};

export default function WritePidyonPage() {
  return <WritePidyonClient />;
}
