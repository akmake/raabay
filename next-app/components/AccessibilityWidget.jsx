'use client';

import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'raabay-a11y';

const defaults = {
  fontSize: 0,
  contrast: 'normal',
  grayscale: false,
  noAnimations: false,
  underlineLinks: false,
};

function applySettings(s) {
  const html = document.documentElement;
  const fontSizes = { '-1': '92%', 0: '', 1: '112%', 2: '128%' };
  html.style.fontSize = fontSizes[s.fontSize] ?? '';
  html.classList.toggle('a11y-grayscale', s.grayscale);
  html.classList.toggle('a11y-no-anim', s.noAnimations);
  html.classList.toggle('a11y-links', s.underlineLinks);
  html.classList.toggle('a11y-contrast-high', s.contrast === 'high');
}

const BTN = {
  flex: '1', padding: '7px 4px', borderRadius: 6,
  border: '1px solid #d4c8b8', background: '#f5f0e8',
  color: '#1e1a17', cursor: 'pointer', fontSize: 13,
  fontFamily: '"Assistant", sans-serif', fontWeight: 500, lineHeight: 1.2,
};
const BTN_ACTIVE = { ...BTN, background: '#1e1a17', color: '#fff', border: '1px solid #1e1a17' };

export default function AccessibilityWidget() {
  const [open, setOpen]         = useState(false);
  const [settings, setSettings] = useState(defaults);
  const panelRef   = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      setSettings(s => ({ ...s, ...saved }));
    } catch {}
  }, []);

  useEffect(() => {
    applySettings(settings);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)); } catch {}
  }, [settings]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target) &&
          triggerRef.current && !triggerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  const update = (patch) => setSettings(s => ({ ...s, ...patch }));
  const reset  = () => setSettings({ ...defaults });

  const Toggle = ({ id, label, value, onChange }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
      <label htmlFor={id} style={{ fontSize: 14, color: '#1e1a17', cursor: 'pointer' }}>{label}</label>
      <button id={id} role="switch" aria-checked={value} onClick={onChange}
        style={{ width: 46, height: 26, borderRadius: 13, border: 'none', cursor: 'pointer',
          background: value ? '#1e1a17' : '#d4c8b8', position: 'relative', flexShrink: 0 }}
        aria-label={label}
      >
        <span style={{ display: 'block', width: 20, height: 20, borderRadius: '50%', background: '#fff',
          position: 'absolute', top: 3, ...(value ? { left: 3 } : { right: 3 }) }} />
      </button>
    </div>
  );

  return (
    <>
      <button ref={triggerRef} onClick={() => setOpen(o => !o)}
        aria-label="פתח תפריט נגישות" aria-expanded={open} aria-haspopup="dialog" title="נגישות"
        style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 9000,
          width: 54, height: 54, borderRadius: '50%', background: '#1e1a17', color: '#fff',
          border: '2.5px solid #b5864a', cursor: 'pointer', fontSize: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.35)' }}
      >♿</button>

      {open && (
        <div ref={panelRef} role="dialog" aria-label="אפשרויות נגישות" aria-modal="true" dir="rtl"
          style={{ position: 'fixed', bottom: 88, left: 24, zIndex: 9001,
            background: '#fff', borderRadius: 14, boxShadow: '0 10px 48px rgba(0,0,0,0.22)',
            border: '1px solid #e4dcd0', padding: '20px 20px 16px', width: 288,
            fontFamily: '"Assistant", sans-serif' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h2 style={{ fontWeight: 700, fontSize: 16, color: '#1e1a17', margin: 0 }}>אפשרויות נגישות</h2>
            <button onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
              aria-label="סגור תפריט נגישות"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: '#5c5550', lineHeight: 1, padding: 4 }}
            >✕</button>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#5c5550', marginBottom: 8, letterSpacing: '.04em' }}>גודל טקסט</p>
            <div style={{ display: 'flex', gap: 6 }} role="group" aria-label="גודל טקסט">
              <button onClick={() => update({ fontSize: Math.max(-1, settings.fontSize - 1) })} style={settings.fontSize === -1 ? BTN_ACTIVE : BTN} aria-pressed={settings.fontSize === -1}>א–</button>
              <button onClick={() => update({ fontSize: 0 })} style={settings.fontSize === 0 ? BTN_ACTIVE : BTN} aria-pressed={settings.fontSize === 0}>רגיל</button>
              <button onClick={() => update({ fontSize: Math.min(2, settings.fontSize + 1) })} style={settings.fontSize >= 1 ? BTN_ACTIVE : BTN} aria-pressed={settings.fontSize >= 1}>א+</button>
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: '#5c5550', marginBottom: 8 }}>ניגוד צבעים</p>
            <div style={{ display: 'flex', gap: 6 }} role="group" aria-label="ניגוד צבעים">
              {[['normal', 'רגיל'], ['high', 'ניגוד גבוה']].map(([val, label]) => (
                <button key={val} onClick={() => update({ contrast: val })} style={settings.contrast === val ? BTN_ACTIVE : BTN} aria-pressed={settings.contrast === val}>{label}</button>
              ))}
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e4dcd0', margin: '12px 0' }} />
          <Toggle id="a11y-grayscale" label="גווני אפור" value={settings.grayscale} onChange={() => update({ grayscale: !settings.grayscale })} />
          <Toggle id="a11y-no-anim" label="עצור אנימציות" value={settings.noAnimations} onChange={() => update({ noAnimations: !settings.noAnimations })} />
          <Toggle id="a11y-links" label="הדגש קישורים" value={settings.underlineLinks} onChange={() => update({ underlineLinks: !settings.underlineLinks })} />

          <button onClick={reset} style={{ marginTop: 12, width: '100%', padding: '9px', borderRadius: 7,
            border: '1px solid #d4c8b8', background: 'none', color: '#5c5550',
            cursor: 'pointer', fontSize: 13, fontFamily: '"Assistant", sans-serif' }}>
            איפוס הגדרות
          </button>
          <p style={{ fontSize: 11, color: '#9e9490', textAlign: 'center', marginTop: 10, marginBottom: 0 }}>
            ההגדרות נשמרות במכשיר שלך
          </p>
        </div>
      )}
    </>
  );
}
