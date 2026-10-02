import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { FadeIn } from './animations/FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="section-container" style={{ position: 'relative' }}>
      {/* Section Header */}
      <FadeIn>
        <div className="section-label">05 // FEATURED ENGINEERING</div>
        <h2 className="section-heading">Selected Projects</h2>
        <p
          style={{
            maxWidth: '680px',
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            marginBottom: '64px',
          }}
        >
          End-to-end applications designed, built, and shipped against real acceptance criteria — featuring MERN architectures, Python modules, and hackathon-finalist platforms.
        </p>
      </FadeIn>

      {/* Sticky Stacking Cards Container */}
      <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
        {PROJECTS_DATA.map((project, i) => {
          // Calculate scale target: Earlier cards scale down more as later cards stack over them
          const targetScale = 1 - (PROJECTS_DATA.length - 1 - i) * 0.05;
          const range: [number, number] = [i * 0.28, 1];

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={PROJECTS_DATA.length}
              range={range}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
};
