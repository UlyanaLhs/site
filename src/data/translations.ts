/**
 * Comprehensive Application Translation Dictionary
 * Supporting full Russian & English localization with premium B2B tone.
 * Technical industry terms like 'AI', 'SaaS', 'CRM', 'API', 'UI/UX', 'LTV', 'ROI', 'SLA'
 * are maintained in English where natural for B2B decision-makers.
 */

export interface AppTranslationDictionary {
  common: {
    brandName: string;
    brandRole: string;
    brandTagline: string;
    onlineStatus: string;
    averageTurnaround: string;
    workingHours: string;
    workModel: string;
    urgentNotice: string;
    directTelegram: string;
    directEmail: string;
    copyHandle: string;
    handleCopied: string;
    copyEmail: string;
    emailCopied: string;
    copyText: string;
    textCopied: string;
    openTelegram: string;
    sendEmail: string;
    backToTop: string;
    backToPortfolio: string;
    close: string;
    readMore: string;
    selectPackage: string;
    discussProject: string;
    viewCases: string;
    calculateCost: string;
    allCases: string;
    filterPlaceholder: string;
    fromPrice: string;
    days: string;
    hours: string;
    minutes: string;
  };

  header: {
    brandSubtitle: string;
    navServices: string;
    navAutomation: string;
    navCases: string;
    navCalculator: string;
    navTechStack: string;
    navProcess: string;
    navReviews: string;
    navFaq: string;
    navContact: string;
    b2bSystemsLink: string;
    b2bSystemsTooltip: string;
    calculateButtonFull: string;
    calculateButtonShort: string;
    telegramTooltip: string;
    currencyAriaLabel: string;
  };

  hero: {
    authorPill: string;
    rolePill: string;
    availabilityPill: string;
    headlinePart1: string;
    headlineAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaAutomation: string;
    metric1Value: string;
    metric1Label: string;
    metric2Value: string;
    metric2Label: string;
    metric3Value: string;
    metric3Label: string;
    metric4Value: string;
    metric4Label: string;
  };

  pillars: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaText: string;
    traffic: {
      badge: string;
      title: string;
      pain: string;
      solution: string;
      metricValue: string;
      metricLabel: string;
      features: string[];
    };
    automation: {
      badge: string;
      title: string;
      pain: string;
      solution: string;
      metricValue: string;
      metricLabel: string;
      features: string[];
    };
    retention: {
      badge: string;
      title: string;
      pain: string;
      solution: string;
      metricValue: string;
      metricLabel: string;
      features: string[];
    };
  };

  services: {
    kicker: string;
    title: string;
    subtitle: string;
    guaranteeNotice: string;
    packages: {
      id: string;
      title: string;
      tagline: string;
      idealFor: string;
      timeline: string;
      basePriceLabel: string;
      resultPill: string;
      features: string[];
    }[];
    customQuoteTitle: string;
    customQuoteText: string;
    customQuoteButton: string;
    termsTitle: string;
    termsContract: { title: string; desc: string };
    termsPayment: { title: string; desc: string };
    termsOwnership: { title: string; desc: string };
    termsWarranty: { title: string; desc: string };
  };

  calculator: {
    kicker: string;
    title: string;
    subtitle: string;
    inputDealSize: string;
    inputDealSizeHelp: string;
    inputLeads: string;
    inputLeadsHelp: string;
    inputConversion: string;
    inputConversionHelp: string;
    inputHoursLost: string;
    inputHoursLostHelp: string;
    inputHourlyRate: string;
    inputHourlyRateHelp: string;
    resultAddedRevenue: string;
    resultHoursSaved: string;
    resultAnnualUpside: string;
    resultPayback: string;
    paybackUnder30Days: string;
    ctaButton: string;
    badgeVerified: string;
  };

  soloVsAgency: {
    kicker: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    soloHeading: string;
    agencyHeading: string;
    rows: {
      parameter: string;
      solo: string;
      agency: string;
    }[];
    ctaPrompt: string;
    ctaButton: string;
  };

  techStack: {
    kicker: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterFrontend: string;
    filterBackend: string;
    filterAutomation: string;
    filterDatabase: string;
    filterDesign: string;
    impactLabel: string;
    driversLabel: string;
    bottomLineLabel: string;
    cardHoverHint: string;
    ctaTemplate: string;
  };

  process: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      shortTitle: string;
      title: string;
      time: string;
      action: string;
      description: string;
      deliverable: string;
      clientRole: string;
    }[];
    deliverableLabel: string;
    clientRoleLabel: string;
    ctaButton: string;
  };

  reviews: {
    kicker: string;
    title: string;
    subtitle: string;
    verifiedBadge: string;
    automationTitle: string;
    automationSubtitle: string;
    discussCaseCta: string;
  };

  faq: {
    kicker: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabCore: string;
    tabTech: string;
    tabTerms: string;
    searchPlaceholder: string;
    noResults: string;
    supportNote: string;
    supportButton: string;
  };

  contact: {
    kicker: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    contextTitle: string;
    openTelegramWithBrief: string;
    copyBrief: string;
    briefCopied: string;
    telegramCardTitle: string;
    telegramCardDesc: string;
    telegramAvgReply: string;
    telegramDirectChat: string;
    telegramExpertAudit: string;
    telegramAction: string;
    emailCardTitle: string;
    emailCardDesc: string;
    emailAction: string;
    scheduleTitle: string;
    scheduleHoursLabel: string;
    scheduleHoursValue: string;
    scheduleModelLabel: string;
    scheduleModelValue: string;
    scheduleUrgentLabel: string;
    scheduleUrgentValue: string;
    guaranteesTitle: string;
    guaranteesSubtitle: string;
    guaranteeContractTitle: string;
    guaranteeContractDesc: string;
    guaranteePaymentTitle: string;
    guaranteePaymentDesc: string;
    guaranteeOwnershipTitle: string;
    guaranteeOwnershipDesc: string;
    guaranteeWarrantyTitle: string;
    guaranteeWarrantyDesc: string;
  };

  footer: {
    brandSubtitle: string;
    directContactLabel: string;
    emailLabel: string;
    replyTimeLabel: string;
    copyright: string;
    qualityBadge: string;
    backToTop: string;
  };

  dock: {
    services: string;
    automation: string;
    cases: string;
    calculator: string;
    process: string;
    reviews: string;
    faq: string;
    contact: string;
  };
}

export const TRANSLATIONS: Record<'ru' | 'en', AppTranslationDictionary> = {
  ru: {
    common: {
      brandName: 'Ульяна',
      brandRole: 'Full-Stack Инженер & UI/UX Архитектор',
      brandTagline: 'Разработка цифровых систем, Telegram Mini Apps и AI-автоматизации для роста выручки бизнеса',
      onlineStatus: 'Online • Доступна для новых проектов',
      averageTurnaround: 'Ответ за 15–30 минут',
      workingHours: 'Пн – Сб, 10:00 – 20:00 (UTC+3)',
      workModel: 'Remote • По всему миру',
      urgentNotice: 'Telegram 24/7',
      directTelegram: 'Telegram @u_ulyana_dev',
      directEmail: 'ulyanafullstack@gmail.com',
      copyHandle: 'Скопировать @u_ulyana_dev',
      handleCopied: 'Юзернейм скопирован!',
      copyEmail: 'Скопировать email',
      emailCopied: 'Email скопирован!',
      copyText: 'Скопировать текст',
      textCopied: 'Текст скопирован!',
      openTelegram: 'Написать в Telegram',
      sendEmail: 'Отправить письмо',
      backToTop: 'Наверх',
      backToPortfolio: 'В основное портфолио',
      close: 'Закрыть',
      readMore: 'Подробнее',
      selectPackage: 'Выбрать пакет',
      discussProject: 'Обсудить проект',
      viewCases: 'Посмотреть кейсы',
      calculateCost: 'Рассчитать стоимость',
      allCases: 'Все кейсы',
      filterPlaceholder: 'Поиск по сфере, тегу...',
      fromPrice: 'от',
      days: 'дней',
      hours: 'часов',
      minutes: 'минут'
    },

    header: {
      brandSubtitle: 'Сайты & Telegram Mini Apps',
      navServices: 'Услуги',
      navAutomation: 'Автоматизация',
      navCases: 'Кейсы',
      navCalculator: 'Калькулятор',
      navTechStack: 'Стек',
      navProcess: 'Процесс',
      navReviews: 'Отзывы',
      navFaq: 'FAQ',
      navContact: 'Контакты',
      b2bSystemsLink: 'B2B Системы $5K–50K+',
      b2bSystemsTooltip: 'B2B Системы & AI Software ($5K–$50K+)',
      calculateButtonFull: 'РАССЧИТАТЬ СТОИМОСТЬ',
      calculateButtonShort: 'РАСЧЕТ',
      telegramTooltip: 'Связаться в Telegram: @u_ulyana_dev',
      currencyAriaLabel: 'Выбор валюты'
    },

    hero: {
      authorPill: 'Ульяна',
      rolePill: 'Full-Stack Инженер & UI/UX Архитектор',
      availabilityPill: 'Ближайший старт: через 4 дня · 2 слота на этот месяц',
      headlinePart1: 'Цифровые продукты, сайты и Telegram-боты',
      headlineAccent: 'с гарантией окупаемости по договору',
      subtitle: 'Проектирую авторский UI/UX в Figma, собираю чистый реактивный код на React 19 / TypeScript и подключаю сквозную автоматизацию в n8n. Без посредников, без раздутых смет и с персональной ответственностью за каждый релиз.',
      ctaPrimary: 'Обсудить ваш проект',
      ctaSecondary: 'Смотреть 10 кейсов',
      ctaAutomation: 'Автоматизация на n8n',
      metric1Value: '15–30 мин',
      metric1Label: 'Среднее время ответа в Telegram',
      metric2Value: '7–14 дней',
      metric2Label: 'Срок запуска рабочего продукта',
      metric3Value: '100%',
      metric3Label: 'Фиксация цены и сроков в договоре',
      metric4Value: 'x2.4',
      metric4Label: 'Средний зафиксированный рост конверсии'
    },

    pillars: {
      kicker: 'Реальная ценность',
      title: 'Не просто дизайн, а цифровая инфраструктура для выручки',
      subtitle: 'Каждый проект решает конкретное финансовое или операционное узкое место вашего бизнеса.',
      ctaText: 'Обсудить решение для бизнеса',
      traffic: {
        badge: 'Поток клиентов',
        title: 'Сайты, которые окупаются и приводят целевых покупателей',
        pain: 'Боль: Трафик идет, но реклама не окупается, а посетители покидают сайт через 5 секунд.',
        solution: 'Создаю визуально безупречный сайт с логической структурой воронки. Каждый заголовок, кнопка и форма бьют в реальные потребности вашего клиента, снимают возражения и ведут к целевому действию.',
        metricValue: 'x2.4 рост конверсии',
        metricLabel: 'Больше заявок из того же рекламного бюджета без лишних трат',
        features: [
          'Понятное позиционирование с первых 3 секунд',
          'Быстрая загрузка до 1.2 сек на любых устройствах',
          'Удобные интерактивные калькуляторы и селекторы услуг'
        ]
      },
      automation: {
        badge: 'Экономия времени',
        title: 'Автоматизация, AI-ассистенты и сценарии вместо ручной рутины',
        pain: 'Боль: Вы или сотрудники тратите по 3–5 часов в день на однотипные ответы в чатах, согласование времени и отправку прайсов.',
        solution: 'Проектирую автономных ботов-ассистентов и сценарии: они моментально отвечают клиенту 24/7, квалифицируют заявку, собирают техническое задание и бронируют время в календаре.',
        metricValue: '-65% рутины',
        metricLabel: 'До 25 часов в неделю освобождается для стратегических задач бизнеса',
        features: [
          'Мгновенный ответ за 3 секунды в любое время суток',
          'Автоматический сбор вводных данных и документов',
          'Интеграция с CRM, Telegram, почтой и таблицами'
        ]
      },
      retention: {
        badge: 'Удержание & LTV',
        title: 'Telegram Mini Apps & экосистемы для повторных продаж',
        pain: 'Боль: Клиент воспользовался услугой один раз и забыл о вас. Приходится снова платить за его привлечение.',
        solution: 'Упаковываю ваш сервис в удобное Telegram Mini App или программу лояльности. Клиент делает повторный заказ в 2 клика прямо в мессенджере без скачивания приложений из App Store.',
        metricValue: '+42% рост LTV',
        metricLabel: 'Клиенты возвращаются чаще благодаря удобству прямо в мессенджере',
        features: [
          'Каталог, корзина и оплата без выхода из Telegram',
          'Автоматические персональные push-напоминания',
          'Бонусный счет и реферальная программа'
        ]
      }
    },

    services: {
      kicker: 'Пакеты и стоимость',
      title: 'Прозрачные тарифы с фиксированной стоимостью по договору',
      subtitle: 'Никаких скрытых платежей, непредвиденных смет или почасовых сюрпризов. Оплата разбивается 50/50 по ключевым этапам.',
      guaranteeNotice: 'Фиксированная цена • Официальный договор • 30 дней SLA гарантии',
      packages: [
        {
          id: 'landing',
          title: 'Конверсионный сайт / Лендинг',
          tagline: 'Для привлечения целевых клиентов и презентации премиум-услуг',
          idealFor: 'Экспертам, сфере услуг, B2B-компаниям, ресторанам и студиям',
          timeline: '7–10 рабочих дней',
          basePriceLabel: 'от 500$',
          resultPill: 'Рост конверсии в 2+ раза',
          features: [
            'Авторский UX/UI дизайн в Figma (с нуля под вашу нишу)',
            'Адаптивная верстка под все типы экранов и смартфоны',
            'Быстрая загрузка (Google PageSpeed 90+)',
            'Интерактивные формы заявки, квизы или калькуляторы',
            'Подключение домена, SSL, метрик и аналитики',
            'Интеграция заявок прямо в ваш Telegram-чат'
          ]
        },
        {
          id: 'telegram-solution',
          title: 'Telegram Mini App + Бот-ассистент',
          tagline: 'Автоматизация приема заявок и удержание постоянных клиентов (LTV)',
          idealFor: 'Ресторанам, доставкам, сервисам бронирования, клубам и курсам',
          timeline: '10–14 рабочих дней',
          basePriceLabel: 'от 1 000$',
          resultPill: 'Автономная работа 24/7',
          features: [
            'Полноценный веб-интерфейс внутри Telegram (Mini App)',
            'Каталог товаров/услуг с фильтрами, корзиной и оплатой',
            'Прием оплат картами (интеграция платежных шлюзов)',
            'Умный бот-ассистент с логикой диалогов и сценариями',
            'Личный кабинет клиента, история заказов и бонусы',
            'Админ-панель для управления меню, ценами и заказами'
          ]
        },
        {
          id: 'ecosystem',
          title: 'Полная экосистема: Сайт + Mini App + CRM',
          tagline: 'Максимальный охват: холодный трафик из поиска + удержание в Telegram',
          idealFor: 'Действующему бизнесу с регулярным потоком клиентов и амбициями роста',
          timeline: '14–21 рабочий день',
          basePriceLabel: 'от 2 000$',
          resultPill: 'Полная связка под ключ',
          features: [
            'Многостраничный сайт или презентационный лендинг компании',
            'Синхронизированное Telegram Mini App для постоянных клиентов',
            'Единая база клиентов и сквозная аналитика трафика',
            'Интеграция с вашей CRM (Битрикс24, amoCRM или Google Sheets)',
            'Автоматические рассылки и триггерные уведомления клиентам',
            'Приоритетная поддержка и сопровождение 30 дней после релиза'
          ]
        },
        {
          id: 'automation-audit',
          title: 'Аудит процессов и карта автоматизации',
          tagline: '1-дневный аудит: выявляем рутину, проектируем целевую архитектуру',
          idealFor: 'Компаниям, где ручные задачи отнимают более 15 часов команды в неделю',
          timeline: '1 рабочий день',
          basePriceLabel: '500$',
          resultPill: 'Сумма засчитывается в разработку',
          features: [
            'Глубокий анализ существующих воронок, баз и чатов',
            'Пошаговая карта сценариев автоматизации в n8n / Make',
            'Расчет окупаемости и сэкономленных часов команды',
            'Спецификация интеграций (CRM, Webhooks, API, Telegram)',
            '100% зачет стоимости аудита при заказе внедрения системы'
          ]
        },
        {
          id: 'automation-build',
          title: 'Внедрение сценариев и Telegram-пайплайна',
          tagline: 'Разработка автоматических пайплайнов на n8n и связка CRM с мессенджером',
          idealFor: 'Бизнесу, которому нужна бесшовная синхронизация лидов, счетов и сделок',
          timeline: '5–10 рабочих дней',
          basePriceLabel: 'от 1 500$',
          resultPill: '-65% ручной работы',
          features: [
            'Развертывание n8n на защищенном сервере',
            'Сквозные сценарии: лид → квалификация → CRM → Telegram-чат',
            'Автоматическая генерация счетов, КП и PDF-документов',
            'Подключение AI-ассистентов для ответов на частые вопросы',
            'Полное тестирование и стресс-тесты под нагрузкой'
          ]
        },
        {
          id: 'automation-retainer',
          title: 'Ежемесячное сопровождение автоматизаций',
          tagline: 'Контроль работы сценариев, доработки и расширение логики',
          idealFor: 'Командам, которым нужен выделенный инженер автоматизации без найма в штат',
          timeline: 'Ежемесячно',
          basePriceLabel: '300$ / мес',
          resultPill: '99.9% аптайм сценариев',
          features: [
            'Мониторинг вебхуков и очередей 24/7',
            'Оперативное исправление сбоев API внешних сервисов',
            'До 5 новых сценариев и микро-доработок каждый месяц',
            'Оптимизация расходов на AI API и серверную инфраструктуру'
          ]
        },
        {
          id: 'custom-ai',
          title: 'Кастомные AI-агенты и инфраструктура',
          tagline: 'Bespoke AI-агенты, скоринг лидов и глубокая интеграция с базами данных',
          idealFor: 'B2B-компаниям, SaaS-продуктам и бизнесу со сложной логикой продаж',
          timeline: '14–25 рабочих дней',
          basePriceLabel: 'от 4 000$',
          resultPill: 'Инженерная глубина',
          features: [
            'Разработка автономных AI-агентов под ваши внутренние регламенты',
            'RAG-архитектура: агент обучается на вашей базе знаний и документах',
            'Векторные базы данных и безопасная изоляция корпоративных данных',
            'Интеграция с корпоративными порталами, Slack, Telegram и CRM',
            'Полная передача исходного кода и инструкций по администрированию'
          ]
        }
      ],
      customQuoteTitle: 'Нужна нестандартная система или enterprise-масштаб?',
      customQuoteText: 'Опишите вашу задачу. Я подготовлю точную техническую смету и архитектурное предложение в день обращения.',
      customQuoteButton: 'Обсудить индивидуальный проект',
      termsTitle: 'Условия сотрудничества и гарантии',
      termsContract: {
        title: 'Официальный договор',
        desc: 'Фиксируем стоимость, этапы, сроки сдачи и детальное техническое задание до старта.'
      },
      termsPayment: {
        title: 'Поэтапная оплата (50/50)',
        desc: '50% при старте, финальные 50% — только после живой демонстрации и вашей полной приемки.'
      },
      termsOwnership: {
        title: '100% передача прав (IP)',
        desc: 'Все исходники кода, доступ к репозиторию и дизайн-макеты в Figma передаются вам.'
      },
      termsWarranty: {
        title: '30 дней гарантии',
        desc: 'Бесплатное сопровождение после релиза: оперативные правки, устранение багов и контроль метрик.'
      }
    },

    calculator: {
      kicker: 'Экономика внедрения',
      title: 'Калькулятор окупаемости и сэкономленного времени',
      subtitle: 'Оцените финансовую отдачу от запуска конверсионного сайта и автоматизации процессов',
      inputDealSize: 'Средний чек сделки / заказа',
      inputDealSizeHelp: 'Средний доход с одного привлеченного клиента',
      inputLeads: 'Входящих обращений в месяц',
      inputLeadsHelp: 'Текущий поток заявок, звонков и диалогов',
      inputConversion: 'Текущая конверсия в оплату (%)',
      inputConversionHelp: 'Процент лидов, которые становятся реальными клиентами',
      inputHoursLost: 'Часов рутины команды в неделю',
      inputHoursLostHelp: 'Время на ответы, согласование времени, отправку прайсов',
      inputHourlyRate: 'Стоимость часа сотрудника',
      inputHourlyRateHelp: 'Средняя ставка специалиста, занятого рутиной',
      resultAddedRevenue: 'Дополнительная выручка в месяц',
      resultHoursSaved: 'Сэкономлено часов команды в месяц',
      resultAnnualUpside: 'Годовой финансовый эффект',
      resultPayback: 'Расчетный срок окупаемости',
      paybackUnder30Days: 'Окупаемость в течение 30 дней после запуска',
      ctaButton: 'Обсудить внедрение с этими метриками',
      badgeVerified: 'На основе реальных показателей внедрений'
    },

    soloVsAgency: {
      kicker: 'Формат работы: Solo Specialist',
      title: 'Почему предприниматели выбирают',
      titleHighlight: 'прямую работу с Ульяной',
      subtitle: 'Сравнение персональной инженерной разработки и традиционных веб-агентств',
      soloHeading: 'Ульяна (Solo Full-Stack)',
      agencyHeading: 'Типичное веб-агентство',
      rows: [
        {
          parameter: 'Коммуникация',
          solo: 'Прямой контакт с Ульяной в Telegram. Ответ за 15–30 минут без промежуточных звеньев.',
          agency: 'Через аккаунт-менеджера. Испорченный телефон, задержки ответов по 2–3 дня.'
        },
        {
          parameter: 'Скорость запуска',
          solo: 'От 7 до 14 рабочих дней до готового рабочего продукта с подключенными интеграциями.',
          agency: 'От 1.5 до 3 месяцев из-за внутренних планерок, согласований и очередей в отделах.'
        },
        {
          parameter: 'Ценообразование',
          solo: 'Честная прозрачная смета. Вы платите только за реальную разработку и чистый код.',
          agency: 'В чек заложены оклады директоров, сейлзов, секретарей и аренда представительского офиса.'
        },
        {
          parameter: 'Ответственность',
          solo: '100% персональная ответственность Ульяны. Дорожу репутацией и сопровождаю проект до окупаемости.',
          agency: 'Проект отдают начинающим джуниорам или субподрядчикам на внешних биржах фриланса.'
        },
        {
          parameter: 'Гибкость правок',
          solo: 'Внесение точечных улучшений день в день без бюрократических согласований.',
          agency: 'Любая мелочь требует официального ТЗ, повторной оценки и выставления счета за часы.'
        },
        {
          parameter: 'Договор и порядок оплаты',
          solo: 'Официальный договор, поэтапная предоплата 50/50. Фиксация точных сроков, закрывающие акты и 100% передача прав.',
          agency: '100% предоплата или сложные кабальные условия со скрытыми доплатами за каждый чих.'
        }
      ],
      ctaPrompt: 'Нужен качественный продукт без агентской переплаты?',
      ctaButton: 'Начать диалог в Telegram'
    },

    techStack: {
      kicker: 'Инженерный стек',
      title: 'Технологии, ориентированные на окупаемость и скорость',
      subtitle: 'Каждая технология в стеке выбрана не ради хайпа, а для решения конкретных задач бизнеса: скорости загрузки, конверсии и надежности.',
      filterAll: 'Все технологии',
      filterFrontend: 'Frontend & UI',
      filterBackend: 'Backend & APIs',
      filterAutomation: 'Автоматизация & AI',
      filterDatabase: 'Базы данных & Cloud',
      filterDesign: 'UX/UI & Воронки',
      impactLabel: 'Замеренный эффект для бизнеса:',
      driversLabel: 'Как эта технология повышает конверсию:',
      bottomLineLabel: 'Итог для бизнеса:',
      cardHoverHint: 'Эффект для бизнеса',
      ctaTemplate: 'Обсудить проект с применением {tech}'
    },

    process: {
      kicker: 'Пошаговый процесс',
      title: 'От первого сообщения до запуска и гарантии',
      subtitle: 'Понятный предсказуемый пайплайн без срывов сроков и бесконечных согласований.',
      steps: [
        {
          step: '01',
          shortTitle: 'Заявка',
          title: '01. Заявка и первичный контакт',
          time: '15–30 минут',
          action: 'Пишете напрямую в Telegram или на рабочую почту с описанием вашей задачи.',
          description: 'Я изучаю вашу нишу, текущий сайт (если есть) и задаю 3–4 точечных вопроса по задаче. Никаких ботов-автоответчиков или стажеров — вы сразу общаетесь с исполнителем.',
          deliverable: 'Понимание задачи, предварительная вилка бюджета и запись на 20-минутный созвон или чат.',
          clientRole: 'Описать задачу в свободной форме (2–3 предложения).'
        },
        {
          step: '02',
          shortTitle: 'Консультация',
          title: '02. Консультация и бриф воронки',
          time: '1–2 дня',
          action: 'Разбираем целевую аудиторию, продукт, конкурентов и точки конверсии.',
          description: 'Формируем логику страниц, заголовки под боли клиентов и карту интеграций (CRM, Telegram, эквайринг, онлайн-запись). Никаких шаблонных решений — проектируем структуру под окупаемость.',
          deliverable: 'Утвержденное техническое задание (ТЗ) и логическая схема структуры проекта.',
          clientRole: 'Ответить на вопросы брифа и предоставить референсы/материалы.'
        },
        {
          step: '03',
          shortTitle: 'Смета & Договор',
          title: '03. Фиксированная смета и официальный договор',
          time: '1 день',
          action: 'Фиксируем точный дедлайн, этапы и итоговую сумму в договоре.',
          description: 'Вы вносите 50% предоплаты для бронирования рабочего спринта. Цена в договоре окончательная — никаких скрытых доплат за «дополнительные правки» или всплывшие нюансы.',
          deliverable: 'Официальный договор, чеки/счета и зафиксированные в календаре даты сдачи.',
          clientRole: 'Подписать договор и внести стартовые 50% предоплаты.'
        },
        {
          step: '04',
          shortTitle: 'Разработка и тест',
          title: '04. Разработка и тестирование',
          time: '5–10 рабочих дней',
          action: 'Создаю макет в Figma, согласуем визуал, затем верстаю чистый быстрый код.',
          description: 'Дизайн без шаблонов и визуального мусора: читаемая типографика, адаптив под все экраны смартфонов. Разработка на React/TypeScript/Tailwind с молниеносной загрузкой (0.3–0.8с). Отчеты каждые 2–3 дня.',
          deliverable: 'Кликабельный макет в Figma + рабочий проект на тестовом домене (staging).',
          clientRole: 'Посмотреть макет и тестовую ссылку, дать обратную связь.'
        },
        {
          step: '05',
          shortTitle: 'Приёмка & SLA',
          title: '05. Приёмка, перенос на ваш домен и 30 дней гарантии',
          time: '1 день',
          action: 'Переносим проект на ваш рабочий домен, отдаем все доступы и обучаем команду.',
          description: 'Вы проверяете финальную версию, вносите оставшиеся 50% оплаты. Я передаю права на репозиторий, Figma и доступы. Следующие 30 дней сопровождаю проект бесплатно.',
          deliverable: 'Работающий проект на вашем домене, 100% передача прав и 30 дней гарантийной поддержки.',
          clientRole: 'Принять проект, внести остаток 50% и начать привлекать клиентов.'
        }
      ],
      deliverableLabel: 'Что получаете на выходе:',
      clientRoleLabel: 'Что требуется от вас:',
      ctaButton: 'Начать проект с Ульяной'
    },

    reviews: {
      kicker: 'Подтвержденные результаты',
      title: 'Что говорят клиенты о сотрудничестве',
      subtitle: 'Реальные предприниматели, для которых я спроектировала и запустила цифровые решения.',
      verifiedBadge: 'Проверенный отзыв клиента',
      automationTitle: 'Кейсы и отзывы по автоматизации на n8n',
      automationSubtitle: 'Замеренные метрики окупаемости и сэкономленного времени команд',
      discussCaseCta: 'Обсудить проект по этой технологии'
    },

    faq: {
      kicker: 'Ответы на вопросы',
      title: 'Прямые и честные ответы на главные вопросы',
      subtitle: 'Все, что нужно знать о сроках, гарантиях, договоре, технологиях и передаче прав.',
      tabAll: 'Все вопросы',
      tabCore: 'Главное и цены',
      tabTech: 'Технологии & Скорость',
      tabTerms: 'Договор & Гарантии',
      searchPlaceholder: 'Поиск по вопросам...',
      noResults: 'По вашему запросу ничего не найдено. Напишите напрямую в Telegram!',
      supportNote: 'Остались вопросы, которых нет в списке?',
      supportButton: 'Задать вопрос Ульяне лично'
    },

    contact: {
      kicker: 'Прямая связь с разработчиком',
      title: 'Обсудите ваш проект напрямую',
      titleAccent: 'с Ульяной',
      subtitle: 'Напишите мне в Telegram или на рабочую почту. Отвечаю лично в течение 15–30 минут: без менеджеров, посредников и бюрократии.',
      contextTitle: 'Выбранный проект / услуга для обсуждения',
      openTelegramWithBrief: 'Открыть в Telegram с этим текстом',
      copyBrief: 'Скопировать текст',
      briefCopied: 'Текст скопирован!',
      telegramCardTitle: 'Telegram: @u_ulyana_dev',
      telegramCardDesc: 'Основной и самый оперативный способ связи. Обсудим проект, посмотрим референсы, запишем голосовые или созвонимся без долгих согласований.',
      telegramAvgReply: 'Среднее время ответа',
      telegramDirectChat: 'Прямой диалог без менеджеров',
      telegramExpertAudit: 'Разбор задач в день обращения',
      telegramAction: 'Написать в Telegram @u_ulyana_dev',
      emailCardTitle: 'Рабочая почта',
      emailCardDesc: 'Для подробных ТЗ, договоров, счетов и официальной корреспонденции',
      emailAction: 'Отправить письмо',
      scheduleTitle: 'График работы & география',
      scheduleHoursLabel: 'Рабочие часы:',
      scheduleHoursValue: 'Пн – Сб, 10:00 – 20:00 (UTC+3)',
      scheduleModelLabel: 'Формат работы:',
      scheduleModelValue: 'Remote • Worldwide',
      scheduleUrgentLabel: 'Срочные вопросы:',
      scheduleUrgentValue: 'Telegram 24/7',
      guaranteesTitle: 'Юридические гарантии и условия сотрудничества',
      guaranteesSubtitle: 'Прозрачные условия без подводных камней и непредвиденных доплат в процессе разработки.',
      guaranteeContractTitle: 'Официальный договор',
      guaranteeContractDesc: 'Фиксируем стоимость, этапы, сроки сдачи и детальное техническое задание до старта.',
      guaranteePaymentTitle: 'Поэтапная оплата (50/50)',
      guaranteePaymentDesc: '50% при старте, финальные 50% — только после живой демонстрации и вашей полной приемки.',
      guaranteeOwnershipTitle: '100% передача прав (IP)',
      guaranteeOwnershipDesc: 'Все исходники кода, доступ к репозиторию и дизайн-макеты в Figma передаются вам.',
      guaranteeWarrantyTitle: '30 дней гарантии',
      guaranteeWarrantyDesc: 'Бесплатное сопровождение после релиза: оперативные правки, устранение багов и контроль метрик.'
    },

    footer: {
      brandSubtitle: 'Качественная разработка без посредников',
      directContactLabel: 'Прямая связь:',
      emailLabel: 'Email:',
      replyTimeLabel: 'Отвечаю лично в течение 15–30 минут',
      copyright: 'Ульяна. Все права защищены.',
      qualityBadge: 'Высокоскоростная разработка без агентской наценки',
      backToTop: 'Наверх'
    },

    dock: {
      services: 'Услуги',
      automation: 'Автоматизация',
      cases: 'Кейсы',
      calculator: 'Расчет',
      process: 'Процесс',
      reviews: 'Отзывы',
      faq: 'FAQ',
      contact: 'Контакты'
    }
  },

  en: {
    common: {
      brandName: 'Ulyana',
      brandRole: 'Full-Stack Engineer & UI/UX Architect',
      brandTagline: 'Engineering custom digital systems, Telegram Mini Apps & AI automation that drive business revenue',
      onlineStatus: 'Online • Available for new builds',
      averageTurnaround: '15–30 min turnaround',
      workingHours: 'Mon – Sat, 10:00 – 20:00 (UTC+3)',
      workModel: 'Remote • Worldwide',
      urgentNotice: 'Telegram 24/7',
      directTelegram: 'Telegram @u_ulyana_dev',
      directEmail: 'ulyanafullstack@gmail.com',
      copyHandle: 'Copy @u_ulyana_dev',
      handleCopied: 'Handle copied!',
      copyEmail: 'Copy email',
      emailCopied: 'Email copied!',
      copyText: 'Copy text',
      textCopied: 'Text copied!',
      openTelegram: 'Open Telegram',
      sendEmail: 'Send Email',
      backToTop: 'Back to top',
      backToPortfolio: 'Back to main portfolio',
      close: 'Close',
      readMore: 'Learn more',
      selectPackage: 'Select package',
      discussProject: 'Discuss project',
      viewCases: 'Explore cases',
      calculateCost: 'Calculate Cost',
      allCases: 'All cases',
      filterPlaceholder: 'Filter by industry, tag...',
      fromPrice: 'from',
      days: 'days',
      hours: 'hours',
      minutes: 'mins'
    },

    header: {
      brandSubtitle: 'Websites & Telegram Mini Apps',
      navServices: 'Services',
      navAutomation: 'Automation',
      navCases: 'Cases',
      navCalculator: 'ROI Calc',
      navTechStack: 'Tech Stack',
      navProcess: 'Process',
      navReviews: 'Reviews',
      navFaq: 'FAQ',
      navContact: 'Contact',
      b2bSystemsLink: 'B2B Systems $5K–50K+',
      b2bSystemsTooltip: 'B2B Systems & AI Software ($5K–$50K+)',
      calculateButtonFull: 'CALCULATE COST',
      calculateButtonShort: 'CALCULATE',
      telegramTooltip: 'Message on Telegram: @u_ulyana_dev',
      currencyAriaLabel: 'Select currency'
    },

    hero: {
      authorPill: 'Ulyana',
      rolePill: 'Full-Stack Engineer & UI/UX Architect',
      availabilityPill: 'Next project start: in 4 days · 2 slots open',
      headlinePart1: 'Engineering High-Converting Web Platforms & Telegram Apps',
      headlineAccent: 'with Contractually Locked Pricing',
      subtitle: 'Bridging bespoke Figma UI/UX architecture, high-performance React 19 / TypeScript engineering, and autonomous n8n workflows. Zero agency overhead, zero handoff drag, and 100% direct personal accountability.',
      ctaPrimary: 'Discuss your project',
      ctaSecondary: 'Explore 10 case studies',
      ctaAutomation: 'n8n Workflow Automation',
      metric1Value: '15–30 mins',
      metric1Label: 'Average Telegram reply turnaround',
      metric2Value: '7–14 days',
      metric2Label: 'Average production launch time',
      metric3Value: '100%',
      metric3Label: 'Contractually locked scope & SLA',
      metric4Value: '2.4x',
      metric4Label: 'Average measured conversion lift'
    },

    pillars: {
      kicker: 'Core Business Value',
      title: 'Engineering revenue systems, not disposable pages',
      subtitle: 'Every project targets an expensive operational or conversion bottleneck in your business.',
      ctaText: 'Discuss a business solution',
      traffic: {
        badge: 'Client Acquisition',
        title: 'Conversion-engineered websites driving high-intent clients',
        pain: 'Problem: Ad spend is burning without ROI, while visitors bounce within 5 seconds without converting.',
        solution: 'I engineer visually compelling websites with conversion funnel psychology. Every headline, CTA, and intake form addresses customer friction and turns cold traffic into booked appointments.',
        metricValue: '2.4x conversion lift',
        metricLabel: 'Doubles inbound pipeline from existing marketing budget',
        features: [
          'Crystal-clear value proposition within the first 3 seconds',
          'Sub-1.2s loading speeds across all mobile and desktop devices',
          'Engaging interactive calculators, quizzes & service configurators'
        ]
      },
      automation: {
        badge: 'Operational Time Reclaimed',
        title: 'Automation, AI assistants & workflows replacing manual routine',
        pain: 'Problem: Founders and operators spend 3–5 hours daily fielding repetitive DMs, availability checks, and price inquiries.',
        solution: 'I architect autonomous assistant bots: they qualify leads 24/7, provide instant interactive answers, capture requirements, and sync calendar bookings without human lag.',
        metricValue: '-65% routine overhead',
        metricLabel: 'Reclaims up to 25 hours per week for core revenue-generating business operations',
        features: [
          'Instant 3-second responsiveness 24 hours a day, 7 days a week',
          'Autonomous intake of client requirements, briefs, and files',
          'Real-time webhooks with your CRM, Telegram, and Google Sheets'
        ]
      },
      retention: {
        badge: 'Retention & LTV',
        title: 'Telegram Mini Apps & seamless ecosystems driving repeat sales',
        pain: 'Problem: One-time clients churn immediately, forcing you to repurchase them through expensive paid ads over and over.',
        solution: 'I build bespoke Telegram Mini Apps with integrated loyalty programs. Customers reorder in 2 clicks natively inside their favorite messenger without installing App Store apps.',
        metricValue: '+42% higher LTV',
        metricLabel: 'Compounded customer lifetime value through zero-friction in-app accessibility',
        features: [
          'Digital storefront, cart & seamless checkout natively in Telegram',
          'Automated targeted push notifications & re-engagement triggers',
          'Loyalty balance, rewards tiers & viral referral incentives'
        ]
      }
    },

    services: {
      kicker: 'Services & Transparent Investment',
      title: 'Transparent Pricing Packages with Strict Contractual Guarantees',
      subtitle: 'Zero hidden fees, scope creep, or hourly surprises. Structured in 50/50 milestone payments.',
      guaranteeNotice: 'Fixed price guarantee • Official contract • 30-day SLA warranty',
      packages: [
        {
          id: 'landing',
          title: 'High-Converting Website / Landing Page',
          tagline: 'Built to attract high-intent leads, showcase luxury offerings & lift conversion',
          idealFor: 'High-ticket services, B2B firms, boutique clinics, studios & restaurants',
          timeline: '7–10 business days',
          basePriceLabel: 'from $500',
          resultPill: '2x+ Inbound Conversion Lift',
          features: [
            'Bespoke Figma UI/UX architecture (zero generic templates)',
            'Pixel-perfect responsive build across modern mobile & desktop devices',
            'Ultra-fast load speeds (Google PageSpeed 90+ guaranteed)',
            'Interactive lead forms, dynamic quizzes & ROI calculators',
            'Domain setup, SSL hardening, GA4 analytics & event tracking',
            'Real-time inbound lead routing straight to your private Telegram'
          ]
        },
        {
          id: 'telegram-solution',
          title: 'Telegram Mini App & Autonomous Bot',
          tagline: 'Streamline customer intake, in-app purchases & repeat customer retention',
          idealFor: 'Hospitality, delivery operations, booking businesses & communities',
          timeline: '10–14 business days',
          basePriceLabel: 'from $1,000',
          resultPill: '24/7 Autonomous Intake',
          features: [
            'Rich web interface running natively inside Telegram (Mini App)',
            'Product/service catalog with dynamic filtering, cart & checkout',
            'Secure credit card payments via integrated acquiring gateways',
            'Intelligent conversational bot with automated routing & FAQ handling',
            'User profile, order tracking & integrated loyalty incentives',
            'Private admin panel for menus, pricing, orders & customer data'
          ]
        },
        {
          id: 'ecosystem',
          title: 'Complete Digital Ecosystem: Web + Mini App + CRM',
          tagline: 'Broadest footprint: search engine acquisition + messenger loyalty retention',
          idealFor: 'Growing brands with steady customer flow and ambitious revenue targets',
          timeline: '14–21 business days',
          basePriceLabel: 'from $2,000',
          resultPill: 'Full Turn-Key Deployment',
          features: [
            'Multi-page corporate website or premium presentation landing page',
            'Synchronized Telegram Mini App for returning client retention',
            'Centralized customer data store & end-to-end attribution tracking',
            'Bi-directional synchronization with your CRM (HubSpot, amoCRM, Sheets)',
            'Automated email/messenger follow-up triggers & reminders',
            'Priority SLA support & continuous monitoring for 30 days post-launch'
          ]
        },
        {
          id: 'automation-audit',
          title: 'Workflow Audit & Automation Roadmap',
          tagline: '1-day diagnostic: uncover operational bottlenecks & map target architecture',
          idealFor: 'Teams spending over 15 hours weekly on manual, repetitive data entry',
          timeline: '1 business day',
          basePriceLabel: '$500',
          resultPill: '100% credited toward build',
          features: [
            'Deep forensic review of existing lead funnels, databases & chats',
            'Step-by-step target architecture mapped in n8n / Make',
            'Quantified ROI model and team hours reclaimed calculation',
            'Integration specification (CRM, webhooks, API, Telegram)',
            '100% credit applied toward development if you proceed with the build'
          ]
        },
        {
          id: 'automation-build',
          title: 'Custom Workflow & Bot Pipeline',
          tagline: 'Deploy robust n8n backend pipelines connecting CRM with messenger channels',
          idealFor: 'Companies seeking seamless automated sync between leads, deals & invoices',
          timeline: '5–10 business days',
          basePriceLabel: 'from $1,500',
          resultPill: '-65% Manual Routine',
          features: [
            'Self-hosted n8n infrastructure deployed on secure private servers',
            'End-to-end pipelines: inbound lead → scoring → CRM deal → team alerts',
            'Automated document generation (PDF estimates, agreements, receipts)',
            'AI assistant integration for preliminary client qualification',
            'Rigorous end-to-end automated testing under high simulated load'
          ]
        },
        {
          id: 'automation-retainer',
          title: 'Ongoing Automation & AI Retainer',
          tagline: 'Continuous monitoring, script optimization, and feature expansion',
          idealFor: 'Fast-moving businesses requiring an on-demand automation engineer',
          timeline: 'Monthly',
          basePriceLabel: '$300 / mo',
          resultPill: '99.9% Pipeline Uptime',
          features: [
            '24/7 webhook monitoring and automated error recovery alerts',
            'Rapid updates when third-party SaaS APIs update schemas',
            'Up to 5 new automated workflows or refinements each month',
            'Cost optimization for LLM token usage and server hosting resources'
          ]
        },
        {
          id: 'custom-ai',
          title: 'Bespoke AI Agents & Custom Infrastructure',
          tagline: 'Autonomous AI agents, lead scoring, and deep database integration',
          idealFor: 'B2B SaaS platforms and companies with complex technical sales cycles',
          timeline: '14–25 business days',
          basePriceLabel: 'from $4,000',
          resultPill: 'Deep Engineering',
          features: [
            'Custom AI agent architecture tuned to your exact operational workflows',
            'RAG implementation: grounded strictly in your proprietary documentation',
            'Vector database clustering with enterprise-grade data isolation',
            'Multi-channel interfaces across internal portals, Slack, Telegram & CRM',
            'Full IP transfer including deployment scripts and maintenance manuals'
          ]
        }
      ],
      customQuoteTitle: 'Need a custom architecture or enterprise-grade build?',
      customQuoteText: 'Describe your requirements. I will provide an exact technical scope and architecture proposal on the same day.',
      customQuoteButton: 'Discuss bespoke system',
      termsTitle: 'Collaboration Terms & Guarantees',
      termsContract: {
        title: 'Official Contract',
        desc: 'Scope, timeline, and final budget locked in an official agreement prior to kickoff.'
      },
      termsPayment: {
        title: 'Staged 50/50 Payments',
        desc: '50% upon project kickoff, final 50% only after live staging review and complete approval.'
      },
      termsOwnership: {
        title: 'Full IP Ownership',
        desc: 'All source code, GitHub repository permissions, and Figma files belong entirely to you.'
      },
      termsWarranty: {
        title: '30-Day SLA Support',
        desc: 'Complimentary post-launch warranty: swift tweaks, bug fixes, and continuous performance checks.'
      }
    },

    calculator: {
      kicker: 'Financial Assessment',
      title: 'Interactive ROI & Operational Hours Calculator',
      subtitle: 'Estimate the quantifiable financial upside of high-converting web and automated systems',
      inputDealSize: 'Average Deal / Ticket Size',
      inputDealSizeHelp: 'Net revenue per newly closed customer',
      inputLeads: 'Inbound Leads / Conversations Per Month',
      inputLeadsHelp: 'Monthly volume of leads across all channels',
      inputConversion: 'Current Conversion Rate (%)',
      inputConversionHelp: 'Percentage of inquiries that turn into paying clients',
      inputHoursLost: 'Hours Spent on Manual Routine / Week',
      inputHoursLostHelp: 'Time lost on repetitive replies, scheduling, and admin tasks',
      inputHourlyRate: 'Internal Hourly Cost of Staff',
      inputHourlyRateHelp: 'Average hourly cost of operators or managers',
      resultAddedRevenue: 'Projected Monthly Added Revenue',
      resultHoursSaved: 'Team Hours Reclaimed / Month',
      resultAnnualUpside: 'Projected 12-Month Financial Upside',
      resultPayback: 'Estimated Payback Horizon',
      paybackUnder30Days: 'Estimated payback within 30 days post-launch',
      ctaButton: 'Discuss Project with these Metrics',
      badgeVerified: 'Grounded in production client benchmarks'
    },

    soloVsAgency: {
      kicker: 'Engagement Model: Solo Specialist',
      title: 'Why business founders prefer',
      titleHighlight: 'direct partnership with Ulyana',
      subtitle: 'Comparing direct fullstack engineering with traditional agency models',
      soloHeading: 'Ulyana (Solo Full-Stack)',
      agencyHeading: 'Typical Web Agency',
      rows: [
        {
          parameter: 'Communication',
          solo: 'Direct Telegram channel with Ulyana. Instant 15–30 min turnaround without intermediaries.',
          agency: 'Through junior account managers. Broken phone syndrome and 2–3 day response latency.'
        },
        {
          parameter: 'Time to Market',
          solo: '7 to 14 business days from kickoff to a deployed, production-ready system with integrations.',
          agency: '1.5 to 3 months bogged down by internal status syncs, ticket backlogs, and handoffs.'
        },
        {
          parameter: 'Pricing Model',
          solo: 'Transparent, deliverables-based pricing. Zero markups for office rent, PMs, or corporate bloat.',
          agency: 'Invoice inflated by agency overhead, executive bonuses, business development, and leases.'
        },
        {
          parameter: 'Accountability',
          solo: '100% direct personal accountability from Ulyana. Reputational skin-in-the-game until proven ROI.',
          agency: 'Account delegated to revolving juniors or outsourced to low-cost marketplace contractors.'
        },
        {
          parameter: 'Agility & Iterations',
          solo: 'Same-day adjustments and agile micro-iterations without paperwork bottlenecks.',
          agency: 'Every minor change order triggers re-estimation, change requests, and extra hourly bills.'
        },
        {
          parameter: 'Contract & Payment Terms',
          solo: 'Official contract, staged 50/50 prepayment. Guaranteed deadlines, corporate invoices, and full IP ownership transfer.',
          agency: '100% upfront lock-in, ambiguous milestone sign-offs, and hefty hourly add-on invoices.'
        }
      ],
      ctaPrompt: 'Looking for high-end digital products without agency markups?',
      ctaButton: 'Start a direct dialogue on Telegram'
    },

    techStack: {
      kicker: 'Engineering Stack & Skills',
      title: 'Technologies Engineered for Speed & Business Revenue',
      subtitle: 'Every tool is chosen to deliver measurable business advantages: sub-second speeds, zero downtime, and friction-free conversions.',
      filterAll: 'All Technologies',
      filterFrontend: 'Frontend & UI',
      filterBackend: 'Backend & APIs',
      filterAutomation: 'Automation & AI',
      filterDatabase: 'Databases & Cloud',
      filterDesign: 'UX/UI & Funnels',
      impactLabel: 'Measured business impact:',
      driversLabel: 'How this skill drives conversion:',
      bottomLineLabel: 'Bottom line:',
      cardHoverHint: 'Conversion impact',
      ctaTemplate: 'Discuss Project using {tech}'
    },

    process: {
      kicker: 'Development Roadmap',
      title: 'From First Message to Deployment & 30-Day SLA',
      subtitle: 'A transparent, predictable engineering workflow with strict timeline milestones.',
      steps: [
        {
          step: '01',
          shortTitle: 'Inquiry',
          title: '01. Inquiry & Quick Discovery',
          time: '15–30 mins',
          action: 'Reach out directly on Telegram or work email with a quick overview of your goals.',
          description: 'I review your niche, existing website or bot, and ask 3–4 clarifying questions. Zero bot auto-replies or junior reps — you communicate directly with the engineer.',
          deliverable: 'Clear scope understanding, indicative price estimate, and scheduled 20-minute chat.',
          clientRole: 'Briefly describe your project goals in 2–3 sentences.'
        },
        {
          step: '02',
          shortTitle: 'Consultation',
          title: '02. Strategy & Funnel Blueprint',
          time: '1–2 days',
          action: 'We dissect your target audience, competitors, and conversion touchpoints.',
          description: 'We define page architecture, high-converting value propositions, and integration specs (CRM, Telegram webhooks, Stripe, booking engines). Structured purely for conversion.',
          deliverable: 'Approved functional specification and complete structural wireframe.',
          clientRole: 'Answer brief prompts and share brand assets or references.'
        },
        {
          step: '03',
          shortTitle: 'Scope & Agreement',
          title: '03. Fixed Scope & Legal Agreement',
          time: '1 day',
          action: 'We lock in strict deadlines, milestones, and final price in an official agreement.',
          description: 'You release 50% staged prepayment to lock the development sprint. The contract figure is final — zero surprise charges or billing for standard revisions.',
          deliverable: 'Legally binding contract, official invoices, and calendar-locked delivery dates.',
          clientRole: 'Sign contract and transfer 50% initial milestone deposit.'
        },
        {
          step: '04',
          shortTitle: 'Build & Test',
          title: '04. Build & Test',
          time: '5–10 business days',
          action: 'I design high-fidelity Figma layouts, align visual cues, then write clean production code.',
          description: 'Bespoke Figma prototype: crisp typography, ergonomic mobile layout. Written in React, TypeScript & Tailwind with sub-second speeds. Live progress reports every 2–3 days.',
          deliverable: 'Clickable Figma prototype + functional staging deployment for live inspection.',
          clientRole: 'Inspect the staging prototype and give straightforward feedback.'
        },
        {
          step: '05',
          shortTitle: 'Launch & SLA',
          title: '05. Launch, Production Deployment & 30-Day SLA',
          time: '1 day',
          action: 'We cut over to your live domain, hand over credentials, and walk your team through the system.',
          description: 'You perform final review and clear remaining 50% balance. I transfer GitHub repository rights, Figma designs, and API credentials, followed by 30 days of complimentary SLA support.',
          deliverable: 'Live production system on your domain, 100% IP transfer, and 30-day warranty support.',
          clientRole: 'Sign off final acceptance, release remaining 50% deposit, and start acquiring customers.'
        }
      ],
      deliverableLabel: 'Concrete Deliverable:',
      clientRoleLabel: 'Client Input Needed:',
      ctaButton: 'Start a project with Ulyana'
    },

    reviews: {
      kicker: 'Client Reviews & Results',
      title: 'What Business Leaders Say About Working with Me',
      subtitle: 'Real founders and executives whose digital products and automated pipelines I built.',
      verifiedBadge: 'Verified Client Review',
      automationTitle: 'n8n & Workflow Automation Case Feedback',
      automationSubtitle: 'Measurable time reclaimed and operational efficiency gains',
      discussCaseCta: 'Discuss a similar project'
    },

    faq: {
      kicker: 'Frequently Asked Questions',
      title: 'Straightforward Answers to Core Objections',
      subtitle: 'Everything you need to know regarding deadlines, pricing, legal guarantees, and IP ownership.',
      tabAll: 'All Questions',
      tabCore: 'Pricing & Scope',
      tabTech: 'Tech & Speed',
      tabTerms: 'Terms & Guarantees',
      searchPlaceholder: 'Search questions...',
      noResults: 'No matches found. Feel free to message me directly on Telegram!',
      supportNote: 'Have a specific question not covered here?',
      supportButton: 'Ask Ulyana directly on Telegram'
    },

    contact: {
      kicker: 'Direct Contact with Ulyana',
      title: 'Discuss your project directly',
      titleAccent: 'with Ulyana',
      subtitle: 'Reach out directly via Telegram or email. I reply personally within 15–30 minutes: zero intermediaries, account managers, or corporate delays.',
      contextTitle: 'Selected Project / Service Details',
      openTelegramWithBrief: 'Open Telegram with this brief',
      copyBrief: 'Copy text',
      briefCopied: 'Text copied!',
      telegramCardTitle: 'Telegram: @u_ulyana_dev',
      telegramCardDesc: 'The primary and fastest channel. We can discuss your requirements, review references, and jump on a call without paperwork delays.',
      telegramAvgReply: 'Average turnaround',
      telegramDirectChat: 'Direct dialogue • Zero middlemen',
      telegramExpertAudit: 'Same-day consultation',
      telegramAction: 'Message on Telegram @u_ulyana_dev',
      emailCardTitle: 'Work Email',
      emailCardDesc: 'For formal RFPs, contracts, documentation and detailed briefs',
      emailAction: 'Send Email',
      scheduleTitle: 'Availability & Working Hours',
      scheduleHoursLabel: 'Working hours:',
      scheduleHoursValue: 'Mon – Sat, 10:00 – 20:00 (UTC+3)',
      scheduleModelLabel: 'Work model:',
      scheduleModelValue: 'Remote • Worldwide',
      scheduleUrgentLabel: 'Urgent messages:',
      scheduleUrgentValue: 'Telegram 24/7',
      guaranteesTitle: 'Legal Terms & Collaboration Guarantees',
      guaranteesSubtitle: 'Clear, straightforward deliverables with no hidden costs or unexpected budget inflations.',
      guaranteeContractTitle: 'Official Contract',
      guaranteeContractDesc: 'Fixed scope, milestone deadlines, and clear specifications locked prior to kickoff.',
      guaranteePaymentTitle: 'Staged 50/50 Payments',
      guaranteePaymentDesc: '50% at kickoff, remaining 50% only after staging review and final sign-off.',
      guaranteeOwnershipTitle: 'Full IP Ownership',
      guaranteeOwnershipDesc: 'All source code, GitHub repository access, and Figma files belong entirely to you.',
      guaranteeWarrantyTitle: '30-Day SLA Support',
      guaranteeWarrantyDesc: 'Free post-launch warranty: swift tweaks, bug fixes, and continuous performance checks.'
    },

    footer: {
      brandSubtitle: 'High-end engineering without agency overhead',
      directContactLabel: 'Direct Contact:',
      emailLabel: 'Email:',
      replyTimeLabel: 'Personal replies within 15–30 mins',
      copyright: 'Ulyana Dev. All rights reserved.',
      qualityBadge: 'High-velocity bespoke engineering with direct accountability',
      backToTop: 'Back to top'
    },

    dock: {
      services: 'Services',
      automation: 'Automation',
      cases: 'Cases',
      calculator: 'Calc',
      process: 'Roadmap',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact'
    }
  }
};
