import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';
import Navbar from '@/components/layout/Navbar';

const V = {
  bg: '#f5f6f8', white: '#fff', ink: '#0f1c33', inkSoft: '#46556f',
  blue: '#33558a', navy: '#101e38', mist: '#aab6cb', mistSoft: '#e7ebf1',
  gold: '#c9a85c', line: '#e4e7ec',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

export default function ModernPage() {
  const m = useIsMobile();
  const wrap = { maxWidth: 1180, margin: '0 auto', padding: m ? '0 18px' : '0 44px' };
  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
      <Navbar />

      {/* Split Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1.04fr 1fr', minHeight: m ? 'auto' : '100vh' }}>

        {/* Photo (on top on mobile) */}
        {m && (
          <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
            <img src="/הרבי.webp" alt="הרבי" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,38,.5), transparent 50%)', pointerEvents: 'none' }} />
          </div>
        )}

        {/* Text panel */}
        <div style={{ background: '#fff', color: V.ink, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: m ? '100px 18px 48px' : '68px 6vw 48px', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 15% 100%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />

          {/* Text */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.35)', padding: '8px 16px', borderRadius: 100, marginBottom: m ? 22 : 34 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />
              מכתב אל הרבי מליובאוויטש
            </span>
            <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 48 : 86, lineHeight: 1.04, letterSpacing: '-.02em', color: V.ink, marginBottom: m ? 20 : 30 }}>
              כותבים מכתב,<br />
              <span style={{ color: V.gold }}>ושופכים את הלב</span>
            </h1>
            <p style={{ fontSize: m ? 17 : 22, color: V.inkSoft, marginBottom: m ? 10 : 14, lineHeight: 1.65 }}>
              בקשה, תודה, כאב או תפילה — יש מילים שמחכות להיאמר.
            </p>
            <p style={{ fontSize: m ? 16 : 19, color: V.mist, marginBottom: m ? 32 : 48, lineHeight: 1.8 }}>
              הרבי האזין לכל אחד ואחת — לצעיר ולמבוגר, לשמח ולשבור לב. גם היום, אנשים מכל העולם ממשיכים לכתוב אליו: שואלים בעצה, מבקשים ברכה, מתחלקים בשמחה ובצרה. הכתיבה עצמה היא מעשה — רגע של כנות מול עצמך, שיחה פנימית שמקבלת צורה במילים. פתחו דף, שבו ברוגע, וכתבו מה שבאמת על הלב.
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/write" style={{ background: V.navy, color: '#fff', padding: m ? '12px 22px' : '15px 30px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: m ? 14 : 16 }}>לכתיבת המכתב &nbsp;←</Link>
              <a href="#how" style={{ color: V.ink, padding: m ? '11px 18px' : '14px 26px', border: '1.5px solid rgba(15,28,51,.2)', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: m ? 13 : 16 }}>איך זה עובד?</a>
            </div>
            <div style={{ marginTop: 20 }}>
              <Link to="/" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none', opacity: .6 }}>← חזרה לבחירת עיצוב</Link>
            </div>
          </div>
        </div>

        {/* Photo (desktop, right column in RTL = left side visually) */}
        {!m && (
          <div style={{ position: 'relative', background: '#0a1426', overflow: 'hidden' }}>
            <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: '100%', height: '100%', minHeight: '100vh', objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 55%, rgba(253,246,232,.75)), linear-gradient(to top, rgba(10,20,38,.5), transparent 40%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', zIndex: 3, bottom: 90, right: 34, background: 'rgba(16,30,56,.72)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: '13px 18px' }}>
              <div style={{ fontFamily: V.serif, fontWeight: 600, fontSize: 18, color: '#fff' }}>הרבי מליובאוויטש</div>
              <div style={{ fontSize: 12.5, color: V.mist, letterSpacing: '.04em' }}>הרב מנחם מענדל שניאורסון</div>
            </div>
          </div>
        )}
      </section>

      {/* Statement */}
      <section id="about" style={{ padding: m ? '56px 0' : '108px 0' }}>
        <div style={wrap}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 20 }}>מהו המקום הזה</div>
          <p style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 22 : 40, lineHeight: 1.4, color: V.ink, letterSpacing: '-.01em' }}>
            במשך עשרות שנים נהגו אנשים מכל קצוות העולם לכתוב אל הרבי.{' '}
            <span style={{ color: V.inkSoft }}>לבקש ברכה, להתייעץ, או פשוט לשתף את אשר על הלב.</span>{' '}
            <span style={{ color: V.blue }}>המנהג לא פסק</span> — וכאן הוא ממשיך.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ background: V.white, borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, padding: m ? '56px 0' : '100px 0' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: m ? 36 : 60, flexDirection: m ? 'column' : 'row' }}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 30 : 46, color: V.ink }}>איך כותבים מכתב</h2>
            <p style={{ fontSize: 16, color: V.inkSoft, maxWidth: '24em' }}>שלושה צעדים פשוטים — מרגע ההכנה ועד שהמכתב מונח על הציון.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 32 : 0, position: 'relative' }}>
            {!m && <div style={{ position: 'absolute', top: 34, right: '11%', left: '11%', height: 2, background: `linear-gradient(90deg, ${V.mistSoft}, ${V.blue}, ${V.mistSoft})` }} />}
            {[
              { n: 'א', t: 'מתכוננים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' לברכה.' },
              { n: 'ב', t: 'כותבים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה.' },
              { n: 'ג', t: 'מונח באוהל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
            ].map((s, i) => (
              <div key={i} style={{ padding: m ? '0' : '0 30px', textAlign: m ? 'right' : 'center', display: m ? 'flex' : 'block', alignItems: 'flex-start', gap: m ? 18 : 0, position: 'relative' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: V.navy, color: V.gold, fontFamily: V.serif, fontWeight: 700, fontSize: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: m ? 0 : 22, position: 'relative', zIndex: 2, boxShadow: `0 0 0 6px ${V.white}`, flexShrink: 0 }}>{s.n}</div>
                <div>
                  <h3 style={{ fontFamily: V.serif, fontSize: m ? 22 : 26, fontWeight: 600, color: V.ink, marginBottom: 8 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, color: V.inkSoft }}>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section style={{ background: V.blue, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 88% -10%, rgba(255,255,255,.1), transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: m ? '64px 0' : '104px 0', textAlign: 'center', ...wrap }}>
          <span style={{ fontFamily: V.serif, fontSize: m ? 52 : 74, lineHeight: 0, height: 28, display: 'block', marginBottom: 14, color: 'rgba(255,255,255,.42)' }}>״</span>
          <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: m ? 26 : 50, lineHeight: 1.32, margin: '0 auto 22px' }}>
            מְעַט מִן הָאוֹר דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
          </blockquote>
          <cite style={{ fontStyle: 'normal', fontSize: 13, letterSpacing: '.16em', color: V.mist, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
        </div>
      </section>

      {/* Closing */}
      <section style={{ padding: m ? '56px 0' : '104px 0' }}>
        <div style={wrap}>
          <div style={{ background: V.navy, borderRadius: m ? 16 : 26, textAlign: 'center', padding: m ? '56px 24px' : '90px 40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 130% at 50% 0%, rgba(201,168,92,.16), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontWeight: 600, fontSize: m ? 28 : 50, color: '#fff', marginBottom: 14 }}>הלב שלכם מחכה להישמע</h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, margin: '0 auto 32px', maxWidth: '28em' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
              <Link to="/write" style={{ background: V.gold, color: V.navy, padding: m ? '12px 24px' : '15px 30px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: m ? 14 : 16 }}>פתיחת מכתב חדש &nbsp;←</Link>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '36px 0', borderTop: `1px solid ${V.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, ...wrap }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 30, height: 30, borderRadius: 7, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 16 }}>א</span>
          <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 19, color: V.ink }}>אֹהֶל</span>
        </div>
        <div style={{ fontSize: 13, color: V.inkSoft }}>מקום לכתוב · לבקש · להתחבר</div>
      </footer>
    </div>
  );
}
