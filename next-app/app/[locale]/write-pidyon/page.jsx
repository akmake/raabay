import WritePidyonClient from '@/app/write-pidyon/WritePidyonClient';
import { createPageMetadata } from '@/app/seo-metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return createPageMetadata(locale, 'writePidyon', '/write-pidyon');
}

export default function WritePidyonPage() {
  return <WritePidyonClient />;
}
