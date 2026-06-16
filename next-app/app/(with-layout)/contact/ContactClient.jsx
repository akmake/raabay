'use client';

import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  bg: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', navy: '#14223f', mist: '#c4cdd9',
  gold: '#b08d4a', goldSoft: 'rgba(176,141,74,.13)', line: '#e8e8e8',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

const CONTACT_EMAIL = 'writingtotherabbi@gmail.com';

export default function ContactClient() {
  const m = useIsMobile();
  const wrap = { maxWidth: 720, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      {/* Hero */}
      <section style={{ background: V.navy, position: 'relative', overflow: 'hidden', padding: m ? '72px 0' : '100px 0' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)', padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />בנייה ופיתוח
          </span>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 46 : 74, lineHeight: 1.1, color: '#fff', marginBottom: m ? 18 : 24, letterSpacing: '-.02em' }}>
            צור קשר
          </h1>
          <p style={{ fontSize: m ? 16 : 19, color: V.mist, maxWidth: '28em', margin: '0 auto', lineHeight: 1.85 }}>
            האתר עדיין בשלבי בנייה ופיתוח — ואנחנו שמחים לשמוע מכם.
          </p>
        </div>
      </section>

      {/* Content */}
      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          {/* Still building */}
          <div style={{ marginBottom: m ? 48 : 64 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 10, textTransform: 'uppercase' }}>איפה אנחנו עכשיו</div>
            <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 34, fontWeight: 700, color: V.ink, marginBottom: 20, lineHeight: 1.25 }}>בתהליכי בנייה ופיתוח</h2>
            <p style={{ fontSize: m ? 16 : 18, color: V.inkSoft, lineHeight: 1.9, marginBottom: 16 }}>
              אנחנו עובדים על בניית פלטפורמה שתאפשר לכל יהודי — בכל מקום בעולם — לשלוח מכתב לרבי בקלות, בכבוד, ובדרך הנכונה.
            </p>
            <p style={{ fontSize: m ? 16 : 18, color: V.inkSoft, lineHeight: 1.9 }}>
              האתר פעיל ומקבל מכתבים, אך עדיין מתפתח — ותמיד יש מה לשפר, להוסיף, ולייפות.
            </p>
          </div>

          <div style={{ height: 1, background: V.line, marginBottom: m ? 48 : 64 }} />

          {/* Help & support */}
          <div style={{ marginBottom: m ? 48 : 64 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 10, textTransform: 'uppercase' }}>איך אפשר לעזור</div>
            <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 34, fontWeight: 700, color: V.ink, marginBottom: 24, lineHeight: 1.25 }}>מוזמנים להצטרף</h2>

            {[
              { icon: '✦', title: 'תמיכה כספית', desc: 'הפרויקט פועל עם עלויות שרת, שליחת מכתבים ופיתוח. כל תמיכה מסייעת להמשיך ולגדול.' },
              { icon: '✦', title: 'עזרה טכנית', desc: 'מפתחים, מעצבים, אנשי שיווק — שמחים לשמוע מכם.' },
              { icon: '✦', title: 'הצעות ורעיונות', desc: 'יש לכם רעיון לשיפור, פיצ\'ר שהיה שווה, או משהו שלא עבד טוב? נשמח לדעת.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: m ? 14 : 20, marginBottom: m ? 22 : 28, alignItems: 'flex-start' }}>
                <div style={{ width: m ? 36 : 44, height: m ? 36 : 44, flexShrink: 0, borderRadius: '50%', background: 'rgba(176,141,74,.1)', border: '1px solid rgba(176,141,74,.25)', color: V.gold, fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 21, fontWeight: 600, color: V.ink, marginBottom: 5 }}>{item.title}</div>
                  <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, background: V.line, marginBottom: m ? 48 : 64 }} />

          {/* Email CTA */}
          <div style={{ background: V.navy, borderRadius: m ? 18 : 24, padding: m ? '44px 24px' : '64px 56px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 40, fontWeight: 700, color: '#fff', marginBottom: 12 }}>פנו אלינו</h2>
              <p style={{ fontSize: m ? 15 : 17, color: V.mist, maxWidth: '26em', margin: '0 auto 32px', lineHeight: 1.8 }}>
                לכל שאלה, הצעה, בקשת שיתוף פעולה, או כל דבר אחר — כתבו לנו ישירות.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: V.gold, color: V.navy,
                  padding: m ? '13px 28px' : '16px 40px',
                  borderRadius: 10, textDecoration: 'none',
                  fontWeight: 700, fontSize: m ? 15 : 17,
                  letterSpacing: '.01em',
                  boxShadow: '0 4px 20px rgba(201,168,92,.35)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Z"/>
                  <path d="m3 6 9 7 9-7"/>
                </svg>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
