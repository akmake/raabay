'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import { useIsMobile } from '@/hooks/useIsMobile';

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

export default function WritePidyonClient() {
  const m = useIsMobile();
  const t = useTranslations('write');

  const PAN_STEPS = [
    { title: t('panStep1Title'), body: t('panStep1Body') },
    { title: t('panStep2Title'), body: t('panStep2Body') },
    { title: t('panStep3Title'), body: t('panStep3Body') },
    { title: t('panStep4Title'), body: t('panStep4Body') },
    { title: t('panStep5Title'), body: t('panStep5Body') },
    { title: t('panStep6Title'), body: t('panStep6Body'), nusachNote: true },
  ];

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
  const [hebrewDate, setHebrewDate] = useState('');

  useEffect(() => { setHebrewDate(getHebrewDate()); }, []);

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
    textareaRef.current.style.height = Math.max(460, textareaRef.current.scrollHeight) + 'px';
  };

  useEffect(() => { growTextarea(); }, [letterText]);

  const handleSend = () => {
    if (!letterText.trim()) { textareaRef.current?.focus(); return; }
    setSent(true);
  };

  const nusachName = fullName.trim() || '[שמכם]';
  const nusachMother = motherName.trim() || '[שם האם]';

  // val stays in Hebrew for the nusach formula; label is translated for the button
  const genders = [
    { val: 'בן', label: t('son') },
    { val: 'בת', label: t('daughter') },
  ];

  return (
    <div style={{ fontFamily: 'var(--oh-sans)', minHeight: '100vh' }}>
      <Navbar />
      <AccessibilityWidget />

      <div style={{ minHeight: '100vh', background: '#ffffff', paddingTop: 60, paddingBottom: 80 }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1080, margin: '0 auto', padding: m ? '16px 16px' : '22px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', border: '1.5px solid var(--oh-gold)' }}>
              <Image src="/rebbe.webp" alt="" width={40} height={40} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--oh-serif)', fontWeight: 700, fontSize: 24, color: 'var(--oh-ink)' }}>{t('topbarTitle')}</div>
              <div style={{ fontFamily: 'var(--oh-sans)', fontSize: 11.5, fontWeight: 500, color: 'var(--oh-ink-soft)', letterSpacing: '.04em', marginTop: -3 }}>{t('topbarSubPan')}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <button onClick={openPrep} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--oh-sans)', fontSize: 14.5, fontWeight: 600,
              color: 'var(--oh-ink-soft)', display: 'inline-flex', alignItems: 'center', gap: 7,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a7 7 0 0 1 7 7c0 3-2 4-2 6H7c0-2-2-3-2-6a7 7 0 0 1 7-7Z" />
                <path d="M9 19h6M10 22h4" />
              </svg>
              {t('prepBtnPrep')}
            </button>
            <Link href="/pidyon" style={{
              background: 'none', color: 'var(--oh-ink-soft)', textDecoration: 'none',
              fontFamily: 'var(--oh-sans)', fontSize: 14.5, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
              </svg>
              {t('prepBtnInfo')}
            </Link>
          </div>
        </div>

        {/* Letter */}
        <div style={{ maxWidth: 920, margin: '14px auto 0', padding: m ? '0 12px' : '0 24px' }}>
          <div style={{ textAlign: 'center', margin: '8px 0 26px' }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '.2em', color: 'var(--oh-gold-deep)', textTransform: 'uppercase' }}>{t('panModeBadge')}</div>
            <h1 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: 34, color: 'var(--oh-ink)', marginTop: 8 }}>{t('panModeTitle')}</h1>
          </div>

          <div style={{
            position: 'relative',
            background: 'var(--oh-paper-warm)',
            border: '1px solid var(--oh-paper-edge)',
            borderRadius: 4,
            boxShadow: '0 1px 0 rgba(255,255,255,.7) inset, 0 40px 80px -50px rgba(20,34,63,.55), 0 8px 24px -18px rgba(20,34,63,.3)',
            padding: m ? '40px 20px 32px' : '64px 74px 48px',
          }}>
            <div style={{ position: 'absolute', inset: 9, border: '1px solid #efe7d4', borderRadius: 2, pointerEvents: 'none' }} />
            {/* ב"ה stays in Hebrew — traditional letter heading */}
            <div style={{ position: 'absolute', top: 20, left: 0, right: 0, textAlign: 'center', fontFamily: 'var(--oh-serif)', fontSize: 15, color: '#b3a98f', letterSpacing: '.08em' }}>ב״ה</div>
            <div style={{ textAlign: 'center', fontSize: 13, color: '#a59c84', marginBottom: 30, letterSpacing: '.04em' }}>{hebrewDate}</div>

            {/* Name fields */}
            <div style={{ display: 'flex', gap: 20, marginBottom: 30, paddingBottom: 26, borderBottom: '1px solid var(--oh-line)', flexWrap: 'wrap' }}>
              <div style={{ flex: 2, minWidth: 160 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>{t('namePanFull')}</label>
                <input
                  ref={nameRef}
                  type="text"
                  placeholder={t('namePlaceholder')}
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
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>{t('sonDaughter')}</label>
                <div style={{ display: 'flex', gap: 0, borderBottom: '1.5px solid var(--oh-line)' }}>
                  {genders.map(({ val, label }) => (
                    <button
                      key={val}
                      onClick={() => setGender(val)}
                      style={{
                        flex: 1, border: 'none', background: gender === val ? 'rgba(176,141,74,.15)' : 'transparent',
                        cursor: 'pointer', fontFamily: 'var(--oh-serif)', fontSize: 18,
                        color: gender === val ? 'var(--oh-ink)' : 'var(--oh-ink-soft)',
                        padding: '4px 8px 8px', fontWeight: gender === val ? 700 : 400,
                        transition: 'all .15s',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ flex: 2, minWidth: 160 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 7 }}>{t('motherName')}</label>
                <input
                  type="text"
                  placeholder={t('motherPlaceholder')}
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

            {/* Sacred nusach formula stays in Hebrew across all locales */}
            <div style={{
              marginBottom: 28, paddingBottom: 24, borderBottom: '1px solid var(--oh-line)',
              fontFamily: 'var(--oh-serif)', lineHeight: 1.85,
            }}>
              <div style={{ fontSize: 20, color: 'var(--oh-ink)', textAlign: 'center', marginBottom: 10, fontWeight: 700, letterSpacing: '.06em' }}>פ״נ</div>
              <div style={{ fontSize: 20, color: 'var(--oh-ink)' }}>
                אנא לעורר רחמים רבים על נפש רוח נשמה של{' '}
                <span style={{
                  color: fullName.trim() ? 'var(--oh-ink)' : '#c4b89a',
                  borderBottom: fullName.trim() ? 'none' : '1px dashed #c4b89a',
                  transition: 'color .2s',
                }}>
                  {nusachName}
                </span>
                {' '}{gender}{' '}
                <span style={{
                  color: motherName.trim() ? 'var(--oh-ink)' : '#c4b89a',
                  borderBottom: motherName.trim() ? 'none' : '1px dashed #c4b89a',
                  transition: 'color .2s',
                }}>
                  {nusachMother}
                </span>
              </div>
            </div>

            {/* Personal request */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', color: 'var(--oh-gold-deep)', marginBottom: 10 }}>{t('personalRequest')}</div>
              <textarea
                ref={textareaRef}
                value={letterText}
                onChange={(e) => setLetterText(e.target.value)}
                placeholder={t('placeholderPan')}
                style={{
                  width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'none',
                  fontFamily: 'var(--oh-serif)', fontSize: 20, lineHeight: 2.05, color: 'var(--oh-ink)',
                  minHeight: 460, overflow: 'hidden',
                }}
              />
            </div>

            {/* Footer */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginTop: 30, paddingTop: 26, borderTop: '1px solid var(--oh-line)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 13.5, color: 'var(--oh-ink-soft)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--oh-gold-deep)" strokeWidth="2">
                  <rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
                {t('privacy')}
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
                {sent ? t('successPan') : <>
                  {t('btnSendPan')}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z" />
                  </svg>
                </>}
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', color: 'var(--oh-ink-soft)', fontSize: 14, marginTop: 24 }}>
            {t('panSentTo')}{' '}
            <button onClick={openPrep} style={{ background: 'none', border: 'none', color: 'var(--oh-blue)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit', padding: 0 }}>
              {t('reviewPrep')}
            </button>
          </div>
        </div>
      </div>

      {/* Preparations Modal */}
      {!prepGone && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(10,18,36,0.5)',
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
          padding: m ? 16 : 32,
          opacity: prepHiding ? 0 : 1,
          transition: 'opacity .5s ease',
          pointerEvents: prepHiding ? 'none' : 'auto',
        }}>
          <div style={{
            background: 'var(--oh-night)',
            borderRadius: 20,
            width: '100%', maxWidth: 560,
            padding: m ? '32px 20px' : '40px 44px',
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
                {t('prepCount', { current: step + 1, total: PAN_STEPS.length })}
              </div>

              <div key={step} className="oh-rise">
                <h2 style={{ fontFamily: 'var(--oh-serif)', fontWeight: 500, fontSize: m ? 28 : 38, lineHeight: 1.18, color: '#fff', marginBottom: 18 }}>
                  {PAN_STEPS[step].title}
                </h2>
                <p style={{ fontSize: 18, color: 'var(--oh-mist)', maxWidth: '30em', margin: '0 auto' }}>
                  {PAN_STEPS[step].body}
                </p>
                {PAN_STEPS[step].nusachNote && (
                  <div style={{
                    marginTop: 22, background: 'rgba(255,255,255,.05)',
                    border: '1px solid rgba(201,168,92,.3)', borderRadius: 10,
                    padding: '18px 22px', fontFamily: 'var(--oh-serif)', fontSize: 18,
                    color: '#e9e3d3', lineHeight: 1.7,
                  }}>
                    {/* Nusach formula stays in Hebrew — sacred text */}
                    ״אנא לעורר רחמים רבים על נפש רוח נשמה של{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם]</span>{' '}
                    בן/בת{' '}
                    <span style={{ color: 'var(--oh-gold-letter)' }}>[שם האם]</span>
                    ״
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: 9, justifyContent: 'center', margin: '36px 0 28px' }}>
                {PAN_STEPS.map((_, i) => (
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
                  }}>{t('btnPrev')}</button>
                )}
                <button
                  onClick={() => step < PAN_STEPS.length - 1 ? setStep(s => s + 1) : closePrep(true)}
                  style={{
                    background: 'var(--oh-gold-letter)', color: 'var(--oh-night)',
                    border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--oh-sans)', fontSize: 16, fontWeight: 600,
                    padding: '14px 32px', borderRadius: 7,
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                  }}
                >
                  {step === PAN_STEPS.length - 1 ? t('btnStartPan') : t('btnNext')}
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
                {t('btnSkip')}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`@keyframes modalIn { from { transform: scale(.95) translateY(12px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }`}</style>
    </div>
  );
}
