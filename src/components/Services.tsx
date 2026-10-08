import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';
import { SERVICES_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-container">
      {/* Section Header */}
      <FadeIn>
        <h2 className="section-heading">Technical Capabilities</h2>
        <p
          style={{
            maxWidth: '680px',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            marginBottom: '48px',
          }}
        >
          Specialized full-stack development, API architecture, and applied AI systems crafted with performance and clean code standards.
        </p>
      </FadeIn>

      {/* Services List with Large Numbers & Dividers */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {SERVICES_DATA.map((service, index) => (
          <FadeIn
            key={service.number}
            delay={index * 0.08}
            className="service-row"
            style={{
              borderTop: '1px solid rgba(215, 226, 234, 0.1)',
              padding: '40px 12px',
              transition: 'background 0.3s ease, border-color 0.3s ease',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 2fr auto',
                alignItems: 'baseline',
                gap: '24px',
              }}
              className="service-grid"
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--accent-cyan)',
                  opacity: 0.8,
                }}
              >
                {service.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.8rem)',
                  fontWeight: 700,
                  color: '#D7E2EA',
                  letterSpacing: '-0.02em',
                }}
              >
                {service.title}
              </h3>

              {/* Description & Tech Chips */}
              <div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.98rem',
                    lineHeight: 1.65,
                    marginBottom: '14px',
                  }}
                >
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="badge"
                      style={{
                        fontSize: '0.72rem',
                        padding: '4px 10px',
                        background: 'rgba(215, 226, 234, 0.03)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Arrow Indicator */}
              <div
                style={{
                  color: 'var(--text-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                }}
                className="service-arrow"
              >
                <ArrowUpRight size={20} />
              </div>
            </div>
          </FadeIn>
        ))}
        {/* Bottom border for the last service item */}
        <div style={{ borderBottom: '1px solid rgba(215, 226, 234, 0.1)' }} />
      </div>

      <style>{`
        .service-row:hover {
          background: rgba(215, 226, 234, 0.02);
          border-color: rgba(215, 226, 234, 0.2) !important;
        }
        .service-row:hover .service-arrow {
          color: var(--accent-cyan) !important;
          transform: translate(2px, -2px);
          transition: transform 0.2s ease, color 0.2s ease;
        }
        @media (max-width: 860px) {
          .service-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .service-arrow {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
