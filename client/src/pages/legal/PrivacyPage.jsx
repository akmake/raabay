import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ num, title, children }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e1a17', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #e4dcd0' }}>
      {num}. {title}
    </h2>
    {children}
  </section>
);

const P = ({ children, style }) => (
  <p style={{ color: '#3d3835', lineHeight: 1.85, marginBottom: 10, fontSize: 15.5, ...style }}>{children}</p>
);

const Li = ({ children }) => (
  <li style={{ color: '#3d3835', lineHeight: 1.8, marginBottom: 6, fontSize: 15.5 }}>{children}</li>
);

export default function PrivacyPage() {
  return (
    <div dir="rtl" style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', fontFamily: '"Assistant", sans-serif' }}>

      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e1a17', marginBottom: 6 }}>מדיניות פרטיות</h1>
      <p style={{ color: '#5c5550', fontSize: 14, marginBottom: 40 }}>עודכן לאחרונה: יוני 2025</p>

      <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px', marginBottom: 36, fontSize: 14.5, color: '#5c5550', lineHeight: 1.7 }}>
        <strong style={{ color: '#1e1a17' }}>תקציר:</strong> אתר <em>כתיבה לרבי</em> אוסף רק את המידע שאתה מוסר בעת כתיבת המכתב (שם ושם האם). מידע זה משמש אך ורק לצורך הדפסת המכתב ושליחתו לאוהל. אין אצלנו חשבון משתמש, אין שמירת מכתבים בשרת לאחר השליחה, ואין מכירת מידע לצד שלישי.
      </div>

      <Section num="1" title="מי אנחנו">
        <P>
          <strong>כתיבה לרבי</strong> הוא אתר אינטרנט המאפשר לכתוב מכתב שיונח על ציון הרבי מליובאוויטש באוהל שבניו יורק. האתר אינו גוף דתי רשמי ואינו שלוחה של ישיבה או תנועה כלשהי.
        </P>
        <P>
          לפניות בנושא פרטיות:{' '}
          <a href="mailto:privacy@raabay.co.il" style={{ color: '#b5864a' }}>privacy@raabay.co.il</a>
        </P>
      </Section>

      <Section num="2" title="מידע שאנחנו אוספים">
        <P>בעת שימוש בשירות ייתכן ויאסף המידע הבא:</P>

        <p style={{ fontWeight: 700, color: '#1e1a17', marginBottom: 6, fontSize: 15 }}>מידע שאתה מוסר מרצונך:</p>
        <ul style={{ paddingRight: 20, marginBottom: 16 }}>
          <Li><strong>שם פרטי</strong> — לצורך פנייה אישית במכתב</Li>
          <Li><strong>שם האם</strong> — לפי המנהג המסורתי (בן/בת פלונית לפלוני)</Li>
          <Li><strong>תוכן המכתב</strong> — הטקסט החופשי שאתה בוחר לכתוב</Li>
          <Li><strong>קובץ תמונה (רשות)</strong> — אם בחרת להעלות כתב יד סרוק</Li>
        </ul>

        <p style={{ fontWeight: 700, color: '#1e1a17', marginBottom: 6, fontSize: 15 }}>מידע שנאסף אוטומטית:</p>
        <ul style={{ paddingRight: 20 }}>
          <Li><strong>כתובת IP</strong> — לצרכי אבטחה ומניעת שימוש לרעה בלבד</Li>
          <Li><strong>לוגי שרת</strong> — תאריך, שעה וסוג הבקשה, נמחקים לאחר 30 יום</Li>
        </ul>

        <P style={{ marginTop: 12, color: '#5c5550', fontSize: 14 }}>
          <strong>אנחנו לא אוספים</strong> כתובת אימייל, מספר טלפון, כתובת מגורים, מספר ת.ז. או כל מידע זיהוי נוסף.
        </P>
      </Section>

      <Section num="3" title="מידע רגיש">
        <P>
          תוכן המכתב עשוי לכלול מידע רגיש כהגדרתו בחוק הגנת הפרטיות — בריאות, מצב משפחתי, אמונות דתיות ועוד. מידע זה מוסר על-ידך מרצונך ולמטרה ספציפית בלבד: שליחת המכתב לאוהל.
        </P>
        <P>
          אנו ממליצים שלא לכלול במכתב פרטים מזהים מיותרים מעבר לנדרש.
        </P>
      </Section>

      <Section num="4" title="איך אנחנו משתמשים במידע">
        <ul style={{ paddingRight: 20 }}>
          <Li>יצירת קובץ PDF מעוצב של המכתב</Li>
          <Li>שליחת המכתב בדוא״ל לנציג האוהל</Li>
          <Li>הצגת תצוגה מקדימה של המכתב לפני השליחה</Li>
        </ul>
        <P style={{ marginTop: 12 }}>
          <strong>המכתב אינו נשמר בשרתינו לאחר השליחה.</strong> הנתונים נמחקים מהזיכרון הזמני של השרת עם סיום עיבוד הבקשה.
        </P>
      </Section>

      <Section num="5" title="העברת מידע לצדדים שלישיים">
        <P>
          המכתב שלך נשלח בדוא״ל לנציג האוהל הממונה. העברה זו היא מטרת השירות כולו, ואתה מסכים לה במפורש בעת שליחת המכתב.
        </P>
        <P>אנו לא מוכרים, משכירים או מעבירים כל מידע אחר לצד שלישי, למעט:</P>
        <ul style={{ paddingRight: 20 }}>
          <Li>
            <strong>ספק השליחה בדוא״ל (Gmail / SMTP)</strong> — הכרחי לצורך שליחת המכתב. Google חייבת בתקנות הגנת מידע מחמירות.
          </Li>
          <Li>
            <strong>מחויבות חוקית</strong> — אם נדרש לפי צו בית משפט או דרישה חוקית.
          </Li>
        </ul>
      </Section>

      <Section num="6" title="אחסון ואבטחה">
        <ul style={{ paddingRight: 20 }}>
          <Li>שרתי האתר מאובטחים באמצעות HTTPS/TLS</Li>
          <Li>גישה לשרת מוגבלת לצוות מורשה בלבד</Li>
          <Li>אין בסיס נתונים המאחסן מכתבים של משתמשים</Li>
          <Li>לוגי שרת נמחקים אוטומטית לאחר 30 יום</Li>
          <Li>אין שימוש ב-cookies לצרכי מעקב או פרסום</Li>
        </ul>
      </Section>

      <Section num="7" title="זכויותיך לפי חוק הגנת הפרטיות">
        <P>
          בהתאם לחוק הגנת הפרטיות, תשמ״א-1981, ותיקוניו, יש לך הזכויות הבאות:
        </P>
        <ul style={{ paddingRight: 20 }}>
          <Li>
            <strong>זכות עיון:</strong> לבקש לדעת אם יש מידע אודותיך ומה תוכנו
          </Li>
          <Li>
            <strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי
          </Li>
          <Li>
            <strong>זכות מחיקה:</strong> מאחר שאיננו שומרים מכתבים לאחר שליחה, אין בדרך-כלל מה למחוק. לשאלות, פנו אלינו
          </Li>
        </ul>
        <P style={{ marginTop: 10 }}>
          לממש זכויות אלו:{' '}
          <a href="mailto:privacy@raabay.co.il" style={{ color: '#b5864a' }}>privacy@raabay.co.il</a>
        </P>
      </Section>

      <Section num="8" title="ילדים מתחת לגיל 13">
        <P>
          השירות אינו מיועד לילדים מתחת לגיל 13. ילד שמעוניין לשלוח מכתב מוזמן לעשות כן בסיוע הורה או אפוטרופוס.
        </P>
      </Section>

      <Section num="9" title="שינויים במדיניות">
        <P>
          אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו בעמוד זה עם תאריך העדכון. המשך השימוש באתר לאחר פרסום שינוי מהווה הסכמה אליו.
        </P>
      </Section>

      <Section num="10" title="יצירת קשר">
        <P>
          לכל שאלה, בקשה או תלונה בנושא פרטיות:
        </P>
        <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px' }}>
          <div style={{ display: 'flex', gap: 12, marginBottom: 6 }}>
            <span style={{ fontWeight: 700, minWidth: 70 }}>אימייל:</span>
            <a href="mailto:privacy@raabay.co.il" style={{ color: '#b5864a' }}>privacy@raabay.co.il</a>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontWeight: 700, minWidth: 70 }}>זמן מענה:</span>
            <span>עד 30 יום ממועד קבלת הפנייה</span>
          </div>
        </div>
      </Section>

      <div style={{ borderTop: '1px solid #e4dcd0', paddingTop: 20, marginTop: 8, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Link to="/terms" style={{ color: '#b5864a', fontSize: 14 }}>תנאי שימוש</Link>
        <Link to="/accessibility" style={{ color: '#b5864a', fontSize: 14 }}>הצהרת נגישות</Link>
        <Link to="/" style={{ color: '#b5864a', fontSize: 14 }}>עמוד הבית</Link>
      </div>
    </div>
  );
}
