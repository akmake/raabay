import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  paper: '#fbfaf7', paper2: '#f4f1ea', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', blueMist: '#c4cdd9', gold: '#b08d4a', goldSoft: '#cdb074', line: '#e2ddd2',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

export default function ClassicPage() {
  const m = useIsMobile();
  const wrap = { maxWidth: 1180, margin: '0 auto', padding: m ? '0 18px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.paper, color: V.ink, fontFamily: V.sans, lineHeight: 1.7, WebkitFontSmoothing: 'antialiased' }}>

      {/* Header */}
      <header style={{ borderBottom: `1px solid ${V.line}`, background: 'rgba(251,250,247,.9)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 24 : 30, color: V.ink }}>אֹהֶל</span>
            {!m && <span style={{ fontSize: 13, color: V.inkSoft, letterSpacing: '.05em' }}>מכתב אל הרבי</span>}
          </div>
          {!m && (
            <nav style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
              <a href="#about" style={{ color: V.inkSoft, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>אודות</a>
              <a href="#how" style={{ color: V.inkSoft, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>איך כותבים</a>
              <Link to="/write" style={{ color: V.ink, padding: '10px 0', borderBottom: `1.5px solid ${V.gold}`, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>כתיבת מכתב</Link>
            </nav>
          )}
          {m && <Link to="/write" style={{ background: V.ink, color: V.paper, padding: '10px 18px', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>כתיבת מכתב ←</Link>}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{ padding: m ? '40px 0 32px' : '84px 0 76px' }}>
          <div style={{ ...wrap, display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 0.82fr', gap: m ? 32 : 72, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <span style={{ height: 1, width: 36, background: V.gold, display: 'block' }} />
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase' }}>מקום של קרבה</span>
              </div>
              <h1 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 38 : 64, lineHeight: 1.12, letterSpacing: '-.01em', marginBottom: 20 }}>
                כִּתְבוּ מִכְתָּב,<br />
                <em style={{ fontStyle: 'normal', color: V.blue }}>וְשִׁפְכוּ אֶת לִבְּכֶם</em>
              </h1>
              <p style={{ fontSize: m ? 16 : 20, color: V.inkSoft, marginBottom: 30 }}>
                מילים שלא תמיד יש להן מקום — בקשה, תודה, כאב או תפילה — מוצאות כאן אוזן קשבת. כתבו מכתב אל הרבי מליובאוויטש, והמכתב יונח על ציונו הקדוש.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: m ? 16 : 34, flexWrap: 'wrap' }}>
                <Link to="/write" style={{ background: V.ink, color: V.paper, padding: '13px 28px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>לכתיבת המכתב &nbsp;←</Link>
                <a href="#about" style={{ color: V.ink, padding: '12px 0', borderBottom: `1.5px solid ${V.gold}`, textDecoration: 'none', fontWeight: 600, fontSize: 14 }}>מה זה אוֹהל?</a>
              </div>
              <div style={{ marginTop: 20 }}>
                <Link to="/" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none', opacity: .6 }}>← חזרה לבחירת עיצוב</Link>
              </div>
            </div>

            {/* Portrait */}
            <div>
              <div style={{ position: 'relative', padding: m ? 8 : 14, background: V.paper, border: `1px solid ${V.line}`, boxShadow: '0 30px 70px -40px rgba(20,34,63,.5)' }}>
                <div style={{ position: 'absolute', inset: m ? 4 : 6, border: `1px solid ${V.goldSoft}`, pointerEvents: 'none', zIndex: 2 }} />
                <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: '100%', height: m ? 280 : 470, objectFit: 'cover', objectPosition: 'top' }} />
              </div>
              <div style={{ marginTop: 14, textAlign: 'center', fontFamily: V.serif, fontSize: 16, color: V.ink }}>
                הרבי מליובאוויטש
                <span style={{ display: 'block', fontFamily: V.sans, fontSize: 12, color: V.inkSoft, letterSpacing: '.08em', marginTop: 3 }}>הרב מנחם מענדל שניאורסון</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, background: V.paper2 }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: m ? '48px 18px' : '74px 40px', textAlign: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase', display: 'inline-block', marginBottom: 18 }}>מהו המקום הזה</span>
            <p style={{ fontFamily: V.serif, fontSize: m ? 20 : 27, lineHeight: 1.6, color: V.ink }}>
              במשך עשרות שנים נהגו אנשים מכל קצוות העולם לכתוב אל הרבי — לבקש ברכה, להתייעץ, או פשוט לשתף את אשר על לבם.{' '}
              <span style={{ color: V.blue }}>המנהג לא פסק.</span>{' '}
              כאן תוכלו לכתוב את מכתבכם, והוא יודפס ויונח על הציון באוהל.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section style={{ padding: m ? '64px 0' : '104px 0', textAlign: 'center' }}>
          <div style={wrap}>
            <span style={{ fontFamily: V.serif, fontSize: m ? 56 : 80, color: V.goldSoft, lineHeight: 0, height: 30, display: 'block', marginBottom: 10 }}>״</span>
            <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 26 : 46, lineHeight: 1.35, color: V.ink, margin: '0 auto 24px', letterSpacing: '-.01em' }}>
              מְעַט מִן הָאוֹר דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: 14, letterSpacing: '.14em', color: V.blue, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
            <div style={{ width: 48, height: 1, background: V.gold, margin: '28px auto 0' }} />
          </div>
        </section>

        {/* Steps */}
        <section id="how" style={{ padding: m ? '48px 0 64px' : '96px 0 110px', borderTop: `1px solid ${V.line}` }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: m ? 40 : 64 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase', display: 'inline-block', marginBottom: 14 }}>בשלושה צעדים</span>
              <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 32 : 42, color: V.ink, marginTop: 14 }}>איך כותבים מכתב</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 32 : 0 }}>
              {[
                { n: 'א', t: 'מִתְכּוֹנְנִים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' שמחזיק את הברכה.' },
                { n: 'ב', t: 'כּוֹתְבִים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה. אין נוסח נכון, רק מילים אמיתיות.' },
                { n: 'ג', t: 'מֻנָּח בָּאֹהֶל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
              ].map((s, i) => (
                <div key={i} style={{ padding: m ? '0' : '0 40px', textAlign: 'center', borderRight: (!m && i > 0) ? `1px solid ${V.line}` : 'none' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 54, height: 54, border: `1px solid ${V.goldSoft}`, borderRadius: '50%', fontFamily: V.serif, fontSize: 22, color: V.gold, fontWeight: 700, marginBottom: 16 }}>{s.n}</div>
                  <h3 style={{ fontFamily: V.serif, fontSize: m ? 22 : 25, fontWeight: 500, color: V.ink, marginBottom: 10 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, color: V.inkSoft }}>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section style={{ background: V.ink, color: V.paper, textAlign: 'center', padding: m ? '64px 0' : '92px 0' }}>
          <div style={wrap}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 32 : 48, marginBottom: 16, color: '#fff' }}>הלב שלכם מחכה להישמע</h2>
            <p style={{ fontSize: m ? 16 : 18, color: V.blueMist, marginBottom: 36, maxWidth: '28em', marginInline: 'auto' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
            <Link to="/write" style={{ background: V.gold, color: V.ink, padding: '13px 28px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>פתיחת מכתב חדש &nbsp;←</Link>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: `1px solid ${V.line}` }}>
        <div style={wrap}>
          <div style={{ fontFamily: V.serif, fontSize: 20, color: V.ink, marginBottom: 6 }}>אֹהֶל</div>
          <div style={{ fontSize: 13, color: V.inkSoft, letterSpacing: '.04em' }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
