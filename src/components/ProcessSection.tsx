import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  MessageSquare, 
  FileCheck, 
  Code2, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      shortTitleRu: 'Заявка',
      shortTitleEn: 'Inquiry',
      titleRu: '01. Заявка и первичный контакт',
      titleEn: '01. Inquiry & Quick Discovery',
      timeRu: '15–30 минут',
      timeEn: '15–30 mins',
      icon: Send,
      actionRu: 'Пишете напрямую в Telegram или на рабочую почту с описанием вашей задачи.',
      actionEn: 'Reach out directly on Telegram or work email with a quick overview of your goals.',
      descRu: 'Я изучаю вашу нишу, текущий сайт (если есть) и задаю 3–4 точечных вопроса по задаче. Никаких ботов-автоответчиков или стажеров — вы сразу общаетесь с исполнителем.',
      descEn: 'I review your niche, existing website or bot, and ask 3–4 clarifying questions. Zero bot auto-replies or junior reps — you communicate directly with the engineer.',
      deliverableRu: 'Понимание задачи, предварительная вилка бюджета и запись на 20-минутный созвон или чат.',
      deliverableEn: 'Clear scope understanding, indicative price estimate, and scheduled 20-minute chat.',
      clientRoleRu: 'Описать задачу в свободной форме (2–3 предложения).',
      clientRoleEn: 'Briefly describe your project goals in 2–3 sentences.'
    },
    {
      step: '02',
      shortTitleRu: 'Консультация',
      shortTitleEn: 'Consultation',
      titleRu: '02. Консультация и бриф воронки',
      titleEn: '02. Strategy & Funnel Blueprint',
      timeRu: '1–2 дня',
      timeEn: '1–2 days',
      icon: MessageSquare,
      actionRu: 'Разбираем целевую аудиторию, продукт, конкурентов и точки конверсии.',
      actionEn: 'We dissect your target audience, competitors, and conversion touchpoints.',
      descRu: 'Формируем логику страниц, заголовки под боли клиентов и карту интеграций (CRM, Telegram, эквайринг, онлайн-запись). Никаких шаблонных решений — проектируем структуру под окупаемость.',
      descEn: 'We define page architecture, high-converting value propositions, and integration specs (CRM, Telegram webhooks, Stripe, booking engines). Structured purely for conversion.',
      deliverableRu: 'Утвержденное техническое задание (ТЗ) и логическая схема структуры проекта.',
      deliverableEn: 'Approved functional specification and complete structural wireframe.',
      clientRoleRu: 'Ответить на вопросы брифа и предоставить референсы/материалы.',
      clientRoleEn: 'Answer brief prompts and share brand assets or references.'
    },
    {
      step: '03',
      shortTitleRu: 'Смета & Договор',
      shortTitleEn: 'Scope & Contract',
      titleRu: '03. Фиксированная смета и официальный договор',
      titleEn: '03. Fixed Scope & Legal Agreement',
      timeRu: '1 день',
      timeEn: '1 day',
      icon: FileCheck,
      actionRu: 'Фиксируем точный дедлайн, этапы и итоговую сумму в договоре.',
      actionEn: 'We lock in strict deadlines, milestones, and final price in an official agreement.',
      descRu: 'Вы вносите 50% предоплаты для бронирования рабочего спринта. Цена в договоре окончательная — никаких скрытых доплат за «дополнительные правки» или всплывшие нюансы.',
      descEn: 'You release 50% staged prepayment to lock the development sprint. The contract figure is final — zero surprise charges or billing for standard revisions.',
      deliverableRu: 'Официальный договор, чеки/счета и зафиксированные в календаре даты сдачи.',
      deliverableEn: 'Legally binding contract, official invoices, and calendar-locked delivery dates.',
      clientRoleRu: 'Подписать договор и внести стартовые 50% предоплаты.',
      clientRoleEn: 'Sign contract and transfer 50% initial milestone deposit.'
    },
    {
      step: '04',
      shortTitleRu: 'Разработка и тестирование',
      shortTitleEn: 'Build & Test',
      titleRu: '04. Разработка и тестирование',
      titleEn: '04. Build & Test',
      timeRu: '5–10 рабочих дней',
      timeEn: '5–10 business days',
      icon: Code2,
      actionRu: 'Создаю макет в Figma, согласуем визуал, затем верстаю чистый быстрый код.',
      actionEn: 'I design high-fidelity Figma layouts, align visual cues, then write clean production code.',
      descRu: 'Дизайн без шаблонов и визуального мусора: читаемая типографика, адаптив под все экраны смартфонов. Разработка на React/TypeScript/Tailwind с молниеносной загрузкой (0.3–0.8с). Отчеты каждые 2–3 дня.',
      descEn: 'Bespoke Figma prototype: crisp typography, ergonomic mobile layout. Written in React, TypeScript & Tailwind with sub-second speeds. Live progress reports every 2–3 days.',
      deliverableRu: 'Кликабельный макет в Figma + рабочий проект на тестовом домене (staging).',
      deliverableEn: 'Clickable Figma prototype + functional staging deployment for live inspection.',
      clientRoleRu: 'Посмотреть макет и тестовую ссылку, дать обратную связь.',
      clientRoleEn: 'Inspect the staging prototype and give straightforward feedback.'
    },
    {
      step: '05',
      shortTitleRu: 'Приёмка & Гарантия',
      shortTitleEn: 'Launch & Warranty',
      titleRu: '05. Приёмка, релиз и 30 дней поддержки',
      titleEn: '05. QA Sign-Off, Live Launch & 30-Day SLA',
      timeRu: '1–2 дня',
      timeEn: '1–2 days',
      icon: CheckCircle,
      actionRu: 'Тестируем проект на ваших устройствах и запускаем на боевом домене.',
      actionEn: 'We verify functionality on your devices and deploy to your live custom domain.',
      descRu: 'Финальные 50% оплаты вы переводите только после того, как лично всё проверили и приняли. Передаю все доступы, исходный код и видеоинструкцию по управлению. 30 дней бесплатной гарантии.',
      descEn: 'The final 50% balance is released strictly after your personal verification. Full source code, ownership credentials, video walkthrough, plus 30 days of free warranty.',
      deliverableRu: 'Работающий проект на вашем домене, 100% прав на код и 30 дней гарантии.',
      deliverableEn: 'Live production product, 100% IP rights, and 30-day technical support warranty.',
      clientRoleRu: 'Принять проект, подписать акт и оплатить финальные 50%.',
      clientRoleEn: 'Approve live build, sign completion act, and release final 50%.'
    }
  ];

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section id="process" className="py-20 sm:py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Прозрачный процесс от А до Я', 'Zero-Anxiety 5-Step Delivery Roadmap')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === 'ru' ? (
              <>
                Как проходит работа:{' '}
                <span className="text-gradient-blue">
                  от заявки до запуска за 5 шагов
                </span>
              </>
            ) : (
              <>
                How we work:{' '}
                <span className="text-gradient-blue">
                  from first inquiry to live launch in 5 steps
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Без сюрпризов, сорванных дедлайнов и скрытых платежей. Вы точно знаете, что происходит на каждом этапе, сколько это занимает и какой результат получаете.',
              'No ambiguous delays or scope creep. Clear timelines, direct communication, and a defined concrete deliverable at every milestone.'
            )}
          </p>
        </div>

        {/* Interactive Progress Bar Navigation */}
        <div className="mb-10 sm:mb-12">
          <div className="relative">
            {/* Progress line background */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-1 bg-slate-200 -z-0 rounded-full" />
            
            {/* Active progress highlight */}
            <div 
              className="hidden md:block absolute top-6 left-10 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 -z-0 rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 88}%` }}
            />

            {/* Steps Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {steps.map((s, idx) => {
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;

                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    data-cursor="button"
                    className={`text-left p-4 rounded-2xl border transition-all duration-300 relative cursor-pointer active:scale-[0.98] ${
                      isActive 
                        ? 'bg-white border-blue-600 shadow-md ring-4 ring-blue-100/80' 
                        : isPassed
                          ? 'bg-white/80 border-slate-200 text-slate-700 hover:border-blue-300 shadow-xs'
                          : 'bg-slate-100/60 border-slate-200/60 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
                        isActive 
                          ? 'bg-blue-600 text-white font-black shadow-xs' 
                          : isPassed 
                            ? 'bg-blue-50 text-blue-700 border border-blue-100' 
                            : 'bg-slate-200/80 text-slate-600'
                      }`}>
                        {s.step}
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        isActive 
                          ? 'bg-blue-50 text-blue-700 border border-blue-200/60' 
                          : 'bg-slate-100 text-slate-500'
                      }`}>
                        {language === 'en' ? s.timeEn : s.timeRu}
                      </span>
                    </div>

                    <div className={`text-xs font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {language === 'en' ? s.shortTitleEn : s.shortTitleRu}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detailed Card in Double-Bezel Hardware Architecture */}
        <div className="double-bezel p-2 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm mb-12 transition-all duration-300">
          <div className="inner-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left side: What happens */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                        {t('Шаг', 'Step')} {current.step} / 05
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                        {language === 'en' ? current.titleEn : current.titleRu}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-slate-800">
                    <strong className="text-blue-900 block mb-1 font-bold">
                      {t('Суть этапа:', 'Stage Overview:')}
                    </strong>
                    {language === 'en' ? current.actionEn : current.actionRu}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {language === 'en' ? current.descEn : current.descRu}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      <strong className="text-slate-800">{t('Срок выполнения:', 'Turnaround:')}</strong>{' '}
                      {language === 'en' ? current.timeEn : current.timeRu}
                    </span>
                  </div>
                </div>

                {/* Right side: Deliverable & Client involvement (Removes client anxiety) */}
                <div className="lg:col-span-5 space-y-4 pt-4 lg:pt-0 lg:border-l lg:border-slate-200 lg:pl-8">
                  
                  {/* Deliverable box */}
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 shadow-xs">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>{t('Что вы получаете на руки:', 'Concrete Deliverable for You:')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed">
                      {language === 'en' ? current.deliverableEn : current.deliverableRu}
                    </p>
                  </div>

                  {/* Client participation */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                    <span className="text-slate-500 block text-[11px] font-semibold mb-0.5 uppercase tracking-wider">
                      {t('Ваше участие на этом этапе:', 'What is required from you:')}
                    </span>
                    <span className="text-slate-800 font-medium">
                      {language === 'en' ? current.clientRoleEn : current.clientRoleRu}
                    </span>
                  </div>

                  {/* Step Navigation Controls */}
                  <div className="flex items-center justify-between gap-3 pt-3">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      data-cursor="button"
                      className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer active:scale-95"
                    >
                      &larr; {t('Предыдущий шаг', 'Previous')}
                    </button>

                    {activeStep < steps.length - 1 ? (
                      <button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        data-cursor="button"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all cursor-pointer shadow-sm active:scale-95"
                      >
                        <span>{t('Следующий шаг', 'Next step')}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={onOpenContact}
                        data-cursor="button"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all cursor-pointer shadow-md shadow-emerald-500/20 active:scale-95"
                      >
                        <span>{t('Начать с шага 01', 'Start Step 01')}</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    )}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Security Trust Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="leading-relaxed">
              <strong className="text-slate-900 font-bold">{t('Финансовая безопасность:', 'Commercial Assurance:')}</strong>{' '}
              {t(
                'Официальный договор, оплата 50/50 (вторая половина только после вашей приемки), закрывающие акты и 30 дней бесплатной гарантии.',
                'Official contract, staged 50/50 payment (second half released only after your approval), full IP rights, and 30-day post-launch warranty.'
              )}
            </span>
          </div>
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto text-center justify-center whitespace-nowrap px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer"
          >
            {t('Обсудить проект с Ульяной', 'Discuss Project with Ulyana')}
          </button>
        </div>

      </div>
    </section>
  );
};
