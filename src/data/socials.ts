export interface SocialLink {
  id: string;
  name: string;
  nameEn: string;
  handle: string;
  url: string;
  descriptionRu: string;
  descriptionEn: string;
  iconName: 'instagram' | 'threads' | 'telegram' | 'linkedin' | 'youtube';
  badgeRu?: string;
  badgeEn?: string;
  color: string;
  hoverColor: string;
}

export const ULYANA_SOCIALS: SocialLink[] = [
  {
    id: 'telegram-direct',
    name: 'Telegram (Прямая связь)',
    nameEn: 'Telegram (Direct Chat)',
    handle: '@u_ulyana_dev',
    url: 'https://t.me/u_ulyana_dev',
    descriptionRu: 'Быстрый ответ в течение 15–30 минут по любым вопросам проектов, сроков и оценки',
    descriptionEn: 'Fast response within 15–30 minutes for project scope, deadlines & estimates',
    iconName: 'telegram',
    badgeRu: 'Прямая связь',
    badgeEn: 'Fastest Response',
    color: 'from-blue-500 to-cyan-400',
    hoverColor: 'hover:border-cyan-400/60'
  },
  {
    id: 'telegram-channel',
    name: 'Telegram: Stack & Scripts',
    nameEn: 'Telegram: Stack & Scripts',
    handle: '@designdevl',
    url: 'https://t.me/designdevl',
    descriptionRu: 'Канал Stack & Scripts: реальные кейсы разработки, разборы ботов, автоматизации и веб-дизайн',
    descriptionEn: 'Stack & Scripts channel: live engineering breakdowns, bots, automations & web design',
    iconName: 'telegram',
    badgeRu: 'Stack & Scripts',
    badgeEn: 'Stack & Scripts',
    color: 'from-blue-600 to-emerald-400',
    hoverColor: 'hover:border-emerald-400/60'
  },
  {
    id: 'youtube',
    name: 'YouTube: Runs Itself',
    nameEn: 'YouTube: Runs Itself',
    handle: 'Runs Itself',
    url: 'https://www.youtube.com/channel/UCXWdCwktkHovvH376QvTWHA',
    descriptionRu: 'Канал Runs Itself: видео-разборы Telegram Mini Apps, создание автономных ботов и автоматизаций',
    descriptionEn: 'Runs Itself channel: video walkthroughs of Telegram Mini Apps, bot workflows & systems',
    iconName: 'youtube',
    badgeRu: 'Runs Itself',
    badgeEn: 'Runs Itself',
    color: 'from-red-600 to-red-400',
    hoverColor: 'hover:border-red-400/60'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    nameEn: 'Instagram',
    handle: '@ulyanadev',
    url: 'https://www.instagram.com/ulyanadev/',
    descriptionRu: 'Визуальные решения интерфейсов, процессы разработки и жизнь IT-специалиста',
    descriptionEn: 'UI/UX interface shots, live development workflows & product design',
    iconName: 'instagram',
    badgeRu: 'Дизайн & Вайб',
    badgeEn: 'Design & Workflow',
    color: 'from-pink-500 via-purple-500 to-amber-500',
    hoverColor: 'hover:border-pink-400/60'
  },
  {
    id: 'threads',
    name: 'Threads',
    nameEn: 'Threads',
    handle: '@ulyanadev',
    url: 'https://www.threads.com/@ulyanadev',
    descriptionRu: 'Короткие заметки о продуктовом мышлении, UX-паттернах и автоматизации бизнес-рутины',
    descriptionEn: 'Short notes on product thinking, UX patterns, and business automation',
    iconName: 'threads',
    badgeRu: 'Мысли & Опыт',
    badgeEn: 'Microblog',
    color: 'from-slate-200 to-slate-400',
    hoverColor: 'hover:border-slate-300/60'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    nameEn: 'LinkedIn',
    handle: 'Revenue System / Ulyana',
    url: 'https://www.linkedin.com/in/revenuesystem/?isSelfProfile=true',
    descriptionRu: 'Профессиональный профиль, международный опыт и B2B нетворкинг',
    descriptionEn: 'Professional background, international client delivery & B2B networking',
    iconName: 'linkedin',
    badgeRu: 'B2B Профиль',
    badgeEn: 'B2B Profile',
    color: 'from-blue-600 to-blue-400',
    hoverColor: 'hover:border-blue-400/60'
  }
];
