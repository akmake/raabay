import ContactClient from '@/app/(with-layout)/contact/ContactClient';
import { buildUrl, getAlternates } from '@/app/seo-utils';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: 'צור קשר | כתיבה לרבי',
    description: 'צרו איתנו קשר — לשאלות, הצעות, שיתוף פעולה ותמיכה בפרויקט.',
    alternates: getAlternates(locale, '/contact'),
    openGraph: {
      type: 'article',
      title: 'צור קשר | כתיבה לרבי',
      description: 'לשאלות, הצעות ושיתוף פעולה — צרו קשר.',
      url: buildUrl(locale, '/contact'),
      images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
