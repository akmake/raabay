import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const V = {
  ink: '#0f1c33', inkSoft: '#46556f',
  navy: '#101e38', gold: '#c9a85c',
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans: '"Assistant", system-ui, sans-serif',
};

const LINKS = [
  { label: 'איך זה עובד', href: '/#how' },
  { label: 'אודות', href: '/#about' },
  { label: 'איך כותבים פ"נ', href: '/pidyon', isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <nav
        dir="rtl"
        style={{
          position: 'fixed', top: 0, right: 0, left: 0, zIndex: 200,
          height: 68,
          fontFamily: V.sans,
          background: scrolled
            ? 'rgba(255,255,255,0.88)'
            : 'rgba(255,255,255,0.60)',
          backdropFilter: 'blur(22px) saturate(180%)',
          WebkitBackdropFilter: 'blur(22px) saturate(180%)',
          borderBottom: scrolled
            ? '1px solid rgba(15,28,51,0.09)'
            : '1px solid rgba(255,255,255,0.35)',
          boxShadow: scrolled ? '0 4px 32px rgba(15,28,51,0.08)' : 'none',
          transition: 'background .35s, box-shadow .35s, border-color .35s',
        }}
      >
        <div style={{
          padding: '0 32px',
          height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <span style={{
              width: 38, height: 38, borderRadius: 10,
              background: V.gold, color: V.navy,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: V.serif, fontWeight: 700, fontSize: 21,
              boxShadow: '0 2px 10px rgba(201,168,92,0.35)',
            }}>א</span>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 22, color: V.ink }}>כתיבה לרבי</span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="ohel-desktop">
            {LINKS.map(l => {
              const linkStyle = {
                color: V.inkSoft, padding: '8px 18px', borderRadius: 8,
                textDecoration: 'none', fontWeight: 500, fontSize: 15.5,
                transition: 'color .2s, background .2s',
              };
              const enter = e => { e.currentTarget.style.color = V.ink; e.currentTarget.style.background = 'rgba(15,28,51,.06)'; };
              const leave = e => { e.currentTarget.style.color = V.inkSoft; e.currentTarget.style.background = 'transparent'; };
              return l.isRoute
                ? <Link key={l.href} to={l.href} style={linkStyle} onMouseEnter={enter} onMouseLeave={leave}>{l.label}</Link>
                : <a key={l.href} href={l.href} style={linkStyle} onMouseEnter={enter} onMouseLeave={leave}>{l.label}</a>;
            })}

            <div style={{ width: 1, height: 22, background: 'rgba(15,28,51,.12)', margin: '0 10px' }} />

            <Link
              to="/write"
              style={{
                background: V.navy, color: '#fff',
                padding: '10px 24px', borderRadius: 9,
                textDecoration: 'none', fontWeight: 600, fontSize: 14.5,
                boxShadow: '0 2px 12px rgba(15,28,51,0.20)',
                transition: 'opacity .2s, transform .2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '.87'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              כתיבת מכתב ←
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="ohel-burger"
            style={{
              display: 'none', background: 'none', border: 'none',
              cursor: 'pointer', padding: 6, color: V.ink, lineHeight: 0,
            }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          dir="rtl"
          style={{
            position: 'fixed', top: 68, right: 0, left: 0, zIndex: 199,
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(15,28,51,.09)',
            padding: '16px 24px 28px',
            fontFamily: V.sans,
            boxShadow: '0 8px 32px rgba(15,28,51,.1)',
          }}
        >
          {LINKS.map(l => {
            const mStyle = {
              display: 'block', color: V.inkSoft,
              padding: '14px 4px', textDecoration: 'none',
              fontWeight: 500, fontSize: 16,
              borderBottom: '1px solid rgba(15,28,51,.07)',
            };
            return l.isRoute
              ? <Link key={l.href} to={l.href} onClick={() => setOpen(false)} style={mStyle}>{l.label}</Link>
              : <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={mStyle}>{l.label}</a>;
          })}
          <Link
            to="/write"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', marginTop: 16,
              background: V.navy, color: '#fff',
              padding: '14px 22px', borderRadius: 9,
              textDecoration: 'none', fontWeight: 600,
              fontSize: 15, textAlign: 'center',
            }}
          >
            כתיבת מכתב ←
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .ohel-desktop { display: none !important; }
          .ohel-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
