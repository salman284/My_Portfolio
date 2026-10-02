import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle2, MapPin, Terminal, BookOpen, Layers, Code2, Server, Cpu } from 'lucide-react';
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '32px',
          marginTop: '48px',
          alignItems: 'stretch',
        }}
      >
        {/* Education Timeline Card */}
        <FadeIn
          delay={0.1}
          className="glass-panel"
          style={{
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Card Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-cyan)',
                flexShrink: 0,
              }}
            >
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#D7E2EA' }}>Academic Journey</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                MAKAUT Affiliated • B.Tech CSE (2023–2027)
              </p>
            </div>
          </div>

          {/* Timeline Items */}
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {EDUCATION_DATA.map((edu, index) => {
              const isBTech = index === 0;
              const isLast = index === EDUCATION_DATA.length - 1;

              return (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    paddingLeft: '32px',
                    paddingBottom: isLast ? '0' : '30px',
                  }}
                >
                  {/* Continuous Timeline Connecting Line */}
                  {!isLast && (
                    <div
                      style={{
                        position: 'absolute',
                        left: '7px',
                        top: '20px',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(to bottom, rgba(56, 189, 248, 0.4), rgba(215, 226, 234, 0.12))',
                      }}
                    />
                  )}

                  {/* Node Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '1px',
                      top: '4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: isBTech ? 'var(--accent-cyan)' : '#181B20',
                      border: `2px solid ${isBTech ? '#0C0C0C' : 'rgba(215, 226, 234, 0.3)'}`,
                      boxShadow: isBTech ? '0 0 12px rgba(56, 189, 248, 0.75)' : 'none',
                    }}
                  />

                  {/* Degree & Score Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      flexWrap: 'wrap',
                      marginBottom: '6px',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: '#D7E2EA',
                        lineHeight: 1.35,
                      }}
                    >
                      {edu.degree}
                    </h4>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: isBTech ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                        background: isBTech ? 'rgba(56, 189, 248, 0.12)' : 'rgba(215, 226, 234, 0.06)',
                        border: `1px solid ${isBTech ? 'rgba(56, 189, 248, 0.28)' : 'rgba(215, 226, 234, 0.14)'}`,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {isBTech ? 'CGPA 7.28 / 10' : edu.score}
                    </span>
                  </div>

                  {/* Institution */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      marginBottom: '4px',
                    }}
                  >
                    {edu.institution}
                  </p>

                  {/* Period & Status Info */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginTop: '4px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: isBTech ? 'var(--accent-emerald)' : 'var(--text-muted)',
                        background: isBTech ? 'rgba(16, 185, 129, 0.08)' : 'transparent',
                        padding: isBTech ? '2px 8px' : '0',
                        borderRadius: '4px',
                      }}
                    >
                      {edu.period}
                    </span>
                    {isBTech && (
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        • Semesters 1–6 Completed (Zero Active Backlogs)
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55,
                    }}
                  >
                    {edu.details}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Card Footer */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '18px',
              borderTop: '1px solid rgba(215, 226, 234, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-emerald)',
                boxShadow: '0 0 8px var(--accent-emerald)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Full-time B.Tech CSE Student • Actively shipping production-grade applications
            </span>
          </div>
        </FadeIn>

        {/* Technical Domain Competencies */}
        <FadeIn
          delay={0.2}
          className="glass-panel"
          style={{
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Card Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-emerald)',
                flexShrink: 0,
              }}
            >
              <Terminal size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#D7E2EA' }}>Core Competencies</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Industry Stack & Computer Science Fundamentals
              </p>
            </div>
          </div>

          {/* Categorized Skills Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', flex: 1 }}>
            {/* Category 1: Languages */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '10px',
                }}
              >
                <Code2 size={13} />
                <span>Programming Languages</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.languages.map((item) => (
                  <span
                    key={item}
                    className="badge"
                    style={{
                      background: 'rgba(56, 189, 248, 0.05)',
                      borderColor: 'rgba(56, 189, 248, 0.16)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 2: Frontend */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#60A5FA',
                  marginBottom: '10px',
                }}
              >
                <Layers size={13} />
                <span>Frontend Architecture</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.frontend.map((item) => (
                  <span
                    key={item}
                    className="badge"
                    style={{
                      background: 'rgba(96, 165, 250, 0.05)',
                      borderColor: 'rgba(96, 165, 250, 0.16)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 3: Backend & Databases */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-emerald)',
                  marginBottom: '10px',
                }}
              >
                <Server size={13} />
                <span>Backend, Cloud & Databases</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.backend.concat(CORE_SKILLS.databasesCloud).map((item) => (
                  <span
                    key={item}
                    className="badge"
                    style={{
                      background: 'rgba(16, 185, 129, 0.05)',
                      borderColor: 'rgba(16, 185, 129, 0.16)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Category 4: CS Fundamentals */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#C084FC',
                  marginBottom: '10px',
                }}
              >
                <Cpu size={13} />
                <span>CS Fundamentals & Practices</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {CORE_SKILLS.csFundamentals
                  .concat(['Git & GitHub', 'AI Coding Tools', 'Acceptance Testing'])
                  .map((item) => (
                    <span
                      key={item}
                      className="badge"
                      style={{
                        background: 'rgba(192, 132, 252, 0.05)',
                        borderColor: 'rgba(192, 132, 252, 0.16)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div
            style={{
              marginTop: '32px',
              paddingTop: '18px',
              borderTop: '1px solid rgba(215, 226, 234, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-cyan)',
                boxShadow: '0 0 8px var(--accent-cyan)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              100% Verified against real-world projects & hackathon submissions
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
