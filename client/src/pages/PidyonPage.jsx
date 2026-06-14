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
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24,
    marginBottom: m ? 24 : 32,
  }}>
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

export default function PidyonPage() {
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
            מדריך מלא ומפורט
          </span>
          <h1 style={{
            fontFamily: V.serif, fontWeight: 700,
            fontSize: m ? 50 : 82, lineHeight: 1.08,
            color: '#fff', marginBottom: m ? 20 : 28,
            letterSpacing: '-.02em',
          }}>
            כיצד כותבים<br />
            <span style={{ color: V.gold }}>פדיון נפש</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '30em', margin: '0 auto', lineHeight: 1.8 }}>
            כל מה שצריך לדעת — המשמעות, ההכנה, הנוסח, וכל פרט הלכתי ומנהגי.
          </p>
        </div>
      </section>

      {/* Main content — single column article */}
      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          {/* 1. מהו פדיון נפש */}
          <Section title='מהו פדיון נפש (פ"נ)' label="הגדרה" m={m}>
            <P m={m}>
              פדיון נפש — ראשי תיבות <strong style={{ color: V.ink }}>פ"נ</strong> — הוא מכתב בקשת ברכה שמגיש החסיד לרבי שלו.
              המילה "פדיון" לקוחה מלשון פדייה וחליפין — <strong style={{ color: V.ink }}>להמיר רע בטוב</strong> על ידי התערבות הצדיק.
            </P>
            <P m={m}>
              לפ"נ משמעות כפולה ועמוקה: מצד אחד, זוהי בקשה לברכה וסיוע — גשמי ורוחני כאחד.
              מצד שני, מדובר ב<strong style={{ color: V.ink }}>התקשרות הנשמה</strong> של המבקש אל הרבי — חיבור רוחני עמוק
              שנוצר בעצם מעשה הכתיבה והמסירה.
            </P>
            <P m={m}>
              הרבי מליובאוויטש ביטא שבקריאת הפ"נ, הצדיק "פודים ומהפכים את הרע לטוב" — ולכן
              הכתיבה היא לא רק מעשה אדמיניסטרטיבי, אלא פעולה רוחנית של ממש.
            </P>
          </Section>

          <Divider />

          {/* 2. מתי כותבים */}
          <Section title="מתי כותבים פ״נ" label="זמנים מיוחדים" m={m}>
            <P m={m}>
              ניתן לכתוב פ"נ בכל עת — אך ישנם זמנים שבהם המנהג מיוחד ומועצם:
            </P>
            <NumberedItem n="א" title='ערב ראש השנה' desc='הזמן העיקרי והמרכזי למסירת פדיונות. בעת קהל — יום ב׳ של ראש השנה — נמסרו אלפי פדיונות לרבי ידנית.' m={m} />
            <NumberedItem n="ב" title='תאריכים חסידיים' desc='י"ט כסלו, י"ב תמוז, ג׳ תמוז, יו"ד שבט — מועדים שבהם מתחזקת ההתקשרות לרבי ומגישים פדיונות.' m={m} />
            <NumberedItem n="ג" title='יום הולדת' desc='יום ההולדת הוא עת רצון אישית — זמן מסוגל לחשבון נפש, לבקשה ולחידוש הקשר עם הרבי.' m={m} />
            <P m={m} style={{ fontStyle: 'italic', color: V.blue, borderRight: `3px solid ${V.gold}`, paddingRight: 16 }}>
              "כתבו אלי על כל דבר, גם על בשורות טובות" — הרבי מליובאוויטש
            </P>
          </Section>

          <Divider />

          {/* 3. הכנה לפני הכתיבה */}
          <Section title="הכנה לפני הכתיבה" label="לפני שמתחילים" m={m}>
            <P m={m}>
              ישנן כמה הכנות שהפ"נ יתקבל ב"כלי" ראוי:
            </P>
            <NumberedItem n="א" title='נטילת ידיים' desc='נוטלים ידיים לפני כתיבת הפ"נ — מעשה של טהרה וכוונה לפני מגע בדבר קדוש.' m={m} />
            <NumberedItem n="ב" title='כתיבה לאחר התפילה' desc='הזמן המומלץ לכתיבה הוא לאחר תפילת שחרית, כשהאדם כבר נמצא במצב של כוונה וקשר לקדושה.' m={m} />
            <NumberedItem n="ג" title='קבלת החלטה טובה' desc='הרבי הורה לכלול בפ"נ — או להחליט בלב — קבלת החלטה טובה בתחום מסוים. ה"החלטה" יוצרת "כלי" שדרכו יכולה הברכה לחול.' m={m} />
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>
                ללא קבלת החלטה — חסרה ה"כלי"
              </div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>
                בתורת החסידות, ברכה צריכה "כלי" — מקום לחול בו. קבלת החלטה טובה (אפילו קטנה)
                יוצרת את אותו כלי. ניתן לקבל על עצמכם כל דבר חיובי — להתפלל בכוונה יותר, לכבד את
                ההורים, לצדקה — ולציין זאת בפ"נ.
              </div>
            </HighlightBox>
          </Section>

          <Divider />

          {/* 4. כיצד כותבים */}
          <Section title="כיצד כותבים את הפ״נ" label="הנחיות כתיבה" m={m}>
            <NumberedItem n="א" title='דף לבן נקי' desc='כותבים על דף לבן ונקי, רצוי צד אחד בלבד. ניקיון הדף משקף את הטהרה שבכוונה.' m={m} />
            <NumberedItem n="ב" title='כתיבה בדיו — עט' desc='כותבים בדיו (עט), לא בעיפרון. הכתב יהיה ברור וקריא ככל האפשר — הרבי קרא אלפי פדיונות בעצמו ידנית.' m={m} />
            <NumberedItem n="ג" title='פתיחה בנוסח המקובל' desc='מתחילים בפ"נ המקובל (ראו להלן), ולאחר מכן כותבים את הבקשה בלשון אישית.' m={m} />
            <NumberedItem n="ד" title='בקשות גשמיות ורוחניות' desc='ניתן לכלול כל סוג של בקשה — בריאות, פרנסה, שידוך, ילדים, הצלחה לימודית, עניינים רוחניים. אין נושא קטן מדי.' m={m} />
            <NumberedItem n="ה" title='חתימה בשם' desc='מסיימים בחתימת השם — שם פרטי עברי + שם האם.' m={m} />
          </Section>

          <Divider />

          {/* 5. הנוסח */}
          <Section title='הנוסח המקובל לפ"נ' label="נוסח" m={m}>
            <P m={m}>
              הנוסח שהתקבל בחסידות חב"ד הוא:
            </P>
            <div style={{
              background: V.navy, borderRadius: 16, padding: m ? '28px 22px' : '38px 48px',
              marginBottom: 28, position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: 12, letterSpacing: '.14em', color: V.mist, marginBottom: 14, fontWeight: 600 }}>הנוסח</div>
                <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 28, color: '#fff', lineHeight: 1.7, fontWeight: 500, textAlign: 'center' }}>
                  פ"נ
                </div>
                <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 24, color: '#fff', lineHeight: 1.7, fontWeight: 500, marginTop: 8 }}>
                  אנא לעורר רחמים רבים על <span style={{ color: V.gold }}>[שמכם] בן/בת [שם האם]</span>
                </div>
                <div style={{ marginTop: 20, fontSize: m ? 14 : 15.5, color: V.mist, lineHeight: 1.7 }}>
                  ולאחר מכן ממשיכים לכתוב את הבקשה הפרטית בלשונכם.
                </div>
              </div>
            </div>

            {/* תמונת הפ"נ של הרבי */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: V.blue, marginBottom: 12 }}>
                לדוגמה — פ"נ שכתב הרבי עצמו לרבי הקודם
              </div>
              <div style={{
                borderRadius: 14, overflow: 'hidden',
                border: `1px solid ${V.line}`,
                boxShadow: '0 4px 24px rgba(15,28,51,.1)',
              }}>
                <img
                  src="/פנ רבי.png"
                  alt='פ"נ שכתב הרבי לרבי הקודם'
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              <div style={{ fontSize: 13, color: V.mist, marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>
                הפ"נ שכתב הרבי מליובאוויטש לרבי הקודם — הרבי הריי"ץ
              </div>
            </div>

            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>
                מדוע לא כותבים "אני"?
              </div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>
                חסידים נוהגים <strong>שלא לכתוב "אני"</strong> בפ"נ — שכן כתיבת "אני" מסמלת את האגו,
                ההפך מהביטול שהוא עיקר היחס לרבי. במקום "אני מבקש", כותבים
                "אנא לעורר רחמים על [שם]" — בגוף שלישי, כאילו מישהו אחר מדבר על המבקש.
                כך מתבטל האגו ומתאפשר חיבור עמוק יותר.
              </div>
            </HighlightBox>
          </Section>

          <Divider />

          {/* 6. כיצד כותבים שם */}
          <Section title="כיצד רושמים את השם" label="פורמט השם" m={m}>
            <P m={m}>
              השם הנכתב בפ"נ הוא תמיד <strong style={{ color: V.ink }}>השם העברי</strong> בלבד — לא השם הלועזי.
              ולאחריו: <strong style={{ color: V.ink }}>שם האם</strong> (לא האב) — זהו המנהג הנפוץ בפ"נ ובתפילות לחולה.
            </P>
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'גבר', example: 'מנחם מענדל בן חנה' },
                { label: 'אישה', example: 'מרים בת שרה' },
              ].map((ex, i) => (
                <div key={i} style={{
                  flex: 1, background: V.white, border: `1px solid ${V.line}`,
                  borderRadius: 12, padding: m ? '16px 18px' : '20px 24px',
                }}>
                  <div style={{ fontSize: 12, color: V.mist, letterSpacing: '.1em', marginBottom: 8, fontWeight: 600 }}>{ex.label}</div>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, color: V.ink, fontWeight: 500 }}>{ex.example}</div>
                </div>
              ))}
            </div>
            <P m={m}>
              אם אין ידוע שם האם, ניתן לכתוב "בן שרה אמנו" — שמה של אמנו שרה האם של כל ישראל.
            </P>
          </Section>

          <Divider />

          {/* 7. דמי פדיון */}
          <Section title="דמי פדיון נפש — תרומה" label="התרומה" m={m}>
            <P m={m}>
              נהוג לצרף לפ"נ <strong style={{ color: V.ink }}>דמי פדיון</strong> — סכום כסף שניתן לצדקה. מנהג זה עתיק יומין
              ומקורו בתורה: "ונתן כל איש כופר נפשו לה'" — הפדיון עצמו הוא פדיית הנפש.
            </P>
            <P m={m}>
              אין סכום קבוע — "כל אחד כפי נדבת לבו".
            </P>
            <HighlightBox m={m}>
              <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>
                <strong style={{ color: V.ink }}>חשוב לדעת:</strong> אם מגישים פ"נ דרך האינטרנט (כמו דרך האוהל),
                התרומה מועברת ישירות לצדקה ולפעילויות הרבי. גם תרומה סמלית מתקבלת בלב שלם.
              </div>
            </HighlightBox>
          </Section>

          <Divider />

          {/* 8. מה קורה אחר כך */}
          <Section title="מה קורה אחרי הכתיבה" label="לאחר הכתיבה" m={m}>
            <P m={m}>
              המכתב הכתוב <strong style={{ color: V.ink }}>מונח על ציון הרבי</strong> — האוהל שבקווינס, ניו יורק.
              זהו המקום שאליו פונים אנשים מכל העולם להתפלל ולבקש ברכה.
            </P>
            <P m={m}>
              פדיונות שהתקבלו בערב ראש השנה נשמרו על ידי הרבי עד בדיקת חמץ ונשרפו יחד עם
              החמץ — סמל לשריפת כל הרע וההמרתו בטוב.
            </P>
            <P m={m}>
              רק צדיקים בעלי כוח רוחני יכולים לקרוא פדיונות, כלומר להתקשר עם נשמת המבקש
              ולהפעיל שינוי ממשי. קריאת פדיונות היא אחד הסימנים שהרבי קיבל על עצמו את עול הנשיאות.
            </P>
          </Section>

          <Divider />

          {/* 9. פ"נ כללי */}
          <Section title='פ"נ כללי — עבור כלל ישראל' label='פ"נ כללי' m={m}>
            <P m={m}>
              החל ממלחמת העולם השנייה, נהג הרבי לקבל — בנוסף לפדיונות הפרטיים — גם
              <strong style={{ color: V.ink }}> פ"נ כללי</strong>: מכתב אחד משותף עבור כלל ישראל, שבו מבקשים
              ישועה ורחמים על כל בני עמנו. מנהג זה נמשך עד היום.
            </P>
          </Section>

          <Divider />

          {/* סיפור */}
          <Section title="כוחו של פ״נ — סיפור אמיתי" label="סיפור" m={m}>
            <div style={{
              background: V.white, border: `1px solid ${V.line}`,
              borderRadius: 16, padding: m ? '28px 22px' : '40px 48px',
              boxShadow: '0 2px 20px rgba(15,28,51,.05)',
              position: 'relative',
            }}>
              <span style={{
                fontFamily: V.serif, fontSize: m ? 64 : 90,
                lineHeight: 0, height: 24, display: 'block',
                marginBottom: 18, color: V.gold, opacity: .5,
              }}>״</span>
              <P m={m} style={{ color: V.ink, fontSize: m ? 16 : 18 }}>
                כְּשֶׁהָיָה הֶחָסִיד הַנּוֹדָע ר' שִׂמְחָה גורודצקי בְּמַאֲסַר בְּרוּסְיָה הַסּוֹבְיֶיטיִת, נִסּוּ חוֹקְריו הָרוּסִים לִשְׁבֹּר אֶת רוּחוֹ שׁוּב וְשׁוּב ע"י יִּסּוּרִים — בִּכְדֵי שֶׁיּוֹדֶה ב'פְּשָׁעָיו' בַּהֲפָצַת הַיַּהֲדוּת וְיִגָּלֶה אֵת שְׁמֹתָם שֶּׁל חֲבֵרָיו הָעוֹסְקִים בְּכָךְ גַּם כֵּן. לֶשֶׁם כָּךְ אַף שִׁקְּרוּ בְּפָנָיו הַחוֹקְרִים, שֶׁאִשְׁתּוֹ נֶאֶסְרָה גַּם כֵּן, זִיְּפוּ מִכְתָּבִים בְּאִידִישׁ הַנִּרְאִים שֶׁנִּכְתְּבוּ בִּכְתָב יָדָהּ וְנִסּוּ לִגְרֹם לוֹ לְהוֹדוֹת, בְּטַעֲנָה שֶׁיְּלָדָיו יִגְדָּלוּ כְּגוֹיִם בְּאִם לֹּא יִּהְיֶה לָהֶם הוֹרֵה שֶׁיְּחַנְּכָם.
              </P>
              <P m={m} style={{ color: V.ink, fontSize: m ? 16 : 18 }}>
                הַתַּעֲלוּל שֶׁאִרְגְּנוּ לּוֹ חוקריו הוֹאִיל, וְהִצְלִיחַ לְשַׁכְנְעוֹ שֶׁאָכֵן אִשְׁתּוֹ אַף הִיא נֶאֶסְרָה. דָּבָר זֶה גָּרַם לּוֹ לְדִכְדּוּךְ עֲצוּם וְשֶׁבֶר גָּדוֹל, וּכְבָר גָּמַר בְּלִבּוֹ לְהוֹדוֹת עַל כֹּל אָשֵׁר יְבַקְשׁוּ מִמֶּנּוּ, הוּא כְּבָר חָשׁ שֶׁאֵינוֹ יָכֹל לַעֲמוֹד בָּזֶה יוֹתֵר. עִם גְּמַר הַהַחְלָטָה קָרָא לְשֹׁמֵר הַתָּא וּבִקְּשׁוֹ לִקְרֹא לְחוֹקֵר בְּמַטָּרָה לְהוֹדוֹת וּלְהִכָּנַע בְּפָנָיו.
              </P>
              <P m={m} style={{ color: V.ink, fontSize: m ? 16 : 18 }}>
                עוֹד בְּטֶרֶם הִגִּיעַ הַחוֹקֵר, תַּרְדֵּמָה גְּדוֹלָה נָּפְלָה עַל ר' שִׂמְחָה, וְהִנֵּה הוּא חֹלֵם חֲלוֹם, וּבַחֲלוֹמוֹ רוֹאֶה אֶת חֲבֵרוֹ ר' פְאֹלֶע כַּהַן, מְעוֹדְדוֹ וְאוֹמֵר לוֹ: "שִׂמְחָה! הַחֲזֵק מַעֲמָד, אַל תּוֹדֶה, כָּתַבְתִּי פ"נ לָרַבִּי ובעז"ה עוֹד מְעַט תִּשְׁתַּחְרֵר מֵהֶם".
              </P>
              <P m={m} style={{ color: V.ink, fontSize: m ? 16 : 18 }}>
                מִיַּד נֵעוֹר מִשְּׁנָתוֹ, וְנֶאֱלַץ שׁוּב לָשֶׁבֶת מוּל חוֹקֵר מְאַיֵּם, וְכָךְ לַעֲבוֹר שׁוּב מַסֶּכֶת יִסּוּרִים נוֹסָפִים עַל שֶׁקָּרָא לְחוֹקֵר לַשָּׁוְא. בְּרַם, דִּבְרֵי הָעִדּוּד שֶׁל יְדִידוֹ ר' פְאֹלֶע עָמְדוּ לּוֹ לְעֵזֶר וְכָךְ הִצְלִיחַ לַעֲמוֹד בַּיִּסּוּרִים וְלֹא לְהוֹדוֹת.
              </P>
              <P m={m} style={{ color: V.ink, fontSize: m ? 16 : 18 }}>
                מִשֶּׁהִשְׁתַּחְרֵר ר' שִׂמְחָה מִמַּאֲסָרוֹ יָצָא מִיָּד מֵרוּסְיָה וּבָרַח אֶל אֶרֶץ מִבְטַחִים. הַדָּבָר רִאשׁוֹן שֶּׁעָשָׂה הָיָה לְחַפֵּשׂ אַחַר חֲבֵרוֹ ר' פְאֹלֶע כַּהַן בִּכְדֵי לְהוֹדוֹת לוֹ עַל דִּבְרֵי הַחִזּוּק שֶׁעָמְדוּ לוֹ לְעֵזֶר בַּחֲקִירוֹת הַקָּשׁוֹת. מִשֶּׁנִּפְגַּשׁ עִמּוֹ וְהוֹדָה לּוֹ עַל כָּךְ, הֵגִיב לוֹ ר' פְאֹלֶע: אֵינֶנִּי יוֹדֵעַ עַל דְּבַר הַחֲלוֹם, אֲבָל בְּאוֹתוֹ זְמַן אָכֵן כָּתַבְתִּי פ"נ לָרַבִּי בְּקֶשֶׁר לְמַצָּבְךָ.
              </P>
              <div style={{ fontSize: 13, color: V.mist, marginTop: 8, fontStyle: 'italic' }}>
                col.org.il
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
                עכשיו כשאתם יודעים הכל — פתחו דף, נטלו ידיים, ושפכו את הלב.
              </p>
              <Link
                to="/write-pidyon"
                style={{
                  background: V.gold, color: V.navy,
                  padding: m ? '13px 30px' : '16px 44px',
                  borderRadius: 10, textDecoration: 'none',
                  fontWeight: 700, fontSize: m ? 15 : 17,
                  display: 'inline-block',
                  boxShadow: '0 4px 20px rgba(201,168,92,.35)',
                }}
              >
                כתיבת פ"נ &nbsp;←
              </Link>
            </div>
          </div>

        </div>
      </div>

      <footer style={{ borderTop: `1px solid ${V.line}`, padding: '36px 0' }}>
        <div style={{ ...wrap, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 30, height: 30, borderRadius: 7, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 16 }}>א</span>
            <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 19, color: V.ink }}>כתיבה לרבי</span>
          </div>
          <div style={{ fontSize: 13, color: V.inkSoft }}>מקום לכתוב · לבקש · להתחבר</div>
        </div>
      </footer>
    </div>
  );
}
