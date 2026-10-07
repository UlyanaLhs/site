import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Repeat, 
  UserCheck, 
  Check, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './motion/AnimatedCounter';

interface CoreValuePillarsProps {
  onOpenContact: () => void;
}

export const CoreValuePillars: React.FC<CoreValuePillarsProps> = ({ onOpenContact }) => {
  const { language, t } = useLanguage();

  const pillars = [
    {
      id: 'traffic-to-clients',
      badgeRu: 'Поток клиентов',
      badgeEn: 'Client Acquisition',
      icon: TrendingUp,
      titleRu: 'Сайты, которые окупаются и приводят целевых покупателей',
      titleEn: 'Conversion-engineered websites driving high-intent clients',
      painRu: 'Боль: Трафик идет, но реклама не окупается, а посетители покидают сайт через 5 секунд.',
      painEn: 'Problem: Ad spend is burning without ROI, while visitors bounce within 5 seconds without converting.',
      solutionRu: 'Создаю визуально безупречный сайт с логической структурой воронки. Каждый заголовок, кнопка и форма бьют в реальные потребности вашего клиента, снимают возражения и ведут к целевому действию.',
      solutionEn: 'I engineer visually compelling websites with conversion funnel psychology. Every headline, CTA, and intake form addresses customer friction and turns cold traffic into booked appointments.',
      resultMetricRu: 'x2.4 рост конверсии',
      resultMetricEn: '2.4x conversion lift',
      resultDescRu: 'Больше заявок из того же рекламного бюджета без лишних трат',
      resultDescEn: 'Doubles inbound pipeline from existing marketing budget',
      featuresRu: [
        'Понятное позиционирование с первых 3 секунд',
        'Быстрая загрузка до 1.2 сек на любых устройствах',
        'Удобные интерактивные калькуляторы и селекторы услуг'
      ],
      featuresEn: [
        'Crystal-clear value proposition within the first 3 seconds',
        'Sub-1.2s loading speeds across all mobile and desktop devices',
        'Engaging interactive calculators, quizzes & service configurators'
      ]
    },
    {
      id: 'time-automation',
      badgeRu: 'Экономия времени',
      badgeEn: 'Operational Time Reclaimed',
      icon: Clock,
      titleRu: 'Автоматизация, ИИ-ассистенты и сценарии вместо ручной рутины',
      titleEn: 'Automation, AI assistants & workflows replacing manual routine',
      painRu: 'Боль: Вы или сотрудники тратите по 3–5 часов в день на однотипные ответы в чатах, согласование времени и отправку прайсов.',
      painEn: 'Problem: Founders and operators spend 3–5 hours daily fielding repetitive DMs, availability checks, and price inquiries.',
      solutionRu: 'Проектирую автономных ботов-ассистентов и сценарии: они моментально отвечают клиенту 24/7, квалифицируют заявку, собирают техническое задание и бронируют время в календаре.',
      solutionEn: 'I architect autonomous assistant bots: they qualify leads 24/7, provide instant interactive answers, capture requirements, and sync calendar bookings without human lag.',
      resultMetricRu: '-65% рутины',
      resultMetricEn: '-65% routine overhead',
      resultDescRu: 'До 25 часов в неделю освобождается для стратегических задач бизнеса',
      resultDescEn: 'Reclaims up to 25 hours per week for core revenue-generating business operations',
      featuresRu: [
        'Мгновенный ответ за 3 секунды в любое время суток',
        'Автоматический сбор вводных данных и документов',
        'Интеграция с CRM, Telegram, почтой и таблицами'
      ],
      featuresEn: [
        'Instant 3-second responsiveness 24 hours a day, 7 days a week',
        'Autonomous intake of client requirements, briefs, and files',
        'Real-time webhooks with your CRM, Telegram, and Google Sheets'
      ]
    },
    {
      id: 'client-retention',
      badgeRu: 'Удержание & LTV',
      badgeEn: 'Retention & LTV',
      icon: Repeat,
      titleRu: 'Telegram Mini Apps & экосистемы для повторных продаж',
      titleEn: 'Telegram Mini Apps & seamless ecosystems driving repeat sales',
      painRu: 'Боль: Клиент воспользовался услугой один раз и забыл о вас. Приходится снова платить за его привлечение.',
      painEn: 'Problem: One-time clients churn immediately, forcing you to repurchase them through expensive paid ads over and over.',
      solutionRu: 'Упаковываю ваш сервис в удобное Telegram Mini App или программу лояльности. Клиент делает повторный заказ в 2 клика прямо в мессенджере без скачивания приложений из App Store.',
      solutionEn: 'I build bespoke Telegram Mini Apps with integrated loyalty programs. Customers reorder in 2 clicks natively inside their favorite messenger without installing App Store apps.',
      resultMetricRu: '+42% рост LTV',
      resultMetricEn: '+42% higher LTV',
      resultDescRu: 'Клиенты возвращаются чаще благодаря удобству прямо в мессенджере',
      resultDescEn: 'Compounded customer lifetime value through zero-friction in-app accessibility',
      featuresRu: [
        'Каталог, корзина и оплата без выхода из Telegram',
        'Автоматические персональные push-напоминания',
        'Бонусный счет и реферальная программа'
      ],
      featuresEn: [
        'Digital storefront, cart & seamless checkout natively in Telegram',
        'Automated targeted push notifications & re-engagement triggers',
        'Loyalty balance, rewards tiers & viral referral incentives'
      ]
    }
  ];

  return (
    <section id="pillars" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('Реальная ценность для бизнеса', 'Engineered Business Value')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-5 leading-tight">
            {language === 'ru' ? (
              <>
                Не просто дизайн, а{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  цифровая инфраструктура для выручки
                </span>
              </>
            ) : (
              <>
                Not merely design, but{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  digital infrastructure that prints revenue
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Каждый проект решает конкретное финансовое или операционное узкое место вашего бизнеса.',
              'Every deployment targets a measurable financial bottleneck or operational drag in your company.'
            )}
          </p>
        </div>

        {/* 3 Pillars Grid with Double-Bezel Hardware Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const badge = language === 'en' ? pillar.badgeEn : pillar.badgeRu;
            const title = language === 'en' ? pillar.titleEn : pillar.titleRu;
            const pain = language === 'en' ? pillar.painEn : pillar.painRu;
            const solution = language === 'en' ? pillar.solutionEn : pillar.solutionRu;
            const metric = language === 'en' ? pillar.resultMetricEn : pillar.resultMetricRu;
            const metricDesc = language === 'en' ? pillar.resultDescEn : pillar.resultDescRu;
            const features = language === 'en' ? pillar.featuresEn : pillar.featuresRu;

            return (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="double-bezel flex flex-col group"
              >
                <div className="inner-card p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Top Pill & Icon */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
                        {badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#071329] tracking-tight leading-snug mb-4 group-hover:text-blue-700 transition-colors">
                      {title}
                    </h3>

                    {/* Key Metric Spotlight */}
                    <div className="mb-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                      <div className="text-2xl sm:text-3xl font-black text-emerald-800 tracking-tight">
                        <AnimatedCounter value={metric} />
                      </div>
                      <div className="text-xs text-emerald-700 font-medium mt-0.5">
                        {metricDesc}
                      </div>
                    </div>

                    {/* Pain vs Solution Breakdown */}
                    <div className="space-y-3 mb-6">
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
                        <span className="font-bold text-rose-700 block mb-1">
                          {t('Узкое место:', 'Friction point:')}
                        </span>
                        <p className="text-slate-600 leading-relaxed">
                          {pain.replace(/^Боль:\s*/, '').replace(/^Problem:\s*/, '')}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs sm:text-sm">
                        <span className="font-bold text-blue-800 block mb-1">
                          {t('Моё решение:', 'My architectural solution:')}
                        </span>
                        <p className="text-slate-700 leading-relaxed">
                          {solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Checklist Features */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      {features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={onOpenContact}
                      data-cursor="button"
                      className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-xs sm:text-sm border border-slate-200/80 hover:border-blue-300 transition-all cursor-pointer group/btn"
                    >
                      <span>{t('Обсудить решение', 'Discuss this architecture')}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-transform duration-200" />
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
