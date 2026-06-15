import Link from 'next/link';

const V = {
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans:  '"Assistant", system-ui, sans-serif',
};

export default function Footer() {
  return (
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

          <div>
            <div style={{ fontFamily: V.serif, fontSize: 20, color: '#fff', fontWeight: 700, marginBottom: 6 }}>כתיבה לרבי</div>
            <div style={{ color: '#6b6460', fontSize: 13, lineHeight: 1.6 }}>We want Messiah now.</div>
          </div>

          <nav aria-label="ניווט תחתון" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/mikhtav" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>על כתיבת מכתב</Link>
            <Link href="/pidyon"  style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>פדיון נפש</Link>
            <Link href="/write"   style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>כתיבת מכתב</Link>
          </nav>

          <nav aria-label="מידע משפטי ונגישות" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Link href="/accessibility" style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>הצהרת נגישות</Link>
            <Link href="/privacy"       style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>מדיניות פרטיות</Link>
            <Link href="/terms"         style={{ color: '#9e9490', textDecoration: 'none', fontSize: 13 }}>תנאי שימוש</Link>
          </nav>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10, fontSize: 12, color: '#5c5550' }}>
          <span>© {new Date().getFullYear()} כתיבה לרבי. כל הזכויות שמורות.</span>
          <span>האתר עומד בתקן WCAG 2.1 AA ובתקנות הנגישות הישראליות</span>
        </div>
      </div>
    </footer>
  );
}
