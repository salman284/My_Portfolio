import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(215, 226, 234, 0.08)',
        background: 'rgba(8, 10, 12, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '48px 24px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Identity */}
        <div>
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#D7E2EA',
              letterSpacing: '-0.01em',
            }}
          >
            {PERSONAL_INFO.name}
          </h4>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginTop: '4px',
            }}
          >
            {PERSONAL_INFO.role} • Kolkata, West Bengal, India
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-icon"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="btn-icon"
            aria-label="Send Email"
          >
            <Mail size={18} />
          </a>
          <button
            onClick={scrollToTop}
            className="btn-icon"
            aria-label="Scroll back to top"
            title="Scroll to Top"
            style={{ cursor: 'pointer' }}
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '24px auto 0 auto',
          paddingTop: '20px',
          borderTop: '1px solid rgba(215, 226, 234, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
        }}
      >
        <span>© {new Date().getFullYear()} SK Salman Alam Ostagar. All rights reserved.</span>
        <span>Supreme Knowledge Foundation (MAKAUT) • 2027</span>
      </div>
    </footer>
  );
};
