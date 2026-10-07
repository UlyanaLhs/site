import React from 'react';
import { UserCheck, Building2, Check, X, Shield, Clock, HeartHandshake, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SoloVsAgencyProps {
  onOpenContact: () => void;
}

export const SoloVsAgency: React.FC<SoloVsAgencyProps> = ({ onOpenContact }) => {
  const { language, t } = useLanguage();

  const comparisonRows = [
    {
      parameterRu: 'Коммуникация',
      parameterEn: 'Communication',
      soloRu: 'Прямой контакт с Ульяной в Telegram. Ответ за 15–30 минут без промежуточных звеньев.',
      soloEn: 'Direct Telegram channel with Ulyana. Instant 15–30 min turnaround without intermediaries.',
      agencyRu: 'Через аккаунт-менеджера. Испорченный телефон, задержки ответов по 2–3 дня.',
      agencyEn: 'Through junior account managers. Broken phone syndrome and 2–3 day response latency.',
      icon: HeartHandshake
    },
    {
      parameterRu: 'Скорость запуска',
      parameterEn: 'Time to Market',
      soloRu: 'От 7 до 14 рабочих дней до готового рабочего продукта с подключенными интеграциями.',
      soloEn: '7 to 14 business days from kickoff to a deployed, production-ready system with integrations.',
      agencyRu: 'От 1.5 до 3 месяцев из-за внутренних планерок, согласований и очередей в отделах.',
      agencyEn: '1.5 to 3 months bogged down by internal status syncs, ticket backlogs, and handoffs.',
      icon: Clock
    },
    {
      parameterRu: 'Ценообразование',
      parameterEn: 'Pricing Model',
      soloRu: 'Честная прозрачная смета. Вы платите только за реальную разработку и чистый код.',
      soloEn: 'Transparent, deliverables-based pricing. Zero markups for office rent, PMs, or corporate bloat.',
      agencyRu: 'В чек заложены оклады директоров, сейлзов, секретарей и аренда представительского офиса.',
      agencyEn: 'Invoice inflated by agency overhead, executive bonuses, business development, and leases.',
      icon: Zap
    },
    {
      parameterRu: 'Ответственность',
      parameterEn: 'Accountability',
      soloRu: '100% персональная ответственность Ульяны. Дорожу репутацией и сопровождаю проект до окупаемости.',
      soloEn: '100% direct personal accountability from Ulyana. Reputational skin-in-the-game until proven ROI.',
      agencyRu: 'Проект отдают начинающим джуниорам или субподрядчикам на внешних биржах фриланса.',
      agencyEn: 'Account delegated to revolving juniors or outsourced to low-cost marketplace contractors.',
      icon: Shield
    },
    {
      parameterRu: 'Гибкость правок',
      parameterEn: 'Agility & Iterations',
      soloRu: 'Внесение точечных улучшений день в день без бюрократических согласований.',
      soloEn: 'Same-day adjustments and agile micro-iterations without paperwork bottlenecks.',
      agencyRu: 'Любая мелочь требует официального ТЗ, повторной оценки и выставления счета за часы.',
      agencyEn: 'Every minor change order triggers re-estimation, change requests, and extra hourly bills.',
      icon: UserCheck
    },
    {
      parameterRu: 'Договор и порядок оплаты',
      parameterEn: 'Contract & Payment Terms',
      soloRu: 'Официальный договор, поэтапная предоплата 50/50. Фиксация точных сроков, закрывающие акты и 100% передача прав.',
      soloEn: 'Official contract, staged 50/50 prepayment. Guaranteed deadlines, corporate invoices, and full IP ownership transfer.',
      agencyRu: '100% предоплата или сложные кабальные условия со скрытыми доплатами за каждый чих.',
      agencyEn: '100% upfront lock-in, ambiguous milestone sign-offs, and hefty hourly add-on invoices.',
      icon: Shield
    }
  ];

  return (
    <section id="solo-advantage" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('Формат работы: Solo Specialist', 'Engagement Model: Solo Specialist')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Почему предприниматели выбирают{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  прямую работу с Ульяной
                </span>
              </>
            ) : (
              <>
                Why business founders prefer{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  direct partnership with Ulyana
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Сравнение персональной инженерной разработки и традиционных веб-агентств.',
              'Direct comparison between a high-caliber solo product engineer and bloated traditional agencies.'
            )}
          </p>
        </div>

        {/* Comparison Table / Bento in Double-Bezel Frame */}
        <div className="double-bezel max-w-5xl mx-auto">
          <div className="inner-card p-6 sm:p-10 space-y-6">
            
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-slate-200">
              <div className="md:col-span-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                {t('Параметр сотрудничества', 'Key Parameter')}
              </div>
              <div className="md:col-span-4 text-sm font-black text-blue-700 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>{t('Ульяна (Solo Full-Stack)', 'Ulyana (Solo Full-Stack)')}</span>
              </div>
              <div className="md:col-span-4 text-sm font-bold text-slate-400 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>{t('Типичное веб-агентство', 'Traditional Agency')}</span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-6 divide-y divide-slate-100">
              {comparisonRows.map((row, idx) => {
                const Icon = row.icon;
                const param = language === 'en' ? row.parameterEn : row.parameterRu;
                const solo = language === 'en' ? row.soloEn : row.soloRu;
                const agency = language === 'en' ? row.agencyEn : row.agencyRu;

                return (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-6 items-start">
                    
                    {/* Parameter */}
                    <div className="md:col-span-4 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center text-blue-700 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-black text-[#071329]">
                        {param}
                      </span>
                    </div>

                    {/* Ulyana's column */}
                    <div className="md:col-span-4 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                          {solo}
                        </span>
                      </div>
                    </div>

                    {/* Agency column */}
                    <div className="md:col-span-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                          {agency}
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Bottom Callout & CTA */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm font-bold text-slate-700">
                {t('Нужен качественный продукт без агентской переплаты?', 'Need a premium product without agency markup?')}
              </div>
              <button
                onClick={onOpenContact}
                data-cursor="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer active:scale-95 group/btn"
              >
                <span>{t('Начать диалог в Telegram', 'Start Direct Conversation')}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
