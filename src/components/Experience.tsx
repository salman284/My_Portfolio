import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { SectionHeading } from './animations/SectionHeading';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      {/* Section Header */}
      <SectionHeading>Work Experience</SectionHeading>
      <FadeIn delay={0.1}>
        <p
          style={{
            maxWidth: '680px',
            margin: '0 auto 48px auto',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
          }}
        >
          Practical software engineering experience across full-stack MERN development, API integrations, and Python-based data analytics.
        </p>
      </FadeIn>

      {/* Experience List / Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {EXPERIENCES_DATA.map((exp, index) => (
          <FadeIn key={exp.id} delay={index * 0.12} className="glass-panel" style={{ padding: '36px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(215, 226, 234, 0.08)',
                paddingBottom: '20px',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    marginBottom: '6px',
                  }}
                >
                  <span>EXP // {exp.number}</span>
                  <span>•</span>
                  <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                    fontWeight: 700,
                    color: '#D7E2EA',
                  }}
                >
                  {exp.role}
                </h3>
                <div
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    marginTop: '2px',
                  }}
                >
                  {exp.company}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(215, 226, 234, 0.05)',
                  border: '1px solid rgba(215, 226, 234, 0.1)',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <Calendar size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Highlights from CV */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {exp.highlights.map((highlight, hIdx) => (
                <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--accent-cyan)',
                      marginTop: '9px',
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.98rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Technologies Used + Certificate */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                    marginRight: '6px',
                  }}
                >
                  Tech Stack:
                </span>
                {exp.technologies.map((tech) => (
                  <span key={tech} className="badge" style={{ fontSize: '0.7rem' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {exp.certificateUrl && (
                <motion.a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,212,255,0.05))',
                    border: '1px solid rgba(0,212,255,0.3)',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: '0 0 0 0 rgba(0,212,255,0)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 14px rgba(0,212,255,0.25)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,212,255,0.6)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 0 0 rgba(0,212,255,0)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(0,212,255,0.3)';
                  }}
                >
                  <Award size={14} />
                  View Certificate
                </motion.a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
