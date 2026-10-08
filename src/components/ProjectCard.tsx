import React from 'react';
import { motion, MotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { ExternalLink, Award, CheckCircle, Sparkles, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  total,
  range,
  targetScale,
  progress,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Scale down slightly as user scrolls past
  const scale = useTransform(progress, range, [1, targetScale]);
  // Subtle dimming as it gets layered
  const opacity = useTransform(progress, range, [1, 0.7]);

  return (
    <div
      style={{
        position: 'sticky',
        top: `calc(100px + ${index * 32}px)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: `${(total - index - 1) * 36}px`,
        width: '100%',
      }}
      className="project-sticky-wrapper"
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : scale,
          opacity: shouldReduceMotion ? 1 : opacity,
          width: '100%',
          maxWidth: '1280px',
          background: 'rgba(16, 18, 22, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(215, 226, 234, 0.12)',
          borderRadius: '24px',
          padding: 'clamp(24px, 4vw, 44px)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65)',
          transformOrigin: 'top center',
          willChange: 'transform, opacity',
        }}
        className="project-card"
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '28px',
            borderBottom: '1px solid rgba(215, 226, 234, 0.08)',
            paddingBottom: '20px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: project.accentColor,
                marginBottom: '8px',
              }}
            >
              <span>PROJECT // {project.number}</span>
              <span>•</span>
              <span style={{ color: 'var(--text-muted)' }}>{project.category}</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 800,
                color: '#D7E2EA',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                color: 'var(--text-secondary)',
                marginTop: '4px',
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Action Links */}
          <div className="project-action-links">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary project-btn"
                aria-label={`Open Live Demo for ${project.title}`}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary project-btn"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Content & Interactive Mockup Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center',
          }}
          className="project-content-grid"
        >
          {/* Left Column: Description, Features, Tech Stack */}
          <div>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                marginBottom: '24px',
              }}
            >
              {project.description}
            </p>

            {/* Hackathon Achievement Badge if present */}
            {project.achievement && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  marginBottom: '24px',
                }}
              >
                <Award size={18} style={{ color: 'var(--accent-amber)', flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: '0.88rem',
                    color: '#FBBF24',
                    fontWeight: 600,
                  }}
                >
                  {project.achievement}
                </span>
              </div>
            )}

            {/* Feature Bullets */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                Key Architecture & Features:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                {project.features.slice(0, 5).map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.92rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <span style={{ fontSize: '1.05rem' }}>{feat.slice(0, 2)}</span>
                    <span>{feat.slice(2).trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  marginBottom: '10px',
                }}
              >
                Technologies Used:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="badge"
                    style={{
                      borderColor: 'rgba(215, 226, 234, 0.15)',
                      fontSize: '0.75rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Mobile Actions: Accessible at bottom of project details */}
            <div className="project-action-links project-action-links-bottom">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary project-btn"
                  aria-label={`Open Live Demo for ${project.title}`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary project-btn"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Visual Dashboard / UI Mockup */}
          <div
            style={{
              background: 'rgba(10, 12, 15, 0.8)',
              border: '1px solid rgba(215, 226, 234, 0.1)',
              borderRadius: '18px',
              padding: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Visual Mockup Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(215, 226, 234, 0.08)',
                marginBottom: '18px',
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                }}
              >
                {project.id}.production.sys
              </div>
            </div>

            {/* Custom Interactive UI Mockup per Project */}
            {project.previewType === 'agricultural' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: '12px',
                      padding: '14px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#10B981', fontFamily: 'var(--font-mono)' }}>
                      SOIL HEALTH ANALYSIS
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#D7E2EA', marginTop: '4px' }}>
                      Optimal pH: 6.8
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      N: 140 • P: 45 • K: 180
                    </div>
                  </div>

                  <div
                    style={{
                      background: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: '12px',
                      padding: '14px',
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontFamily: 'var(--font-mono)' }}>
                      WEATHER TELEMETRY
                    </div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#D7E2EA', marginTop: '4px' }}>
                      28°C • Monsoon
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      Humidity 76% • Rain: 2mm
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(215, 226, 234, 0.03)',
                    border: '1px solid rgba(215, 226, 234, 0.08)',
                    borderRadius: '12px',
                    padding: '16px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      AI Crop Disease Detection Model
                    </span>
                    <span className="badge badge-live" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                      96.4% Accuracy
                    </span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Real-time image classification module identifying leaf blight, powdery mildew, and nutrient deficiencies with instant organic treatment prescriptions.
                  </p>
                </div>
              </div>
            )}

            {project.previewType === 'food' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    background: 'rgba(245, 158, 11, 0.08)',
                    border: '1px solid rgba(245, 158, 11, 0.2)',
                    borderRadius: '12px',
                    padding: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#F59E0B', fontFamily: 'var(--font-mono)' }}>
                      PIZZA CONFIGURATOR PIPELINE
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MERN Architecture</span>
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: '#D7E2EA', marginTop: '6px' }}>
                    Artisan Sourdough + Truffle & Basil
                  </div>
                  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                    <span className="badge" style={{ fontSize: '0.68rem' }}>Large (14")</span>
                    <span className="badge" style={{ fontSize: '0.68rem' }}>Extra Mozzarella</span>
                    <span className="badge" style={{ fontSize: '0.68rem' }}>Spicy Herb Sauce</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '10px',
                  }}
                >
                  <div style={{ background: 'rgba(215, 226, 234, 0.03)', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>JWT AUTH</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#10B981' }}>Secure Roles</div>
                  </div>
                  <div style={{ background: 'rgba(215, 226, 234, 0.03)', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>CART STATE</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#38BDF8' }}>Reactive Store</div>
                  </div>
                  <div style={{ background: 'rgba(215, 226, 234, 0.03)', padding: '10px', borderRadius: '8px' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)' }}>ADMIN ANALYTICS</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#F59E0B' }}>Live Revenue</div>
                  </div>
                </div>
              </div>
            )}

            {project.previewType === 'quiz' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div
                  style={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    borderRadius: '12px',
                    padding: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.75rem', color: '#818CF8', fontFamily: 'var(--font-mono)' }}>
                      TRIVIA REST API ENGINE
                    </div>
                    <div className="badge badge-live" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                      20+ Categories
                    </div>
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#D7E2EA', marginTop: '6px' }}>
                    Computer Science & Web Architecture
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Timer: <strong style={{ color: '#F43F5E' }}>15s Remaining</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      Streak: <strong style={{ color: '#10B981' }}>5/5 Correct</strong>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(215, 226, 234, 0.03)',
                    border: '1px solid rgba(215, 226, 234, 0.08)',
                    borderRadius: '12px',
                    padding: '14px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <ShieldCheck size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#D7E2EA' }}>
                      Offline Fallback Question Bank
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Cached local storage schema activates seamlessly whenever network drops occur, ensuring uninterrupted user evaluation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
