import { useState, useEffect, useRef } from 'react';
import Image from '@/components/Image';
import { Menu, X, Globe } from 'lucide-react';
import { useLocale, useTranslations } from '@/i18n';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { MANUAL_LOCALE_COOKIE } from '@/i18n/locale-preference';

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

function NavLink({ label, to, href, active, onClick }) {
  const style = {
    color:          active ? C.ink   : C.soft,
    fontWeight:     active ? 600     : 500,
    background:     active ? C.hover : 'transparent',
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

function LangSwitcher({ flat = false }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('langSwitcher');

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLocale = (newLocale) => {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${MANUAL_LOCALE_COOKIE}=${newLocale}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${secure}`;
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  if (flat) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, padding: '2px 0' }}>
        {routing.locales.map(l => (
          <button
            key={l}
            onClick={() => switchLocale(l)}
            aria-current={l === locale ? 'true' : undefined}
            style={{
              padding: '6px 14px',
              background: l === locale ? C.gold : 'transparent',
              color: l === locale ? '#fff' : C.soft,
              border: `1px solid ${l === locale ? C.gold : C.border}`,
              borderRadius: 100,
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: l === locale ? 600 : 400,
              fontFamily: C.sans,
              transition: 'all .15s',
            }}
          >
            {t(l)}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        title={t('label')}
        aria-label={t('label')}
        aria-expanded={open}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: 'none', border: `1px solid ${C.border}`,
          borderRadius: 6, padding: '6px 10px', cursor: 'pointer',
          color: C.soft, fontSize: 13, fontFamily: C.sans, fontWeight: 500,
        }}
      >
        <Globe size={14} aria-hidden="true" />
        {t(locale)}
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)',
          right: 0,
          background: '#fff', border: `1px solid ${C.border}`,
          borderRadius: 8, boxShadow: '0 8px 24px rgba(30,26,23,0.12)',
          minWidth: 150, zIndex: 600, overflow: 'hidden',
        }}>
          {routing.locales.map(l => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                width: '100%', textAlign: 'start',
                padding: '10px 14px',
                background: l === locale ? C.hover : 'none',
                border: 'none', cursor: 'pointer',
                color: l === locale ? C.ink : C.soft,
                fontWeight: l === locale ? 600 : 400,
                fontSize: 13.5, fontFamily: C.sans,
              }}
            >
              {l === locale && (
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: C.gold, flexShrink: 0 }} />
              )}
              {t(l)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(true);
  const [prevY, setPrevY]       = useState(0);
  const pathname                = usePathname();
  const locale                  = useLocale();
  const t                       = useTranslations('nav');

  const NAV = [
    { labelKey: 'letter',  to: '/mikhtav' },
    { labelKey: 'pidyon',  to: '/pidyon'  },
    { labelKey: 'maala',   to: '/maala'   },
    { labelKey: 'how',     href: '/#how'  },
    { labelKey: 'contact', to: '/contact' },
  ];

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
        className={locale === 'he' ? undefined : 'nb-non-hebrew'}
        role="navigation"
        aria-label={t('mainNav')}
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
          gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}>

          <Link
            href="/"
            aria-label={t('siteLabel')}
            style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', gap: 9, minWidth: 0, maxWidth: '100%', textDecoration: 'none' }}
          >
            <span className="nb-brand-mark" style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, overflow: 'hidden', display: 'inline-block' }}>
              <Image src="/rebbe.webp" alt="" width={36} height={36} aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </span>
            <span className="nb-brand-name" style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: C.serif, fontWeight: 700, fontSize: 17.5, color: C.ink, letterSpacing: '0.01em' }}>
              {t('siteName')}
            </span>
          </Link>

          <div className="nb-links" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map(l => (
              <NavLink
                key={l.to || l.href}
                label={t(l.labelKey)}
                to={l.to}
                href={l.href}
                active={!!l.to && pathname === l.to}
              />
            ))}
          </div>

          <div className="nb-cta" style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: 10 }}>
            <LangSwitcher />
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
              ✦&nbsp;{t('writeCta')}
            </Link>
          </div>

          <button
            className="nb-burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? t('closeMenu') : t('openMenu')}
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
        aria-hidden={!open}
        style={{
          position: 'fixed', top: 60, right: 0, left: 0, zIndex: 499,
          background:           'rgba(255,255,255,0.88)',
          backdropFilter:       'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${C.border}`,
          overflow: 'hidden',
          maxHeight: open ? 420 : 0,
          opacity:   open ? 1   : 0,
          transition: 'max-height .3s cubic-bezier(.4,0,.2,1), opacity .2s ease',
          pointerEvents: open ? 'auto' : 'none',
          fontFamily: C.sans,
          boxShadow: open ? '0 8px 24px rgba(30,26,23,0.08)' : 'none',
        }}
      >
        <div style={{ padding: '8px 20px 20px' }}>
          {NAV.map(l => (
            <NavLink
              key={l.to || l.href}
              label={t(l.labelKey)}
              to={l.to}
              href={l.href}
              active={!!l.to && pathname === l.to}
              onClick={() => setOpen(false)}
            />
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
              marginBottom: 14,
            }}
          >
            ✦&nbsp;{t('writeCta')}
          </Link>
          <LangSwitcher flat />
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .nb-links  { display: none !important; }
          .nb-cta    { display: none !important; }
          .nb-burger { display: block !important; }
          .nb-non-hebrew .nb-brand-mark { width: 32px !important; height: 32px !important; }
          .nb-non-hebrew .nb-brand-name { font-size: 14.5px !important; white-space: nowrap; letter-spacing: 0 !important; }
        }
      `}</style>
    </>
  );
}
