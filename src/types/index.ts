export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export interface FeatureHighlight {
  id: string;
  tag: string;
  title: string;
  description: string;
  subFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  ctaText: string;
  ctaHref: string;
  imageType: "broadcast" | "chatbot" | "payments" | "inbox";
  badgeText: string;
  accentColor: string;
}

export interface StatItem {
  id: string;
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  growth: string;
  icon: string;
}

export interface GridFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  metrics?: string;
  highlightText?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  companyLogo?: string;
  rating: number;
  quote: string;
  stats: {
    label: string;
    value: string;
  };
  industry: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "API & Setup" | "Features";
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  enterprise?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
  notIncluded?: string[];
  freeCredits: string;
  userSeats: string;
}

export interface IndustryUseBenefit {
  title: string;
  description: string;
  metric: string;
  templateMessage: {
    header: string;
    body: string;
    cta: string;
  };
}

export interface IndustryUseCase {
  id: string;
  name: string;
  slug: string;
  icon: string;
  badge: string;
  headline: string;
  description: string;
  stats: string;
  benefits: IndustryUseBenefit[];
}
