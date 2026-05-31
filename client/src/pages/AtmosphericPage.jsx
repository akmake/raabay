import { Link } from 'react-router-dom';

const V = {
  night: '#0c1730', night2: '#11203f', cream: '#f6f2ea', creamSoft: '#ece6d8',
  ink: '#15233f', inkSoft: '#41506e', blue: '#3a5a8c', mist: '#aeb9cc',
  gold: '#d8bd84', goldDeep: '#c0a056',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};
const wrap = { maxWidth: 1180, margin: '0 auto', padding: '0 40px' };

export default function AtmosphericPage() {

  return (
    <div dir="rtl" style={{ background: V.night, color: V.cream, fontFamily: V.sans, lineHeight: 1.7, WebkitFontSmoothing: 'antialiased' }}>

      {/* Header – absolute over hero */}
      <header style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 84 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 30, color: V.cream }}>אֹהֶל</span>
            <span style={{ fontSize: 13, color: V.mist, letterSpacing: '.06em' }}>מכתב אל הרבי</span>
          </div>
          <nav style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
            <a href="#about" style={{ color: V.mist, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>אודות</a>
            <a href="#how" style={{ color: V.mist, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>איך כותבים</a>
            <Link to="/write" style={{ color: V.cream, padding: '13px 0', borderBottom: `1.5px solid rgba(216,189,132,.6)`, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>כתיבת מכתב</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{
          position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', overflow: 'hidden', padding: '130px 0 90px',
        }}>
          {/* Background */}
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(60% 45% at 50% 34%, rgba(216,189,132,.20), transparent 70%), radial-gradient(90% 70% at 50% 50%, ${V.night2}, ${V.night} 78%)` }} />
          <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 -120px 120px -60px ${V.night}, inset 0 120px 120px -90px rgba(0,0,0,.4)`, pointerEvents: 'none' }} />
          {/* Stars */}
          <div style={{
            position: 'absolute', inset: 0, opacity: .5, pointerEvents: 'none',
            backgroundImage: `radial-gradient(1px 1px at 18% 30%, rgba(255,255,255,.5), transparent),radial-gradient(1px 1px at 72% 22%, rgba(255,255,255,.4), transparent),radial-gradient(1px 1px at 84% 55%, rgba(255,255,255,.35), transparent),radial-gradient(1px 1px at 30% 68%, rgba(255,255,255,.3), transparent),radial-gradient(1px 1px at 56% 80%, rgba(255,255,255,.25), transparent)`,
          }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
              <span style={{ width: 5, height: 5, background: V.gold, transform: 'rotate(45deg)', display: 'inline-block' }} />
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.22em', color: V.gold }}>מקום של קרבה ושל אור</span>
              <span style={{ width: 5, height: 5, background: V.gold, transform: 'rotate(45deg)', display: 'inline-block' }} />
            </div>

            {/* Arch portrait */}
            <div style={{ position: 'relative', width: 248, margin: '0 auto 40px' }}>
              <div style={{
                position: 'absolute', inset: -50, borderRadius: '50%',
                background: 'radial-gradient(closest-side, rgba(216,189,132,.45), transparent 72%)',
                filter: 'blur(6px)', zIndex: 0,
              }} />
              <div style={{
                position: 'relative', zIndex: 2, padding: 9,
                borderRadius: '124px 124px 10px 10px',
                background: 'linear-gradient(180deg, rgba(216,189,132,.55), rgba(216,189,132,.12))',
                boxShadow: '0 24px 60px -30px rgba(0,0,0,.7)',
              }}>
                <div style={{ borderRadius: '118px 118px 6px 6px', overflow: 'hidden', background: '#0a1228' }}>
                  <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: '100%', height: 296, objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>
            </div>

            <h1 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 60, lineHeight: 1.12, color: V.cream, letterSpacing: '-.01em', marginBottom: 24 }}>
              כִּתְבוּ אֶל הָרֶבִּי,<br />
              <em style={{ fontStyle: 'normal', color: V.gold }}>וְשִׁפְכוּ אֶת לִבְּכֶם</em>
            </h1>
            <p style={{ fontSize: 19.5, color: V.mist, maxWidth: '33em', margin: '0 auto 40px' }}>
              בקשה, תודה, כאב או תפילה — יש מילים שמחכות להיאמר. כתבו את מכתבכם, והוא יונח על ציון הרבי מליובאוויטש.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 34, flexWrap: 'wrap' }}>
              <Link to="/write" style={{ background: V.gold, color: V.night, padding: '14px 32px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15.5 }}>לכתיבת המכתב &nbsp;←</Link>
              <a href="#about" style={{ color: V.cream, padding: '13px 0', borderBottom: `1.5px solid rgba(216,189,132,.6)`, textDecoration: 'none', fontWeight: 600, fontSize: 15.5 }}>מה זה אוֹהל?</a>
            </div>
            <div style={{ marginTop: 28 }}>
              <Link to="/" style={{ fontSize: 13, color: V.mist, textDecoration: 'none', opacity: .6 }}>← חזרה לבחירת עיצוב</Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 3, color: V.mist, fontSize: 12, letterSpacing: '.2em', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: .8 }}>
            <span>גללו</span>
            <span style={{ width: 1, height: 34, background: `linear-gradient(${V.gold}, transparent)`, display: 'block' }} />
          </div>
        </section>

        {/* Quote on dark */}
        <section style={{ padding: '120px 0', textAlign: 'center', borderTop: 'rgba(216,189,132,.18) 1px solid' }}>
          <div style={wrap}>
            <span style={{ fontFamily: V.serif, fontSize: 78, color: V.goldDeep, lineHeight: 0, height: 36, display: 'block', marginBottom: 8, opacity: .7 }}>״</span>
            <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 48, lineHeight: 1.35, color: V.cream, maxWidth: '13em', margin: '0 auto 28px' }}>
              מְעַט מִן הָ<span style={{ color: V.gold }}>אוֹר</span> דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: 14, letterSpacing: '.2em', color: V.mist, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
          </div>
        </section>

        {/* Light panel */}
        <div style={{ background: V.cream, color: V.ink }}>
          <section id="about" style={{ padding: '96px 0 30px' }}>
            <div style={{ maxWidth: 780, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.22em', color: V.blue, display: 'inline-block', marginBottom: 22 }}>מהו המקום הזה</span>
              <p style={{ fontFamily: V.serif, fontSize: 28, lineHeight: 1.6, color: V.ink }}>
                במשך עשרות שנים נהגו אנשים מכל העולם לכתוב אל הרבי — לבקש ברכה, להתייעץ, או פשוט לשתף את הלב.{' '}
                <span style={{ color: V.goldDeep }}>המנהג לא פסק.</span>{' '}
                כאן תכתבו את מכתבכם, והוא יודפס ויונח על הציון באוהל.
              </p>
            </div>
          </section>

          <section id="how" style={{ padding: '80px 0 104px' }}>
            <div style={wrap}>
              <div style={{ textAlign: 'center', marginBottom: 60 }}>
                <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 42, color: V.ink }}>איך כותבים מכתב</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 26 }}>
                {[
                  { n: 'א', t: 'מִתְכּוֹנְנִים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' לברכה.' },
                  { n: 'ב', t: 'כּוֹתְבִים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה.' },
                  { n: 'ג', t: 'מֻנָּח בָּאֹהֶל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
                ].map((s, i) => (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e7e1d4', borderRadius: 6, padding: '38px 32px', textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60, borderRadius: '50%', background: V.night, color: V.gold, fontFamily: V.serif, fontSize: 26, fontWeight: 700, marginBottom: 22 }}>{s.n}</div>
                    <h3 style={{ fontFamily: V.serif, fontSize: 25, fontWeight: 500, color: V.ink, marginBottom: 12 }}>{s.t}</h3>
                    <p style={{ fontSize: 16, color: V.inkSoft }}>{s.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Closing */}
        <section style={{ textAlign: 'center', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 80% at 50% 0%, rgba(216,189,132,.16), transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={wrap}>
              <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 50, marginBottom: 18, color: V.cream }}>הלב שלכם מחכה להישמע</h2>
              <p style={{ fontSize: 18, color: V.mist, margin: '0 auto 40px', maxWidth: '28em' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
              <Link to="/write" style={{ background: V.gold, color: V.night, padding: '14px 32px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15.5 }}>פתיחת מכתב חדש &nbsp;←</Link>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '48px 0', textAlign: 'center', borderTop: '1px solid rgba(216,189,132,.18)' }}>
        <div style={wrap}>
          <div style={{ fontFamily: V.serif, fontSize: 22, color: V.cream, marginBottom: 8 }}>אֹהֶל</div>
          <div style={{ fontSize: 13, color: V.mist, letterSpacing: '.05em' }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
