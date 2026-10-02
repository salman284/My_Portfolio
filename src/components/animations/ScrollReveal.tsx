import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface WordProps {
  children: string;
  range: [number, number];
  progress: any;
}

const Word: React.FC<WordProps> = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  const y = useTransform(progress, range, [3, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        display: 'inline-block',
        marginRight: '0.35em',
        willChange: 'opacity, transform',
        transition: 'color 0.2s ease',
      }}
    >
      {children}
    </motion.span>
  );
};

interface ScrollRevealParagraphProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollRevealParagraph: React.FC<ScrollRevealParagraphProps> = ({
  text,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.88', 'end 0.45'],
  });

  const words = text.split(' ');

  if (shouldReduceMotion) {
    return (
      <p
        style={{
          lineHeight: 1.8,
          marginBottom: '32px',
          ...style,
        }}
        className={className}
      >
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      style={{
        display: 'block',
        lineHeight: 1.8,
        marginBottom: '32px',
        ...style,
      }}
      className={className}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
