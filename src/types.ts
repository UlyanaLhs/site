export type CaseCategory = 'all' | 'web-design' | 'development' | 'automation-bots';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  clientRole: string;
  country: string;
  url: string;
  category: 'web-design' | 'development' | 'automation-bots';
  tags: string[];
  coverGradient: string;
  accentColor: string;
  badgeRu?: string;
  badgeEn?: string;
  
  // Concrete Numbers & Business Metrics
  metrics: {
    highlight: string;
    highlightEn?: string;
    label: string;
    labelEn?: string;
    description: string;
    descriptionEn?: string;
  }[];
  
  titleRu?: string;
  titleEn?: string;
  challenge: string;
  challengeEn?: string;
  solution: string;
  solutionEn?: string;
  businessResults: string[];
  businessResultsEn?: string[];
  techStack: string[];
  testimonial?: {
    text: string;
    textEn?: string;
    author: string;
    role: string;
    roleEn?: string;
  };
}

export interface ServiceTier {
  id: string;
  title: string;
  tagline: string;
  idealFor: string;
  timeline: string;
  features: string[];
  deliverables: string[];
  popular?: boolean;
}

export interface ClientReview {
  id: string;
  author: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  highlightMetric: string;
}

export type { TelegramBotCase } from './data/botsData';

