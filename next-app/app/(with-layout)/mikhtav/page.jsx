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

export default function LetterInfoPage() {
  const m    = useIsMobile();
  const wrap = { maxWidth: 780, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      <section style={{ background: V.navy, position: 'relative', overflow: 'hidden', padding: m ? '72px 0 72px' : '100px 0 100px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)', padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />מנהג ישראל
          </span>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 50 : 82, lineHeight: 1.08, color: '#fff', marginBottom: m ? 20 : 28, letterSpacing: '-.02em' }}>
            כתיבת מכתב<br /><span style={{ color: V.gold }}>אל הרבי</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '30em', margin: '0 auto', lineHeight: 1.8 }}>מהו המנהג, מה כותבים, ולמה המילים מגיעות — גם היום.</p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          <Section title="מהו המכתב אל הרבי" label="הגדרה" m={m}>
            <P m={m}>במשך עשרות שנות נשיאותו, קיבל הרבי מליובאוויטש מכתבים ממאות אלפי אנשים מכל העולם — יהודים ולא-יהודים, חסידים ורחוקים. הם כתבו על <strong style={{ color: V.ink }}>כל דבר שעל הלב</strong>: בקשות לברכה, שאלות ברוחניות, שיתוף בשמחות, קשיים אישיים.</P>
            <P m={m}>הרבי ענה אישית לכל מכתב. גנזך ה"אגרות קודש" — המכתבים שכתב הרבי — מונה כיום עשרות כרכים.</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 22, color: V.ink, lineHeight: 1.7 }}>״כִּתְבוּ אֵלַי עַל כָּל דָּבָר, גַּם עַל בְּשׂוֹרוֹת טוֹבוֹת״</div>
              <div style={{ fontSize: 13, color: V.inkSoft, marginTop: 10, letterSpacing: '.04em' }}>הרבי מליובאוויטש — מתוך מכתביו הרבים</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title='מה ההבדל בין מכתב לפ"נ' label="הבחנה" m={m}>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16, marginBottom: 28 }}>
              {[
                { title: 'מכתב', desc: 'כתיבה חופשית לחלוטין — בלשון אישית, ללא נוסח מחייב. מדברים עם הרבי כמו אל אדם קרוב: מבקשים, מספרים, שואלים, מודים.' },
                { title: 'פ"נ', desc: 'כתיבה בנוסח מסורתי ומובנה של פדיון נפש — פתיחה קבועה, ציון שם + שם האם, ולאחר מכן הבקשה. טקס חסידי מושרש.' },
              ].map((item, i) => (
                <div key={i} style={{ flex: 1, background: V.white, border: `1px solid ${V.line}`, borderRadius: 14, padding: m ? '22px 20px' : '28px 30px' }}>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 22 : 26, fontWeight: 700, color: V.ink, marginBottom: 10 }}>{item.title}</div>
                  <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <Section title="מה כותבים במכתב" label="תוכן המכתב" m={m}>
            <NumberedItem n="א" title="בקשה לברכה" desc="לבריאות, לפרנסה, לשידוך, לילדים, להצלחה לימודית או עסקית. כל בקשה — בלשון שלכם." m={m} />
            <NumberedItem n="ב" title="שאלה" desc="בענייני דת, חינוך ילדים, יחסים, החלטות חיים. הרבי נתן עצות מעשיות לאנשים שלא הכיר." m={m} />
            <NumberedItem n="ג" title="שיתוף ותודה" desc='הרבי ביקש לכתוב גם "על בשורות טובות" — לעדכן על שמחות, הצלחות, ואירועי חיים.' m={m} />
            <NumberedItem n="ד" title="כל דבר אחר" desc="אין נושא שאינו מתאים. הרבי ראה בכל יהודי בן משפחה — וכשבני משפחה מדברים, הם מדברים על הכל." m={m} />
          </Section>

          <Divider />

          <Section title="כיצד כותבים" label="הנחיות" m={m}>
            <NumberedItem n="א" title="בלשונכם שלכם" desc="כתבו כמו שאתם מדברים. אין צורך בשפה מליצית — הכנות הוא מה שנחשב." m={m} />
            <NumberedItem n="ב" title="מהלב ולא מהראש" desc="אל תרכיבו נאום. שבו, נשמו, ושאלו את עצמכם: מה אני באמת רוצה לומר לרבי עכשיו?" m={m} />
            <NumberedItem n="ג" title="פתיחה פשוטה" desc='ניתן לפתוח ב"כבוד קדושת אדמו"ר" — או פשוט להתחיל לכתוב. שניהם תקינים.' m={m} />
            <NumberedItem n="ד" title="חתימה בשם" desc="מסיימים בשם — רצוי השם העברי. אפשר גם לציין את שם האם." m={m} />
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 24, color: V.ink, lineHeight: 1.65 }}>״כָּל הַמְפָרֵט — הֲרֵי זֶה מְשֻׁבָּח וּמְרַוֵּחַ״</div>
              <div style={{ fontSize: 13.5, color: V.inkSoft, marginTop: 10, lineHeight: 1.7 }}>הרבי עודד תמיד לפרט ולא לקצר — ככל שכותבים יותר, כך הפנייה "מגיעה" עמוק יותר</div>
            </HighlightBox>
          </Section>

          <Divider />

          <div style={{ background: V.navy, borderRadius: m ? 18 : 26, padding: m ? '48px 24px' : '72px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', marginBottom: 14 }}>מוכנים לכתוב?</h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>אין נוסח נכון ואין מילים מוטעות — רק מילים שלכם, שמגיעות.</p>
              <Link href="/write" style={{ background: V.gold, color: V.navy, padding: m ? '13px 30px' : '16px 44px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 17, display: 'inline-block', boxShadow: '0 4px 20px rgba(201,168,92,.35)' }}>כתיבת מכתב &nbsp;←</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
