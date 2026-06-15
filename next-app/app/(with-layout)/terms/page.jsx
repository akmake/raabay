import Link from 'next/link';

const Section = ({ num, title, children }) => (
  <section style={{ marginBottom: 32 }}>
    <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1e1a17', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #e4dcd0' }}>{num}. {title}</h2>
    {children}
  </section>
);
const P  = ({ children, style }) => <p style={{ color: '#3d3835', lineHeight: 1.85, marginBottom: 10, fontSize: 15.5, ...style }}>{children}</p>;
const Li = ({ children }) => <li style={{ color: '#3d3835', lineHeight: 1.8, marginBottom: 6, fontSize: 15.5 }}>{children}</li>;

export const metadata = { title: 'תנאי שימוש' };

export default function TermsPage() {
  return (
    <div dir="rtl" style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', fontFamily: '"Assistant", sans-serif' }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, color: '#1e1a17', marginBottom: 6 }}>תנאי שימוש</h1>
      <p style={{ color: '#5c5550', fontSize: 14, marginBottom: 40 }}>עודכן לאחרונה: יוני 2025</p>

      <div style={{ background: '#fdfaf5', border: '1px solid #e4dcd0', borderRadius: 10, padding: '16px 20px', marginBottom: 36, fontSize: 14.5, color: '#5c5550', lineHeight: 1.7 }}>
        <strong style={{ color: '#1e1a17' }}>תמצית:</strong> האתר מספק שירות חינמי לכתיבה ושליחת מכתבים לאוהל. השימוש באתר מותנה בהסכמה לתנאים אלה. אין להשתמש בשירות לפרסום, ספאם, או תוכן פוגעני.
      </div>

      <Section num="1" title="קבלת התנאים">
        <P>השימוש באתר <strong>כתיבה לרבי</strong> (להלן: "האתר") מהווה הסכמה מלאה לתנאי שימוש אלה. אם אינך מסכים לתנאים — אנא הימנע משימוש בשירות.</P>
      </Section>

      <Section num="2" title="תיאור השירות">
        <P>האתר מאפשר:</P>
        <ul style={{ paddingRight: 20 }}>
          <Li>כתיבת מכתב אישי חופשי לרבי מליובאוויטש</Li>
          <Li>כתיבת פדיון נפש (פ״נ) בנוסח המסורתי</Li>
          <Li>שליחת המכתב / פ״נ דרך נציג לאוהל הקדוש בניו יורק</Li>
        </ul>
        <P style={{ marginTop: 10 }}>השירות ניתן <strong>ללא תשלום</strong>. אנו שומרים את הזכות לשנות זאת בהודעה מוקדמת.</P>
      </Section>

      <Section num="3" title="כללי שימוש מותר">
        <P>המשתמש מתחייב:</P>
        <ul style={{ paddingRight: 20 }}>
          <Li>לא לשלוח תוכן פוגעני, גזעני, מאיים, פורנוגרפי או בלתי חוקי</Li>
          <Li>לא לשלוח פרסומות, ספאם, או הצעות מסחריות</Li>
          <Li>לא לנסות לעקוף, לפרוץ, או לשבש את פעולת האתר</Li>
          <Li>לא לאסוף מידע ממשתמשים אחרים</Li>
          <Li>לא לעשות שימוש אוטומטי (בוטים, סקריפטים) ללא אישור מפורש</Li>
        </ul>
      </Section>

      <Section num="4" title="אחריות לתוכן">
        <P>המשתמש הוא האחראי הבלעדי לתוכן שהוא שולח. האתר אינו עורך, מסנן, או אחראי לתוכן המכתבים.</P>
        <P>אנו שומרים לעצמנו את הזכות לסרב לשלוח מכתב שתוכנו, לפי שיקול דעתנו, עלול לפגוע, להטריד, או לעבור על החוק.</P>
      </Section>

      <Section num="5" title="קניין רוחני">
        <ul style={{ paddingRight: 20 }}>
          <Li>עיצוב האתר, הקוד, והלוגו — בבעלות מפעילי האתר</Li>
          <Li>תוכן המכתבים — בבעלות המשתמשים שכתבו אותם</Li>
          <Li>אין להעתיק, לשכפל, או להפיץ חלקים מהאתר ללא רשות</Li>
        </ul>
      </Section>

      <Section num="6" title="הגבלת אחריות">
        <P>האתר מסופק <strong>"כמות שהוא"</strong> (AS IS). אנו אינו ערבים לזמינות רצופה, דיוק, או שלמות השירות.</P>
        <P>בשום מקרה לא תחול עלינו אחריות לנזקים עקיפים, תוצאתיים, אבדן רווח, או נזק לנתונים הנובעים משימוש או אי-יכולת שימוש בשירות.</P>
      </Section>

      <Section num="7" title="שינויים בשירות ובתנאים">
        <P>אנו רשאים לשנות, להשהות, או להפסיק את השירות — כולו או חלקו — בכל עת וללא הודעה מוקדמת.</P>
        <P>שינויים בתנאי השימוש ייכנסו לתוקף עם פרסומם באתר. המשך השימוש לאחר השינוי מהווה הסכמה לתנאים המעודכנים.</P>
      </Section>

      <Section num="8" title="דין וסמכות שיפוט">
        <P>תנאי שימוש אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית נתונה לבתי המשפט המוסמכים בישראל.</P>
      </Section>

      <Section num="9" title="יצירת קשר">
        <P>לכל שאלה, בעיה, או פנייה בנוגע לתנאים אלה:</P>
        <P><a href="mailto:info@raabay.co.il" style={{ color: '#b5864a' }}>info@raabay.co.il</a></P>
      </Section>

      <div style={{ borderTop: '1px solid #e4dcd0', paddingTop: 20, marginTop: 8, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Link href="/privacy" style={{ color: '#b5864a', fontSize: 14 }}>מדיניות פרטיות</Link>
        <Link href="/accessibility" style={{ color: '#b5864a', fontSize: 14 }}>הצהרת נגישות</Link>
        <Link href="/" style={{ color: '#b5864a', fontSize: 14 }}>עמוד הבית</Link>
      </div>
    </div>
  );
}
