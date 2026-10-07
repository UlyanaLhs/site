import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Coins, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CurrencyCode, CURRENCIES, formatCurrencyValue } from '../data/currency';
import { MagneticButton } from './motion/MagneticButton';

export const ROUTINE_SAVINGS_RATIO = 0.6;

interface RoiCalculatorProps {
  onOpenContactWithMetrics: (summary: string) => void;
  onDiscussAutomation?: (summary: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ 
  onOpenContactWithMetrics,
  onDiscussAutomation
}) => {
  const { language, currency, setCurrency, t } = useLanguage();

  const [monthlyLeads, setMonthlyLeads] = useState<number>(120);
  const [minutesPerLead, setMinutesPerLead] = useState<number>(20);
  const [manualRoutineHoursPerWeek, setManualRoutineHoursPerWeek] = useState<number>(10);
  
  const defaultChecks: Record<CurrencyCode, number> = {
    BYN: 850,
    RUB: 25000,
    USD: 350,
    EUR: 320
  };

  const [averageCheck, setAverageCheck] = useState<number>(defaultChecks[currency] || 25000);

  const handleCurrencySwitch = (newCurr: CurrencyCode) => {
    setCurrency(newCurr);
    setAverageCheck(defaultChecks[newCurr]);
  };

  const hoursSpentPerMonth = Math.round((monthlyLeads * minutesPerLead) / 60);
  const hoursSavedPerMonth = Math.round(hoursSpentPerMonth * 0.7);
  const monthlyRoutineHours = manualRoutineHoursPerWeek * 4.33;
  const routineHoursReclaimedPerMonth = Math.round(monthlyRoutineHours * ROUTINE_SAVINGS_RATIO);
  const totalHoursSavedPerMonth = hoursSavedPerMonth + routineHoursReclaimedPerMonth;

  const additionalClients = Math.max(1, Math.round(monthlyLeads * (2.2 / 100)));
  const additionalMonthlyRevenue = additionalClients * averageCheck;
  const annualExtraRevenue = additionalMonthlyRevenue * 12;

  const getCalculationSummary = (isAutomationFocus: boolean = false) => {
    const sym = CURRENCIES[currency].symbol;
    if (language === 'ru') {
      return `Расчет ROI: ${monthlyLeads} лидов/мес, ${manualRoutineHoursPerWeek} ч/нед рутины, средний чек ${averageCheck.toLocaleString()} ${sym}. Ожидаемая экономия: ~${totalHoursSavedPerMonth} часов/мес (~${routineHoursReclaimedPerMonth} ч/мес от автоматизации процессов). Потенциал выручки: +${formatCurrencyValue(additionalMonthlyRevenue, currency)}/мес.${isAutomationFocus ? ' Цель: Автоматизация процессов.' : ''}`;
    }
    return `ROI calculation: ${monthlyLeads} leads/mo, ${manualRoutineHoursPerWeek} hrs/wk routine, avg check ${formatCurrencyValue(averageCheck, currency)}. Reclaimed time: ~${totalHoursSavedPerMonth} hrs/mo (~${routineHoursReclaimedPerMonth} hrs/mo from process automation). Revenue upside: +${formatCurrencyValue(additionalMonthlyRevenue, currency)}/mo.${isAutomationFocus ? ' Objective: Process Automation.' : ''}`;
  };

  const handleApplyCalculation = () => {
    onOpenContactWithMetrics(getCalculationSummary(false));
  };

  const handleDiscussAutomation = () => {
    const summary = getCalculationSummary(true);
    if (onDiscussAutomation) {
      onDiscussAutomation(summary);
    } else {
      onOpenContactWithMetrics(summary);
    }
  };

  const getCheckSliderBounds = () => {
    switch (currency) {
      case 'BYN':
        return { min: 100, max: 6000, step: 50 };
      case 'RUB':
        return { min: 3000, max: 200000, step: 2500 };
      case 'USD':
        return { min: 50, max: 3000, step: 50 };
      case 'EUR':
        return { min: 50, max: 2800, step: 50 };
    }
  };

  const checkBounds = getCheckSliderBounds();
  const curSymbol = CURRENCIES[currency].symbol;
  const currencyOptions: CurrencyCode[] = ['BYN', 'RUB', 'USD', 'EUR'];

  return (
    <section id="calculator" className="py-20 md:py-32 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-blue-700 mb-4 shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('Экономика и отдача от разработки', 'Financial Return on Investment')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071329] tracking-tight mb-4 leading-tight">
            {language === 'ru' ? (
              <>
                Калькулятор окупаемости и{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  сэкономленного времени
                </span>
              </>
            ) : (
              <>
                ROI & Operational Hours{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-emerald-600">
                  Savings Calculator
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t(
              'Оцените финансовую отдачу от запуска конверсионного сайта и автоматизации процессов.',
              'Calculate the estimated financial upside and operational bandwidth reclaimed from deploying custom systems.'
            )}
          </p>

          {/* Quick Currency Switcher inside Calculator */}
          <div className="mt-6 inline-flex items-center p-1 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            {currencyOptions.map((code) => (
              <button
                key={code}
                onClick={() => handleCurrencySwitch(code)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  currency === code
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Double-Bezel Interactive Calculator Box */}
        <div className="double-bezel max-w-5xl mx-auto">
          <div className="inner-card p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left Column: Sliders with drag cursor */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  {t('Параметры вашего бизнеса', 'Your Current Business Metrics')}
                </h3>

                {/* Slider 1: Monthly Leads */}
                <div data-cursor="drag">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    <span>{t('Входящих заявок в месяц:', 'Inbound leads per month:')}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-black text-sm">
                      {monthlyLeads}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={monthlyLeads}
                    data-cursor="drag"
                    onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>10</span>
                    <span>500</span>
                    <span>1,000+</span>
                  </div>
                </div>

                {/* Slider 2: Average Check */}
                <div data-cursor="drag">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    <span>{t('Средний чек сделки:', 'Average deal size / ticket:')}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-black text-sm">
                      {formatCurrencyValue(averageCheck, currency)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={checkBounds.min}
                    max={checkBounds.max}
                    step={checkBounds.step}
                    value={averageCheck}
                    data-cursor="drag"
                    onChange={(e) => setAverageCheck(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>{formatCurrencyValue(checkBounds.min, currency)}</span>
                    <span>{formatCurrencyValue(checkBounds.max / 2, currency)}</span>
                    <span>{formatCurrencyValue(checkBounds.max, currency)}</span>
                  </div>
                </div>

                {/* Slider 3: Minutes spent per lead */}
                <div data-cursor="drag">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    <span>{t('Время на разбор одной заявки вручную:', 'Manual handling time per lead:')}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-black text-sm">
                      {minutesPerLead} {t('мин', 'min')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={minutesPerLead}
                    data-cursor="drag"
                    onChange={(e) => setMinutesPerLead(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>5 мин</span>
                    <span>30 мин</span>
                    <span>60 мин</span>
                  </div>
                </div>

                {/* Slider 4: Routine hours per week */}
                <div data-cursor="drag">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-900 mb-2">
                    <span>{t('Часов рутины команды в неделю:', 'Weekly team routine overhead:')}</span>
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 font-black text-sm">
                      {manualRoutineHoursPerWeek} {t('ч/нед', 'hrs/wk')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="40"
                    step="2"
                    value={manualRoutineHoursPerWeek}
                    data-cursor="drag"
                    onChange={(e) => setManualRoutineHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>2 ч</span>
                    <span>20 ч</span>
                    <span>40 ч</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Calculated Results */}
              <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-white to-emerald-50/70 border border-slate-200/90 flex flex-col justify-between space-y-6">
                
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-bold mb-4">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('Прогнозируемый результат внедрения', 'Estimated System Payback')}</span>
                  </div>

                  {/* Monthly Added Revenue */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {t('Дополнительная выручка в месяц:', 'Additional Monthly Revenue:')}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight transition-all">
                      +{formatCurrencyValue(additionalMonthlyRevenue, currency)}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {t(`За счет роста конверсии на +2.2% (+${additionalClients} клиентов/мес)`, `From +2.2% conversion lift (+${additionalClients} clients/mo)`)}
                    </div>
                  </div>

                  {/* Monthly Hours Saved */}
                  <div className="mb-6">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {t('Сэкономлено времени команды:', 'Reclaimed Team Bandwidth:')}
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-emerald-700 tracking-tight transition-all">
                      ~{totalHoursSavedPerMonth} {t('часов/мес', 'hrs/mo')}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {t(`~${routineHoursReclaimedPerMonth} ч/мес от автоматизации + ~${hoursSavedPerMonth} ч/мес от чат-бота`, `~${routineHoursReclaimedPerMonth} hrs/mo from automation + ~${hoursSavedPerMonth} hrs/mo from bot triage`)}
                    </div>
                  </div>

                  {/* Annual Upside */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <div className="text-xs font-bold text-slate-500 mb-0.5">
                      {t('Годовой финансовый эффект:', 'Annualized Revenue Upside:')}
                    </div>
                    <div className="text-2xl font-black text-slate-900 transition-all">
                      +{formatCurrencyValue(annualExtraRevenue, currency)} / {t('год', 'year')}
                    </div>
                  </div>
                </div>

                {/* Action Buttons with Magnetic Physics */}
                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                  <MagneticButton strength={0.2} radius={75} className="w-full">
                    <button
                      onClick={handleApplyCalculation}
                      data-cursor="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer group active:scale-[0.98]"
                    >
                      <span>{t('Обсудить проект с этими метриками', 'Discuss Project with These Metrics')}</span>
                      <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </MagneticButton>

                  <MagneticButton strength={0.15} radius={65} className="w-full">
                    <button
                      onClick={handleDiscussAutomation}
                      data-cursor="button"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-700 font-bold text-xs border border-slate-200 transition-all cursor-pointer group active:scale-[0.98]"
                    >
                      <Zap className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <span>{t('Обсудить автоматизацию процессов', 'Discuss Process Automation')}</span>
                    </button>
                  </MagneticButton>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
