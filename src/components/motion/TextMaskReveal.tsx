import React from 'react';
import { motion, useInView } from 'framer-motion';

interface TextMaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' | 'span';
}

export const TextMaskReveal: React.FC<TextMaskRevealProps> = ({
  children,
  delay = 0,
  duration = 0.75,
  className = '',
  as: Component = 'div',
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <Component className={`overflow-hidden ${className}`}>
      <motion.div
        ref={ref}
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Editorial Apple/Linear ease
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </Component>
  );
};
