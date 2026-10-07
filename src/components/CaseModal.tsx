import React from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Quote, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { CaseStudy } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './motion/AnimatedCounter';

interface CaseModalProps {
  caseItem: CaseStudy | null;
  onClose: () => void;
  onStartProjectWithCase: (caseItem: CaseStudy) => void;
}

export const CaseModal: React.FC<CaseModalProps> = ({ 
  caseItem, 
  onClose, 
  onStartProjectWithCase 
}) => {
  const { language, t } = useLanguage();
  if (!caseItem) return null;

  const modalTitle = (language === 'ru' && caseItem.titleRu) ? caseItem.titleRu : (caseItem.titleEn && language === 'en' ? caseItem.titleEn : caseItem.title);
  const challengeText = (language === 'en' && caseItem.challengeEn) ? caseItem.challengeEn : caseItem.challenge;
  const solutionText = (language === 'en' && caseItem.solutionEn) ? caseItem.solutionEn : caseItem.solution;
  const resultsList = (language === 'en' && caseItem.businessResultsEn) ? caseItem.businessResultsEn : caseItem.businessResults;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient and close button */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${caseItem.coverGradient} border-b border-white/20 relative text-white`}>
          <button
            onClick={onClose}
            data-cursor="button"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors border border-white/20 cursor-pointer active:scale-95"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3 pr-10 sm:pr-0">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/15 text-white border border-white/20 backdrop-blur-sm">
              {caseItem.country}
            </span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
              {caseItem.badgeRu && language === 'ru' 
                ? caseItem.badgeRu 
                : caseItem.badgeEn && language === 'en' 
                ? caseItem.badgeEn 
                : `${t('Клиент:', 'Client:')} ${caseItem.client} (${caseItem.clientRole})`}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
            {modalTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-100 mt-1 max-w-2xl leading-relaxed opacity-95">
            {caseItem.subtitle}
          </p>

          {/* Quick External Link */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={caseItem.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-sm active:scale-95"
            >
              <span>{t('Открыть работающий проект', 'Open Live Project')}</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </a>
            <span className="text-xs text-white/80 font-mono hidden sm:inline">
              {caseItem.url.replace('https://', '')}
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          
          {/* Numbers & Metrics Grid */}
          <div>
            <h3 className="text-xs font-bold tracking-wider text-blue-700 uppercase mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>{t('Конкретные результаты внедрения в цифрах', 'Concrete Implementation Metrics')}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {caseItem.metrics.map((m, idx) => {
                const metricHighlight = language === 'en' && m.highlightEn ? m.highlightEn : m.highlight;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-emerald-700 mb-1">
                      <AnimatedCounter value={metricHighlight} />
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                      {language === 'en' && m.labelEn ? m.labelEn : m.label}
                    </div>
                    <div className="text-xs text-slate-600 leading-normal">
                      {language === 'en' && m.descriptionEn ? m.descriptionEn : m.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Challenge vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/70">
              <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-2">
                {t('Узкое место / Проблема бизнеса', 'Business Bottleneck & Challenge')}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {challengeText}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/70">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-2">
                {t('Инженерное решение Ульяны', 'Engineered Solution')}
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {solutionText}
              </p>
            </div>
          </div>

          {/* Business Results Checklist */}
          {resultsList && resultsList.length > 0 && (
            <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-3">
                {t('Зафиксированные результаты', 'Verified Business Outcomes')}
              </span>
              <div className="space-y-2">
                {resultsList.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              {t('Использованный стек технологий', 'Tech Stack & Infrastructure')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {caseItem.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          {caseItem.testimonial && (
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <Quote className="w-8 h-8 text-blue-200 absolute top-4 right-4" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-3 relative z-10">
                &ldquo;{language === 'en' && caseItem.testimonial.textEn ? caseItem.testimonial.textEn : caseItem.testimonial.text}&rdquo;
              </p>
              <div className="text-xs font-bold text-slate-900">
                {caseItem.testimonial.author}
                <span className="text-slate-400 font-normal ml-1">
                  • {language === 'en' && caseItem.testimonial.roleEn ? caseItem.testimonial.roleEn : caseItem.testimonial.role}
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Sticky Action Bar */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            {t('Гарантия 30 дней • Фиксированная цена в договоре', '30-Day SLA Warranty • Fixed Contract Price')}
          </div>
          <button
            onClick={() => onStartProjectWithCase(caseItem)}
            data-cursor="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 group/btn"
          >
            <span>{t('Обсудить аналогичный проект с Ульяной', 'Discuss a Similar Solution with Ulyana')}</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

      </motion.div>
    </div>
  );
};
