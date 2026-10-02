import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, MapPin, Terminal, BookOpen, Layers } from 'lucide-react';
import { ScrollRevealParagraph } from './animations/ScrollReveal';
import { FadeIn } from './animations/FadeIn';
import { PERSONAL_INFO, EDUCATION_DATA, CORE_SKILLS } from '../data/portfolioData';

export const About: React.FC = () => {
  const editorialText1 =
    'I am a final-year B.Tech Computer Science & Engineering student at Supreme Knowledge Foundation Group of Institutions under MAKAUT, graduating in 2027. My engineering focus centers on full-stack web development, bridging responsive frontend architecture with resilient backend services.';

  const editorialText2 =
    'Working across React.js, Node.js, Express.js, Python, and MongoDB, I build complete systems from initial data modeling through secure REST API design, JWT authentication, and high-performance UI implementation. Beyond standard web architecture, I develop AI and data-oriented applications that solve grounded real-world problems.';

  const editorialText3 =
    'To date, I have built and deployed 3 end-to-end web applications, and engineered KisanMitra to reach the global finals of the Infosys Global Hackathon 2025 — placing in the top 33 out of 1,942 competing teams.';

  return (
    <section id="about" className="section-container" style={{ minHeight: '100vh' }}>
      {/* Section Header */}
      <FadeIn>
        <div className="section-label">02 // BACKGROUND & ACADEMICS</div>
        <h2 className="section-heading">About Me</h2>
      </FadeIn>

      {/* Main Editorial Text with Word-by-Word Scroll Reveal */}
      <div style={{ maxWidth: '980px', marginTop: '40px', marginBottom: '72px' }}>
        <div
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
            color: '#D7E2EA',
            fontWeight: 400,
            lineHeight: 1.85,
            letterSpacing: '0.01em',
          }}
        >
          <ScrollRevealParagraph text={editorialText1} style={{ marginBottom: '32px' }} />
          <ScrollRevealParagraph text={editorialText2} style={{ marginBottom: '32px' }} />
          <ScrollRevealParagraph text={editorialText3} style={{ marginBottom: '0' }} />
        </div>
      </div>

      {/* Structured Details: Education & Core Competencies */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginTop: '48px',
        }}
      >
        {/* Education Timeline Card */}
        <FadeIn delay={0.1} className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
              }}
            >
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#D7E2EA' }}>Academic Journey</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Degrees & Formal Qualifications
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {EDUCATION_DATA.map((edu, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  borderLeft: '1px solid rgba(215, 226, 234, 0.12)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-5px',
                    top: '4px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: index === 0 ? 'var(--accent-cyan)' : 'rgba(215, 226, 234, 0.3)',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#D7E2EA' }}>{edu.degree}</h4>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(56, 189, 248, 0.08)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {edu.details} • {edu.period}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Technical Domain Competencies */}
        <FadeIn delay={0.2} className="glass-panel" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-emerald)',
              }}
            >
              <Terminal size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#D7E2EA' }}>Core Competencies</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Verified via CV & Shipped Code
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Languages
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.languages.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Frontend Engineering
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.frontend.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Backend & Cloud
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.backend.concat(CORE_SKILLS.databasesCloud).map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                CS Fundamentals & Practices
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.csFundamentals.concat(['Git & GitHub', 'AI Coding Tools', 'Acceptance Testing']).map(
                  (item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
