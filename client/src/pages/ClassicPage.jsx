import { Link } from 'react-router-dom';

const V = {
  paper: '#fbfaf7', paper2: '#f4f1ea', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', blueMist: '#c4cdd9', gold: '#b08d4a', goldSoft: '#cdb074', line: '#e2ddd2',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};
const wrap = { maxWidth: 1180, margin: '0 auto', padding: '0 40px' };

export default function ClassicPage() {

  return (
    <div dir="rtl" style={{ background: V.paper, color: V.ink, fontFamily: V.sans, lineHeight: 1.7, WebkitFontSmoothing: 'antialiased' }}>

      {/* Header */}
      <header style={{ borderBottom: `1px solid ${V.line}`, background: 'rgba(251,250,247,.9)', backdropFilter: 'blur(8px)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 30, color: V.ink }}>אֹהֶל</span>
            <span style={{ fontSize: 13, color: V.inkSoft, letterSpacing: '.05em' }}>מכתב אל הרבי</span>
          </div>
          <nav style={{ display: 'flex', gap: 34, alignItems: 'center' }}>
            <a href="#about" style={{ color: V.inkSoft, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>אודות</a>
            <a href="#how" style={{ color: V.inkSoft, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>איך כותבים</a>
            <Link to="/write" style={{ color: V.ink, padding: '12px 0', borderBottom: `1.5px solid ${V.gold}`, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>כתיבת מכתב</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section style={{ padding: '84px 0 76px' }}>
          <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 0.82fr', gap: 72, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26 }}>
                <span style={{ height: 1, width: 46, background: V.gold, display: 'block' }} />
                <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase' }}>מקום של קרבה</span>
              </div>
              <h1 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 64, lineHeight: 1.1, letterSpacing: '-.01em', marginBottom: 26 }}>
                כִּתְבוּ מִכְתָּב,<br />
                <em style={{ fontStyle: 'normal', color: V.blue }}>וְשִׁפְכוּ אֶת לִבְּכֶם</em>
              </h1>
              <p style={{ fontSize: 20, color: V.inkSoft, maxWidth: '30em', marginBottom: 38 }}>
                מילים שלא תמיד יש להן מקום — בקשה, תודה, כאב או תפילה — מוצאות כאן אוזן קשבת. כתבו מכתב אל הרבי מליובאוויטש, והמכתב יונח על ציונו הקדוש.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
                <Link to="/write" style={{ background: V.ink, color: V.paper, padding: '13px 30px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>לכתיבת המכתב &nbsp;←</Link>
                <a href="#about" style={{ color: V.ink, padding: '12px 0', borderBottom: `1.5px solid ${V.gold}`, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>מה זה אוֹהל?</a>
              </div>
              <div style={{ marginTop: 28 }}>
                <Link to="/" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none', opacity: .7 }}>← חזרה לבחירת עיצוב</Link>
              </div>
            </div>

            {/* Portrait */}
            <div>
              <div style={{ position: 'relative', padding: 14, background: V.paper, border: `1px solid ${V.line}`, boxShadow: '0 30px 70px -40px rgba(20,34,63,.5)' }}>
                <div style={{ position: 'absolute', inset: 6, border: `1px solid ${V.goldSoft}`, pointerEvents: 'none', zIndex: 2 }} />
                <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: 380, height: 470, objectFit: 'cover' }} />
              </div>
              <div style={{ marginTop: 16, textAlign: 'center', fontFamily: V.serif, fontSize: 17, color: V.ink, letterSpacing: '.02em' }}>
                הרבי מליובאוויטש
                <span style={{ display: 'block', fontFamily: V.sans, fontSize: 13, color: V.inkSoft, letterSpacing: '.1em', marginTop: 3 }}>הרב מנחם מענדל שניאורסון</span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" style={{ borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, background: V.paper2 }}>
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '74px 40px', textAlign: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase', display: 'inline-block', marginBottom: 22 }}>מהו המקום הזה</span>
            <p style={{ fontFamily: V.serif, fontSize: 27, lineHeight: 1.6, color: V.ink }}>
              במשך עשרות שנים נהגו אנשים מכל קצוות העולם לכתוב אל הרבי — לבקש ברכה, להתייעץ, או פשוט לשתף את אשר על לבם.{' '}
              <span style={{ color: V.blue }}>המנהג לא פסק.</span>{' '}
              כאן תוכלו לכתוב את מכתבכם, והוא יודפס ויונח על הציון באוהל.
            </p>
          </div>
        </section>

        {/* Quote */}
        <section style={{ padding: '104px 0', textAlign: 'center' }}>
          <div style={wrap}>
            <span style={{ fontFamily: V.serif, fontSize: 80, color: V.goldSoft, lineHeight: 0, height: 40, display: 'block', marginBottom: 10 }}>״</span>
            <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 46, lineHeight: 1.35, color: V.ink, maxWidth: '14em', margin: '0 auto 30px', letterSpacing: '-.01em' }}>
              מְעַט מִן הָאוֹר דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: 15, letterSpacing: '.16em', color: V.blue, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
            <div style={{ width: 54, height: 1, background: V.gold, margin: '34px auto 0' }} />
          </div>
        </section>

        {/* Steps */}
        <section id="how" style={{ padding: '96px 0 110px', borderTop: `1px solid ${V.line}` }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.18em', color: V.blue, textTransform: 'uppercase', display: 'inline-block', marginBottom: 18 }}>בשלושה צעדים</span>
              <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 42, color: V.ink, marginTop: 18 }}>איך כותבים מכתב</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
              {[
                { n: 'א', t: 'מִתְכּוֹנְנִים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' שמחזיק את הברכה.' },
                { n: 'ב', t: 'כּוֹתְבִים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה. אין נוסח נכון, רק מילים אמיתיות.' },
                { n: 'ג', t: 'מֻנָּח בָּאֹהֶל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '0 40px', textAlign: 'center', borderRight: i > 0 ? `1px solid ${V.line}` : 'none' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 58, height: 58, border: `1px solid ${V.goldSoft}`, borderRadius: '50%', fontFamily: V.serif, fontSize: 24, color: V.gold, fontWeight: 700, marginBottom: 20 }}>{s.n}</div>
                  <h3 style={{ fontFamily: V.serif, fontSize: 25, fontWeight: 500, color: V.ink, marginBottom: 12 }}>{s.t}</h3>
                  <p style={{ fontSize: 16, color: V.inkSoft, maxWidth: '22em', margin: '0 auto' }}>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section style={{ background: V.ink, color: V.paper, textAlign: 'center', padding: '92px 0' }}>
          <div style={wrap}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 48, marginBottom: 18, color: '#fff' }}>הלב שלכם מחכה להישמע</h2>
            <p style={{ fontSize: 18, color: V.blueMist, marginBottom: 40, maxWidth: '28em', marginInline: 'auto' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
            <Link to="/write" style={{ background: V.gold, color: V.ink, padding: '13px 30px', borderRadius: 2, textDecoration: 'none', fontWeight: 600, fontSize: 15 }}>פתיחת מכתב חדש &nbsp;←</Link>
          </div>
        </section>
      </main>

      <footer style={{ padding: '46px 0', textAlign: 'center', borderTop: `1px solid ${V.line}` }}>
        <div style={wrap}>
          <div style={{ fontFamily: V.serif, fontSize: 22, color: V.ink, marginBottom: 8 }}>אֹהֶל</div>
          <div style={{ fontSize: 13, color: V.inkSoft, letterSpacing: '.04em' }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
