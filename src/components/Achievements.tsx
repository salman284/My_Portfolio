import React from 'react';
import { Trophy, Award, ExternalLink } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { SectionHeading } from './animations/SectionHeading';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="section-container" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <SectionHeading>Honors &amp; Finalist Awards</SectionHeading>
      <FadeIn delay={0.1}>
        <p
          style={{
            maxWidth: '680px',
            margin: '0 auto 40px auto',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}
        >
          Competitive hackathon milestones validating technical innovation, architecture, and real-world problem-solving under strict judging criteria.
        </p>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <FadeIn
            key={item.number}
            delay={index * 0.12}
            className="glass-panel"
            style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: index === 0 ? 'rgba(245, 158, 11, 0.12)' : 'rgba(56, 189, 248, 0.12)',
                  border: index === 0 ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: index === 0 ? 'var(--accent-amber)' : 'var(--accent-cyan)',
                }}
              >
                {index === 0 ? <Trophy size={22} /> : <Award size={22} />}
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  background: 'rgba(215, 226, 234, 0.04)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                }}
              >
                {item.year}
              </span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: index === 0 ? 'var(--accent-amber)' : 'var(--accent-cyan)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              {item.stats}
            </div>

            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#D7E2EA',
                lineHeight: 1.3,
                marginBottom: '10px',
              }}
            >
              {item.title}
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '14px',
              }}
            >
              Organized by {item.organizer}
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                flex: 1,
                marginBottom: item.certificateUrl ? '20px' : '0',
              }}
            >
              {item.description}
            </p>

            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  border: index === 0
                    ? '1px solid rgba(245, 158, 11, 0.35)'
                    : '1px solid rgba(56, 189, 248, 0.35)',
                  color: index === 0 ? 'var(--accent-amber)' : 'var(--accent-cyan)',
                  background: index === 0
                    ? 'rgba(245, 158, 11, 0.07)'
                    : 'rgba(56, 189, 248, 0.07)',
                  transition: 'background 0.2s ease, border-color 0.2s ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    index === 0 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(56, 189, 248, 0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    index === 0 ? 'rgba(245, 158, 11, 0.07)' : 'rgba(56, 189, 248, 0.07)';
                }}
              >
                <ExternalLink size={14} />
                View Certificate
              </a>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
