'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  bg: '#ffffff', white: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', navy: '#14223f', mist: '#c4cdd9',
  gold: '#b08d4a', goldSoft: 'rgba(176,141,74,.13)', line: '#e8e8e8',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

const Section = ({ title, label, children, m }) => (
  <div style={{ marginBottom: m ? 48 : 70 }}>
    {label && <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 10, textTransform: 'uppercase' }}>{label}</div>}
    {title && <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 36, fontWeight: 700, color: V.ink, marginBottom: 22, lineHeight: 1.25 }}>{title}</h2>}
    {children}
  </div>
);
const P = ({ children, m, style = {} }) => <p style={{ fontSize: m ? 16 : 18, color: V.inkSoft, lineHeight: 1.9, marginBottom: 16, ...style }}>{children}</p>;
const Divider = () => <div style={{ height: 1, background: V.line, margin: '48px 0' }} />;
const HighlightBox = ({ children, m }) => (
  <div style={{ background: V.goldSoft, border: '1.5px solid rgba(201,168,92,.4)', borderRadius: 14, padding: m ? '22px 20px' : '28px 36px', marginBottom: 28 }}>{children}</div>
);
const NumberedItem = ({ n, title, desc, m }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24, marginBottom: m ? 24 : 32 }}>
    <div style={{ width: m ? 40 : 50, height: m ? 40 : 50, flexShrink: 0, borderRadius: '50%', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(15,28,51,0.1)', color: V.navy, fontFamily: V.serif, fontWeight: 700, fontSize: m ? 18 : 22, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(15,28,51,.07)', marginTop: 3 }}>{n}</div>
    <div>
      <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, fontWeight: 600, color: V.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{desc}</div>
    </div>
  </div>
);

export default function PidyonPage() {
  const m    = useIsMobile();
  const wrap = { maxWidth: 780, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      <section style={{ background: V.navy, position: 'relative', overflow: 'hidden', padding: m ? '72px 0 72px' : '100px 0 100px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)', padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />מדריך מלא ומפורט
          </span>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 50 : 82, lineHeight: 1.08, color: '#fff', marginBottom: m ? 20 : 28, letterSpacing: '-.02em' }}>
            כיצד כותבים<br /><span style={{ color: V.gold }}>פדיון נפש</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '30em', margin: '0 auto', lineHeight: 1.8 }}>כל מה שצריך לדעת — המשמעות, ההכנה, הנוסח, וכל פרט הלכתי ומנהגי.</p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          <Section title='מהו פדיון נפש (פ"נ)' label="הגדרה" m={m}>
            <P m={m}>פדיון נפש — ראשי תיבות <strong style={{ color: V.ink }}>פ"נ</strong> — הוא מכתב בקשת ברכה שמגיש החסיד לרבי שלו. המילה "פדיון" לקוחה מלשון פדייה וחליפין — <strong style={{ color: V.ink }}>להמיר רע בטוב</strong> על ידי התערבות הצדיק.</P>
            <P m={m}>לפ"נ משמעות כפולה ועמוקה: מצד אחד, זוהי בקשה לברכה וסיוע — גשמי ורוחני כאחד. מצד שני, מדובר ב<strong style={{ color: V.ink }}>התקשרות הנשמה</strong> של המבקש אל הרבי — חיבור רוחני עמוק שנוצר בעצם מעשה הכתיבה והמסירה.</P>
          </Section>

          <Divider />

          <Section title='מתי כותבים פ״נ' label="זמנים מיוחדים" m={m}>
            <P m={m}>ניתן לכתוב פ"נ בכל עת — אך ישנם זמנים שבהם המנהג מיוחד ומועצם:</P>
            <NumberedItem n="א" title='ערב ראש השנה' desc='הזמן העיקרי והמרכזי למסירת פדיונות. בעת קהל — יום ב׳ של ראש השנה — נמסרו אלפי פדיונות לרבי ידנית.' m={m} />
            <NumberedItem n="ב" title='תאריכים חסידיים' desc='י"ט כסלו, י"ב תמוז, ג׳ תמוז, יו"ד שבט — מועדים שבהם מתחזקת ההתקשרות לרבי ומגישים פדיונות.' m={m} />
            <NumberedItem n="ג" title='יום הולדת' desc='יום ההולדת הוא עת רצון אישית — זמן מסוגל לחשבון נפש, לבקשה ולחידוש הקשר עם הרבי.' m={m} />
            <P m={m} style={{ fontStyle: 'italic', color: V.blue, borderRight: `3px solid ${V.gold}`, paddingRight: 16 }}>"כתבו אלי על כל דבר, גם על בשורות טובות" — הרבי מליובאוויטש</P>
          </Section>

          <Divider />

          <Section title="הכנה לפני הכתיבה" label="לפני שמתחילים" m={m}>
            <NumberedItem n="א" title='נטילת ידיים' desc='נוטלים ידיים לפני כתיבת הפ"נ — מעשה של טהרה וכוונה.' m={m} />
            <NumberedItem n="ב" title='כתיבה לאחר התפילה' desc='הזמן המומלץ לכתיבה הוא לאחר תפילת שחרית, כשהאדם כבר נמצא במצב של כוונה וקשר לקדושה.' m={m} />
            <NumberedItem n="ג" title='קבלת החלטה טובה' desc='הרבי הורה לכלול בפ"נ — או להחליט בלב — קבלת החלטה טובה בתחום מסוים. ה"החלטה" יוצרת "כלי" שדרכו יכולה הברכה לחול.' m={m} />
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>ללא קבלת החלטה — חסרה ה"כלי"</div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>בתורת החסידות, ברכה צריכה "כלי" — מקום לחול בו. קבלת החלטה טובה (אפילו קטנה) יוצרת את אותו כלי.</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title='כיצד כותבים את הפ״נ' label="הנחיות כתיבה" m={m}>
            <NumberedItem n="א" title='דף לבן נקי' desc='כותבים על דף לבן ונקי, רצוי צד אחד בלבד.' m={m} />
            <NumberedItem n="ב" title='כתיבה בדיו — עט' desc='כותבים בדיו (עט), לא בעיפרון. הכתב יהיה ברור וקריא ככל האפשר.' m={m} />
            <NumberedItem n="ג" title='פתיחה בנוסח המקובל' desc='מתחילים בפ"נ המקובל (ראו להלן), ולאחר מכן כותבים את הבקשה בלשון אישית.' m={m} />
            <NumberedItem n="ד" title='בקשות גשמיות ורוחניות' desc='ניתן לכלול כל סוג של בקשה — בריאות, פרנסה, שידוך, ילדים, הצלחה לימודית, עניינים רוחניים.' m={m} />
            <NumberedItem n="ה" title='חתימה בשם' desc='מסיימים בחתימת השם — שם פרטי עברי + שם האם.' m={m} />
          </Section>

          <Divider />

          <Section title='הנוסח המקובל לפ"נ' label="נוסח" m={m}>
            <div style={{ background: V.navy, borderRadius: 16, padding: m ? '28px 22px' : '38px 48px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 28, color: '#fff', lineHeight: 1.7, fontWeight: 500, textAlign: 'center' }}>פ"נ</div>
                <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 24, color: '#fff', lineHeight: 1.7, fontWeight: 500, marginTop: 8 }}>
                  אנא לעורר רחמים רבים על <span style={{ color: V.gold }}>[שמכם] בן/בת [שם האם]</span>
                </div>
                <div style={{ marginTop: 20, fontSize: m ? 14 : 15.5, color: V.mist, lineHeight: 1.7 }}>ולאחר מכן ממשיכים לכתוב את הבקשה הפרטית בלשונכם.</div>
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: V.blue, marginBottom: 12 }}>לדוגמה — פ"נ שכתב הרבי עצמו לרבי הקודם</div>
              <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${V.line}`, boxShadow: '0 4px 24px rgba(15,28,51,.1)' }}>
                <img src="/פנ רבי.png" alt='פ"נ שכתב הרבי לרבי הקודם' style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ fontSize: 13, color: V.mist, marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>הפ"נ שכתב הרבי מליובאוויטש לרבי הקודם — הרבי הריי"ץ</div>
            </div>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>מדוע לא כותבים "אני"?</div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>חסידים נוהגים <strong>שלא לכתוב "אני"</strong> בפ"נ — שכן כתיבת "אני" מסמלת את האגו. במקום "אני מבקש", כותבים "אנא לעורר רחמים על [שם]" — בגוף שלישי.</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title="כיצד רושמים את השם" label="פורמט השם" m={m}>
            <P m={m}>השם הנכתב בפ"נ הוא תמיד <strong style={{ color: V.ink }}>השם העברי</strong> בלבד — ולאחריו: <strong style={{ color: V.ink }}>שם האם</strong> (לא האב).</P>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16, marginBottom: 24 }}>
              {[{ label: 'גבר', example: 'מנחם מענדל בן חנה' }, { label: 'אישה', example: 'מרים בת שרה' }].map((ex, i) => (
                <div key={i} style={{ flex: 1, background: V.white, border: `1px solid ${V.line}`, borderRadius: 12, padding: m ? '16px 18px' : '20px 24px' }}>
                  <div style={{ fontSize: 12, color: V.mist, letterSpacing: '.1em', marginBottom: 8, fontWeight: 600 }}>{ex.label}</div>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, color: V.ink, fontWeight: 500 }}>{ex.example}</div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <div style={{ background: V.navy, borderRadius: m ? 18 : 26, padding: m ? '48px 24px' : '72px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', marginBottom: 14 }}>מוכנים לכתוב?</h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>עכשיו כשאתם יודעים הכל — פתחו דף, נטלו ידיים, ושפכו את הלב.</p>
              <Link href="/write" style={{ background: V.gold, color: V.navy, padding: m ? '13px 30px' : '16px 44px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 17, display: 'inline-block', boxShadow: '0 4px 20px rgba(201,168,92,.35)' }}>
                כתיבת פ"נ &nbsp;←
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
