import ContactClient from '@/app/(with-layout)/contact/ContactClient';

export const metadata = {
  title: 'צור קשר | כתיבה לרבי',
  description: 'צרו איתנו קשר — לשאלות, הצעות, שיתוף פעולה ותמיכה בפרויקט.',
  alternates: { canonical: 'https://writingtotherabbi.com/contact' },
  openGraph: {
    type: 'article',
    title: 'צור קשר | כתיבה לרבי',
    description: 'לשאלות, הצעות ושיתוף פעולה — צרו קשר.',
    url: 'https://writingtotherabbi.com/contact',
    images: [{ url: '/rebbe.webp', alt: 'הרבי מליובאוויטש', width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
