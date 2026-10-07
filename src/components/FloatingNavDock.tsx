import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Layers, 
  Calculator, 
  Workflow, 
  Star, 
  HelpCircle, 
  Send, 
  ChevronUp, 
  Compass, 
  Minimize2, 
  Maximize2,
  Zap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavItem {
  id: string;
  labelRu: string;
  labelEn: string;
  icon: React.ComponentType<{ className?: string }>;
  isAccent?: boolean;
}

export const FloatingNavDock: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: 'cases', labelRu: 'Кейсы', labelEn: 'Cases', icon: Layers },
    { id: 'automation', labelRu: 'Автоматизация', labelEn: 'Automation', icon: Zap },
    { id: 'reviews', labelRu: 'Отзывы', labelEn: 'Reviews', icon: Star },
    { id: 'services', labelRu: 'Услуги', labelEn: 'Services', icon: Briefcase },
    { id: 'calculator', labelRu: 'Расчет', labelEn: 'Calc', icon: Calculator },
    { id: 'process', labelRu: 'Процесс', labelEn: 'Process', icon: Workflow },
    { id: 'faq', labelRu: 'FAQ', labelEn: 'FAQ', icon: HelpCircle },
    { id: 'contact', labelRu: 'Контакты', labelEn: 'Contact', icon: Send, isAccent: true },
  ];

  // Detect active section on scroll
  useEffect(() => {
    const sectionIds = ['hero', 'services', 'automation', 'cases', 'tech-stack', 'calculator', 'process', 'reviews', 'faq', 'contact'];

    const handleScroll = () => {
      const threshold = Math.min(260, Math.max(180, window.innerHeight * 0.3));
      const scrollPosition = window.scrollY + threshold;
      setIsScrolled(window.scrollY > 250);

      const sectionElements = sectionIds
        .map(id => ({ id, el: document.getElementById(id) }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      sectionElements.sort((a, b) => {
        const topA = a.el.getBoundingClientRect().top + window.scrollY;
        const topB = b.el.getBoundingClientRect().top + window.scrollY;
        return topA - topB;
      });

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= top) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
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
    <div 
      id="floating-navigation-dock"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-16px)] transition-all duration-300 pointer-events-auto"
    >
      {isMinimized ? (
        /* Minimized floating button: extremely compact, unobtrusive */
        <button
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 shadow-xl backdrop-blur-xl transition-all duration-200 cursor-pointer group hover:scale-105"
          title={t('Развернуть навигацию по разделам', 'Expand section navigation')}
        >
          <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
            {t('Навигация', 'Menu')}
          </span>
          <Maximize2 className="w-3 h-3 text-slate-400 group-hover:text-slate-700" />
        </button>
      ) : (
        /* Expanded Floating Island Dock */
        <div className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-900/10 ring-1 ring-black/5">
          
          {/* Scroll to Top button (visible when scrolled) */}
          {isScrolled && (
            <button
              onClick={() => scrollToSection('hero')}
              data-cursor="button"
              className="p-1.5 sm:p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
              title={t('Наверх к началу', 'Scroll to top')}
            >
              <ChevronUp className="w-4 h-4 text-blue-600" />
            </button>
          )}

          {/* Navigation Items */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const label = language === 'ru' ? item.labelRu : item.labelEn;

              if (item.isAccent) {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    data-cursor="button"
                    className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 border border-emerald-200/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span className="hidden min-[420px]:inline">{label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  data-cursor="button"
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                  title={label}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className={`${isActive ? 'inline' : 'hidden sm:inline'} text-[11px] sm:text-xs font-medium`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Discreet Minimize Button */}
          <div className="pl-0.5 sm:pl-1 border-l border-slate-200 ml-0.5">
            <button
              onClick={() => setIsMinimized(true)}
              data-cursor="button"
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              title={t('Свернуть панель навигации', 'Minimize navigation')}
              aria-label="Minimize navigation dock"
            >
              <Minimize2 className="w-3 h-3" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
