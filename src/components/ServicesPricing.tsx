import React from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Shield, 
  Bot, 
  Layout, 
  Layers, 
  Coins,
  FileCheck, 
  CreditCard, 
  Clock, 
  Lock, 
  Workflow, 
  Search, 
  LifeBuoy,
  Code2 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  CURRENCIES,
  CurrencyCode, 
  formatPackagePrice, 
  formatFixedPrice, 
  formatPriceRange 
} from '../data/currency';

export const PRICES_USD = {
  website: 500,
  miniapp: 1000,
  ecosystem: 2000,
  automation_audit: 500,
  automation_build: 1500,
  automation_care_monthly: 300,
  custom_ai: 4000
};

export const AUDIT_CREDIT_DAYS = 30;

export const BASE_PRICING_USD = {
  landing: PRICES_USD.website,
  automation: PRICES_USD.automation_build,
  telegram: PRICES_USD.miniapp,
  ecosystem: PRICES_USD.ecosystem
};

interface ServicesPricingProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesPricing: React.FC<ServicesPricingProps> = ({ onSelectService }) => {
  const { language, currency, setCurrency, t, dict } = useLanguage();

  const packages = [
    {
      id: 'landing',
      title: t('Конверсионный сайт / Лендинг', 'High-Converting Website / Landing Page'),
      tagline: t(
        'Для привлечения целевых клиентов и презентации премиум-услуг',
        'Built to attract high-intent leads, showcase luxury offerings & lift conversion'
      ),
      idealFor: t(
        'Экспертам, сфере услуг, B2B-компаниям, ресторанам и студиям',
        'High-ticket services, B2B firms, boutique clinics, studios & restaurants'
      ),
      timeline: t('7–10 рабочих дней', '7–10 business days'),
      basePriceLabel: t('от 500$', 'from $500'),
      priceDisplay: formatPackagePrice(PRICES_USD.website, currency, language),
      icon: Layout,
      popular: false,
      features: language === 'ru' ? [
        'Авторский UX/UI дизайн в Figma (с нуля под вашу нишу)',
        'Адаптивная верстка под все типы экранов и смартфоны',
        'Быстрая загрузка (Google PageSpeed 90+)',
        'Интерактивные формы заявки, квизы или калькуляторы',
        'Подключение домена, SSL, метрик и аналитики',
        'Интеграция заявок прямо в ваш Telegram-чат'
      ] : [
        'Bespoke Figma UI/UX architecture (zero generic templates)',
        'Pixel-perfect responsive build across modern mobile & desktop devices',
        'Ultra-fast load speeds (Google PageSpeed 90+ guaranteed)',
        'Interactive lead forms, dynamic quizzes & ROI calculators',
        'Domain setup, SSL hardening, GA4 analytics & event tracking',
        'Real-time inbound lead routing straight to your private Telegram'
      ],
      resultPill: t('Рост конверсии в 2+ раза', '2x+ Inbound Conversion Lift')
    },
    {
      id: 'telegram-solution',
      title: t('Telegram Mini App + Бот-ассистент', 'Telegram Mini App & Autonomous Bot'),
      tagline: t(
        'Автоматизация приема заявок и удержание постоянных клиентов (LTV)',
        'Streamline customer intake, in-app purchases & repeat customer retention'
      ),
      idealFor: t(
        'Ресторанам, доставкам, сервисам бронирования, клубам и курсам',
        'Hospitality, e-commerce, appointment bookings, salons & VIP clubs'
      ),
      timeline: t('10–14 рабочих дней', '10–14 business days'),
      basePriceLabel: t('от 1 000$', 'from $1,000'),
      priceDisplay: formatPackagePrice(PRICES_USD.miniapp, currency, language),
      icon: Bot,
      popular: true,
      features: language === 'ru' ? [
        'Полноценный веб-интерфейс внутри Telegram (Mini App)',
        'Каталог товаров/услуг с фильтрами, корзиной и оплатой',
        'Прием оплат картами (интеграция платежных шлюзов)',
        'Умный бот-ассистент с логикой диалогов и сценариями',
        'Личный кабинет клиента, история заказов и бонусы',
        'Админ-панель для управления меню, ценами и заказами'
      ] : [
        'Full web application running natively inside Telegram (Mini App)',
        'Interactive store catalog, live filters, instant cart & fast checkout',
        'Integrated multi-currency payment gateways (Stripe / Telegram Pay)',
        'Intelligent assistant bot with automated dialogue and FAQ logic',
        'Client profile with order tracking, loyalty balance & notifications',
        'Owner dashboard to manage items, pricing, inventory and bookings'
      ],
      resultPill: t('Автономная работа 24/7', 'Autonomous 24/7 Operations')
    },
    {
      id: 'ecosystem',
      title: t('Полная экосистема: Сайт + Mini App + CRM', 'Unified Growth Ecosystem: Web + App + CRM'),
      tagline: t(
        'Максимальный охват: холодный трафик из поиска + удержание в Telegram',
        'Total omnichannel dominance: capture inbound traffic + retain in messenger'
      ),
      idealFor: t(
        'Действующему бизнесу с регулярным потоком клиентов и амбициями роста',
        'Scaling businesses seeking an integrated digital infrastructure'
      ),
      timeline: t('14–21 рабочий день', '14–21 business days'),
      basePriceLabel: t('от 2 000$', 'from $2,000'),
      priceDisplay: formatPackagePrice(PRICES_USD.ecosystem, currency, language),
      icon: Layers,
      popular: false,
      features: language === 'ru' ? [
        'Многостраничный сайт или презентационный лендинг компании',
        'Синхронизированное Telegram Mini App для постоянных клиентов',
        'Единая база клиентов и сквозная аналитика трафика',
        'Интеграция с вашей CRM (Битрикс24, amoCRM или Google Sheets)',
        'Автоматические рассылки и триггерные уведомления клиентам',
        'Приоритетная поддержка и сопровождение 30 дней после релиза'
      ] : [
        'Flagship corporate web platform + high-conversion landing pages',
        'Synchronized Telegram Mini App ecosystem for loyal clients',
        'Unified customer database & end-to-end multi-channel analytics',
        'Seamless bidirectional CRM synchronization (AmoCRM, HubSpot, Sheets)',
        'Automated targeted push broadcasts & re-engagement workflows',
        'Priority SLA engineering support & optimization for 30 days post-launch'
      ],
      resultPill: t('Полная связка под ключ', 'Full Turnkey System')
    },
    {
      id: 'automation-audit',
      title: t('Аудит процессов и карта автоматизации', 'Process Audit & Automation Roadmap'),
      tagline: t(
        '1-дневный аудит: выявляем рутину, проектируем целевую архитектуру',
        '1-day deep dive: identify bottlenecks & blueprint target architecture'
      ),
      idealFor: t(
        'Компаниям, где ручные задачи отнимают более 15 часов команды в неделю',
        'Companies where manual copy-paste drains 15+ team hours per week'
      ),
      timeline: t('1 рабочий день', '1 business day'),
      basePriceLabel: t('500$', '$500'),
      priceDisplay: formatFixedPrice(PRICES_USD.automation_audit, currency, language),
      icon: Search,
      popular: false,
      features: language === 'ru' ? [
        'Глубокий анализ существующих воронок, баз и чатов',
        'Пошаговая карта сценариев автоматизации в n8n / Make',
        'Расчет окупаемости и сэкономленных часов команды',
        'Спецификация интеграций (CRM, Webhooks, API, Telegram)',
        '100% зачет стоимости аудита при заказе внедрения системы'
      ] : [
        'Deep-dive audit of your current lead intake, spreadsheets & chats',
        'Step-by-step visual automation pipeline map in n8n / Make',
        'ROI projection & hours-saved calculations for leadership',
        'Technical integration specification (CRM, Webhooks, APIs, Telegram)',
        '100% credited toward build cost if you proceed within 30 days'
      ],
      resultPill: t('Сумма засчитывается в разработку', '100% Credited to Build')
    },
    {
      id: 'automation-build',
      title: t('Внедрение сценариев и Telegram-пайплайна', 'Automation Workflows & Telegram Pipeline'),
      tagline: t(
        'Разработка автоматических пайплайнов на n8n и связка CRM с мессенджером',
        'End-to-end n8n pipeline engineering connecting CRM, billing & Telegram'
      ),
      idealFor: t(
        'Бизнесу, которому нужна бесшовная синхронизация лидов, счетов и сделок',
        'Businesses needing zero-lag lead triage, instant waybills & notifications'
      ),
      timeline: t('5–10 рабочих дней', '5–10 business days'),
      basePriceLabel: t('от 1 500$', 'from $1,500'),
      priceDisplay: formatPackagePrice(PRICES_USD.automation_build, currency, language),
      icon: Workflow,
      popular: false,
      features: language === 'ru' ? [
        'Развертывание n8n на защищенном сервере',
        'Сквозные сценарии: лид → квалификация → CRM → Telegram-чат',
        'Автоматическая генерация счетов, КП и PDF-документов',
        'Подключение AI-ассистентов для ответов на частые вопросы',
        'Полное тестирование и стресс-тесты под нагрузкой'
      ] : [
        'Dedicated secure n8n instance setup & configuration',
        'End-to-end pipelines: lead → AI triage → CRM update → Telegram dispatch',
        'Automated PDF invoice generation, payment confirmation & receipts',
        'AI assistant integration for context-aware customer replies',
        'Comprehensive load testing, edge-case handling & error alerts'
      ],
      resultPill: t('-65% ручной работы', '-65% Manual Drag')
    },
    {
      id: 'automation-retainer',
      title: t('Ежемесячное сопровождение автоматизаций', 'Monthly Automation Care & Retainer'),
      tagline: t(
        'Контроль работы сценариев, доработки и расширение логики',
        '24/7 pipeline health monitoring, proactive fixes & continuous iteration'
      ),
      idealFor: t(
        'Командам, которым нужен выделенный инженер автоматизации без найма в штат',
        'Teams wanting a dedicated automation engineer on call without payroll overhead'
      ),
      timeline: t('Ежемесячно', 'Monthly'),
      basePriceLabel: t('300$ / мес', '$300/mo'),
      priceDisplay: `${formatFixedPrice(PRICES_USD.automation_care_monthly, currency, language)} / ${t('мес', 'mo')}`,
      icon: LifeBuoy,
      popular: false,
      features: language === 'ru' ? [
        'Мониторинг вебхуков и очередей 24/7',
        'Оперативное исправление сбоев API внешних сервисов',
        'До 5 новых сценариев и микро-доработок каждый месяц',
        'Оптимизация расходов на AI API и серверную инфраструктуру'
      ] : [
        '24/7 webhook & execution monitoring with instant downtime alerts',
        'Proactive adaptation to third-party API breaking changes',
        'Up to 5 new workflow scenarios & optimizations monthly',
        'Cloud infrastructure & AI API token cost optimization'
      ],
      resultPill: t('99.9% аптайм сценариев', '99.9% Uptime SLA')
    },
    {
      id: 'custom-ai',
      title: t('Кастомные AI-агенты и инфраструктура', 'Bespoke AI Agents & Custom Software'),
      tagline: t(
        'Bespoke AI-агенты, скоринг лидов и глубокая интеграция с базами данных',
        'Autonomous AI agents, vector RAG search & bespoke internal business tools'
      ),
      idealFor: t(
        'B2B-компаниям, SaaS-продуктам и бизнесу со сложной логикой продаж',
        'B2B firms, SaaS founders & enterprise workflows requiring deep engineering'
      ),
      timeline: t('14–25 рабочих дней', '14–25 business days'),
      basePriceLabel: t('от 4 000$', 'from $4,000'),
      priceDisplay: formatPackagePrice(PRICES_USD.custom_ai, currency, language),
      icon: Sparkles,
      popular: false,
      features: language === 'ru' ? [
        'Разработка автономных AI-агентов под ваши внутренние регламенты',
        'RAG-архитектура: агент обучается на вашей базе знаний и документах',
        'Векторные базы данных и безопасная изоляция корпоративных данных',
        'Интеграция с корпоративными порталами, Slack, Telegram и CRM',
        'Полная передача исходного кода и инструкций по администрированию'
      ] : [
        'Autonomous AI agent architecture tailored to private business SOPs',
        'RAG knowledge retrieval: agents learn from internal docs & databases',
        'Vector DB integration (Pinecone/pgvector) with strict tenant privacy',
        'Multi-channel interface: Slack, Telegram, web portals & REST APIs',
        'Full IP ownership, repository handoff, documentation & team training'
      ],
      resultPill: t('Инженерная глубина', 'Engineering Grade')
    }
  ];

  const currencyOptions: CurrencyCode[] = ['USD', 'EUR', 'RUB', 'BYN'];

  return (
    <section id="services" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Прозрачные пакеты и стоимость', 'Transparent Fixed Packages')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Прозрачные тарифы с{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  фиксированной ценой по договору
                </span>
              </>
            ) : (
              <>
                Fixed Turnkey Pricing{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  Guaranteed in Contract
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Никаких скрытых платежей, непредвиденных смет или почасовых сюрпризов. Оплата разбивается 50/50 по ключевым этапам.',
              'Zero hidden fees, surprise hourly invoices, or scope creep. Payment structured 50/50 tied directly to deliverable milestones.'
            )}
          </p>

          {/* Currency Toggle Switcher in Pricing Header */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
            <span className="text-xs font-bold text-slate-400 px-3 uppercase tracking-wider hidden sm:inline">
              {t('Валюта:', 'Currency:')}
            </span>
            {currencyOptions.map((code) => {
              const c = CURRENCIES[code];
              const isActive = currency === code;
              return (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  data-cursor="button"
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{code}</span>
                  <span className="ml-1 opacity-70">({c.symbol})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-Stack Execution Lifecycle Banner: Design → Development → Launch */}
        <div className="max-w-5xl mx-auto mb-16 p-1.5 rounded-3xl bg-slate-100/80 border border-slate-200/90 shadow-sm">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80">
            <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 font-mono">
                  {t('Сквозной процесс реализации: Design → Code → Automation', 'End-to-End Delivery: Design → Code → Automation')}
                </span>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                100% In-House
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Step 1: Design */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-700">
                  <span>STAGE 01</span>
                  <Layout className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">
                  {t('Авторский UI/UX Дизайн', 'Bespoke UI/UX Design')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    'Figma-токены, типографика, адаптивные сетки и психология конверсии. Никаких шаблонных блоков.',
                    'Figma tokens, responsive grids, typography hierarchy & conversion psychology without generic templates.'
                  )}
                </p>
                <div className="text-[11px] font-mono text-emerald-700 pt-1 font-bold">
                  → Figma Dev Ready
                </div>
              </div>

              {/* Step 2: Code */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-700">
                  <span>STAGE 02</span>
                  <Code2 className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">
                  {t('Реактивная разработка', 'Reactive Frontend & API')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    'React 19, TypeScript, Node.js API и Telegram Mini App SDK. Мгновенная загрузка < 0.8с и 0 сбоев.',
                    'React 19, TypeScript, Node.js APIs & Telegram SDK. Blazing < 0.8s load times and 0 runtime crashes.'
                  )}
                </p>
                <div className="text-[11px] font-mono text-emerald-700 pt-1 font-bold">
                  → Zero-Error Code
                </div>
              </div>

              {/* Step 3: Launch */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-blue-700">
                  <span>STAGE 03</span>
                  <Zap className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">
                  {t('Автоматизация & SLA', 'Automation & 30-Day SLA')}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t(
                    'Интеграция n8n, CRM-вебхуки, Telegram-уведомления и 30 дней бесплатной гарантийной поддержки.',
                    'n8n orchestration, CRM webhooks, Telegram alerts & 30 days of proactive SLA warranty.'
                  )}
                </p>
                <div className="text-[11px] font-mono text-emerald-700 pt-1 font-bold">
                  → 30-Day Warranty SLA
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 Pricing Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className={`double-bezel flex flex-col justify-between group transition-all duration-300 ${
                  pkg.popular ? 'border-blue-400 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10' : ''
                }`}
              >
                <div className="inner-card p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Top Row: Icon + Result / Popular Badge */}
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold ${
                        pkg.popular 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                          : 'bg-blue-50 text-blue-700 border border-blue-200/70'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {pkg.popular ? (
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white shadow-sm">
                          {t('⭐ Популярный выбор', '⭐ Most Popular')}
                        </span>
                      ) : (
                        <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                          {pkg.resultPill}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#071329] tracking-tight leading-snug mt-4 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {pkg.tagline}
                    </p>

                    {/* Price Display */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        {pkg.priceDisplay}
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mt-2 font-medium">
                        <span>{t('Срок разработки:', 'Timeline:')} <strong className="text-slate-800">{pkg.timeline}</strong></span>
                      </div>
                    </div>

                    {/* Ideal For callout */}
                    <div className="text-xs text-slate-600 mb-6 pb-4 border-b border-slate-100">
                      <strong className="text-slate-900 block mb-1">{t('Идеально подходит для:', 'Ideal fit for:')}</strong>
                      <span>{pkg.idealFor}</span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                        {t('Что входит под ключ:', 'Deliverables Included:')}
                      </span>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Button */}
                  <div className="pt-6 border-t border-slate-100">
                    <button
                      onClick={() => onSelectService(pkg.title)}
                      data-cursor="button"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer active:scale-[0.98] group/btn ${
                        pkg.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                          : 'bg-slate-900 hover:bg-blue-700 text-white'
                      }`}
                    >
                      <span>{t('Выбрать этот пакет', 'Select This Tier')}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Quote Callout */}
        <div className="mt-16 double-bezel max-w-4xl mx-auto">
          <div className="inner-card p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-50/50 via-white to-emerald-50/50">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#071329] tracking-tight mb-2">
                {dict.services.customQuoteTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {dict.services.customQuoteText}
              </p>
            </div>
            <button
              onClick={() => onSelectService(t('Индивидуальный проект', 'Custom Project'))}
              data-cursor="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md flex-shrink-0 active:scale-[0.98]"
            >
              <span>{dict.services.customQuoteButton}</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Terms & Guarantees 4-Column Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">{dict.services.termsContract.title}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{dict.services.termsContract.desc}</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">{dict.services.termsPayment.title}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{dict.services.termsPayment.desc}</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">{dict.services.termsOwnership.title}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{dict.services.termsOwnership.desc}</div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">{dict.services.termsWarranty.title}</div>
              <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{dict.services.termsWarranty.desc}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
