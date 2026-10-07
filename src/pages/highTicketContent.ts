export interface HighTicketTierService {
  title: string;
  description: string;
  focusPoints?: string[];
}

export interface HighTicketTier {
  id: 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4';
  tierNumber: string;
  name: string;
  range: string;
  positioning: string;
  timeline: string;
  idealFor: string;
  ctaText: string;
  services: HighTicketTierService[];
}

export interface HighTicketCaseStudy {
  name: string;
  client: string;
  role: string;
  category: string;
  problem: string;
  built: string;
  verifiedResults: {
    metric: string;
    label: string;
  }[];
  tech: string[];
}

export interface HighTicketLocaleContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brandSubtitle: string;
    nav: {
      value: string;
      tiers: string;
      economics: string;
      process: string;
      fit: string;
      work: string;
    };
    viewPortfolio: string;
    discussProject: string;
  };
  hero: {
    kicker: {
      part1: string;
      part2: string;
      part3: string;
    };
    headline: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: {
      investment: string;
      investmentLabel: string;
      partner: string;
      partnerLabel: string;
      ownership: string;
      ownershipLabel: string;
    };
  };
  value: {
    kicker: string;
    headline: string;
    intro1: string;
    intro2: string;
    principleLabel: string;
    principleText: string;
    cardTitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  tiersSection: {
    kicker: string;
    headline: string;
    supporting: string;
    typicalLabel: string;
    includedTitle: string;
    idealFitLabel: string;
    scopeClarificationTitle: string;
    scopeClarificationText: string;
    tiers: HighTicketTier[];
  };
  economics: {
    kicker: string;
    headline: string;
    supporting: string;
    leftTitle: string;
    leftText: string;
    scopeItems: string[];
    rightTitle: string;
    agencyTitle: string;
    agencyDesc: string;
    engineerTitle: string;
    engineerDesc: string;
    partnerTitle: string;
    partnerDesc: string;
  };
  process: {
    kicker: string;
    headline: string;
    supporting: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  fit: {
    kicker: string;
    headline: string;
    goodTitle: string;
    goodItems: string[];
    badTitle: string;
    badItems: string[];
    respectNote: string;
  };
  work: {
    kicker: string;
    headline: string;
    supporting: string;
    labels: {
      problem: string;
      whatWasBuilt: string;
    };
    cases: HighTicketCaseStudy[];
  };
  finalCta: {
    kicker: string;
    headline: string;
    supporting: string;
    primaryCta: string;
    viewPortfolio: string;
    directEmailLabel: string;
    directTelegramLabel: string;
  };
  footer: {
    brandSubtitle: string;
    mainPortfolioLink: string;
  };
}

export const HIGH_TICKET_CONTENT: Record<'en' | 'ru', HighTicketLocaleContent> = {
  en: {
    meta: {
      title: 'Custom AI Systems & Business Software ($5K–$50K+) | Ulyana',
      description: 'Engineering custom AI systems, revenue infrastructure, and business software that solve expensive operational bottlenecks for revenue-generating companies ($5K–$50K+).'
    },
    header: {
      brandSubtitle: 'Custom Systems & AI Software',
      nav: {
        value: 'The Value',
        tiers: 'Service Levels',
        economics: 'Why $5K–50K',
        process: 'How I Work',
        fit: 'Client Fit',
        work: 'Selected Work'
      },
      viewPortfolio: 'View portfolio',
      discussProject: 'Discuss your project'
    },
    hero: {
      kicker: {
        part1: 'Engineering Architecture',
        part2: 'International B2B',
        part3: 'Direct Founder Accountability'
      },
      headline: 'Custom AI systems and software built around your business.',
      supporting: 'I build custom AI automation, software, and digital systems that reduce manual work, improve sales processes, and create scalable infrastructure for companies with existing revenue. Projects typically start at $5,000.',
      primaryCta: 'Discuss your project',
      secondaryCta: 'See what I build',
      metrics: {
        investment: '$5,000 – $50,000+',
        investmentLabel: 'typical investment',
        partner: 'Single senior partner',
        partnerLabel: 'no agency middleman',
        ownership: '100% production code',
        ownershipLabel: '& private ownership'
      }
    },
    value: {
      kicker: 'The Fundamental Difference',
      headline: 'You are not paying for lines of code.',
      intro1: "Most businesses don't need another generic website or disconnected SaaS subscription. They have operational friction: high-intent inquiries slipping through the cracks, senior staff spending hours copying data between tools, or sales reps burdened with manual qualification.",
      intro2: 'When you hire me, you are not buying generic design mockups or billable hours. You are investing in a durable digital asset that eliminates expensive bottlenecks and scales your commercial capacity without proportionally increasing headcount.',
      principleLabel: 'Guiding principle:',
      principleText: 'Every system is architected around your actual business model and revenue workflows—never forcing your operations into rigid third-party templates.',
      cardTitle: 'What A Custom System Accomplishes:',
      items: [
        { title: 'Recover lost leads', desc: 'Engage high-intent prospects within 30 seconds before they look elsewhere.' },
        { title: 'Reduce repetitive manual work', desc: 'Free key team members from administrative intake, triage, and scheduling.' },
        { title: 'Accelerate response times', desc: 'Answer complex product and pricing queries instantly 24/7.' },
        { title: 'Improve sales conversion', desc: 'Qualify demand, handle objections, and guide buyers straight to booking.' },
        { title: 'Automate business operations', desc: 'Orchestrate contracts, invoices, onboarding, and notifications automatically.' },
        { title: 'Connect disconnected tools', desc: 'Unify your CRM, database, messaging channels, and payment gateways into one stack.' },
        { title: 'Provide reliable infrastructure', desc: 'Clean, documented, maintainable code running on enterprise cloud foundations.' },
        { title: 'Replace fragmented workflows', desc: 'Retire fragile spreadsheets and multi-step manual handoffs permanently.' }
      ]
    },
    tiersSection: {
      kicker: 'Investment Architecture',
      headline: 'Four Levels of Engagement',
      supporting: 'These are project investment ranges based on business scope, architectural complexity, and operational impact—not rigid SaaS packages.',
      typicalLabel: 'Typical project investment',
      includedTitle: 'Included Systems & Capabilities:',
      idealFitLabel: 'Ideal fit:',
      scopeClarificationTitle: 'Investment Transparency: How Scope Is Determined',
      scopeClarificationText: 'These are not rigid boxes. The exact final investment is tailored during our technical discovery call based on your number of workflows, API and CRM complexity, database requirements, AI model context requirements, and internal user roles.',
      tiers: [
        {
          id: 'tier-1',
          tierNumber: 'TIER 01',
          name: 'Focused Solutions',
          range: '$5,000 – $8,000',
          positioning: 'Targeted systems engineered to solve one clearly defined, high-friction business bottleneck.',
          timeline: 'Typically 2–3 weeks to deployment',
          idealFor: 'Businesses losing qualified leads to slow response times or drowning in repetitive manual inquiries.',
          ctaText: 'Have one process that needs fixing?',
          services: [
            {
              title: 'AI Lead Qualification',
              description: 'Automatically analyzes incoming inquiries, extracts key customer intent and project budget, scores fit against your ideal client profile, and routes qualified buyers directly to the right specialist.',
              focusPoints: ['Real-time qualification', 'Sub-minute response', 'Smart sales routing', 'Zero manual screening fatigue']
            },
            {
              title: 'AI Booking System',
              description: 'Engages prospects, determines specific requirements, recommends the optimal service or package, and guides qualified prospects through confirmed calendar booking without email tag.',
              focusPoints: ['Intent clarification', 'Automated calendar sync', 'Frictionless client scheduling', 'Reduced booking drop-offs']
            },
            {
              title: 'Lead Follow-up Automation',
              description: 'Multi-touch automated nurturing across messaging and email for high-intent leads that did not convert immediately, keeping your brand top-of-mind and logging all updates to your CRM.',
              focusPoints: ['Reclaiming missed opportunities', 'Consistent multi-channel cadences', 'CRM sync and activity logging', 'Context-aware messaging']
            },
            {
              title: 'AI Customer Support',
              description: 'Intelligent support system grounded exclusively in your verified product documentation, FAQs, and service guidelines to resolve repetitive customer inquiries 24/7 and route complex edge cases to human staff.',
              focusPoints: ['Instant accurate resolution', 'Doc and knowledge-base retrieval', 'Escalation with full transcript', 'Continuous answer validation']
            },
            {
              title: 'Website + Conversion Automation',
              description: 'Not a cosmetic redesign. We transform your public web presence into an active intake system engineered around conversion paths, qualification questionnaires, automated scheduling, and CRM integrations.',
              focusPoints: ['Conversion-first layout', 'Built-in qualification funnels', 'Real-time database integration', 'Measurable buyer velocity']
            }
          ]
        },
        {
          id: 'tier-2',
          tierNumber: 'TIER 02',
          name: 'Complete Systems',
          range: '$8,000 – $15,000',
          positioning: 'End-to-end architectures connecting multiple interdependent stages of your business workflow.',
          timeline: 'Typically 3–5 weeks to deployment',
          idealFor: 'Companies with established inbound traffic or lead flow seeking a unified, leak-free sales and operations engine.',
          ctaText: 'Need more than one automation?',
          services: [
            {
              title: 'AI Sales Agent',
              description: 'An autonomous agent that converses with prospective clients, answers detailed technical or pricing questions, addresses common objections, gathers project scope, and drives prospects toward a concrete buying decision.',
              focusPoints: ['Autonomous buyer dialogue', 'Contextual objection handling', 'Budget and timeline discovery', 'Direct handoff to closing calls']
            },
            {
              title: 'AI Revenue System',
              description: 'A unified commercial pipeline linking every touchpoint: Traffic → Website → AI Intake → Qualification → CRM Enrichment → Automated Follow-up → Calendar Booking → Sales Handoff. Designed as a cohesive engine rather than loose scripts.',
              focusPoints: ['Unified commercial journey', 'Zero lead leakage', 'End-to-end visibility', 'Automated pipeline progression']
            },
            {
              title: 'Sales Process Automation',
              description: 'Comprehensive automation spanning your entire sales pipeline: lead capture, automated company data enrichment, lead scoring, rep assignment, conditional follow-ups, internal Slack/Telegram notifications, and deal tracking.',
              focusPoints: ['Pipeline-wide orchestration', 'Instant team alerting', 'Automated CRM deal staging', 'Executive conversion analytics']
            },
            {
              title: 'Customer Operations Automation',
              description: 'Systematizing repetitive client onboarding, invoice dispatch, document generation, and operational handoffs so your team can handle significantly more volume without adding operational headcount.',
              focusPoints: ['Client onboarding workflows', 'Automated invoice and contract generation', 'Cross-tool data synchronization', 'Operational throughput scaling']
            },
            {
              title: 'Website + CRM + AI + Automation Stack',
              description: 'Your marketing frontend, CRM database, and AI automation layer designed from day one as a single interconnected system, eliminating data silos and broken Zapier workarounds.',
              focusPoints: ['Custom React/Next.js frontend', 'Direct CRM and database APIs', 'Autonomous backend workers', 'Reliable data pipelines']
            }
          ]
        },
        {
          id: 'tier-3',
          tierNumber: 'TIER 03',
          name: 'Business Infrastructure',
          range: '$15,000 – $30,000+',
          positioning: 'Deeper operational transformation for companies whose core workflows have outgrown off-the-shelf software.',
          timeline: 'Typically 5–8 weeks to deployment',
          idealFor: 'Scaling businesses where operational bottlenecks, manual coordination, and tool fragmentation cost tens of thousands monthly.',
          ctaText: "Have a process that existing tools can't handle?",
          services: [
            {
              title: 'AI Revenue Infrastructure',
              description: 'A high-throughput infrastructure layer spanning marketing acquisition, inbound/outbound triage, AI qualification, CRM orchestration, real-time analytics, and automated billing workflows across your company.',
              focusPoints: ['Multi-channel architecture', 'High-volume data processing', 'Automated lead scoring models', 'Management intelligence dashboards']
            },
            {
              title: 'Sales Department Automation',
              description: 'Automation across your entire sales organization rather than a single isolated funnel. Includes lead intake, automated account enrichment, rep copilots, CRM record updating, and pipeline analytics.',
              focusPoints: ['Entire department coverage', 'Automated rep intelligence', 'Hands-free CRM maintenance', 'Predictive pipeline reporting']
            },
            {
              title: 'Operations Automation',
              description: 'Orchestrating complex internal operations: automated data parsing, multi-stakeholder approval chains, document routing, employee onboarding workflows, and automated cross-department handoffs.',
              focusPoints: ['Cross-department pipelines', 'Multi-level approval chains', 'Automated task routing', 'Error logging and self-healing webhooks']
            },
            {
              title: 'Custom AI System',
              description: 'Purpose-built AI workflows engineered for non-standard business logic, proprietary datasets, and specialized compliance or privacy standards that generic third-party SaaS products cannot support.',
              focusPoints: ['Custom prompt engineering & evals', 'Proprietary knowledge grounding', 'Fine-tuned parsing logic', 'Dedicated API infrastructure']
            },
            {
              title: 'Custom Business Software',
              description: 'Tailored internal web software built specifically around your company’s unique workflows, instead of forcing your team to bend their operational processes around rigid generic SaaS subscriptions.',
              focusPoints: ['Tailored to your exact SOPs', 'Role-based access control', 'Zero per-seat licensing fees', 'Complete data sovereignty']
            }
          ]
        },
        {
          id: 'tier-4',
          tierNumber: 'TIER 04',
          name: 'Built Around Your Business',
          range: '$20,000 – $50,000+',
          positioning: 'Comprehensive product development and bespoke digital infrastructure engineered for high-scale enterprise operations.',
          timeline: 'Custom milestone roadmaps (typically 8–12+ weeks)',
          idealFor: 'Founders building revenue-generating software products or established companies replacing disconnected legacy toolchains.',
          ctaText: "Let's discuss the system you need.",
          services: [
            {
              title: 'AI-Powered SaaS MVP',
              description: 'Full-cycle product architecture and development for founders turning validated demand into a production-grade commercial software product. Built to scale securely from user one to enterprise pilots.',
              focusPoints: ['System architecture & UX/UI', 'Scalable React/TypeScript & Node backend', 'Secure authentication & RBAC', 'AI pipeline integration', 'Stripe recurring billing & webhooks', 'Admin portals & analytics dashboards']
            },
            {
              title: 'Custom Business Platform',
              description: 'A comprehensive, unified digital platform designed from scratch around your specific business model, customer portal, operational team management, and multi-tier integrations.',
              focusPoints: ['End-to-end proprietary software', 'Client-facing portals & dashboards', 'Internal management backoffice', 'High-throughput database architecture']
            },
            {
              title: 'AI Sales Department Infrastructure',
              description: 'A large-scale commercial operating system combining multi-agent qualification, automated outbound and inbound handling, CRM orchestration, and human sales rep workflows with real-time auditability.',
              focusPoints: ['Enterprise-scale sales routing', 'Multi-tier agent orchestration', 'Robust human-in-the-loop triggers', 'Comprehensive SLA monitoring']
            },
            {
              title: 'Internal Operating System',
              description: 'A bespoke internal operational platform connecting your company’s disparate workflows, operational databases, team members, customers, and background automations into one coherent system.',
              focusPoints: ['Replaces fragile spreadsheets', 'Centralizes core business data', 'Integrates legacy software & APIs', 'Scales operations without headcount bloat']
            }
          ]
        }
      ]
    },
    economics: {
      kicker: 'The Economics Behind The Price',
      headline: 'Why these projects cost $5,000 to $50,000+',
      supporting: 'The price is based on the complexity and value of the system, not the number of screens or hours spent coding.',
      leftTitle: 'Comprehensive Engineering Scope:',
      leftText: 'A serious business system requires multi-disciplinary execution that touches critical commercial operations:',
      scopeItems: [
        'Business process analysis',
        'Technical solution architecture',
        'Conversion UX/UI engineering',
        'Custom fullstack development',
        'AI prompt engineering & evals',
        'Third-party & CRM API integrations',
        'Relational database architecture',
        'Autonomous webhook pipelines',
        'Automated security & validation',
        'Cloud infrastructure deployment',
        'SLA monitoring & error alerts',
        'Standard operating documentation'
      ],
      rightTitle: 'Comparing Alternatives:',
      agencyTitle: 'Traditional Agency ($80K–$150K+)',
      agencyDesc: 'High overhead, account managers, layers of bureaucracy, and junior developers executing the actual code.',
      engineerTitle: 'Full-Time Senior Engineer ($140K–$180K/year)',
      engineerDesc: 'Requires payroll taxes, management overhead, recruitment cycles, and benefits for ongoing single-role employment.',
      partnerTitle: 'Single Senior Technical Partner ($5K–$50K)',
      partnerDesc: 'Direct access to a senior developer and product designer who understands unit economics, moves in weeks instead of quarters, and takes complete accountability for the finished system.'
    },
    process: {
      kicker: 'Execution Methodology',
      headline: 'How I Work',
      supporting: 'A disciplined five-step delivery model designed for predictability, transparent milestones, and zero operational disruption.',
      steps: [
        {
          num: '01',
          title: 'Discovery',
          desc: 'Deep analysis of your business model, current commercial workflows, team bottlenecks, and toolchain dependencies.'
        },
        {
          num: '02',
          title: 'System Design',
          desc: 'Defining exactly what should be automated, rebuilt, or connected. Delivering a technical blueprint and interface wireframes.'
        },
        {
          num: '03',
          title: 'Build',
          desc: 'Developing the production software, AI pipelines, database schemas, and API integrations with weekly working demo reviews.'
        },
        {
          num: '04',
          title: 'Launch',
          desc: 'Staged deployment into your live business infrastructure, end-to-end load testing, and hands-on staff walkthroughs.'
        },
        {
          num: '05',
          title: 'Improve',
          desc: 'Active production monitoring, bottleneck tracking, performance optimizations, and architectural expansion as your revenue scales.'
        }
      ]
    },
    fit: {
      kicker: 'Mutual Qualification',
      headline: 'Who These Services Are For',
      goodTitle: 'A Strong Fit If You Are:',
      goodItems: [
        'A company already generating consistent revenue with established product-market fit.',
        'Receiving meaningful inbound demand where delayed manual responses cause drop-offs.',
        'A team losing dozens of hours weekly to repetitive data entry and administrative screening.',
        'Managing disconnected SaaS applications that do not synchronize reliably.',
        'Scaling sales or operations and want to expand capacity without bloating headcount.',
        'A founder building a serious AI-powered SaaS product with validated customer interest.',
        'In a business where a 10–20% improvement in operational speed produces significant financial return.'
      ],
      badTitle: 'Not Necessarily A Fit If You Are:',
      badItems: [
        'Looking for a $300 quick template website or cosmetic graphic tweak.',
        'Seeking a simple static brochure site with no business logic, forms, or automation.',
        'Looking for one-off isolated scripts without a broader business context.',
        'Undertaking a speculative project without a clear commercial objective or revenue justification.',
        'Expecting unlimited scope alterations without timeline adjustments under a fixed fee.'
      ],
      respectNote: 'I respect all business stages. If your project is a simple brochure site, there are many competent freelancers who specialize in small web templates at lower price points.'
    },
    work: {
      kicker: 'Verified Production Results',
      headline: 'Selected Work',
      supporting: 'A sample of live systems built for international founders and business operators. Zero invented numbers.',
      labels: {
        problem: 'Problem:',
        whatWasBuilt: 'What Was Built:'
      },
      cases: [
        {
          name: 'Revenue Engine: Multi-Agent Sales System',
          client: 'Alexander V.',
          role: 'B2B Founder',
          category: 'AI Agents & Inbound Automation',
          problem: 'Manual lead prospecting, multi-point verification, and qualification consumed the founder’s entire workday, limiting bandwidth for high-ticket closing conversations.',
          built: 'Engineered an autonomous system featuring multi-stage AI qualification pipelines, prospect scoring, and direct Telegram webhook dispatch that screens prospects before booking calls.',
          verifiedResults: [
            { metric: '25 hrs/wk', label: 'Reclaimed founder time' },
            { metric: '24%', label: 'Reply rate conversion' },
            { metric: '2.6x', label: 'Growth in qualified calls' }
          ],
          tech: ['n8n Workflows', 'Claude & OpenAI APIs', 'Telegram Bot API', 'Custom Webhooks']
        },
        {
          name: 'Morozov Legal Shield: Corporate Intake & Document Triage',
          client: 'Sergei Morozov',
          role: 'Managing Partner',
          category: 'B2B Qualification & Operations',
          problem: 'Senior corporate attorneys were spending 50% of billable hours triaging low-intent inquiries and manually collecting preliminary case documentation.',
          built: 'Architected a multi-step diagnostic intake application with automatic document validation, scope categorization, and prioritized routing for enterprise retainers.',
          verifiedResults: [
            { metric: '$18,400', label: 'Intake triage cost savings' },
            { metric: '+52%', label: 'Retained B2B contracts' },
            { metric: '15 min', label: 'Inquiry response time (down from 24h)' }
          ],
          tech: ['React', 'TypeScript', 'Automated Triage Engine', 'CRM Webhook']
        },
        {
          name: 'Smart Science Academy: Automated Student Portal',
          client: 'Dmitry Romanov',
          role: 'Academy Founder',
          category: 'Custom Business Software & Onboarding',
          problem: 'Founder spent 4 hours daily manually sending learning materials, verifying payments, and following up with parents, preventing student enrollment growth.',
          built: 'Built a custom educational platform with structured course catalogues, automated placement assessments, access provisioning, and automated CRM retention triggers.',
          verifiedResults: [
            { metric: '3.1x', label: 'Trial lesson signups' },
            { metric: '30 hrs/mo', label: 'Reclaimed admin hours' },
            { metric: '94%', label: 'Course completion rate' }
          ],
          tech: ['React', 'TypeScript', 'Interactive Diagnostics', 'CRM Automation']
        },
        {
          name: 'Garnet & Thyme: Booking Engine & Event Configurator',
          client: 'Mark Brown',
          role: 'Managing Partner',
          category: 'Custom Booking Engine & Direct Revenue',
          problem: 'High commission fees paid to third-party aggregator portals and constant phone line congestion during peak hours resulting in lost customer reservations.',
          built: 'Created a high-speed direct booking engine with interactive seating zones, dynamic deposit processing, custom banquet configuration, and automated messaging confirmations.',
          verifiedResults: [
            { metric: '+140%', label: 'Direct table reservations' },
            { metric: '-85%', label: 'Hostess phone call volume' },
            { metric: '$3,400/mo', label: 'Saved on third-party aggregator commissions' }
          ],
          tech: ['TypeScript', 'Next Architecture', 'Real-Time Table Allocation', 'Fast API Hooks']
        }
      ]
    },
    finalCta: {
      kicker: 'Next Step',
      headline: 'Have a business problem worth solving?',
      supporting: "If you already know what needs to be built, or you only know that something in your workflow is slowing the business down, send me the context. I'll help determine what the right system looks like.",
      primaryCta: 'Discuss your project',
      viewPortfolio: 'View portfolio',
      directEmailLabel: 'Direct email:',
      directTelegramLabel: 'Direct Telegram:'
    },
    footer: {
      brandSubtitle: 'Custom AI Systems & Software Engineering',
      mainPortfolioLink: 'Main Portfolio (ulyanaportfolio.ai.studio)'
    }
  },
  ru: {
    meta: {
      title: 'Кастомные AI-системы и разработка софта ($5K–$50K+) | Ульяна',
      description: 'Разработка кастомных AI-систем, инфраструктуры продаж и бизнес-софта для компаний с выручкой, устраняющих дорогие операционные узкие места ($5K–$50K+).'
    },
    header: {
      brandSubtitle: 'Кастомные системы & AI-софт',
      nav: {
        value: 'Ценность',
        tiers: 'Уровни услуг',
        economics: 'Почему $5K–50K',
        process: 'Как я работаю',
        fit: 'Критерии отбора',
        work: 'Кейсы'
      },
      viewPortfolio: 'Посмотреть портфолио',
      discussProject: 'Обсудить ваш проект'
    },
    hero: {
      kicker: {
        part1: 'Инженерная архитектура',
        part2: 'Международный B2B',
        part3: 'Прямая ответственность разработчика'
      },
      headline: 'Кастомные AI-системы и софт под задачи вашего бизнеса.',
      supporting: 'Я проектирую и создаю кастомную AI-автоматизацию, программное обеспечение и цифровые системы, которые сокращают ручной труд, усиливают продажи и создают масштабируемую инфраструктуру для компаний с выручкой. Проекты обычно начинаются от $5,000.',
      primaryCta: 'Обсудить ваш проект',
      secondaryCta: 'Что я создаю',
      metrics: {
        investment: '$5,000 – $50,000+',
        investmentLabel: 'типичный бюджет проекта',
        partner: 'Один senior-разработчик',
        partnerLabel: 'без агентской бюрократии',
        ownership: '100% продакшн-код',
        ownershipLabel: 'в вашей собственности'
      }
    },
    value: {
      kicker: 'Фундаментальная разница',
      headline: 'Вы платите не за строки кода.',
      intro1: 'Большинству бизнесов не нужен очередной шаблонный сайт или ещё одна разрозненная SaaS-подписка. У них есть реальные операционные узкие места: потеря горячих заявок из-за долгого ответа, часы работы ключевых сотрудников на рутинный перенос данных или отдел продаж, перегруженный первичным скринингом.',
      intro2: 'Работая со мной, вы инвестируете в надежный цифровой актив, который устраняет дорогие узкие места и масштабирует коммерческую пропускную способность бизнеса без пропорционального раздувания штата.',
      principleLabel: 'Главный принцип:',
      principleText: 'Каждая система проектируется вокруг вашей реальной бизнес-модели и воронок выручки, а не натягивает процессы на чужие шаблонные решения.',
      cardTitle: 'Что дает внедрение кастомной системы:',
      items: [
        { title: 'Возврат потерянных лидов', desc: 'Вовлечение целевых клиентов за 30 секунд, пока они не ушли к конкурентам.' },
        { title: 'Сокращение ручного труда', desc: 'Освобождение ключевой команды от административного интейка, сортировки и назначения встреч.' },
        { title: 'Мгновенный отклик 24/7', desc: 'Точные ответы на сложные технические и ценовые вопросы в любое время суток.' },
        { title: 'Рост конверсии в продажи', desc: 'Квалификация спроса, закрытие возражений и ведение покупателя прямо к бронированию.' },
        { title: 'Автоматизация операций', desc: 'Автоматическое формирование договоров, счетов, онбординга клиентов и внутренних оповещений.' },
        { title: 'Объединение разрозненных сервисов', desc: 'Связка вашей CRM, баз данных, мессенджеров и платежных шлюзов в единую экосистему.' },
        { title: 'Надежная инженерная база', desc: 'Чистый, документированный, поддерживаемый код на надежном облачном стеке.' },
        { title: 'Замена хрупких цепочек', desc: 'Отказ от ненадежных таблиц и многошаговых ручных передач информации навсегда.' }
      ]
    },
    tiersSection: {
      kicker: 'Архитектура инвестиций',
      headline: 'Четыре уровня сотрудничества',
      supporting: 'Это инвестиционные диапазоны проектов, рассчитанные исходя из бизнес-масштаба, технической сложности и финансового эффекта, а не жесткие тарифные сетки.',
      typicalLabel: 'Типичный бюджет проекта',
      includedTitle: 'Включенные системы и возможности:',
      idealFitLabel: 'Кому подходит:',
      scopeClarificationTitle: 'Прозрачность инвестиций: как определяется итоговый скоуп',
      scopeClarificationText: 'Эти категории не являются жесткими рамками. Точный бюджет фиксируется на этапе технического аудита с учетом количества процессов, сложности API и CRM, требований к базам данных, контексту AI-моделей и ролевой модели пользователей.',
      tiers: [
        {
          id: 'tier-1',
          tierNumber: 'УРОВЕНЬ 01',
          name: 'Точечные решения',
          range: '$5,000 – $8,000',
          positioning: 'Целевые системы для устранения одного конкретного, наиболее затратного операционного узкого места бизнеса.',
          timeline: 'Обычно 2–3 недели до запуска в продакшн',
          idealFor: 'Бизнесы, теряющие квалифицированные лиды из-за задержек ответа или тонущие в повторяющихся рутинных запросах.',
          ctaText: 'Есть один процесс, который нужно починить?',
          services: [
            {
              title: 'AI Lead Qualification',
              description: 'Автоматический анализ входящих заявок, оценка соответствия портрету идеального клиента (ICP), извлечение бюджета и моментальная передача целевого покупателя нужному специалисту.',
              focusPoints: ['Квалификация в реальном времени', 'Ответ до 60 секунд', 'Умная маршрутизация сделок', 'Ноль рутинного отсева вручную']
            },
            {
              title: 'AI Booking System',
              description: 'Интеллектуальное ведение диалога с клиентом, определение ключевых потребностей, рекомендация подходящей услуги и проведение до подтвержденной записи в календаре без переписок.',
              focusPoints: ['Выявление намерения', 'Автосинхронизация календаря', 'Бесшовная запись клиентов', 'Снижение отвалов на этапе выбора времени']
            },
            {
              title: 'Lead Follow-up Automation',
              description: 'Многоканальные цепочки дожима в мессенджерах и email для теплых лидов, которые не купили сразу. Сохранение контакта с брендом и автоматическое обновление статусов в CRM.',
              focusPoints: ['Возврат упущенных возможностей', 'Системные многоканальные сценарии', 'Фиксация всех активностей в CRM', 'Контекстные персонализированные сообщения']
            },
            {
              title: 'AI Customer Support',
              description: 'Интеллектуальная система поддержки, обученная исключительно на вашей проверенной документации, регламентах и базе знаний. Закрывает типовые обращения 24/7 и передает сложные кейсы людям с контекстом.',
              focusPoints: ['Мгновенные точные ответы', 'Поиск по базе знаний и регламентам', 'Эскалация с полной историей диалога', 'Контроль корректности ответов']
            },
            {
              title: 'Website + Conversion Automation',
              description: 'Не просто косметический редизайн. Мы превращаем сайт в активный инструмент захвата и квалификации спроса с динамическими путями конверсии, анкетами, онлайн-записью и интеграцией с CRM.',
              focusPoints: ['Конверсионный каркас', 'Встроенные воронки квалификации', 'Прямая интеграция с базами данных', 'Измеримый рост скорости сделок']
            }
          ]
        },
        {
          id: 'tier-2',
          tierNumber: 'УРОВЕНЬ 02',
          name: 'Комплексные системы',
          range: '$8,000 – $15,000',
          positioning: 'Сквозные архитектуры, связывающие несколько взаимозависимых этапов коммерческого процесса в единый механизм.',
          timeline: 'Обычно 3–5 недель до запуска в продакшн',
          idealFor: 'Компании со стабильным входящим потоком лидов, которым необходима слаженная система продаж без утечки данных.',
          ctaText: 'Нужно автоматизировать больше одного процесса?',
          services: [
            {
              title: 'AI Sales Agent',
              description: 'Автономный агент, способный вести содержательный диалог с потенциальным клиентом, отвечать на сложные вопросы по тарифам и продукту, снимать возражения, собирать вводные и подводить к сделке.',
              focusPoints: ['Автономный диалог с покупателем', 'Контекстная отработка возражений', 'Квалификация бюджета и сроков', 'Передача подогретого лида на созвон']
            },
            {
              title: 'AI Revenue System',
              description: 'Единая коммерческая цепочка, связывающая все точки контакта: Трафик → Сайт → AI-интейк → Квалификация → Обогащение в CRM → Автофоллоу-ап → Бронирование → Закрытие. Единый слаженный контур.',
              focusPoints: ['Сквозной коммерческий маршрут', 'Ноль потерь лидов', 'Полная прозрачность воронки', 'Автоматическое движение по этапам']
            },
            {
              title: 'Sales Process Automation',
              description: 'Комплексная автоматизация пайплайна продаж: фиксация лида, обогащение данными о компании, скоринг, распределение по менеджерам, триггерные уведомления в Telegram/Slack и сквозная аналитика.',
              focusPoints: ['Оркестрация всей воронки', 'Мгновенные алерты команде', 'Автосмена стадий сделок в CRM', 'Аналитика конверсий для руководства']
            },
            {
              title: 'Customer Operations Automation',
              description: 'Систематизация повторяющегося клиентского онбординга, формирования счетов, актов, генерации документов и внутренних задач, позволяющая команде обслуживать больше клиентов без расширения штата.',
              focusPoints: ['Процессы адаптации клиентов', 'Автогенерация счетов и договоров', 'Синхронизация данных между сервисами', 'Масштабирование пропускной способности']
            },
            {
              title: 'Website + CRM + AI + Automation Stack',
              description: 'Маркетинговый фронтенд, базы данных CRM и слой AI-автоматизации, спроектированные с первого дня как единая согласованная система без хрупких "костылей" на сторонних коннекторах.',
              focusPoints: ['Кастомный React/Next.js интерфейс', 'Прямые API баз данных и CRM', 'Автономные фоновые обработчики', 'Отказоустойчивые каналы данных']
            }
          ]
        },
        {
          id: 'tier-3',
          tierNumber: 'УРОВЕНЬ 03',
          name: 'Инфраструктура бизнеса',
          range: '$15,000 – $30,000+',
          positioning: 'Глубокая операционная трансформация для компаний, чьи процессы переросли готовые коробочные SaaS-решения.',
          timeline: 'Обычно 5–8 недель до внедрения',
          idealFor: 'Растущий бизнес, где несогласованность инструментов, ручные согласования и хаос в данных обходятся в десятки тысяч долларов ежемесячно.',
          ctaText: 'Есть процесс, с которым не справляются готовые сервисы?',
          services: [
            {
              title: 'AI Revenue Infrastructure',
              description: 'Высоконагруженный слой инфраструктуры, охватывающий привлечение клиентов, входящий и исходящий триаж, AI-квалификацию, синхронизацию с CRM, аналитику в реальном времени и автоматический биллинг.',
              focusPoints: ['Многоканальная архитектура', 'Обработка больших объемов данных', 'Автоматический скоринг лидов', 'Дашборды для принятия решений']
            },
            {
              title: 'Sales Department Automation',
              description: 'Автоматизация на уровне всего коммерческого департамента: прием заявок, автоматический сбор досье на компанию, AI-подсказки для сейлзов, автозаполнение CRM и предиктивная аналитика пайплайна.',
              focusPoints: ['Охват всего отдела продаж', 'AI-ассистенты для менеджеров', 'CRM без ручного заполнения', 'Прогнозирование закрытия сделок']
            },
            {
              title: 'Operations Automation',
              description: 'Оркестрация сложных внутренних процедур: автоматический парсинг данных, многоуровневые цепочки согласований, маршрутизация документов, онбординг сотрудников и автоматическая передача задач.',
              focusPoints: ['Междепартаментные пайплайны', 'Цепочки утверждений', 'Автоматическая маршрутизация задач', 'Логирование ошибок и самовосстановление']
            },
            {
              title: 'Custom AI System',
              description: 'Специализированные AI-пайплайны, разработанные под нестандартную бизнес-логику, закрытые корпоративные базы данных и строгие требования к конфиденциальности, не поддерживаемые публичными SaaS.',
              focusPoints: ['Кастомные промпты и бенчмарки', 'Работа с закрытой базой знаний', 'Тонкая настройка парсинга данных', 'Выделенная API-инфраструктура']
            },
            {
              title: 'Custom Business Software',
              description: 'Внутреннее веб-приложение, созданное строго под операционные регламенты вашей компании, избавляющее команду от ограничений и абонентских плат чужих сервисов.',
              focusPoints: ['Точно под ваши регламенты', 'Разграничение прав доступа (RBAC)', 'Ноль оплат за рабочие места', 'Полный контроль над своими данными']
            }
          ]
        },
        {
          id: 'tier-4',
          tierNumber: 'УРОВЕНЬ 04',
          name: 'Разработка под ваш бизнес',
          range: '$20,000 – $50,000+',
          positioning: 'Создание полноценных цифровых продуктов и масштабной инфраструктуры под заказ для стратегических бизнес-целей.',
          timeline: 'Индивидуальные этапы (обычно 8–12+ недель)',
          idealFor: 'Фаундеры, создающие доходные SaaS-продукты, или зрелые компании, заменяющие зоопарк устаревших систем единой платформой.',
          ctaText: 'Обсудить систему, которая вам необходима.',
          services: [
            {
              title: 'AI-Powered SaaS MVP',
              description: 'Полный цикл продуктовой архитектуры и разработки от валидированной идеи до рабочего коммерческого сервиса. Готов к масштабированию от первых пользователей до корпоративных пилотов.',
              focusPoints: ['Архитектура продукта и UX/UI', 'Масштабируемый стек React/TypeScript & Node', 'Безопасная авторизация и роли', 'Интеграция AI-функционала', 'Подписочный биллинг Stripe и вебхуки', 'Панели администратора и аналитики']
            },
            {
              title: 'Custom Business Platform',
              description: 'Комплексная цифровая платформа, созданная с нуля под конкретную бизнес-модель: личные кабинеты клиентов, интерфейсы управления для сотрудников и сквозные многоуровневые интеграции.',
              focusPoints: ['Полнофункциональный собственный софт', 'Клиентские порталы и личные кабинеты', 'Внутренний бэкофис управления', 'Высокопроизводительная база данных']
            },
            {
              title: 'AI Sales Department Infrastructure',
              description: 'Масштабная коммерческая операционная система, объединяющая мультиагентную квалификацию, обработку входящего и исходящего трафика, координацию CRM и работу живых менеджеров.',
              focusPoints: ['Корпоративная маршрутизация продаж', 'Мультиагентная оркестрация', 'Четкие триггеры подключения человека', 'Сквозной контроль SLA']
            },
            {
              title: 'Internal Operating System',
              description: 'Собственная операционная система компании, объединяющая разрозненные регламенты, рабочие базы данных, сотрудников, клиентов и фоновые процессы в единый прозрачный контур.',
              focusPoints: ['Замена десятков таблиц', 'Централизация коммерческих данных', 'Интеграция унаследованного софта и API', 'Масштабирование без раздувания штата']
            }
          ]
        }
      ]
    },
    economics: {
      kicker: 'Экономика стоимости',
      headline: 'Почему эти проекты стоят от $5,000 до $50,000+',
      supporting: 'Цена определяется сложностью и ценностью системы для бизнеса, а не количеством экранов или часов написания кода.',
      leftTitle: 'Полный комплекс инженерных работ:',
      leftText: 'Создание надежной бизнес-системы требует многопрофильной инженерной экспертизы, затрагивающей ключевые коммерческие контуры:',
      scopeItems: [
        'Анализ бизнес-процессов компании',
        'Техническая архитектура решения',
        'Конверсионный UX/UI дизайн',
        'Кастомная Fullstack-разработка',
        'Промпт-инжиниринг и AI-эвалюация',
        'Глубокая интеграция с API и CRM',
        'Проектирование реляционных баз данных',
        'Автономные пайплайны на вебхуках',
        'Тестирование безопасности и валидации',
        'Развертывание в облачной инфраструктуре',
        'Мониторинг SLA и логирование сбоев',
        'Регламенты и эксплуатационная документация'
      ],
      rightTitle: 'Сравнение альтернатив:',
      agencyTitle: 'Традиционное агентство ($80K–$150K+)',
      agencyDesc: 'Высокие накладные расходы, аккаунт-менеджеры, слои согласований и передача реального кода младшим разработчикам.',
      engineerTitle: 'Штатный Senior-разработчик ($140K–$180K/год)',
      engineerDesc: 'Налоги на зарплату, найм, менеджмент, рабочее место и оплата фиксированного оклада ради одной узкой роли.',
      partnerTitle: 'Один Senior технический партнер ($5K–$50K)',
      partnerDesc: 'Прямой контакт с опытным разработчиком и продуктовым дизайнером, понимающим экономику бизнеса, запускающим решение за недели вместо месяцев и лично отвечающим за результат.'
    },
    process: {
      kicker: 'Методология внедрения',
      headline: 'Как я работаю',
      supporting: 'Последовательный пятиэтапный процесс, обеспечивающий прозрачность промежуточных результатов и отсутствие сбоев в текущих операциях компании.',
      steps: [
        {
          num: '01',
          title: 'Исследование',
          desc: 'Детальный аудит бизнес-модели, текущих воронок продаж, узких мест команды и используемых инструментов.'
        },
        {
          num: '02',
          title: 'Проектирование',
          desc: 'Определение того, что именно автоматизируется, переписывается или связывается. Разработка архитектурного плана и прототипов.'
        },
        {
          num: '03',
          title: 'Разработка',
          desc: 'Создание продакшн-софта, AI-пайплайнов, баз данных и интеграций с регулярными рабочими демо каждую неделю.'
        },
        {
          num: '04',
          title: 'Запуск',
          desc: 'Поэтапный релиз в боевую инфраструктуру, сквозное тестирование под нагрузкой и практическое обучение ключевых сотрудников.'
        },
        {
          num: '05',
          title: 'Развитие',
          desc: 'Мониторинг работы под реальной нагрузкой, выявление новых точек роста, оптимизация скорости и масштабирование по мере роста выручки.'
        }
      ]
    },
    fit: {
      kicker: 'Взаимный отбор',
      headline: 'Для кого созданы эти услуги',
      goodTitle: 'Идеальное совпадение, если вы:',
      goodItems: [
        'Компания с подтвержденным соответствием продукта рынку и стабильной выручкой.',
        'Получаете стабильный поток входящих заявок, где задержки с ручным ответом приводят к потере сделок.',
        'Команда, теряющая десятки часов еженедельно на рутинный ввод данных и административный скрининг.',
        'Используете зоопарк несогласованных SaaS-приложений, которые не синхронизируются между собой.',
        'Масштабируете продажи или операции и хотите увеличить объем без раздувания фонда оплаты труда.',
        'Основатель, создающий коммерческий AI-продукт с подтвержденным спросом на рынке.',
        'Бизнес, где ускорение операционных процессов даже на 10–20% приносит ощутимую финансовую отдачу.'
      ],
      badTitle: 'Скорее всего не подойдет, если вы:',
      badItems: [
        'Ищете быстрый шаблонный сайт за $300 или косметическую правку картинок.',
        'Хотите простую статичную страницу без бизнес-логики, форм и автоматизации.',
        'Ищете разовые разрозненные скрипты без привязки к общей бизнес-стратегии.',
        'Запускаете гипотетический проект без понятной бизнес-цели или финансового обоснования.',
        'Ожидаете бесконечных правок скоупа без корректировки сроков в рамках фиксированного бюджета.'
      ],
      respectNote: 'Я с уважением отношусь к проектам на любой стадии. Если вам нужен простой сайт-визитка, на рынке есть много хороших специалистов, создающих базовые шаблоны по более доступным ценам.'
    },
    work: {
      kicker: 'Подтвержденные результаты',
      headline: 'Избранные кейсы',
      supporting: 'Примеры реальных систем, запущенных для международных основателей и операционных лидеров. Ноль придуманных цифр.',
      labels: {
        problem: 'Проблема:',
        whatWasBuilt: 'Что было создано:'
      },
      cases: [
        {
          name: 'Revenue Engine: Мультиагентная система продаж',
          client: 'Александр В.',
          role: 'B2B Основатель',
          category: 'AI Agents & Автоматизация входящих',
          problem: 'Ручной поиск контактов, многоуровневая проверка и квалификация отнимали весь рабочий день основателя, не оставляя времени на закрытие крупных сделок.',
          built: 'Спроектирована автономная система с многоступенчатыми AI-пайплайнами квалификации, скорингом лидов и моментальной отправкой в Telegram перед назначением созвона.',
          verifiedResults: [
            { metric: '25 ч/нед', label: 'Освобождено времени фаундера' },
            { metric: '24%', label: 'Конверсия в ответ' },
            { metric: '2.6x', label: 'Рост встреч с ЛПР' }
          ],
          tech: ['n8n Workflows', 'Claude & OpenAI APIs', 'Telegram Bot API', 'Custom Webhooks']
        },
        {
          name: 'Morozov Legal Shield: Корпоративный интейк & юридическая защита',
          client: 'Сергей Морозов',
          role: 'Управляющий партнер',
          category: 'B2B Квалификация & Операции',
          problem: 'Старшие юристы тратили до 50% оплачиваемого времени на первичный разбор нецелевых обращений и ручной сбор исходных материалов дела.',
          built: 'Разработано диагностическое веб-приложение первичного интейка с автоматической верификацией документов, категоризацией дел и приоритетной маршрутизацией B2B-контрактов.',
          verifiedResults: [
            { metric: '$18,400', label: 'Экономия на первичном скрининге' },
            { metric: '+52%', label: 'Крупные B2B контракты' },
            { metric: '15 мин', label: 'Время ответа (ранее 24 часа)' }
          ],
          tech: ['React', 'TypeScript', 'Automated Triage Engine', 'CRM Webhook']
        },
        {
          name: 'Smart Science Academy: Автоматизированный учебный портал',
          client: 'Дмитрий Романов',
          role: 'Основатель академии',
          category: 'Кастомный софт & Онбординг',
          problem: 'Основатель тратил по 4 часа в день на ручную отправку учебных файлов, сверку оплат и переписку с родителями, что сдерживало масштабирование академии.',
          built: 'Создан образовательный портал со структурированным каталогом, автоматическим распределительным тестированием, мгновенной выдачей доступов и автотриггерами в CRM.',
          verifiedResults: [
            { metric: '3.1x', label: 'Записи на пробный урок' },
            { metric: '30 ч/мес', label: 'Экономия времени' },
            { metric: '94%', label: 'Доходимость до конца курса' }
          ],
          tech: ['React', 'TypeScript', 'Interactive Diagnostics', 'CRM Automation']
        },
        {
          name: 'Garnet & Thyme: Система бронирования & конфигуратор мероприятий',
          client: 'Марк Браун',
          role: 'Управляющий партнер',
          category: 'Кастомный букинг & Прямая выручка',
          problem: 'Высокие комиссионные сборы сторонним платформам-агрегаторам и постоянная перегрузка телефонных линий в вечерние часы, приводившая к потере гостей.',
          built: 'Разработан высокоскоростной движок прямых броней с интерактивной картой посадки, депозитами, конфигуратором банкетных залов и моментальными оповещениями в мессенджерах.',
          verifiedResults: [
            { metric: '+140%', label: 'Прямые резервации столов' },
            { metric: '-85%', label: 'Телефонная рутина хостес' },
            { metric: '$3,400/мес', label: 'Экономия на комиссиях агрегаторов' }
          ],
          tech: ['TypeScript', 'Next Architecture', 'Real-Time Table Allocation', 'Fast API Hooks']
        }
      ]
    },
    finalCta: {
      kicker: 'Следующий шаг',
      headline: 'Есть бизнес-задача, которую стоит решить?',
      supporting: 'Если вы уже знаете, какую систему нужно построить, или пока только понимаете, какое узкое место тормозит бизнес — опишите контекст. Я помогу определить оптимальную архитектуру решения.',
      primaryCta: 'Обсудить ваш проект',
      viewPortfolio: 'Посмотреть портфолио',
      directEmailLabel: 'Прямой email:',
      directTelegramLabel: 'Прямой Telegram:'
    },
    footer: {
      brandSubtitle: 'Кастомные AI-системы & Инженерная разработка софта',
      mainPortfolioLink: 'Основное портфолио (ulyanaportfolio.ai.studio)'
    }
  }
};
