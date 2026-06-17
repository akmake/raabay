import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';

export default async function WithLayout({ children }) {
  const t = await getTranslations('layout');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fdfaf5', fontFamily: '"Assistant", system-ui, sans-serif' }}>
      <a href="#main-content" className="skip-to-main">{t('skipToMain')}</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ flexGrow: 1, paddingTop: 60 }}>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
