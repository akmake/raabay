import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AccessibilityWidget from '@/components/AccessibilityWidget';

export default function WithLayout({ children }) {
  return (
    <div dir="rtl" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fdfaf5', fontFamily: '"Assistant", system-ui, sans-serif' }}>
      <a href="#main-content" className="skip-to-main">דלג לתוכן הראשי</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ flexGrow: 1, paddingTop: 60 }}>
        {children}
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
