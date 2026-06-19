import { Link } from '@/i18n/navigation';

const Section = ({ title, children }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e1a17', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #e4dcd0' }}>{title}</h2>
    {children}
  </section>
);
const P  = ({ children, style }) => <p style={{ color: '#3d3835', lineHeight: 1.8, marginBottom: 10, fontSize: 15.5, ...style }}>{children}</p>;
const Li = ({ children }) => <li style={{ color: '#3d3835', lineHeight: 1.8, marginBottom: 6, fontSize: 15.5 }}>{children}</li>;

export const metadata = {
  title: 'הצהרת נגישות',
  robots: { index: false, follow: true },
};

export default function AccessibilityPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', fontFamily: '"Assistant", sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e1a17', marginBottom: 6 }}>הצהרת נגישות</h1>
      <p style={{ color: '#5c5550', fontSize: 14, marginBottom: 40 }}>עודכן לאחרונה: יוני 2025</p>

      <Section title="מחויבות לנגישות">
        <P>אתר <strong>כתיבה לרבי</strong> מחויב להנגיש את שירותיו לכלל הציבור, לרבות אנשים עם מוגבלות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013, ולתקן הישראלי 5568 המבוסס על הנחיות WCAG 2.1 ברמה AA.</P>
        <P>אנו מאמינים שכל אדם — ללא תלות ביכולותיו הגופניות, הקוגניטיביות או הסנסוריות — זכאי לגשת ולכתוב מכתב.</P>
      </Section>

      <Section title="הנגשה טכנית">
        <ul style={{ paddingRight: 20, marginBottom: 0 }}>
          <Li>ניווט מלא באמצעות מקלדת בלבד (Tab, Enter, Escape, חיצים)</Li>
          <Li>קישור "דלג לתוכן" בראש כל עמוד</Li>
          <Li>תוויות ARIA מלאות לכל אלמנטים אינטראקטיביים</Li>
          <Li>היררכיית כותרות תקנית (H1 → H2 → H3) לניווט קורא מסך</Li>
          <Li>ניגוד צבעים העומד בדרישות WCAG 2.1 AA (יחס מינימלי 4.5:1)</Li>
          <Li>תמיכה בהגדלת טקסט עד 200% ללא אובדן תוכן</Li>
          <Li>כיוון טקסט RTL מלא בכל עמודי האתר</Li>
          <Li>אפשרויות נגישות מובנות: גודל טקסט, ניגוד גבוה, עצירת אנימציות, הדגשת קישורים</Li>
        </ul>
      </Section>

      <Section title="ווידג׳ט נגישות">
        <P>האתר כולל ווידג׳ט נגישות הנמצא בפינה השמאלית התחתונה של המסך (סמל ♿). הווידג׳ט מאפשר:</P>
        <ul style={{ paddingRight: 20 }}>
          <Li>הגדלה או הקטנה של גופן הטקסט</Li>
          <Li>מעבר לניגוד צבעים גבוה</Li>
          <Li>מצב גווני אפור</Li>
          <Li>עצירת אנימציות</Li>
          <Li>הדגשת קישורים</Li>
        </ul>
        <P>ההגדרות נשמרות במכשיר שלך ויישמרו לביקורים הבאים.</P>
      </Section>

      <Section title="סייגים ומגבלות">
        <P>על אף מאמצינו, ייתכנו חלקים באתר שטרם הונגשו במלואם. אנו ממשיכים לעבוד על שיפור הנגישות. אם נתקלתם בבעיה, נשמח לדעת.</P>
      </Section>

      <section style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 12, padding: '24px 28px', marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e1a17', marginBottom: 14 }}>פניות נגישות ורכז הנגישות</h2>
        <P>לפניות, תלונות, הצעות לשיפור וקבלת תוכן מותאם:</P>
        <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, color: '#1e1a17', minWidth: 80 }}>אימייל:</span>
            <a href="mailto:writingtotherabbi@gmail.com" style={{ color: '#b5864a' }}>writingtotherabbi@gmail.com</a>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <span style={{ fontWeight: 700, color: '#1e1a17', minWidth: 80 }}>זמן תגובה:</span>
            <span>עד 7 ימי עסקים</span>
          </div>
        </div>
      </section>

      <Section title="בסיס חוקי">
        <ul style={{ paddingRight: 20 }}>
          <Li>חוק שוויון זכויות לאנשים עם מוגבלות, תשנ״ח-1998</Li>
          <Li>תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע״ג-2013</Li>
          <Li>תקן ישראלי 5568:2021 (WCAG 2.1 ברמה AA)</Li>
        </ul>
      </Section>

      <div style={{ borderTop: '1px solid #e4dcd0', paddingTop: 20, marginTop: 8 }}>
        <P style={{ fontSize: 13.5, color: '#5c5550' }}>
          לעמוד הבית ← <Link href="/" style={{ color: '#b5864a', textDecoration: 'underline' }}>כתיבה לרבי</Link>
        </P>
      </div>
    </div>
  );
}
