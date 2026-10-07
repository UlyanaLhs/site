import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Check, 
  ArrowUpRight, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  ExternalLink, 
  Sliders, 
  Menu,
  Send,
  Mail
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HIGH_TICKET_CONTENT } from './highTicketContent';

interface HighTicketSystemsPageProps {
  onBackToPortfolio?: () => void;
}

export type PricingTierId = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4';

export const HighTicketSystemsPage: React.FC<HighTicketSystemsPageProps> = ({ 
  onBackToPortfolio 
}) => {
  const { language, setLanguage } = useLanguage();
  const content = HIGH_TICKET_CONTENT[language] || HIGH_TICKET_CONTENT.en;

  const [activeTabTier, setActiveTabTier] = useState<PricingTierId>('tier-2');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const telegramUrl = 'https://t.me/u_ulyana_dev';
  const emailAddress = 'ulyanafullstack@gmail.com';

  const getTelegramLinkForTier = (tierName: string, tierRange: string) => {
    const text = language === 'ru'
      ? `Здравствуйте, Ульяна! Хочу обсудить систему уровня: ${tierName} (${tierRange}).`
      : `Hello Ulyana! I would like to discuss a system for ${tierName} (${tierRange}).`;
    return `${telegramUrl}?text=${encodeURIComponent(text)}`;
  };

  const getGeneralTelegramLink = () => {
    const text = language === 'ru'
      ? 'Здравствуйте, Ульяна! Хочу обсудить разработку кастомной системы / AI-решения.'
      : "Hello Ulyana! I'd like to discuss custom AI systems and software engineering for my business.";
    return `${telegramUrl}?text=${encodeURIComponent(text)}`;
  };

  // Update SEO Title & Meta Description whenever language changes
  useEffect(() => {
    const originalTitle = document.title;
    document.title = content.meta.title;
    document.documentElement.lang = language;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', content.meta.description);
    }

    // Structured Data JSON-LD for Technical Consultancy / Software Service
    let schemaScript = document.getElementById('b2b-systems-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'b2b-systems-schema';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': language === 'ru' 
        ? 'Ульяна — Кастомные AI-системы и разработка софта' 
        : 'Ulyana — Custom AI Systems & Business Software',
      'url': 'https://ulyanaportfolio.ai.studio/systems',
      'description': content.meta.description,
      'email': emailAddress,
      'priceRange': '$5,000 – $50,000+',
      'areaServed': 'Global',
      'inLanguage': language,
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': language === 'ru' ? 'B2B Инженерные системы' : 'B2B Technical Systems',
        'itemListElement': content.tiersSection.tiers.map((t) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': `${t.name} (${t.range})`,
            'description': t.positioning
          },
          'price': t.range.replace(/[^0-9]/g, '').slice(0, 5) || '5000',
          'priceCurrency': 'USD'
        }))
      }
    });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, [language, content]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070d1e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Subtle top progress hairline border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-emerald-400 opacity-80" />

      {/* ─────────────────────────────────────────────────────────────
          EXECUTIVE NAVIGATION BAR
      ───────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-[#070d1e]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3">
          
          {/* Identity & Technical Title */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                if (onBackToPortfolio) {
                  onBackToPortfolio();
                } else {
                  window.location.href = '/';
                }
              }}
              className="group flex items-center gap-2.5 text-left cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
                U
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  Ulyana
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  {content.header.brandSubtitle}
                </div>
              </div>
            </button>
          </div>

          {/* Quick Jump Anchors (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-medium text-slate-300">
            <a href="#value" className="hover:text-white transition-colors">{content.header.nav.value}</a>
            <a href="#tiers" className="hover:text-white transition-colors">{content.header.nav.tiers}</a>
            <a href="#economics" className="hover:text-white transition-colors">{content.header.nav.economics}</a>
            <a href="#process" className="hover:text-white transition-colors">{content.header.nav.process}</a>
            <a href="#fit" className="hover:text-white transition-colors">{content.header.nav.fit}</a>
            <a href="#work" className="hover:text-white transition-colors">{content.header.nav.work}</a>
          </nav>

          {/* Action CTAs + Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Minimalist Premium Language Switcher (EN | RU) */}
            <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-900/90 border border-slate-700/80 font-mono text-xs shadow-inner">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Switch to English"
                aria-label="Switch to English"
              >
                EN
              </button>
              <span className="text-slate-700 px-0.5 select-none" aria-hidden="true">|</span>
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                  language === 'ru'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Переключить на русский"
                aria-label="Переключить на русский"
              >
                RU
              </button>
            </div>

            {/* Back to Portfolio Link */}
            <a
              href="https://ulyanaportfolio.ai.studio/"
              onClick={(e) => {
                if (onBackToPortfolio) {
                  e.preventDefault();
                  onBackToPortfolio();
                }
              }}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition-colors px-2 py-1.5"
            >
              <span>{content.header.viewPortfolio}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* Primary CTA */}
            <a
              href={getGeneralTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-cyan-950/40 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 fill-slate-950" />
              <span>{content.header.discussProject}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a142c] border-b border-slate-800 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-2 text-sm text-slate-300">
              <a href="#value" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.value}</a>
              <a href="#tiers" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.tiers}</a>
              <a href="#economics" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.economics}</a>
              <a href="#process" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.process}</a>
              <a href="#fit" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.fit}</a>
              <a href="#work" onClick={closeMobileMenu} className="py-1 hover:text-white">{content.header.nav.work}</a>
            </nav>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href="https://ulyanaportfolio.ai.studio/"
                onClick={(e) => {
                  if (onBackToPortfolio) {
                    e.preventDefault();
                    onBackToPortfolio();
                  }
                  closeMobileMenu();
                }}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
              >
                <span>{content.header.viewPortfolio}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getGeneralTelegramLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-bold uppercase tracking-wider"
              >
                <Send className="w-3 h-3 fill-slate-950" />
                <span>{content.header.discussProject}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1 — HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 overflow-hidden border-b border-slate-800/60">
        
        {/* Subtle structural grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Executive Subhead / Kicker (Zero-pill discipline: unboxed clean text) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-cyan-400 mb-6 tracking-wider uppercase">
            <span>{content.hero.kicker.part1}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{content.hero.kicker.part2}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{content.hero.kicker.part3}</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-7">
            {content.hero.headline}
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
            {content.hero.supporting}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={getGeneralTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-cyan-900/20 cursor-pointer"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#tiers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-all"
            >
              <span>{content.hero.secondaryCta}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Unboxed Positioning Metrics (Zero-pill discipline) */}
          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-200 font-semibold">{content.hero.metrics.investment}</span> {content.hero.metrics.investmentLabel}
            </div>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">/</span>
            <div>
              <span className="text-slate-200 font-semibold">{content.hero.metrics.partner}</span>, {content.hero.metrics.partnerLabel}
            </div>
            <span aria-hidden="true" className="text-slate-700 hidden sm:inline">/</span>
            <div>
              <span className="text-slate-200 font-semibold">{content.hero.metrics.ownership}</span> {content.hero.metrics.ownershipLabel}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2 — VALUE PROPOSITION
      ───────────────────────────────────────────────────────────── */}
      <section id="value" className="py-20 sm:py-24 bg-[#0a1226] border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {content.value.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {content.value.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Business Context */}
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {content.value.intro1}
              </p>
              <p>
                {content.value.intro2}
              </p>
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-emerald-400 font-bold">{content.value.principleLabel}</span> {content.value.principleText}
              </div>
            </div>

            {/* Right Column: Concrete Capabilities */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                {content.value.cardTitle}
              </div>

              {content.value.items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">{item.title}:</span>{' '}
                    <span className="text-slate-300">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3 — SERVICE LEVELS (4 TIERS)
      ───────────────────────────────────────────────────────────── */}
      <section id="tiers" className="py-20 sm:py-28 bg-[#070d1e] border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
              {content.tiersSection.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
              {content.tiersSection.headline}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {content.tiersSection.supporting}
            </p>
          </div>

          {/* Interactive Tier Switcher / Quick Jump (Functional segmented control) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap mb-12">
            {content.tiersSection.tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTabTier(tier.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTabTier === tier.id
                    ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-lg shadow-cyan-950/30'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{tier.name}</span>
                <span className="ml-2 font-mono text-[11px] opacity-80">({tier.range})</span>
              </button>
            ))}
          </div>

          {/* Tiers Grid Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
            {content.tiersSection.tiers.map((tier) => {
              const isSelectedTab = tier.id === activeTabTier;

              return (
                <div
                  key={tier.id}
                  id={tier.id}
                  className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                    isSelectedTab
                      ? 'bg-slate-900/95 border-2 border-cyan-400/80 shadow-2xl shadow-cyan-950/30'
                      : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                  } p-6 sm:p-8`}
                >
                  
                  {/* Top Header Information */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="font-mono text-xs text-cyan-400 font-bold tracking-wider">
                        {tier.tierNumber}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {tier.timeline}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {tier.name}
                      </h3>
                      <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                        {tier.range}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-slate-400 mb-4">
                      {content.tiersSection.typicalLabel}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed pb-6 border-b border-slate-800/80 mb-6">
                      {tier.positioning}
                    </p>

                    {/* Service Modules List */}
                    <div className="space-y-5 mb-8">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {content.tiersSection.includedTitle}
                      </div>

                      {tier.services.map((svc, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="text-sm font-semibold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                            <span>{svc.title}</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed pl-3.5">
                            {svc.description}
                          </p>
                          {svc.focusPoints && (
                            <div className="pl-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-slate-400 pt-0.5">
                              {svc.focusPoints.map((pt, pIdx) => (
                                <span key={pIdx}>
                                  {pt}
                                  {pIdx < svc.focusPoints!.length - 1 && <span className="ml-2 text-slate-600">·</span>}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tier Action Box */}
                  <div className="pt-6 border-t border-slate-800/80 mt-auto">
                    <div className="text-xs text-slate-400 mb-3">
                      <span className="text-slate-200 font-semibold">{content.tiersSection.idealFitLabel}</span> {tier.idealFor}
                    </div>

                    <a
                      href={getTelegramLinkForTier(tier.name, tier.range)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                        isSelectedTab
                          ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 shadow-md'
                          : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{tier.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Pricing Rule Clarification (Under the tiers) */}
          <div className="p-6 rounded-2xl bg-[#0a142c] border border-blue-900/60 max-w-4xl mx-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
            <div className="font-semibold text-white mb-1.5 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>{content.tiersSection.scopeClarificationTitle}</span>
            </div>
            <p>
              {content.tiersSection.scopeClarificationText}
            </p>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4 — WHY THESE PROJECTS COST $5K–50K+ (ECONOMICS)
      ───────────────────────────────────────────────────────────── */}
      <section id="economics" className="py-20 sm:py-24 bg-[#0a1226] border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {content.economics.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-4">
              {content.economics.headline}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {content.economics.supporting}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
            
            {/* Left: What Goes Into Every Engagement */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {content.economics.leftTitle}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content.economics.leftText}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                {content.economics.scopeItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The Comparative Math for Business Owners */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {content.economics.rightTitle}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-semibold text-white mb-1">{content.economics.agencyTitle}</div>
                  <p className="text-slate-400">
                    {content.economics.agencyDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="font-semibold text-white mb-1">{content.economics.engineerTitle}</div>
                  <p className="text-slate-400">
                    {content.economics.engineerDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-200">
                  <div className="font-semibold text-white mb-1">{content.economics.partnerTitle}</div>
                  <p className="text-emerald-300/90">
                    {content.economics.partnerDesc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5 — HOW I WORK (5-STEP PROCESS)
      ───────────────────────────────────────────────────────────── */}
      <section id="process" className="py-20 sm:py-24 bg-[#070d1e] border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {content.process.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug mb-3">
              {content.process.headline}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {content.process.supporting}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {content.process.steps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-xl font-bold text-cyan-400 mb-3">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6 — WHO THESE SERVICES ARE FOR (QUALIFICATION)
      ───────────────────────────────────────────────────────────── */}
      <section id="fit" className="py-20 sm:py-24 bg-[#0a1226] border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {content.fit.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {content.fit.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Good Fit */}
            <div className="p-7 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>{content.fit.goodTitle}</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {content.fit.goodItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not A Good Fit */}
            <div className="p-7 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-slate-500" />
                <span>{content.fit.badTitle}</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                {content.fit.badItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-slate-600 font-mono text-sm leading-none mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 italic">
                {content.fit.respectNote}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7 — SELECTED WORK (VERIFIED PRODUCTION CASES)
      ───────────────────────────────────────────────────────────── */}
      <section id="work" className="py-20 sm:py-28 bg-[#070d1e] border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              {content.work.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {content.work.headline}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {content.work.supporting}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.work.cases.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-mono text-cyan-400 mb-3">
                    <span>{item.category}</span>
                    <span className="text-slate-500">{item.client} · {item.role}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.name}
                  </h3>

                  <div className="space-y-3 mb-6 text-xs sm:text-sm text-slate-300">
                    <div>
                      <span className="text-slate-400 font-medium">{content.work.labels.problem}</span>{' '}
                      <span>{item.problem}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-medium">{content.work.labels.whatWasBuilt}</span>{' '}
                      <span>{item.built}</span>
                    </div>
                  </div>

                  {/* Verified Numbers */}
                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 mb-5 text-center">
                    {item.verifiedResults.map((r, rIdx) => (
                      <div key={rIdx} className="space-y-0.5">
                        <div className="font-mono font-bold text-sm sm:text-base text-emerald-400">
                          {r.metric}
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  {item.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8 — FINAL CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-[#0a142c] to-[#070d1e] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4">
            {content.finalCta.kicker}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            {content.finalCta.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
            {content.finalCta.supporting}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={getGeneralTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl shadow-cyan-900/30 cursor-pointer"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>{content.finalCta.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://ulyanaportfolio.ai.studio/"
              onClick={(e) => {
                if (onBackToPortfolio) {
                  e.preventDefault();
                  onBackToPortfolio();
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 font-medium text-sm transition-all"
            >
              <span>{content.finalCta.viewPortfolio}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <div className="text-xs font-mono text-slate-400 space-y-1">
            <div>{content.finalCta.directEmailLabel} <a href="mailto:ulyanafullstack@gmail.com" className="text-cyan-400 hover:underline">ulyanafullstack@gmail.com</a></div>
            <div>{content.finalCta.directTelegramLabel} <a href="https://t.me/u_ulyana_dev" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@u_ulyana_dev</a></div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MINIMAL EXECUTIVE FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="py-8 bg-[#050914] border-t border-slate-800/80 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-300">Ulyana</span>
            <span>·</span>
            <span>{content.footer.brandSubtitle}</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href="https://ulyanaportfolio.ai.studio/" 
              onClick={(e) => {
                if (onBackToPortfolio) {
                  e.preventDefault();
                  onBackToPortfolio();
                }
              }}
              className="hover:text-slate-300 transition-colors"
            >
              {content.footer.mainPortfolioLink}
            </a>
            <a href="mailto:ulyanafullstack@gmail.com" className="hover:text-slate-300 transition-colors">
              ulyanafullstack@gmail.com
            </a>
            <a href="https://t.me/u_ulyana_dev" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
