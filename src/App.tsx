import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CoreValuePillars } from './components/CoreValuePillars';
import { CasesSection } from './components/CasesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { TelegramShowcase } from './components/TelegramShowcase';
import { SoloVsAgency } from './components/SoloVsAgency';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesPricing } from './components/ServicesPricing';
import { AutomationReviewsSection } from './components/AutomationReviewsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingNavDock } from './components/FloatingNavDock';
import { GlobalAmbientVisualBackground } from './components/GlobalAmbientVisualBackground';
import { MotionReveal } from './components/MotionReveal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { CaseStudy } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { HighTicketSystemsPage } from './pages/HighTicketSystemsPage';

interface PortfolioAppProps {
  onNavigateToSystems: () => void;
}

function PortfolioApp({ onNavigateToSystems }: PortfolioAppProps) {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>(() => {
    return language === 'en' ? 'Turn-key Website' : 'Сайт под ключ';
  });
  const [contactNotes, setContactNotes] = useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    scrollToSection('contact');
  };

  const handleExploreCases = () => {
    scrollToSection('cases');
  };

  const handleStartProjectWithCase = (caseItem: CaseStudy) => {
    setSelectedService(language === 'en' ? 'Full-Cycle Website' : 'Сайт под ключ');
    setContactNotes(
      language === 'en'
        ? `Hello Ulyana! I was impressed by the case study "${caseItem.title}" (${caseItem.url}). I'd like to build a project with comparable conversion architecture for my business.`
        : `Здравствуйте, Ульяна! Меня заинтересовал кейс "${caseItem.title}" (${caseItem.url}). Хочу разработать решение с аналогичной структурой и показателями окупаемости для моего бизнеса.`
    );
    scrollToSection('contact');
  };

  const handleApplyRoiCalculation = (summaryText: string) => {
    setContactNotes(summaryText);
    scrollToSection('contact');
  };

  const handleDiscussAutomation = (summaryText: string) => {
    setSelectedService(language === 'en' ? 'Process Automation' : 'Автоматизация процессов');
    setContactNotes(summaryText);
    scrollToSection('contact');
  };

  const handleSelectPricingPackage = (pkgTitle: string) => {
    setSelectedService(pkgTitle);
    scrollToSection('contact');
  };

  const handleStartProjectWithBot = (botName: string) => {
    setSelectedService(language === 'en' ? 'Automated Chatbot' : 'Автоматический чат-бот');
    setContactNotes(
      language === 'en'
        ? `Hello Ulyana! I'm interested in the bot "${botName}". I'd like to deploy a high-converting Telegram bot and workflow automation for my brand.`
        : `Здравствуйте, Ульяна! Меня заинтересовал бот "${botName}". Хочу запустить аналогичного Telegram-бота с автоматизацией заявок и интеграцией для моего бизнеса.`
    );
    scrollToSection('contact');
  };

  const handleOpenFaqQuestion = (customNote?: string) => {
    if (customNote) {
      setContactNotes(customNote);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#fafcfe] text-slate-900 selection:bg-blue-600/15 selection:text-blue-900 overflow-x-hidden relative font-sans">
      
      {/* Desktop bespoke adaptive cursor */}
      <CustomCursor />

      {/* Subtle top horizontal scroll progress indicator */}
      <ScrollProgressBar />

      {/* Whole-site aesthetic digital background: Web nodes, circuit data packets, code tokens & cyber grid */}
      <GlobalAmbientVisualBackground />

      {/* Header */}
      <Header 
        onOpenContact={handleOpenContact} 
        onNavigateToSystems={onNavigateToSystems} 
      />

      {/* Main Content: High-converting sequence */}
      <main className="overflow-x-hidden relative z-10">
        {/* 1. Hero: Who I am, What I do, For whom, Main benefit in numbers, Above-the-fold CTA */}
        <Hero 
          onOpenContact={handleOpenContact} 
          onExploreCases={handleExploreCases} 
          onDiscussAutomation={handleDiscussAutomation}
        />

        {/* 2. Trust & Proof Block */}
        {/* 2.1 Core Value & Client Problems -> Concrete Solutions */}
        <CoreValuePillars 
          onOpenContact={handleOpenContact} 
        />

        {/* 2.2 10 Detailed Production Cases & 9 Telegram Bots with verified ROI numbers & live links */}
        <CasesSection 
          onStartProjectWithCase={handleStartProjectWithCase} 
          onSelectBotForOrder={handleStartProjectWithBot}
          onDiscussAutomation={handleDiscussAutomation}
        />

        {/* 2.3 Verified Automation & AI Client Reviews */}
        <AutomationReviewsSection 
          onDiscussAutomation={handleDiscussAutomation}
        />

        {/* 2.4 Verified Client Reviews & Social Proof */}
        <ReviewsSection />

        {/* 2.4 Solo Expert vs Agency Comparison: Direct Accountability */}
        <SoloVsAgency 
          onOpenContact={handleOpenContact} 
        />

        {/* 2.5 Conversion-Engineered Tech Stack & Full-Stack Skills */}
        <TechStackSection 
          onDiscussTech={handleDiscussAutomation}
        />

        {/* 3. Services & Transparent Pricing Block */}
        {/* 3.1 Transparent Service Packages with "from ..." prices */}
        <ServicesPricing 
          onSelectService={handleSelectPricingPackage} 
        />

        {/* 3.2 Interactive ROI & Reclaimed Hours Calculator */}
        <RoiCalculator 
          onOpenContactWithMetrics={handleApplyRoiCalculation} 
          onDiscussAutomation={handleDiscussAutomation}
        />

        {/* 3.3 Telegram Mini Apps & Automated Bots Showcase */}
        <TelegramShowcase 
          onOpenContact={handleOpenContact} 
          onSelectBotForOrder={handleStartProjectWithBot}
        />

        {/* 4. Interactive Roadmap: 01 Inquiry -> 05 Launch & 30-Day SLA */}
        <ProcessSection 
          onOpenContact={handleOpenContact} 
        />

        {/* 5. Objections Handling: Straightforward FAQ with Honest Answers */}
        <FaqSection 
          onOpenContact={handleOpenFaqQuestion} 
        />

        {/* 6. Direct Contact & Collaboration Hub */}
        <ContactSection 
          initialService={selectedService}
          initialNotes={contactNotes}
        />
      </main>

      {/* Footer */}
      <Footer onNavigateToSystems={onNavigateToSystems} />

      {/* Floating Ergonomic Navigation Dock (Bottom Island) */}
      <FloatingNavDock />

    </div>
  );
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'systems'>(() => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    if (
      path === '/systems' || 
      path === '/high-ticket' || 
      path === '/b2b' || 
      path === '/enterprise' || 
      window.location.hash === '#systems'
    ) {
      return 'systems';
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (
        path === '/systems' || 
        path === '/high-ticket' || 
        path === '/b2b' || 
        path === '/enterprise' || 
        window.location.hash === '#systems'
      ) {
        setCurrentRoute('systems');
      } else {
        setCurrentRoute('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToSystems = () => {
    window.history.pushState({}, '', '/systems');
    setCurrentRoute('systems');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <LanguageProvider>
      {currentRoute === 'systems' ? (
        <HighTicketSystemsPage onBackToPortfolio={navigateToHome} />
      ) : (
        <PortfolioApp onNavigateToSystems={navigateToSystems} />
      )}
    </LanguageProvider>
  );
}
