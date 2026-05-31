import { Link } from 'react-router-dom';

const S = {
  root: { background: '#eceae4', color: '#15233f', fontFamily: '"Assistant", system-ui, sans-serif', lineHeight: 1.6, WebkitFontSmoothing: 'antialiased', minHeight: '100vh' },
  wrap: { maxWidth: 1180, margin: '0 auto', padding: '0 40px' },
};

export default function HomePage() {
  return (
    <div dir="rtl" style={S.root}>
      <div style={S.wrap}>

        {/* Head */}
        <div style={{ textAlign: 'center', padding: '76px 0 56px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.2em', color: '#3a5a8c', marginBottom: 18 }}>
            דף הבית · שלושה כיוונים
          </div>
          <h1 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 50, color: '#15233f', marginBottom: 16 }}>
            פרויקט <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 700, color: '#b08d4a' }}>אֹהֶל</span>
          </h1>
          <p style={{ fontSize: 18, color: '#525f78', maxWidth: '34em', margin: '0 auto' }}>
            שלושה כיווני עיצוב לדף הבית, להשוואה ובחירה. כל אחד בנוי במלואו — לחצו לצפייה.
          </p>
          <Link to="/write" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26,
            background: '#15233f', color: '#fff', textDecoration: 'none',
            fontWeight: 600, fontSize: 15.5, padding: '14px 30px', borderRadius: 8,
          }}>
            דף כתיבת המכתב &nbsp;←
          </Link>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, paddingBottom: 80 }}>

          {/* Card 1 – Classic */}
          <Link to="/classic" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 210, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fbfaf7', borderBottom: '1px solid #dcd9d0' }}>
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 40, fontWeight: 700, color: '#14223f' }}>אֹהֶל</span>
              <span style={{ position: 'absolute', bottom: 26, width: 50, height: 2, background: '#b08d4a' }} />
            </div>
            <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 10 }}>כיוון 01</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 27, color: '#15233f', marginBottom: 10 }}>קלאסי · עיתונאי</h2>
              <p style={{ fontSize: 15, color: '#525f78', flex: 1, marginBottom: 20 }}>רגוע, מכובד וטיפוגרפי — קרם, נווי וזהב. כמו עמוד פתיחה בספר קודש יפה. דגש על אווריריות וכבוד.</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

          {/* Card 2 – Atmospheric */}
          <Link to="/atmospheric" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 210, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(60% 70% at 50% 40%, #1a2c52, #0c1730)' }}>
              <span style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(216,189,132,.4), transparent)' }} />
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 40, fontWeight: 700, color: '#f6f2ea', position: 'relative' }}>אֹהֶל</span>
            </div>
            <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 10 }}>כיוון 02</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 27, color: '#15233f', marginBottom: 10 }}>אטמוספרי · עמוק</h2>
              <p style={{ fontSize: 15, color: '#525f78', flex: 1, marginBottom: 20 }}>קולנועי ורגשי — תמונת הרבי עולה מתוך אור נר על רקע לילה עמוק. נגיעה רוחנית וחמה, ואז מעבר לאזור בהיר.</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

          {/* Card 3 – Modern */}
          <Link to="/modern" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 210, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3a5a8c' }}>
              <span style={{ position: 'absolute', width: 60, height: 60, borderRadius: 8, background: 'rgba(255,255,255,.14)', top: 30, left: 40 }} />
              <span style={{ position: 'absolute', width: 34, height: 34, border: '2px solid rgba(255,255,255,.3)', borderRadius: 8, bottom: 36, right: 50 }} />
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 40, fontWeight: 700, color: '#fff', position: 'relative' }}>אֹהֶל</span>
            </div>
            <div style={{ padding: '26px 28px 30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 10 }}>כיוון 03</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 27, color: '#15233f', marginBottom: 10 }}>מודרני · אדריכלי</h2>
              <p style={{ fontSize: 15, color: '#525f78', flex: 1, marginBottom: 20 }}>נקי, בוטח וגיאומטרי — פיצול-מסך מלא עם דיוקן בוליט ופאנל נייבי עמוק. תחושת מוצר עכשווי ובוטח, אך מכובד.</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, fontSize: 15, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

        </div>

        <div style={{ textAlign: 'center', paddingBottom: 70, color: '#525f78', fontSize: 14.5 }}>
          כל שלושת הכיוונים חולקים אותה טיפוגרפיה ופלטה — מה שמשתנה הוא <strong style={{ color: '#15233f', fontWeight: 600 }}>האווירה והמבנה</strong>. אפשר גם לערבב אלמנטים מכמה כיוונים.
        </div>
      </div>
    </div>
  );
}
