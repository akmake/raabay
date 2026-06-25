import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import { useTranslations } from '@/i18n';

// Shared chrome for the content pages (mikhtav, pidyon, maala, ohel, contact, legal).
// Mirrors the old next-app "(with-layout)" route group.
export default function Layout() {
  const t = useTranslations('layout');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#fdfaf5',
        fontFamily: '"Assistant", system-ui, sans-serif',
      }}
    >
      <a href="#main-content" className="skip-to-main">
        {t('skipToMain')}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ flexGrow: 1, paddingTop: 60 }}>
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
