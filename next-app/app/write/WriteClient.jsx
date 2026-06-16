'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import { useIsMobile } from '@/hooks/useIsMobile';

const LETTER_STEPS = [
  { title: <>רגע, <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לפני שמתחילים</em></>, body: 'כתיבת מכתב לרבי היא רגע של קרבה — כמו להיכנס ל\'יחידות\', פגישה אישית. ניקח כמה רגעים קצרים להתכונן אליה כראוי.' },
  { title: 'נטילת ידיים', body: 'נהוג ליטול ידיים לפני הכתיבה — הכנה גופנית ורוחנית, שמסמנת לנו שאנו עומדים לעשות דבר קדוש.' },
  { title: <>בכובד ראש <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>ובכוונה</em></>, body: 'כתבו ברצינות ומכל הלב. דמיינו שאתם עומדים מול הרבי פנים אל פנים — אילו מילים הייתם בוחרים? מה באמת הייתם מבקשים?' },
  { title: 'קבלת החלטה טובה', body: 'נהוג לקבל על עצמכם החלטה טובה אחת — אפילו קטנה. היא נעשית ה\'כלי\' שמחזיק את הברכה שאתם מבקשים.' },
  { title: <>כתבו <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>בלשונכם שלכם</em></>, body: 'אין נוסח נכון ואין מילים נכונות. כתבו מה שבאמת על הלב — בקשה, תודה, שאלה, שיתוף. הרבי קרא כל מילה.' },
  { title: <>פִּרְטוּ <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>בְּשִׂמְחָה</em></>, body: '"כל המפרט — הרי זה משובח." אל תקצרו. ספרו לרבי את המצב בפועל, מה מרגישים, מה בדיוק מבוקש. ככל שהמכתב מלא יותר — כך "מגיע" יותר.' },
];

const PAN_STEPS = [
  { title: <>רגע, <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לפני שמתחילים</em></>, body: 'כתיבת פ"נ היא מעשה רוחני של ממש — לא רק בקשה, אלא התקשרות נשמה. כמה הכנות קצרות ישפרו את הכוונה ואת ה"כלי".' },
  { title: 'נטילת ידיים', body: 'נוטלים ידיים לפני הכתיבה — מעשה של טהרה שמסמן לנו שאנו עומדים לעשות דבר שנעלה מן הרגיל.' },
  { title: <>כתיבה <em style={{ fontStyle: 'normal', color: 'var(--oh-gold-letter)' }}>לאחר התפילה</em></>, body: 'הזמן המומלץ לכתיבה הוא לאחר תפילת שחרית — כשהאדם כבר נמצא במצב של כוונה וקשר לקדושה.' },
  { title: 'קבלת החלטה טובה', body: 'כללו — או החליטו בלב — קבלת החלטה טובה אחת. היא יוצרת "כלי" שדרכו יכולה הברכה לחול. אין צורך בדבר גדול — אפילו קטן ואמיתי.' },
  { title: 'על הנוסח', body: 'הנוסח המקובל בחב"ד: "אנא לעורר רחמים רבים על [שם] בן/בת [שם האם]" — בגוף שלישי, ללא כתיבת "אני". לאחר הנוסח — ממשיכים בלשונכם האישית.', nusachPan: true },
];

function getHebrewDate() {
  try {
    return new Intl.DateTimeFormat('he-u-ca-hebrew', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  } catch {
    return new Intl.DateTimeFormat('he', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date());
  }
}

export default function WriteClient() {
  const m = useIsMobile();
  const [mode, setMode]             = useState(null);
  const [step, setStep]             = useState(0);
  const [prepHiding, setPrepHiding] = useState(false);
  const [prepGone, setPrepGone]     = useState(false);
  const [fullName, setFullName]     = useState('');
  const [motherName, setMotherName] = useState('');
  const [gender, setGender]         = useState('בן');
  const [letterText, setLetterText] = useState('');
  const [sending, setSending]       = useState(false);
  const [success, setSuccess]       = useState(false);
  const [toast, setToast]           = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const textareaRef = useRef(null);
  const nameRef     = useRef(null);
  const hebrewDate  = getHebrewDate();
  const STEPS       = mode === 'pan' ? PAN_STEPS : LETTER_STEPS;

  const chooseMode = (m) => { setMode(m); setStep(0); setPrepGone(false); setPrepHiding(false); };
  const closePrep  = (focus = false) => {
    setPrepHiding(true);
    setTimeout(() => { setPrepGone(true); if (focus) nameRef.current?.focus(); }, 520);
  };
  const openPrep = () => { setStep(0); setPrepGone(false); setPrepHiding(false); };

  const growTextarea = () => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = Math.max(mode === 'pan' ? 460 : 620, textareaRef.current.scrollHeight) + 'px';
  };
  useEffect(() => { growTextarea(); }, [letterText, mode]);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      setUploadedFile({ base64: dataUrl.split(',')[1], mimetype: file.type, filename: file.name, preview: file.type.startsWith('image/') ? dataUrl : null });
    };
    reader.readAsDataURL(file);
  };

  const showToast = (message, type = 'success') => { setToast({ message, type }); setTimeout(() => setToast(null), 4000); };

  const handleSend = async () => {
    if (!letterText.trim() && !uploadedFile) { textareaRef.current?.focus(); return; }
    setSending(true);
    try {
      const payload = { mode, name: fullName, motherName, gender, text: letterText.trim() || undefined,
        image: uploadedFile ? { data: uploadedFile.base64, mimetype: uploadedFile.mimetype, filename: uploadedFile.filename } : undefined };
      const res = await fetch('/api/letter/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('send failed');
      setSuccess(true);
    } catch { showToast('שגיאה בשליחה — נסו שוב', 'error'); } finally { setSending(false); }
  };

  const handlePreview = async () => {
    if (!letterText.trim()) { textareaRef.current?.focus(); return; }
    try {
      const res = await fetch('/api/letter/preview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode, name: fullName, motherName, gender, text: letterText.trim() }) });
      if (!res.ok) throw new Error('preview failed');
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      window.open(url, '_blank');
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch { showToast('שגיאה ביצירת התצוגה — נסו שוב', 'error'); }
  };

  const nusachName   = fullName.trim()   || '[שמכם]';
  const nusachMother = motherName.trim() || '[שם האם]';

  return (
    <div dir="rtl" style={{ fontFamily: 'var(--oh-sans)', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ minHeight: '100vh', background: '#ffffff', paddingTop: 60, paddingBottom: 80 }}>

        {/* Mode chooser */}
        {!mode && (
          <div style={{ minHeight: 'calc(100vh - 60px)', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: m ? '40px 16px 60px' : '60px 24px 80px', position: 'relative', overflow: 'hidden' }}>

          <div style={{ maxWidth: 780, width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>

            <style>{`
              @keyframes fadeUp {
                from { opacity: 0; transform: translateY(22px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              .oh-mode-card-v2 {
                background: #fffdf9;
                border-radius: 20px;
                cursor: pointer;
                text-align: center;
                display: flex;
                flex-direction: column;
                border: 1.5px solid #e8e2d8;
                box-shadow: 0 4px 28px rgba(20,34,63,.07);
                transition: transform .28s cubic-bezier(.4,0,.2,1), box-shadow .28s cubic-bezier(.4,0,.2,1), border-color .28s ease;
                animation: fadeUp .55s cubic-bezier(.4,0,.2,1) both;
              }
              .oh-mode-card-v2:hover {
                transform: translateY(-6px) scale(1.015);
                box-shadow: 0 20px 56px rgba(176,141,74,.18), 0 4px 20px rgba(20,34,63,.1);
                border-color: rgba(176,141,74,.55);
              }
              .oh-mode-card-v2:hover .card-icon-bg {
                background: rgba(176,141,74,.14);
                border-color: rgba(176,141,74,.4);
              }
              .oh-mode-card-v2:hover .card-title {
                color: #14223f;
              }
              .oh-mode-card-v2:hover .card-cta {
                color: #b08d4a;
                gap: 10px;
              }
              .card-cta {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 14px;
                font-weight: 700;
                color: #14223f;
                transition: gap .2s ease, color .2s ease;
              }
            `}</style>

            <div style={{ animation: 'fadeUp .4s cubic-bezier(.4,0,.2,1) both', display: 'inline-block', background: '#f5f3ef', border: '1px solid #ddd8cf', borderRadius: 8, padding: '10px 20px', marginBottom: m ? 28 : 40 }}>
              <span style={{ fontSize: 13.5, color: 'var(--oh-ink-soft)', lineHeight: 1.6 }}>
                מעדיפים לכתוב בכתב יד? בתחתית עמוד הכתיבה תוכלו <strong style={{ color: 'var(--oh-ink)', fontWeight: 600 }}>להעלות תמונה של המכתב</strong> — והוא ישלח לאוהל.
              </span>
            </div>

            <div style={{ animation: 'fadeUp .45s .05s cubic-bezier(.4,0,.2,1) both' }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.22em', color: '#b08d4a', textTransform: 'uppercase', marginBottom: 14 }}>רגע של קרבה</div>
              <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 30 : 42, color: 'var(--oh-ink)', marginBottom: 12 }}>מה תרצו לכתוב?</h1>
              <p style={{ fontSize: m ? 15 : 16, color: 'var(--oh-ink-soft)', maxWidth: '32em', margin: m ? '0 auto 32px' : '0 auto 56px', lineHeight: 1.9 }}>
                לא בטוחים מה לבחור? בחרו לפי <strong style={{ color: 'var(--oh-ink)' }}>מתי</strong> אתם כותבים.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 16 : 24 }}>
              {[
                {
                  key: 'letter', title: 'מכתב', sub: 'בכל עת',
                  desc: 'כשאין אירוע מיוחד — רוצים לפנות לרבי, לשתף, לבקש או להודות. בלשון חופשית לחלוטין.',
                  infoTo: '/mikhtav', infoLabel: 'מה זה מכתב?',
                  delay: '.1s',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b08d4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"/>
                      <path d="m3 6 9 7 9-7"/>
                    </svg>
                  ),
                },
                {
                  key: 'pan', title: 'פ"נ', sub: 'בזמנים מיוחדים',
                  desc: 'ערב ראש השנה · יום הולדת · י"ט כסלו · י"ב תמוז · ג׳ תמוז · יו"ד שבט',
                  infoTo: '/pidyon', infoLabel: 'מה זה פ"נ?',
                  delay: '.18s',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b08d4a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  ),
                },
              ].map(opt => (
                <div key={opt.key} className="oh-mode-card-v2" onClick={() => chooseMode(opt.key)}
                  style={{ padding: m ? '32px 24px 26px' : '48px 36px 36px', animationDelay: opt.delay }}>

                  {/* Icon circle */}
                  <div className="card-icon-bg" style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(176,141,74,.08)', border: '1.5px solid rgba(176,141,74,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', transition: 'background .28s ease, border-color .28s ease' }}>
                    {opt.icon}
                  </div>

                  <div className="card-title" style={{ fontFamily: 'var(--oh-serif)', fontSize: m ? 42 : 58, fontWeight: 700, color: '#1a1612', lineHeight: 1, marginBottom: 10, transition: 'color .2s ease' }}>{opt.title}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.22em', color: '#b08d4a', textTransform: 'uppercase', marginBottom: m ? 16 : 24 }}>{opt.sub}</div>
                  <div style={{ fontSize: m ? 14 : 15, color: 'var(--oh-ink-soft)', lineHeight: 1.75, flex: 1, maxWidth: '22em', margin: '0 auto' }}>{opt.desc}</div>

                  <div style={{ marginTop: m ? 24 : 36, paddingTop: m ? 18 : 26, borderTop: '1px solid #ede8df', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link href={opt.infoTo} onClick={e => e.stopPropagation()} style={{ fontSize: 13, color: 'var(--oh-blue)', fontWeight: 600, textDecoration: 'none', opacity: .8 }}>{opt.infoLabel} ›</Link>
                    <span className="card-cta">
                      לכתיבה
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Writing surface */}
        {mode && (
          <div style={{ maxWidth: 920, margin: '14px auto 0', padding: m ? '0 12px' : '0 24px' }}>
            <div style={{ textAlign: 'center', margin: '8px 0 26px' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.2em', color: 'var(--oh-gold-deep)', textTransform: 'uppercase' }}>{mode === 'pan' ? 'פדיון נפש' : 'רגע של קרבה'}</div>
              <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 26 : 34, color: 'var(--oh-ink)', marginTop: 8 }}>{mode === 'pan' ? 'כתבו את הפ"נ שלכם' : 'כתבו את אשר על לבכם'}</h1>
              <button onClick={() => { setMode(null); setLetterText(''); setFullName(''); setMotherName(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--oh-ink-soft)', fontSize: 13, fontFamily: 'var(--oh-sans)', marginTop: 6, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                ← חזרה לבחירה
              </button>
            </div>

            <div style={{ position: 'relative', background: 'var(--oh-paper-warm)', border: '1px solid var(--oh-paper-edge)', borderRadius: 4, boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 40px 80px -50px rgba(20,34,63,.55), 0 8px 24px -18px rgba(20,34,63,.3)', minHeight: mode === 'pan' ? 'auto' : 880, padding: m ? '40px 20px 32px' : '64px 74px 48px' }}>
              <div style={{ position: 'absolute', inset: 9, border: '1px solid #efe7d4', borderRadius: 2, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 20, left: 0, right: 0, textAlign: 'center', fontFamily: 'var(--oh-serif)', fontSize: 15, color: '#b3a98f', letterSpacing: '.08em' }}>ב״ה</div>
              <div style={{ textAlign: 'center', fontSize: 13, color: '#a59c84', marginBottom: 30, letterSpacing: '.04em' }}>{hebrewDate}</div>

              {/* Name fields */}
              <div style={{ display: 'flex', gap: 20, marginBottom: 30, paddingBottom: 26, borderBottom: '1px solid var(--oh-line)', flexWrap: 'wrap' }}>
                <div style={{ flex: 2, minWidth: 160 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>{mode === 'pan' ? 'שם עברי מלא' : 'שם מלא'}</label>
                  <input ref={nameRef} type="text" placeholder="השם שלכם" value={fullName} onChange={e => setFullName(e.target.value)}
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--oh-serif)', fontSize: 19, color: 'var(--oh-ink)', borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 8px' }} />
                </div>
                <div style={{ flex: 1, minWidth: 80, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>בן / בת</label>
                  <div style={{ display: 'flex', borderBottom: '1.5px solid var(--oh-line)' }}>
                    {['בן', 'בת'].map(g => (
                      <button key={g} onClick={() => setGender(g)} style={{ flex: 1, border: 'none', background: gender === g ? 'rgba(176,141,74,.15)' : 'transparent', cursor: 'pointer', fontFamily: 'var(--oh-serif)', fontSize: 18, color: gender === g ? 'var(--oh-ink)' : 'var(--oh-ink-soft)', padding: '4px 8px 8px', fontWeight: gender === g ? 700 : 400, transition: 'all .15s' }}>{g}</button>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 2, minWidth: 160 }}>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>שם האם</label>
                  <input type="text" placeholder="שם האם" value={motherName} onChange={e => setMotherName(e.target.value)}
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', fontFamily: 'var(--oh-serif)', fontSize: 19, color: 'var(--oh-ink)', borderBottom: '1.5px solid var(--oh-line)', padding: '4px 2px 8px' }} />
                </div>
              </div>

              {/* Nusach */}
              {mode === 'pan' && (
                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--oh-line)', fontFamily: 'var(--oh-serif)', lineHeight: 1.85 }}>
                  <div style={{ fontSize: 20, color: 'var(--oh-ink)', textAlign: 'center', marginBottom: 10, fontWeight: 700, letterSpacing: '.06em' }}>פ״נ</div>
                  <div style={{ fontSize: 20, color: 'var(--oh-ink)' }}>
                    אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל{' '}
                    <span style={{ color: fullName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: fullName.trim() ? 'none' : '1px dashed #c4b89a' }}>{nusachName}</span>
                    {' '}{gender}{' '}
                    <span style={{ color: motherName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: motherName.trim() ? 'none' : '1px dashed #c4b89a' }}>{nusachMother}</span>
                  </div>
                </div>
              )}
              {mode === 'letter' && (
                <div style={{ marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--oh-line)', fontFamily: 'var(--oh-serif)', lineHeight: 1.85 }}>
                  <div style={{ fontSize: 20, color: 'var(--oh-ink)', marginBottom: 8 }}>לכבוד כ"ק אדמו"ר</div>
                  <div style={{ fontSize: 18, color: 'var(--oh-ink-soft)' }}>
                    הנני:{' '}
                    <span style={{ color: fullName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: fullName.trim() ? 'none' : '1px dashed #c4b89a' }}>{nusachName}</span>
                    {' '}{gender}{' '}
                    <span style={{ color: motherName.trim() ? 'var(--oh-ink)' : '#c4b89a', borderBottom: motherName.trim() ? 'none' : '1px dashed #c4b89a' }}>{nusachMother}</span>
                  </div>
                </div>
              )}

              <div>
                {mode === 'pan' && <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 10 }}>הבקשה האישית</div>}
                <textarea ref={textareaRef} value={letterText} onChange={e => setLetterText(e.target.value)}
                  placeholder={mode === 'pan' ? 'כתבו כאן את הבקשה האישית שלכם.\n\nניתן לבקש בריאות, פרנסה, שידוך, נחת מהילדים, עניינים רוחניים — כל דבר שעל הלב.\nכתבו בגוף שלישי, כמו שהתחלתם בנוסח.' : 'כתבו כאן את אשר על לבכם.\n\nאין נוסח נכון ואין מילים נכונות. אפשר לכתוב בקשה, תודה, תפילה או כל דבר אישי שתרצו.'}
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'none', fontFamily: 'var(--oh-serif)', fontSize: 20, lineHeight: 2.05, color: 'var(--oh-ink)', minHeight: mode === 'pan' ? 460 : 620, overflow: 'hidden' }} />
              </div>

              {/* File upload */}
              <div style={{ marginTop: 32, paddingTop: 28, borderTop: '1px solid var(--oh-line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
                  <span style={{ flex: 1, height: 1, background: 'var(--oh-line)' }} />
                  <span style={{ fontSize: 13, color: 'var(--oh-ink-soft)', fontWeight: 600, whiteSpace: 'nowrap' }}>כתבתם בכתב יד? העלו תמונה</span>
                  <span style={{ flex: 1, height: 1, background: 'var(--oh-line)' }} />
                </div>
                <label style={{ display: 'block', border: `2px dashed ${uploadedFile ? 'var(--oh-gold-deep)' : 'var(--oh-line)'}`, borderRadius: 12, padding: uploadedFile ? '16px' : '28px 20px', cursor: 'pointer', textAlign: 'center', background: uploadedFile ? 'rgba(181,134,74,.04)' : 'transparent' }}>
                  <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} style={{ display: 'none' }} />
                  {uploadedFile ? (
                    <div>
                      {uploadedFile.preview && <img src={uploadedFile.preview} alt="כתב יד" style={{ maxHeight: 220, maxWidth: '100%', borderRadius: 8, marginBottom: 10 }} />}
                      <div style={{ fontSize: 14, color: 'var(--oh-ink)', fontWeight: 600, marginBottom: 6 }}>{uploadedFile.filename}</div>
                      <button onClick={e => { e.preventDefault(); setUploadedFile(null); }} style={{ fontSize: 13, color: 'var(--oh-ink-soft)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>הסר קובץ</button>
                    </div>
                  ) : (
                    <div>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--oh-gold-deep)" strokeWidth="1.5" style={{ marginBottom: 10 }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                      <div style={{ fontSize: 15, color: 'var(--oh-ink)', fontWeight: 600, marginBottom: 4 }}>לחצו להעלאת תמונה או קובץ</div>
                      <div style={{ fontSize: 13, color: 'var(--oh-ink-soft)' }}>תמונה של כתב יד, סריקה או PDF</div>
                    </div>
                  )}
                </label>
              </div>

              <div style={{ marginTop: 28, paddingTop: 24, borderTop: '1px solid var(--oh-line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, color: 'var(--oh-ink-soft)', marginBottom: 16 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--oh-gold-deep)" strokeWidth="2"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
                  פרטי לחלוטין · בינכם לבין הרבי
                </div>
                <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', alignItems: m ? 'stretch' : 'center', gap: 10 }}>
                  {!m && (
                    <button onClick={handlePreview} disabled={sending} style={{ fontFamily: 'var(--oh-sans)', fontSize: 15, fontWeight: 600, cursor: sending ? 'default' : 'pointer', background: 'transparent', color: 'var(--oh-ink)', border: '1.5px solid var(--oh-line)', padding: '13px 22px', borderRadius: 6, display: 'inline-flex', alignItems: 'center', gap: 9 }}>
                      תצוגה מקדימה
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                  )}
                  <button onClick={handleSend} disabled={sending} style={{ fontFamily: 'var(--oh-sans)', fontSize: 16, fontWeight: 600, cursor: sending ? 'default' : 'pointer', border: 'none', background: sending ? '#7a6b5a' : 'var(--oh-night)', color: 'var(--oh-paper-warm)', padding: '15px 30px', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, opacity: sending ? .8 : 1, width: m ? '100%' : 'auto' }}>
                    {sending ? 'שולח...' : <>{mode === 'pan' ? 'שליחת הפ"נ' : 'שליחת המכתב'} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" /></svg></>}
                  </button>
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center', color: 'var(--oh-ink-soft)', fontSize: 14, marginTop: 24 }}>
              {mode === 'pan' ? 'הפ"נ' : 'המכתב'} ישלח לציון הרבי באוהל הקדוש.{' '}
              <button onClick={openPrep} style={{ background: 'none', border: 'none', color: 'var(--oh-blue)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}>לעיון בהכנות לכתיבה</button>
            </div>
          </div>
        )}
      </div>

      {/* Prep modal */}
      {mode && !prepGone && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(20,16,12,0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', padding: m ? 16 : 32, opacity: prepHiding ? 0 : 1, transition: 'opacity .5s ease', pointerEvents: prepHiding ? 'none' : 'auto' }}>
          <div style={{ background: '#fff', borderRadius: 18, width: '100%', maxWidth: 540, padding: m ? '36px 22px 28px' : '44px 44px 36px', position: 'relative', boxShadow: '0 20px 60px rgba(20,16,12,.22)', border: '1px solid #e4dcd0', animation: prepHiding ? 'none' : 'modalIn .35s cubic-bezier(.4,0,.2,1)' }}>
            <div style={{ position: 'absolute', top: 0, right: 44, left: 44, height: 3, borderRadius: '0 0 3px 3px', background: 'linear-gradient(90deg, transparent, #b5864a, transparent)' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.28em', color: '#b5864a', marginBottom: 24, textTransform: 'uppercase' }}>הכנה {step + 1} מתוך {STEPS.length}</div>
              <div key={step} className="oh-rise">
                <h2 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 26 : 34, lineHeight: 1.2, color: '#1e1a17', marginBottom: 14 }}>{STEPS[step].title}</h2>
                <p style={{ fontSize: m ? 15 : 17, color: '#5c5550', maxWidth: '28em', margin: '0 auto', lineHeight: 1.85 }}>{STEPS[step].body}</p>
                {STEPS[step].nusachPan && (
                  <div style={{ marginTop: 20, background: '#faf6ee', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px', fontFamily: 'var(--oh-serif)', fontSize: 17, color: '#1e1a17', lineHeight: 1.8 }}>
                    ״אָנָּא לְעוֹרֵר רַחֲמִים רַבִּים עַל <span style={{ color: '#b5864a' }}>[שם]</span> בן/בת <span style={{ color: '#b5864a' }}>[שם האם]</span>״
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: 7, justifyContent: 'center', margin: '28px 0 24px' }}>
                {STEPS.map((_, i) => <span key={i} style={{ display: 'inline-block', width: i === step ? 28 : 8, height: 4, borderRadius: 4, background: i === step ? '#b5864a' : '#e4dcd0', transition: 'all .3s' }} />)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                {step > 0 && <button onClick={() => setStep(s => s - 1)} style={{ background: 'transparent', border: '1px solid #e4dcd0', color: '#5c5550', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: 15, fontWeight: 600, padding: '12px 22px', borderRadius: 8 }}>הקודם</button>}
                <button onClick={() => step < STEPS.length - 1 ? setStep(s => s + 1) : closePrep(true)} style={{ background: '#1e1a17', color: '#f5f0e6', border: 'none', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: 15.5, fontWeight: 700, padding: '13px 30px', borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  {step === STEPS.length - 1 ? (mode === 'pan' ? 'לכתיבת הפ"נ ' : 'להתחיל לכתוב ') : 'הבא '}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                </button>
              </div>
              <button onClick={() => closePrep(true)} style={{ display: 'block', margin: '20px auto 0', background: 'none', border: 'none', color: '#1e1a17', cursor: 'pointer', fontFamily: 'var(--oh-sans)', fontSize: 14.5, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>דלג והתחל לכתוב</button>
            </div>
          </div>
        </div>
      )}

      {/* Success */}
      {success && (
        <div onClick={() => setSuccess(false)} style={{ position: 'fixed', inset: 0, zIndex: 400, background: 'rgba(20,16,12,0.88)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32, cursor: 'pointer', animation: 'modalIn .5s cubic-bezier(.4,0,.2,1)' }}>
          <img src="/Lubavitcher Rebbe (481).jpg" alt="הרבי" style={{ maxHeight: '58vh', maxWidth: '88vw', borderRadius: 10, boxShadow: '0 24px 80px rgba(0,0,0,.65)', marginBottom: 32 }} />
          <div style={{ fontFamily: 'var(--oh-serif)', fontSize: 24, fontWeight: 600, color: '#f5f0e6', textAlign: 'center', lineHeight: 1.5 }}>{mode === 'pan' ? 'הפ"נ נשלח לאוהל הקדוש' : 'המכתב נשלח לאוהל הקדוש'}</div>
          <div style={{ fontSize: 13, color: '#b5864a', marginTop: 14, letterSpacing: '.06em' }}>לחצו לסגירה</div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div style={{ position: 'fixed', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 300, direction: 'rtl', background: toast.type === 'error' ? '#2d1a1a' : '#1a1715', color: toast.type === 'error' ? '#e8a0a0' : '#f5f0e6', padding: '16px 28px', borderRadius: 12, fontSize: 16, fontWeight: 600, fontFamily: 'var(--oh-sans)', boxShadow: '0 8px 32px rgba(0,0,0,.3)', border: `1px solid ${toast.type === 'error' ? 'rgba(220,80,80,.3)' : 'rgba(181,134,74,.3)'}`, display: 'flex', alignItems: 'center', gap: 12, animation: 'toastIn .3s cubic-bezier(.4,0,.2,1)' }}>
          {toast.type === 'error' ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e07070" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b5864a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>}
          {toast.message}
        </div>
      )}
    </div>
  );
}
