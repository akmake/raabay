import MaalaClient from '@/app/(with-layout)/maala/MaalaClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'maala', '/maala', 'article');
}

export default function MaalaPage() {
  return <MaalaClient />;
}
