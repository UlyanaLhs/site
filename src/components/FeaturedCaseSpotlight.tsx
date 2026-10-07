import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Globe2, 
  Zap, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { CaseStudy } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './motion/AnimatedCounter';

interface FeaturedCaseSpotlightProps {
  caseItem: CaseStudy;
  onSelect: (caseItem: CaseStudy) => void;
}

export const FeaturedCaseSpotlight: React.FC<FeaturedCaseSpotlightProps> = ({ 
  caseItem, 
  onSelect 
}) => {
  const { language, t } = useLanguage();

  const title = (language === 'ru' && caseItem.titleRu) 
    ? caseItem.titleRu 
    : (caseItem.titleEn && language === 'en' ? caseItem.titleEn : caseItem.title);

  const challengeText = (language === 'en' && caseItem.challengeEn) 
    ? caseItem.challengeEn 
    : caseItem.challenge;

  const solutionText = (language === 'en' && caseItem.solutionEn) 
    ? caseItem.solutionEn 
    : caseItem.solution;

  const resultText = (language === 'en' && caseItem.businessResultsEn?.[0]) 
    ? caseItem.businessResultsEn[0] 
    : caseItem.businessResults[0];

  const primaryMetric = caseItem.metrics[0];
  const secondaryMetric = caseItem.metrics[1];
  const tertiaryMetric = caseItem.metrics[2];

  return (
    <motion.div
      data-cursor="project"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="double-bezel group cursor-pointer hover:shadow-2xl transition-all duration-300"
      onClick={() => onSelect(caseItem)}
    >
      <div className="inner-card p-6 sm:p-10">
        
        {/* Top Flagship Banner Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-xs font-black text-blue-700 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('ФЛАГМАНСКИЙ КЕЙС #01', 'FLAGSHIP CASE STUDY #01')}</span>
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {caseItem.country}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {language === 'ru' && caseItem.badgeRu
                ? caseItem.badgeRu
                : language === 'en' && caseItem.badgeEn
                ? caseItem.badgeEn
                : t('Действующий проект', 'Live Production System')}
            </span>
          </div>
        </div>

        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Storytelling & Architecture (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071329] tracking-tight leading-tight group-hover:text-blue-700 transition-colors">
                {title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mt-2 mb-6">
                {caseItem.subtitle}
              </p>

              {/* Challenge vs Solution Dual Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-1">
                    {t('Бизнес-задача:', 'Problem / Friction:')}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {challengeText}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-1">
                    {t('Решение архитектуры:', 'Engineered Solution:')}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {solutionText || resultText}
                  </p>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="text-xs font-bold text-slate-400 mr-1">
                  {t('Стек:', 'Stack:')}
                </span>
                {caseItem.techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => onSelect(caseItem)}
                data-cursor="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-slate-900/10 hover:shadow-blue-600/20 transition-all cursor-pointer active:scale-95"
              >
                <span>{t('Смотреть полный разбор кейса', 'Explore In-Depth Case Study')}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <a
                href={caseItem.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200 transition-all cursor-pointer active:scale-95"
              >
                <span>{t('Открыть живой сайт', 'Open Live Deployment')}</span>
                <ExternalLink className="w-4 h-4 text-emerald-600" />
              </a>
            </div>

          </div>

          {/* Right Column: Studio Product Frame & 3 Live Metrics (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${caseItem.coverGradient} border border-white/20 text-white relative overflow-hidden shadow-xl flex flex-col justify-between h-full min-h-[300px]`}>
              
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Digital Browser Top Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="px-3 py-0.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200">
                  {caseItem.url.replace('https://', '')}
                </div>
              </div>

              {/* 3 Metric Spotlight Counters */}
              <div className="relative z-10 space-y-3 my-auto">
                {primaryMetric && (
                  <div className="p-3.5 rounded-2xl bg-black/35 backdrop-blur-md border border-white/15">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-300">
                      <AnimatedCounter 
                        value={language === 'en' && primaryMetric.highlightEn ? primaryMetric.highlightEn : primaryMetric.highlight} 
                      />
                    </div>
                    <div className="text-xs font-semibold text-slate-200 mt-0.5">
                      {language === 'en' && primaryMetric.labelEn ? primaryMetric.labelEn : primaryMetric.label}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {secondaryMetric && (
                    <div className="p-3 rounded-2xl bg-black/35 backdrop-blur-md border border-white/15">
                      <div className="text-xl sm:text-2xl font-black text-white">
                        <AnimatedCounter 
                          value={language === 'en' && secondaryMetric.highlightEn ? secondaryMetric.highlightEn : secondaryMetric.highlight} 
                        />
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 truncate mt-0.5">
                        {language === 'en' && secondaryMetric.labelEn ? secondaryMetric.labelEn : secondaryMetric.label}
                      </div>
                    </div>
                  )}

                  {tertiaryMetric && (
                    <div className="p-3 rounded-2xl bg-black/35 backdrop-blur-md border border-white/15">
                      <div className="text-xl sm:text-2xl font-black text-sky-300">
                        <AnimatedCounter 
                          value={language === 'en' && tertiaryMetric.highlightEn ? tertiaryMetric.highlightEn : tertiaryMetric.highlight} 
                        />
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 truncate mt-0.5">
                        {language === 'en' && tertiaryMetric.labelEn ? tertiaryMetric.labelEn : tertiaryMetric.label}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Quote / Feedback Snippet */}
              {caseItem.testimonial && (
                <div className="relative z-10 pt-4 mt-6 border-t border-white/15 text-xs text-slate-200 italic">
                  &ldquo;{language === 'en' && caseItem.testimonial.textEn ? caseItem.testimonial.textEn : caseItem.testimonial.text}&rdquo;
                  <span className="block font-bold text-white not-italic mt-1 text-[11px]">
                    — {caseItem.testimonial.author} ({caseItem.testimonial.role})
                  </span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
