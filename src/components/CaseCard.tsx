import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './motion/AnimatedCounter';

interface CaseCardProps {
  caseItem: CaseStudy;
  onSelect: (caseItem: CaseStudy) => void;
  index?: number;
  layoutVariant?: 'default' | 'wide';
}

export const CaseCard: React.FC<CaseCardProps> = ({ 
  caseItem, 
  onSelect, 
  index = 0,
  layoutVariant = 'default'
}) => {
  const { language, t } = useLanguage();
  const primaryMetric = caseItem.metrics[0];
  const secondaryMetric = caseItem.metrics[1];
  const tertiaryMetric = caseItem.metrics[2];
  const challengeText = (language === 'en' && caseItem.challengeEn) ? caseItem.challengeEn : caseItem.challenge;
  const resultText = (language === 'en' && caseItem.businessResultsEn?.[0]) ? caseItem.businessResultsEn[0] : caseItem.businessResults[0];
  const cardTitle = (language === 'ru' && caseItem.titleRu) ? caseItem.titleRu : (caseItem.titleEn && language === 'en' ? caseItem.titleEn : caseItem.title);

  const formattedIndex = String(index + 1).padStart(2, '0');

  if (layoutVariant === 'wide') {
    return (
      <motion.div 
        data-cursor="project"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px', amount: 0.08 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-1 md:col-span-2 double-bezel flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        onClick={() => onSelect(caseItem)}
      >
        <div className="inner-card p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Cover Half (5 cols on lg) */}
            <div className={`lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br ${caseItem.coverGradient} relative overflow-hidden text-white shadow-inner flex flex-col justify-between min-h-[220px]`}>
              <div className="flex items-center justify-between gap-2 relative z-10">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md">
                  {caseItem.country}
                </span>
                <span className="text-[11px] font-mono text-white/80 font-bold">
                  EXP #{formattedIndex}
                </span>
              </div>

              <div className="relative z-10 my-4">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {cardTitle}
                </h3>
                <p className="text-xs text-white/80 font-medium mt-1 line-clamp-2">
                  {caseItem.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 relative z-10 pt-3 border-t border-white/20">
                <div className="bg-black/30 p-2.5 rounded-xl backdrop-blur-md">
                  <div className="text-base sm:text-lg font-black text-emerald-300">
                    <AnimatedCounter 
                      value={language === 'en' && primaryMetric.highlightEn ? primaryMetric.highlightEn : primaryMetric.highlight} 
                    />
                  </div>
                  <div className="text-[10px] text-white/80 truncate">
                    {language === 'en' && primaryMetric.labelEn ? primaryMetric.labelEn : primaryMetric.label}
                  </div>
                </div>

                <div className="bg-black/30 p-2.5 rounded-xl backdrop-blur-md">
                  <div className="text-base sm:text-lg font-black text-white">
                    <AnimatedCounter 
                      value={language === 'en' && secondaryMetric.highlightEn ? secondaryMetric.highlightEn : secondaryMetric.highlight} 
                    />
                  </div>
                  <div className="text-[10px] text-white/80 truncate">
                    {language === 'en' && secondaryMetric.labelEn ? secondaryMetric.labelEn : secondaryMetric.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Details Half (7 cols on lg) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {caseItem.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-bold text-rose-700 block mb-0.5">{t('Задача:', 'Challenge:')}</span>
                    <span className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{challengeText}</span>
                  </div>
                  
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/70">
                    <span className="text-xs font-bold text-blue-800 block mb-0.5">{t('Результат:', 'Result:')}</span>
                    <span className="text-xs text-slate-700 line-clamp-3 leading-relaxed">{resultText}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={() => onSelect(caseItem)}
                  data-cursor="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>{t('Исследовать кейс', 'Inspect Case Study')}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <a
                  href={caseItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200/80 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>{t('Live сайт', 'Live Site')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      data-cursor="project"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px', amount: 0.08 }}
      transition={{ 
        duration: 0.65, 
        delay: (index % 2) * 0.12, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="double-bezel flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
      onClick={() => onSelect(caseItem)}
    >
      <div className="inner-card flex flex-col justify-between h-full overflow-hidden transition-all duration-300">
        
        {/* Top Showcase Banner with Cinematic Reveal & Editorial Index */}
        <motion.div 
          initial={{ clipPath: 'inset(6% 0 6% 0 round 16px)', scale: 1.05 }}
          whileInView={{ clipPath: 'inset(0% 0 0% 0 round 16px)', scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={`p-6 sm:p-7 bg-gradient-to-br ${caseItem.coverGradient} relative overflow-hidden text-white will-change-transform`}
        >
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Large Editorial Index Watermark with Motion Stagger */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.12, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -top-3 right-4 text-6xl sm:text-7xl font-black text-white select-none pointer-events-none font-mono"
          >
            {formattedIndex}
          </motion.div>

          <div className="relative z-10">
            {/* Meta Row: Country + Status Badge */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20">
                {caseItem.country}
              </span>
              <span className="text-xs font-bold text-emerald-200 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-400/40">
                {language === 'ru' && caseItem.badgeRu
                  ? caseItem.badgeRu
                  : language === 'en' && caseItem.badgeEn
                  ? caseItem.badgeEn
                  : t('Рабочий проект', 'Live Project')}
              </span>
            </div>

            {/* Title with hover motion micro-shift */}
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:translate-x-1 transition-transform duration-300">
              {cardTitle}
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 mt-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              {caseItem.subtitle}
            </p>

            {/* Key Metric Spotlight Dual Cards with Animated Counter */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 pt-4 border-t border-white/15">
              <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/15 group-hover:bg-black/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-emerald-300">
                  <AnimatedCounter 
                    value={language === 'en' && primaryMetric.highlightEn ? primaryMetric.highlightEn : primaryMetric.highlight} 
                  />
                </div>
                <div className="text-[11px] font-medium text-slate-200 truncate mt-0.5">
                  {language === 'en' && primaryMetric.labelEn ? primaryMetric.labelEn : primaryMetric.label}
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-md p-3 rounded-xl border border-white/15 group-hover:bg-black/40 transition-colors">
                <div className="text-xl sm:text-2xl font-black text-white">
                  <AnimatedCounter 
                    value={language === 'en' && secondaryMetric.highlightEn ? secondaryMetric.highlightEn : secondaryMetric.highlight} 
                  />
                </div>
                <div className="text-[11px] font-medium text-slate-200 truncate mt-0.5">
                  {language === 'en' && secondaryMetric.labelEn ? secondaryMetric.labelEn : secondaryMetric.label}
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Content & Business Case Summary */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {caseItem.tags.slice(0, 4).map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:bg-blue-50/60 group-hover:text-blue-800 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Challenge & Solution Snippets */}
            <div className="space-y-2.5 text-xs sm:text-sm mb-6">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-rose-700">{t('Задача: ', 'Challenge: ')}</span>
                <span className="text-slate-600 line-clamp-2">{challengeText}</span>
              </div>
              
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200/70">
                <span className="font-bold text-blue-800">{t('Результат: ', 'Result: ')}</span>
                <span className="text-slate-700 line-clamp-2">{resultText}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onSelect(caseItem)}
              data-cursor="button"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-sm active:scale-[0.98]"
            >
              <span>{t('Подробный кейс', 'View Case')}</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <a
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200/80 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
              title={t('Открыть живой сайт', 'Open live site')}
            >
              <span>{t('Live сайт', 'Live Site')}</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
            </a>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
