import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export type CursorState = 'default' | 'link' | 'button' | 'project' | 'image' | 'drag';

export const CustomCursor: React.FC = () => {
  const { language } = useLanguage();
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const isPointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isPointerFine || prefersReducedMotion) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Drag elements (e.g. range sliders in ROI calculator)
      if (target.closest('input[type="range"], [data-cursor="drag"], .cursor-grab, .cursor-grabbing')) {
        setCursorState('drag');
        return;
      }

      // 2. Project card / case showcase
      if (target.closest('[data-cursor="project"], .case-card-trigger, #cases .group')) {
        setCursorState('project');
        return;
      }

      // 3. Image / modal preview
      if (target.closest('[data-cursor="image"], .case-modal-image, img.cursor-pointer')) {
        setCursorState('image');
        return;
      }

      // 4. Primary buttons
      if (target.closest('button, [data-cursor="button"], [role="button"]')) {
        setCursorState('button');
        return;
      }

      // 5. Links
      if (target.closest('a, [data-cursor="link"], .cursor-pointer')) {
        setCursorState('link');
        return;
      }

      setCursorState('default');
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth physics-based spring loop (lerp)
    const animate = () => {
      const factor = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * factor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * factor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  const isPill = cursorState === 'project' || cursorState === 'image' || cursorState === 'drag';

  const getPillLabel = () => {
    if (cursorState === 'project') return language === 'ru' ? 'Кейс' : 'View project';
    if (cursorState === 'image') return language === 'ru' ? 'Смотреть' : 'Explore';
    if (cursorState === 'drag') return language === 'ru' ? 'Тяните' : 'Drag';
    return '';
  };

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-[999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-transform duration-100 ease-out ${
          isPill 
            ? 'w-0 h-0 opacity-0' 
            : cursorState === 'button'
            ? 'w-1.5 h-1.5 bg-blue-600'
            : cursorState === 'link'
            ? 'w-1.5 h-1.5 bg-blue-600'
            : 'w-2 h-2 bg-blue-600'
        }`}
      />

      {/* Outer Adaptive Morphing Ring / Capsule Pill */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 transition-all duration-200 ease-out flex items-center justify-center font-sans ${
          isPill
            ? 'px-3.5 h-8 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wider shadow-lg shadow-blue-600/30'
            : cursorState === 'button'
            ? 'w-11 h-11 rounded-full border border-blue-600/60 bg-blue-600/10'
            : cursorState === 'link'
            ? 'w-9 h-9 rounded-full border border-blue-500/50 bg-blue-50/40 backdrop-blur-[0.5px]'
            : 'w-7 h-7 rounded-full border border-slate-400/50 bg-white/20 backdrop-blur-[0.5px]'
        }`}
      >
        {isPill && (
          <span className="select-none whitespace-nowrap animate-in fade-in duration-150">
            {getPillLabel()}
          </span>
        )}
      </div>
    </div>
  );
};
