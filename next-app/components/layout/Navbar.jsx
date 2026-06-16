'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  { label: 'צור קשר',    to: '/contact' },
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
  return <Link href={to} style={style} onMouseEnter={enter} onMouseLeave={leave} onClick={onClick}>{label}</Link>;
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(true);
  const [prevY, setPrevY]       = useState(0);
  const pathname                = usePathname();

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
          width: '100%', height: '100%',
          padding: '0 16px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}>

          <Link
            href="/"
            aria-label="עמוד הבית — כתיבה לרבי"
            style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none' }}
          >
            <span style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, overflow: 'hidden', display: 'inline-block' }}>
              <img src="/הרבי.webp" alt="הרבי מליובאוויטש" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </span>
            <span style={{ fontFamily: C.serif, fontWeight: 700, fontSize: 17.5, color: C.ink, letterSpacing: '0.01em' }}>
              כתיבה לרבי
            </span>
          </Link>

          <div className="nb-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map(l => (
              <NavLink key={l.to || l.href} {...l} active={!!l.to && pathname === l.to} />
            ))}
          </div>

          <div className="nb-cta" style={{ justifySelf: 'end' }}>
            <Link
              href="/write"
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
            href="/write"
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
