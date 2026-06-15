import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const C = {
  bg:       '#ffffff',
  border:   '#e8e0d4',
  ink:      '#1e1a17',
  soft:     '#7a6b5a',
  gold:     '#b5864a',
  goldHov:  '#9a6e38',
  hover:    'rgba(30,26,23,0.05)',
  serif:    '"Frank Ruhl Libre", Georgia, serif',
  sans:     '"Assistant", system-ui, sans-serif',
};

const NAV = [
  { label: 'מכתב לרבי',  to: '/mikhtav' },
  { label: 'פדיון נפש',  to: '/pidyon'  },
  { label: 'איך זה עובד', href: '/#how'  },
];

function NavLink({ label, to, href, active, onClick }) {
  const style = {
    color:          active ? C.ink    : C.soft,
    fontWeight:     active ? 600      : 500,
    background:     active ? C.hover  : 'transparent',
    padding:        '6px 14px',
    borderRadius:   6,
    textDecoration: 'none',
    fontSize:       14.5,
    fontFamily:     C.sans,
    whiteSpace:     'nowrap',
    transition:     'color .15s, background .15s',
    display:        'inline-block',
  };
  const enter = e => { if (!active) { e.currentTarget.style.color = C.ink; e.currentTarget.style.background = C.hover; } };
  const leave = e => { if (!active) { e.currentTarget.style.color = C.soft; e.currentTarget.style.background = 'transparent'; } };

  if (href) return <a href={href} style={style} onMouseEnter={enter} onMouseLeave={leave} onClick={onClick}>{label}</a>;
  return <Link to={to} style={style} onMouseEnter={enter} onMouseLeave={leave} onClick={onClick}>{label}</Link>;
}

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevY, setPrevY]     = useState(0);
  const { pathname }          = useLocation();

  useEffect(() => {
    const fn = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setVisible(y < 56 || y < prevY);
      setPrevY(y);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [prevY]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        dir="rtl"
        role="navigation"
        aria-label="ניווט ראשי"
        style={{
          position:    'fixed', inset: '0 0 auto 0', zIndex: 500,
          height:      60,
          background:           'rgba(255,255,255,0.72)',
          backdropFilter:       'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: `1px solid ${scrolled ? 'rgba(30,26,23,0.10)' : 'rgba(30,26,23,0.06)'}`,
          boxShadow:   scrolled ? '0 2px 20px rgba(30,26,23,0.08)' : 'none',
          fontFamily:  C.sans,
          transform:   visible ? 'translateY(0)' : 'translateY(-100%)',
          transition:  'transform .28s cubic-bezier(.4,0,.2,1), box-shadow .25s, border-color .25s',
        }}
      >
        <div style={{
          maxWidth: 1100, margin: '0 auto', height: '100%',
          padding: '0 28px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}>

          {/* ── לוגו ── */}
          <Link
            to="/"
            aria-label="עמוד הבית — כתיבה לרבי"
            style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}
          >
            <span style={{
              width: 32, height: 32, borderRadius: 8, flexShrink: 0,
              background: C.gold,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: C.serif, fontWeight: 700, fontSize: 17, color: '#fff',
            }}>כ</span>
            <span style={{ fontFamily: C.serif, fontWeight: 700, fontSize: 17.5, color: C.ink, letterSpacing: '0.01em' }}>
              כתיבה לרבי
            </span>
          </Link>

          {/* ── ניווט מרכז ── */}
          <div className="nb-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map(l => (
              <NavLink key={l.to || l.href} {...l} active={!!l.to && pathname === l.to} />
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="nb-cta" style={{ justifySelf: 'end' }}>
            <Link
              to="/write"
              style={{
                display:        'inline-flex', alignItems: 'center', gap: 6,
                background:     C.gold,
                color:          '#fff',
                padding:        '8px 18px', borderRadius: 7,
                textDecoration: 'none', fontWeight: 600, fontSize: 14,
                letterSpacing:  '0.01em',
                transition:     'background .15s, transform .15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = C.goldHov; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = C.gold;    e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              ✦&nbsp;כתיבת מכתב
            </Link>
          </div>

          {/* ── המבורגר (mobile) ── */}
          <button
            className="nb-burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={open}
            aria-controls="nb-mobile"
            style={{
              display: 'none', justifySelf: 'end', gridColumn: '3',
              background: 'none', border: 'none',
              cursor: 'pointer', padding: 6, color: C.ink, lineHeight: 0, borderRadius: 6,
            }}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="nb-mobile"
        dir="rtl"
        aria-hidden={!open}
        style={{
          position: 'fixed', top: 60, right: 0, left: 0, zIndex: 499,
          background:           'rgba(255,255,255,0.88)',
          backdropFilter:       'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${C.border}`,
          overflow: 'hidden',
          maxHeight: open ? 320 : 0,
          opacity:   open ? 1   : 0,
          transition: 'max-height .3s cubic-bezier(.4,0,.2,1), opacity .2s ease',
          pointerEvents: open ? 'auto' : 'none',
          fontFamily: C.sans,
          boxShadow: open ? '0 8px 24px rgba(30,26,23,0.08)' : 'none',
        }}
      >
        <div style={{ padding: '8px 20px 20px' }}>
          {NAV.map(l => (
            <NavLink key={l.to || l.href} {...l} active={!!l.to && pathname === l.to} onClick={() => setOpen(false)} />
          ))}
          <div style={{ height: 1, background: C.border, margin: '10px 0' }} />
          <Link
            to="/write"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: C.gold, color: '#fff',
              padding: '13px 22px', borderRadius: 8,
              textDecoration: 'none', fontWeight: 600, fontSize: 15.5,
            }}
          >
            ✦&nbsp;כתיבת מכתב
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .nb-links  { display: none !important; }
          .nb-cta    { display: none !important; }
          .nb-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
