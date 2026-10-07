import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const HeroMotionBackground: React.FC = () => {
  const { t } = useLanguage();
  const [isPointerFine, setIsPointerFine] = useState(false);

  const { scrollY } = useScroll();

  // Subtle scroll parallax offsets for different depth layers
  const yLayer1 = useTransform(scrollY, [0, 800], [0, 60]);
  const yLayer2 = useTransform(scrollY, [0, 800], [0, 100]);
  const yLayer3 = useTransform(scrollY, [0, 800], [0, 40]);

  // Motion values for smooth cursor parallax without React re-renders
  const mouseXMotion = useMotionValue(0);
  const mouseYMotion = useMotionValue(0);

  const smoothMouseX = useSpring(mouseXMotion, { stiffness: 80, damping: 18 });
  const smoothMouseY = useSpring(mouseYMotion, { stiffness: 80, damping: 18 });

  // Displacements per badge layer
  const badge1X = useTransform(smoothMouseX, [-1, 1], [14, -14]);
  const badge2X = useTransform(smoothMouseX, [-1, 1], [-16, 16]);
  const badge3X = useTransform(smoothMouseX, [-1, 1], [12, -12]);
  const badge4X = useTransform(smoothMouseX, [-1, 1], [-14, 14]);

  useEffect(() => {
    const isFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || prefersReducedMotion) return;

    setIsPointerFine(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to range [-1, 1]
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseXMotion.set(nx);
      mouseYMotion.set(ny);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXMotion, mouseYMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      
      {/* 1. Subtle, Calm Ambient Glows in Signature Blue & Mint */}
      <motion.div 
        style={{ y: yLayer3 }}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-[140px]" 
      />
      <motion.div 
        style={{ y: yLayer1 }}
        className="absolute top-24 right-1/4 w-[450px] h-[450px] bg-emerald-500/[0.04] rounded-full blur-[140px]" 
      />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.03] rounded-full blur-[120px]" />

      {/* 2. Floating Hardware-like Badges with Parallax & Cursor Reaction */}
      <div className="hidden lg:block">
        
        {/* Floating Item 1: Code & Architecture (Top Left) */}
        <motion.div 
          style={{ 
            y: yLayer1,
            x: isPointerFine ? badge1X : 0,
          }}
          className="absolute top-36 left-8 xl:left-16 p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md flex items-center gap-3 text-xs text-slate-700 transition-shadow duration-300 hover:shadow-lg pointer-events-auto"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1.5">
              <span>TypeScript • React 19</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              const app = new ModernStack();
            </div>
          </div>
        </motion.div>

        {/* Floating Item 2: Telegram Mini Apps & Bots (Top Right) */}
        <motion.div 
          style={{ 
            y: yLayer2,
            x: isPointerFine ? badge2X : 0,
          }}
          className="absolute top-32 right-8 xl:right-16 p-3 rounded-2xl bg-white/95 border border-emerald-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md flex items-center gap-3 text-xs text-slate-700 transition-shadow duration-300 hover:shadow-lg pointer-events-auto"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
              <span>Telegram Mini App SDK</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                24/7
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              webhook: 0.12s latency
            </div>
          </div>
        </motion.div>

        {/* Floating Item 3: Conversion & Business Metrics (Bottom Left) */}
        <motion.div 
          style={{ 
            y: yLayer2,
            x: isPointerFine ? badge3X : 0,
          }}
          className="absolute bottom-24 left-6 xl:left-14 p-3 rounded-2xl bg-white/95 border border-blue-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md flex items-center gap-3 text-xs text-slate-700 transition-shadow duration-300 hover:shadow-lg pointer-events-auto"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200/80 flex items-center justify-center text-emerald-600">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-black text-emerald-700">
              {t('Конверсия в заявку: +48%', 'Funnel Conversion: +48%')}
            </div>
            <div className="text-[10px] text-slate-500">
              {t('Сайты, которые окупаются', 'Revenue-generating UX')}
            </div>
          </div>
        </motion.div>

        {/* Floating Item 4: Legal & IP Ownership (Bottom Right) */}
        <motion.div 
          style={{ 
            y: yLayer1,
            x: isPointerFine ? badge4X : 0,
          }}
          className="absolute bottom-28 right-6 xl:right-14 p-3 rounded-2xl bg-white/95 border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.06)] backdrop-blur-md flex items-center gap-3 text-xs text-slate-700 transition-shadow duration-300 hover:shadow-lg pointer-events-auto"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
              <span>{t('100% Передача прав', '100% IP Transfer')}</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            <div className="text-[10px] text-slate-500">
              {t('Договор + 30 дней SLA', 'Contract + 30-Day SLA')}
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  );
};
