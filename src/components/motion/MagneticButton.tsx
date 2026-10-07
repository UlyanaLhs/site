import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // Distance multiplier (default: 0.3)
  radius?: number; // Activation radius in px (default: 80)
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
  as?: 'button' | 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.28,
  radius = 90,
  onClick,
  disabled = false,
  id,
  as = 'div',
  href,
  target,
  rel
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsPointerFine(pointerQuery.matches);
    setPrefersReducedMotion(motionQuery.matches);

    const onPointerChange = (e: MediaQueryListEvent) => setIsPointerFine(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    pointerQuery.addEventListener('change', onPointerChange);
    motionQuery.addEventListener('change', onMotionChange);

    return () => {
      pointerQuery.removeEventListener('change', onPointerChange);
      motionQuery.removeEventListener('change', onMotionChange);
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics-based spring with smooth damping
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.12 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.12 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isPointerFine || prefersReducedMotion || disabled || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      // Pull element gently toward cursor
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
      data-cursor="button"
    >
      {children}
    </motion.div>
  );
};
