import { Outlet, Link } from 'react-router-dom';
import Navbar from './Navbar';
import AccessibilityWidget from '../AccessibilityWidget';

const V = {
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans: '"Assistant", system-ui, sans-serif',
};

export default function Layout() {
  return (
    <div dir="rtl" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fdfaf5', fontFamily: V.sans }}>

      {/* קישור דלג לתוכן — נגישות */}
      <a href="#main-content" className="skip-to-main">
        דלג לתוכן הראשי
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} style={{ flexGrow: 1, paddingTop: 60 }}>
        <Outlet />
      </main>

      <footer
        dir="rtl"
        role="contentinfo"
        style={{
          background: '#1e1a17',
          color: '#9e9490',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '40px 24px 28px',
          fontFamily: V.sans,
          fontSize: 14,
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 28, marginBottom: 28 }}>

            {/* זהות האתר */}
            <div>
              <div style={{ fontFamily: V.serif, fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 6 }}>כתיבה לרבי</div>
              <div style={{ color: '#6b6460', fontSize: 13, lineHeight: 1.6 }}>
                מקום לכתוב · לבקש · להתחבר
              </div>
            </div>

            {/* קישורי ניווט משניים */}
            <nav aria-label="ניווט תחתון" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/mikhtav" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >על כתיבת מכתב</Link>
              <Link to="/pidyon" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >פדיון נפש</Link>
              <Link to="/write" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >כתיבת מכתב</Link>
            </nav>

            {/* קישורים משפטיים */}
            <nav aria-label="מידע משפטי ונגישות" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <Link to="/accessibility" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >הצהרת נגישות</Link>
              <Link to="/privacy" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >מדיניות פרטיות</Link>
              <Link to="/terms" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}
                onFocus={e => e.target.style.color = '#b5864a'}
                onBlur={e => e.target.style.color = '#9e9490'}
              >תנאי שימוש</Link>
            </nav>
          </div>

          {/* שורת תחתית */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10, fontSize: 12, color: '#5c5550' }}>
            <span>© {new Date().getFullYear()} כתיבה לרבי. כל הזכויות שמורות.</span>
            <span>האתר עומד בתקן WCAG 2.1 AA ובתקנות הנגישות הישראליות</span>
          </div>
        </div>
      </footer>

      {/* ווידג׳ט נגישות צף */}
      <AccessibilityWidget />
    </div>
  );
}
