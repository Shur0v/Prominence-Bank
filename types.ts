
export enum HeroStyle {
  Split = 'Split',
  CenteredOverlay = 'CenteredOverlay',
  SideText = 'SideText',
  DarkFinance = 'DarkFinance',
  MinimalWhite = 'MinimalWhite',
  GradientVariant = 'GradientVariant'
}

export enum ProcessStyle {
  StepCards = 'StepCards',
  Timeline = 'Timeline',
  HorizontalBlocks = 'HorizontalBlocks',
  VerticalNumbered = 'VerticalNumbered'
}

export interface FAQItem {
  question: string;
  answer: string;
  tags: string[];
}

export interface UseCase {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  benefits: string[];
  heroStyle: HeroStyle;
  processStyle: ProcessStyle;
  steps: string[];
  useCases: UseCase[];
  faqs: FAQItem[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    slug: string;
  };
  iconName: string;
  heroImageUrl?: string;
}
