import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function HomePage() {
  const m = useIsMobile();
  return (
    <div dir="rtl" style={{ background: '#eceae4', color: '#15233f', fontFamily: '"Assistant", system-ui, sans-serif', lineHeight: 1.6, WebkitFontSmoothing: 'antialiased', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: m ? '0 18px' : '0 40px' }}>

        <div style={{ textAlign: 'center', padding: m ? '48px 0 36px' : '76px 0 56px' }}>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.2em', color: '#3a5a8c', marginBottom: 18 }}>דף הבית · שלושה כיוונים</div>
          <h1 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: m ? 34 : 50, color: '#15233f', marginBottom: 16 }}>
            פרויקט <span style={{ fontWeight: 700, color: '#b08d4a' }}>אֹהֶל</span>
          </h1>
          <p style={{ fontSize: m ? 16 : 18, color: '#525f78', maxWidth: '34em', margin: '0 auto' }}>
            שלושה כיווני עיצוב לדף הבית, להשוואה ובחירה. כל אחד בנוי במלואו — לחצו לצפייה.
          </p>
          <Link to="/write" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, background: '#15233f', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 15.5, padding: '14px 30px', borderRadius: 8 }}>
            דף כתיבת המכתב &nbsp;←
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 16 : 28, paddingBottom: m ? 40 : 80 }}>

          <Link to="/classic" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fbfaf7', borderBottom: '1px solid #dcd9d0', position: 'relative' }}>
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 36, fontWeight: 700, color: '#14223f' }}>אֹהֶל</span>
              <span style={{ position: 'absolute', bottom: 22, width: 44, height: 2, background: '#b08d4a' }} />
            </div>
            <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 8 }}>כיוון 01</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 24, color: '#15233f', marginBottom: 8 }}>קלאסי · עיתונאי</h2>
              <p style={{ fontSize: 14, color: '#525f78', flex: 1, marginBottom: 16 }}>רגוע, מכובד וטיפוגרפי — קרם, נווי וזהב. כמו עמוד פתיחה בספר קודש יפה.</p>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

          <Link to="/atmospheric" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(60% 70% at 50% 40%, #1a2c52, #0c1730)', position: 'relative' }}>
              <span style={{ position: 'absolute', width: 100, height: 100, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(216,189,132,.4), transparent)' }} />
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 36, fontWeight: 700, color: '#f6f2ea', position: 'relative' }}>אֹהֶל</span>
            </div>
            <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 8 }}>כיוון 02</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 24, color: '#15233f', marginBottom: 8 }}>אטמוספרי · עמוק</h2>
              <p style={{ fontSize: 14, color: '#525f78', flex: 1, marginBottom: 16 }}>קולנועי ורגשי — תמונת הרבי עולה מתוך אור נר על רקע לילה עמוק.</p>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

          <Link to="/modern" style={{ background: '#fff', border: '1px solid #dcd9d0', borderRadius: 16, overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3a5a8c', position: 'relative' }}>
              <span style={{ position: 'absolute', width: 50, height: 50, borderRadius: 7, background: 'rgba(255,255,255,.14)', top: 24, left: 32 }} />
              <span style={{ position: 'absolute', width: 28, height: 28, border: '2px solid rgba(255,255,255,.3)', borderRadius: 7, bottom: 28, right: 40 }} />
              <span style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontSize: 36, fontWeight: 700, color: '#fff', position: 'relative' }}>אֹהֶל</span>
            </div>
            <div style={{ padding: '22px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', color: '#3a5a8c', marginBottom: 8 }}>כיוון 03</div>
              <h2 style={{ fontFamily: '"Frank Ruhl Libre", Georgia, serif', fontWeight: 500, fontSize: 24, color: '#15233f', marginBottom: 8 }}>מודרני · אדריכלי</h2>
              <p style={{ fontSize: 14, color: '#525f78', flex: 1, marginBottom: 16 }}>פיצול-מסך מלא עם דיוקן בוליט ופאנל נייבי עמוק. מוצר עכשווי ומכובד.</p>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#15233f' }}>צפייה בכיוון &nbsp;←</span>
            </div>
          </Link>

        </div>

        <div style={{ textAlign: 'center', paddingBottom: 60, color: '#525f78', fontSize: 14 }}>
          כל שלושת הכיוונים חולקים אותה טיפוגרפיה ופלטה — מה שמשתנה הוא <strong style={{ color: '#15233f' }}>האווירה והמבנה</strong>.
        </div>
      </div>
    </div>
  );
}
