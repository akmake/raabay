'use client';

import Link from 'next/link';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  bg: '#f9f8f5',
  white: '#ffffff',
  ink: '#14223f',
  inkSoft: '#3a4a68',
  inkLighter: '#6a7a98',
  blue: '#3a5a8c',
  navy: '#14223f',
  navyDeep: '#0d1829',
  mist: '#c4cdd9',
  gold: '#b08d4a',
  goldSoft: 'rgba(176,141,74,.11)',
  goldBorder: 'rgba(176,141,74,.38)',
  line: '#e4e4e0',
  serif: '"Frank Ruhl Libre", Georgia, serif',
  sans: '"Assistant", system-ui, sans-serif',
};

const Section = ({ title, label, children, m, center = false }) => (
  <div style={{ marginBottom: m ? 52 : 76 }}>
    {label && (
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.2em', color: V.blue, marginBottom: 10, textTransform: 'uppercase', textAlign: center ? 'center' : 'right' }}>
        {label}
      </div>
    )}
    {title && (
      <h2 style={{ fontFamily: V.serif, fontSize: m ? 27 : 38, fontWeight: 700, color: V.ink, marginBottom: 24, lineHeight: 1.22, textAlign: center ? 'center' : 'right' }}>
        {title}
      </h2>
    )}
    {children}
  </div>
);

const P = ({ children, m, style = {} }) => (
  <p style={{ fontSize: m ? 16.5 : 18.5, color: V.inkSoft, lineHeight: 1.92, marginBottom: 18, ...style }}>
    {children}
  </p>
);

const Divider = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '56px 0' }}>
    <div style={{ flex: 1, height: 1, background: V.line }} />
    <div style={{ width: 6, height: 6, borderRadius: '50%', background: V.gold, opacity: .7, flexShrink: 0 }} />
    <div style={{ flex: 1, height: 1, background: V.line }} />
  </div>
);

const HighlightBox = ({ children, m }) => (
  <div style={{
    background: V.goldSoft,
    border: '1.5px solid rgba(201,168,92,.36)',
    borderRadius: 14,
    padding: m ? '22px 20px' : '28px 38px',
    marginBottom: 28,
    position: 'relative',
  }}>
    <div style={{ position: 'absolute', top: 0, right: 0, width: 4, height: '100%', background: V.gold, borderRadius: '0 14px 14px 0', opacity: .55 }} />
    {children}
  </div>
);

const PullQuote = ({ quote, source, m }) => (
  <div style={{ margin: m ? '36px 0' : '52px 0', textAlign: 'center', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: V.line, transform: 'translateY(-50%)', zIndex: 0 }} />
    <div style={{ position: 'relative', zIndex: 1, display: 'inline-block', background: V.bg, padding: m ? '0 16px' : '0 32px', maxWidth: m ? '100%' : '88%' }}>
      <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 26, color: V.ink, lineHeight: 1.6, fontWeight: 600, marginBottom: 14 }}>
        <span style={{ color: V.gold, fontFamily: 'Georgia, serif', fontSize: m ? 36 : 52, lineHeight: 0.6, verticalAlign: '-10px', marginLeft: 8, opacity: .8 }}>"</span>
        {quote}
        <span style={{ color: V.gold, fontFamily: 'Georgia, serif', fontSize: m ? 36 : 52, lineHeight: 0.6, verticalAlign: '-10px', marginRight: 8, opacity: .8 }}>"</span>
      </div>
      {source && (
        <div style={{ fontSize: m ? 13 : 14, color: V.inkLighter, letterSpacing: '.04em', fontStyle: 'italic' }}>
          {source}
        </div>
      )}
    </div>
  </div>
);

const StoryCard = ({ title, children, m }) => (
  <div style={{
    background: V.white,
    border: `1px solid ${V.line}`,
    borderRadius: 16,
    padding: m ? '28px 22px' : '36px 44px',
    marginBottom: m ? 28 : 36,
    boxShadow: '0 2px 20px rgba(20,34,63,.045)',
    position: 'relative',
    overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', top: 0, right: 0, width: 5, height: '100%', background: `linear-gradient(to bottom, ${V.gold}, rgba(176,141,74,.25))`, borderRadius: '0 16px 16px 0' }} />
    {title && (
      <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 23, fontWeight: 700, color: V.ink, marginBottom: 14, lineHeight: 1.25 }}>
        {title}
      </div>
    )}
    <div style={{ fontSize: m ? 16 : 17.5, color: V.inkSoft, lineHeight: 1.9 }}>
      {children}
    </div>
  </div>
);

const BlockQuote = ({ children, m }) => (
  <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 23, color: V.ink, borderRight: `4px solid ${V.gold}`, paddingRight: m ? 16 : 22, margin: m ? '18px 0' : '24px 0', lineHeight: 1.65 }}>
    {children}
  </div>
);

const Eyebrow = ({ children }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: 12, fontWeight: 700, letterSpacing: '.16em',
    color: V.gold,
    background: 'rgba(176,141,74,.14)',
    border: '1px solid rgba(176,141,74,.32)',
    padding: '6px 16px', borderRadius: 100,
    marginBottom: 28,
  }}>
    <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block', flexShrink: 0 }} />
    {children}
  </span>
);

export default function MaalaClient() {
  const m    = useIsMobile();
  const wrap = { maxWidth: 800, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      {/* ─── HERO ─── */}
      <section style={{ background: V.navyDeep, position: 'relative', overflow: 'hidden', padding: m ? '80px 0 72px' : '112px 0 104px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 100% at 50% 0%, rgba(176,141,74,.22), transparent 58%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(176,141,74,.5), transparent)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <Eyebrow>מעלת הכתיבה לרבי</Eyebrow>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 44 : 76, lineHeight: 1.1, color: '#fff', marginBottom: m ? 22 : 30, letterSpacing: '-.02em' }}>
            כל מכתב —<br /><span style={{ color: V.gold }}>פגישה אישית</span>
          </h1>
          <p style={{ fontSize: m ? 16.5 : 20, color: 'rgba(196,205,217,.88)', maxWidth: '32em', margin: '0 auto 36px', lineHeight: 1.8 }}>
            עשרות שנים קיבל הרבי מכתבים ממאות אלפי אנשים — וקרא כל אחד מהם בעצמו. כל מה שידוע על מה שמכתב לרבי פועל, ומה שאמרו הסיפורים.
          </p>
          <Link
            href="/write"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: V.gold, color: V.navyDeep, padding: m ? '13px 28px' : '15px 36px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 16.5, boxShadow: '0 6px 28px rgba(176,141,74,.45)' }}
          >
            ✦&nbsp;כתיבת מכתב לרבי
          </Link>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <div style={{ padding: m ? '60px 0 100px' : '88px 0 140px' }}>
        <div style={wrap}>

          {/* === 1. הרבי קורא כל מכתב בעצמו === */}
          <Section title='הרבי קורא כל מכתב — בעצמו' label='יסוד' m={m}>
            <P m={m}>
              מאז קיבל על עצמו את עול הנשיאות, נכתבו אל הרבי רבבות-רבבות מכתבים. הרבי עיד על עצמו בעניין זה:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 24, color: V.ink, lineHeight: 1.7, marginBottom: 12 }}>
                "מובן וגם פשוט קורא אני עצמו את כל המכתבים המתקבלים על שמי, וגם עונה עליהם בעצמי . . וכנהוג מימים ימימה ומדורות"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, letterSpacing: '.04em' }}>הרבי — ט"ו בשבט תשכ"א</div>
            </HighlightBox>
            <P m={m}>
              לא מזכיר, לא עוזר — הרבי עצמו. כל מכתב שהגיע — נקרא על ידיו. כל תשובה שיצאה — נכתבה על ידיו. "וכנהוג מימים ימימה ומדורות" — כך נהגו הרביים לפניו, וכך המשיך הרבי.
            </P>
            <P m={m}>
              הרבי אף ביקש ותבע שיכתבו אליו — דבר שניכר מאד מהביטוי השכיח באגרותיו: "לאחר הפסק ארוך — נתקבל מכתבו". חזר על בקשה זו בהתוועדויות רבות וביחידויות.
            </P>
          </Section>

          <Divider />

          {/* === 2. המכתב אינו מכביד === */}
          <Section title='המכתב אינו מכביד — הוא משמח' label='שמחת הרבי' m={m}>
            <P m={m}>
              בביקור השלוחים באה"ק בשנת תשט"ז, אמרו השלוחים לאישיות מסוימת כי קריאת המכתבים אינה מכבידה על הרבי. כשאותה אישיות כתבה לרבי על כך, אישר הרבי ואף הוסיף:
            </P>
            <PullQuote
              m={m}
              quote={'ובוודאי צדקו השלוחים אשר אין זאת מכתבים מכבידים עליי, והלוואי שנזכה בתוככי כלל ישראל שתוכן מכתב איש לרעהו יהיה משמח הן בגשמיות והן ברוחניות ובטוב הנראה והנגלה'}
              source={'הרבי — י"ב חשון תשי"ז'}
            />
            <P m={m}>
              המכתב אינו נטל — הוא שמחה. הרבי לא רק "סבל" את המכתבים; הוא שמח בהם. כל בשורה, כל עדכון, כל שאלה — הכל היה ברוך הבא.
            </P>
          </Section>

          <Divider />

          {/* === 3. שבע רצון לדעת — חיבור חי === */}
          <Section title='"שבע רצון לדעת" — הקישור שמחזק' label='חיבור מכתבים' m={m}>
            <P m={m}>
              בכ"ח מנחם-אב תש"י כתב הרבי מכתב שמשקף עמוק כמה חי הרבי את הקשר דרך המכתבים — גם מצדו הוא:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 21, color: V.ink, lineHeight: 1.8, marginBottom: 12 }}>
                "הנני שבע רצון לדעת מהנעשה עם אנ"ש יחיו, כי אם הידיעות טובות הנה אזי גורם זה קורת רוח ושמחה וגם אם ח"ו להיפך, על כל פנים זה גופא — העמידה בקישור מכתבים — מחזק, וּמאַכט קלענער דעם געפיל פון עלנטקייט"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 8 }}>
                הרבי — כ"ח מנחם-אב תש"י <em>(ממעיט את תחושת הבדידות)</em>
              </div>
            </HighlightBox>
            <P m={m}>
              אפילו כשהידיעות אינן טובות — עצם העמידה בקישור מכתבים מחזקת, וממעיטה את תחושת הבדידות. הכתיבה יוצרת קשר חי; לא פנייה חד-פעמית, אלא מערכת יחסים מתמשכת.
            </P>
            <P m={m}>
              ויתרה מזה: הרבי הוסיף שם — "וידוע המבואר בכמה ספרים, שאף אם אי אפשר לעזור בגשמיות, הרי עכ"פ מחשבה טובה ואיחולים טובים של אחד מישראל לחברו ענין הוא".
            </P>
          </Section>

          <Divider />

          {/* === 4. הרבי הכיר מתוך המכתבים === */}
          <Section title='הרבי הכיר — מתוך המכתבים' label='סיפורים מדויקים' m={m}>
            <P m={m}>
              היו אנשים שמשך שנים כתבו לרבי בפירוט ובהרחבה, אף שלא התראו עמו פנים אל פנים. ומעניין שלימים, כשהגיעו אל הרבי — הזכיר זאת הרבי בדבריו:
            </P>

            <StoryCard m={m} title={'הרב איסר קלונסקי — "פעם היית כותב לכאן הרבה מכתבים"'}>
              <p style={{ marginBottom: 12 }}>
                הרב איסר קלונסקי, רבה של גבעת מרדכי בירושלים, הגיע אל הרבי לראשונה בחנוכה תנש"א. לאחר שנים שהתנהל ביניהם קשר מכתבים ער — אך מעולם לא נפגשו פנים אל פנים.
              </p>
              <p style={{ marginBottom: 12 }}>
                כשהגיע, אמר לו הרבי:
              </p>
              <BlockQuote m={m}>פעם היית כותב לכאן הרבה מכתבים...</BlockQuote>
              <p>
                הרבי זיהה אותו — לא מתמונה, לא מהיכרות ישירה קודמת. מן המכתבים. הכתיבה יצרה נוכחות ממשית. הרבי ידע.
              </p>
            </StoryCard>

            <StoryCard m={m} title={'הרב ר\' משה שוסטר — "זה זמן רב שיש בינינו קשרי מכתבים"'}>
              <p style={{ marginBottom: 12 }}>
                אחד מחשובי חסידי בעלזא, הרב ר' משה שוסטר מבני-ברק, שעסק במעשי חסד במסירות-נפש כל ימיו, היה שולח אל הרבי בקביעות מעטפות גדושות בשמות של יהודים הזקוקים לרפואה וישועה.
              </p>
              <p style={{ marginBottom: 12 }}>
                שנה אחר שנה שלח, ומעולם לא הגיע אל הרבי פנים אל פנים. בערוב ימיו, כשהגיע אל הרבי לראשונה, אמר לו הרבי:
              </p>
              <BlockQuote m={m}>זה זמן רב שיש בינינו קשרי מכתבים. ברוך ה' שזוכים להתראות פנים אל פנים...</BlockQuote>
              <p>
                לרבי לא היתה זו פגישה ראשונה. בינו לבין הרב ר' משה — כבר היה קשר. קשר שנבנה מכתב אחר מכתב, מעטפה אחר מעטפה, שנה אחר שנה.
              </p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 5. בין השיטין === */}
          <Section title='הרבי קורא גם מה שבין השורות' label='עומק הקריאה' m={m}>
            <P m={m}>
              הרבי לא רק קרא את מה שנכתב — הוא קרא גם את מה שמסתתר מאחורי המילים. בכ"ט תמוז תשי"ג כתב הרבי: "נהניתי ממה שבין השיטין של מכתבו ניכר..." ובשנת תשל"ו אמר ביחידות: "קיבלתי את כל מכתביך, קראתי אותם, וקראתי גם מה שכתבת בין השיטין..."
            </P>
            <P m={m}>
              ובמכתב המיוחד לרב אפרים אליעזר יאלעס (אגרות קודש חלק ו' עמ' א'), כתב הרבי:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20.5, color: V.ink, lineHeight: 1.8, marginBottom: 10 }}>
                "וכבקשתו קראתי את הפתקא שלו על הציון הק' . . ובטח יעורר כ"ק מו"ח אדמו"ר ר"ר בנוגע להענינים שכתב בפתקא וגם על דבר מה שהוא 'בין השיטים' וגם הרמוז בהלובן של הנייר"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>הרבי — אגרות קודש חלק ו' עמ' א'</div>
            </HighlightBox>

            <StoryCard m={m} title='התיבה שלא ניתן לקרוא'>
              <p style={{ marginBottom: 12 }}>
                מסופר שפעם קיבל הרבי מכתב, ותיבה אחת בו לא היתה ברורה דיה לקריאה. הרבי הקיף בעיגול את אותה התיבה, וכתב בצד:
              </p>
              <BlockQuote m={m}>סליחה — כמו ש"לשון ברורה" מעלה היא, גם כתב ברור כן הוא</BlockQuote>
              <p>
                הרבי לא דילג, לא השלים לבד — הוא ביקש בעדינות שיכתבו ברור. כל מילה היתה חשובה לו.
              </p>
            </StoryCard>

            <StoryCard m={m} title='הרבי שאל על המקוה — תשובה מיד'>
              <p style={{ marginBottom: 12 }}>
                מסופר בזכרונות אחד מאנ"ש: בחור אחד מן התמימים כתב לרבי מכתב. הרבי קרא את המכתב — ומיד פנה למזכיר, הרב חדקוב, וביקש ממנו לברר מתי היתה הפעם האחרונה שאותו בחור טבל במקוה לפני שכתב אל הרבי.
              </p>
              <p style={{ marginBottom: 12 }}>
                הרבי הוסיף: <strong style={{ color: V.ink }}>מבקש לדעת את התשובה מיד.</strong>
              </p>
              <p>
                לאחר הבירור עלה שאכן עבר זמן ארוך שאותו בחור לא הלך למקוה. הרבי לא קרא רק את מה שנכתב — הוא ראה מה שמסתתר מאחורי המילים, ושאל בדיוק את השאלה הנכונה.
              </p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 6. מפני מה אינו מודיע === */}
          <Section title='"מפני מה אינו מודיע?!"' label='שתיקה שהרבי שאל עליה' m={m}>
            <P m={m}>
              היו כאלו שלא כתבו — ולרבי זה היה כבד. הוא שאל, תמה, ביקש הסבר:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 21, color: V.ink, lineHeight: 1.75, marginBottom: 10 }}>
                "מפני מה אינו מודיע מאומה מהנעשה אתו ובסביבתו לטוב? ומהו התכלית מהמרה שחורה ואביזרייהו (אם זהו סיבת שתיקתו)? ואם אין ע"ד מה להודיע, ה"ז גופא תמי' גדולה מאד"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>מתוך מכתב הרבי לאחד מאנ"ש</div>
            </HighlightBox>
            <P m={m}>
              "ואם אין על מה להודיע — זאת עצמה תמיה גדולה מאוד." כלומר: תמיד יש על מה לכתוב. אם לא, זה בעצמו שאלה.
            </P>
          </Section>

          <Divider />

          {/* === 7. צרות חסידים === */}
          <Section title='לא רק בצרה — כתבו גם בשורות טובות' label='צרות חסידים' m={m}>
            <P m={m}>
              הרבי התאונן כמה פעמים בשיחותיו ובמכתביו על סוג החסידים המכונים "צרות חסידים" — אלו שבאים בכתובים רק בעת צרה:
            </P>
            <PullQuote
              m={m}
              quote={'ישנם כאלו שבאים בכתובים רק, ר"ל, כאשר אירע איזה צער ועגמ"נ ח"ו'}
              source={`הרבי — ט' אלול תש"י`}
            />
            <P m={m}>
              ובמכתב מי"א שבט תשט"ו הרחיב הרבי: "טוב היה לכל הצדדים, אם היו אנ"ש מתרגלים לכתוב ולהודיע על כל ענין של שמחה, ובמילא היה הרגל נעשה טבע, שגם בדרכי הטבע יהיה נרגש שינוי בכיוון זה, <strong style={{ color: V.ink }}>שתתרבה השמחה בעניניהם</strong>."
            </P>
            <P m={m}>
              הכתיבה על שמחות ממשיכה שמחה. הרבי רצה לשמוע גם על נישואין, ילדים, הצלחות, הפצת המעיינות — לא רק על צרות ובקשות.
            </P>
          </Section>

          <Divider />

          {/* === 8. כל המפרט === */}
          <Section title='"כל המפרט הרי זה משובח"' label='לא לקצר' m={m}>
            <P m={m}>
              הרבי חזר על כלל זה שוב ושוב במכתביו ובשיחותיו: לפרט, לכתוב, לא לקצר.
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 26, color: V.ink, lineHeight: 1.65, fontWeight: 600 }}>
                "כָּל הַמְּפָרֵט הֲרֵי זֶה מְשֻׁבָּח"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 10 }}>הרבי — כ"ו כסלו תשי"ט (ועוד מכתבים רבים)</div>
            </HighlightBox>
            <P m={m}>
              שם, שם האם, גיל, עיסוק, המצב, הבקשה — הכל. הרבי לא רצה תקצירים. הוא רצה את האדם כולו — עם כל הפרטים, כל הנסיבות, כל מה שעל הלב.
            </P>
            <P m={m}>
              ביחידות (ניסן תשל"ד) ביאר הרבי: "מוטב שיכתוב עם כל הפרטים, ואז נראה מה לענות" — כי כשאדם כותב בעצמו, הוא כותב את כל הפרטים, ואין חשש שיחסירו פרט שלא גילו לאוזני השואל.
            </P>
          </Section>

          <Divider />

          {/* === 9. כתיבה משנה את האדם === */}
          <Section title='הכתיבה משנה את האדם עצמו' label='השפעה פנימית' m={m}>
            <P m={m}>
              מעבר לפעולה שהמכתב פועל אצל הרבי — יש בכתיבה מעלה נוספת:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontSize: m ? 16.5 : 18.5, color: V.ink, lineHeight: 1.85 }}>
                "כאשר חסיד יודע שמוטל עליו לכתוב לרבי מידי פעם — הרי זה פועל עליו שיתנהג כפי שצריך בכל עניניו"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 8 }}>
                מתוך דברי הרבי, וכן: "רואים שהידיעה שבמשך הזמן יכתבו על-דבר הפעולות לפלוני — מביאה זה הוספה בפעולות אם בכמות או באיכות" (ט' אייר תשי"ט)
              </div>
            </HighlightBox>
            <P m={m}>
              אם יודעים שצריכים לכתוב לרבי — שואלים את עצמנו: מה נכתוב? ובשאלה הזאת כבר יש חשבון נפש. כתיבה יוצרת מחויבות; מחויבות מעצבת התנהגות.
            </P>
          </Section>

          <Divider />

          {/* === 10. הפ"נ פועל לפני שמגיע === */}
          <Section title={'הפ"נ פועל — עוד לפני שמגיע'} label='כוח הכתיבה' m={m}>
            <P m={m}>
              בשבת פרשת פנחס תשי"א אמר הרבי דבר שהיה ידוע אצל חסידים מדורות, ועתה הרבי אישרו ובאר אותו:
            </P>
            <PullQuote
              m={m}
              quote={'כידוע אצל חסידים שכאשר כותבים פדיון ושולחים אל הרבי, נפעלת כבר הפעולה גם אם הפדיון לא הגיע עדיין לידי הרבי ובמילא לא ראהו בעיני בשר — על החסיד לעשות את שלו, להתמסר אל הרבי ולסמוך עליו, וכאשר הוא עושה את שלו ומצדו אין שום מניעות, אזי נפעל כבר הענין ע"י הרבי'}
              source={'הרבי — שבת פרשת פנחס תשי"א'}
            />
            <P m={m}>
              עצם הכתיבה — עצם ההחלטה לפנות — כבר פותחת שער. לא צריך להמתין שהמכתב יגיע. הכתיבה עצמה היא תחילת הפעולה.
            </P>
          </Section>

          <Divider />

          {/* === 11. ברגע כמימרא === */}
          <Section title={'"ברגע כמימרא יודע הכל" — דוגמת הקאמפיוטר'} label='ידיעת הרבי' m={m}>
            <P m={m}>
              בשלהי חודש חשון תשמ"ז כתב הרבי מענה נדיר ויוצא מן הכלל — תשובה לדו"ח מכינוס השלוחים בדרום-אמריקה, שנדפסה בלקוטי שיחות חלק כ"ה. בה ביאר הרבי בצורה מרהיבה את פעולת המסירה על הציון:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 16.5 : 20, color: V.ink, lineHeight: 1.85, marginBottom: 12 }}>
                "אשר מיד עם מסירת המכתב אל הרבי — נשלמים כל הענינים הקשורים בזה... ולהקל ההבנה — דוגמא בולטת דוקא בזמנינו: שמכניסים לקאמפיוטר... ברגע כמימרא לפועל יודעים כל המסקנות ופסקי דין ממש. וכשמוסרים — מזכירים על הציון (דכ"ק מו"ח אדמו"ר) הרי זה ביתר שאת ועד לאין ערוך — ממסירה לדומם הנ"ל, להבדיל באין ערוך"
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>הרבי — שלהי חשון תשמ"ז, לקוטי שיחות חלק כ"ה</div>
            </HighlightBox>
            <P m={m}>
              הרבי לקח את ההמצאה החדשה ביותר בזמנו — המחשב — כדי להסביר את הכוח שבמסירה על הציון. אם מכונה יכולה "ברגע כמימרא" לדעת הכל — על אחת כמה וכמה כשמוסרים לצדיק, שהוא נשמה בגוף.
            </P>
          </Section>

          <Divider />

          {/* === 12. כותב להקב"ה === */}
          <Section title={`"כותב להקב"ה" — ו' טבת תשמ"ז`} label='גילוי מיוחד' m={m}>
            <P m={m}>
              ביום ה' טבת תשמ"ז נחגגה שמחת "דידן נצח" — ניצחון במשפט הספרים. בתפילת מעריב של ו' טבת, בעיצומן של חגיגות השמחה, פנה הרבי לפתע לעבר הקהל הרב שגדש את הזאל מקיר לקיר, ופתח בשיחה קצרה:
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 22, color: V.ink, lineHeight: 1.8, marginBottom: 12 }}>
                "ולהוסיף, שמכיון שלא תהי' אפשרות לקרוא את כל הפתקאות, כי אם להניחם ולמוסרם על הציון — יכול כל אחד ואחד לכתוב כל מה שרוצה (ללא כל בושה), שהרי זה באופן שכותב להקב"ה, ע"י נשיא דורנו!..."
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>הרבי — מעריב ו' טבת תשמ"ז</div>
            </HighlightBox>
            <P m={m}>
              לאחר שכבר יצא מבית המדרש, חזר הרבי ולהוסיף: "כל הנ"ל קשור לאנשים נשים וטף, בנערינו בזקנינו בבנינו ובבנותינו."
            </P>

            <StoryCard m={m} title='הבוקר שלמחרת — הקהל בא לכתוב'>
              <p style={{ marginBottom: 14 }}>
                כבר מבוקר המחרת התמלא המקום בקהל רב ומגוון — חסידים מחוגים שונים, אנשי מעשה ויהודים נוספים, כשכולם כותבים פ"נ בדחילו ורחימו, ומוסרים אותו במזכירות שאנשיה עמלים בקדחתנות ללא הרף.
              </p>
              <p style={{ marginBottom: 14 }}>
                כל אחד דאג לקבל את שמותיהם המלאים של משפחתו, מקורביו, מכריו. נכנסו לברכה שמותיהם של למעלה ממאה אלף (!) ילדים הרשומים במרכז "צבאות השם" העולמי.
              </p>
              <p>
                לאחר מכן יצא הרבי כשפניו מאירות, ונסע אל האהל — שממנו שב רק כעבור חמש שעות.
              </p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 13. שז"ר === */}
          <Section title={`הרבי ושז"ר — "עכשיו כבר איני בעל-הבית"`} label='סיפור' m={m}>
            <P m={m}>
              בקיץ תשכ"ו ביקר מר שז"ר אצל הרבי, לראשונה בתור נשיא מדינת-ישראל. לביקור זה קדמה מסכת לחצים פוליטיים שהופעלה על שז"ר — שלא יבוא אל הרבי, משום שאין זה הולם ש"נשיא המדינה" ילך אל הרבי בשעה שהרבי אינו יוצא מ-770.
            </P>
            <P m={m}>
              עם הגיעו לארה"ב, התקשר שז"ר לרבי וסיפר על הלחצים. הוא ביקש מהרבי שיבוא הוא אל שז"ר, כי גדול רצונו לראותו פנים אל פנים. הרבי השיב:
            </P>
            <BlockQuote m={m}>מחר אהיה על האהל ורק אחר-כך אוכל להשיב</BlockQuote>
            <P m={m}>
              למחרת, יום שישי, בשעה שלוש אחה"צ, התקשר המזכיר הרב חודקוב וקישר את שז"ר עם הרבי. הרבי ושז"ר דיברו ביניהם ברוסית, והרבי אמר לו:
            </P>
            <BlockQuote m={m}>עכשיו כבר איני בעל-הבית</BlockQuote>
            <P m={m}>
              כלומר — לאחר שביקר באהל, כבר אינו "בעל הבית" על ההחלטה. שז"ר הוא שצריך לבוא אל הרבי, ולא להיפך.
            </P>
            <P m={m}>
              גם כששז"ר ביקר שוב אצל הרבי, בה' שבט תשל"ג, אמר לו הרבי בגלוי מה ששמע ב'אהל'. הרבי סח לו ביידיש: "איך בין געווען ער"ח אויפן 'אהל' און דער שווער האָט איבערגעגעבן אז די נסיעה וועט זיין כשורה" — "הייתי ביום ערב ראש-חודש על האהל, וחמי [הרבי הריי"צ] מסר שהנסיעה תהיה כשורה." שז"ר התרגש מאוד באותו רגע, ולחץ בחיבה את ידי הרבי.
            </P>
          </Section>

          <Divider />

          {/* === 14. לשם מגיעה התודה === */}
          <Section title='"לְשָׁם מַגִּיעָה הַתּוֹדָה!"' label='סיפור' m={m}>
            <StoryCard m={m} title='הרב דוב-יהודה שוחט — בתו שנפלה לתוך דוד מים רותחים'>
              <p style={{ marginBottom: 14 }}>
                בתקופת יו"ד שבט תשי"ג הגיע הרב דוב-יהודה שוחט ל'יחידות' הראשונה שלו אצל הרבי — בעקבות 'מופת' שאירע לבתו הקטנה.
              </p>
              <p style={{ marginBottom: 14 }}>
                הבת נפלה לתוך דוד מים רותחים. מרבית הרופאים קצבו לה זמן קצר לחיות. הוא כתב פ"נ לרבי. כשהוא התפחד ורצה לצעוק על הרופאים שאשמים בהתדרדרות — הגיב הרבי: <strong style={{ color: V.ink }}>"נאַרישקייט"</strong> (שטות). כעבור זמן לא רב החלימה הילדה, לתדהמת הכול.
              </p>
              <p style={{ marginBottom: 14 }}>
                כאשר הרב שוחט הגיע לרבי כדי להודות, הפנה אותו הרבי אל האהל ואמר:
              </p>
              <div style={{ fontFamily: V.serif, fontSize: m ? 22 : 28, color: V.ink, textAlign: 'center', padding: m ? '16px 0' : '22px 0', borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, margin: '16px 0 20px', lineHeight: 1.5 }}>
                "לְשָׁם מַגִּיעָה הַתּוֹדָה!"
              </div>
              <p>
                הרבי הפנה את התודה אל האהל הקדוש — כי שם הגיע הפ"נ, ושם ניתנה הישועה.
              </p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 15. גם היום === */}
          <Section title='גם היום — מאות אלפי יהודים כותבים' label='מציאות של היום' m={m}>
            <P m={m}>
              גם כיום, לאחר ההסתלקות, כותבים מאות אלפי יהודים פ"נים, מכתבים, דו"חות ובקשות ברכה — בהם גם בשורות טובות — אל הרבי. המכתבים נשלחים אל האוהל הק' מכל קצוות תבל, מחסידים, שלוחים, ו"עמך בית ישראל" — אנשים, נשים וטף.
            </P>
            <P m={m}>
              הרבי, כ"רועה נאמן", לא עזב חלילה את צאן מרעיתו. כאז כן היום, ואף "יתיר מבחיוהי" — הרבי דואג לכל אחד ואחד מעם ישראל בכלל ולחסידים במיוחד: קורא את המכתבים, שמח בעתות שמחה, כואב כשחלילה ישנו כאב, מעורר רחמים ופועל לישועתנו.
            </P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 23, color: V.ink, lineHeight: 1.75 }}>
                הרבי קורא את המכתבים,<br />שמח בשמחתכם,<br /><strong>כואב בכאבכם — כאז כן היום.</strong>
              </div>
            </HighlightBox>
          </Section>

        </div>
      </div>

      {/* ─── CTA ─── */}
      <section style={{ background: V.navy, padding: m ? '64px 0 68px' : '96px 0 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 50% 0%, rgba(176,141,74,.17), transparent 58%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(176,141,74,.5), transparent)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', ...wrap }}>
          <div style={{ fontFamily: V.serif, fontSize: m ? 13 : 14, color: V.gold, letterSpacing: '.16em', marginBottom: 20, textTransform: 'uppercase' }}>יש כתובת שאליה אפשר לפנות</div>
          <h2 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 32 : 52, color: '#fff', marginBottom: 18, lineHeight: 1.2 }}>
            "כתבו אלי על כל דבר,<br /><span style={{ color: V.gold }}>גם על בשורות טובות"</span>
          </h2>
          <p style={{ fontSize: m ? 15.5 : 18, color: 'rgba(196,205,217,.85)', marginBottom: 38, maxWidth: '30em', marginInline: 'auto', lineHeight: 1.85 }}>
            כל מה שעל הלב — בקשה, תפילה, תודה, שאלה. ללא בושה, ללא קיצורים. "כל המפרט הרי זה משובח."
          </p>
          <Link
            href="/write"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: V.gold, color: V.navy, padding: m ? '14px 30px' : '16px 42px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15.5 : 17, boxShadow: '0 6px 28px rgba(176,141,74,.45)', letterSpacing: '.01em' }}
          >
            ✦&nbsp;לכתיבת המכתב
          </Link>
          <div style={{ marginTop: 22, fontSize: 13, color: 'rgba(196,205,217,.5)' }}>
            המכתב מודפס ונשלח לאוהל הקדוש בקווינס, ניו יורק
          </div>
        </div>
      </section>

    </div>
  );
}
