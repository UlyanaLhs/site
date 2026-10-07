import React from 'react';
import { 
  ArrowUp, 
  Send, 
  Instagram, 
  Linkedin, 
  Youtube, 
  AtSign, 
  Globe, 
  Coins, 
  ExternalLink,
  Sparkles 
} from 'lucide-react';
import { CASE_STUDIES } from '../data/cases';
import { ULYANA_SOCIALS } from '../data/socials';
import { useLanguage } from '../context/LanguageContext';
import { CURRENCIES, CurrencyCode } from '../data/currency';

interface FooterProps {
  onNavigateToSystems?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSystems }) => {
  const { language, setLanguage, currency, setCurrency, t, dict } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'threads':
        return <AtSign className="w-4 h-4 text-slate-700" />;
      case 'telegram':
        return <Send className="w-4 h-4 text-blue-500" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-blue-600" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      default:
        return <Send className="w-4 h-4 text-emerald-600" />;
    }
  };

  const currencyOptions: CurrencyCode[] = ['BYN', 'RUB', 'USD', 'EUR'];

  return (
    <footer className="bg-slate-100/70 border-t border-slate-200/90 py-12 sm:py-16 relative text-slate-600 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 sm:pb-12 border-b border-slate-200">
          
          {/* Col 1: Brand & Bio with Ulyana's name */}
          <div className="md:col-span-4 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-sm text-white shadow-sm">
                UD
              </div>
              <div>
                <span className="text-slate-900 font-extrabold text-base tracking-tight block">
                  {t('Ульяна | Product Dev & Design', 'Ulyana | Product Dev & Design')}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">
                  {t('Независимый разработчик & UX/UI дизайнер', 'Senior Product Engineer & UI/UX Designer')}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-normal">
              {t(
                'Премиальная веб-разработка, дизайн и автоматизация для бизнеса. 4+ года опыта с клиентами по всему миру (США, ЕС, ОАЭ, СНГ). Работа по официальному договору и предоплате 50/50.',
                'High-performance full-cycle web engineering, UX design & business automation. 4+ years delivering for international clients. Governed by official contract and 50/50 prepayment.'
              )}
            </p>

            <div className="text-[11px] text-emerald-800 flex items-center gap-2 pt-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{t('Договор • Предоплата 50/50 • Гарантия 30 дней', 'Contract • 50/50 Prepayment • 30-Day Warranty')}</span>
            </div>

            {/* Language and Currency quick switcher in footer */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={() => setLanguage(language === 'ru' ? 'en' : 'ru')}
                data-cursor="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:border-slate-300 shadow-xs transition-all cursor-pointer active:scale-95"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>{language === 'ru' ? 'Язык: Русский (Переключить на EN)' : 'Language: English (Switch to RU)'}</span>
              </button>

              <div className="inline-flex items-center gap-1 p-0.5 rounded-lg bg-white border border-slate-200 shadow-xs text-[11px]">
                {currencyOptions.map((code) => (
                  <button
                    key={code}
                    onClick={() => setCurrency(code)}
                    data-cursor="button"
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                      currency === code 
                        ? 'bg-blue-600 text-white shadow-xs' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
              {t('Навигация', 'Navigation')}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="/systems" 
                  onClick={(e) => {
                    if (onNavigateToSystems) {
                      e.preventDefault();
                      onNavigateToSystems();
                    }
                  }}
                  className="text-blue-600 font-bold hover:text-blue-800 transition-colors flex items-center gap-1.5"
                >
                  <span>{t('B2B Системы & AI ($5K–$50K+)', 'B2B Systems & AI ($5K–$50K+)')}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-50 border border-blue-200 text-blue-700">
                    High-Ticket
                  </span>
                </a>
              </li>
              <li><a href="#cases" className="hover:text-blue-600 transition-colors text-slate-600">{t('10 Реализованных кейсов', '10 Live Case Studies')}</a></li>
              <li><a href="#telegram" className="hover:text-blue-600 transition-colors text-slate-600">{t('Telegram Mini Apps & Боты', 'Telegram Mini Apps & Bots')}</a></li>
              <li><a href="#pillars" className="hover:text-blue-600 transition-colors text-slate-600">{t('Решение болей бизнеса', 'Solving Business Pain Points')}</a></li>
              <li><a href="#calculator" className="hover:text-blue-600 transition-colors text-slate-600">{t('Калькулятор окупаемости (ROI)', 'ROI & Reclaimed Time Calculator')}</a></li>
              <li><a href="#solo-advantage" className="hover:text-blue-600 transition-colors text-slate-600">{t('Преимущества Solo Expert', 'Solo Specialist Advantage')}</a></li>
              <li><a href="#tech-stack" className="hover:text-blue-600 transition-colors text-slate-600">{t('Технологический стек конверсии', 'Conversion Tech Stack')}</a></li>
              <li><a href="#services" className="hover:text-blue-600 transition-colors text-slate-600">{t('Пакеты услуг и цены', 'Service Packages & Pricing')}</a></li>
              <li><a href="#faq" className="hover:text-blue-600 transition-colors text-slate-600">{t('Частые вопросы (FAQ)', 'Frequently Asked Questions')}</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors text-slate-600">{t('Связаться с Ульяной / Бриф', 'Contact Ulyana / Project Brief')}</a></li>
            </ul>
          </div>

          {/* Col 3: Ulyana's Socials & Direct Channels */}
          <div className="md:col-span-5">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3.5">
              {t('Соцсети и прямая связь Ульяны', 'Ulyana’s Socials & Direct Channels')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
              {ULYANA_SOCIALS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all text-slate-700 hover:text-slate-900 shadow-xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    {getSocialIcon(social.iconName)}
                  </div>
                  <div className="truncate">
                    <div className="font-semibold truncate text-[11px] text-slate-900">
                      {language === 'en' ? social.nameEn : social.name}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {social.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-[11px] text-slate-600 space-y-1.5">
              <div>
                <span className="text-emerald-700 font-semibold">{dict.footer.directContactLabel}</span>{' '}
                <a href="https://t.me/u_ulyana_dev" target="_blank" rel="noopener noreferrer" data-cursor="link" className="text-blue-600 font-bold hover:underline">
                  Telegram @u_ulyana_dev
                </a>
              </div>
              <div>
                <span className="text-emerald-700 font-semibold">{dict.footer.emailLabel}</span>{' '}
                <a href="mailto:ulyanafullstack@gmail.com" data-cursor="link" className="text-blue-600 font-bold hover:underline">
                  ulyanafullstack@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500">{dict.footer.replyTimeLabel}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span className="text-slate-500">
              {dict.footer.qualityBadge}
            </span>
            <button
              onClick={scrollToTop}
              data-cursor="button"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors font-medium cursor-pointer"
            >
              <span>{dict.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4 text-blue-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
