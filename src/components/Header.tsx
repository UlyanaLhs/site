import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Coins, 
  ChevronDown, 
  Calculator, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CurrencyCode, CURRENCIES } from '../data/currency';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MagneticButton } from './motion/MagneticButton';

interface HeaderProps {
  onOpenContact: () => void;
  onNavigateToSystems?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onNavigateToSystems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const { language, setCurrency, currency, t, dict } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencyOptions: CurrencyCode[] = ['BYN', 'RUB', 'USD', 'EUR'];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      id="header-nav"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-6 pt-3"
    >
      <div 
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-3.5 sm:px-6 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.08)] py-2 sm:py-2.5' 
            : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm py-2.5 sm:py-3'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Monogram: UD (Ulyana Dev) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-2.5 group flex-shrink-0 cursor-pointer text-left"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-emerald-400 p-[1.5px] shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-600 text-sm sm:text-base tracking-wider">
                  UD
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-sm sm:text-base tracking-tight group-hover:text-blue-600 transition-colors">
                  {t('Ульяна', 'Ulyana')}
                </span>
                <span className="text-slate-300 text-xs hidden sm:inline">•</span>
                <span className="text-slate-500 text-xs font-semibold hidden sm:inline">
                  Product Dev
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden min-[420px]:block">
                {t('Сайты & Telegram-боты', 'Websites & Telegram Bots')}
              </p>
            </div>
          </button>

          {/* Desktop Studio Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-xs font-bold text-slate-600">
            <button 
              onClick={() => scrollToSection('cases')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              {t('Кейсы', 'Cases')}
            </button>
            <button 
              onClick={() => scrollToSection('tech-stack')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              {t('Стек', 'Tech Stack')}
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              {t('Услуги & Цены', 'Services & Pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              {t('Процесс', 'Process')}
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              {t('FAQ', 'FAQ')}
            </button>
          </nav>

          {/* Action Tools: Currency Selector + Language Switcher + Telegram & CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Currency Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 border border-slate-200/80 text-xs font-bold text-slate-800 transition-all shadow-sm cursor-pointer"
                title={t('Сменить валюту (BYN, RUB, USD, EUR)', 'Switch currency (BYN, RUB, USD, EUR)')}
              >
                <Coins className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-blue-700 font-black">{currency}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${currencyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {currencyDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setCurrencyDropdownOpen(false)}
                >
                  <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    {t('Валюта расчета', 'Pricing Currency')}
                  </div>
                  {currencyOptions.map((code) => {
                    const c = CURRENCIES[code];
                    const isActive = currency === code;
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrency(code);
                          setCurrencyDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isActive 
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' 
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold">{code}</span>
                          <span className="text-slate-400 text-[11px]">({c.symbol})</span>
                        </div>
                        <span className="text-[10px] text-slate-500 truncate max-w-[80px]">
                          {language === 'en' ? c.nameEn : c.nameRu}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Language Switcher Component (RU / EN) */}
            <LanguageSwitcher />

            {/* B2B Systems ($5K–$50K+) High-Ticket Page Link */}
            <a
              href="/systems"
              onClick={(e) => {
                if (onNavigateToSystems) {
                  e.preventDefault();
                  onNavigateToSystems();
                }
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200/80 text-blue-700 text-xs font-bold transition-all shadow-sm"
              title={dict.header.b2bSystemsTooltip}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>{dict.header.b2bSystemsLink}</span>
            </a>

            {/* Direct Telegram Link */}
            <a
              href="https://t.me/u_ulyana_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-blue-700 text-xs font-bold transition-all shadow-sm"
              title={dict.header.telegramTooltip}
            >
              <Send className="w-3.5 h-3.5 text-blue-600" />
              <span>@u_ulyana_dev</span>
            </a>

            {/* Calculate Cost CTA Button with button-in-button design & Magnetic physics */}
            <MagneticButton strength={0.16} radius={60}>
              <button
                id="header-calculate-btn"
                onClick={() => scrollToSection('calculator')}
                className="group inline-flex items-center gap-2 pl-3 sm:pl-3.5 pr-2 sm:pr-2.5 py-1.5 sm:py-2 rounded-xl sm:rounded-full bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 cursor-pointer active:scale-[0.98]"
              >
                <span className="hidden sm:inline">{dict.header.calculateButtonFull}</span>
                <span className="sm:hidden">{dict.header.calculateButtonShort}</span>
                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <Calculator className="w-3 h-3 text-white stroke-[2.5]" />
                </span>
              </button>
            </MagneticButton>

          </div>

        </div>
      </div>
    </motion.header>
  );
};
