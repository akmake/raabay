import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';
import Navbar from '@/components/layout/Navbar';

const V = {
  bg: '#ffffff', white: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', navy: '#14223f', mist: '#c4cdd9', mistSoft: '#f8f8f8',
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

const NumberedItem = ({ n, title, desc, m }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24, marginBottom: m ? 24 : 32 }}>
    <div style={{
      width: m ? 40 : 50, height: m ? 40 : 50, flexShrink: 0,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(15,28,51,0.1)',
      color: V.navy,
      fontFamily: V.serif, fontWeight: 700, fontSize: m ? 18 : 22,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 12px rgba(15,28,51,.07)',
      marginTop: 3,
    }}>
      {n}
    </div>
    <div>
      <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, fontWeight: 600, color: V.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{desc}</div>
    </div>
  </div>
);

export default function LetterInfoPage() {
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
            מנהג ישראל
          </span>
          <h1 style={{
            fontFamily: V.serif, fontWeight: 700,
            fontSize: m ? 50 : 82, lineHeight: 1.08,
            color: '#fff', marginBottom: m ? 20 : 28,
            letterSpacing: '-.02em',
          }}>
            כתיבת מכתב<br />
            <span style={{ color: V.gold }}>אל הרבי</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '30em', margin: '0 auto', lineHeight: 1.8 }}>
            מהו המנהג, מה כותבים, ולמה המילים מגיעות — גם היום.
          </p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          {/* מה זה מכתב */}
          <Section title="מהו המכתב אל הרבי" label="הגדרה" m={m}>
            <P m={m}>
              במשך עשרות שנות נשיאותו, קיבל הרבי מליובאוויטש מכתבים ממאות אלפי אנשים מכל העולם —
              יהודים ולא-יהודים, חסידים ורחוקים, רבנים ואנשים פשוטים.
              הם כתבו על <strong style={{ color: V.ink }}>כל דבר שעל הלב</strong>: בקשות לברכה, שאלות ברוחניות,
              שיתוף בשמחות, קשיים אישיים, ואפילו התלבטויות יומיומיות.
            </P>
            <P m={m}>
              הרבי ענה אישית לכל מכתב — לעתים בפסקה קצרה, לעתים במכתב ארוך ומפורט.
              גנזך ה"אגרות קודש" — המכתבים שכתב הרבי — מונה כיום עשרות כרכים.
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 22, color: V.ink, lineHeight: 1.7 }}>
                ״כִּתְבוּ אֵלַי עַל כָּל דָּבָר, גַּם עַל בְּשׂוֹרוֹת טוֹבוֹת״
              </div>
              <div style={{ fontSize: 13, color: V.inkSoft, marginTop: 10, letterSpacing: '.04em' }}>
                הרבי מליובאוויטש — מתוך מכתביו הרבים
              </div>
            </HighlightBox>
          </Section>

          <Divider />

          {/* מה ההבדל ממכתב לפן */}
          <Section title='מה ההבדל בין מכתב לפ"נ' label="הבחנה" m={m}>
            <P m={m}>
              שני סוגי הכתיבה מונחים על ציון הרבי — אך יש הבדל באופי:
            </P>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16, marginBottom: 28 }}>
              {[
                {
                  title: 'מכתב',
                  desc: 'כתיבה חופשית לחלוטין — בלשון אישית, ללא נוסח מחייב. מדברים עם הרבי כמו אל אדם קרוב: מבקשים, מספרים, שואלים, מודים.',
                },
                {
                  title: 'פ"נ',
                  desc: 'כתיבה בנוסח מסורתי ומובנה של פדיון נפש — פתיחה קבועה, ציון שם + שם האם, ולאחר מכן הבקשה. טקס חסידי מושרש.',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  flex: 1, background: V.white, border: `1px solid ${V.line}`,
                  borderRadius: 14, padding: m ? '22px 20px' : '28px 30px',
                }}>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 22 : 26, fontWeight: 700, color: V.ink, marginBottom: 10 }}>{item.title}</div>
                  <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <P m={m}>
              אין מכתב "טוב יותר" מפ"נ או להפך — זה עניין של כוונה אישית ומה מרגיש נכון לכם ברגע הזה.
            </P>
          </Section>

          <Divider />

          {/* מה כותבים */}
          <Section title="מה כותבים במכתב" label="תוכן המכתב" m={m}>
            <P m={m}>
              הרבי עודד לכתוב על כל נושא — אין דבר קטן מדי ואין דבר גדול מדי:
            </P>
            <NumberedItem n="א" title="בקשה לברכה" desc="לבריאות, לפרנסה, לשידוך, לילדים, להצלחה לימודית או עסקית. כל בקשה — בלשון שלכם." m={m} />
            <NumberedItem n="ב" title="שאלה" desc="בענייני דת, חינוך ילדים, יחסים, החלטות חיים. הרבי נתן עצות מעשיות לאנשים שלא הכיר." m={m} />
            <NumberedItem n="ג" title="שיתוף ותודה" desc='הרבי ביקש לכתוב גם "על בשורות טובות" — לעדכן על שמחות, הצלחות, ואירועי חיים. כתיבה כזו מחזקת את הקשר.' m={m} />
            <NumberedItem n="ד" title="כל דבר אחר" desc="אין נושא שאינו מתאים. הרבי ראה בכל יהודי בן משפחה — וכשבני משפחה מדברים, הם מדברים על הכל." m={m} />
          </Section>

          <Divider />

          {/* איך כותבים */}
          <Section title="כיצד כותבים" label="הנחיות" m={m}>
            <P m={m}>
              אין כאן חוקים נוקשים — אבל כמה עקרונות עוזרים:
            </P>
            <NumberedItem n="א" title="בלשונכם שלכם" desc="כתבו כמו שאתם מדברים. אין צורך בשפה מליצית או מכובדת במיוחד — הכנות הוא מה שנחשב." m={m} />
            <NumberedItem n="ב" title="מהלב ולא מהראש" desc="אל תרכיבו נאום. שבו, נשמו, ושאלו את עצמכם: מה אני באמת רוצה לומר לרבי עכשיו?" m={m} />
            <NumberedItem n="ג" title="פתיחה פשוטה" desc='ניתן לפתוח ב"כבוד קדושת אדמו"ר שליט"א" — או פשוט להתחיל לכתוב. שניהם תקינים.' m={m} />
            <NumberedItem n="ד" title="חתימה בשם" desc="מסיימים בשם — רצוי השם העברי. אפשר גם לציין את שם האם." m={m} />
          </Section>

          <Divider />

          {/* מה קורה למכתב */}
          <Section title="מה קורה למכתב לאחר שנשלח" label="האן הדרך" m={m}>
            <P m={m}>
             ל המכתב מודפס וישלח <strong style={{ color: V.ink }}>על ציון הרבי</strong> — האוהל שבקווינס, ניו יורק.
              זהו המקום שאליו פונים אנשים מכל העולם, בכל שעות היממה, ומניחים בקשותיהם.
            </P>
            <P m={m}>
              בתורת החסידות, הצדיק ממשיך להשפיע ולפעול גם לאחר הסתלקותו —
              ומי שפונה אליו בכנות, מגיע אליו.
            </P>
            <div style={{
              background: V.navy, borderRadius: 14, padding: m ? '24px 20px' : '32px 36px',
              marginBottom: 0,
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)',
                  pointerEvents: 'none', borderRadius: 14,
                }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, color: '#fff', lineHeight: 1.75 }}>
                    ״נשיא הדור הוא בחינת משה שבדור, ומשה רבינו — אף לאחר הסתלקותו — נמצא בכל הדורות...
                    ויכול לפעול ולהשפיע בכל עניין.״
                  </div>
                  <div style={{ fontSize: 13, color: V.mist, marginTop: 14, letterSpacing: '.04em' }}>
                    מדברי הרבי — ש"פ וישב, תש"י
                  </div>
                </div>
              </div>
            </div>
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
                מוכנים לכתוב?
              </h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>
                אין נוסח נכון ואין מילים מוטעות — רק מילים שלכם, שמגיעות.
              </p>
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
