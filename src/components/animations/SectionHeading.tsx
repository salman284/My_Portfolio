import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3';
  className?: string;
  style?: React.CSSProperties;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  as = 'h2',
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking: Starts when top of heading hits 95% of viewport, fills by 55%
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'center 0.55'],
  });

  // Stroke-to-solid-fill animation matching reference video
  const fillOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const strokeOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.85, 0.45, 0.25]);

  const Tag = as;

  return (
    <div
      ref={ref}
      className={`klickpin-heading-container ${className}`}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: as === 'h3' ? '0' : '24px',
        ...style,
      }}
    >
      <div className={`klickpin-heading-wrapper ${as === 'h3' ? 'klickpin-heading-h3-wrap' : ''}`}>
        <Tag
          className={`klickpin-heading-text ${as === 'h3' ? 'klickpin-heading-h3' : ''}`}
        >
          {/* Layer 1: Outlined Stroke Text (Wireframe outline) */}
          <motion.span
            className="klickpin-stroke-layer"
            aria-hidden="true"
            style={{
              opacity: shouldReduceMotion ? 0.35 : strokeOpacity,
            }}
          >
            {children}
          </motion.span>

          {/* Layer 2: Solid Fill Text (Reveals on scroll) */}
          <motion.span
            className="klickpin-fill-layer"
            style={{
              opacity: shouldReduceMotion ? 1 : fillOpacity,
            }}
          >
            {children}
          </motion.span>
        </Tag>
      </div>
    </div>
  );
};
