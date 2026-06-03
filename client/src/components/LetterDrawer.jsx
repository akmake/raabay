import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const V = {
  ink: '#0f1c33', inkSoft: '#46556f',
  navy: '#101e38', gold: '#c9a85c', goldDeep: '#b08a3e',
  mist: '#aab6cb', line: '#e4e7ec',
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans: '"Assistant", system-ui, sans-serif',
  paper: '#faf7f1', paperEdge: '#e8e0d0',
};

const STEPS = [
  { title: 'רגע לפני שמתחילים', body: 'כתיבת מכתב לרבי היא רגע של קרבה אמיתית. ניקח כמה רגעים קצרים להתכונן אליה.' },
  { title: 'נטילת ידיים', body: 'נהוג ליטול ידיים לפני הכתיבה — הכנה גופנית ורוחנית שמסמנת שאנו עומדים לעשות דבר נעלה.' },
  { title: 'בכובד ראש ובכוונה', body: 'כתבו ברצינות ומכל הלב. דמיינו שאתם עומדים מול הרבי פנים אל פנים — מה הייתם מבקשים?' },
  { title: 'קבלת החלטה טובה', body: 'נהוג לקבל על עצמכם החלטה טובה אחת — היא נעשית ה"כלי" שמחזיק את הברכה שאתם מבקשים.' },
  { title: 'נוסח הפתיחה', body: 'ניתן לפתוח בנוסח המקובל:', nusach: true },
];

function getHebrewDate() {
  try { return new Intl.DateTimeFormat('he-u-ca-hebrew', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); }
  catch { return new Intl.DateTimeFormat('he', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); }
}

export default function LetterDrawer({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [prepDone, setPrepDone] = useState(false);
  const [fullName, setFullName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [letterText, setLetterText] = useState('');
  const [sent, setSent] = useState(false);
  const textareaRef = useRef(null);
  const hebrewDate = getHebrewDate();

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // reset on open
  useEffect(() => {
    if (open) { setStep(0); setPrepDone(false); setSent(false); }
  }, [open]);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = Math.max(220, textareaRef.current.scrollHeight) + 'px';
  }, [letterText]);

  if (!open) return null;

  return (
    <div dir="rtl" style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex' }}>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{ flex: 1, background: 'rgba(10,18,36,0.55)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
      />

      {/* Panel */}
      <div style={{
        width: 'min(540px, 100vw)',
        height: '100%',
        background: V.paper,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-8px 0 60px rgba(10,18,36,0.25)',
        animation: 'drawerIn .32s cubic-bezier(.4,0,.2,1)',
        overflow: 'hidden',
      }}>

        {/* Panel header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 24px', borderBottom: `1px solid ${V.paperEdge}`, flexShrink: 0, background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 34, height: 34, borderRadius: 8, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 18 }}>א</span>
            <div>
              <div style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 18, color: V.ink, lineHeight: 1 }}>אֹהֶל</div>
              <div style={{ fontSize: 11, color: V.mist, marginTop: 2 }}>מכתב אל הרבי</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: V.mist, padding: 6, borderRadius: 6, lineHeight: 0, transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = V.ink}
            onMouseLeave={e => e.currentTarget.style.color = V.mist}>
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px 24px 40px' }}>

          {/* Prep steps */}
          {!prepDone && (
            <div style={{ background: V.navy, borderRadius: 14, padding: '28px 24px', marginBottom: 28, color: '#fff', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 60% at 80% 0%, rgba(201,168,92,.15), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', color: V.gold, marginBottom: 14 }}>הכנה {step + 1} מתוך {STEPS.length}</div>
                <h3 style={{ fontFamily: V.serif, fontWeight: 600, fontSize: 22, color: '#fff', marginBottom: 10 }}>{STEPS[step].title}</h3>
                <p style={{ fontSize: 15, color: V.mist, lineHeight: 1.7, marginBottom: STEPS[step].nusach ? 14 : 20 }}>{STEPS[step].body}</p>
                {STEPS[step].nusach && (
                  <div style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(201,168,92,.25)', borderRadius: 8, padding: '12px 16px', fontFamily: V.serif, fontSize: 15, color: '#e8e2d4', lineHeight: 1.8, marginBottom: 20 }}>
                    ״אנא לעורר רחמים רבים על נפש רוח נשמה של <span style={{ color: V.gold }}>[שם]</span> בן/בת <span style={{ color: V.gold }}>[שם האם]</span>״
                  </div>
                )}

                {/* Dots */}
                <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                  {STEPS.map((_, i) => <span key={i} style={{ display: 'inline-block', width: i === step ? 18 : 6, height: 6, borderRadius: 3, background: i === step ? V.gold : 'rgba(255,255,255,.2)', transition: 'all .3s' }} />)}
                </div>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {step > 0 && (
                    <button onClick={() => setStep(s => s - 1)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.2)', color: V.mist, cursor: 'pointer', fontFamily: V.sans, fontSize: 13, fontWeight: 600, padding: '9px 16px', borderRadius: 7 }}>הקודם</button>
                  )}
                  <button onClick={() => step < STEPS.length - 1 ? setStep(s => s + 1) : setPrepDone(true)}
                    style={{ background: V.gold, color: V.navy, border: 'none', cursor: 'pointer', fontFamily: V.sans, fontSize: 14, fontWeight: 700, padding: '10px 22px', borderRadius: 7 }}>
                    {step === STEPS.length - 1 ? 'להתחיל לכתוב ←' : 'הבא ←'}
                  </button>
                  <button onClick={() => setPrepDone(true)} style={{ background: 'none', border: 'none', color: V.mist, cursor: 'pointer', fontFamily: V.sans, fontSize: 13, marginRight: 'auto', textDecoration: 'underline', textUnderlineOffset: 3, opacity: .7 }}>דלג</button>
                </div>
              </div>
            </div>
          )}

          {/* Letter surface */}
          <div style={{ background: '#fff', border: `1px solid ${V.paperEdge}`, borderRadius: 10, padding: '28px 26px', boxShadow: '0 4px 30px rgba(15,28,51,.07)' }}>
            <div style={{ position: 'absolute', top: 12, left: 0, right: 0, textAlign: 'center', fontFamily: V.serif, fontSize: 13, color: '#b3a98f', letterSpacing: '.1em', pointerEvents: 'none' }} />

            <div style={{ textAlign: 'center', fontFamily: V.serif, fontSize: 13, color: '#b3a98f', letterSpacing: '.06em', marginBottom: 18 }}>ב״ה &nbsp;·&nbsp; {hebrewDate}</div>

            {/* Name fields */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 22, paddingBottom: 20, borderBottom: `1px solid ${V.line}` }}>
              {[
                { label: 'שם מלא', ph: 'השם שלכם', val: fullName, set: setFullName },
                { label: 'בן / בת (שם האם)', ph: 'שם האם', val: motherName, set: setMotherName },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', color: V.goldDeep, marginBottom: 6 }}>{f.label}</label>
                  <input type="text" placeholder={f.ph} value={f.val} onChange={e => f.set(e.target.value)}
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontFamily: V.serif, fontSize: 17, color: V.ink, borderBottom: `1.5px solid ${V.line}`, padding: '4px 2px 7px', boxSizing: 'border-box' }} />
                </div>
              ))}
            </div>

            <div style={{ fontFamily: V.serif, fontSize: 17, color: V.inkSoft, marginBottom: 12 }}>אל כבוד הרבי שליט״א,</div>
            <textarea ref={textareaRef} value={letterText} onChange={e => setLetterText(e.target.value)}
              placeholder={`כאן תוכלו לכתוב את אשר על לבכם...\n\nאין נוסח נכון — פשוט פתחו את הלב וכתבו בלשונכם שלכם.`}
              style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'none', fontFamily: V.serif, fontSize: 18, lineHeight: 2, color: V.ink, minHeight: 220, overflow: 'hidden', boxSizing: 'border-box' }} />

            {/* Send */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, paddingTop: 18, borderTop: `1px solid ${V.line}` }}>
              <span style={{ fontSize: 12, color: V.mist, display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={V.gold} strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                פרטי לחלוטין
              </span>
              <button
                onClick={() => { if (!letterText.trim()) { textareaRef.current?.focus(); return; } setSent(true); }}
                style={{ background: sent ? '#1f8a5b' : V.navy, color: '#fff', border: 'none', cursor: 'pointer', fontFamily: V.sans, fontSize: 14, fontWeight: 600, padding: '11px 26px', borderRadius: 8, transition: 'background .3s' }}>
                {sent ? 'נשלח ✓' : 'שליחת המכתב →'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawerIn {
          from { transform: translateX(-40px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
