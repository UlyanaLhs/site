import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  Server, 
  Workflow, 
  Terminal, 
  Palette, 
  Database, 
  Send, 
  CreditCard, 
  Bot, 
  Code2, 
  SlidersHorizontal 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface TechSkill {
  id: string;
  name: string;
  nameRu?: string;
  nameEn?: string;
  category: 'frontend' | 'backend' | 'automation' | 'design';
  categoryLabelRu: string;
  categoryLabelEn: string;
  badge: string;
  badgeEn: string;
  conversionMetricRu: string;
  conversionMetricEn: string;
  headlineRu: string;
  headlineEn: string;
  descriptionRu: string;
  descriptionEn: string;
  businessBenefitRu: string;
  businessBenefitEn: string;
  accentColor: string;
  glowColor: string;
  iconType: 'react' | 'ts' | 'node' | 'telegram' | 'n8n' | 'python' | 'uiux' | 'next' | 'ai' | 'tailwind' | 'postgres' | 'webhooks';
}

export const TECH_SKILLS: TechSkill[] = [
  {
    id: 'react',
    name: 'React 19',
    category: 'frontend',
    categoryLabelRu: 'Frontend & Скорость',
    categoryLabelEn: 'Frontend & Speed',
    badge: 'SPA Engine',
    badgeEn: 'SPA Engine',
    conversionMetricRu: '+45% к вовлеченности • < 1.2с загрузка',
    conversionMetricEn: '+45% engagement • < 1.2s render',
    headlineRu: 'Мгновенный отклик интерфейса без перезагрузки страниц',
    headlineEn: 'Instant client-side responsiveness without page reloads',
    descriptionRu: 'Клиенты не ждут загрузку страниц: динамические конфигураторы, квизы и корзины работают плавно и мгновенно. Нулевые зависания исключают раздражение и удерживают покупателя в воронке до завершения заказа.',
    descriptionEn: 'Shoppers never face blank loading states: dynamic product configurators, quizzes, and checkouts respond instantly. Zero lag keeps the buyer engaged through final checkout without drop-offs.',
    businessBenefitRu: 'Снижение показателя отказов (Bounce Rate) на 35% и рост доходимости до корзины.',
    businessBenefitEn: 'Cuts mobile bounce rate by 35% and lifts funnel completion to checkout.',
    accentColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    iconType: 'react'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabelRu: 'Архитектура & Надежность',
    categoryLabelEn: 'Architecture & Stability',
    badge: 'Zero-Error Code',
    badgeEn: 'Zero-Error Code',
    conversionMetricRu: '0 сбоев на этапе оплаты • 99.9% стабильность',
    conversionMetricEn: '0 checkout runtime crashes • 99.9% uptime',
    headlineRu: 'Исключение багов в корзине, промокодах и расчетах цен',
    headlineEn: 'Total eradication of calculation bugs and broken checkouts',
    descriptionRu: 'Строгая типизация данных на этапе разработки гарантирует, что формы оплат, калькуляторы скидок и шаги чекаута не упадут с ошибкой «undefined» в самый ответственный момент, когда клиент достал карту.',
    descriptionEn: 'Strict compile-time type validation ensures payment gateways, discount calculators, and intake fields never crash with runtime errors right when a high-intent customer is ready to pay.',
    businessBenefitRu: '100% завершенных транзакций без потери оплат из-за технических сбоев скрипта.',
    businessBenefitEn: '100% reliable purchase flows without lost revenue caused by JS runtime errors.',
    accentColor: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    iconType: 'ts'
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'backend',
    categoryLabelRu: 'Backend & Высокая скорость',
    categoryLabelEn: 'Backend & High Throughput',
    badge: 'Async High-Load',
    badgeEn: 'Async High-Load',
    conversionMetricRu: '< 120 мс ответ API • До 10,000 req/sec',
    conversionMetricEn: '< 120ms API latency • Up to 10k req/sec',
    headlineRu: 'Молниеносная обработка заказов и броней в реальном времени',
    headlineEn: 'Real-time order confirmation & instant server webhooks',
    descriptionRu: 'Асинхронная серверная логика обеспечивает моментальную валидацию заявок, генерацию счетов и отправку чеков. Клиент получает подтверждение сделки за доли секунды, не сомневаясь в надежности сервиса.',
    descriptionEn: 'Asynchronous event-driven backend processes checkout webhooks, invoice generation, and status alerts in milliseconds. Customers receive immediate purchase validation without uncertainty.',
    businessBenefitRu: 'Нулевая задержка при оформлении покупки даже в часы пиковых сезонных нагрузок.',
    businessBenefitEn: 'Zero latency during peak promotion campaigns or seasonal traffic spikes.',
    accentColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.2)',
    iconType: 'node'
  },
  {
    id: 'telegram-sdk',
    name: 'Telegram Mini App SDK',
    category: 'frontend',
    categoryLabelRu: 'Мессенджер-коммерция',
    categoryLabelEn: 'Messenger Commerce',
    badge: 'Zero-Friction App',
    badgeEn: 'Zero-Friction App',
    conversionMetricRu: '0% отказов на скачивание • Запуск за 1 сек',
    conversionMetricEn: '0% install drop-off • 1-sec launch',
    headlineRu: 'Полноценный интернет-магазин или сервис прямо в Telegram',
    headlineEn: 'Native in-app e-commerce storefront inside Telegram',
    descriptionRu: 'Клиент открывает каталог прямо из переписки без установки приложений из App Store или перехода в сторонний браузер. Авторизация по Telegram ID в 1 клик, интеграция Apple Pay/Google Pay и push-уведомления.',
    descriptionEn: 'Clients browse and purchase straight from chat without opening App Store links. 1-tap Telegram ID authentication, native payment sheet integrations, and push alerts.',
    businessBenefitRu: 'Рост повторных заказов (LTV) в 3.4 раза за счет постоянного присутствия в кармане клиента.',
    businessBenefitEn: 'Lifts repeat sales frequency (LTV) by 3.4x through persistent chat presence.',
    accentColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    iconType: 'telegram'
  },
  {
    id: 'n8n',
    name: 'n8n & Автоматизация сценариев',
    category: 'automation',
    categoryLabelRu: 'Пайплайны & Интеграции',
    categoryLabelEn: 'Pipelines & Integrations',
    badge: 'Autonomous Ops',
    badgeEn: 'Autonomous Ops',
    conversionMetricRu: 'До 25 ч/нед экономии • 0% ручной рутины',
    conversionMetricEn: 'Up to 25 hrs/wk saved • Zero manual typing',
    headlineRu: 'Связка сайта, CRM, склада, мессенджеров и оплат без человека',
    headlineEn: 'Seamless automated glue connecting CRM, ERP, and Telegram',
    descriptionRu: 'Сквозные сценарии: заявка с сайта мгновенно попадает в CRM, обогащается ИИ-скорингом, формирует счет на оплату, ставит задачу курьеру и отправляет клиенту чек в Telegram без участия менеджера.',
    descriptionEn: 'Autonomous workflows: webform leads pass straight to CRM, get triaged by AI, generate PDF invoices, assign tasks, and text confirmation status without human intervention.',
    businessBenefitRu: 'Ликвидация 65% рутинных задач команды и ускорение первого ответа клиенту до 30 секунд.',
    businessBenefitEn: 'Erases 65% of manual operational drag and accelerates lead turnaround to 30s.',
    accentColor: '#059669',
    glowColor: 'rgba(5, 150, 105, 0.2)',
    iconType: 'n8n'
  },
  {
    id: 'ai-agents',
    name: 'ИИ-Агенты (Claude / OpenAI / Gemini)',
    category: 'automation',
    categoryLabelRu: 'ИИ & Квалификация лидов',
    categoryLabelEn: 'AI & Lead Intelligence',
    badge: 'Cognitive Automation',
    badgeEn: 'Cognitive Automation',
    conversionMetricRu: '24/7 квалификация лидов • 3 сек ответ',
    conversionMetricEn: '24/7 lead qualification • 3s response',
    headlineRu: 'Умный скоринг клиентов и персонализированные диалоги 24/7',
    headlineEn: 'Intelligent lead qualification & context-aware dialogue 24/7',
    descriptionRu: 'Интеллектуальные агенты анализируют запрос клиента, определяют платежеспособность, подбирают подходящие тарифы и готовят персонализированный бриф для созвона с основателем компании.',
    descriptionEn: 'Cognitive agents evaluate lead intent, budget feasibility, recommend tailored service tiers, and draft pre-meeting intelligence briefs for executive discovery calls.',
    businessBenefitRu: 'Менеджеры общаются только с квалифицированными покупателями, готовыми к сделке.',
    businessBenefitEn: 'Sales reps focus exclusively on qualified buyers ready to sign high-ticket contracts.',
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    iconType: 'ai'
  },
  {
    id: 'figma',
    name: 'Figma UX/UI Архитектура',
    category: 'design',
    categoryLabelRu: 'UX/UI & Воронка продаж',
    categoryLabelEn: 'UX/UI & Funnel Psychology',
    badge: 'Conversion Design',
    badgeEn: 'Conversion Design',
    conversionMetricRu: 'x2.4 рост конверсии • 0 шаблонов',
    conversionMetricEn: '2.4x conversion lift • Zero templates',
    headlineRu: 'Глубокая проработка психологии клиента и структуры первого экрана',
    headlineEn: 'High-conversion UX wireframes tuned to buyer psychology',
    descriptionRu: 'Никаких шаблонных блоков из конструкторов: каждый экран проектируется с учетом паттернов движения глаз (F-паттерн), снимает возражения клиента и логически подводит к нажатию целевой кнопки.',
    descriptionEn: 'Zero generic templates: every visual container is positioned based on F-pattern eye scanning, removing conversion friction and driving high-intent appointment bookings.',
    businessBenefitRu: 'Посетителю понятно ваше предложение за первые 3 секунды, что снижает стоимость заявки.',
    businessBenefitEn: 'Visitors comprehend your core value in 3 seconds, cutting paid customer acquisition cost.',
    accentColor: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.2)',
    iconType: 'uiux'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS Modern Engine',
    category: 'frontend',
    categoryLabelRu: 'Стилизация & Адаптив',
    categoryLabelEn: 'Styling & Adaptive Layout',
    badge: 'Pixel-Perfect Fluid',
    badgeEn: 'Pixel-Perfect Fluid',
    conversionMetricRu: '100% адаптив • < 15 КБ бандл стилей',
    conversionMetricEn: '100% fluid responsive • < 15KB CSS bundle',
    headlineRu: 'Идеальное отображение на всех смартфонах и планшетах',
    headlineEn: 'Flawless responsive rendering across all mobile form factors',
    descriptionRu: 'Мобильный трафик составляет до 80% от всех переходов. Утилитарный CSS гарантирует безупречную микро-типографику, отсутствие горизонтального скролла и комфортные размеры кнопок под палец.',
    descriptionEn: 'Mobile traffic represents 80%+ of all inbound buyers. Utility CSS enforces flawless micro-typography, zero horizontal viewport bugs, and touch-target button ergonomics.',
    businessBenefitRu: 'Удержание мобильных пользователей и исключение потерь клиентов со смартфонов.',
    businessBenefitEn: 'Preserves mobile conversion rates and eliminates drop-offs on handheld devices.',
    accentColor: '#0284c7',
    glowColor: 'rgba(2, 132, 199, 0.2)',
    iconType: 'tailwind'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL & Cloud DBs',
    category: 'backend',
    categoryLabelRu: 'Базы данных & Целостность',
    categoryLabelEn: 'Databases & ACID Reliability',
    badge: 'Enterprise ACID',
    badgeEn: 'Enterprise ACID',
    conversionMetricRu: '100% сохранность данных • ACID-гарантии',
    conversionMetricEn: '100% data integrity • ACID guarantees',
    headlineRu: 'Надежное хранение клиентских баз, заказов и аналитики',
    headlineEn: 'Enterprise data security for client records, orders & history',
    descriptionRu: 'Реляционная архитектура гарантирует, что ни одна заявка, чек или контакт клиента не потеряется при сбое сервера. Мгновенные выборки данных для CRM и личных кабинетов покупателей.',
    descriptionEn: 'Relational ACID schema guarantees zero dropped transactions or scrambled customer records. Sub-millisecond queries powering client portals and analytics dashboards.',
    businessBenefitRu: 'Полная безопасность конфиденциальных коммерческих данных вашего бизнеса.',
    businessBenefitEn: 'Rock-solid data isolation and regulatory compliance for your commercial data.',
    accentColor: '#1e40af',
    glowColor: 'rgba(30, 64, 175, 0.2)',
    iconType: 'postgres'
  }
];

interface TechStackSectionProps {
  onDiscussTech?: (techName: string) => void;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ onDiscussTech }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('Все технологии', 'All Technologies'), count: TECH_SKILLS.length },
    { id: 'frontend', label: t('Frontend & UI', 'Frontend & UI'), count: TECH_SKILLS.filter(s => s.category === 'frontend').length },
    { id: 'backend', label: t('Backend & APIs', 'Backend & APIs'), count: TECH_SKILLS.filter(s => s.category === 'backend').length },
    { id: 'automation', label: t('Автоматизация & ИИ', 'Automation & AI'), count: TECH_SKILLS.filter(s => s.category === 'automation').length },
    { id: 'design', label: t('UX/UI Архитектура', 'UX/UI Architecture'), count: TECH_SKILLS.filter(s => s.category === 'design').length },
  ];

  const filteredSkills = activeCategory === 'all'
    ? TECH_SKILLS
    : TECH_SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('Инженерный стек & Инфраструктура', 'Production Engineering Stack')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Технологии, ориентированные на{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  окупаемость и скорость
                </span>
              </>
            ) : (
              <>
                Engineering Stack Tuned for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  Speed, ROI & Reliability
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Каждая технология выбрана не ради хайпа, а для решения конкретных задач бизнеса: скорости загрузки, конверсии и надежности.',
              'Every tool is chosen purely for commercial utility: sub-second responsiveness, zero payment bugs, and automated scale.'
            )}
          </p>
        </div>

        {/* Dual Positioning Architecture: Design + Development Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14">
          
          {/* DESIGN PILLAR */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="double-bezel"
          >
            <div className="inner-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-700 font-bold">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 block">
                        {t('Эстетика & Продуктовое мышление', 'Creative & Product Strategy')}
                      </span>
                      <h3 className="text-xl font-black text-[#071329] tracking-tight">
                        {t('UI/UX & Web Design', 'UI/UX & Web Design')}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                    Figma · Motion · CRO
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                  {t(
                    'Проектирую интерфейсы, которые вызывают доверие с первых секунд. Никаких шаблонных сеток: каждый экран разрабатывается под психологию вашей целевой аудитории.',
                    'Crafting interfaces that command credibility immediately. Zero generic templates: every screen is tailored to conversion psychology and brand distinction.'
                  )}
                </p>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('Design Systems & Токенизация в Figma', 'Design Systems & Figma Tokens')}</strong>
                      <span>{t('Сетки, модульные отступы, масштабируемые типографические шкалы и компоненты.', 'Modular grids, scalable type scales, and reusable production component libraries.')}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('High-Conversion UX & Воронки', 'High-Conversion UX & Funnel Psychology')}</strong>
                      <span>{t('Отработка возражений в структуре блоков, акцентные триггеры и бесшовный путь к заявке.', 'Frictionless objection handling, high-impact CTA hierarchy, and streamlined conversion paths.')}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('Интерактивный Motion & Микровзаимодействия', 'Interactive Motion & Microinteractions')}</strong>
                      <span>{t('Физика пружин (spring physics), 60 FPS переходы и деликатный тактильный отклик интерфейса.', 'Spring physics, hardware-accelerated 60 FPS transitions, and tactile button feedback.')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs text-blue-900">
                <strong>{t('Ценность для бизнеса: ', 'Commercial Value: ')}</strong>
                <span>{t('Сайт выглядит дорого и презентабельно, повышая доверие состоятельных клиентов и оправдывая высокий чек.', 'Interfaces look authoritative and expensive, building instant trust and supporting premium pricing.')}</span>
              </div>
            </div>
          </motion.div>

          {/* DEVELOPMENT PILLAR */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="double-bezel"
          >
            <div className="inner-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 font-bold">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700 block">
                        {t('Инженерия & Чистый код', 'Engineering & Clean Architecture')}
                      </span>
                      <h3 className="text-xl font-black text-[#071329] tracking-tight">
                        {t('Full-Stack & Automations', 'Full-Stack & Automations')}
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-800 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    React · Node · n8n
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed my-4">
                  {t(
                    'Разрабатываю надежную техническую архитектуру: быстрая реактивная верстка без лишних плагинов, асинхронный серверный код и автоматизация рутины.',
                    'Engineering resilient architecture: lightning-fast reactive frontends, lightweight asynchronous backends, and autonomous process automations.'
                  )}
                </p>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('Реактивный стек: React 19, TypeScript, Next.js', 'Reactive Frontend: React 19, TS, Next.js')}</strong>
                      <span>{t('Загрузка 0.4–0.8с, 95–100 баллов в Google PageSpeed, чистый модульный код.', '0.4–0.8s load times, 95–100 Google PageSpeed scores, zero runtime crashes.')}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('Backend, API & Telegram Mini Apps', 'Backend, APIs & Telegram Mini Apps')}</strong>
                      <span>{t('Node.js, Express, PostgreSQL, вебхуки, авторизация по Telegram ID и онлайн-оплата.', 'Node.js, Express, PostgreSQL, webhooks, 1-tap Telegram ID auth & native checkout.')}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 font-bold block">{t('Автономные сценарии n8n & AI-боты', 'Autonomous n8n Pipelines & AI Bots')}</strong>
                      <span>{t('Связка сайта с CRM, мессенджерами и таблицами. Квалификация заявок 24/7 без менеджеров.', 'Automated workflows connecting CRM, email & chat. 24/7 lead qualification without staff.')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-xs text-emerald-950">
                <strong>{t('Ценность для бизнеса: ', 'Commercial Value: ')}</strong>
                <span>{t('Система работает стабильно без сбоев, экономит до 25 часов рутины в неделю и полностью передается в вашу собственность.', 'Reliable uptime with zero bugs, reclaims up to 25 hours per week, with 100% full IP ownership transfer.')}</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="button"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-95 ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 px-1.5 py-0.2 rounded-full text-[10px] ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tech Cards in Double-Bezel Hardware Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSkills.map((skill, idx) => {
            const headline = language === 'en' ? skill.headlineEn : skill.headlineRu;
            const description = language === 'en' ? skill.descriptionEn : skill.descriptionRu;
            const benefit = language === 'en' ? skill.businessBenefitEn : skill.businessBenefitRu;
            const metric = language === 'en' ? skill.conversionMetricEn : skill.conversionMetricRu;
            const badge = language === 'en' ? skill.badgeEn : skill.badge;

            return (
              <motion.div 
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="double-bezel flex flex-col justify-between group"
              >
                <div className="inner-card p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  
                  <div>
                    {/* Top Row: Name, Category, Badge */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <h3 className="text-lg font-black text-[#071329] group-hover:text-blue-700 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {badge}
                        </span>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
                        <Code2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Verified Metric Pill */}
                    <div className="my-3 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-800">
                      {metric}
                    </div>

                    {/* Headline */}
                    <h4 className="text-sm font-black text-slate-900 leading-snug mb-2">
                      {headline}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {description}
                    </p>

                    {/* Bottom Line for Business Callout */}
                    <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs">
                      <span className="font-bold text-blue-800 block mb-0.5">
                        {t('Итог для бизнеса:', 'Business bottom line:')}
                      </span>
                      <p className="text-slate-700 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={() => onDiscussTech && onDiscussTech(skill.name)}
                      data-cursor="button"
                      className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs border border-slate-200/80 hover:border-blue-300 transition-all cursor-pointer group/btn active:scale-95"
                    >
                      <span>{t(`Проект на ${skill.name}`, `Build with ${skill.name}`)}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
