import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Plus,
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  FileText, 
  Send,
  Zap,
  Lock,
  Globe,
  Search,
  Code2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface FAQItem {
  id: string;
  category: 'core' | 'tech' | 'terms';
  categoryLabelRu: string;
  categoryLabelEn: string;
  questionRu: string;
  questionEn: string;
  shortAnswerRu: string;
  shortAnswerEn: string;
  fullAnswerRu: string[];
  fullAnswerEn: string[];
  keyHighlightRu?: string;
  keyHighlightEn?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  // 1. Почему ваши сайты быстрее, чем на WordPress?
  {
    id: 'faster-than-wordpress',
    category: 'tech',
    categoryLabelRu: 'Технологии и скорость',
    categoryLabelEn: 'Tech & Performance',
    questionRu: 'Почему ваши сайты быстрее, чем на WordPress?',
    questionEn: 'Why are your websites noticeably faster than WordPress?',
    shortAnswerRu: 'Современный стек React / Vite / Next.js без десятков тяжелых плагинов и медленных баз данных.',
    shortAnswerEn: 'Modern React / Vite / Next.js architecture with zero bloated plugins or slow legacy SQL bottlenecks.',
    fullAnswerRu: [
      'WordPress создавался 20 лет назад как блоговая платформа. Чтобы заставить его продавать, приходится ставить десятки плагинов (WooCommerce, формы, кеширование, SEO-плагины, билдеры типа Elementor). Каждый плагин отправляет тяжелые SQL-запросы к базе данных и подгружает гигабайты мусорных скриптов, замедляя сайт до 3–5 секунд.',
      'Я разрабатываю сайты на современном реактивном стеке (React, TypeScript, Vite/Next.js, Tailwind CSS). Здесь нет лишних промежуточных слоев: код компилируется в легковесные статические бандлы, которые загружаются мгновенно (0.3–0.8 секунды) даже при медленном мобильном интернете 3G/4G.',
      'Результат: 95–100 баллов в Google PageSpeed Insights, мгновенный отклик интерфейса, рост конверсии в заявку на 25–40% и естественное преимущество в поисковой выдаче Google и Яндекс.'
    ],
    fullAnswerEn: [
      'WordPress was built over two decades ago as a blogging CMS. Converting it into a sales machine requires dozens of heavy plugins (WooCommerce, Elementor, caching, SEO suites), each generating bloated SQL queries and megabytes of unused scripts, slowing response times to 3–5 seconds.',
      'I engineer websites on a modern reactive stack (React, TypeScript, Vite/Next.js, Tailwind CSS). Code is compiled into ultra-optimized bundles that render in 0.3–0.8 seconds even on unstable mobile connections.',
      'The outcome: 95–100 Google PageSpeed scores, zero user drop-off during page transitions, and superior search engine indexing.'
    ],
    keyHighlightRu: 'Скорость загрузки 0.3–0.8 сек • 95–100 баллов в PageSpeed',
    keyHighlightEn: '0.3–0.8s load speed • 95–100 Google PageSpeed score'
  },

  // 2. SEO входит в разработку или это отдельно?
  {
    id: 'seo-included',
    category: 'tech',
    categoryLabelRu: 'SEO и трафик',
    categoryLabelEn: 'SEO & Growth',
    questionRu: 'SEO входит в разработку или это отдельно?',
    questionEn: 'Is SEO optimization included in web development or priced separately?',
    shortAnswerRu: 'Базовая техническая и структурная SEO-оптимизация полностью включена в стоимость каждого сайта под ключ.',
    shortAnswerEn: 'Core technical and architectural SEO is 100% included in all turnkey website packages.',
    fullAnswerRu: [
      'Да, фундаментальная техническая SEO-оптимизация уже включена в разработку под ключ. Вы получаете не «голый» сайт, а полностью подготовленный к индексации поисковиками ресурс.',
      'Что входит бесплатно: идеальная семантическая иерархия тегов (H1–H4), микроразметка Schema.org (JSON-LD) для сниппетов в Google и Яндекс, мета-теги Open Graph для красивых превью в Telegram и WhatsApp, sitemap.xml, robots.txt, канонические URL, конвертация изображений в WebP/AVIF и адаптивная верстка.',
      'Для регулярного ссылочного продвижения, закупки ссылок и ежемесячного написания десятков SEO-статей мы можем составить стратегию либо подключить профильного SEO-копирайтера.'
    ],
    fullAnswerEn: [
      'Yes, foundational technical SEO is already fully baked into every turnkey build. You receive a project thoroughly structured for rapid crawling and indexing by Google and Yandex.',
      'Included by default: semantic heading hierarchy (H1–H4), Schema.org (JSON-LD) rich snippets, Open Graph tags for share previews in Telegram/WhatsApp, dynamic sitemap.xml, robots.txt, WebP image compression, and mobile responsiveness.',
      'For ongoing high-frequency link building or mass monthly content generation, I can outline a clear strategy or connect dedicated SEO partners.'
    ],
    keyHighlightRu: 'Микроразметка Schema.org, метатеги, sitemap и 100% готовность к поиску',
    keyHighlightEn: 'Schema.org JSON-LD, meta tags, sitemap & search engine readiness'
  },

  // 3. Which tools can you connect?
  {
    id: 'tools-connect',
    category: 'tech',
    categoryLabelRu: 'Интеграции и стек',
    categoryLabelEn: 'Speed & Tech Stack',
    questionRu: 'Какие инструменты вы можете связать?',
    questionEn: 'Which tools can you connect?',
    shortAnswerRu: 'Telegram, Google Sheets, популярные CRM, почту, платёжные системы и любой сервис с API. Если готовой интеграции нет, делаю через вебхуки.',
    shortAnswerEn: 'Telegram, Google Sheets, popular CRMs, email, payment systems and any service with an API. If a native integration doesn\'t exist, I build it via webhooks.',
    fullAnswerRu: [
      'Telegram, Google Sheets, популярные CRM, почту, платёжные системы и любой сервис с API. Если готовой интеграции нет, делаю через вебхуки.',
      'Для автоматизации сценариев использую n8n, Make или прямые вебхуки/микросервисы на Node.js. Легко связываю формы на сайте с Telegram-уведомлениями, сделками в CRM и автоматической отправкой документов.',
      'Также подключаю ИИ-ассистентов (Claude / OpenAI / Gemini) для автоматической квалификации входящих заявок, составления ответов и формирования саммари.'
    ],
    fullAnswerEn: [
      'Telegram, Google Sheets, popular CRMs, email, payment systems and any service with an API. If a native integration doesn\'t exist, I build it via webhooks.',
      'For automated workflows, I use n8n, Make, or custom Node.js webhooks. Website leads are automatically routed to your Telegram notifications, CRM deals, and Google Sheets in real-time.',
      'Additionally, I integrate AI models (Claude, OpenAI, Gemini) to automatically qualify leads, draft responses, and generate client summaries.'
    ],
    keyHighlightRu: 'Telegram, CRM, Sheets, почта, платежи и вебхуки',
    keyHighlightEn: 'Telegram, CRM, Sheets, payments & custom webhooks'
  },

  // 4. What if I don't know what to automate?
  {
    id: 'dont-know-what-to-automate',
    category: 'tech',
    categoryLabelRu: 'Аудит и автоматизация',
    categoryLabelEn: 'Speed & Tech Stack',
    questionRu: 'Что если я не знаю, что именно автоматизировать?',
    questionEn: 'What if I don\'t know what to automate?',
    shortAnswerRu: 'Для этого и проводится аудит. Мы раскладываем ваши процессы, находим рутину, которая съедает больше всего времени или лидов, и начинаем с автоматизации с максимальной окупаемостью.',
    shortAnswerEn: 'That\'s what the audit is for. We map your processes, find the routine that costs the most time or leads, and start with the highest-ROI automation.',
    fullAnswerRu: [
      'Для этого и проводится аудит. Мы раскладываем ваши процессы, находим рутину, которая съедает больше всего времени или лидов, и начинаем с автоматизации с максимальной окупаемостью.',
      'На созвоне мы смотрим на всю цепочку: как приходит заявка, кто отвечает, куда переносятся данные, где возникают задержки и теряются клиенты.',
      'По итогам аудита вы получаете карту узких мест и пошаговый план: начинаем с самого быстрого внедрения, которое освободит больше всего времени.'
    ],
    fullAnswerEn: [
      'That\'s what the audit is for. We map your processes, find the routine that costs the most time or leads, and start with the highest-ROI automation.',
      'During discovery, we trace your complete customer journey: lead intake, inquiry responses, manual data entry, handoff delays, and client drop-offs.',
      'You receive a bottleneck map and an action plan prioritizing automations that deliver the highest time savings and fastest return on investment.'
    ],
    keyHighlightRu: 'Аудит узких мест • Карта процессов • Максимальная окупаемость',
    keyHighlightEn: 'Bottleneck audit • Process map • Maximum ROI prioritization'
  },

  // 5. А если потом что-то нужно поменять?
  {
    id: 'future-changes',
    category: 'terms',
    categoryLabelRu: 'Поддержка и изменения',
    categoryLabelEn: 'Maintenance & Updates',
    questionRu: 'А если потом что-то нужно поменять?',
    questionEn: 'What if I need to update prices, texts, or add new blocks later?',
    shortAnswerRu: 'Удобная панель управления / понятные конфиги для самостоятельных правок + 30 дней гарантии на любые доработки.',
    shortAnswerEn: 'Intuitive management options for self-serve edits + 30 days of free post-launch support.',
    fullAnswerRu: [
      'Вам не придется обращаться к программисту из-за каждой опечатки или смены цены. Я настраиваю проект так, чтобы вы или ваш администратор могли легко обновлять тексты, фотографии, контакты и прайс-лист.',
      'В стоимость включено 30 дней бесплатной гарантийной поддержки: если в первый месяц потребуется скорректировать формулировки, блоки или настройки интеграций — я сделаю это оперативно и бесплатно.',
      'В дальнейшем мы можем работать по разовым мини-задачам с фиксированной оплатой или по комфортному ежемесячному абонементу техподдержки.'
    ],
    fullAnswerEn: [
      'You will never need to hire a developer just to tweak a price or change a phone number. Projects are configured with clean content schemas and intuitive admin hooks for quick updates.',
      'Every project includes 30 days of complimentary technical warranty: any post-launch text adjustments, styling refinements, or integration tuning are executed swiftly at zero cost.',
      'Moving forward, ongoing support is available via ad-hoc task tickets or an affordable monthly retainer.'
    ],
    keyHighlightRu: 'Легкое самостоятельное редактирование + 30 дней поддержки',
    keyHighlightEn: 'Easy self-serve content edits + 30 days free warranty'
  },

  // 6. Мы не в Минске - вы работаете?
  {
    id: 'remote-work-regions',
    category: 'terms',
    categoryLabelRu: 'География работы',
    categoryLabelEn: 'Geographic Coverage',
    questionRu: 'Мы не в Минске - вы работаете?',
    questionEn: 'We are located outside Minsk — can we still collaborate remotely?',
    shortAnswerRu: 'Да! Работаю по всей Беларуси, России, странам СНГ, Европе и всему миру полностью удаленно.',
    shortAnswerEn: 'Yes! I collaborate with clients across Belarus, Russia, the CIS, Europe, the UAE, and worldwide remotely.',
    fullAnswerRu: [
      'Конечно! Более 70% моих проектов успешно запускаются дистанционно. Я работаю с заказчиками из всех городов Беларуси (Минск, Брест, Гродно, Гомель, Витебск, Могилев), России (Москва, Санкт-Петербург, Екатеринбург), Казахстана, ОАЭ и Европы.',
      'Все этапы прозрачно согласуются онлайн: созвоны в Telegram, Google Meet или Zoom, демонстрация прототипов в Figma, регулярные отчеты каждые 2–3 дня.',
      'Официальный договор подписывается с помощью юридически значимой электронной подписи (или обмен скан-копиями с оригиналами по почте). Оплата принимается по безналичному расчету (BYN, RUB, USD, EUR) с полным пакетом закрывающих актов.'
    ],
    fullAnswerEn: [
      'Absolutely! Over 70% of my client portfolio is delivered remotely. I work with founders and marketing teams across all regions of Belarus (Minsk, Brest, Grodno, Gomel, Vitebsk), Russia, Kazakhstan, the UAE, the EU, and the US.',
      'Workflow is seamlessly handled online: video syncs on Google Meet/Telegram, interactive prototype reviews in Figma, and transparent progress updates every 2–3 days.',
      'Contracts are formalized via electronic signature or official scanned agreements, with full corporate invoicing supported in BYN, RUB, USD, and EUR.'
    ],
    keyHighlightRu: 'Удаленная работа без границ • Договор и безналичный расчет',
    keyHighlightEn: 'Seamless remote collaboration • Official contracts & wire transfers'
  },

  // 7. Что, если мне не понравится дизайн?
  {
    id: 'design-guarantee',
    category: 'core',
    categoryLabelRu: 'Дизайн и согласование',
    categoryLabelEn: 'Design Process',
    questionRu: 'Что, если мне не понравится дизайн?',
    questionEn: 'What happens if I don’t like the initial design concept?',
    shortAnswerRu: 'Риск исключен: создаем интерактивный прототип в Figma и вносим правки до тех пор, пока вы не будете довольны на 100%.',
    shortAnswerEn: 'Zero visual risk: we develop interactive Figma prototypes with unlimited refinement loops before writing code.',
    fullAnswerRu: [
      'Ситуация, когда вам сдают готовый сайт, который вам не нравится, исключена моей методикой работы.',
      'Мы никогда не пишем код вслепую. Сначала заполняем бриф, собираем референсы понравившихся вам стилей и анализируем топовых конкурентов. Затем я создаю кликабельный прототип и дизайн-концепцию в Figma.',
      'Вы видите сайт в деталях до верстки. В каждый этап заложены итерации правок. Разработка кода начинается строго после того, как вы лично утвердите финальный макет.'
    ],
    fullAnswerEn: [
      'Surprises at delivery are strictly prevented by my step-by-step validation methodology.',
      'We never write code prematurely. We first examine brand identity guidelines, analyze benchmark competitors, and craft a bespoke interactive design in Figma.',
      'You inspect every screen, typography choice, and hover state beforehand. Engineering commences strictly after your explicit sign-off on the Figma mockup.'
    ],
    keyHighlightRu: 'Поэтапное утверждение в Figma до написания единой строчки кода',
    keyHighlightEn: 'Milestone sign-off in Figma prior to any software engineering'
  },

  // 8. Можно переделать уже существующий сайт?
  {
    id: 'redesign-existing',
    category: 'tech',
    categoryLabelRu: 'Редизайн и модернизация',
    categoryLabelEn: 'Redesign & Overhaul',
    questionRu: 'Можно переделать уже существующий сайт?',
    questionEn: 'Can you modernize and redesign our existing website?',
    shortAnswerRu: 'Да, провожу глубокий редизайн с сохранением накопленного SEO-веса, переносом данных и ускорением работы.',
    shortAnswerEn: 'Yes, full architectural overhaul with SEO link equity preservation and dramatic performance gains.',
    fullAnswerRu: [
      'Да, модернизация и перезапуск устаревших сайтов — одна из частых задач. Если ваш текущий сайт медленно грузится, морально устарел по дизайну или плохо адаптирован под смартфоны — мы сделаем из него современный инструмент продаж.',
      'При редизайне я обязательно сохраняю ваш накопленный поисковый трафик: настраиваю корректные 301-редиректы со старых URL, переношу структуру ключевых страниц и контент.',
      'В результате вы получаете свежий премиальный дизайн, ускорение загрузки в 3–5 раз и рост конверсии без потери позиций в поисковиках.'
    ],
    fullAnswerEn: [
      'Yes, renovating lagging legacy websites is one of my core strengths. If your current site is slow, visually outdated, or fails on mobile screens, we transform it into a modern conversion engine.',
      'Crucially, I protect your accrued SEO link equity: setting up airtight 301 redirects from historical URLs, migrating existing content, and maintaining keyword structures.',
      'You gain a contemporary visual identity, 3–5x faster page speed, and elevated conversion rates without losing search ranks.'
    ],
    keyHighlightRu: 'Сохранение SEO-позиций и 301-редиректы при полной модернизации',
    keyHighlightEn: 'Preservation of SEO rankings & 301 redirects during overhaul'
  },

  // 9. Кто владеет сайтом и кодом?
  {
    id: 'ownership-rights',
    category: 'core',
    categoryLabelRu: 'Права и доступы',
    categoryLabelEn: 'Intellectual Property',
    questionRu: 'Кто владеет сайтом и кодом?',
    questionEn: 'Who owns the final source code, domain, and intellectual property?',
    shortAnswerRu: '100% исключительных прав, чистый исходный код и все аккаунты безраздельно принадлежат вам.',
    shortAnswerEn: '100% intellectual property ownership, master credentials, and clean GitHub source code belong exclusively to you.',
    fullAnswerRu: [
      'Вы и только вы. В отличие от конструкторов и некоторых недобросовестных агентств, я не держу клиентов в заложниках абонентской платы за использование кода.',
      'Домен, хостинг, Telegram-боты (через @BotFather) и базы данных регистрируются на ваши контакты и юридическое лицо. По окончании проекта передается полный архив с исходным кодом, репозиторий на GitHub и инструкции.',
      'Вы независимы: в любой момент проект можно перенести, доработать силами любого программиста или масштабировать.'
    ],
    fullAnswerEn: [
      'You own everything outright. Unlike proprietary builders or vendor-locking agencies, there are zero recurring platform licenses.',
      'Domain names, hosting servers, Telegram bot tokens, and database instances are created under your direct credentials. Upon sign-off, you receive full production repositories on GitHub along with deployment guides.',
      'You have complete sovereignty: free to host anywhere, expand internally, or delegate future tasks to any developer.'
    ],
    keyHighlightRu: 'Полная независимость: исходный код и доступы передаются вам',
    keyHighlightEn: 'Complete independence: source code & credentials transferred to you'
  },

  // 10. Как устроен платный аудит процессов за $500 и как он засчитывается в разработку?
  {
    id: 'paid-process-audit',
    category: 'terms',
    categoryLabelRu: 'Аудит и оплата',
    categoryLabelEn: 'Audit & Payment Terms',
    questionRu: 'Как устроен платный аудит процессов за $500 и как он засчитывается в разработку?',
    questionEn: 'How does the $500 process audit work and how is it credited toward development?',
    shortAnswerRu: 'Аудит стоит $500 (100% предоплата). Мы проводим 60-минутный созвон, строим карту узких мест и план автоматизации. Если вы начинаете разработку в течение 30 дней, все $500 идут в зачёт стоимости проекта.',
    shortAnswerEn: 'The audit is $500 (100% upfront). We conduct a 60-minute deep dive, map bottlenecks, and build an automation roadmap. If you start development within 30 days, the full $500 is credited toward your build.',
    fullAnswerRu: [
      'Аудит процессов — это глубокая предпроектная аналитика, а не короткий вводный созвон (20-минутный ознакомительный созвон у нас бесплатный). За $500 мы подробно разбираем, куда уходит рабочее время команды, где теряются входящие заявки и какие ручные действия можно исключить.',
      'По итогам вы получаете: 60-минутный созвон с разбором, наглядную карту узких мест и ручной рутины, приоритизированный план автоматизации с оценкой окупаемости (ROI), подбор оптимального стека инструментов (n8n, CRM, Telegram, ИИ) и коммерческое предложение с фиксированной ценой на разработку.',
      'Главный плюс для бизнеса — нулевой финансовый риск: стоимость аудита ($500) полностью засчитывается в счёт разработки, если мы начинаем проект в течение 30 дней.'
    ],
    fullAnswerEn: [
      'The process audit is a comprehensive discovery engagement, distinct from our free 20-minute intro call. For $500, we thoroughly investigate where your team wastes manual hours, where leads leak from your funnel, and which handoffs can be fully automated.',
      'Deliverables include: a 60-minute discovery session, a detailed map of bottlenecks and manual routine, a prioritized automation plan with estimated ROI, a recommended tool stack (n8n, CRM, Telegram, AI), and a fixed-price proposal with complete solution architecture.',
      'Zero wasted budget: the entire $500 audit fee is credited toward your build if you initiate development within 30 days.'
    ],
    keyHighlightRu: '$500 • 60-мин созвон • Карта узких мест • 100% засчитывается в разработку',
    keyHighlightEn: '$500 fee • 60-min session • Bottleneck map • 100% credited toward build'
  },

  // 11. Что входит в ежемесячное сопровождение за $250/мес и можно ли его отменить?
  {
    id: 'ongoing-care-plan',
    category: 'terms',
    categoryLabelRu: 'Сопровождение и поддержка',
    categoryLabelEn: 'Care Plan & Maintenance',
    questionRu: 'Что входит в ежемесячное сопровождение за $250/мес и можно ли его отменить?',
    questionEn: 'What is included in the $250/mo ongoing care plan and can it be cancelled?',
    shortAnswerRu: '24/7 мониторинг сценариев с алертами, быстрое устранение сбоев, адаптация под обновления API, до 2 небольших доработок в месяц и приоритет в Telegram. Оплата помесячно, отмена в любой момент.',
    shortAnswerEn: '24/7 workflow monitoring with error alerts, fast bug fixes, API update adaptations, up to 2 minor tweaks per month, and priority Telegram support. Paid monthly, cancel anytime.',
    fullAnswerRu: [
      'После официального релиза любого проекта действует 30 дней бесплатной гарантийной поддержки. Ежемесячный Care Plan ($250/мес) подключается по вашему желанию, если бизнесу нужно постоянное наблюдение за критичными интеграциями и оперативная реакция на любые изменения.',
      'В сопровождение входит: автоматический мониторинг n8n-сценариев 24/7 с мгновенными алертами об ошибках, срочное устранение сбоев, адаптация под обновления сторонних API (Telegram, CRM, платёжные шлюзы, банки), до 2 небольших доработок в месяц и ежемесячный отчёт.',
      'Подписка оформляется с оплатой вперёд за каждый месяц. Никаких привязок или долгосрочных обязательств: вы можете приостановить или отменить сопровождение в любой момент.'
    ],
    fullAnswerEn: [
      'Every turnkey project includes 30 days of complimentary warranty. The $250/mo Ongoing Care Plan is an optional retainer for businesses requiring continuous oversight of mission-critical workflows and integrations.',
      'The plan includes: 24/7 automated n8n workflow monitoring with instant error alerts, rapid troubleshooting, adaptation when third-party APIs change (Telegram, CRM, payment gateways), up to 2 small improvements each month, and a monthly health summary.',
      'Billed month-to-month in advance with zero long-term commitments: you can pause or cancel the care plan at any time without fees or penalties.'
    ],
    keyHighlightRu: '$250/мес • 24/7 мониторинг • До 2 доработок в месяц • Отмена в любой момент',
    keyHighlightEn: '$250/mo • 24/7 monitoring • Up to 2 tweaks/month • Cancel anytime'
  }
];

interface FaqSectionProps {
  onOpenContact?: (customNote?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'tech' | 'terms'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // By default, expand first 2 items to give immediate answers
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faster-than-wordpress': true,
    'seo-included': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_ITEMS.forEach(item => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const filteredItems = FAQ_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const qText = (language === 'en' ? item.questionEn : item.questionRu).toLowerCase();
    const shortAns = (language === 'en' ? item.shortAnswerEn : item.shortAnswerRu).toLowerCase();
    const fullAns = (language === 'en' ? item.fullAnswerEn : item.fullAnswerRu).join(' ').toLowerCase();

    return qText.includes(q) || shortAns.includes(q) || fullAns.includes(q);
  });

  const categories = [
    { id: 'all', labelRu: `Все ${FAQ_ITEMS.length} вопросов`, labelEn: `All ${FAQ_ITEMS.length} Questions`, count: FAQ_ITEMS.length },
    { id: 'core', labelRu: 'Дизайн и гарантии', labelEn: 'Design & Guarantees', count: FAQ_ITEMS.filter(i => i.category === 'core').length },
    { id: 'tech', labelRu: 'Стек & Автоматизация', labelEn: 'Speed & Tech Stack', count: FAQ_ITEMS.filter(i => i.category === 'tech').length },
    { id: 'terms', labelRu: 'Удаленно и оплата', labelEn: 'Remote & Terms', count: FAQ_ITEMS.filter(i => i.category === 'terms').length },
  ];

  return (
    <section 
      id="faq" 
      className="py-20 sm:py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Lighting & Soft Ambient Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-blue-700 mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('Честные ответы без маркетинговой воды', 'Honest & Transparent Answers')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight mb-4">
            {language === 'ru' ? (
              <>
                ОТВЕЧАЕМ НА ЧАСТЫЕ{' '}
                <span className="text-gradient-blue">
                  ВОПРОСЫ
                </span>
              </>
            ) : (
              <>
                ANSWERING FREQUENT{' '}
                <span className="text-gradient-blue">
                  QUESTIONS
                </span>
              </>
            )}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {t(
              'Все условия, сроки, владение кодом и гарантии фиксируются в договоре. Если у вас останется вопрос — напишите мне напрямую.',
              'Everything from timelines and IP ownership to 30-day warranty is set in writing. Have an edge-case question? Connect with me directly.'
            )}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => {
              const label = language === 'en' ? cat.labelEn : cat.labelRu;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  data-cursor="button"
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-md shadow-blue-500/20'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <span>{label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white font-bold' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-500">
            <button
              onClick={expandAll}
              data-cursor="button"
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              {t('Развернуть все', 'Expand all')}
            </button>
            <span>•</span>
            <button
              onClick={collapseAll}
              data-cursor="button"
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              {t('Свернуть', 'Collapse')}
            </button>
          </div>
        </div>

        {/* FAQ List styled with high contrast, crisp typography & animated Plus (+) Icon */}
        <div className="space-y-3.5 sm:space-y-4 mb-14">
          {filteredItems.map((item, idx) => {
            const isOpen = !!openItems[item.id];
            const qText = language === 'en' ? item.questionEn : item.questionRu;
            const shortAns = language === 'en' ? item.shortAnswerEn : item.shortAnswerRu;
            const fullAns = language === 'en' ? item.fullAnswerEn : item.fullAnswerRu;
            const highlight = language === 'en' ? item.keyHighlightEn : item.keyHighlightRu;

            return (
              <div
                key={item.id}
                id={`faq-item-${idx + 1}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-2 border-blue-600 shadow-md ring-4 ring-blue-50' 
                    : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-xs'
                }`}
              >
                {/* Question Trigger Bar */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  data-cursor="button"
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="pr-2">
                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {qText}
                    </h3>
                    
                    {!isOpen && (
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-1 hidden sm:block font-normal">
                        {shortAns}
                      </p>
                    )}
                  </div>

                  {/* Plus (+) Icon toggle */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-blue-600 text-white rotate-45 shadow-sm' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 border border-slate-200'
                  }`}>
                    <Plus className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100">
                        {/* Badge Key Highlight */}
                        {highlight && (
                          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        )}

                        {/* Full Paragraphs */}
                        <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {fullAns.map((p, pIdx) => (
                            <p key={pIdx}>{p}</p>
                          ))}
                        </div>

                        {/* Quick Follow-up Action */}
                        {onOpenContact && (
                          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <span className="text-xs text-slate-500">
                              {t('Хотите обсудить этот пункт под специфику вашего бизнеса?', 'Want to discuss this point specifically for your business?')}
                            </span>
                            <button
                              type="button"
                              onClick={() => onOpenContact(`${t('Вопрос из FAQ:', 'FAQ Inquiry:')} ${qText}`)}
                              data-cursor="button"
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer self-start sm:self-auto"
                            >
                              <span>{t('Задать вопрос Ульяне', 'Ask Ulyana directly')}</span>
                              <Send className="w-3 h-3 text-blue-600" />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Telegram & Phone Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 border border-blue-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left text-white relative overflow-hidden">
          <div className="space-y-1.5 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('Не нашли ответ на свой вопрос?', 'Did not find what you were looking for?')}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold text-white">
              {t('Напишите мне в Telegram напрямую', 'Message me on Telegram directly')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {t(
                'Отвечаю лично в течение 15–30 минут. Обсудим проект, подскажу оптимальное решение и сориентирую по точной стоимости.',
                'I respond personally within 15–30 minutes to discuss your project scope, recommend the best tech stack, and estimate budget.'
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10">
            <a
              href="https://t.me/u_ulyana_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer"
            >
              <Send className="w-4 h-4 text-blue-600" />
              <span>{t('Написать в Telegram @u_ulyana_dev', 'Message Telegram @u_ulyana_dev')}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
