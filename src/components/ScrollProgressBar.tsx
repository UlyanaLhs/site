import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for fluid progress feedback
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-200/50 pointer-events-none"
      role="progressbar"
      aria-label="Page scroll progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-400 origin-left relative shadow-sm"
        style={{ scaleX }}
      >
        {/* Subtle glowing leading edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full bg-white/60 blur-[1px] rounded-full" />
      </motion.div>
    </div>
  );
};
