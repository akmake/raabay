'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  bg: '#ffffff', white: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
  blue: '#3a5a8c', navy: '#14223f', mist: '#c4cdd9',
  gold: '#b08d4a', goldSoft: 'rgba(176,141,74,.13)', line: '#e8e8e8',
  serif: '"Frank Ruhl Libre", Georgia, serif', sans: '"Assistant", system-ui, sans-serif',
};

const Section = ({ title, label, children, m }) => (
  <div style={{ marginBottom: m ? 48 : 70 }}>
    {label && <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.18em', color: V.blue, marginBottom: 10, textTransform: 'uppercase' }}>{label}</div>}
    {title && <h2 style={{ fontFamily: V.serif, fontSize: m ? 26 : 36, fontWeight: 700, color: V.ink, marginBottom: 22, lineHeight: 1.25 }}>{title}</h2>}
    {children}
  </div>
);
const P = ({ children, m, style = {} }) => <p style={{ fontSize: m ? 16 : 18, color: V.inkSoft, lineHeight: 1.9, marginBottom: 16, ...style }}>{children}</p>;
const Divider = () => <div style={{ height: 1, background: V.line, margin: '48px 0' }} />;
const HighlightBox = ({ children, m }) => (
  <div style={{ background: V.goldSoft, border: '1.5px solid rgba(201,168,92,.4)', borderRadius: 14, padding: m ? '22px 20px' : '28px 36px', marginBottom: 28 }}>
    {children}
  </div>
);
const NumberedItem = ({ n, title, desc, m }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24, marginBottom: m ? 24 : 32 }}>
    <div style={{ width: m ? 40 : 50, height: m ? 40 : 50, flexShrink: 0, borderRadius: '50%', background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', border: '1px solid rgba(15,28,51,0.1)', color: V.navy, fontFamily: V.serif, fontWeight: 700, fontSize: m ? 18 : 22, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(15,28,51,.07)', marginTop: 3 }}>{n}</div>
    <div>
      <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, fontWeight: 600, color: V.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{desc}</div>
    </div>
  </div>
);

export default function PidyonClient() {
  const m = useIsMobile();
  const t = useTranslations('pidyon');
  const wrap = { maxWidth: 780, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      <section style={{ background: V.navy, position: 'relative', overflow: 'hidden', padding: m ? '72px 0 72px' : '100px 0 100px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)', padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />{t('badge')}
          </span>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 50 : 82, lineHeight: 1.08, color: '#fff', marginBottom: m ? 20 : 28, letterSpacing: '-.02em' }}>
            {t('h1')}<br /><span style={{ color: V.gold }}>{t('h1Gold')}</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '30em', margin: '0 auto', lineHeight: 1.8 }}>{t('desc')}</p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          <Section title={t('def_title')} label={t('def_label')} m={m}>
            <P m={m}>{t('def_p1')}</P>
            <P m={m}>{t('def_p2')}</P>
          </Section>

          <Divider />

          <Section title={t('when_title')} label={t('when_label')} m={m}>
            <P m={m}>{t('when_p1')}</P>
            <NumberedItem n={t('when_item1_n')} title={t('when_item1_title')} desc={t('when_item1_desc')} m={m} />
            <NumberedItem n={t('when_item2_n')} title={t('when_item2_title')} desc={t('when_item2_desc')} m={m} />
            <NumberedItem n={t('when_item3_n')} title={t('when_item3_title')} desc={t('when_item3_desc')} m={m} />
            <P m={m} style={{ fontStyle: 'italic', color: V.blue, borderRight: `3px solid ${V.gold}`, paddingRight: 16 }}>{t('when_quote')}</P>
          </Section>

          <Divider />

          <Section title={t('prep_title')} label={t('prep_label')} m={m}>
            <NumberedItem n={t('prep_item1_n')} title={t('prep_item1_title')} desc={t('prep_item1_desc')} m={m} />
            <NumberedItem n={t('prep_item2_n')} title={t('prep_item2_title')} desc={t('prep_item2_desc')} m={m} />
            <NumberedItem n={t('prep_item3_n')} title={t('prep_item3_title')} desc={t('prep_item3_desc')} m={m} />
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>{t('prep_highlight_title')}</div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>{t('prep_highlight_desc')}</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title={t('howto_title')} label={t('howto_label')} m={m}>
            <NumberedItem n={t('howto_item1_n')} title={t('howto_item1_title')} desc={t('howto_item1_desc')} m={m} />
            <NumberedItem n={t('howto_item2_n')} title={t('howto_item2_title')} desc={t('howto_item2_desc')} m={m} />
            <NumberedItem n={t('howto_item3_n')} title={t('howto_item3_title')} desc={t('howto_item3_desc')} m={m} />
            <NumberedItem n={t('howto_item4_n')} title={t('howto_item4_title')} desc={t('howto_item4_desc')} m={m} />
            <NumberedItem n={t('howto_item5_n')} title={t('howto_item5_title')} desc={t('howto_item5_desc')} m={m} />
          </Section>

          <Divider />

          <Section title={t('nusach_title')} label={t('nusach_label')} m={m}>
            {/* The nusach formula stays in Hebrew across all locales — sacred text */}
            <div style={{ background: V.navy, borderRadius: 16, padding: m ? '28px 22px' : '38px 48px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 28, color: '#fff', lineHeight: 1.7, fontWeight: 500, textAlign: 'center' }}>פ&quot;נ</div>
                <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 24, color: '#fff', lineHeight: 1.7, fontWeight: 500, marginTop: 8 }}>
                  אנא לעורר רחמים רבים על <span style={{ color: V.gold }}>[שמכם] בן/בת [שם האם]</span>
                </div>
                <div style={{ marginTop: 20, fontSize: m ? 14 : 15.5, color: V.mist, lineHeight: 1.7 }}>{t('nusach_display_continue')}</div>
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.14em', color: V.blue, marginBottom: 12 }}>{t('nusach_image_caption_label')}</div>
              <div style={{ borderRadius: 14, overflow: 'hidden', border: `1px solid ${V.line}`, boxShadow: '0 4px 24px rgba(15,28,51,.1)' }}>
                <img src="/pn-rebbe.png" alt={t('nusach_image_alt')} loading="lazy" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ fontSize: 13, color: V.mist, marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>{t('nusach_image_caption')}</div>
            </div>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, fontWeight: 600, color: V.ink, marginBottom: 8 }}>{t('nusach_why_title')}</div>
              <div style={{ fontSize: m ? 14.5 : 16, color: V.inkSoft, lineHeight: 1.8 }}>{t('nusach_why_desc')}</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title={t('name_title')} label={t('name_label')} m={m}>
            <P m={m}>{t('name_p1')}</P>
            {/* Name examples stay in Hebrew — they show the Hebrew naming format */}
            <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 16, marginBottom: 24 }}>
              {[
                { label: t('name_male_label'), example: 'יצחק בן שרה' },
                { label: t('name_female_label'), example: 'מרים בת שרה' },
              ].map((ex, i) => (
                <div key={i} style={{ flex: 1, background: V.white, border: `1px solid ${V.line}`, borderRadius: 12, padding: m ? '16px 18px' : '20px 24px' }}>
                  <div style={{ fontSize: 12, color: V.mist, letterSpacing: '.1em', marginBottom: 8, fontWeight: 600 }}>{ex.label}</div>
                  <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, color: V.ink, fontWeight: 500 }}>{ex.example}</div>
                </div>
              ))}
            </div>
          </Section>

          <Divider />

          <div style={{ background: V.navy, borderRadius: m ? 18 : 26, padding: m ? '48px 24px' : '72px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{t('cta_title')}</h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>{t('cta_desc')}</p>
              <Link href="/write" style={{ background: V.gold, color: V.navy, padding: m ? '13px 30px' : '16px 44px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 17, display: 'inline-block', boxShadow: '0 4px 20px rgba(201,168,92,.35)' }}>
                {t('cta_btn')} &nbsp;←
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
