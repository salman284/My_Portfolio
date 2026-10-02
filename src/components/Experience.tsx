import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { EXPERIENCES_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-container">
      {/* Section Header */}
      <FadeIn>
        <div className="section-label">03 // INTERNSHIP HISTORY</div>
        <h2 className="section-heading">Work Experience</h2>
        <p
          style={{
            maxWidth: '680px',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            marginBottom: '48px',
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

            {/* Technologies Used */}
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
