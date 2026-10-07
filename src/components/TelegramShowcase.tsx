import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Smartphone, 
  Bell, 
  CreditCard, 
  Zap, 
  ArrowRight, 
  Check, 
  ShoppingBag,
  Calendar,
  Layers,
  Bot
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { AnimatedCounter } from './motion/AnimatedCounter';

interface TelegramShowcaseProps {
  onOpenContact: () => void;
  onSelectBotForOrder?: (botName: string) => void;
}

export const TelegramShowcase: React.FC<TelegramShowcaseProps> = ({ 
  onOpenContact,
  onSelectBotForOrder 
}) => {
  const { language, t } = useLanguage();

  const demoScenarios = [
    {
      titleRu: 'Онлайн-запись & бронь услуг в 2 клика',
      titleEn: 'Zero-Friction Booking & Calendar Scheduling',
      descRu: 'Клиент открывает Mini App прямо в чате вашего Telegram-канала, выбирает мастера, дату, вносит предоплату и получает напоминание за 2 часа до визита.',
      descEn: 'Clients open the Mini App natively inside your Telegram channel, pick a specialist, select a time slot, settle a deposit, and receive automated SMS/Telegram reminders.',
      metricRu: '0% потерь на скачивание приложений',
      metricEn: '0% dropout from App Store downloads',
      icon: Calendar
    },
    {
      titleRu: 'E-commerce витрина & каталог товаров',
      titleEn: 'In-App E-commerce Storefront & Catalog',
      descRu: 'Полноценный интерактивный магазин: корзина, выбор цвета/размера, привязка адреса доставки и мгновенная оплата через Telegram Pay.',
      descEn: 'Full-featured digital storefront: responsive item options, instant cart sync, delivery address autofill, and 1-tap checkout via Telegram Pay or card.',
      metricRu: '+45% к скорости оформления заказа',
      metricEn: '+45% faster order completion speed',
      icon: ShoppingBag
    },
    {
      titleRu: 'Личный кабинет & программа лояльности',
      titleEn: 'Client Portal & Retention Loyalty Engine',
      descRu: 'Удержание клиентов (LTV): накопительные баллы, персональные промокоды, история заказов и push-уведомления об акциях с доходимостью 92%.',
      descEn: 'Maximize customer LTV: tiered bonus points, dynamic referral rewards, order history, and direct push alerts boasting a 92%+ open rate.',
      metricRu: 'x3.4 повторные покупки',
      metricEn: '3.4x higher repeat purchase frequency',
      icon: Zap
    }
  ];

  return (
    <section id="telegram" className="py-20 sm:py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
            <Send className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Новый стандарт удержания клиентов', 'The Modern Client Retention Standard')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === 'ru' ? (
              <>
                Telegram Mini Apps & Боты:{' '}
                <span className="text-gradient-blue">
                  ваш бизнес в кармане клиента
                </span>
              </>
            ) : (
              <>
                Telegram Mini Apps & Bots:{' '}
                <span className="text-gradient-blue">
                  your business right in your client’s pocket
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t(
              'Не заставляйте клиента скачивать тяжелые приложения из App Store или искать ваш сайт в закладках. Полноценный сервис открывается внутри Telegram за 1 секунду.',
              'Don’t force clients to download heavy 150MB apps from the App Store or search for your link in browser bookmarks. A blazing-fast interactive service opens natively inside Telegram in under 1 second.'
            )}
          </p>
        </div>

        {/* Feature comparison banner: Classic App vs Telegram Mini App in Double-Bezel Hardware Card */}
        <div className="mb-12 sm:mb-16 double-bezel p-2 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm">
          <div className="inner-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              
              {/* Traditional App */}
              <div className="pt-2 md:pt-0 md:pr-6">
                <div className="flex items-center gap-2 text-rose-600 font-bold text-xs sm:text-sm mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>{t('Обычное мобильное приложение', 'Native App Store Application')}</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-rose-100">✕</span>
                    <span>{t('Стоимость разработки от $10,000+ под iOS и Android', 'Development cost $10,000+ across iOS and Android')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-rose-100">✕</span>
                    <span>{t('Клиент ленится скачивать 150 МБ из App Store', 'Users drop off rather than downloading 150MB from stores')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-rose-100">✕</span>
                    <span>{t('Комиссия магазинов приложений 15–30% с каждого платежа', 'App Store / Google Play take a 15–30% cut of revenue')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-rose-100">✕</span>
                    <span>{t('Долгая модерация обновлений неделями', 'Lengthy review cycles delaying critical feature updates')}</span>
                  </li>
                </ul>
              </div>

              {/* Telegram Mini App */}
              <div className="pt-6 md:pt-0 md:pl-8">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs sm:text-sm mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t('Telegram Mini App & Автоматический бот', 'Telegram Mini App & Automated Ecosystem')}</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{t('Запуск в 1 клик прямо из сообщения или меню бота', 'Launches in 1 tap directly from chat or Telegram channel')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{t('0% комиссий App Store — 100% выручки остается у вас', '0% App Store tax — keep 100% of your business revenue')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{t('Push-уведомления и рассылки с открываемостью 92%+', 'Direct broadcast push notifications with a 92%+ open rate')}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{t('Бесшовные мгновенные обновления без модерации в сторах', 'Instant live deployments without store approval gatekeepers')}</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* 3 Real Scenarios in Double-Bezel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {demoScenarios.map((sc, idx) => {
            const Icon = sc.icon;
            const title = language === 'en' ? sc.titleEn : sc.titleRu;
            const desc = language === 'en' ? sc.descEn : sc.descRu;
            const metric = language === 'en' ? sc.metricEn : sc.metricRu;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
                className="double-bezel p-1.5 rounded-3xl bg-slate-100/70 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="inner-card p-6 rounded-2xl bg-white border border-slate-200/70 flex flex-col justify-between h-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                      {t('Эффект для бизнеса:', 'Measurable Commercial Lift:')}
                    </div>
                    <div className="inline-flex items-center text-xs sm:text-sm font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200/60">
                      <AnimatedCounter value={metric} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bridge card to 9 Bots now hosted inside the primary Cases section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 border border-blue-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start sm:items-center gap-4 text-left relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-emerald-300 shadow-inner">
              <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{t('Раздел «Кейсы & Портфолио»', 'Cases & Portfolio Section')}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                {t('9 Живых Telegram-ботов с автоматизацией и продажами', '9 Live Telegram Bots with Automation & Sales')}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                {t(
                  'Все 9 кейсов ботов с реальными скриншотами интерфейсов, сценариями воронки и коммерческим эффектом доступны в разделе «Кейсы».',
                  'All 9 bot case studies with UI screenshots, conversion funnels, and verified commercial lift are integrated into the Cases section.'
                )}
              </p>
            </div>
          </div>

          <a
            href="#cases"
            data-cursor="project"
            className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-all shadow-md whitespace-nowrap cursor-pointer flex-shrink-0 active:scale-95"
          >
            <span>{t('Перейти к кейсам ботов', 'Explore Bot Cases')}</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </a>
        </div>

        {/* Bottom CTA block */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={onOpenContact}
            data-cursor="button"
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200 group cursor-pointer active:scale-95"
          >
            <span>{t('Обсудить разработку Telegram Mini App / Бота с Ульяной', 'Discuss Telegram Mini App / Bot Development with Ulyana')}</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
              <ArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
