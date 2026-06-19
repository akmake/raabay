import OhelClient from '@/app/(with-layout)/ohel/OhelClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'ohel', '/ohel', 'article');
}

export default function OhelPage() {
  return <OhelClient />;
}
