import WriteClient from '@/app/write/WriteClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'write', '/write');
}

export default function WritePage() {
  return <WriteClient />;
}
