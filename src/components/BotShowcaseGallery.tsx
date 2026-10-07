import React, { useState, useMemo } from 'react';
import { 
  Send, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  X, 
  Eye, 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Zap,
  Bot,
  Layers
} from 'lucide-react';
import { TELEGRAM_BOT_CASES, TelegramBotCase } from '../data/botsData';
import { useLanguage } from '../context/LanguageContext';

export interface BotShowcaseGalleryProps {
  onSelectBotForOrder: (botName: string) => void;
  initialCollapsed?: boolean;
  hideTopSeparator?: boolean;
}

export const BotShowcaseGallery: React.FC<BotShowcaseGalleryProps> = ({ 
  onSelectBotForOrder,
  initialCollapsed = true,
  hideTopSeparator = false
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBotModal, setSelectedBotModal] = useState<TelegramBotCase | null>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(initialCollapsed);

  const categories = [
    { id: 'all', label: t('Все 9 ботов', 'All 9 Bots'), count: TELEGRAM_BOT_CASES.length },
    { id: 'food', label: t('Еда & Рестораны', 'Food & Delivery'), count: TELEGRAM_BOT_CASES.filter(b => b.category === 'food').length },
    { id: 'luxury', label: t('Люкс & E-commerce', 'Luxury & Commerce'), count: TELEGRAM_BOT_CASES.filter(b => b.category === 'luxury').length },
    { id: 'services', label: t('Услуги & Мастера', 'Services & Booking'), count: TELEGRAM_BOT_CASES.filter(b => b.category === 'services').length },
    { id: 'travel-dating', label: t('Travel & Знакомства', 'Travel & Match'), count: TELEGRAM_BOT_CASES.filter(b => b.category === 'travel-dating').length },
  ];

  const filteredBots = useMemo(() => {
    return selectedCategory === 'all' 
      ? TELEGRAM_BOT_CASES 
      : TELEGRAM_BOT_CASES.filter(b => b.category === selectedCategory);
  }, [selectedCategory]);

  // When collapsed, show top 3 flagship bots
  const displayedBots = useMemo(() => {
    if (isCollapsed) {
      return filteredBots.slice(0, 3);
    }
    return filteredBots;
  }, [filteredBots, isCollapsed]);

  const remainingBotsCount = Math.max(0, filteredBots.length - displayedBots.length);

  const handleToggleCollapse = (collapsedState: boolean) => {
    setIsCollapsed(collapsedState);
    if (collapsedState) {
      const el = document.getElementById('telegram-bots-showcase');
      if (el) {
        const offset = 80;
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

  const handleOpenBotModal = (bot: TelegramBotCase) => {
    setSelectedBotModal(bot);
  };

  const handleOrderThisBot = (botName: string) => {
    setSelectedBotModal(null);
    onSelectBotForOrder(botName);
  };

  return (
    <div 
      id="telegram-bots-showcase" 
      className={hideTopSeparator ? 'pt-2' : 'mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-slate-200/80'}
    >
      
      {/* Section Subheader */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
          <Bot className="w-3.5 h-3.5 text-emerald-600" />
          <span>
            {isCollapsed
              ? t('Топ-3 Telegram-бота (9 решений в каталоге)', 'Top 3 Telegram Bots (9 in catalog)')
              : t('9 Реализованных ботов в портфолио', '9 Production Bots in Portfolio')}
          </span>
        </div>
        <h3 className="text-2xl min-[375px]:text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          {language === 'ru' ? (
            <>
              9 Живых Telegram-ботов с{' '}
              <span className="text-gradient-blue">
                автоматизацией и продажами
              </span>
            </>
          ) : (
            <>
              9 Live Telegram Bots with{' '}
              <span className="text-gradient-blue">
                Sales & Workflow Automation
              </span>
            </>
          )}
        </h3>
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          {t(
            'Реальные чат-боты для разных сфер: от доставки еды и онлайн-записи мастеров до закрытых байер-клубов с чеками в миллионы рублей.',
            'Production chat bots for various niches: food ordering, master scheduling, CRM integrations, and luxury concierge desks.'
          )}
        </p>
      </div>

      {/* Toolbar: Category Filters + Top-3 Toggle */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 pb-5 border-b border-slate-200/80">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Segmented Control for Bots (Top 3 vs All 9) */}
        <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-xs w-full sm:w-auto justify-center">
          <button
            onClick={() => handleToggleCollapse(true)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isCollapsed 
                ? 'bg-white text-slate-900 shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title={t('Показать только 3 избранных бота', 'Show 3 flagship bots')}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('Топ-3 бота', 'Top 3 Bots')}</span>
          </button>

          <button
            onClick={() => handleToggleCollapse(false)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              !isCollapsed 
                ? 'bg-white text-slate-900 shadow-xs' 
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title={t('Показать все 9 ботов', 'Show all 9 bots')}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Все боты (9)', 'All Bots (9)')}</span>
          </button>
        </div>

      </div>

      {/* Quick info strip when in compact mode */}
      {isCollapsed && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 mb-8 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>
              {t(
                'Компактный режим: 3 флагманских Telegram-решения для экономии вашего времени.',
                'Compact view: 3 flagship Telegram implementations for fast review.'
              )}
            </span>
          </div>
          {remainingBotsCount > 0 && (
            <button
              onClick={() => handleToggleCollapse(false)}
              className="text-blue-600 hover:text-blue-800 font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>{t(`Показать остальные ${remainingBotsCount} ботов`, `Show remaining ${remainingBotsCount} bots`)}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}

      {/* Bots Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedBots.map((bot) => (
          <div
            key={bot.id}
            data-cursor="project"
            className="double-bezel p-2 rounded-3xl bg-slate-100/70 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="inner-card rounded-2xl bg-white border border-slate-200/80 overflow-hidden flex flex-col justify-between flex-1">
              {/* Visual Header / Phone Mockup Preview */}
              <div className="relative p-5 pb-0 bg-slate-50 border-b border-slate-100 overflow-hidden">
                
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold text-emerald-800 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80">
                    {bot.badge}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {bot.categoryLabel}
                  </span>
                </div>

                {/* Bot Phone Mockup Container (Realistic Dark Bezel for Chat Screen) */}
                <div className="w-full max-w-[280px] mx-auto rounded-t-2xl border-t-2 border-x-2 border-slate-800 bg-[#070e1e] p-2.5 shadow-xl relative">
                  
                  {/* Phone Speaker Notch */}
                  <div className="w-20 h-3 bg-black/90 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-900/60" />
                  </div>

                  {/* Telegram Header */}
                  <div className="flex items-center gap-2 pb-2 mb-2 border-b border-blue-900/40 text-left">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center text-[10px] font-bold text-slate-950">
                      {bot.mockup.botAvatarText}
                    </div>
                    <div className="truncate flex-1">
                      <div className="text-xs font-bold text-white truncate">
                        {bot.mockup.botTitle}
                      </div>
                      <div className="text-[9px] text-emerald-400 font-mono">
                        bot • online
                      </div>
                    </div>
                  </div>

                  {/* Image Banner / Real Screenshot Preview with Fallback */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-2 bg-[#050b18] border border-blue-900/50">
                    <img
                      src={bot.imageFileName}
                      alt={bot.name}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== bot.fallbackImage) {
                          target.src = bot.fallbackImage;
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e] via-transparent to-transparent opacity-80" />
                    
                    {/* Subtle hover prompt */}
                    <button
                      onClick={() => handleOpenBotModal(bot)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 text-xs font-bold shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Изучить сценарий</span>
                      </span>
                    </button>
                  </div>

                  {/* Telegram Simulated Buttons */}
                  <div className="grid grid-cols-2 gap-1 text-[10px]">
                    {bot.mockup.quickButtons.slice(0, 4).map((btn, i) => (
                      <div
                        key={i}
                        className="p-1.5 rounded-lg bg-[#0e1d3f] border border-blue-800/40 text-slate-200 text-center truncate font-medium"
                      >
                        {btn}
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Content & Descriptions Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                
                <div className="space-y-4">
                  
                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {bot.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {bot.subtitle}
                    </p>
                  </div>

                  {/* 4 Required Structural Pillars */}
                  <div className="space-y-2.5 pt-2 text-xs">
                    
                    {/* 1. Для кого сделан */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                      <div className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Для кого сделан:</span>
                      </div>
                      <p className="leading-relaxed text-slate-700 text-[11px] sm:text-xs">
                        {bot.targetAudience}
                      </p>
                    </div>

                    {/* 2. Что хотел клиент */}
                    <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/70">
                      <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span>Что хотел клиент (исходная боль):</span>
                      </div>
                      <p className="leading-relaxed text-slate-700 text-[11px] sm:text-xs">
                        {bot.clientGoal}
                      </p>
                    </div>

                    {/* 3. Какая функция */}
                    <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-200/70">
                      <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>Какая у него функция:</span>
                      </div>
                      <p className="leading-relaxed text-slate-700 text-[11px] sm:text-xs">
                        {bot.coreFunction}
                      </p>
                    </div>

                    {/* 4. Какое решение я предложила */}
                    <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/70">
                      <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>Какое решение я предложила:</span>
                      </div>
                      <p className="leading-relaxed text-slate-800 text-[11px] sm:text-xs">
                        {bot.mySolution}
                      </p>
                    </div>

                  </div>

                  {/* Business Impact Metric */}
                  <div className="pt-2">
                    <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      Бизнес-результат:
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-emerald-900 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{bot.businessImpact}</span>
                    </div>
                  </div>

                </div>

                {/* Action Buttons */}
                <div className="pt-5 border-t border-slate-100 mt-5 flex flex-col min-[375px]:flex-row gap-2.5">
                  <button
                    onClick={() => handleOpenBotModal(bot)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-600" />
                    <span>Открыть сценарий</span>
                  </button>
                  <button
                    onClick={() => handleOrderThisBot(bot.name)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <span>Хочу такого</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Control Footers for Bot Showcase */}
      {isCollapsed && remainingBotsCount > 0 && (
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-800 mb-3">
              <Bot className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t(`Еще ${remainingBotsCount} готовых решений в портфолио`, `Plus ${remainingBotsCount} more production bots in catalog`)}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">
              {t(
                `Хотите увидеть все 9 Telegram-ботов с живой автоматизацией?`,
                `Want to browse all 9 Telegram bots with active automation?`
              )}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              {t(
                `В полном списке: боты для салонов красоты, автосервисов, закрытых VIP-клубов, ресторанов и Travel-ассистентов с интеграцией платежей и CRM.`,
                `Full catalog includes bots for salons, auto-service scheduling, private luxury clubs, food delivery, and travel matching with payment & CRM sync.`
              )}
            </p>
            <button
              onClick={() => handleToggleCollapse(false)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
            >
              <span>{t(`Развернуть все 9 Telegram-ботов (+${remainingBotsCount} решений)`, `Expand all 9 Telegram bots (+${remainingBotsCount} solutions)`)}</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      )}

      {/* Collapse button when fully expanded */}
      {!isCollapsed && filteredBots.length > 3 && (
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <button
            onClick={() => handleToggleCollapse(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-bold text-xs sm:text-sm border border-slate-200 transition-all cursor-pointer shadow-sm"
          >
            <ChevronUp className="w-4 h-4 text-emerald-600" />
            <span>{t('Свернуть до 3 избранных ботов', 'Collapse to 3 flagship bots')}</span>
          </button>
        </div>
      )}

      {/* Detailed Modal for Bot Case & Simulation */}
      {selectedBotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBotModal(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-800 mb-2">
                <span>{selectedBotModal.badge}</span>
                <span>•</span>
                <span>{selectedBotModal.categoryLabel}</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900">
                {selectedBotModal.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                {selectedBotModal.subtitle}
              </p>
            </div>

            {/* Two-column layout in Modal: Simulated Phone on Left, Complete Analysis on Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Phone Simulation Column (5 cols) */}
              <div className="md:col-span-5 bg-[#070e1e] border-2 border-slate-800 rounded-3xl p-3.5 shadow-2xl space-y-3">
                
                {/* Phone Header */}
                <div className="flex items-center justify-between pb-2 border-b border-blue-900/50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 flex items-center justify-center font-bold text-slate-950 text-xs">
                      {selectedBotModal.mockup.botAvatarText}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">
                        {selectedBotModal.mockup.botTitle}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-mono">
                        {selectedBotModal.mockup.botUsername}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950 text-emerald-300 border border-blue-800">
                    В сети
                  </span>
                </div>

                {/* Screenshot Visual Asset */}
                <div className="rounded-xl overflow-hidden border border-blue-900/40 bg-black/40">
                  <img
                    src={selectedBotModal.imageFileName}
                    alt={selectedBotModal.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== selectedBotModal.fallbackImage) {
                        target.src = selectedBotModal.fallbackImage;
                      }
                    }}
                    className="w-full object-cover max-h-56"
                  />
                </div>

                {/* Simulated Chat Messages */}
                <div className="space-y-2 text-xs py-2 max-h-60 overflow-y-auto pr-1">
                  {selectedBotModal.mockup.messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-emerald-500 text-slate-950 font-semibold rounded-tr-none'
                            : 'bg-[#112148] text-slate-100 rounded-tl-none border border-blue-800/40'
                        }`}
                      >
                        {msg.photo && (
                          <img
                            src={msg.photo}
                            alt=""
                            className="rounded-lg mb-2 max-h-32 w-full object-cover"
                          />
                        )}
                        {msg.caption && <p className="leading-snug">{msg.caption}</p>}
                        {msg.text && <p className="whitespace-pre-line leading-snug">{msg.text}</p>}
                        {msg.buttons && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {msg.buttons.map((b, bi) => (
                              <div
                                key={bi}
                                className="px-2 py-1 rounded-md bg-[#0a1530] text-emerald-300 text-[10px] font-bold border border-blue-800"
                              >
                                {b}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Phone Keyboard Buttons */}
                <div className="pt-2 border-t border-blue-900/40 grid grid-cols-2 gap-1.5 text-[11px]">
                  {selectedBotModal.mockup.quickButtons.map((qb, qbi) => (
                    <div
                      key={qbi}
                      className="p-2 rounded-xl bg-[#0c1836] border border-blue-800/50 text-center text-slate-200 font-medium truncate"
                    >
                      {qb}
                    </div>
                  ))}
                </div>

              </div>

              {/* Case Study Details Column (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                
                {/* 1. Target Audience */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">
                    👤 Для кого был сделан:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedBotModal.targetAudience}
                  </p>
                </div>

                {/* 2. Client Pain */}
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70">
                  <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1.5">
                    🎯 Что хотел клиент (проблема):
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedBotModal.clientGoal}
                  </p>
                </div>

                {/* 3. Core Function */}
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/70">
                  <div className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1.5">
                    ⚡ Какая у него функция:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedBotModal.coreFunction}
                  </p>
                </div>

                {/* 4. My Solution */}
                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1.5">
                    💡 Какое решение я предложила:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {selectedBotModal.mySolution}
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Ключевые возможности решения:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedBotModal.features.map((f, fi) => (
                      <div
                        key={fi}
                        className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA In Modal */}
                <div className="pt-3">
                  <button
                    onClick={() => handleOrderThisBot(selectedBotModal.name)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Хочу разработать аналогичного бота для своего бизнеса</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
