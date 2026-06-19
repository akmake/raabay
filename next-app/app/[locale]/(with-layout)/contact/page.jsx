import ContactClient from '@/app/(with-layout)/contact/ContactClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'contact', '/contact');
}

export default function ContactPage() {
  return <ContactClient />;
}
