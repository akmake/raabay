import { useState } from 'react';
import { Link } from 'react-router-dom';

const V = {
  bg: '#f5f6f8', white: '#fff', ink: '#0f1c33', inkSoft: '#46556f',
  blue: '#33558a', blueDeep: '#21385f', navy: '#101e38', mist: '#aab6cb',
  mistSoft: '#e7ebf1', gold: '#c9a85c', line: '#e4e7ec',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};
const wrap = { maxWidth: 1180, margin: '0 auto', padding: '0 44px' };

export default function ModernPage() {
  const [portrait, setPortrait] = useState(null);
  const [dragging, setDragging] = useState(false);

  const onDrop = (e) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f?.type.startsWith('image/')) { const r = new FileReader(); r.onload = ev => setPortrait(ev.target.result); r.readAsDataURL(f); }
  };

  return (
    <div dir="rtl" style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      {/* Split Hero */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.04fr 1fr', minHeight: '100vh' }}>

        {/* Text panel (right in RTL) */}
        <div style={{
          background: V.navy, color: '#fff', position: 'relative',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
          padding: '30px 6vw 48px', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 60% at 85% 0%, rgba(201,168,92,.12), transparent 60%)', pointerEvents: 'none' }} />

          {/* Header */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 28, zIndex: 5, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 23 }}>א</span>
              <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 25, color: '#fff' }}>אֹהֶל</span>
            </div>
            <Link to="/write" style={{ color: '#fff', padding: '11px 22px', border: '1.5px solid rgba(255,255,255,.28)', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 14.5 }}>כתיבת מכתב &nbsp;←</Link>
          </div>

          {/* Hero text */}
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 540, marginTop: 'auto', marginBottom: 'auto' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 13.5, fontWeight: 600, letterSpacing: '.04em', color: V.gold, background: 'rgba(201,168,92,.1)', border: '1px solid rgba(201,168,92,.28)', padding: '8px 16px', borderRadius: 100, marginBottom: 30 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />
              מכתב אל הרבי מליובאוויטש
            </span>
            <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 74, lineHeight: 1.04, letterSpacing: '-.02em', color: '#fff', marginBottom: 26 }}>
              כותבים מכתב,<br />
              <span style={{ color: V.gold }}>ושופכים את הלב</span>
            </h1>
            <p style={{ fontSize: 20, color: V.mist, maxWidth: '30em', marginBottom: 40 }}>
              בקשה, תודה, כאב או תפילה — יש מילים שמחכות להיאמר. כתבו את מכתבכם בפרטיות מלאה, והוא יונח על ציון הרבי באוהל הקדוש.
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/write" style={{ background: V.gold, color: V.navy, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 16 }}>לכתיבת המכתב &nbsp;←</Link>
              <a href="#how" style={{ color: '#fff', padding: '14px 26px', border: '1.5px solid rgba(255,255,255,.28)', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 16 }}>איך זה עובד?</a>
            </div>
            <div style={{ marginTop: 24 }}>
              <Link to="/" style={{ fontSize: 13, color: V.mist, textDecoration: 'none', opacity: .6 }}>← חזרה לבחירת עיצוב</Link>
            </div>
          </div>
        </div>

        {/* Photo panel (left in RTL) */}
        <div
          style={{ position: 'relative', background: '#0a1426', overflow: 'hidden', cursor: dragging ? 'copy' : 'default' }}
          onDrop={onDrop} onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)}
        >
          <img src="/הרבי.webp" alt="הרבי" style={{ display: 'block', width: '100%', height: '100%', minHeight: '100vh', objectFit: 'cover', objectPosition: 'top' }} />
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, transparent 60%, rgba(16,30,56,.55)), linear-gradient(to top, rgba(10,20,38,.6), transparent 40%)', pointerEvents: 'none' }} />
          {/* Caption tag */}
          <div style={{ position: 'absolute', zIndex: 3, bottom: 34, right: 34, background: 'rgba(16,30,56,.72)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 12, padding: '13px 18px' }}>
            <div style={{ fontFamily: V.serif, fontWeight: 600, fontSize: 18, color: '#fff' }}>הרבי מליובאוויטש</div>
            <div style={{ fontSize: 12.5, color: V.mist, letterSpacing: '.04em' }}>הרב מנחם מענדל שניאורסון</div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section id="about" style={{ padding: '108px 0' }}>
        <div style={wrap}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 26 }}>מהו המקום הזה</div>
          <p style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 40, lineHeight: 1.4, color: V.ink, maxWidth: '18em', letterSpacing: '-.01em' }}>
            במשך עשרות שנים נהגו אנשים מכל קצוות העולם לכתוב אל הרבי.{' '}
            <span style={{ color: V.inkSoft }}>לבקש ברכה, להתייעץ, או פשוט לשתף את אשר על הלב.</span>{' '}
            <span style={{ color: V.blue }}>המנהג לא פסק</span> — וכאן הוא ממשיך.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ background: V.white, borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, padding: '100px 0' }}>
        <div style={wrap}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 30, flexWrap: 'wrap', marginBottom: 60 }}>
            <h2 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 46, color: V.ink }}>איך כותבים מכתב</h2>
            <p style={{ fontSize: 17, color: V.inkSoft, maxWidth: '24em' }}>שלושה צעדים פשוטים — מרגע ההכנה ועד שהמכתב מונח על הציון.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 34, right: '11%', left: '11%', height: 2, background: `linear-gradient(90deg, ${V.mistSoft}, ${V.blue}, ${V.mistSoft})` }} />
            {[
              { n: 'א', t: 'מתכוננים', p: 'נטילת ידיים, רגע של כוונה, וקבלת החלטה טובה — \'כלי\' לברכה.' },
              { n: 'ב', t: 'כותבים', p: 'פותחים את הלב וכותבים בלשונכם — בקשה, תודה או תפילה.' },
              { n: 'ג', t: 'מונח באוהל', p: 'המכתב מודפס ומונח על ציון הרבי — המקום שאליו פונים בתפילה.' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '0 30px', textAlign: 'center', position: 'relative' }}>
                <div style={{ width: 70, height: 70, borderRadius: '50%', background: V.navy, color: V.gold, fontFamily: V.serif, fontWeight: 700, fontSize: 28, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 26, position: 'relative', zIndex: 2, boxShadow: `0 0 0 8px ${V.white}` }}>{s.n}</div>
                <h3 style={{ fontFamily: V.serif, fontSize: 26, fontWeight: 600, color: V.ink, marginBottom: 12 }}>{s.t}</h3>
                <p style={{ fontSize: 16, color: V.inkSoft, maxWidth: '20em', margin: '0 auto' }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote band */}
      <section style={{ background: V.blue, color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 130% at 88% -10%, rgba(255,255,255,.1), transparent 55%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '104px 0', textAlign: 'center' }}>
          <div style={wrap}>
            <span style={{ fontFamily: V.serif, fontSize: 74, lineHeight: 0, height: 32, display: 'block', marginBottom: 16, color: 'rgba(255,255,255,.42)' }}>״</span>
            <blockquote style={{ fontFamily: V.serif, fontWeight: 500, fontSize: 50, lineHeight: 1.32, maxWidth: '14em', margin: '0 auto 26px' }}>
              מְעַט מִן הָאוֹר דּוֹחֶה הַרְבֵּה מִן הַחֹשֶׁךְ
            </blockquote>
            <cite style={{ fontStyle: 'normal', fontSize: 14, letterSpacing: '.18em', color: V.mist, fontWeight: 600 }}>מאמרת חכמינו · מתורת החסידות</cite>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section style={{ padding: '104px 0' }}>
        <div style={wrap}>
          <div style={{ background: V.navy, borderRadius: 26, textAlign: 'center', padding: '90px 40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 130% at 50% 0%, rgba(201,168,92,.16), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontWeight: 600, fontSize: 50, color: '#fff', marginBottom: 16 }}>הלב שלכם מחכה להישמע</h2>
              <p style={{ fontSize: 18, color: V.mist, margin: '0 auto 38px', maxWidth: '28em' }}>קחו רגע לעצמכם. שבו, נשמו, וכתבו את מה שבאמת חשוב לכם.</p>
              <Link to="/write" style={{ background: V.gold, color: V.navy, padding: '15px 30px', borderRadius: 8, textDecoration: 'none', fontWeight: 600, fontSize: 16 }}>פתיחת מכתב חדש &nbsp;←</Link>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '44px 0', borderTop: `1px solid ${V.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14, ...wrap }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span style={{ width: 32, height: 32, borderRadius: 8, background: V.gold, color: V.navy, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: V.serif, fontWeight: 700, fontSize: 18 }}>א</span>
          <span style={{ fontFamily: V.serif, fontWeight: 700, fontSize: 21, color: V.ink }}>אֹהֶל</span>
        </div>
        <div style={{ fontSize: 13.5, color: V.inkSoft }}>מקום לכתוב · לבקש · להתחבר</div>
      </footer>
    </div>
  );
}
