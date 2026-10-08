import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { FadeIn } from './animations/FadeIn';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="section-container" style={{ paddingBottom: '120px' }}>
      <div
        className="glass-panel"
        style={{
          padding: 'clamp(32px, 6vw, 64px)',
          borderRadius: '32px',
          background: 'radial-gradient(circle at 80% 20%, rgba(56, 189, 248, 0.08) 0%, rgba(16, 18, 22, 0.94) 70%)',
          border: '1px solid rgba(215, 226, 234, 0.14)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                lineHeight: 1.08,
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.03em',
                marginBottom: '20px',
              }}
            >
              Let's Build Something
              <span style={{ color: 'var(--accent-cyan)' }}>.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.55,
                marginBottom: '36px',
                fontWeight: 400,
              }}
            >
              Whether you have a full-time software engineering role, internship opportunity, hackathon project, or technical problem to discuss — my inbox is always open.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.3}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '40px',
              }}
            >
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '16px 32px' }}
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '16px 28px' }}
              >
                <GithubIcon size={18} />
                GitHub
                <ArrowUpRight size={16} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '16px 28px' }}
              >
                <LinkedinIcon size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </a>

              <button
                onClick={copyEmail}
                className="btn-secondary"
                style={{ padding: '16px 20px' }}
                aria-label="Copy email address"
                title="Copy email to clipboard"
              >
                {copied ? <Check size={18} style={{ color: '#10B981' }} /> : <Copy size={18} />}
                <span style={{ fontSize: '0.88rem' }}>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </FadeIn>

          {/* Meta Details Strip */}
          <FadeIn delay={0.4}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                borderTop: '1px solid rgba(215, 226, 234, 0.1)',
                paddingTop: '28px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
