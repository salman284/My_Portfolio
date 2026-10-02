import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Cpu,
  GitBranch,
  ShieldCheck,
  Terminal,
  FileCode,
  Sparkles,
  Layout,
  Workflow
} from 'lucide-react';
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from '../data/portfolioData';

interface MarqueeCardProps {
  label: string;
  icon?: React.ReactNode;
  category?: string;
  color?: string;
}

const getTechMeta = (name: string): { icon: React.ReactNode; category: string; color: string } => {
  if (name.includes('React')) return { icon: <Globe size={18} />, category: 'Frontend', color: '#38BDF8' };
  if (name.includes('Node')) return { icon: <Server size={18} />, category: 'Backend', color: '#22C55E' };
  if (name.includes('Python')) return { icon: <Cpu size={18} />, category: 'Language', color: '#FACC15' };
  if (name.includes('JavaScript')) return { icon: <FileCode size={18} />, category: 'Core', color: '#F59E0B' };
  if (name.includes('MongoDB')) return { icon: <Database size={18} />, category: 'Database', color: '#10B981' };
  if (name.includes('Express')) return { icon: <Server size={18} />, category: 'Framework', color: '#A855F7' };
  if (name.includes('Flask')) return { icon: <Terminal size={18} />, category: 'Python API', color: '#38BDF8' };
  if (name.includes('Tailwind')) return { icon: <Layout size={18} />, category: 'Styling', color: '#06B6D4' };
  if (name.includes('JWT')) return { icon: <ShieldCheck size={18} />, category: 'Auth & Security', color: '#EC4899' };
  if (name.includes('Git')) return { icon: <GitBranch size={18} />, category: 'Version Control', color: '#F97316' };
  if (name.includes('Hackathon')) return { icon: <Sparkles size={18} />, category: 'Recognition', color: '#F59E0B' };
  if (name.includes('MERN')) return { icon: <Layers size={18} />, category: 'Architecture', color: '#6366F1' };
  return { icon: <Workflow size={18} />, category: 'Engineering', color: '#818CF8' };
};

const MarqueeCard: React.FC<MarqueeCardProps> = ({ label }) => {
  const meta = getTechMeta(label);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        padding: '14px 24px',
        background: 'rgba(18, 21, 26, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(215, 226, 234, 0.09)',
        borderRadius: '16px',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.25s ease, border-color 0.25s ease',
      }}
      className="marquee-card"
    >
      <div
        style={{
          width: '34px',
          height: '34px',
          borderRadius: '10px',
          background: `rgba(${meta.color === '#38BDF8' ? '56, 189, 248' : '215, 226, 234'}, 0.08)`,
          border: `1px solid ${meta.color}40`,
          color: meta.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {meta.icon}
      </div>
      <div>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            lineHeight: 1,
            marginBottom: '4px',
          }}
        >
          {meta.category}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.98rem',
            color: '#D7E2EA',
            lineHeight: 1.2,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export const Marquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Row 1 moves towards the right according to page scroll
  const x1 = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  // Row 2 moves towards the left according to page scroll
  const x2 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%']);

  // Double arrays for smooth continuous coverage across viewports
  const row1Items = [...MARQUEE_ROW_1, ...MARQUEE_ROW_1];
  const row2Items = [...MARQUEE_ROW_2, ...MARQUEE_ROW_2];

  return (
    <section
      id="marquee-showcase"
      ref={containerRef}
      style={{
        padding: '70px 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(12, 12, 12, 0) 0%, rgba(14, 16, 20, 0.4) 50%, rgba(12, 12, 12, 0) 100%)',
        borderTop: '1px solid rgba(215, 226, 234, 0.05)',
        borderBottom: '1px solid rgba(215, 226, 234, 0.05)',
      }}
    >
      {/* Visual Header */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto 36px auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div>
          <div className="section-label">01 // TECHNICAL CAPABILITIES</div>
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: '#D7E2EA',
            }}
          >
            Core Stack & Tooling
          </h3>
        </div>
      </div>

      {/* Row 1: Moves right on scroll */}
      <div style={{ overflow: 'hidden', padding: '10px 0' }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '18px',
            width: 'max-content',
            x: shouldReduceMotion ? 0 : x1,
            willChange: 'transform',
          }}
        >
          {row1Items.map((tech, index) => (
            <MarqueeCard key={`row1-${tech}-${index}`} label={tech} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moves left on scroll */}
      <div style={{ overflow: 'hidden', padding: '10px 0', marginTop: '12px' }}>
        <motion.div
          style={{
            display: 'flex',
            gap: '18px',
            width: 'max-content',
            x: shouldReduceMotion ? 0 : x2,
            willChange: 'transform',
          }}
        >
          {row2Items.map((tech, index) => (
            <MarqueeCard key={`row2-${tech}-${index}`} label={tech} />
          ))}
        </motion.div>
      </div>

      {/* Gradient Edge Masks for soft fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '120px',
          height: '100%',
          background: 'linear-gradient(to right, #0C0C0C 20%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '120px',
          height: '100%',
          background: 'linear-gradient(to left, #0C0C0C 20%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />
    </section>
  );
};
