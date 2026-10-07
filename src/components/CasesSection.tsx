import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Layers, 
  Search, 
  Filter, 
  TrendingUp,
  Globe2,
  ChevronDown,
  ChevronUp,
  Eye,
  ArrowRight,
  Bot
} from 'lucide-react';
import { CASE_STUDIES } from '../data/cases';
import { CaseStudy, CaseCategory } from '../types';
import { CaseCard } from './CaseCard';
import { FeaturedCaseSpotlight } from './FeaturedCaseSpotlight';
import { CaseModal } from './CaseModal';
import { BotShowcaseGallery } from './BotShowcaseGallery';
import { AutomationCaseStudies } from './AutomationCaseStudies';
import { useLanguage } from '../context/LanguageContext';

export type PortfolioViewType = 'websites' | 'bots' | 'all';

interface CasesSectionProps {
  onStartProjectWithCase: (caseItem: CaseStudy) => void;
  onSelectBotForOrder?: (botName: string) => void;
  onDiscussAutomation?: (summaryText?: string) => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ 
  onStartProjectWithCase,
  onSelectBotForOrder,
  onDiscussAutomation
}) => {
  const { language, t } = useLanguage();
  const [activeView, setActiveView] = useState<PortfolioViewType>('websites');
  const [selectedCategory, setSelectedCategory] = useState<CaseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const categories: { id: CaseCategory; label: string; count: number }[] = [
    { id: 'all', label: t('Все сферы', 'All Categories'), count: CASE_STUDIES.length },
    { 
      id: 'web-design', 
      label: t('Веб-дизайн & Лендинги', 'Web Design & Landing Pages'), 
      count: CASE_STUDIES.filter(c => c.category === 'web-design').length 
    },
    { 
      id: 'development', 
      label: t('Разработка & Платформы', 'Full-Stack Apps & Platforms'), 
      count: CASE_STUDIES.filter(c => c.category === 'development').length 
    },
    { 
      id: 'automation-bots', 
      label: t('Автоматизации & Боты', 'Automations & Bots'), 
      count: CASE_STUDIES.filter(c => c.category === 'automation-bots').length 
    },
  ];

  const filteredCases = useMemo(() => {
    return CASE_STUDIES.filter((c) => {
      const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        c.title.toLowerCase().includes(query) ||
        c.subtitle.toLowerCase().includes(query) ||
        c.tags.some(tag => tag.toLowerCase().includes(query)) ||
        c.country.toLowerCase().includes(query) ||
        c.client.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // When collapsed and user isn't doing an active text search, limit to top 3 flagship works
  const displayedCases = useMemo(() => {
    if (isCollapsed && !searchQuery.trim()) {
      return filteredCases.slice(0, 3);
    }
    return filteredCases;
  }, [filteredCases, isCollapsed, searchQuery]);

  const remainingCount = Math.max(0, filteredCases.length - displayedCases.length);

  const handleToggleCollapse = (collapsedState: boolean) => {
    setIsCollapsed(collapsedState);
    if (collapsedState) {
      const el = document.getElementById('cases');
      if (el) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="cases" className="py-20 md:py-32 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            {activeView === 'bots' ? (
              <>
                <Bot className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('9 Живых Telegram-ботов с продажами', '9 Live Telegram Bots with Sales')}</span>
              </>
            ) : activeView === 'all' ? (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{t(`${CASE_STUDIES.length + 9} Реализованных проектов в портфолио`, `${CASE_STUDIES.length + 9} Production Projects in Portfolio`)}</span>
              </>
            ) : (
              <>
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                <span>
                  {isCollapsed && !searchQuery.trim()
                    ? t(`Топ-3 проекта (${CASE_STUDIES.length} в портфолио)`, `Top 3 Flagship Projects (${CASE_STUDIES.length} in portfolio)`)
                    : t(`${CASE_STUDIES.length} реализованных проектов с живыми ссылками`, `${CASE_STUDIES.length} Production Deployments with Live Links`)}
                </span>
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Портфолио: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">цифры и результаты</span>
              </>
            ) : (
              <>
                Case Studies: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">Verified ROI Numbers</span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Каждый проект решает конкретную бизнес-задачу: от онлайн-бронирования до автоматического скоринга клиентов.',
              'Each deployment targets verified financial metrics: from real-time customer bookings to automated lead qualification.'
            )}
          </p>
        </div>

        {/* View Switcher: Websites vs Bots vs All */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="p-1 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-1">
            <button
              onClick={() => setActiveView('websites')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'websites'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t('Сайты & Платформы (10)', 'Websites & Apps (10)')}
            </button>

            <button
              onClick={() => setActiveView('bots')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'bots'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t('Telegram-боты (9)', 'Telegram Bots (9)')}
            </button>

            <button
              onClick={() => setActiveView('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {t('Все проекты (19)', 'All Works (19)')}
            </button>
          </div>
        </div>

        {/* Category Filters and Search Bar (When Websites or All is active) */}
        {(activeView === 'websites' || activeView === 'all') && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:bg-slate-50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                    selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Поиск по тегу, нише...', 'Search by tag or niche...')}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}

        {/* 1. Website Case Studies Grid */}
        {(activeView === 'websites' || activeView === 'all') && (
          <div>
            {/* Flagship Case Study Spotlight */}
            {displayedCases.length > 0 && (
              <div className="mb-8">
                <FeaturedCaseSpotlight
                  caseItem={displayedCases[0]}
                  onSelect={(item) => setActiveModalCase(item)}
                />
              </div>
            )}

            {/* Remaining Production Cases in Curated Editorial Bento Grid */}
            {displayedCases.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {displayedCases.slice(1).map((caseItem, idx) => {
                  const isWide = idx === 2 || idx === 5;
                  return (
                    <CaseCard
                      key={caseItem.id}
                      caseItem={caseItem}
                      index={idx + 1}
                      layoutVariant={isWide ? 'wide' : 'default'}
                      onSelect={(item) => setActiveModalCase(item)}
                    />
                  );
                })}
              </div>
            )}

            {/* Expand / Collapse Control */}
            {!searchQuery.trim() && filteredCases.length > 3 && (
              <div className="mt-12 text-center">
                {isCollapsed ? (
                  <button
                    onClick={() => handleToggleCollapse(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>{t(`Показать все ${filteredCases.length} проектов (+${remainingCount})`, `Show all ${filteredCases.length} projects (+${remainingCount})`)}</span>
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleToggleCollapse(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-300 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <span>{t('Свернуть до топ-3', 'Collapse to top 3')}</span>
                    <ChevronUp className="w-4 h-4 text-blue-600" />
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* 2. Telegram Bot Gallery */}
        {(activeView === 'bots' || activeView === 'all') && (
          <div className={activeView === 'all' ? 'mt-20 pt-16 border-t border-slate-200' : ''}>
            <BotShowcaseGallery 
              onSelectBotForOrder={(botName) => {
                if (onSelectBotForOrder) onSelectBotForOrder(botName);
              }}
              hideTopSeparator={activeView === 'bots'}
            />
          </div>
        )}

        {/* Modal for Detailed Case Inspection */}
        <CaseModal
          caseItem={activeModalCase}
          onClose={() => setActiveModalCase(null)}
          onStartProjectWithCase={(c) => {
            setActiveModalCase(null);
            onStartProjectWithCase(c);
          }}
        />

      </div>
    </section>
  );
};
