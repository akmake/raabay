'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useIsMobile } from '@/hooks/useIsMobile';

const V = {
  bg: '#ffffff', ink: '#14223f', inkSoft: '#3a4a68',
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
const CustomItem = ({ icon, title, desc, m }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: m ? 16 : 24, marginBottom: m ? 24 : 32 }}>
    <div style={{ width: m ? 40 : 50, height: m ? 40 : 50, flexShrink: 0, borderRadius: '50%', background: 'rgba(176,141,74,.1)', border: '1px solid rgba(176,141,74,.3)', color: V.gold, fontFamily: V.serif, fontWeight: 700, fontSize: m ? 18 : 22, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>{icon}</div>
    <div>
      <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 22, fontWeight: 600, color: V.ink, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: m ? 15 : 16.5, color: V.inkSoft, lineHeight: 1.8 }}>{desc}</div>
    </div>
  </div>
);

export default function OhelClient() {
  const m = useIsMobile();
  const t = useTranslations('ohel');
  const wrap = { maxWidth: 780, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      <section style={{ background: V.navy, position: 'relative', overflow: 'hidden', padding: m ? '72px 0 72px' : '100px 0 100px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(65% 110% at 50% 0%, rgba(201,168,92,.2), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: V.gold, background: 'rgba(201,168,92,.12)', border: '1px solid rgba(201,168,92,.3)', padding: '7px 18px', borderRadius: 100, marginBottom: m ? 24 : 36 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: V.gold, display: 'inline-block' }} />{t('badge')}
          </span>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 48 : 78, lineHeight: 1.1, color: '#fff', marginBottom: m ? 20 : 28, letterSpacing: '-.02em' }}>
            {t('h1')}<br /><span style={{ color: V.gold }}>{t('h1Gold')}</span>
          </h1>
          <p style={{ fontSize: m ? 17 : 21, color: V.mist, maxWidth: '32em', margin: '0 auto', lineHeight: 1.8 }}>{t('desc')}</p>
        </div>
      </section>

      <div style={{ padding: m ? '56px 0 80px' : '80px 0 120px' }}>
        <div style={wrap}>

          <Section title={t('def_title')} label={t('def_label')} m={m}>
            <P m={m}>{t('def_p1')}</P>
            <P m={m}>{t('def_p2')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 18 : 22, color: V.ink, lineHeight: 1.7 }}>{t('def_hours')}</div>
              <div style={{ fontSize: 13.5, color: V.inkSoft, marginTop: 10 }}>{t('def_address')}</div>
            </HighlightBox>
          </Section>

          <Divider />

          <Section title={t('hist_title')} label={t('hist_label')} m={m}>
            <P m={m}>{t('hist_p1')}</P>
            <P m={m}>{t('hist_p2')}</P>
            <div style={{ background: V.navy, borderRadius: 14, padding: m ? '24px 20px' : '32px 36px', marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(60% 100% at 100% 0%, rgba(201,168,92,.12), transparent)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20, color: '#fff', lineHeight: 1.8 }}>{t('hist_quote')}</div>
                <div style={{ fontSize: 13, color: V.mist, marginTop: 14, letterSpacing: '.04em' }}>{t('hist_source')}</div>
              </div>
            </div>
            <P m={m}>{t('hist_p3')}</P>
          </Section>

          <Divider />

          <Section title={t('yechida_title')} label={t('yechida_label')} m={m}>
            <P m={m}>{t('yechida_p1')}</P>
            <HighlightBox m={m}>
              {/* Sacred Yiddish quote — stays as-is across all locales */}
              <div style={{ fontFamily: V.serif, fontSize: m ? 21 : 28, color: V.ink, lineHeight: 1.5, textAlign: 'center' }}>״אִיז דָּא אִיז עֶר״</div>
              <div style={{ fontSize: 14, color: V.inkSoft, marginTop: 12, textAlign: 'center' }}>{t('yechida_quoteDesc')}</div>
            </HighlightBox>
            <P m={m}>{t('yechida_p2')}</P>
          </Section>

          <Divider />

          <Section title={t('process_title')} label={t('process_label')} m={m}>
            <P m={m}>{t('process_p1')}</P>
            <CustomItem icon={t('step1_icon')} title={t('step1_title')} desc={t('step1_desc')} m={m} />
            <CustomItem icon={t('step2_icon')} title={t('step2_title')} desc={t('step2_desc')} m={m} />
            <CustomItem icon={t('step3_icon')} title={t('step3_title')} desc={t('step3_desc')} m={m} />
          </Section>

          <Divider />

          <Section title={t('customs_title')} label={t('customs_label')} m={m}>
            <P m={m}>{t('customs_p1')}</P>
            <CustomItem icon={t('custom1_icon')} title={t('custom1_title')} desc={t('custom1_desc')} m={m} />
            <CustomItem icon={t('custom2_icon')} title={t('custom2_title')} desc={t('custom2_desc')} m={m} />
            <CustomItem icon={t('custom3_icon')} title={t('custom3_title')} desc={t('custom3_desc')} m={m} />
            <CustomItem icon={t('custom4_icon')} title={t('custom4_title')} desc={t('custom4_desc')} m={m} />
            <CustomItem icon={t('custom5_icon')} title={t('custom5_title')} desc={t('custom5_desc')} m={m} />
          </Section>

          <Divider />

          <div style={{ background: V.navy, borderRadius: m ? 18 : 26, padding: m ? '48px 24px' : '72px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 120% at 50% 0%, rgba(201,168,92,.18), transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontFamily: V.serif, fontSize: m ? 28 : 46, fontWeight: 700, color: '#fff', marginBottom: 14 }}>{t('cta_title')}</h2>
              <p style={{ fontSize: m ? 15 : 18, color: V.mist, maxWidth: '28em', margin: '0 auto 34px', lineHeight: 1.8 }}>{t('cta_desc')}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/write" style={{ background: V.gold, color: V.navy, padding: m ? '13px 30px' : '16px 44px', borderRadius: 10, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 17, display: 'inline-block', boxShadow: '0 4px 20px rgba(201,168,92,.35)' }}>{t('cta_write')} &nbsp;←</Link>
                <Link href="/mikhtav" style={{ background: 'transparent', color: V.mist, padding: m ? '13px 30px' : '16px 44px', borderRadius: 10, textDecoration: 'none', fontWeight: 600, fontSize: m ? 14 : 16, display: 'inline-block', border: '1px solid rgba(255,255,255,.2)' }}>{t('cta_info')}</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
