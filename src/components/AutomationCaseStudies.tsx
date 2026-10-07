import React from 'react';
import { 
  Zap, 
  Workflow, 
  Bot, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Layers, 
  Database, 
  Send, 
  Boxes, 
  MessageSquare,
  Quote,
  Star
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AutomationCaseStudiesProps {
  onDiscussAutomation?: (summaryText?: string) => void;
}

interface AutomationCaseItem {
  id: string;
  titleEn: string;
  titleRu: string;
  businessTypeEn: string;
  businessTypeRu: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  glowColor: string;
  pipelineFlow: {
    ru: string[];
    en: string[];
  };
  metrics: {
    highlightRu: string;
    highlightEn: string;
    labelRu: string;
    labelEn: string;
  }[];
  whatWasAutomatedRu: string;
  whatWasAutomatedEn: string;
  benefitsRu: string[];
  benefitsEn: string[];
  testimonial: {
    quoteRu: string;
    quoteEn: string;
    author: string;
    authorEn: string;
    roleRu: string;
    roleEn: string;
  };
  techStack: string[];
}

export const AutomationCaseStudies: React.FC<AutomationCaseStudiesProps> = ({ 
  onDiscussAutomation 
}) => {
  const { language, t } = useLanguage();

  const cases: AutomationCaseItem[] = [
    {
      id: 'crm-lead-scoring',
      titleEn: 'CRM Lead Scoring',
      titleRu: 'CRM Lead Scoring & Квалификация лидов',
      businessTypeEn: 'B2B Agency',
      businessTypeRu: 'B2B-агентство',
      icon: TrendingUp,
      accentColor: 'from-blue-600 via-sky-600 to-emerald-500',
      glowColor: 'rgba(16, 185, 129, 0.25)',
      pipelineFlow: {
        ru: ['Входящая заявка', 'ИИ-скоринг & Обогащение', 'Смена этапа CRM', 'Алерт в Telegram'],
        en: ['Inbound Lead', 'AI Enrichment & Scoring', 'CRM Stage Update', 'Instant Telegram Alert']
      },
      metrics: [
        {
          highlightRu: '15 ч/нед',
          highlightEn: '15 hrs/wk',
          labelRu: 'Освобождено от ручного разбора заявок',
          labelEn: 'Reclaimed from manual lead qualification'
        },
        {
          highlightRu: '+38%',
          highlightEn: '+38%',
          labelRu: 'Рост конверсии лидов в квалифицированные встречи',
          labelEn: 'Increase in qualified discovery calls'
        },
        {
          highlightRu: '-85%',
          highlightEn: '-85%',
          labelRu: 'Сокращение времени отклика (ответ за 30 сек)',
          labelEn: 'Reduction in outreach latency (response in 30s)'
        }
      ],
      whatWasAutomatedRu: 'Сквозной пайплайн: моментальный перехват лидов с форм и рекламы, автоматический сбор данных о компании через API, многоуровневый скоринг ИИ-агентом (бюджет, масштаб, срочность) и мгновенная отправка готового брифа менеджеру в Telegram.',
      whatWasAutomatedEn: 'Autonomous pipeline: instant webhook capture from web forms and ads, firmographic data enrichment, multi-stage AI qualification (budget, scale, timeline), and immediate dispatch of a ready-to-call briefing to the sales rep via Telegram.',
      benefitsRu: [
        'Исключен человеческий фактор при квалификации заявок',
        'Менеджеры общаются только с целевыми клиентами',
        'Мгновенный ответ клиенту днем и ночью'
      ],
      benefitsEn: [
        'Eliminated human bias during initial lead qualification',
        'Account executives focus exclusively on high-budget prospects',
        'Sub-minute automated response 24/7'
      ],
      testimonial: {
        quoteRu: 'Мы избавились от бессмысленных часовых созвонов с нецелевой аудиторией. Теперь мы работаем только с теми сделками, где клиент готов платить.',
        quoteEn: 'We eliminated hours of unproductive calls with bad-fit leads. Now my team focuses strictly on buyers who are qualified and ready to invest.',
        author: 'Артур Варламов',
        authorEn: 'Artur Varlamov',
        roleRu: 'Управляющий партнёр агентства',
        roleEn: 'Agency Managing Partner'
      },
      techStack: ['n8n', 'AmoCRM API', 'Telegram Bot API', 'Claude / OpenAI', 'Webhooks']
    },
    {
      id: 'warehouse-fulfillment',
      titleEn: 'Warehouse & Fulfillment Sync',
      titleRu: 'Склад & Логистика: сквозная синхронизация заказов',
      businessTypeEn: 'E-commerce & Retail',
      businessTypeRu: 'E-commerce & Ритейл',
      icon: Boxes,
      accentColor: 'from-blue-700 via-indigo-600 to-teal-500',
      glowColor: 'rgba(37, 99, 235, 0.25)',
      pipelineFlow: {
        ru: ['Оплата на сайте', '1С / МойСклад', 'Генерация ТТН курьера', 'Трекинг клиенту'],
        en: ['Online Checkout', 'ERP Stock Deduction', 'Carrier Waybill API', 'Client Tracking Link']
      },
      metrics: [
        {
          highlightRu: '30 сек',
          highlightEn: '30 sec',
          labelRu: 'Время сборки заказа вместо 45 минут',
          labelEn: 'Order processing down from 45 mins'
        },
        {
          highlightRu: '0%',
          highlightEn: '0%',
          labelRu: 'Ошибок комплектации и пересортов',
          labelEn: 'Inventory mismatch & dispatch errors'
        },
        {
          highlightRu: '18 ч/нед',
          highlightEn: '18 hrs/wk',
          labelRu: 'Экономия времени сотрудников склада',
          labelEn: 'Reclaimed for warehouse operators'
        }
      ],
      whatWasAutomatedRu: 'Сквозной n8n-пайплайн: моментальный перехват вебхука оплаты, автоматическая резервация товара на складе, генерация трек-номера курьерской службы (DPD/CDEK/InPost) и авто-уведомление покупателя в Telegram и SMS.',
      whatWasAutomatedEn: 'End-to-end n8n workflow: instant checkout webhook capture, automated warehouse inventory deduction, carrier API waybill generation, and real-time status dispatch to the buyer via Telegram & SMS.',
      benefitsRu: [
        '100% входящих заказов обрабатываются без участия человека',
        'Скорость отгрузки заказов выросла в 3.2 раза',
        'Экономия $2,400/мес на предотвращении ошибок комплектации'
      ],
      benefitsEn: [
        '100% of orders processed autonomously in real-time',
        'Fulfillment dispatch speed accelerated by 3.2x',
        '$2,400 monthly savings by eliminating inventory mismatch'
      ],
      testimonial: {
        quoteRu: 'Раньше в черную пятницу операторы сидели до ночи со слезами на глазах. Теперь система сама формирует накладные и списывает остатки за секунды. Ни единого потерянного заказа!',
        quoteEn: 'During peak sales our warehouse was swamped. Now the pipeline generates waybills and updates inventory in seconds. Zero lost orders in six months!',
        author: 'Дмитрий Соколов',
        authorEn: 'Dmitry Sokolov',
        roleRu: 'Операционный директор',
        roleEn: 'Chief Operating Officer'
      },
      techStack: ['n8n', 'PostgreSQL', 'Telegram API', 'Courier API', '1C / ERP Webhook']
    }
  ];

  return (
    <div className="space-y-8">
      {cases.map((caseItem) => {
        const title = language === 'en' ? caseItem.titleEn : caseItem.titleRu;
        const bType = language === 'en' ? caseItem.businessTypeEn : caseItem.businessTypeRu;
        const flow = language === 'en' ? caseItem.pipelineFlow.en : caseItem.pipelineFlow.ru;
        const whatWas = language === 'en' ? caseItem.whatWasAutomatedEn : caseItem.whatWasAutomatedRu;
        const benefits = language === 'en' ? caseItem.benefitsEn : caseItem.benefitsRu;
        const quote = language === 'en' ? caseItem.testimonial.quoteEn : caseItem.testimonial.quoteRu;
        const author = language === 'en' ? caseItem.testimonial.authorEn : caseItem.testimonial.author;
        const role = language === 'en' ? caseItem.testimonial.roleEn : caseItem.testimonial.roleRu;

        return (
          <div key={caseItem.id} className="double-bezel">
            <div className="inner-card p-6 sm:p-8 space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80 mb-2 inline-block">
                    {bType}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#071329] tracking-tight">
                    {title}
                  </h3>
                </div>

                <button
                  onClick={() => onDiscussAutomation && onDiscussAutomation(`Кейс автоматизации: ${title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer self-start sm:self-auto"
                >
                  <span>{t('Обсудить внедрение', 'Discuss Implementation')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </button>
              </div>

              {/* Pipeline Flow Diagram */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {t('Сквозной автоматический пайплайн', 'Automated Pipeline Flow')}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  {flow.map((step, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-800"
                    >
                      <span className="truncate">{sIdx + 1}. {step}</span>
                      {sIdx < flow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden md:block flex-shrink-0 ml-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {caseItem.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-800">
                      {language === 'en' ? m.highlightEn : m.highlightRu}
                    </div>
                    <div className="text-xs font-semibold text-emerald-700 mt-1">
                      {language === 'en' ? m.labelEn : m.labelRu}
                    </div>
                  </div>
                ))}
              </div>

              {/* What was automated + Testimonial */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/70">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block mb-2">
                    {t('Что было автоматизировано', 'What Was Automated')}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    {whatWas}
                  </p>
                  <div className="space-y-1.5">
                    {benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <Quote className="w-6 h-6 text-blue-300 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </div>
                  <div className="text-xs font-bold text-slate-900 border-t border-slate-200 pt-3">
                    {author} <span className="text-slate-500 font-normal">• {role}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {caseItem.techStack.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};
