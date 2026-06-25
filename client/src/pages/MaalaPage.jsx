import { useTranslations } from '@/i18n';
import { Link } from '@/i18n/navigation';
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
  const t    = useTranslations('maala');
  const wrap = { maxWidth: 800, margin: '0 auto', padding: m ? '0 20px' : '0 40px' };

  return (
    <div style={{ background: V.bg, color: V.ink, fontFamily: V.sans, lineHeight: 1.6, WebkitFontSmoothing: 'antialiased' }}>

      {/* ─── HERO ─── */}
      <section style={{ background: V.navyDeep, position: 'relative', overflow: 'hidden', padding: m ? '80px 0 72px' : '112px 0 104px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 100% at 50% 0%, rgba(176,141,74,.22), transparent 58%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(176,141,74,.5), transparent)' }} />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', ...wrap }}>
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h1 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 44 : 76, lineHeight: 1.1, color: '#fff', marginBottom: m ? 22 : 30, letterSpacing: '-.02em' }}>
            {t('h1')}<br /><span style={{ color: V.gold }}>{t('h1Gold')}</span>
          </h1>
          <p style={{ fontSize: m ? 16.5 : 20, color: 'rgba(196,205,217,.88)', maxWidth: '32em', margin: '0 auto 36px', lineHeight: 1.8 }}>
            {t('desc')}
          </p>
          <Link
            href="/write"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: V.gold, color: V.navyDeep, padding: m ? '13px 28px' : '15px 36px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15 : 16.5, boxShadow: '0 6px 28px rgba(176,141,74,.45)' }}
          >
            ✦&nbsp;{t('writeCta')}
          </Link>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <div style={{ padding: m ? '60px 0 100px' : '88px 0 140px' }}>
        <div style={wrap}>

          {/* === 1 === */}
          <Section title={t('s1_title')} label={t('s1_label')} m={m}>
            <P m={m}>{t('s1_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 24, color: V.ink, lineHeight: 1.7, marginBottom: 12 }}>
                &quot;{t('q1_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, letterSpacing: '.04em' }}>{t('q1_source')}</div>
            </HighlightBox>
            <P m={m}>{t('s1_p2')}</P>
            <P m={m}>{t('s1_p3')}</P>
          </Section>

          <Divider />

          {/* === 2 === */}
          <Section title={t('s2_title')} label={t('s2_label')} m={m}>
            <P m={m}>{t('s2_p1')}</P>
            <PullQuote
              m={m}
              quote={t('q2_text')}
              source={t('q2_source')}
            />
            <P m={m}>{t('s2_p2')}</P>
          </Section>

          <Divider />

          {/* === 3 === */}
          <Section title={t('s3_title')} label={t('s3_label')} m={m}>
            <P m={m}>{t('s3_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 21, color: V.ink, lineHeight: 1.8, marginBottom: 12 }}>
                &quot;{t('q3_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 8 }}>
                {t('q3_source')} <em>{t('s3_note')}</em>
              </div>
            </HighlightBox>
            <P m={m}>{t('s3_p2')}</P>
            <P m={m}>{t('s3_p3')}</P>
          </Section>

          <Divider />

          {/* === 4 === */}
          <Section title={t('s4_title')} label={t('s4_label')} m={m}>
            <P m={m}>{t('s4_p1')}</P>

            <StoryCard m={m} title={t('s4_c1_title')}>
              <p style={{ marginBottom: 12 }}>{t('s4_c1_p1')}</p>
              <p style={{ marginBottom: 12 }}>{t('s4_c1_p2')}</p>
              <BlockQuote m={m}>{t('q4_c1_quote')}</BlockQuote>
              <p>{t('s4_c1_p3')}</p>
            </StoryCard>

            <StoryCard m={m} title={t('s4_c2_title')}>
              <p style={{ marginBottom: 12 }}>{t('s4_c2_p1')}</p>
              <p style={{ marginBottom: 12 }}>{t('s4_c2_p2')}</p>
              <BlockQuote m={m}>{t('q4_c2_quote')}</BlockQuote>
              <p>{t('s4_c2_p3')}</p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 5 === */}
          <Section title={t('s5_title')} label={t('s5_label')} m={m}>
            <P m={m}>{t('s5_p1')}</P>
            <P m={m}>{t('s5_p2')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17 : 20.5, color: V.ink, lineHeight: 1.8, marginBottom: 10 }}>
                &quot;{t('q5_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>{t('q5_source')}</div>
            </HighlightBox>

            <StoryCard m={m} title={t('s5_c1_title')}>
              <p style={{ marginBottom: 12 }}>{t('s5_c1_p1')}</p>
              <BlockQuote m={m}>{t('q5_c1_quote')}</BlockQuote>
              <p>{t('s5_c1_p2')}</p>
            </StoryCard>

            <StoryCard m={m} title={t('s5_c2_title')}>
              <p style={{ marginBottom: 12 }}>{t('s5_c2_p1')}</p>
              <p style={{ marginBottom: 12 }}><strong style={{ color: V.ink }}>{t('s5_c2_p2')}</strong></p>
              <p>{t('s5_c2_p3')}</p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 6 === */}
          <Section title={t('s6_title')} label={t('s6_label')} m={m}>
            <P m={m}>{t('s6_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 21, color: V.ink, lineHeight: 1.75, marginBottom: 10 }}>
                &quot;{t('q6_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>{t('q6_source')}</div>
            </HighlightBox>
            <P m={m}>{t('s6_p2')}</P>
          </Section>

          <Divider />

          {/* === 7 === */}
          <Section title={t('s7_title')} label={t('s7_label')} m={m}>
            <P m={m}>{t('s7_p1')}</P>
            <PullQuote
              m={m}
              quote={t('q7_text')}
              source={t('q7_source')}
            />
            <P m={m}>{t('s7_p2')}</P>
            <P m={m}>{t('s7_p3')}</P>
          </Section>

          <Divider />

          {/* === 8 === */}
          <Section title={t('s8_title')} label={t('s8_label')} m={m}>
            <P m={m}>{t('s8_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 20 : 26, color: V.ink, lineHeight: 1.65, fontWeight: 600 }}>
                &quot;{t('q8_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 10 }}>{t('q8_source')}</div>
            </HighlightBox>
            <P m={m}>{t('s8_p2')}</P>
            <P m={m}>{t('s8_p3')}</P>
          </Section>

          <Divider />

          {/* === 9 === */}
          <Section title={t('s9_title')} label={t('s9_label')} m={m}>
            <P m={m}>{t('s9_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontSize: m ? 16.5 : 18.5, color: V.ink, lineHeight: 1.85 }}>
                &quot;{t('q9_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter, marginTop: 8 }}>
                {t('q9_source')}
              </div>
            </HighlightBox>
            <P m={m}>{t('s9_p2')}</P>
          </Section>

          <Divider />

          {/* === 10 === */}
          <Section title={t('s10_title')} label={t('s10_label')} m={m}>
            <P m={m}>{t('s10_p1')}</P>
            <PullQuote
              m={m}
              quote={t('q10_text')}
              source={t('q10_source')}
            />
            <P m={m}>{t('s10_p2')}</P>
          </Section>

          <Divider />

          {/* === 11 === */}
          <Section title={t('s11_title')} label={t('s11_label')} m={m}>
            <P m={m}>{t('s11_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 16.5 : 20, color: V.ink, lineHeight: 1.85, marginBottom: 12 }}>
                &quot;{t('q11_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>{t('q11_source')}</div>
            </HighlightBox>
            <P m={m}>{t('s11_p2')}</P>
          </Section>

          <Divider />

          {/* === 12 === */}
          <Section title={t('s12_title')} label={t('s12_label')} m={m}>
            <P m={m}>{t('s12_p1')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 17.5 : 22, color: V.ink, lineHeight: 1.8, marginBottom: 12 }}>
                &quot;{t('q12_text')}&quot;
              </div>
              <div style={{ fontSize: 13, color: V.inkLighter }}>{t('q12_source')}</div>
            </HighlightBox>
            <P m={m}>{t('s12_p2')}</P>

            <StoryCard m={m} title={t('s12_c_title')}>
              <p style={{ marginBottom: 14 }}>{t('s12_c_p1')}</p>
              <p style={{ marginBottom: 14 }}>{t('s12_c_p2')}</p>
              <p>{t('s12_c_p3')}</p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 13 === */}
          <Section title={t('s13_title')} label={t('s13_label')} m={m}>
            <P m={m}>{t('s13_p1')}</P>
            <P m={m}>{t('s13_p2')}</P>
            <BlockQuote m={m}>{t('q13_quote1')}</BlockQuote>
            <P m={m}>{t('s13_p3')}</P>
            <BlockQuote m={m}>{t('q13_quote2')}</BlockQuote>
            <P m={m}>{t('s13_p4')}</P>
            <P m={m}>{t('s13_p5')}</P>
          </Section>

          <Divider />

          {/* === 14 === */}
          <Section title={t('s14_title')} label={t('s14_label')} m={m}>
            <StoryCard m={m} title={t('s14_c_title')}>
              <p style={{ marginBottom: 14 }}>{t('s14_c_p1')}</p>
              <p style={{ marginBottom: 14 }}>{t('s14_c_p2')}</p>
              <p style={{ marginBottom: 14 }}>{t('s14_c_p3')}</p>
              <p style={{ marginBottom: 14 }}>{t('s14_c_p4')}</p>
              <div style={{ fontFamily: V.serif, fontSize: m ? 22 : 28, color: V.ink, textAlign: 'center', padding: m ? '16px 0' : '22px 0', borderTop: `1px solid ${V.line}`, borderBottom: `1px solid ${V.line}`, margin: '16px 0 20px', lineHeight: 1.5 }}>
                &quot;{t('q14_display')}&quot;
              </div>
              <p>{t('s14_c_p5')}</p>
            </StoryCard>
          </Section>

          <Divider />

          {/* === 15 === */}
          <Section title={t('s15_title')} label={t('s15_label')} m={m}>
            <P m={m}>{t('s15_p1')}</P>
            <P m={m}>{t('s15_p2')}</P>
            <HighlightBox m={m}>
              <div style={{ fontFamily: V.serif, fontSize: m ? 19 : 23, color: V.ink, lineHeight: 1.75 }}>
                {t('s15_h1')}<br />{t('s15_h2')}<br /><strong style={{ color: V.ink }}>{t('s15_h3')}</strong>
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
          <div style={{ fontFamily: V.serif, fontSize: m ? 13 : 14, color: V.gold, letterSpacing: '.16em', marginBottom: 20, textTransform: 'uppercase' }}>{t('ctaBadge')}</div>
          <h2 style={{ fontFamily: V.serif, fontWeight: 700, fontSize: m ? 32 : 52, color: '#fff', marginBottom: 18, lineHeight: 1.2 }}>
            &quot;{t('ctaQuote')}<br /><span style={{ color: V.gold }}>{t('ctaQuoteGold')}&quot;</span>
          </h2>
          <p style={{ fontSize: m ? 15.5 : 18, color: 'rgba(196,205,217,.85)', marginBottom: 38, maxWidth: '30em', marginInline: 'auto', lineHeight: 1.85 }}>
            {t('ctaDesc')}
          </p>
          <Link
            href="/write"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: V.gold, color: V.navy, padding: m ? '14px 30px' : '16px 42px', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: m ? 15.5 : 17, boxShadow: '0 6px 28px rgba(176,141,74,.45)', letterSpacing: '.01em' }}
          >
            ✦&nbsp;{t('ctaBtn')}
          </Link>
          <div style={{ marginTop: 22, fontSize: 13, color: 'rgba(196,205,217,.5)' }}>
            {t('ctaFooter')}
          </div>
        </div>
      </section>

    </div>
  );
}
