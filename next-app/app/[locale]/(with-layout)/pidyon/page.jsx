import PidyonClient from '@/app/(with-layout)/pidyon/PidyonClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'pidyon', '/pidyon', 'article');
}

export default function PidyonPage() {
  return <PidyonClient />;
}
