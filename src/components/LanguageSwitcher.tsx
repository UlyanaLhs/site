import React from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'segment' | 'dropdown' | 'mobile';
  className?: string;
  showIcon?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'segment',
  className = '',
  showIcon = true,
}) => {
  const { language, setLanguage, t } = useLanguage();

  const handleSelect = (lang: Language) => {
    if (language !== lang) {
      setLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  if (variant === 'mobile') {
    return (
      <div 
        id="mobile-language-switcher"
        className={`flex items-center justify-between p-1 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm ${className}`}
      >
        <button
          type="button"
          onClick={() => handleSelect('ru')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
            language === 'ru'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={language === 'ru'}
        >
          <span>🇷🇺 RU</span>
          <span className="text-[10px] font-medium opacity-80">Русский</span>
          {language === 'ru' && <Check className="w-3.5 h-3.5 ml-0.5 text-emerald-600" />}
        </button>

        <button
          type="button"
          onClick={() => handleSelect('en')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
            language === 'en'
              ? 'bg-white text-blue-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900'
          }`}
          aria-pressed={language === 'en'}
        >
          <span>🇬🇧 EN</span>
          <span className="text-[10px] font-medium opacity-80">English</span>
          {language === 'en' && <Check className="w-3.5 h-3.5 ml-0.5 text-emerald-600" />}
        </button>
      </div>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        id="language-switcher-pill-btn"
        type="button"
        onClick={toggleLanguage}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 transition-all duration-200 shadow-sm group cursor-pointer ${className}`}
        title={language === 'ru' ? 'Switch to English (Native-level)' : 'Переключить на русский язык'}
        aria-label={t('Сменить язык', 'Switch language')}
      >
        {showIcon && (
          <Globe className="w-3.5 h-3.5 text-emerald-600 group-hover:rotate-45 transition-transform duration-300" />
        )}
        <span className="tracking-wide">
          {language === 'ru' ? '🇷🇺 RU' : '🇬🇧 EN'}
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200">
          {language === 'ru' ? 'RU' : 'EN'}
        </span>
      </button>
    );
  }

  // Default: Segmented button (sleek RU / EN toggle with sliding indicator feel)
  return (
    <div
      id="header-language-switcher"
      role="group"
      aria-label={t('Переключатель языка', 'Language Switcher')}
      className={`inline-flex items-center p-0.5 rounded-xl bg-slate-100/90 border border-slate-200/90 shadow-sm relative ${className}`}
    >
      {showIcon && (
        <div 
          className="pl-2 pr-1 text-slate-500 flex items-center cursor-pointer hover:text-emerald-600 transition-colors"
          onClick={toggleLanguage}
          title={language === 'ru' ? 'Switch to English' : 'Переключить на русский'}
        >
          <Globe className="w-3.5 h-3.5 text-emerald-600" />
        </div>
      )}

      {/* RU Button */}
      <button
        type="button"
        onClick={() => handleSelect('ru')}
        className={`relative z-10 px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
          language === 'ru'
            ? 'bg-white text-blue-700 shadow-sm font-black'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-pressed={language === 'ru'}
        title="Русский язык"
      >
        <span>RU</span>
      </button>

      {/* Divider */}
      <span className="w-[1px] h-3 bg-slate-200 mx-0.5" />

      {/* EN Button */}
      <button
        type="button"
        onClick={() => handleSelect('en')}
        className={`relative z-10 px-2 py-1 rounded-lg text-xs font-bold transition-all duration-200 flex items-center gap-1 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-blue-700 shadow-sm font-black'
            : 'text-slate-500 hover:text-slate-900'
        }`}
        aria-pressed={language === 'en'}
        title="English language"
      >
        <span>EN</span>
      </button>
    </div>
  );
};
