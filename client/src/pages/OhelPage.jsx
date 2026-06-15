import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';
import Navbar from '@/components/layout/Navbar';

const V = {
  bg: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', navy: '#14223f', mist: '#c4cdd9',
  gold: '#b08d4a', goldSoft: 'rgba(176,141,74,.13)', line: '#e8e8e8',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

const Section = ({ title, label, children, m }) => (
  <div style={{ marginBottom: m ? 48 : 70 }}>
    {label && (
      <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 10, textTransform: 'uppercase' }}>
        {label}
      </div>
    )}
    {title && (
      <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 36, fontWeight: 700, color: V.ink, marginBottom: 22, lineHeight: 1.25 }}>
        {title}
      </h2>
    )}
    {children}
  </div>
);

const P = ({ children, m, style = {} }) => (
  <p style={{ fontSize: m ? 16 : 18, color: V.inkSoft, lineHeight: 1.9, marginBottom: 16, ...style }}>
    {children}
  </p>
);

const Divider = () => (
  <div style={{ height: 1, background: V.line, margin: '48px 0' }} />
);

const HighlightBox = ({ children, m }) => (
  <div style={{
    background: V.goldSoft, border: `1.5px solid rgba(201,168,92,.4)`,
    borderRadius: 14, padding: m ? '22px 20px' : '28px 36px',
    marginBottom: 28,
  }}>
    {children}
  </div>
);

const CustomItem = ({ icon, title, desc, m }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24, marginBottom: m ? 24 : 32 }}>
    <div style={{
      width: m ? 40 : 50, height: m ? 40 : 50, flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(176,141,74,.1)',
      border: '1px solid rgba(176,141,74,.3)',
      color: V.gold,
      fontFamily: V.serif, fontWeight: 700, fontSize: m ? 18 : 22,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginTop: 3,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, fontWeight: 600, color: V.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{desc}</div>
    </div>
  </div>
);

export default function OhelPage() {
  const m = useIsMobile();
  const wrap = { maxWidth: 780, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: V.navy, position: 'relative', overflow: 'hidden',
        padding: m ? '110px 0 72px' : '150px 0 100px',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 600, color: V.gold,
            background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)',
            padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />
            יחידה ביחיד
          </span>
          <h1 style={{
            fontFamily: V.serif, fontWeight: 700,
            fontSize: m ? 48 : 78, lineHeight: 1.1,
            color: '#fff', marginBottom: m ? 20 : 28,
            letterSpacing: '-.02em',
          }}>
            מהו<br />
            <span style={{ color: V.gold }}>האוהל הקדוש</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '32em', margin: '0 auto', lineHeight: 1.8 }}>
            המקום שאליו פונים מאות אלפי אנשים בכל שנה — והמשמעות הנשמתית של הכתיבה אליו.
          </p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          {/* מה זה האוהל */}
          <Section title="מהו האוהל" label="הגדרה" m={m}>
            <P m={m}>
              האוהל הוא מקום קבורתו של הרבי מליובאוויטש — הרבי מנחם מענדל שניאורסון —
              שהסתלק בג' תמוז תשנ"ד (1994). הוא ממוקם ב<strong style={{ color: V.ink }}>קווינס, ניו יורק</strong>,
              ומאות אלפי אנשים מכל העולם מגיעים אליו מדי שנה.
            </P>
            <P m={m}>
              בתורת החסידות, מקום קבורת הצדיק נקרא "אוהל" — ומשמש שער להתפלל, לבקש,
              ולהתחבר אל הצדיק גם לאחר הסתלקותו מן העולם הגשמי.
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 22, color: V.ink, lineHeight: 1.7 }}>
                האוהל פתוח <strong style={{ color: V.navy }}>24 שעות ביממה, 7 ימים בשבוע</strong> — לכל אדם, בכל שעה.
              </div>
              <div style={{ fontSize: 13.5, color: V.inkSoft, marginTop: 10 }}>
                Old Montefiore Cemetery, 121-83 Springfield Blvd, Queens, NY 11413
              </div>
            </HighlightBox>
          </Section>

          <Divider />

          {/* הרבי והאוהל */}
          <Section title="הרבי עצמו — והאוהל" label="רקע היסטורי" m={m}>
            <P m={m}>
              עוד בחייו, הרבי ביקר באוהל חותנו — האדמו"ר הריי"צ — בתדירות יוצאת דופן.
              הוא ראה בביקורים אלה ציר מרכזי של עבודתו הקדושה.
            </P>
            <P m={m}>
              כששאלו את הרבי מדוע אינו עולה לארץ ישראל, ענה:
            </P>
            <div style={{
              background: V.navy, borderRadius: 14, padding: m ? '24px 20px' : '32px 36px',
              marginBottom: 28, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, color: '#fff', lineHeight: 1.8 }}>
                  ״עבודת הקודש שלי קשורה לציון הקדוש של חותני — אני נמצא שם, ומשם פועל.״
                </div>
                <div style={{ fontSize: 13, color: V.mist, marginTop: 14, letterSpacing: '.04em' }}>
                  מדברי הרבי — בשיחות שנות נשיאותו
                </div>
              </div>
            </div>
            <P m={m}>
              לאחר הסתלקותו, האוהל שלו עצמו הפך לאותו מקום —
              השער שדרכו ממשיכים לפנות ולקבל.
            </P>
          </Section>

          <Divider />

          {/* יחידה ביחיד */}
          <Section title='כתיבה לרבי — "יחידה ביחיד"' label="המשמעות הנשמתית" m={m}>
            <P m={m}>
              "יחידות" בלשון חסידות היא פגישה אישית ופרטית בין חסיד לרבי — מפגש של
              נשמה לנשמה, ללא מתווכים. הביקור באוהל, ועוד יותר מכך הכתיבה לרבי, נחשבים
              לצורה של יחידות כזו.
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 21 : 28, color: V.ink, lineHeight: 1.5, textAlign: 'center' }}>
                ״אִיז דָּא אִיז עֶר״
              </div>
              <div style={{ fontSize: 14, color: V.inkSoft, marginTop: 12, textAlign: 'center' }}>
                "כאן — הוא נמצא" · מה שהרבי אמר על אוהל חותנו — תקף לאוהלו שלו
              </div>
            </HighlightBox>
            <P m={m}>
              הנשמה אינה קשורה למקום ואינה כבולה לזמן. מי שפונה מתוך כוונה אמיתית —
              הפנייה מגיעה. זהו הבסיס לאמונה שהמכתבים שנשלחים לאוהל נקראים,
              ולכן הרבי גם ביקש: "כתבו אלי על כל דבר — גם על בשורות טובות."
            </P>
          </Section>

          <Divider />

          {/* מה קורה למכתב */}
          <Section title="מה קורה למכתב שנשלח" label="המסלול" m={m}>
            <P m={m}>
              כל מכתב שנכתב באתר זה מודפס ונשלח פיזית לאוהל —
              שם הוא מונח ליד ציון הרבי, כפי שנהוג מאז ומתמיד.
            </P>
            <CustomItem
              icon="א"
              title="כתיבה"
              desc="מכתב או פ&quot;נ — בלשון חופשית או בנוסח המסורתי. הרבי ביקש לפרט."
              m={m}
            />
            <CustomItem
              icon="ב"
              title="שליחה"
              desc="המכתב מגיע אלינו, מודפס ומוכן להנחה."
              m={m}
            />
            <CustomItem
              icon="ג"
              title="הנחה על הציון"
              desc="המכתב מונח באוהל הקדוש — שם בו נמצאים מכתבים מכל העולם."
              m={m}
            />
          </Section>

          <Divider />

          {/* מנהגים */}
          <Section title="מנהגים למבקרים באוהל" label="לבאים בפועל" m={m}>
            <P m={m}>
              מי שמגיע לאוהל פיזית — ישנם כמה מנהגים מקובלים:
            </P>
            <CustomItem icon="ט" title="טבילה במקווה" desc="נהוג לטבול לפני הביקור — הכנה רוחנית לקראת הפנייה." m={m} />
            <CustomItem icon="ג" title="גארטל" desc="עונדים גארטל (חגורה) בכניסה לאוהל — מנהג חסידי של הפרדה בין עליון לתחתון." m={m} />
            <CustomItem icon="נ" title="נעלי בד" desc="מסירים נעלי עור — כסמל של כניסה למקום קדוש, כדוגמת 'של נעליך מעל רגליך'." m={m} />
            <CustomItem icon="נ" title="נקישה על הדלת" desc='נוהגים לדפוק על פתח האוהל לפני הכניסה — מנהג מסורתי של "בקשת רשות".' m={m} />
            <CustomItem icon="נ" title="נר" desc="מדליקים נר — אור המסמל את נשמת הצדיק ואת חיבור הנשמות." m={m} />
            <CustomItem icon="פ" title='פ"נ וקריאת מענה לשון' desc='קוראים את "מענה לשון" — קטעי תהילים ותפילות מסורתיים לביקור באוהל — ומניחים פ"נ.' m={m} />
          </Section>

          <Divider />

          {/* CTA */}
          <div style={{
            background: V.navy, borderRadius: m ? 18 : 26,
            padding: m ? '48px 24px' : '72px 60px',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', marginBottom: 14 }}>
                כתבו מכתב לרבי
              </h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>
                המכתב שלכם יגיע לאוהל הקדוש — ישלח, יונח, ויגיע.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                <Link
                  to="/write"
                  style={{
                    background: V.gold, color: V.navy,
                    padding: m ? '13px 30px' : '16px 44px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 700, fontSize: m ? 15 : 17,
                    display: 'inline-block',
                    boxShadow: '0 4px 20px rgba(201,168,92,.35)',
                  }}
                >
                  כתיבת מכתב &nbsp;←
                </Link>
                <Link
                  to="/mikhtav"
                  style={{
                    background: 'transparent', color: V.mist,
                    padding: m ? '13px 30px' : '16px 44px',
                    borderRadius: 10, textDecoration: 'none',
                    fontWeight: 600, fontSize: m ? 14 : 16,
                    display: 'inline-block',
                    border: '1px solid rgba(255,255,255,.2)',
                  }}
                >
                  מה כותבים במכתב?
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer style={{ borderTop: `1px solid ${V.line}`, padding: '36px 0' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: 7, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 16 }}>א</span>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 19, color: V.ink }}>אֹהֶל</span>
          </div>
          <div style={{ fontSize: 13, color: V.inkSoft }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
