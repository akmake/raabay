import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';

const LETTER_STEPS = [
  {
    title: <>רגע, <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לפני שמתחילים</em></>,
    body: 'כתיבת מכתב לרבי היא רגע של קרבה — כמו להיכנס ל\'יחידות\', פגישה אישית. ניקח כמה רגעים קצרים להתכונן אליה כראוי.',
  },
  {
    title: 'נטילת ידיים',
    body: 'נהוג ליטול ידיים לפני הכתיבה — הכנה גופנית ורוחנית, שמסמנת לנו שאנו עומדים לעשות דבר קדוש.',
  },
  {
    title: <>בכובד ראש <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>ובכוונה</em></>,
    body: 'כתבו ברצינות ומכל הלב. דמיינו שאתם עומדים מול הרבי פנים אל פנים — אילו מילים הייתם בוחרים? מה באמת הייתם מבקשים?',
  },
  {
    title: 'קבלת החלטה טובה',
    body: 'נהוג לקבל על עצמכם החלטה טובה אחת — אפילו קטנה. היא נעשית ה\'כלי\' שמחזיק את הברכה שאתם מבקשים.',
  },
  {
    title: 'נוסח הפתיחה',
    body: 'אפשר לפתוח את המכתב בנוסח המקובל, ולאחריו לכתוב בלשונכם שלכם:',
    nusach: true,
  },
];

const PAN_STEPS = [
  {
    title: <>רגע, <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לפני שמתחילים</em></>,
    body: 'כתיבת פ"נ היא מעשה רוחני של ממש — לא רק בקשה, אלא התקשרות נשמה. כמה הכנות קצרות ישפרו את הכוונה ואת ה"כלי".',
  },
  {
    title: 'נטילת ידיים',
    body: 'נוטלים ידיים לפני הכתיבה — מעשה של טהרה שמסמן לנו שאנו עומדים לעשות דבר שנעלה מן הרגיל.',
  },
  {
    title: <>כתיבה <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לאחר התפילה</em></>,
    body: 'הזמן המומלץ לכתיבה הוא לאחר תפילת שחרית — כשהאדם כבר נמצא במצב של כוונה וקשר לקדושה.',
  },
  {
    title: 'קבלת החלטה טובה',
    body: 'כללו — או החליטו בלב — קבלת החלטה טובה אחת. היא יוצרת "כלי" שדרכו יכולה הברכה לחול. אין צורך בדבר גדול — אפילו קטן ואמיתי.',
  },
  {
    title: 'על הנוסח',
    body: 'הנוסח המקובל בחב"ד: "אנא לעורר רחמים רבים על [שם] בן/בת [שם האם]" — בגוף שלישי, ללא כתיבת "אני". לאחר הנוסח — ממשיכים בלשונכם האישית.',
    nusachPan: true,
  },
];

function Candle() {
  return (
    <div style={{ width: 54, height: 54, margin: '0 auto 30px', position: 'relative' }}>
      <span className="oh-flick-slow" style={{
        position: 'absolute', inset: -22, borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(201,168,92,.55), transparent 70%)',
        display: 'block',
      }} />
      <span className="oh-flick" style={{
        position: 'absolute', left: '50%', top: 6, width: 16, height: 30,
        transform: 'translateX(-50%)',
        background: 'linear-gradient(180deg,#fff3d0,#e9b94e 55%,#c9882a)',
        borderRadius: '50% 50% 48% 48% / 62% 62% 38% 38%',
        boxShadow: '0 0 18px 4px rgba(233,185,78,.6)',
        display: 'block',
      }} />
      <span style={{
        position: 'absolute', left: '50%', bottom: 2, width: 3, height: 14,
        transform: 'translateX(-50%)',
        background: 'linear-gradient(#e9d8a8,#bda874)',
        display: 'block',
      }} />
    </div>
  );
}

function getHebrewDate() {
  try {
    return new Intl.DateTimeFormat('he-u-ca-hebrew', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat('he', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  }
}

export default function WriteLetterPage() {
  const [mode, setMode] = useState(null); // null = choosing, 'letter', 'pan'
  const [step, setStep] = useState(0);
  const [prepHiding, setPrepHiding] = useState(false);
  const [prepGone, setPrepGone] = useState(false);
  const [fullName, setFullName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [gender, setGender] = useState('בן');
  const [letterText, setLetterText] = useState('');
  const [sent, setSent] = useState(false);
  const textareaRef = useRef(null);
  const nameRef = useRef(null);
  const hebrewDate = getHebrewDate();

  const STEPS = mode === 'pan' ? PAN_STEPS : LETTER_STEPS;

  const chooseMode = (m) => {
    setMode(m);
    setStep(0);
    setPrepGone(false);
    setPrepHiding(false);
  };

  const closePrep = (focus = false) => {
    setPrepHiding(true);
    setTimeout(() => {
      setPrepGone(true);
      if (focus) nameRef.current?.focus();
    }, 520);
  };

  const openPrep = () => {
    setStep(0);
    setPrepGone(false);
    setPrepHiding(false);
  };

  const growTextarea = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = Math.max(mode === 'pan' ? 460 : 620, textareaRef.current.scrollHeight) + 'px';
  };

  useEffect(() => { growTextarea(); }, [letterText, mode]);

  const handleSend = () => {
    if (!letterText.trim()) { textareaRef.current?.focus(); return; }
    setSent(true);
  };

  const nusachName = fullName.trim() || '[שמכם]';
  const nusachMother = motherName.trim() || '[שם האם]';

  return (
    <div dir="rtl" style={{ fontFamily: 'var(--oh-sans)', minHeight: '100vh' }}>
      <Navbar />

      <div style={{
        minHeight: '100vh',
        background: '#ffffff',
        paddingTop: 68,
        paddingBottom: 80,
      }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1080, margin: '0 auto', padding: '22px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid var(--oh-gold)' }}>
              <img src="/הרבי.webp" alt="הרבי" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--oh-serif)', fontWeight: 700, fontSize: 24, color: 'var(--oh-ink)' }}>כתיבה לרבי</div>
              <div style={{ fontFamily: 'var(--oh-sans)', fontSize: 11.5, fontWeight: 500, color: 'var(--oh-ink-soft)', letterSpacing: '.04em', marginTop: -3 }}>
                {mode === 'pan' ? 'כתיבת פדיון נפש' : mode === 'letter' ? 'מכתב אל הרבי' : 'כתיבה אל הרבי'}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            {mode && (
              <button onClick={openPrep} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--oh-sans)', fontSize: 14.5, fontWeight: 600,
                color: 'var(--oh-ink-soft)', display: 'inline-flex', alignItems: 'center', gap: 7,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a7 7 0 0 1 7 7c0 3-2 4-2 6H7c0-2-2-3-2-6a7 7 0 0 1 7-7Z" />
                  <path d="M9 19h6M10 22h4" />
                </svg>
                ההכנות לכתיבה
              </button>
            )}
            <Link to="/" style={{
              background: 'none', color: 'var(--oh-ink-soft)', textDecoration: 'none',
              fontFamily: 'var(--oh-sans)', fontSize: 14.5, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 11l9-8 9 8M5 10v10h14V10" />
              </svg>
              לדף הבית
            </Link>
          </div>
        </div>

        {/* Mode chooser */}
        {!mode && (
          <div style={{ maxWidth: 720, margin: '80px auto 0', padding: '0 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.2em', color: 'var(--oh-gold-deep)', textTransform: 'uppercase', marginBottom: 14 }}>רגע של קרבה</div>
            <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: 38, color: 'var(--oh-ink)', marginBottom: 10 }}>מה תרצו לכתוב?</h1>
            <p style={{ fontSize: 16, color: 'var(--oh-ink-soft)', maxWidth: '34em', margin: '0 auto 52px', lineHeight: 1.9 }}>
              <strong style={{ color: 'var(--oh-ink)' }}>מכתב</strong> — כשרוצים לפנות לרבי בלשון חופשית: לשתף, לשאול, להודות.{' '}
              <strong style={{ color: 'var(--oh-ink)' }}>פ"נ</strong> — בזמנים מיוחדים כמו ערב ראש השנה, יום הולדת, או בעת בקשת ברכה ממוקדת.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                {
                  key: 'letter',
                  title: 'מכתב',
                  sub: 'כתיבה חופשית',
                  desc: 'בקשה, תודה, שיתוף — בלשון אישית לחלוטין, ללא נוסח קבוע.',
                  infoTo: '/mikhtav',
                  infoLabel: 'מה זה מכתב?',
                },
                {
                  key: 'pan',
                  title: 'פ"נ',
                  sub: 'פדיון נפש',
                  desc: 'כתיבה בנוסח חסידי מסורתי — פתיחה קבועה עם שם ושם האם.',
                  infoTo: '/pidyon',
                  infoLabel: 'מה זה פ"נ?',
                },
              ].map(opt => (
                <div
                  key={opt.key}
                  className="oh-mode-card"
                  onClick={() => chooseMode(opt.key)}
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    padding: '40px 32px 32px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1.5px solid #d8d8d8',
                    boxShadow: '0 4px 24px rgba(20,34,63,.09)',
                  }}
                >
                  <div style={{ width: 48, height: 2, background: '#b08d4a', margin: '0 auto 28px' }} />
                  <div style={{ fontFamily: 'var(--oh-serif)', fontSize: 52, fontWeight: 700, color: 'var(--oh-ink)', lineHeight: 1, marginBottom: 10 }}>{opt.title}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', color: '#b08d4a', textTransform: 'uppercase', marginBottom: 20 }}>{opt.sub}</div>
                  <div style={{ fontSize: 15, color: 'var(--oh-ink-soft)', lineHeight: 1.7, flex: 1 }}>{opt.desc}</div>
                  <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to={opt.infoTo} onClick={e => e.stopPropagation()} style={{ fontSize: 13, color: 'var(--oh-blue)', fontWeight: 600, textDecoration: 'none' }}>
                      {opt.infoLabel} ›
                    </Link>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--oh-ink)' }}>לכתיבה ←</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Writing surface */}
        {mode && (
          <div style={{ maxWidth: 920, margin: '14px auto 0', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', margin: '8px 0 26px' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.2em', color: 'var(--oh-gold-deep)', textTransform: 'uppercase' }}>
                {mode === 'pan' ? 'פדיון נפש' : 'רגע של קרבה'}
              </div>
              <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: 34, color: 'var(--oh-ink)', marginTop: 8 }}>
                {mode === 'pan' ? 'כתבו את הפ"נ שלכם' : 'כתבו את אשר על לבכם'}
              </h1>
              <button
                onClick={() => { setMode(null); setSent(false); setLetterText(''); setFullName(''); setMotherName(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--oh-ink-soft)', fontSize: 13, fontFamily: 'var(--oh-sans)', marginTop: 6, textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                ← חזרה לבחירה
              </button>
            </div>

            <div style={{
              position: 'relative',
              background: 'var(--oh-paper-warm)',
              border: '1px solid var(--oh-paper-edge)',
              borderRadius: 4,
              boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 40px 80px -50px rgba(20,34,63,.55), 0 8px 24px -18px rgba(20,34,63,.3)',
              minHeight: mode === 'pan' ? 'auto' : 880,
              padding: '64px 74px 48px',
            }}>
              <div style={{ position: 'absolute', inset: 9, border: '1px solid #efe7d4', borderRadius: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 20, left: 0, right: 0, textAlign: 'center', fontFamily: 'var(--oh-serif)', fontSize: 15, color: '#b3a98f', letterSpacing: '.08em' }}>ב״ה</div>
              <div style={{ textAlign: 'center', fontSize: 13, color: '#a59c84', marginBottom: 30, letterSpacing: '.04em' }}>{hebrewDate}</div>

              {/* Name fields */}
              {mode === 'pan' ? (
                <div style={{ display: 'flex', gap: 20, marginBottom: 30, paddingBottom: 26, borderBottom: '1px solid var(--oh-line)', flexWrap: 'wrap' }}>
                  <div style={{ flex: 2, minWidth: 160 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>שם עברי מלא</label>
                    <input
                      ref={nameRef}
                      type="text"
                      placeholder="השם שלכם"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%', border: 'none', background: 'transparent', outline: 'none',
                        fontFamily: 'var(--oh-serif)', fontSize: 19, color: 'var(--oh-ink)',
                        borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 8px',
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 80, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>בן / בת</label>
                    <div style={{ display: 'flex', borderBottom: '1.5px solid var(--oh-line)' }}>
                      {['בן', 'בת'].map((g) => (
                        <button key={g} onClick={() => setGender(g)} style={{
                          flex: 1, border: 'none', background: gender === g ? 'rgba(176,141,74,.15)' : 'transparent',
                          cursor: 'pointer', fontFamily: 'var(--oh-serif)', fontSize: 18,
                          color: gender === g ? 'var(--oh-ink)' : 'var(--oh-ink-soft)',
                          padding: '4px 8px 8px', fontWeight: gender === g ? 700 : 400,
                          transition: 'all .15s',
                        }}>{g}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ flex: 2, minWidth: 160 }}>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>שם האם</label>
                    <input
                      type="text"
                      placeholder="שם האם"
                      value={motherName}
                      onChange={(e) => setMotherName(e.target.value)}
                      style={{
                        width: '100%', border: 'none', background: 'transparent', outline: 'none',
                        fontFamily: 'var(--oh-serif)', fontSize: 19, color: 'var(--oh-ink)',
                        borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 8px',
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', gap: 26, marginBottom: 30, paddingBottom: 26, borderBottom: '1px solid var(--oh-line)' }}>
                  {[
                    { label: 'שם מלא', placeholder: 'השם שלכם', value: fullName, onChange: setFullName, ref: nameRef },
                    { label: 'בן / בת (שם האם)', placeholder: 'שם האם', value: motherName, onChange: setMotherName },
                  ].map(({ label, placeholder, value, onChange, ref }) => (
                    <div key={label} style={{ flex: 1 }}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>{label}</label>
                      <input
                        ref={ref}
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        style={{
                          width: '100%', border: 'none', background: 'transparent', outline: 'none',
                          fontFamily: 'var(--oh-serif)', fontSize: 19, color: 'var(--oh-ink)',
                          borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 8px',
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Pan nusach */}
              {mode === 'pan' && (
                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--oh-line)', fontFamily: 'var(--oh-serif)', lineHeight: 1.85 }}>
                  <div style={{ fontSize: 20, color: 'var(--oh-ink)', textAlign: 'center', marginBottom: 10, fontWeight: 700, letterSpacing: '.06em' }}>פ״נ</div>
                  <div style={{ fontSize: 20, color: 'var(--oh-ink)' }}>
                    אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל{' '}
                    <span style={{ color: fullName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: fullName.trim() ? 'none' : '1px dashed #c4b89a', transition: 'color .2s' }}>
                      {nusachName}
                    </span>
                    {' '}{gender}{' '}
                    <span style={{ color: motherName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: motherName.trim() ? 'none' : '1px dashed #c4b89a', transition: 'color .2s' }}>
                      {nusachMother}
                    </span>
                  </div>
                </div>
              )}

              {/* Letter body */}
              <div>
                {mode === 'pan' && (
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 10 }}>הבקשה האישית</div>
                )}
                <textarea
                  ref={textareaRef}
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  placeholder={mode === 'pan'
                    ? `כתבו כאן את הבקשה האישית שלכם.\n\nניתן לבקש בריאות, פרנסה, שידוך, נחת מהילדים, עניינים רוחניים — כל דבר שעל הלב.\nכתבו בגוף שלישי, כמו שהתחלתם בנוסח.`
                    : `כתבו כאן את אשר על לבכם.\n\nאין נוסח נכון ואין מילים נכונות. אפשר לכתוב בקשה, תודה, תפילה או כל דבר אישי שתרצו.`
                  }
                  style={{
                    width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'none',
                    fontFamily: 'var(--oh-serif)', fontSize: 20, lineHeight: 2.05, color: 'var(--oh-ink)',
                    minHeight: mode === 'pan' ? 460 : 620, overflow: 'hidden',
                  }}
                />
              </div>

              {/* Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginTop: 30, paddingTop: 26, borderTop: '1px solid var(--oh-line)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: 'var(--oh-ink-soft)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--oh-gold-deep)" strokeWidth="2">
                    <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>
                  פרטי לחלוטין · בינכם לבין הרבי
                </div>
                <button
                  onClick={handleSend}
                  style={{
                    fontFamily: 'var(--oh-sans)', fontSize: 16, fontWeight: 600, cursor: 'pointer', border: 'none',
                    background: sent ? '#1f8a5b' : 'var(--oh-night)', color: 'var(--oh-paper-warm)',
                    padding: '14px 30px', borderRadius: 6,
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    transition: 'all .22s ease',
                  }}
                >
                  {sent ? 'נשלח בהצלחה ✓' : <>
                    {mode === 'pan' ? 'שליחת הפ"נ' : 'שליחת המכתב'}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                    </svg>
                  </>}
                </button>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'var(--oh-ink-soft)', fontSize: 14, marginTop: 24 }}>
              {mode === 'pan' ? 'הפ"נ' : 'המכתב'} ישלח לציון הרבי באוהל הקדוש.{' '}
              <button onClick={openPrep} style={{ background: 'none', border: 'none', color: 'var(--oh-blue)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}>
                לעיון בהכנות לכתיבה
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Preparations Modal */}
      {mode && !prepGone && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(10,18,36,0.5)',
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
          padding: 32,
          opacity: prepHiding ? 0 : 1,
          transition: 'opacity .5s ease',
          pointerEvents: prepHiding ? 'none' : 'auto',
        }}>
          <div style={{
            background: 'var(--oh-night)',
            borderRadius: 20,
            width: '100%', maxWidth: 560,
            padding: '40px 44px',
            position: 'relative',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,.08)',
            animation: prepHiding ? 'none' : 'modalIn .35s cubic-bezier(.4,0,.2,1)',
          }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 20, background: 'radial-gradient(60% 50% at 80% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 20, opacity: .5, pointerEvents: 'none',
              backgroundImage: `
                radial-gradient(1.2px 1.2px at 16% 26%, rgba(255,255,255,.5), transparent),
                radial-gradient(1.2px 1.2px at 74% 20%, rgba(255,255,255,.4), transparent),
                radial-gradient(1.2px 1.2px at 86% 58%, rgba(255,255,255,.32), transparent),
                radial-gradient(1.2px 1.2px at 28% 70%, rgba(255,255,255,.3), transparent),
                radial-gradient(1.2px 1.2px at 58% 82%, rgba(255,255,255,.22), transparent)`,
            }} />

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'var(--oh-paper-warm)' }}>
              <Candle />
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.22em', color: 'var(--oh-gold-letter)', marginBottom: 18 }}>
                הכנה {step + 1} מתוך {STEPS.length}
              </div>

              <div key={step} className="oh-rise">
                <h2 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: 38, lineHeight: 1.18, color: '#fff', marginBottom: 18 }}>
                  {STEPS[step].title}
                </h2>
                <p style={{ fontSize: 18, color: 'var(--oh-mist)', maxWidth: '30em', margin: '0 auto' }}>
                  {STEPS[step].body}
                </p>
                {STEPS[step].nusach && (
                  <div style={{
                    marginTop: 22, background: 'rgba(255,255,255,.05)',
                    border: '1px solid rgba(201,168,92,.3)', borderRadius: 10,
                    padding: '18px 22px', fontFamily: 'var(--oh-serif)', fontSize: 18,
                    color: '#e9e3d3', lineHeight: 1.7,
                  }}>
                    ״אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל נפש רוח נשמה של{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם]</span>{' '}
                    בן/בת{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם האם]</span>
                    ״
                  </div>
                )}
                {STEPS[step].nusachPan && (
                  <div style={{
                    marginTop: 22, background: 'rgba(255,255,255,.05)',
                    border: '1px solid rgba(201,168,92,.3)', borderRadius: 10,
                    padding: '18px 22px', fontFamily: 'var(--oh-serif)', fontSize: 18,
                    color: '#e9e3d3', lineHeight: 1.7,
                  }}>
                    ״אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם]</span>{' '}
                    בן/בת{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם האם]</span>
                    ״
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: 9, justifyContent: 'center', margin: '36px 0 28px' }}>
                {STEPS.map((_, i) => (
                  <span key={i} style={{
                    display: 'inline-block',
                    width: i === step ? 24 : 8, height: 8,
                    borderRadius: i === step ? 5 : '50%',
                    background: i === step ? 'var(--oh-gold-letter)' : 'rgba(255,255,255,.22)',
                    transition: 'all .3s',
                  }} />
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                {step > 0 && (
                  <button onClick={() => setStep(s => s - 1)} style={{
                    background: 'transparent', border: '1px solid rgba(255,255,255,.18)',
                    color: 'var(--oh-mist)', cursor: 'pointer',
                    fontFamily: 'var(--oh-sans)', fontSize: 15, fontWeight: 600,
                    padding: '13px 22px', borderRadius: 7,
                  }}>הקודם</button>
                )}
                <button
                  onClick={() => step < STEPS.length - 1 ? setStep(s => s + 1) : closePrep(true)}
                  style={{
                    background: 'var(--oh-gold-letter)', color: 'var(--oh-night)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--oh-sans)', fontSize: 16, fontWeight: 600,
                    padding: '14px 32px', borderRadius: 7,
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                  }}
                >
                  {step === STEPS.length - 1 ? (mode === 'pan' ? 'לכתיבת הפ"נ ' : 'להתחיל לכתוב ') : 'הבא '}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <button onClick={() => closePrep(true)} style={{
                display: 'block', margin: '26px auto 0',
                background: 'none', border: 'none',
                color: 'var(--oh-mist)', cursor: 'pointer',
                fontFamily: 'var(--oh-sans)', fontSize: 14, fontWeight: 500,
                letterSpacing: '.02em', textDecoration: 'underline', textUnderlineOffset: 4, opacity: .8,
              }}>
                דלג והתחל לכתוב
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn { from { transform: scale(.95) translateY(12px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        .oh-mode-card { transition: transform .22s ease, box-shadow .22s ease; }
        .oh-mode-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(20,34,63,.12); }
      `}</style>
    </div>
  );
}
