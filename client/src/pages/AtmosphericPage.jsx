import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  night: '#0c1730', night2: '#11203f', cream: '#f6f2ea',
  ink: '#15233f', inkSoft: '#41506e', blue: '#3a5a8c', mist: '#aeb9cc',
  gold: '#d8bd84', goldDeep: '#c0a056',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

export default function AtmosphericPage() {
  const m = useIsMobile();
  const wrap = { maxWidth: 1180, margin: '0 auto', padding: m ? '0 18px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.night, color: V.cream, fontFamily: V.sans, lineHeight: 1.7, WebkitFontSmoothing: 'antialiased' }}>

      {/* Header */}
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 24 : 30, color: V.cream }}>אֹהֶל</span>
            {!m && <span style={{ fontSize: 13, color: V.mist, letterSpacing: '.06em' }}>מכתב אל הרבי</span>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: m ? 12 : 34 }}>
            {!m && <>
              <a href="#about" style={{ color: V.mist, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>אודות</a>
              <a href="#how" style={{ color: V.mist, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>איך כותבים</a>
            </>}
            <Link to="/write" style={{ color: V.cream, padding: m ? '10px 16px' : '11px 0', border: m ? '1.5px solid rgba(216,189,132,.5)' : 'none', borderBottom: m ? undefined : `1.5px solid rgba(216,189,132,.6)`, borderRadius: m ? 6 : 0, textDecoration: 'none', fontWeight: 600, fontSize: m ? 13 : 15 }}>כתיבת מכתב</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', padding: m ? '100px 18px 80px' : '130px 0 90px' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(60% 45% at 50% 34%, rgba(216,189,132,.20), transparent 70%), radial-gradient(90% 70% at 50% 50%, ${V.night2}, ${V.night} 78%)` }} />
          <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 -120px 120px -60px ${V.night}, inset 0 120px 120px -90px rgba(0,0,0,.4)`, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, opacity: .5, backgroundImage: `radial-gradient(1px 1px at 18% 30%, rgba(255,255,255,.5), transparent),radial-gradient(1px 1px at 72% 22%, rgba(255,255,255,.4), transparent),radial-gradient(1px 1px at 84% 55%, rgba(255,255,255,.35), transparent),radial-gradient(1px 1px at 30% 68%, rgba(255,255,255,.3), transparent)` }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 680, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, marginBottom: m ? 28 : 40 }}>
              <span style={{ width: 5, height: 5, background: V.gold, transform: 'rotate(45deg)', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.2em', color: V.gold }}>מקום של קרבה ושל אור</span>
              <span style={{ width: 5, height: 5, background: V.gold, transform: 'rotate(45deg)', display: 'inline-block' }} />
            </div>

            {/* Arch portrait */}
            <div style={{ position: 'relative', width: m ? 180 : 248, margin: '0 auto 36px' }}>
              <div style={{ position: 'absolute', inset: -40, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(216,189,132,.45), transparent 72%)', filter: 'blur(6px)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 2, padding: 8, borderRadius: '124px 124px 10px 10px', background: 'linear-gradient(180deg, rgba(216,189,132,.55), rgba(216,189,132,.12))', boxShadow: '0 24px 60px -30px rgba(0,0,0,.7)' }}>
                <div style={{ borderRadius: '118px 118px 6px 6px', overflow: 'hidden', background: '#0a1228' }}>
                  <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: '100%', height: m ? 220 : 296, objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>
            </div>

            <h1 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 36 : 60, lineHeight: 1.12, color: V.cream, letterSpacing: '-.01em', marginBottom: 20 }}>
              כִּתְבוּ אֶל הָרֶבִּי,<br />
              <em style={{ fontStyle: 'normal', color: V.gold }}>וְשִׁפְכוּ אֶת לִבְּכֶם</em>
            </h1>
            <p style={{ fontSize: m ? 16 : 19.5, color: V.mist, margin: '0 auto 36px' }}>
              בקשה, תודה, כאב או תפילה — יש מילים שמחכות להיאמר. כתבו את מכתבכם, והוא יונח על ציון הרבי מליובאוויטש.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: m ? 14 : 34, flexWrap: 'wrap' }}>
              <Link to="/write" style={{ background: V.gold, color: V.night, padding: '13px 28px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>לכתיבת המכתב &nbsp;←</Link>
              <a href="#about" style={{ color: V.cream, padding: '11px 0', borderBottom: `1.5px solid rgba(216,189,132,.6)`, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>מה זה אוֹהל?</a>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link to="/" style={{ fontSize: 13, color: V.mist, textDecoration: 'none', opacity: .6 }}>← חזרה לבחירת עיצוב</Link>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section style={{ padding: m ? '64px 0' : '120px 0', textAlign: 'center', borderTop: '1px solid rgba(216,189,132,.18)' }}>
          <div style={wrap}>
            <span style={{ fontFamily: V.serif, fontSize: m ? 52 : 78, color: V.goldDeep, lineHeight: 0, height: 30, display: 'block', marginBottom: 8, opacity: .7 }}>״</span>
            <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 26 : 48, lineHeight: 1.35, color: V.cream, margin: '0 auto 24px' }}>
              מְעַט מִן הָ<span style={{ color: V.gold }}>אוֹר</span> דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: 13, letterSpacing: '.18em', color: V.mist, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
          </div>
        </section>

        {/* Light panel */}
        <div style={{ background: V.cream, color: V.ink }}>
          <section id="about" style={{ padding: m ? '48px 0 24px' : '96px 0 30px' }}>
            <div style={{ maxWidth: 780, margin: '0 auto', padding: m ? '0 18px' : '0 40px', textAlign: 'center' }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.2em', color: V.blue, display: 'inline-block', marginBottom: 18 }}>מהו המקום הזה</span>
              <p style={{ fontFamily: V.serif, fontSize: m ? 20 : 28, lineHeight: 1.6, color: V.ink }}>
                במשך עשרות שנים נהגו אנשים מכל העולם לכתוב אל הרבי — לבקש ברכה, להתייעץ, או פשוט לשתף את הלב.{' '}
                <span style={{ color: V.goldDeep }}>המנהג לא פסק.</span>{' '}
                כאן תכתבו את מכתבכם, והוא יודפס ויונח על הציון באוהל.
              </p>
            </div>
          </section>

          <section id="how" style={{ padding: m ? '40px 0 64px' : '80px 0 104px' }}>
            <div style={wrap}>
              <div style={{ textAlign: 'center', marginBottom: m ? 36 : 60 }}>
                <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 30 : 42, color: V.ink }}>איך כותבים מכתב</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 20 : 26 }}>
                {[
                  { n: 'א', t: 'מִתְכּוֹנְנִים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' לברכה.' },
                  { n: 'ב', t: 'כּוֹתְבִים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה.' },
                  { n: 'ג', t: 'מֻנָּח בָּאֹהֶל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e7e1d4', borderRadius: 6, padding: m ? '28px 24px' : '38px 32px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 54, height: 54, borderRadius: '50%', background: V.night, color: V.gold, fontFamily: V.serif, fontSize: 24, fontWeight: 700, marginBottom: 18 }}>{s.n}</div>
                    <h3 style={{ fontFamily: V.serif, fontSize: m ? 22 : 25, fontWeight: 500, color: V.ink, marginBottom: 10 }}>{s.t}</h3>
                    <p style={{ fontSize: 15, color: V.inkSoft }}>{s.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Closing */}
        <section style={{ textAlign: 'center', padding: m ? '64px 0' : '110px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 80% at 50% 0%, rgba(216,189,132,.16), transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2, ...wrap }}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 30 : 50, marginBottom: 16, color: V.cream }}>הלב שלכם מחכה להישמע</h2>
            <p style={{ fontSize: m ? 16 : 18, color: V.mist, margin: '0 auto 36px', maxWidth: '28em' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
            <Link to="/write" style={{ background: V.gold, color: V.night, padding: '13px 28px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>פתיחת מכתב חדש &nbsp;←</Link>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(216,189,132,.18)' }}>
        <div style={wrap}>
          <div style={{ fontFamily: V.serif, fontSize: 20, color: V.cream, marginBottom: 6 }}>אֹהֶל</div>
          <div style={{ fontSize: 13, color: V.mist, letterSpacing: '.05em' }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
