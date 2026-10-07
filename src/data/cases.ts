import { CaseStudy, ClientReview } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'revenue-engine-multi-agent',
    title: 'Revenue Engine: multi-agent sales system',
    titleRu: 'Revenue Engine: мультиагентная система продаж',
    titleEn: 'Revenue Engine: multi-agent sales system',
    subtitle: 'Мультиагентная система продаж & автономный аутрич',
    client: 'Alexander V.',
    clientRole: 'B2B Founder',
    country: 'Remote / Global',
    url: 'https://t.me/u_ulyana_dev',
    category: 'automation-bots',
    tags: ['n8n', 'AI agents', 'Telegram'],
    coverGradient: 'from-blue-950 via-teal-950 to-slate-900',
    accentColor: '#10B981',
    badgeRu: 'Своя система',
    badgeEn: 'Own system',
    metrics: [
      {
        highlight: '25 ч/нед',
        highlightEn: '25 hrs/wk',
        label: 'Экономия времени',
        labelEn: 'Time reclaimed',
        description: '25 часов в неделю освобождено для стратегических задач и закрытия сделок',
        descriptionEn: '25 hours per week reclaimed from manual prospecting for strategy and closing'
      },
      {
        highlight: '24%',
        highlightEn: '24%',
        label: 'Конверсия в ответ',
        labelEn: 'Reply rate conversion',
        description: 'Персонализированный ИИ-аутрич повысил отклик клиентов',
        descriptionEn: 'Personalized AI outreach significantly increased prospect response rate'
      },
      {
        highlight: '2.6x',
        highlightEn: '2.6x',
        label: 'Рост встреч с ЛПР',
        labelEn: 'Increase in qualified calls',
        description: 'Многоуровневый скоринг лидов через ИИ отсекает нецелевые контакты',
        descriptionEn: 'Multi-stage AI lead scoring pipeline before instant dispatch to Telegram'
      }
    ],
    challenge: 'Ручной поиск лидов, скоринг и фоллоу-апы отнимали весь день фаундера.',
    challengeEn: "Manual lead search, scoring and follow-ups consumed the founder's day.",
    solution: 'Поиск лидов, скоринг и аутрич работают автоматически; фаундер подключается только к квалифицированным диалогам.',
    solutionEn: 'Lead sourcing, scoring and outreach run automatically; the founder only handles qualified conversations.',
    businessResults: [
      'Поиск лидов, скоринг и аутрич работают автоматически; фаундер подключается только к квалифицированным диалогам.',
      '25 часов в неделю освобождено для стратегических задач',
      'Многоуровневый скоринг лидов через ИИ перед передачей в Telegram'
    ],
    businessResultsEn: [
      'Lead sourcing, scoring and outreach run automatically; the founder only handles qualified conversations.',
      '25 hours per week reclaimed for strategic tasks',
      'Multi-stage AI lead scoring pipeline before instant dispatch to Telegram'
    ],
    techStack: ['n8n', 'AI agents', 'Telegram', 'Claude / OpenAI / Gemini', 'Webhooks'],
    testimonial: {
      text: 'Система полностью закрыла рутину по поиску и квалификации. Теперь я общаюсь только с теми, кто уже готов к сделке.',
      textEn: 'The system completely automated outbound prospecting and qualification. I only join conversations with buyers ready to close.',
      author: 'Александр В.',
      role: 'Фаундер',
      roleEn: 'B2B Founder'
    }
  },
  {
    id: 'glow-by-elena',
    title: 'Glow by Elena',
    subtitle: 'Премиум-студия эстетической косметологии & ухода',
    client: 'Елена Смирнова',
    clientRole: 'Основательница студии',
    country: 'Кипр / Limassol',
    url: 'https://glow-by-elena.base44.app',
    category: 'web-design',
    tags: ['Веб-дизайн', 'Онлайн-запись', 'Авто-квалификация', 'LTV'],
    coverGradient: 'from-blue-900 via-slate-900 to-emerald-950',
    accentColor: '#10B981',
    metrics: [
      {
        highlight: '+74%',
        highlightEn: '+74%',
        label: 'Конверсия в запись',
        labelEn: 'Booking conversion',
        description: 'Рост онлайн-бронирований с первого экрана без звонка администратору'
      },
      {
        highlight: '2 мин',
        highlightEn: '2 min',
        label: 'Время бронирования',
        labelEn: 'Booking duration',
        description: 'Вместо 40 минут долгой переписки в мессенджерах'
      },
      {
        highlight: '68%',
        highlightEn: '68%',
        label: 'Возврат клиентов (LTV)',
        labelEn: 'Repeat client retention (LTV)',
        description: 'Благодаря автоматическим напоминаниям о повторной процедуре'
      }
    ],
    challenge: 'Клиенты терялись на этапе долгой ручной переписки: администратор отвечал с задержкой 2-4 часа, теряя до 35% горячих заявок из рекламы. Требовался премиальный сайт с мгновенной онлайн-записью и подтверждением визита.',
    solution: 'Спроектировала эстетичный сайт в светлой палитре с глубокими акцентами, внедрила умный интерактивный селектор процедур с моментальным выбором времени мастера и авто-отправкой уведомления в чат клиента.',
    businessResults: [
      'Полная разгрузка администратора на 18 рабочих часов в неделю',
      'Окупаемость разработки сайта — 19 дней с момента запуска трафика',
      'Средний чек процедур вырос на 22% за счет удобного блока доп. услуг'
    ],
    techStack: ['React', 'Tailwind CSS', 'Figma UX/UI', 'Booking Engine', 'Telegram Webhook'],
    testimonial: {
      text: 'Раньше мы теряли клиентов вечером и в выходные, когда салон закрыт. Теперь сайт работает как лучший менеджер 24/7. В первый же месяц выручка выросла на треть!',
      author: 'Елена Смирнова',
      role: 'Владелица салона'
    }
  },
  {
    id: 'garnet-thyme-table',
    title: 'Garnet & Thyme',
    subtitle: 'Гастрономический ресторан & авторский лаунж',
    client: 'Марк Браун',
    clientRole: 'Управляющий партнер',
    country: 'ОАЭ / Дубай',
    url: 'https://garnet-thyme-table.base44.app',
    category: 'development',
    tags: ['Разработка', 'Интерактивное меню', 'Система брони столов', 'Высокий чек'],
    coverGradient: 'from-blue-950 via-slate-900 to-teal-950',
    accentColor: '#34D399',
    metrics: [
      {
        highlight: '+140%',
        highlightEn: '+140%',
        label: 'Прямые брони столов',
        labelEn: 'Direct reservations',
        description: 'Прямые резервации через собственный сайт в обход платных агрегаторов'
      },
      {
        highlight: '-85%',
        highlightEn: '-85%',
        label: 'Телефонная рутина хостес',
        labelEn: 'Hostess phone calls',
        description: 'Автоматизация подтверждения броней и депозитов'
      },
      {
        highlight: 'x2.2',
        highlightEn: 'x2.2',
        label: 'Рост броней банкетов',
        labelEn: 'Banquet bookings growth',
        description: 'Специальный конфигуратор приватных мероприятий'
      }
    ],
    challenge: 'Ресторан платил высокие комиссии внешним платформам бронирования и терял прямую базу гостей. В вечерние часы телефон хостес был непрерывно занят, из-за чего гости уходили к конкурентам.',
    solution: 'Создан высокоскоростной веб-продукт с атмосферной презентацией авторских блюд, динамической картой зон посадки и модулем мгновенного подтверждения стола с SMS/мессенджер-уведомлением.',
    businessResults: [
      'Экономия более $3,400 ежемесячно на комиссионных сборах агрегаторов',
      'Нулевая задержка при подтверждении стола в пиковые вечерние часы',
      'База постоянных гостей выросла на 1,200+ контактов за 2 месяца'
    ],
    techStack: ['TypeScript', 'Tailwind CSS', 'Next Architecture', 'Figma', 'Fast API Hook'],
    testimonial: {
      text: 'Сайт полностью решил проблему вечернего хаоса с бронями. Гости отмечают, что наш сайт выглядит дороже, чем у большинства мишленовских ресторанов в городе.',
      author: 'Марк Браун',
      role: 'Управляющий рестораном'
    }
  },
  {
    id: 'smart-science-dmitry',
    title: 'Smart Science Academy',
    subtitle: 'Образовательная платформа & подготовка к международным олимпиадам',
    client: 'Дмитрий Романов',
    clientRole: 'Основатель & ведущий ментор',
    country: 'Германия / Берлин',
    url: 'https://smart-science-dmitry.base44.app',
    category: 'development',
    tags: ['Веб-сервис', 'Личный кабинет', 'Онбординг учеников', 'Автоматизация'],
    coverGradient: 'from-blue-900 via-indigo-950 to-emerald-900',
    accentColor: '#00F5B8',
    metrics: [
      {
        highlight: 'x3.1',
        highlightEn: 'x3.1',
        label: 'Записи на пробный урок',
        labelEn: 'Trial signups',
        description: 'Рост конверсии посетителей лендинга в активных учеников'
      },
      {
        highlight: '30 ч/мес',
        highlightEn: '30 hrs/mo',
        label: 'Экономия времени',
        labelEn: 'Time reclaimed',
        description: 'Автоматическая выдача доступов и проверочных материалов'
      },
      {
        highlight: '94%',
        highlightEn: '94%',
        label: 'Доходимость до курса',
        labelEn: 'Course completion',
        description: 'Встроенные цепочки прогрева и напоминаний о занятиях'
      }
    ],
    challenge: 'Преподаватель тратил до 4 часов в день на отправку учебных материалов, ручную проверку оплат и переписку с родителями, что не позволяло масштабировать поток учеников.',
    solution: 'Разработан современный образовательный портал со структурированным каталогом курсов, интерактивным тестированием уровня знаний и автоматизированным распределением учеников по группам.',
    businessResults: [
      'Поток учеников увеличен с 25 до 80 человек без найма ассистента',
      'Цикл от первого знакомства до оплаты курса сократился с 5 дней до 1 часа',
      'Автоматизировано 100% рутинных уведомлений об уроках'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Interactive Quiz Logic', 'CRM Integration'],
    testimonial: {
      text: 'Благодаря автоматизации платформы я наконец-то занимаюсь преподаванием, а не бесконечной перепиской. Прибыль проекта утроилась всего за квартал!',
      author: 'Дмитрий Романов',
      role: 'Руководитель академии'
    }
  },
  {
    id: 'sokolova-soul-space',
    title: 'Sokolova Soul Space',
    subtitle: 'Кабинет психологического консультирования & трансформационный коучинг',
    client: 'Анна Соколова',
    clientRole: 'Практикующий психолог',
    country: 'Грузия / Тбилиси',
    url: 'https://sokolova-soul-space.base44.app',
    category: 'web-design',
    tags: ['Веб-дизайн', 'Глубокий брендинг', 'Квалификатор клиентов', 'Высокий чек'],
    coverGradient: 'from-slate-900 via-blue-950 to-emerald-950',
    accentColor: '#10B981',
    metrics: [
      {
        highlight: '+88%',
        highlightEn: '+88%',
        label: 'Конверсия с рекламы',
        labelEn: 'Ad conversion',
        description: 'Чистый эмоциональный дизайн вызывает мгновенное доверие к эксперту'
      },
      {
        highlight: '100%',
        highlightEn: '100%',
        label: 'Целевые клиенты',
        labelEn: 'Target client fit',
        description: 'Интерактивный предварительный опрос отсеивает нецелевые запросы'
      },
      {
        highlight: '+45%',
        highlightEn: '+45%',
        label: 'Рост стоимости сессии',
        labelEn: 'Session rate growth',
        description: 'Премиальное позиционирование позволило повысить прайс'
      }
    ],
    challenge: 'Эксперт привлекала клиентов через сарафанное радио, но при запуске холодного трафика большинство людей уходили из-за отсутствия четкого структурированного позиционирования.',
    solution: 'Спроектирован глубокий, доверительный лендинг с мягкой типографикой, ясной структурой направлений работы и встроенным интерактивным диагностическим тестом для клиента.',
    businessResults: [
      'Запись заполнена на 1.5 месяца вперед без необходимости активных продаж',
      'Исключены пустые консультации благодаря предварительному опросу',
      'Повышение среднего чека долгосрочного сопровождения на 45%'
    ],
    techStack: ['UI/UX Design', 'React', 'Tailwind CSS', 'Multi-step Form', 'Motion'],
    testimonial: {
      text: 'Сайт отражает мою философию до мелочей. Клиенты приходят уже подготовленными, понимая ценность работы. Это совершенно другой уровень диалога.',
      author: 'Анна Соколова',
      role: 'Психолог, гештальт-терапевт'
    }
  },
  {
    id: 'morozov-legal-shield',
    title: 'Morozov Legal Shield',
    subtitle: 'Адвокатская практика & корпоративная юридическая защита',
    client: 'Сергей Морозов',
    clientRole: 'Управляющий партнер',
    country: 'Польша / Варшава',
    url: 'https://morozov-legal-shield.base44.app',
    category: 'automation-bots',
    tags: ['Юриспруденция', 'Авто-квалификатор лидов', 'Корпоративный сайт', 'B2B'],
    coverGradient: 'from-blue-950 via-slate-900 to-cyan-950',
    accentColor: '#38BDF8',
    metrics: [
      {
        highlight: '$18,400',
        highlightEn: '$18,400',
        label: 'Экономия на первичных консультациях',
        labelEn: 'Intake triage savings',
        description: 'За счет автоматического сбора документов и вводных данных дела'
      },
      {
        highlight: '+52%',
        highlightEn: '+52%',
        label: 'Крупные B2B контракты',
        labelEn: 'Retained B2B contracts',
        description: 'Рост обращений от владельцев бизнеса и международных компаний'
      },
      {
        highlight: '15 мин',
        highlightEn: '15 min',
        label: 'Время ответа на заявку',
        labelEn: 'Inquiry response time',
        description: 'Вместо прежних 24 часов за счет мгновенной диспетчеризации'
      }
    ],
    challenge: 'Юристы тратили до 50% времени на первичное выяснение деталей дела, 70% из которых оказывались нецелевыми или малобюджетными. Сайт выглядел устаревшим и не внушал авторитета.',
    solution: 'Разработан строгий технологичный портал с пошаговым аудитором ситуации: система автоматически классифицирует отрасль права, собирает вводные данные и готовит бриф для профильного юриста.',
    businessResults: [
      'Юристы получают готовый пакет фактов перед первым созвоном с клиентом',
      'Заключено 14 новых долгосрочных абонентских B2B-контрактов за квартал',
      'Окупаемость проекта достигнута с первой же выигранной крупной сделки'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Smart Intake Engine', 'Webhooks'],
    testimonial: {
      text: 'Мы избавились от бессмысленных часовых созвонов с нецелевой аудиторией. Теперь мы работаем только с теми делами, где действительно можем заработать и помочь.',
      author: 'Сергей Морозов',
      role: 'Старший адвокат'
    }
  },
  {
    id: 'volkov-event-vibe',
    title: 'Volkov Event Vibe',
    subtitle: 'Режиссура масштабных событий, фестивалей & закрытых приемов',
    client: 'Артем Волков',
    clientRole: 'Генеральный продюсер',
    country: 'Сербия / Белград',
    url: 'https://volkov-event-vibe.base44.app',
    category: 'web-design',
    tags: ['Event-индустрия', 'Интерактивный расчет смет', 'Шоу-кейсы', 'Конверсия'],
    coverGradient: 'from-blue-900 via-slate-900 to-emerald-900',
    accentColor: '#10B981',
    metrics: [
      {
        highlight: '2.8x',
        highlightEn: '2.8x',
        label: 'Рост крупных заявок',
        labelEn: 'Enterprise RFP growth',
        description: 'Количество заявок на бюджеты от $25,000 увеличилось почти втрое'
      },
      {
        highlight: '-6 дней',
        highlightEn: '-6 days',
        label: 'Цикл согласования сделки',
        labelEn: 'Sales cycle contraction',
        description: 'Интерактивный конфигуратор концепций снимает вопросы заказчика'
      },
      {
        highlight: '91%',
        highlightEn: '91%',
        label: 'Глубина просмотра портфолио',
        labelEn: 'Portfolio view depth',
        description: 'Вовлекающая анимация и визуальная драматургия страницы'
      }
    ],
    challenge: 'Старый сайт агентства был перегружен текстом и статичными фото, не передавая драйв и статус событий. Согласование предварительной сметы с корпоративным клиентом занимало до 10 дней.',
    solution: 'Создан кинематографичный веб-сайт с видео-акцентами, динамическим калькулятором формата события (число гостей, сцена, свет, локация) и моментальной выгрузкой ориентировочной сметы.',
    businessResults: [
      'Клиент получает предварительную визуализацию и смету прямо на сайте за 3 минуты',
      'Сокращение работы продюсера над первичными КП в 4 раза',
      'Привлечено 6 международных брендов на годовое обслуживание'
    ],
    techStack: ['React', 'Motion Animation', 'Dynamic Budget Estimator', 'Tailwind CSS'],
    testimonial: {
      text: 'После запуска клиенты звонят со словами: «Мы посмотрели ваш сайт и сразу поняли, что наше мероприятие должно быть только с вами». Результат превзошел ожидания.',
      author: 'Артем Волков',
      role: 'Основатель агентства'
    }
  },
  {
    id: 'quirky-prime-floor-flow',
    title: 'Prime Floor Flow',
    subtitle: 'Инженерные напольные покрытия & архитектурные интерьерные решения',
    client: 'Игорь Васильев',
    clientRole: 'Коммерческий директор',
    country: 'Казахстан / Алматы',
    url: 'https://quirky-prime-floor-flow.base44.app',
    category: 'development',
    tags: ['Каталог продукции', 'B2B партнерство', 'Заказ образцов', 'E-commerce'],
    coverGradient: 'from-slate-900 via-blue-950 to-teal-950',
    accentColor: '#2DD4BF',
    metrics: [
      {
        highlight: '+115%',
        highlightEn: '+115%',
        label: 'Запросы образцов дизайнерами',
        labelEn: 'Architect sample orders',
        description: 'Автоматизированная отправка наборов образцов в архитектурные бюро'
      },
      {
        highlight: '42%',
        highlightEn: '42%',
        label: 'Повторные заказы (LTV)',
        labelEn: 'Repeat client rate',
        description: 'Выстроенная система работы с постоянными подрядчиками'
      },
      {
        highlight: '3.4 мин',
        highlightEn: '3.4 min',
        label: 'Подбор материала',
        labelEn: 'Material calculation time',
        description: 'Умный фильтр по нагрузке, влажности и дизайну помещения'
      }
    ],
    challenge: 'Архитекторы и дизайнеры интерьеров не находили точных технических спецификаций, путались в артикулах и уходили к поставщикам с более удобным цифровым сервисом.',
    solution: 'Разработан премиальный каталог с удобной фильтрацией, детальными 3D-текстурами, калькулятором необходимого метража с учетом запаса на подрезку и быстрым заказом образцов в один клик.',
    businessResults: [
      'Подключено более 85 новых дизайнерских бюро в партнерскую сеть',
      'Число ошибок при расчете необходимого объема материала сократилось до нуля',
      'Рост оборота B2B-направления на 48% за первое полугодие'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Material Area Calculator', 'Fast Search'],
    testimonial: {
      text: 'Наш каталог стал эталоном для дизайнеров. Они сами открывают наш сайт на встречах со своими клиентами для согласования материалов. Это наш главный инструмент продаж.',
      author: 'Игорь Васильев',
      role: 'Коммерческий директор'
    }
  },
  {
    id: 'vanilla-sweet-studio',
    title: 'Vanilla Sweet Studio',
    subtitle: 'Крафтовое кондитерское ателье & кастомные торты',
    client: 'Виктория Левина',
    clientRole: 'Шеф-кондитер',
    country: 'Армения / Ереван',
    url: 'https://vanilla-sweet-studio.base44.app',
    category: 'automation-bots',
    tags: ['Конструктор заказов', 'E-commerce', 'Чат-бот ассистент', 'Авто-калькулятор'],
    coverGradient: 'from-blue-950 via-slate-900 to-emerald-950',
    accentColor: '#34D399',
    metrics: [
      {
        highlight: '-90%',
        highlightEn: '-90%',
        label: 'Время на согласование торта',
        labelEn: 'Custom order briefing time',
        description: 'Интерактивный конструктор вкусов, веса и декора прямо на сайте'
      },
      {
        highlight: '+28%',
        highlightEn: '+28%',
        label: 'Рост среднего чека',
        labelEn: 'Average order value',
        description: 'Удобный выбор премиального декора и ягодного наполнения в 1 клик'
      },
      {
        highlight: '4.9/5.0',
        highlightEn: '4.9/5.0',
        label: 'Индекс удовлетворенности',
        labelEn: 'Satisfaction rating',
        description: 'Клиенты видят точную итоговую стоимость сразу без сюрпризов'
      }
    ],
    challenge: 'Шеф-кондитер проводила по 3-4 часа в день в переписке, отвечая на вопросы: «а сколько килограмм нужно на 15 человек?», «какие начинки есть?» и «сколько стоит такой декор?».',
    solution: 'Создан вкусный, визуально безупречный сайт с интерактивным конструктором торта: клиент выбирает количество персон, форму, бисквит, крем и декор, сразу видит итоговый вес и оформляет бронь даты.',
    businessResults: [
      'Все параметры заказа сразу приходят кондитеру в готовом структурированном виде',
      'Количество принятых заказов на выходные дни выросло в 2.5 раза',
      'Шеф освободила себе половину рабочего дня для творческой работы'
    ],
    techStack: ['React', 'Custom Product Configurator', 'Tailwind CSS', 'Instant Order Dispatch'],
    testimonial: {
      text: 'Это спасло мой бизнес от выгорания. Раньше я боялась праздников из-за шквала сообщений. Теперь все заказы залетают автоматически со всеми деталями!',
      author: 'Виктория Левина',
      role: 'Шеф-кондитер'
    }
  },
  {
    id: 'chisto-plus-hub',
    title: 'Chisto Plus Hub',
    subtitle: 'Сервис комплексного клининга & фасилити-менеджмента для B2B и домов',
    client: 'Алексей Кузнецов',
    clientRole: 'Операционный директор',
    country: 'Литва / Вильнюс',
    url: 'https://chisto-plus-hub.base44.app',
    category: 'development',
    tags: ['Веб-приложение', 'Авто-диспетчеризация', 'Подписочная модель', 'CRM'],
    coverGradient: 'from-blue-900 via-slate-900 to-teal-900',
    accentColor: '#00F5B8',
    metrics: [
      {
        highlight: '340+',
        highlightEn: '340+',
        label: 'Регулярных подписок в месяц',
        labelEn: 'Recurring monthly clients',
        description: 'Переход с разовых уборок на стабильную ежемесячную подписку'
      },
      {
        highlight: '-45%',
        highlightEn: '-45%',
        label: 'Простой выездных клинеров',
        labelEn: 'Cleaner crew idle time',
        description: 'Автоматическая логистика и привязка по районам города'
      },
      {
        highlight: '99.4%',
        highlightEn: '99.4%',
        label: 'Точность расчетной сметы',
        labelEn: 'Estimate calculation accuracy',
        description: 'Прозрачный калькулятор площади без скрытых платежей'
      }
    ],
    challenge: 'Бизнес страдал от нестабильности разовых заказов и долгого расчета стоимости клининга коммерческих офисов. Диспетчеры вручную сводили графики 30 клинеров в блокнотах.',
    solution: 'Спроектирована и запущена веб-платформа с прозрачным калькулятором уборки по типу помещения, внедрен формат выгодной ежемесячной подписки и авто-назначение бригады по расписанию.',
    businessResults: [
      'Доля постоянных регулярных клиентов выросла с 15% до 64%',
      'Операционные расходы на координацию персонала снижены на $2,800/мес',
      'Выручка компании удвоилась за 4 месяца после внедрения подписок'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Subscription Billing Logic', 'Dispatch System'],
    testimonial: {
      text: 'Внедрение подписочной модели на сайте полностью перевернуло финансовую стабильность нашей компании. Мы выросли в 2 раза за полгода!',
      author: 'Алексей Кузнецов',
      role: 'Операционный директор'
    }
  },
  {
    id: 'milashevskaya-growth-space',
    title: 'Milashevskaya Growth Space',
    subtitle: 'Бутик бизнес-консалтинга, стратегических сессий & масштабирования компаний',
    client: 'Ольга Милашевская',
    clientRole: 'Executive-коуч & бизнес-трекер',
    country: 'Австрия / Вена',
    url: 'https://milashevskaya-growth-space.base44.app',
    category: 'web-design',
    tags: ['Бизнес-консалтинг', 'Премиум-дизайн', 'Квалификатор бизнеса', 'Telegram-бот'],
    coverGradient: 'from-slate-950 via-blue-950 to-emerald-950',
    accentColor: '#10B981',
    metrics: [
      {
        highlight: '+160%',
        highlightEn: '+160%',
        label: 'Корпоративные запросы',
        labelEn: 'Corporate inquiries',
        description: 'Рост прямых обращений от генеральных директоров и фаундеров'
      },
      {
        highlight: '78%',
        highlightEn: '78%',
        label: 'Удержание клиентов (LTV)',
        labelEn: 'Client retention (LTV)',
        description: 'Переход разовых стратегических сессий в годовой консалтинг'
      },
      {
        highlight: '3 мин',
        highlightEn: '3 min',
        label: 'Первичный скоринг бизнеса',
        labelEn: 'Diagnostic intake time',
        description: 'Бизнес-ассистент собирает ключевые метрики компании до встречи'
      }
    ],
    challenge: 'Эксперту высокого уровня требовалось позиционирование, соответствующее чекам от €5,000 за сессию. Старый лендинг не отражал масштаб методологии и привлекал микро-бизнес с неподходящими запросами.',
    solution: 'Создан респектабельный сайт с архитектурной типографикой, строгими контрастами и автоматическим сценарием квалификации масштаба бизнеса (обороты, число сотрудников, ключевые барьеры роста).',
    businessResults: [
      'Успешный выход на европейский рынок с повышением среднего чека в 2.4 раза',
      'Каждая встреча со стратегическим клиентом начинается с уже заполненного профиля проблем',
      'Загрузка эксперта расписана на 3 месяца вперед'
    ],
    techStack: ['React', 'Tailwind CSS', 'Figma High-End UI', 'Scoring Logic', 'Telegram Assistant'],
    testimonial: {
      text: 'Сайт выглядит как ресурс топового швейцарского консалтинга. Первые лица компаний доверяют с первого взгляда, а скоринг позволяет экономить массу сил при первой встрече.',
      author: 'Ольга Милашевская',
      role: 'Executive-коуч'
    }
  },
  {
    id: 'autologist-fulfillment-pipeline',
    title: 'AutoLogist: E-commerce Fulfillment & Warehouse Pipeline',
    titleRu: 'AutoLogist: сквозная синхронизация склада и заказов',
    titleEn: 'AutoLogist: E-commerce Fulfillment & Warehouse Pipeline',
    subtitle: 'Автоматизация: Магазин → 1С / МойСклад → Telegram-диспетчер → ТТН курьеру',
    client: 'Дмитрий Соколов',
    clientRole: 'Операционный директор сети ритейла',
    country: 'Польша / Варшава',
    url: 'https://t.me/u_ulyana_dev',
    category: 'automation-bots',
    tags: ['n8n', '1С / МойСклад', 'AmoCRM', 'Склад & Логистика', 'Telegram Bot'],
    coverGradient: 'from-blue-950 via-indigo-950 to-teal-950',
    accentColor: '#10B981',
    metrics: [
      {
        highlight: '30 сек',
        highlightEn: '30 sec',
        label: 'Время сборки заказа',
        labelEn: 'Order processing time',
        description: 'Вместо 45 минут ручного переноса между 3 базами',
        descriptionEn: 'Down from 45 minutes of manual copy-pasting across 3 systems'
      },
      {
        highlight: '0%',
        highlightEn: '0%',
        label: 'Ошибок комплектации',
        labelEn: 'Fulfillment errors',
        description: 'Исключены пересорты, дубли и отправка не на тот адрес',
        descriptionEn: 'Zero inventory mismatch, duplicate dispatches, or wrong addresses'
      },
      {
        highlight: '18 ч/нед',
        highlightEn: '18 hrs/wk',
        label: 'Экономия операторов',
        labelEn: 'Team hours saved per week',
        description: 'Разгрузка 4 сотрудников склада и службы клиентской поддержки',
        descriptionEn: 'Reclaimed for 4 warehouse and customer support operators'
      }
    ],
    challenge: 'Операторы вручную копировали заказы с сайта в 1С и AmoCRM, путали остатки на складе, а создание курьерских накладных занимало по 10-15 минут на каждую посылку. В пиковые дни до 15% заказов задерживались.',
    challengeEn: 'Operators manually copied orders from the website into ERP and CRM, miscounted inventory, and creating courier waybills took 10-15 minutes per parcel. During peaks, 15% of dispatches were delayed.',
    solution: 'Разработан комплексный n8n-сценарий: моментальный перехват вебхука оплаты, автоматическая резервация товара на складе, генерация трек-номера курьерской службы и авто-уведомление покупателя в Telegram и SMS.',
    solutionEn: 'Built an end-to-end n8n workflow: instant payment webhook capture, automated warehouse stock reservation, courier API waybill generation, and real-time customer status notifications via Telegram & SMS.',
    businessResults: [
      'Обработка 100% входящих заказов переведена в режим реального времени без участия человека',
      'Скорость отгрузки заказов клиентам выросла в 3.2 раза',
      'Экономия $2,400 в месяц на предотвращении ошибок комплектации и возвратов'
    ],
    businessResultsEn: [
      '100% of incoming orders processed autonomously in real-time with zero manual entry',
      'Order dispatch throughput accelerated by 3.2x',
      '$2,400 monthly savings by eliminating inventory mismatch and return shipping errors'
    ],
    techStack: ['n8n', 'PostgreSQL', 'Telegram API', 'Courier API (DPD/InPost)', 'CRM Webhooks', '1С / ERP'],
    testimonial: {
      text: 'Раньше в черную пятницу операторы сидели до ночи со слезами на глазах. Теперь система сама формирует накладные и списывает остатки за секунды. Ни единого потерянного заказа за полгода!',
      textEn: 'During peak sales our warehouse operators were swamped with manual entry. Now the pipeline issues waybills and deducts stock in seconds. Zero lost shipments in six months!',
      author: 'Дмитрий Соколов',
      role: 'Операционный директор',
      roleEn: 'Chief Operating Officer'
    }
  },
  {
    id: 'finflow-b2b-billing',
    title: 'FinFlow B2B: Autonomous Invoicing & Receivables',
    titleRu: 'FinFlow B2B: автоматический биллинг и контроль дебиторки',
    titleEn: 'FinFlow B2B: Autonomous Invoicing & Receivables',
    subtitle: 'Генерация PDF счетов, актов по шаблону и умные напоминания об оплате',
    client: 'Роман Мельник',
    clientRole: 'Управляющий партнер B2B IT-агентства',
    country: 'ОАЭ / Дубай',
    url: 'https://t.me/u_ulyana_dev',
    category: 'automation-bots',
    tags: ['n8n', 'Google Docs / PDF', 'Stripe / Банк', 'Авто-биллинг', 'Telegram Алерты'],
    coverGradient: 'from-slate-950 via-blue-950 to-emerald-950',
    accentColor: '#34D399',
    metrics: [
      {
        highlight: '-12 дней',
        highlightEn: '-12 days',
        label: 'Сокращение кассового разрыва',
        labelEn: 'Cash cycle reduction',
        description: 'Клиенты оплачивают счета быстрее благодаря умной цепочке напоминаний',
        descriptionEn: 'Clients settle invoices faster thanks to automated smart reminder chains'
      },
      {
        highlight: '100%',
        highlightEn: '100%',
        label: 'Авто-генерация актов',
        labelEn: 'Autonomous doc generation',
        description: 'Счета и закрывающие акты формируются автоматически за 2 секунды',
        descriptionEn: 'Invoices and signed acceptance acts generated automatically in 2 seconds'
      },
      {
        highlight: '$3,200/мес',
        highlightEn: '$3,200/mo',
        label: 'Экономия на бухгалтерии',
        labelEn: 'Accounting cost savings',
        description: 'Исключен наем дополнительного помощника бухгалтера',
        descriptionEn: 'Eliminated the need to hire an additional accounting assistant'
      }
    ],
    challenge: 'Бухгалтер тратила 25+ часов в месяц на ручное создание счетов в PDF, рассылку по почтам и ручной мониторинг просроченных платежей. Просроченная дебиторская задолженность достигала 28% от месячного оборота.',
    challengeEn: 'The accounting team spent 25+ hours monthly generating manual PDF invoices, emailing them, and tracking delinquent payments. Overdue accounts receivable reached 28% of monthly turnover.',
    solution: 'Внедрен n8n-пайплайн: при закрытии этапа сделки в CRM система генерирует брендированный PDF счет и акт, подписывает факсимиле, отправляет клиенту в Telegram и Email с цепочкой вежливых напоминаний до оплаты.',
    solutionEn: 'Implemented an automated n8n pipeline: when a deal stage closes in CRM, the system generates a branded PDF invoice & act, applies e-signatures, dispatches to client, and executes polite reminder sequences upon due dates.',
    businessResults: [
      'Объем просроченной дебиторской задолженности снизился с 28% до 3.5%',
      'Время на выставление и сверку документов сократилось с 4 дней до 5 минут',
      'Управляющий получает ежедневную утреннюю финансовую сводку прямо в Telegram'
    ],
    businessResultsEn: [
      'Overdue accounts receivable plummeted from 28% to an all-time low of 3.5%',
      'Billing and accounting reconciliation cycle shortened from 4 days to 5 minutes',
      'Founders receive an automated morning Telegram financial briefing with cash inflows and aging reports'
    ],
    techStack: ['n8n', 'Google Drive / Docs API', 'Stripe / Bank Webhooks', 'Telegram Bot', 'AmoCRM API'],
    testimonial: {
      text: 'Раньше приходилось лично звонить клиентам и напоминать про счета — это было неловко и отнимало кучу нервов. Теперь FinFlow делает это интеллигентно и на автопилоте. Деньги приходят в срок!',
      textEn: 'Chasing delinquent invoices manually was uncomfortable and time-consuming. FinFlow handles invoice reminders politely and autonomously. Cash collection is completely on schedule!',
      author: 'Роман Мельник',
      role: 'Основатель агентства',
      roleEn: 'Agency Founder'
    }
  },
  {
    id: 'edusync-pro-onboarding',
    title: 'EduSync Pro: Student Onboarding & Mentor Automation',
    titleRu: 'EduSync Pro: автоматизация онбординга и расписания в EdTech',
    titleEn: 'EduSync Pro: Student Onboarding & Mentor Automation',
    subtitle: 'Мгновенный доступ к платформе, распределение учеников и синхронизация Zoom',
    client: 'Ольга Берг',
    clientRole: 'Основательница международной EdTech школы',
    country: 'Германия / Мюнхен',
    url: 'https://t.me/u_ulyana_dev',
    category: 'automation-bots',
    tags: ['n8n', 'Zoom API', 'Google Calendar', 'GetCourse / LMS', 'Telegram Community'],
    coverGradient: 'from-blue-950 via-teal-950 to-slate-900',
    accentColor: '#38BDF8',
    metrics: [
      {
        highlight: '40 сек',
        highlightEn: '40 sec',
        label: 'От оплаты до доступа',
        labelEn: 'Checkout to onboarding',
        description: 'Вместо 4-6 часов ручной проверки чека куратором',
        descriptionEn: 'Down from 4-6 hours of manual receipt cross-checking by coordinators'
      },
      {
        highlight: '1,200+',
        highlightEn: '1,200+',
        label: 'Студентов на автопилоте',
        labelEn: 'Learners handled autonomously',
        description: 'Школа выросла в 4 раза без расширения штата кураторов',
        descriptionEn: 'The academy scaled 4x without hiring additional support coordinators'
      },
      {
        highlight: '99.2%',
        highlightEn: '99.2%',
        label: 'Посещаемость первых уроков',
        labelEn: 'First lesson attendance',
        description: 'Авто-напоминания со ссылкой на персональный Zoom в календарь',
        descriptionEn: 'Automated calendar invites with dynamic personalized Zoom links'
      }
    ],
    challenge: 'После запусков курсов кураторы вручную сверяли оплаты, создавали ссылки на Zoom, вносили учеников в таблицы и чаты. Ошибки в часовых поясах приводили к срыву уроков и жалобам учеников.',
    challengeEn: 'After course launches, coordinators manually cross-checked receipts, created Zoom links, and added students to private chats. Timezone errors caused missed sessions and customer churn.',
    solution: 'Построен n8n-сценарий: оплата автоматически активирует личный кабинет, создает слоты в Google Календаре с учетом таймзоны ученика, генерирует Zoom-ссылки и выдает разовые приглашения в Telegram.',
    solutionEn: 'Engineered an n8n workflow: checkout instantly unlocks LMS access, synchronizes Google Calendar slots adjusted to the student local timezone, generates Zoom links, and grants expiring Telegram invite links.',
    businessResults: [
      'Школа масштабировала поток с 300 до 1,200 учеников без найма новых кураторов',
      'Ноль жалоб на путаницу с расписанием и часовыми поясами',
      'Оценка удовлетворенности онбордингом (CSAT) выросла до 9.8 из 10'
    ],
    businessResultsEn: [
      'Scaled from 300 to 1,200 active learners without expanding the coordination team',
      'Zero complaints regarding schedule confusion or timezone mix-ups',
      'Onboarding customer satisfaction score (CSAT) climbed to 9.8/10'
    ],
    techStack: ['n8n', 'Zoom API', 'Google Calendar API', 'Telegram Bot API', 'Stripe', 'Airtable'],
    testimonial: {
      text: 'Мы наконец перестали бояться больших запусков. Раньше день старта был адом для всей команды. Теперь 500 новых студентов получают доступы и персональные календари за считанные минуты!',
      textEn: 'We no longer dread massive course launches. Launch day used to be chaotic; now 500 students get LMS access and personalized calendar slots within minutes!',
      author: 'Ольга Берг',
      role: 'Основательница академии',
      roleEn: 'Academy Founder'
    }
  }
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Михаил Тарасов',
    role: 'Основатель FinTech стартапа',
    company: 'ApexPay Solutions',
    location: 'Лондон / Дубай',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Работать с одним профессионалом такого уровня — это спасение. Никаких «передайте менеджеру, мы согласуем в четверг». Любая идея обсуждается мгновенно, дизайн и логика на высшем уровне. Сайт окупил себя еще на этапе предзаказов.',
    highlightMetric: 'Сайт окупился за 14 дней'
  },
  {
    id: 'rev-2',
    author: 'Елена Смирнова',
    role: 'Владелица премиум-студии',
    company: 'Glow Studio',
    location: 'Лимассол, Кипр',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Раньше мы теряли до трети клиентов из-за задержек с ответом в мессенджерах. После внедрения новой структуры сайта и автоматического сценария записи конверсия подскочила на 74%. Администратор наконец-то дышит спокойно!',
    highlightMetric: '+74% конверсия в запись'
  },
  {
    id: 'rev-3',
    author: 'Алексей Кузнецов',
    role: 'Операционный директор',
    company: 'Chisto Plus Hub',
    location: 'Вильнюс',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    text: 'Автоматизация логистики клининга и перевод на ежемесячные подписки дали феноменальный эффект. Раньше мы жили от заказа к заказу, а теперь у нас 340+ активных постоянных подписок каждый месяц.',
    highlightMetric: '340+ регулярных клиентов'
  }
];
