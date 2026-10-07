import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

export type RevealVariant = 'fade-up' | 'clip-up' | 'scale-up' | 'mask-reveal' | 'stagger-container';

interface MotionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  id?: string;
  viewportMargin?: string;
}

export const MotionReveal: React.FC<MotionRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.65,
  yOffset = 28,
  className = '',
  id,
  viewportMargin = '-40px',
  ...props
}) => {
  const isReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReducedMotion) {
    return (
      <div id={id} className={className} {...(props as any)}>
        {children}
      </div>
    );
  }

  // Variant definitions
  if (variant === 'clip-up') {
    return (
      <motion.div
        id={id}
        className={className}
        initial={{ opacity: 0, clipPath: 'inset(10% 0 10% 0 round 16px)' }}
        whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0 round 0px)' }}
        viewport={{ once: true, margin: viewportMargin, amount: 0.08 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === 'scale-up') {
    return (
      <motion.div
        id={id}
        className={className}
        initial={{ opacity: 0, scale: 0.96, y: 14 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: viewportMargin, amount: 0.08 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === 'mask-reveal') {
    return (
      <div className={`overflow-hidden ${className}`} id={id}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: '0%', opacity: 1 }}
          viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
          transition={{
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="will-change-transform"
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  if (variant === 'stagger-container') {
    return (
      <motion.div
        id={id}
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: viewportMargin, amount: 0.06 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay,
            },
          },
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  // Default: 'fade-up'
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin, amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
