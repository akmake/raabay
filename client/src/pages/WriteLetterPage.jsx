import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';

const STEPS = [
  { title: <>רגע, <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לפני שמתחילים</em></>, body: 'כתיבת מכתב לרבי היא רגע של קרבה — כמו להיכנס ל\'יחידות\', פגישה אישית. ניקח כמה רגעים קצרים להתכונן אליה כראוי.' },
  { title: 'נטילת ידיים', body: 'נהוג ליטול ידיים לפני הכתיבה — הכנה גופנית ורוחנית, שמסמנת לנו שאנו עומדים לעשות דבר נעלה.' },
  { title: <>בכובד ראש <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>ובכוונה</em></>, body: 'כתבו ברצינות ומכל הלב. דמיינו שאתם עומדים מול הרבי פנים אל פנים — אילו מילים הייתם בוחרים? מה באמת הייתם מבקשים?' },
  { title: 'קבלת החלטה טובה', body: 'נהוג לקבל על עצמכם החלטה טובה אחת — קטנה ככל שתהיה. היא נעשית ה\'כלי\' שמחזיק את הברכה שאתם מבקשים.' },
  { title: 'נוסח הפתיחה', body: 'אפשר לפתוח את המכתב בנוסח המקובל, ולאחריו לכתוב בלשונכם שלכם:', nusach: true },
];

function Candle() {
  return (
    <div style={{ width: 54, height: 54, margin: '0 auto 26px', position: 'relative' }}>
      <span className="oh-flick-slow" style={{ position: 'absolute', inset: -22, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(201,168,92,.55), transparent 70%)', display: 'block' }} />
      <span className="oh-flick" style={{ position: 'absolute', left: '50%', top: 6, width: 16, height: 30, transform: 'translateX(-50%)', background: 'linear-gradient(180deg,#fff3d0,#e9b94e 55%,#c9882a)', borderRadius: '50% 50% 48% 48% / 62% 62% 38% 38%', boxShadow: '0 0 18px 4px rgba(233,185,78,.6)', display: 'block' }} />
      <span style={{ position: 'absolute', left: '50%', bottom: 2, width: 3, height: 14, transform: 'translateX(-50%)', background: 'linear-gradient(#e9d8a8,#bda874)', display: 'block' }} />
    </div>
  );
}

function getHebrewDate() {
  try { return new Intl.DateTimeFormat('he-u-ca-hebrew', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); }
  catch { return new Intl.DateTimeFormat('he', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); }
}

export default function WriteLetterPage() {
  const m = useIsMobile();
  const [step, setStep] = useState(0);
  const [prepHiding, setPrepHiding] = useState(false);
  const [prepGone, setPrepGone] = useState(false);
  const [fullName, setFullName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [letterText, setLetterText] = useState('');
  const [sent, setSent] = useState(false);
  const textareaRef = useRef(null);
  const nameRef = useRef(null);
  const hebrewDate = getHebrewDate();

  const closePrep = (focus = false) => {
    setPrepHiding(true);
    setTimeout(() => { setPrepGone(true); if (focus) nameRef.current?.focus(); }, 520);
  };
  const openPrep = () => { setStep(0); setPrepGone(false); setPrepHiding(false); };

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = Math.max(260, textareaRef.current.scrollHeight) + 'px';
  }, [letterText]);

  return (
    <div dir="rtl" style={{ fontFamily: 'var(--oh-sans)', minHeight: '100vh' }}>

      {/* Writing surface */}
      <div style={{ minHeight: '100vh', background: 'radial-gradient(120% 60% at 50% -10%, #f4f0e6, #ece8df 60%)', paddingBottom: 60 }}>

        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1080, margin: '0 auto', padding: m ? '16px 18px' : '22px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid var(--oh-gold)', flexShrink: 0 }}>
              <img src="/הרבי.webp" alt="הרבי" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--oh-serif)', fontWeight: 700, fontSize: m ? 20 : 24, color: 'var(--oh-ink)' }}>אֹהֶל</div>
              {!m && <div style={{ fontFamily: 'var(--oh-sans)', fontSize: 11, fontWeight: 500, color: 'var(--oh-ink-soft)', letterSpacing: '.04em', marginTop: -2 }}>מכתב אל הרבי</div>}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: m ? 12 : 18 }}>
            <button onClick={openPrep} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: m ? 13 : 14.5, fontWeight: 600, color: 'var(--oh-ink-soft)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a7 7 0 0 1 7 7c0 3-2 4-2 6H7c0-2-2-3-2-6a7 7 0 0 1 7-7Z"/><path d="M9 19h6M10 22h4"/></svg>
              {m ? 'הכנות' : 'ההכנות לכתיבה'}
            </button>
            <Link to="/" style={{ background: 'none', color: 'var(--oh-ink-soft)', textDecoration: 'none', fontFamily: 'var(--oh-sans)', fontSize: m ? 13 : 14.5, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>
              {m ? 'בית' : 'לדף הבית'}
            </Link>
          </div>
        </div>

        {/* Letter */}
        <div style={{ maxWidth: 680, margin: '10px auto 0', padding: m ? '0 12px' : '0 24px' }}>
          <div style={{ textAlign: 'center', margin: '6px 0 22px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', color: 'var(--oh-gold-deep)', textTransform: 'uppercase' }}>רגע של קרבה</div>
            <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 26 : 34, color: 'var(--oh-ink)', marginTop: 6 }}>כתבו את אשר על לבכם</h1>
          </div>

          <div style={{ position: 'relative', background: 'var(--oh-paper-warm)', border: '1px solid var(--oh-paper-edge)', borderRadius: 4, boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 40px 80px -50px rgba(20,34,63,.55)', padding: m ? '44px 22px 32px' : '54px 58px 40px' }}>
            <div style={{ position: 'absolute', inset: m ? 6 : 9, border: '1px solid #efe7d4', borderRadius: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 16, left: 0, right: 0, textAlign: 'center', fontFamily: 'var(--oh-serif)', fontSize: 14, color: '#b3a98f', letterSpacing: '.08em' }}>ב״ה</div>
            <div style={{ textAlign: 'center', fontSize: 12, color: '#a59c84', marginBottom: 24, letterSpacing: '.04em' }}>{hebrewDate}</div>

            {/* Name fields */}
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 16 : 26, marginBottom: 26, paddingBottom: 22, borderBottom: '1px solid var(--oh-line)' }}>
              {[
                { label: 'שם מלא', placeholder: 'השם שלכם', value: fullName, onChange: setFullName, ref: nameRef },
                { label: 'בן / בת (שם האם)', placeholder: 'שם האם', value: motherName, onChange: setMotherName },
              ].map(({ label, placeholder, value, onChange, ref }) => (
                <div key={label} style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 6 }}>{label}</label>
                  <input ref={ref} type="text" placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--oh-serif)', fontSize: m ? 17 : 19, color: 'var(--oh-ink)', borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 7px' }} />
                </div>
              ))}
            </div>

            {/* Body */}
            <div style={{ fontFamily: 'var(--oh-serif)', fontSize: m ? 17 : 20, color: 'var(--oh-ink-soft)', marginBottom: 12 }}>אל כבוד הרבי שליט״א,</div>
            <textarea ref={textareaRef} value={letterText} onChange={e => setLetterText(e.target.value)}
              placeholder={`אנא לעורר רחמים רבים עבור נפש רוח נשמה של ______ בן/בת ______ —\n\nכאן תוכלו לכתוב את אשר על לבכם: בקשה, תודה, או תפילה.\nאין נוסח נכון. פשוט פתחו את הלב, וכתבו בלשונכם שלכם.\n\nדמיינו שאתם עומדים מול הרבי, פנים אל פנים. מה הייתם מבקשים?`}
              style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'none', fontFamily: 'var(--oh-serif)', fontSize: m ? 17 : 20, lineHeight: 2, color: 'var(--oh-ink)', minHeight: 260, overflow: 'hidden' }} />

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'center', justifyContent: 'space-between', gap: 16, marginTop: 24, paddingTop: 22, borderTop: '1px solid var(--oh-line)', flexDirection: m ? 'column' : 'row' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--oh-ink-soft)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--oh-gold-deep)" strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>
                פרטי לחלוטין · בינכם לבין עצמכם
              </div>
              <button onClick={() => { if (!letterText.trim()) { textareaRef.current?.focus(); return; } setSent(true); }}
                style={{ fontFamily: 'var(--oh-sans)', fontSize: 15, fontWeight: 600, cursor: 'pointer', border: 'none', background: sent ? '#1f8a5b' : 'var(--oh-night)', color: 'var(--oh-paper-warm)', padding: m ? '12px 24px' : '14px 30px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 9, width: m ? '100%' : 'auto', justifyContent: 'center' }}>
                {sent ? 'נשלח בהצלחה ✓' : <>שליחת המכתב <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"/></svg></>}
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', color: 'var(--oh-ink-soft)', fontSize: 13, marginTop: 20 }}>
            המכתב יודפס ויונח על ציון הרבי באוהל הקדוש. ·{' '}
            <button onClick={openPrep} style={{ background: 'none', border: 'none', color: 'var(--oh-blue)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}>לעיון בהכנות</button>
          </div>
        </div>
      </div>

      {/* Preparations overlay */}
      {!prepGone && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `radial-gradient(60% 50% at 50% 32%, rgba(201,168,92,.16), transparent 70%), radial-gradient(100% 100% at 50% 50%, var(--oh-night-2), var(--oh-night) 80%)`, padding: m ? 18 : 32, opacity: prepHiding ? 0 : 1, transition: 'opacity .5s ease', pointerEvents: prepHiding ? 'none' : 'auto' }}>
          <div style={{ position: 'absolute', inset: 0, opacity: .5, backgroundImage: `radial-gradient(1.2px 1.2px at 16% 26%, rgba(255,255,255,.5), transparent),radial-gradient(1.2px 1.2px at 74% 20%, rgba(255,255,255,.4), transparent),radial-gradient(1.2px 1.2px at 86% 58%, rgba(255,255,255,.32), transparent)` }} />

          <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 520, textAlign: 'center', color: 'var(--oh-paper-warm)' }}>
            <Candle />
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.22em', color: 'var(--oh-gold-letter)', marginBottom: 16 }}>הכנה {step + 1} מתוך {STEPS.length}</div>

            <div key={step} className="oh-rise">
              <h2 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 28 : 38, lineHeight: 1.2, color: '#fff', marginBottom: 14 }}>{STEPS[step].title}</h2>
              <p style={{ fontSize: m ? 16 : 18, color: 'var(--oh-mist)', maxWidth: '30em', margin: '0 auto' }}>{STEPS[step].body}</p>
              {STEPS[step].nusach && (
                <div style={{ marginTop: 18, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(201,168,92,.3)', borderRadius: 10, padding: m ? '14px 16px' : '18px 22px', fontFamily: 'var(--oh-serif)', fontSize: m ? 16 : 18, color: '#e9e3d3', lineHeight: 1.7 }}>
                  ״אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל נפש רוח נשמה של <span style={{ color: 'var(--oh-gold-letter)' }}>[שם]</span> בן/בת <span style={{ color: 'var(--oh-gold-letter)' }}>[שם האם]</span>״
                </div>
              )}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', margin: '28px 0 22px' }}>
              {STEPS.map((_, i) => <span key={i} style={{ display: 'inline-block', width: i === step ? 22 : 7, height: 7, borderRadius: i === step ? 4 : '50%', background: i === step ? 'var(--oh-gold-letter)' : 'rgba(255,255,255,.22)', transition: 'all .3s' }} />)}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
              {step > 0 && <button onClick={() => setStep(s => s - 1)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.18)', color: 'var(--oh-mist)', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: 14, fontWeight: 600, padding: m ? '11px 18px' : '13px 22px', borderRadius: 7 }}>הקודם</button>}
              <button onClick={() => step < STEPS.length - 1 ? setStep(s => s + 1) : closePrep(true)}
                style={{ background: 'var(--oh-gold-letter)', color: 'var(--oh-night)', border: 'none', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: m ? 14 : 16, fontWeight: 600, padding: m ? '12px 24px' : '14px 32px', borderRadius: 7, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {step === STEPS.length - 1 ? 'להתחיל לכתוב ' : 'הבא '}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
            </div>

            <button onClick={() => closePrep(true)} style={{ display: 'block', margin: '20px auto 0', background: 'none', border: 'none', color: 'var(--oh-mist)', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: 13, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 4, opacity: .8 }}>
              דלג והתחל לכתוב
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
