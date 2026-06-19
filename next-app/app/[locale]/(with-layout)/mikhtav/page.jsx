import MikhtavClient from '@/app/(with-layout)/mikhtav/MikhtavClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'mikhtav', '/mikhtav', 'article');
}

export default function MikhtavPage() {
  return <MikhtavClient />;
}
