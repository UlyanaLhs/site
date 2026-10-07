import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Star, 
  Quote, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  TrendingUp, 
  Boxes, 
  Receipt, 
  MessageSquare, 
  GraduationCap, 
  ShieldCheck, 
  Cpu, 
  SlidersHorizontal 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface AutomationReviewItem {
  id: string;
  category: 'crm' | 'logistics' | 'finance' | 'support' | 'edtech';
  categoryLabelRu: string;
  categoryLabelEn: string;
  author: string;
  authorEn: string;
  roleRu: string;
  roleEn: string;
  companyRu: string;
  companyEn: string;
  locationRu: string;
  locationEn: string;
  avatar: string;
  rating: number;
  highlightMetricRu: string;
  highlightMetricEn: string;
  headlineRu: string;
  headlineEn: string;
  quoteRu: string;
  quoteEn: string;
  resultsRu: string[];
  resultsEn: string[];
  techStack: string[];
  workflowNameRu: string;
  workflowNameEn: string;
}

const AUTOMATION_REVIEWS: AutomationReviewItem[] = [
  {
    id: 'rev-autologist',
    category: 'logistics',
    categoryLabelRu: 'Склад & Логистика',
    categoryLabelEn: 'Warehouse & Fulfillment',
    author: 'Дмитрий Соколов',
    authorEn: 'Dmitry Sokolov',
    roleRu: 'Операционный директор',
    roleEn: 'Chief Operating Officer',
    companyRu: 'TechLine Retail & AutoLogist',
    companyEn: 'TechLine Retail & AutoLogist',
    locationRu: 'Варшава / Берлин',
    locationEn: 'Warsaw / Berlin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetricRu: '18 ч/нед экономии • 0% ошибок',
    highlightMetricEn: '18 hrs/wk saved • 0% errors',
    headlineRu: '«Ноль пересортов и 30 секунд на генерацию накладной вместо ночных смен»',
    headlineEn: '"Zero dispatch errors and 30-sec waybills instead of sleepless night shifts"',
    quoteRu: 'Раньше в черную пятницу и сезонные распродажи операторы сидели до ночи со слезами на глазах: вручную переносили заказы в курьерские службы и сверяли остатки. Сквозной n8n-пайплайн полностью автоматизировал склад: система сама формирует ТТН по API, списывает остатки и отправляет клиенту трекинг за 30 секунд. За полгода — ни единой потери заказа!',
    quoteEn: 'During peak sales our warehouse operators were swamped with manual entry and delivery mix-ups. Now the n8n pipeline issues waybills and deducts stock in 30 seconds via carrier APIs. Shoppers get live tracking instantly. In six months of operation, we experienced zero lost shipments!',
    resultsRu: [
      'Сокращение времени сборки и оформления заказа с 8 минут до 30 секунд',
      '0% ошибок комплектации и человеческого фактора при заполнении накладных',
      '18 часов в неделю освобождено у операторов склада'
    ],
    resultsEn: [
      'Order dispatch and waybill cycle slashed from 8 minutes to 30 seconds',
      '0% inventory mismatches or duplicate shipments due to manual typing',
      '18 hours per week reclaimed across warehouse and fulfillment staff'
    ],
    techStack: ['n8n', 'PostgreSQL', 'Telegram API', 'Courier API (DPD/InPost)', 'CRM Webhooks', '1С / ERP'],
    workflowNameRu: 'AutoLogist: Складской пайплайн & Курьерский шлюз',
    workflowNameEn: 'AutoLogist: Fulfillment & Carrier Sync Pipeline'
  },
  {
    id: 'rev-crm-scoring',
    category: 'crm',
    categoryLabelRu: 'CRM & Скоринг лидов',
    categoryLabelEn: 'CRM & AI Lead Qualification',
    author: 'Артур Варламов',
    authorEn: 'Artur Varlamov',
    roleRu: 'Управляющий партнёр',
    roleEn: 'Managing Partner',
    companyRu: 'B2B Growth Agency',
    companyEn: 'B2B Growth Agency',
    locationRu: 'Дубай / Алматы',
    locationEn: 'Dubai / Almaty',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetricRu: '+38% встреч • 15 ч/нед экономии',
    highlightMetricEn: '+38% meetings • 15 hrs/wk saved',
    headlineRu: '«Менеджеры перестали тратить время на пустые звонки: ИИ готовит бриф заранее»',
    headlineEn: '"Sales reps stopped wasting time on dead calls: AI delivers pre-call briefings"',
    quoteRu: 'Каждый входящий лид теперь проходит через скоринг n8n с обращением к ИИ. Система проверяет домен компании, оценивает бюджет по косвенным признакам и ставит задачу нужному сейлзу. Конверсия из лида во встречу выросла почти на 40%!',
    quoteEn: 'Every inbound lead is now enriched and triaged through our automated n8n pipeline. The system validates company domains, estimates budgets, and dispatches the lead directly to the right account executive. Qualified call conversion increased by almost 40%!',
    resultsRu: [
      'Рост конверсии входящих лидов во встречи с ЛПР на 38%',
      '15 часов в неделю сэкономлено на ручном поиске информации о компаниях',
      'Скорость первого контакта с горячим лидом сократилась до 2 минут'
    ],
    resultsEn: [
      '38% higher conversion from inbound lead to executive discovery call',
      '15 hours per week saved on manual company data scouting',
      'Lead response latency reduced to under 2 minutes'
    ],
    techStack: ['n8n', 'AmoCRM API', 'Claude / OpenAI API', 'Telegram Bot', 'Hunter.io API'],
    workflowNameRu: 'LeadEngine: ИИ-квалификатор и диспетчер лидов',
    workflowNameEn: 'LeadEngine: Autonomous Lead Triage & Enrichment'
  },
  {
    id: 'rev-finflow',
    category: 'finance',
    categoryLabelRu: 'Авто-биллинг & Финансы',
    categoryLabelEn: 'Billing & Receivables',
    author: 'Роман Мельник',
    authorEn: 'Roman Melnik',
    roleRu: 'Основатель B2B IT-студии',
    roleEn: 'Founder & CEO',
    companyRu: 'CloudPeak Solutions',
    companyEn: 'CloudPeak Solutions',
    locationRu: 'Вильнюс / Таллин',
    locationEn: 'Vilnius / Tallinn',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetricRu: '-12 дней кассового разрыва • $3,200/мес',
    highlightMetricEn: '-12 days cash cycle • $3,200/mo saved',
    headlineRu: '«Счета генерируются и подписываются за 2 секунды, а клиенты платят вовремя»',
    headlineEn: '"Invoices generated in 2 seconds, and clients settle on schedule"',
    quoteRu: 'Раньше бухгалтер вручную перебивала реквизиты в шаблоны счетов, а потом мы неделями напоминали клиентам об оплате. Теперь при переводе сделки в CRM система сама генерирует брендированный PDF, подписывает факсимиле и отправляет в чат клиенту с мягкими напоминаниями. Дебиторка упала с 28% до рекордно низких 3.5%!',
    quoteEn: 'Our accountant used to manually copy details into invoices, and we spent weeks chasing payments. Now when a deal moves stages in CRM, the system generates a signed PDF and sends it directly with polite reminders. Overdue receivables plummeted from 28% to an all-time low of 3.5%!',
    resultsRu: [
      'Снижение дебиторской задолженности с 28% до 3.5%',
      'Сокращение цикла оплаты счетов в среднем на 12 рабочих дней',
      'Экономия $3,200 в месяц на отказе от найма дополнительного бухгалтера'
    ],
    resultsEn: [
      'Overdue accounts receivable dropped from 28% to 3.5%',
      'Average invoice payment cycle shortened by 12 business days',
      '$3,200 monthly savings by avoiding additional accounting headcount'
    ],
    techStack: ['n8n', 'Google Docs / Drive API', 'Stripe / Bank Webhooks', 'Telegram API', 'AmoCRM'],
    workflowNameRu: 'FinFlow: Авто-биллинг и контроль дебиторки',
    workflowNameEn: 'FinFlow: Autonomous Invoicing & Aging Tracker'
  },
  {
    id: 'rev-edusync',
    category: 'edtech',
    categoryLabelRu: 'EdTech & Онбординг',
    categoryLabelEn: 'EdTech & Student Onboarding',
    author: 'Ольга Берг',
    authorEn: 'Olga Berg',
    roleRu: 'Основательница EdTech академии',
    roleEn: 'Academy Founder',
    companyRu: 'NextGen Academy',
    companyEn: 'NextGen Academy',
    locationRu: 'Мюнхен / Берлин',
    locationEn: 'Munich / Berlin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    highlightMetricRu: '1,200+ студентов на автопилоте • 40 сек',
    highlightMetricEn: '1,200+ students on autopilot • 40 sec',
    headlineRu: '«Запуск на 500 студентов перестал быть катастрофой для кураторов»',
    headlineEn: '"Massive launches with 500 students are no longer a nightmare for coordinators"',
    quoteRu: 'В день запуска нового потока кураторы буквально зашивались: вручную проверяли чеки, генерировали Zoom-ссылки и путали часовые пояса учеников. Ульяна собрала n8n-сценарий: оплата сразу открывает кабинет, создает слоты в Google Календаре с учетом таймзоны студента и выдает разовые ссылки в чат. Ноль ошибок и счастливые ученики!',
    quoteEn: 'Launch days used to be chaotic: coordinators manually checked payments, created Zoom links, and mixed up student timezones. Ulyana designed an n8n pipeline: checkout unlocks platform access, sets up localized Google Calendar invites, and grants Telegram access automatically. Zero errors and 100% student satisfaction!',
    resultsRu: [
      'Время от оплаты курса до получения доступов сократилось с 4 часов до 40 секунд',
      'Школа масштабировала поток в 4 раза без найма новых координаторов',
      'Ноль жалоб на путаницу с расписанием и ссылками на уроки'
    ],
    resultsEn: [
      'Onboarding turnaround slashed from 4 hours to 40 seconds',
      'The academy scaled learner capacity 4x without coordinator headcount',
      'Zero complaints regarding schedule confusion or missed Zoom links'
    ],
    techStack: ['n8n', 'Zoom API', 'Google Calendar API', 'Telegram Bot API', 'Stripe', 'Airtable'],
    workflowNameRu: 'EduSync: Сквозной онбординг и расписание занятий',
    workflowNameEn: 'EduSync: Student Onboarding & Calendar Automation'
  }
];

interface AutomationReviewsSectionProps {
  onDiscussAutomation?: (summaryText?: string) => void;
}

export const AutomationReviewsSection: React.FC<AutomationReviewsSectionProps> = ({ 
  onDiscussAutomation 
}) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t('Все сферы', 'All Categories'), count: AUTOMATION_REVIEWS.length },
    { id: 'logistics', label: t('Склад & Логистика', 'Warehouse & Logistics'), count: AUTOMATION_REVIEWS.filter(r => r.category === 'logistics').length },
    { id: 'crm', label: t('CRM & Лиды', 'CRM & Leads'), count: AUTOMATION_REVIEWS.filter(r => r.category === 'crm').length },
    { id: 'finance', label: t('Финансы & Биллинг', 'Billing & Finance'), count: AUTOMATION_REVIEWS.filter(r => r.category === 'finance').length },
    { id: 'edtech', label: t('EdTech & Онлайн', 'EdTech & Onboarding'), count: AUTOMATION_REVIEWS.filter(r => r.category === 'edtech').length },
  ];

  const filteredReviews = activeCategory === 'all' 
    ? AUTOMATION_REVIEWS 
    : AUTOMATION_REVIEWS.filter(r => r.category === activeCategory);

  return (
    <section id="automation" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-800 mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Автоматизация на n8n & ИИ-пайплайны', 'n8n Automation & AI Workflows')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Кейсы и отзывы по{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  автоматизации бизнес-процессов
                </span>
              </>
            ) : (
              <>
                Verified Case Reviews:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  Business Process Automation
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Замеренные показатели окупаемости, экономии времени и ликвидации рутины от внедрения сценариев.',
              'Verified metrics on time reclaimed, error reduction, and operational payback from custom automation pipelines.'
            )}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="button"
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-100'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 px-1.5 py-0.2 rounded-full text-[10px] ${
                activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Reviews Cards in Double-Bezel Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredReviews.map((rev) => {
            const author = language === 'en' ? rev.authorEn : rev.author;
            const role = language === 'en' ? rev.roleEn : rev.roleRu;
            const company = language === 'en' ? rev.companyEn : rev.companyRu;
            const location = language === 'en' ? rev.locationEn : rev.locationRu;
            const headline = language === 'en' ? rev.headlineEn : rev.headlineRu;
            const quote = language === 'en' ? rev.quoteEn : rev.quoteRu;
            const results = language === 'en' ? rev.resultsEn : rev.resultsRu;
            const metric = language === 'en' ? rev.highlightMetricEn : rev.highlightMetricRu;
            const workflow = language === 'en' ? rev.workflowNameEn : rev.workflowNameRu;

            return (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="double-bezel flex flex-col justify-between transition-shadow hover:shadow-xl"
              >
                <div className="inner-card p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div>
                    {/* Top Row: Metric Highlight & Stars */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                        {metric}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-black text-[#071329] tracking-tight leading-snug mt-4 mb-3">
                      {headline}
                    </h3>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                      &ldquo;{quote}&rdquo;
                    </p>

                    {/* Key Results Checklist */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 mb-6">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                        {t('Результаты внедрения:', 'Verified Results:')}
                      </span>
                      {results.map((res, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Workflow Tag */}
                    <div className="text-[11px] text-blue-700 font-semibold flex items-center gap-1.5 mb-2">
                      <Zap className="w-3.5 h-3.5 text-blue-600" />
                      <span>{workflow}</span>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {rev.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Author Meta & CTA Button */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={rev.avatar} 
                        alt={author} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                      />
                      <div>
                        <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
                          {author}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                          {role}, {company}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {location}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onDiscussAutomation && onDiscussAutomation(`Обсудить автоматизацию: ${workflow}`)}
                      data-cursor="button"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs border border-slate-200 hover:border-blue-200 transition-all cursor-pointer self-start sm:self-auto"
                    >
                      <span>{t('Обсудить проект', 'Discuss Case')}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
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
