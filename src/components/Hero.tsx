import React, { useRef } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Send,
  Zap,
  Sparkles,
  Terminal,
  Code2,
  Workflow
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { HeroMotionBackground } from './HeroMotionBackground';
import { MagneticButton } from './motion/MagneticButton';
import { AnimatedCounter } from './motion/AnimatedCounter';
import { InteractiveArchitecturePipeline } from './InteractiveArchitecturePipeline';

export const NEXT_START_TEXT_RU = 'Ближайший старт: через 4 дня · 2 слота на этот месяц';
export const NEXT_START_TEXT_EN = 'Next project start: in 4 days · 2 slots open';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
  onDiscussAutomation?: (summaryText: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenContact, 
  onExploreCases, 
  onDiscussAutomation 
}) => {
  const { t, language, dict } = useLanguage();

  const heroSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ['start start', 'end start'],
  });

  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const heroScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.97]);
  const heroY = useTransform(scrollYProgress, [0, 0.75], [0, 30]);

  return (
    <section 
      ref={heroSectionRef}
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 min-h-[92dvh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#fafcfe] via-white to-[#f4f7fb]"
    >
      {/* Background visual nodes & data stream */}
      <HeroMotionBackground />

      <motion.div 
        style={prefersReducedMotion ? {} : { opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full will-change-transform"
      >
        
        {/* Asymmetrical 12-Column Studio Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
          
          {/* Left Column (7 cols): Editorial Typography, Clear Value & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Identity & Availability Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs text-slate-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-extrabold text-blue-700">
                  {dict.hero.authorPill}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600 font-semibold">
                  Full-Stack Dev + Web Designer
                </span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[11px] sm:text-xs font-semibold text-emerald-800 shadow-sm">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>{dict.hero.availabilityPill}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black text-[#071329] tracking-[-0.035em] leading-[1.12]">
              {language === 'ru' ? (
                <>
                  Цифровые продукты, сайты и Telegram-боты{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                    с гарантией окупаемости по договору
                  </span>
                </>
              ) : (
                <>
                  Engineering High-Converting Web Platforms & Telegram Apps{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                    with Contractually Locked Pricing
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle with Clear Full-Stack Positioning */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {language === 'ru' ? (
                <>
                  Проектирую авторский UI/UX в Figma, собираю чистый реактивный код на React 19 / TypeScript и подключаю автоматизацию в n8n. Без посредников, без раздутых смет и с персональной ответственностью за каждый релиз.
                </>
              ) : (
                <>
                  Bridging bespoke Figma UI/UX architecture, high-performance React 19 / TypeScript engineering, and autonomous n8n workflows. Zero agency overhead, zero handoff drag, and 100% direct personal accountability.
                </>
              )}
            </p>

            {/* Key Deliverable Badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 font-medium pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('Запуск от 7 рабочих дней', 'Delivery from 7 business days')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('Фиксированная цена в договоре', 'Fixed contractual price')}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('30 дней гарантии', '30-day warranty')}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <MagneticButton strength={0.22} radius={80}>
                <button
                  id="hero-calculate-btn"
                  onClick={onOpenContact}
                  className="group inline-flex items-center justify-between sm:justify-center gap-3 pl-6 pr-2.5 py-3 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-slate-900/15 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <span>{t('Обсудить проект с Ульяной', 'Start Project with Ulyana')}</span>
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
                  </span>
                </button>
              </MagneticButton>

              <MagneticButton strength={0.16} radius={65}>
                <button
                  id="hero-view-cases-btn"
                  onClick={onExploreCases}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300/80 hover:border-blue-400 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer active:scale-[0.98]"
                >
                  <span>{t('Смотреть 10 кейсов', 'Explore 10 Verified Cases')}</span>
                </button>
              </MagneticButton>

              <MagneticButton strength={0.16} radius={65}>
                <a
                  href="https://t.me/u_ulyana_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm border border-emerald-200 transition-all shadow-xs active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Telegram</span>
                </a>
              </MagneticButton>
            </div>

          </div>

          {/* Right Column (5 cols): Interactive Technical Architecture Visual Engine */}
          <div className="lg:col-span-5 w-full">
            <InteractiveArchitecturePipeline />
          </div>

        </div>

        {/* 4 Staggered Verified Numbers with Animated Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-4 border-t border-slate-200/80">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center hover:border-blue-300 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-blue-700 tracking-tight mb-1">
              <AnimatedCounter value={dict.hero.metric1Value} />
            </div>
            <div className="text-xs text-slate-500 font-semibold leading-tight">
              {dict.hero.metric1Label}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center hover:border-blue-300 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-1">
              <AnimatedCounter value={dict.hero.metric2Value} />
            </div>
            <div className="text-xs text-slate-500 font-semibold leading-tight">
              {dict.hero.metric2Label}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center hover:border-emerald-300 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight mb-1">
              <AnimatedCounter value={dict.hero.metric3Value} />
            </div>
            <div className="text-xs text-slate-500 font-semibold leading-tight">
              {dict.hero.metric3Label}
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-center hover:border-blue-300 transition-colors">
            <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight mb-1">
              <AnimatedCounter value={dict.hero.metric4Value} />
            </div>
            <div className="text-xs text-slate-500 font-semibold leading-tight">
              {dict.hero.metric4Label}
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
