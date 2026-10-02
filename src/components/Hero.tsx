import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles, Terminal, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        padding: '120px 24px 60px 24px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <div className="badge badge-live">
              <span className="badge-live-dot" />
              Available for Opportunities & Collaboration
            </div>
            <div className="badge">
              <span>B.Tech CSE • Class of 2027</span>
            </div>
          </motion.div>

          {/* Subtitle / Name */}
          <motion.div variants={itemVariants}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Terminal size={18} style={{ color: 'var(--accent-cyan)' }} />
              Hello, world. I am
            </p>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5.8rem)',
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: '-0.035em',
                color: '#FFFFFF',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.6)',
              }}
            >
              {PERSONAL_INFO.name}
            </h1>
          </motion.div>

          {/* Main Title & Tagline */}
          <motion.div variants={itemVariants} style={{ maxWidth: '880px' }}>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              {PERSONAL_INFO.role}
              <span style={{ color: 'var(--accent-cyan)', marginLeft: '6px' }}>.</span>
            </h2>
            <p
              style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
                fontWeight: 400,
                color: 'var(--text-secondary)',
                lineHeight: 1.45,
                letterSpacing: '-0.01em',
              }}
            >
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>

          {/* Bio statement strictly based on CV */}
          <motion.div
            variants={itemVariants}
            style={{
              maxWidth: '720px',
              color: 'var(--text-muted)',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
              lineHeight: 1.65,
            }}
          >
            Final-year Computer Science & Engineering student at Supreme Knowledge Foundation (MAKAUT).
            Specialized in building full-stack web applications with{' '}
            <strong style={{ color: '#D7E2EA', fontWeight: 600 }}>React.js</strong>,{' '}
            <strong style={{ color: '#D7E2EA', fontWeight: 600 }}>Node.js</strong>,{' '}
            <strong style={{ color: '#D7E2EA', fontWeight: 600 }}>Python</strong>, and{' '}
            <strong style={{ color: '#D7E2EA', fontWeight: 600 }}>MongoDB</strong>. Passionate about AI-powered applications,
            and proud <strong style={{ color: '#38BDF8', fontWeight: 600 }}>Infosys Global Hackathon 2025 Finalist</strong> (Top 33 of 1,942 teams).
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              paddingTop: '12px',
            }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary"
              aria-label="Navigate to Projects Section"
            >
              <Code2 size={18} />
              View Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-secondary"
              aria-label="Navigate to Contact Section"
            >
              Contact Me
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              style={{ padding: '14px 20px' }}
              aria-label="Visit GitHub Profile"
            >
              <ExternalLink size={16} />
              GitHub
            </a>
          </motion.div>

          {/* Highlights Mini Cards */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginTop: '28px',
              maxWidth: '960px',
            }}
          >
            <div className="glass-panel" style={{ padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <Award size={18} style={{ color: 'var(--accent-amber)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  HACKATHON FINALIST
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1.05rem', color: '#D7E2EA', lineHeight: 1.3 }}>
                Top 33 of 1,942 Teams
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                Infosys Global Hackathon 2025 (Top 1.6%)
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  PRODUCTION SHIPPED
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1.05rem', color: '#D7E2EA', lineHeight: 1.3 }}>
                3 End-to-End Applications
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                KisanMitra • PizzaMaster • QuizMaster
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '18px 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <Code2 size={18} style={{ color: 'var(--accent-emerald)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  FULL-STACK TECH
                </span>
              </div>
              <p style={{ fontWeight: 700, fontSize: '1.05rem', color: '#D7E2EA', lineHeight: 1.3 }}>
                MERN & Python Stack
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                React.js • Node.js • Express • MongoDB • Flask
              </p>
            </div>
          </motion.div>
          {/* Scroll indicator — natural flex flow centered below cards */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '44px',
              paddingBottom: '20px',
              cursor: 'pointer',
              width: '100%',
              maxWidth: '960px',
            }}
            onClick={() => scrollTo('marquee-showcase')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                transition: 'color 0.2s ease',
              }}
            >
              Scroll to Explore
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} style={{ color: 'var(--accent-cyan)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
