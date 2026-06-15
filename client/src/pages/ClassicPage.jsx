import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';
import AccessibilityWidget from '@/components/AccessibilityWidget';
import Navbar from '@/components/layout/Navbar';

const V = {
  white: '#ffffff',
  bg: '#f7f6f2',
  ink: '#14223f',
  inkSoft: '#4a5a72',
  navy: '#14223f',
  navyLight: '#1e3057',
  gold: '#b08d4a',
  goldMuted: 'rgba(176,141,74,.15)',
  line: '#e2e0db',
  mist: '#c4cdd9',
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans: '"Assistant", system-ui, sans-serif',
};

export default function ClassicPage() {
  const m = useIsMobile();
  const wrap = { maxWidth: 1160, margin: '0 auto', padding: m ? '0 20px' : '0 48px' };

  return (
    <div dir="rtl" style={{ background: V.white, color: V.ink, fontFamily: V.sans, WebkitFontSmoothing: 'antialiased' }}>
      <a href="#main-content" className="skip-to-main">דלג לתוכן הראשי</a>
      <Navbar />

      <main id="main-content" tabIndex={-1} style={{ paddingTop: 60 }}>

        {/* ─── Hero ─── */}
        <section style={{ background: V.white, padding: m ? '52px 0 44px' : '88px 0 80px' }}>
          <div style={{
            ...wrap,
            display: 'grid',
            gridTemplateColumns: m ? '1fr' : '1fr 420px',
            gap: m ? 36 : 80,
            alignItems: 'center',
          }}>
            {/* Text */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22,
                background: V.goldMuted, border: `1px solid rgba(176,141,74,.3)`,
                padding: '6px 14px', borderRadius: 100 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'block', flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: V.gold }}>כיחידות ממש — פגישה אישית</span>
              </div>

              <h1 style={{
                fontFamily: V.serif, fontWeight: 600,
                fontSize: m ? 30 : 50, lineHeight: 1.25,
                color: V.ink, marginBottom: 24,
              }}>
                הרבי קורא את המכתבים,<br />
                שמח בשמחתכם,<br />
                <span style={{ color: V.gold }}>כואב בכאבכם</span> — כאז כן היום.
              </h1>

              <p style={{ fontSize: m ? 15 : 17, color: V.inkSoft, lineHeight: 1.85, marginBottom: 34, maxWidth: '38em' }}>
                מאות אלפי אנשים מכל קצוות תבל — קרובים ורחוקים, מכל הרקעים —
                כותבים אל הרבי מליובאוויטש. כל מכתב נשלח לאוהל הקדוש שבקווינס,
                ניו יורק, ומגיע — כיחידות ממש.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: m ? 16 : 28, flexWrap: 'wrap' }}>
                <Link to="/write" style={{
                  background: V.navy, color: '#fff',
                  padding: '14px 32px', borderRadius: 6,
                  textDecoration: 'none', fontWeight: 700, fontSize: 15,
                  letterSpacing: '.01em',
                }}>לכתיבת המכתב &nbsp;←</Link>
                <a href="#about" style={{
                  color: V.inkSoft, fontSize: 14, fontWeight: 600,
                  textDecoration: 'none', borderBottom: `1.5px solid ${V.gold}`,
                  paddingBottom: 2,
                }}>מה זה אוהל?</a>
              </div>
            </div>

            {/* Portrait */}
            <div style={{ order: m ? -1 : 0 }}>
              <div style={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 24px 60px -16px rgba(20,34,63,.35)',
              }}>
                <img
                  src="/הרבי.jpg"
                  alt="הרבי מליובאוויטש"
                  style={{ display: 'block', width: '100%', height: m ? 260 : 460, objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(20,34,63,.65))',
                  padding: '32px 20px 18px',
                  fontFamily: V.serif, fontSize: 15, color: '#fff', textAlign: 'center',
                }}>
                  הרבי מליובאוויטש זצ"ל
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Quote Banner ─── */}
        <section style={{ background: V.navy, padding: m ? '52px 0' : '72px 0' }}>
          <div style={{ ...wrap, textAlign: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse 70% 120% at 50% 0%, rgba(176,141,74,.18), transparent 65%)',
              pointerEvents: 'none',
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 18 }}>
                ״לִבְנֵי אֲנִי צָרִיךְ״
              </div>
              <p style={{ fontSize: m ? 15 : 17, color: V.mist, maxWidth: '34em', margin: '0 auto', lineHeight: 1.85 }}>
                בשעת פטירתו נשאל הרבי הקודם מה ברצונו — וענה: "לבני אני צריך".
                הרבי ממשיך לחפש את הקשר עם כל אחד ואחת.
                הכתיבה אליו היא המענה לאותה קריאה.
              </p>
            </div>
          </div>
        </section>

        {/* ─── About ─── */}
        <section id="about" style={{ background: V.bg, padding: m ? '52px 0' : '80px 0' }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: m ? 36 : 56 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', color: V.gold, textTransform: 'uppercase' }}>מהו המקום הזה</span>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 40, fontWeight: 600, color: V.ink, marginTop: 12, lineHeight: 1.25 }}>
                המנהג לא פסק
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 28 : 40 }}>
              {[
                {
                  num: '01',
                  title: 'הרבי קרא כל מכתב',
                  body: 'במשך עשרות שנות נשיאותו קיבל הרבי מכתבים ממאות אלפי אנשים מכל העולם — ואמר: "כתבו אלי על כל דבר, גם על בשורות טובות."',
                },
                {
                  num: '02',
                  title: 'כאז כן היום',
                  body: 'גם כיום, לאחר ההסתלקות, כותבים מאות אלפי אנשים אל הרבי — מכתבים, פדיוני נפש ובקשות ברכה. הרבי קורא, שמח בשמחתנו, כואב בכאבנו.',
                },
                {
                  num: '03',
                  title: 'המכתב מגיע',
                  body: 'כל מכתב מודפס ונשלח לאוהל הקדוש שבקווינס, ניו יורק — ומונח על ציון הרבי. כיחידות ממש, פגישה אישית בין כל אחד לרבי.',
                },
              ].map((item) => (
                <div key={item.num} style={{
                  background: V.white,
                  borderRadius: 12,
                  padding: m ? '24px 20px' : '32px 28px',
                  border: `1px solid ${V.line}`,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.16em', color: V.gold, marginBottom: 14 }}>{item.num}</div>
                  <h3 style={{ fontFamily: V.serif, fontSize: m ? 20 : 23, fontWeight: 700, color: V.ink, marginBottom: 12, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: V.inkSoft, lineHeight: 1.8 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Steps ─── */}
        <section id="how" style={{ background: V.white, padding: m ? '52px 0 60px' : '80px 0 96px', borderTop: `1px solid ${V.line}` }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', marginBottom: m ? 36 : 56 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', color: V.gold, textTransform: 'uppercase' }}>בשלושה צעדים</span>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 40, fontWeight: 600, color: V.ink, marginTop: 12 }}>איך כותבים מכתב</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 24 : 0 }}>
              {[
                { n: 'א', t: 'מתכוננים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — "כלי" שמחזיק את הברכה.' },
                { n: 'ב', t: 'כותבים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה. "כל המפרט הרי זה משובח."' },
                { n: 'ג', t: 'מונח באוהל', p: 'המכתב מודפס ונשלח לאוהל הקדוש בקווינס — המקום שאליו פונים מכל העולם.' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: m ? '0' : '0 44px',
                  textAlign: 'center',
                  borderRight: (!m && i > 0) ? `1px solid ${V.line}` : 'none',
                }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 56, height: 56, borderRadius: '50%',
                    background: V.goldMuted, border: `1.5px solid rgba(176,141,74,.4)`,
                    fontFamily: V.serif, fontSize: 22, color: V.gold, fontWeight: 700,
                    marginBottom: 18,
                  }}>{s.n}</div>
                  <h3 style={{ fontFamily: V.serif, fontSize: m ? 22 : 24, fontWeight: 600, color: V.ink, marginBottom: 10 }}>{s.t}</h3>
                  <p style={{ fontSize: 15, color: V.inkSoft, lineHeight: 1.8 }}>{s.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section style={{ background: V.navy, padding: m ? '60px 0' : '88px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 80% 140% at 50% 0%, rgba(176,141,74,.16), transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ ...wrap, textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 600, fontSize: m ? 30 : 46, color: '#fff', marginBottom: 16, lineHeight: 1.25 }}>
              כתבו את מה שעל הלב
            </h2>
            <p style={{ fontSize: m ? 15 : 17, color: V.mist, marginBottom: 36, maxWidth: '30em', marginInline: 'auto', lineHeight: 1.85 }}>
              אין מילים נכונות ואין מילים שגויות. רק מילים שלכם — שמגיעות.
            </p>
            <Link to="/write" style={{
              display: 'inline-block',
              background: V.gold, color: V.navy,
              padding: m ? '13px 30px' : '15px 40px',
              borderRadius: 6, textDecoration: 'none',
              fontWeight: 700, fontSize: 16,
              boxShadow: '0 4px 24px rgba(176,141,74,.4)',
            }}>פתיחת מכתב חדש &nbsp;←</Link>
          </div>
        </section>

      </main>

      {/* ─── Footer ─── */}
      <footer role="contentinfo" style={{ background: V.white, borderTop: `1px solid ${V.line}`, padding: '36px 0 28px' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontFamily: V.serif, fontSize: 19, fontWeight: 700, color: V.ink, marginBottom: 3 }}>כתיבה לרבי</div>
              <div style={{ fontSize: 12, color: V.inkSoft }}>מקום לכתוב · לבקש · להתחבר</div>
            </div>
            <nav aria-label="קישורים משפטיים" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <Link to="/accessibility" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none' }}>נגישות</Link>
              <Link to="/privacy" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none' }}>פרטיות</Link>
              <Link to="/terms" style={{ fontSize: 13, color: V.inkSoft, textDecoration: 'none' }}>תנאי שימוש</Link>
            </nav>
          </div>
          <div style={{ marginTop: 20, fontSize: 12, color: V.inkSoft, borderTop: `1px solid ${V.line}`, paddingTop: 16 }}>
            © {new Date().getFullYear()} כל הזכויות שמורות
          </div>
        </div>
      </footer>

      <AccessibilityWidget />
    </div>
  );
}
