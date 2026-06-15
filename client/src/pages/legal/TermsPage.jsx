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

export default function TermsPage() {
  return (
    <div dir="rtl" style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', fontFamily: '"Assistant", sans-serif' }}>

      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e1a17', marginBottom: 6 }}>תנאי שימוש</h1>
      <p style={{ color: '#5c5550', fontSize: 14, marginBottom: 40 }}>עודכן לאחרונה: יוני 2025</p>

      <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px', marginBottom: 36, fontSize: 14.5, color: '#5c5550', lineHeight: 1.7 }}>
        <strong style={{ color: '#1e1a17' }}>לפני שמשתמשים בשירות, חשוב לדעת:</strong> אתר <em>כתיבה לרבי</em> הוא כלי דיגיטלי לכתיבה ושליחת מכתב. האתר אינו מתחייב לתוצאות רוחניות כלשהן ואינו מייצג שום גוף דתי רשמי.
      </div>

      <Section num="1" title="הגדרות">
        <ul style={{ paddingRight: 20 }}>
          <Li><strong>האתר</strong> — אתר האינטרנט <em>כתיבה לרבי</em> (raabay.co.il ועמודיו)</Li>
          <Li><strong>השירות</strong> — הכלי לכתיבה, תצוגה מקדימה ושליחת מכתב לאוהל</Li>
          <Li><strong>המשתמש / אתה</strong> — כל אדם הגולש באתר ו/או משתמש בשירות</Li>
          <Li><strong>האוהל</strong> — ציון הרבי מליובאוויטש בניו יורק, שאליו המכתב מועבר</Li>
        </ul>
      </Section>

      <Section num="2" title="תיאור השירות">
        <P>
          האתר מאפשר לכתוב מכתב אישי, לצפות בו כתצוגה מקדימה בפורמט PDF, ולשלוח אותו בדוא״ל לנציג מוסמך שידאג להנחתו על ציון הרבי.
        </P>
        <P>
          שימוש בשירות הוא <strong>חינמי</strong> ואינו מחייב הרשמה או יצירת חשבון.
        </P>
        <P>
          האתר <strong>אינו</strong>: רב, מנחה רוחני, שליח חב״ד, גוף דתי רשמי, ארגון ציבורי, ואינו מייצג את בית דין רבני כלשהו.
        </P>
      </Section>

      <Section num="3" title="תנאי שימוש מותר">
        <P>השימוש בשירות מותר בכפוף לכל התנאים הבאים:</P>
        <ul style={{ paddingRight: 20 }}>
          <Li>אתה בן 13 ומעלה, או גולש בפיקוח הורה / אפוטרופוס</Li>
          <Li>המידע שאתה מזין — לרבות שמך ושם אמך — הוא נכון ואמיתי</Li>
          <Li>אתה משתמש בשירות לצורכים אישיים ולא מסחריים</Li>
          <Li>אתה לא מנסה לנצל לרעה, לסרוק, לסרוג או לפגוע בשירות</Li>
        </ul>
      </Section>

      <Section num="4" title="תוכן אסור">
        <P>
          תוכן המכתב הוא באחריות המשתמש בלבד. אסור לשלוח מכתבים המכילים:
        </P>
        <ul style={{ paddingRight: 20 }}>
          <Li>לשון הרע, הסתה, גזענות או תוכן פוגעני</Li>
          <Li>פרטים מזהים של אחרים ללא הסכמתם</Li>
          <Li>תוכן המפר זכויות יוצרים של צד שלישי</Li>
          <Li>תוכן בלתי חוקי מכל סוג שהוא</Li>
          <Li>ספאם, תוכן מסחרי, פרסום או קידום מוצרים</Li>
        </ul>
        <P style={{ marginTop: 10 }}>
          אנו שומרים לעצמנו את הזכות שלא להעביר מכתבים החורגים מהתנאים הללו, וליידע את הרשויות הרלוונטיות במקרה הצורך.
        </P>
      </Section>

      <Section num="5" title="אחריות וציפיות">
        <P>
          <strong>אין אנו מתחייבים לתוצאות רוחניות, דתיות או אחרות.</strong> האתר מספק כלי טכנולוגי להעברת המכתב בלבד.
        </P>
        <P>
          האתר מנסה להבטיח שכל מכתב יועבר לנציג האוהל, אך אינו אחראי לאיחורים, תקלות טכניות אצל ספקי דוא״ל, או להחלטות הנציג בשטח.
        </P>
        <P>
          השירות ניתן <strong>"כמות שהוא"</strong> (as-is) ללא אחריות מפורשת או משתמעת. האתר לא יישא בנזקים עקיפים, מיוחדים, תוצאתיים או עונשיים.
        </P>
      </Section>

      <Section num="6" title="קניין רוחני">
        <P>
          עיצוב האתר, הקוד, הממשק הגרפי והתכנים שנכתבו על-ידי צוות האתר — הם רכושנו הבלעדי ומוגנים בזכויות יוצרים. אין להעתיק, לשכפל, להפיץ או לשנות אותם ללא רשות בכתב.
        </P>
        <P>
          <strong>תוכן המכתב שאתה כותב הוא שלך לחלוטין.</strong> אנו לא רוכשים כל זכות בו.
        </P>
      </Section>

      <Section num="7" title="פרטיות">
        <P>
          השימוש בנתוניך האישיים מתואר במלואו ב<Link to="/privacy" style={{ color: '#b5864a' }}>מדיניות הפרטיות שלנו</Link>. מדיניות הפרטיות מהווה חלק בלתי נפרד מתנאים אלה.
        </P>
      </Section>

      <Section num="8" title="שינויים בשירות ובתנאים">
        <P>
          אנו רשאים לשנות, להשעות או להפסיק את השירות בכל עת, לרבות הוספת תכונות חדשות או הסרת קיימות. הודעה על שינויים מהותיים בתנאי השימוש תפורסם בעמוד זה.
        </P>
        <P>
          המשך השימוש בשירות לאחר פרסום שינוי מהווה הסכמה לתנאים המעודכנים.
        </P>
      </Section>

      <Section num="9" title="דין וסמכות שיפוטית">
        <P>
          תנאים אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית לכל מחלוקת תהיה לבתי המשפט המוסמכים בישראל.
        </P>
      </Section>

      <Section num="10" title="יצירת קשר">
        <P>
          לשאלות, הצעות לשיפור או דיווח על תוכן פוגעני:
        </P>
        <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontWeight: 700, minWidth: 70 }}>אימייל:</span>
            <a href="mailto:info@raabay.co.il" style={{ color: '#b5864a' }}>info@raabay.co.il</a>
          </div>
        </div>
      </Section>

      <div style={{ borderTop: '1px solid #e4dcd0', paddingTop: 20, marginTop: 8, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Link to="/privacy" style={{ color: '#b5864a', fontSize: 14 }}>מדיניות פרטיות</Link>
        <Link to="/accessibility" style={{ color: '#b5864a', fontSize: 14 }}>הצהרת נגישות</Link>
        <Link to="/" style={{ color: '#b5864a', fontSize: 14 }}>עמוד הבית</Link>
      </div>
    </div>
  );
}
