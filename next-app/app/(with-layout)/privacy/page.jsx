import { Link } from '@/i18n/navigation';

const Section = ({ num, title, children }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e1a17', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #e4dcd0' }}>{num}. {title}</h2>
    {children}
  </section>
);
const P  = ({ children, style }) => <p style={{ color: '#3d3835', lineHeight: 1.85, marginBottom: 10, fontSize: 15.5, ...style }}>{children}</p>;
const Li = ({ children }) => <li style={{ color: '#3d3835', lineHeight: 1.8, marginBottom: 6, fontSize: 15.5 }}>{children}</li>;

export const metadata = {
  title: 'מדיניות פרטיות',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', fontFamily: '"Assistant", sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e1a17', marginBottom: 6 }}>מדיניות פרטיות</h1>
      <p style={{ color: '#5c5550', fontSize: 14, marginBottom: 40 }}>עודכן לאחרונה: יוני 2025</p>

      <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px', marginBottom: 36, fontSize: 14.5, color: '#5c5550', lineHeight: 1.7 }}>
        <strong style={{ color: '#1e1a17' }}>תקציר:</strong> אתר <em>כתיבה לרבי</em> אוסף רק את המידע שאתה מוסר בעת כתיבת המכתב (שם ושם האם). מידע זה משמש אך ורק לצורך הדפסת המכתב ושליחתו לאוהל. אין אצלנו חשבון משתמש, אין שמירת מכתבים בשרת לאחר השליחה, ואין מכירת מידע לצד שלישי.
      </div>

      <Section num="1" title="מי אנחנו">
        <P><strong>כתיבה לרבי</strong> הוא אתר אינטרנט המאפשר לכתוב מכתב שיונח על ציון הרבי מליובאוויטש באוהל שבניו יורק.</P>
        <P>לפניות בנושא פרטיות: <a href="mailto:writingtotherabbi@gmail.com" style={{ color: '#b5864a' }}>writingtotherabbi@gmail.com</a></P>
      </Section>

      <Section num="2" title="מידע שאנחנו אוספים">
        <p style={{ fontWeight: 700, color: '#1e1a17', marginBottom: 6, fontSize: 15 }}>מידע שאתה מוסר מרצונך:</p>
        <ul style={{ paddingRight: 20, marginBottom: 16 }}>
          <Li><strong>שם פרטי</strong> — לצורך פנייה אישית במכתב</Li>
          <Li><strong>שם האם</strong> — לפי המנהג המסורתי</Li>
          <Li><strong>תוכן המכתב</strong> — הטקסט החופשי שאתה בוחר לכתוב</Li>
          <Li><strong>קובץ תמונה (רשות)</strong> — אם בחרת להעלות כתב יד סרוק</Li>
        </ul>
        <p style={{ fontWeight: 700, color: '#1e1a17', marginBottom: 6, fontSize: 15 }}>מידע שנאסף אוטומטית:</p>
        <ul style={{ paddingRight: 20 }}>
          <Li><strong>כתובת IP</strong> — לצרכי אבטחה ומניעת שימוש לרעה בלבד</Li>
          <Li><strong>לוגי שרת</strong> — תאריך, שעה וסוג הבקשה, נמחקים לאחר 30 יום</Li>
        </ul>
      </Section>

      <Section num="3" title="איך אנחנו משתמשים במידע">
        <ul style={{ paddingRight: 20 }}>
          <Li>יצירת קובץ PDF מעוצב של המכתב</Li>
          <Li>שליחת המכתב בדוא״ל לנציג האוהל</Li>
          <Li>הצגת תצוגה מקדימה של המכתב לפני השליחה</Li>
        </ul>
        <P style={{ marginTop: 12 }}><strong>המכתב אינו נשמר בשרתינו לאחר השליחה.</strong></P>
      </Section>

      <Section num="4" title="העברת מידע לצדדים שלישיים">
        <P>המכתב שלך נשלח בדוא״ל לנציג האוהל הממונה. אנו לא מוכרים, משכירים או מעבירים כל מידע אחר לצד שלישי.</P>
      </Section>

      <Section num="5" title="אחסון ואבטחה">
        <ul style={{ paddingRight: 20 }}>
          <Li>שרתי האתר מאובטחים באמצעות HTTPS/TLS</Li>
          <Li>אין בסיס נתונים המאחסן מכתבים של משתמשים</Li>
          <Li>לוגי שרת נמחקים אוטומטית לאחר 30 יום</Li>
          <Li>אין שימוש ב-cookies לצרכי מעקב או פרסום</Li>
        </ul>
      </Section>

      <Section num="6" title="זכויותיך">
        <ul style={{ paddingRight: 20 }}>
          <Li><strong>זכות עיון:</strong> לבקש לדעת אם יש מידע אודותיך</Li>
          <Li><strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי</Li>
          <Li><strong>זכות מחיקה:</strong> מאחר שאיננו שומרים מכתבים לאחר שליחה, אין בדרך-כלל מה למחוק</Li>
        </ul>
        <P style={{ marginTop: 10 }}>לממש זכויות אלו: <a href="mailto:writingtotherabbi@gmail.com" style={{ color: '#b5864a' }}>writingtotherabbi@gmail.com</a></P>
      </Section>

      <div style={{ borderTop: '1px solid #e4dcd0', paddingTop: 20, marginTop: 8, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Link href="/terms" style={{ color: '#b5864a', fontSize: 14 }}>תנאי שימוש</Link>
        <Link href="/accessibility" style={{ color: '#b5864a', fontSize: 14 }}>הצהרת נגישות</Link>
        <Link href="/" style={{ color: '#b5864a', fontSize: 14 }}>עמוד הבית</Link>
      </div>
    </div>
  );
}
