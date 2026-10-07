import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  Clock, 
  Copy, 
  Check, 
  ArrowRight, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck2, 
  CreditCard, 
  Lock, 
  Sparkles, 
  MessageSquare,
  Globe2,
  CalendarCheck2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService = '', 
  initialNotes = '' 
}) => {
  const { language, t } = useLanguage();
  const [copiedType, setCopiedType] = useState<'telegram' | 'email' | 'notes' | null>(null);

  const telegramUsername = 'u_ulyana_dev';
  const telegramUrl = 'https://t.me/u_ulyana_dev';
  const emailAddress = 'ulyanafullstack@gmail.com';

  const prepareTelegramMessage = () => {
    let text = language === 'ru' 
      ? 'Здравствуйте, Ульяна! Пишу по поводу разработки проекта.'
      : 'Hello Ulyana! I am reaching out regarding a project development.';

    if (initialService) {
      text += language === 'ru'
        ? `\nУслуга: ${initialService}`
        : `\nService: ${initialService}`;
    }

    if (initialNotes) {
      text += language === 'ru'
        ? `\nДетали: ${initialNotes}`
        : `\nDetails: ${initialNotes}`;
    }

    return encodeURIComponent(text);
  };

  const directTelegramUrl = `${telegramUrl}?text=${prepareTelegramMessage()}`;

  const mailSubject = encodeURIComponent(
    initialService 
      ? `[Проект] Запрос на разработку: ${initialService}` 
      : `[Проект] Запрос на разработку — Ulyana Portfolio`
  );
  const mailBody = encodeURIComponent(
    initialNotes || (language === 'ru' ? 'Здравствуйте, Ульяна! Хочу обсудить проект...' : 'Hello Ulyana! I would like to discuss a project...')
  );
  const mailtoUrl = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;

  const handleCopy = (text: string, type: 'telegram' | 'email' | 'notes') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[450px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
            <Send className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Прямая связь с разработчиком', 'Direct Contact with Ulyana')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {language === 'ru' ? (
              <>
                Обсудите ваш проект напрямую{' '}
                <span className="text-gradient-blue">
                  с Ульяной
                </span>
              </>
            ) : (
              <>
                Discuss your project directly{' '}
                <span className="text-gradient-blue">
                  with Ulyana
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {t(
              'Напишите мне в Telegram или на рабочую почту. Отвечаю лично в течение 15–30 минут: без менеджеров, посредников и бюрократии.',
              'Reach out directly via Telegram or email. I reply personally within 15–30 minutes: zero intermediaries, account managers, or corporate delays.'
            )}
          </p>
        </div>

        {/* Selected Context Card (if user navigated from a case, bot, or calculator) */}
        {(initialService || initialNotes) && (
          <div className="max-w-4xl mx-auto mb-10 double-bezel p-1.5 rounded-2xl sm:rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm">
            <div className="inner-card p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    {t('Выбранный проект / услуга для обсуждения', 'Selected Project / Service Details')}
                  </span>
                </div>
                {initialService && (
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 self-start sm:self-auto">
                    {initialService}
                  </span>
                )}
              </div>

              {initialNotes && (
                <p className="text-xs sm:text-sm text-slate-700 italic mb-4 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  &ldquo;{initialNotes}&rdquo;
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('Открыть в Telegram с этим текстом', 'Open Telegram with this brief')}</span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(initialNotes || initialService, 'notes')}
                  data-cursor="button"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold transition-all cursor-pointer"
                >
                  {copiedType === 'notes' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{t('Текст скопирован!', 'Text copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t('Скопировать текст', 'Copy text')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Direct Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
          
          {/* Primary Channel: Telegram Direct (7 cols) in Double-Bezel Hardware Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 double-bezel p-2 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm flex flex-col justify-between group transition-shadow hover:shadow-xl"
          >
            <div className="inner-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 flex flex-col justify-between h-full shadow-xs">
              
              <div>
                {/* Status Header */}
                <div className="flex items-center justify-between gap-2 pb-5 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      {t('Online • Личная связь 24/7', 'Online • Direct Telegram Channel')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('Ответ за 15–30 мин', 'Turnaround: 15–30 min')}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
                    <Send className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                      Telegram: @{telegramUsername}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {t(
                        'Основной и самый оперативный способ связи. Обсудим проект, посмотрим референсы, запишем голосовые или созвонимся без долгих согласований.',
                        'The primary and fastest channel. We can discuss your requirements, review references, and jump on a call without paperwork delays.'
                      )}
                    </p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-xs font-bold text-slate-900 mb-0.5">15–30 {t('мин', 'min')}</div>
                    <div className="text-[11px] text-slate-500">{t('Среднее время ответа', 'Average turnaround')}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-center">
                    <div className="text-xs font-bold text-emerald-800 mb-0.5">{t('Прямой диалог', 'Direct dialogue')}</div>
                    <div className="text-[11px] text-slate-600">{t('Без аккаунт-менеджеров', 'Zero middlemen')}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/70 text-center">
                    <div className="text-xs font-bold text-blue-800 mb-0.5">{t('Экспертный аудит', 'Actionable audit')}</div>
                    <div className="text-[11px] text-slate-600">{t('Разбор задач в день заявки', 'Same-day consultation')}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button"
                  className="flex-1 inline-flex items-center justify-center gap-3 pl-6 pr-3 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 group cursor-pointer transition-all duration-200"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>{t('Написать в Telegram @u_ulyana_dev', 'Message on Telegram @u_ulyana_dev')}</span>
                  <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(`@${telegramUsername}`, 'telegram')}
                  data-cursor="button"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 transition-all cursor-pointer"
                >
                  {copiedType === 'telegram' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">{t('Юзернейм скопирован!', 'Username copied!')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>{t('Скопировать @u_ulyana_dev', 'Copy handle')}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </motion.div>

          {/* Secondary Channels & Working Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-between">
            
            {/* Direct Email Card in Double Bezel */}
            <div className="double-bezel p-1.5 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm">
              <div className="inner-card p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {t('Рабочая почта', 'Work Email')}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal">
                      {t('Для подробных ТЗ, договоров и КП', 'For formal RFPs, contracts & documents')}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-800 break-all select-all">
                  {emailAddress}
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={mailtoUrl}
                    data-cursor="button"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{t('Отправить письмо', 'Send Email')}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(emailAddress, 'email')}
                    data-cursor="button"
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {copiedType === 'email' ? (
                      <span className="text-emerald-700 font-bold">{t('Скопировано!', 'Copied!')}</span>
                    ) : (
                      <span>{t('Скопировать', 'Copy')}</span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Availability & Working Hours in Double Bezel */}
            <div className="double-bezel p-1.5 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm">
              <div className="inner-card p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3.5">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span>{t('График работы & география', 'Availability & Working Hours')}</span>
                </h3>

                <div className="space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="text-slate-500">{t('Рабочие часы:', 'Working hours:')}</span>
                    <span className="font-semibold text-slate-900">Пн – Сб, 10:00 – 20:00 (UTC+3)</span>
                  </div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                    <span className="text-slate-500">{t('Формат работы:', 'Work model:')}</span>
                    <span className="font-semibold text-emerald-800">Remote • Worldwide</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">{t('Срочные вопросы:', 'Urgent messages:')}</span>
                    <span className="font-semibold text-blue-700">Telegram 24/7</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Legal & Collaboration Guarantees Grid (4 cards in Double Bezel) */}
        <div className="double-bezel p-2 rounded-3xl bg-slate-100/70 border border-slate-200/80 shadow-sm">
          <div className="inner-card p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="max-w-2xl mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>{t('Юридические гарантии и условия сотрудничества', 'Legal Terms & Collaboration Guarantees')}</span>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {t(
                  'Прозрачные условия без подводных камней и непредвиденных доплат в процессе разработки.',
                  'Clear, straightforward deliverables with no hidden costs or unexpected budget inflations.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('Официальный договор', 'Official Contract')}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {t(
                    'Фиксируем стоимость, этапы, сроки сдачи и детальное техническое задание до старта.',
                    'Fixed scope, milestone deadlines, and clear specifications locked prior to kickoff.'
                  )}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <CreditCard className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('Поэтапная оплата (50/50)', 'Staged 50/50 Payments')}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {t(
                    '50% при старте, финальные 50% — только после живой демонстрации и вашей полной приемки.',
                    '50% at kickoff, remaining 50% only after staging review and final sign-off.'
                  )}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('100% передача прав (IP)', 'Full IP Ownership')}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {t(
                    'Все исходники кода, доступ к репозиторию и дизайн-макеты в Figma передаются вам.',
                    'All source code, GitHub repository access, and Figma files belong entirely to you.'
                  )}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                  <CalendarCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('30 дней гарантии', '30-Day SLA Support')}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {t(
                    'Бесплатное сопровождение после релиза: оперативные правки, устранение багов и контроль метрик.',
                    'Free post-launch warranty: swift tweaks, bug fixes, and continuous performance checks.'
                  )}
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
