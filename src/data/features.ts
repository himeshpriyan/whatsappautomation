import { FeatureHighlight, GridFeature, StatItem } from "@/types";

export const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    id: "broadcast",
    tag: "High-Converting Outreach",
    badgeText: "98% Open Rate",
    title: "Scale Conversions with Smart WhatsApp Broadcasts",
    description:
      "Send hyper-personalized promotional campaigns, event announcements, and discount offers with rich media, interactive CTA buttons, and intelligent audience segmentation.",
    subFeatures: [
      {
        title: "Clickable Quick-Reply & CTA Buttons",
        description: "Guide users straight to checkout or support with single-tap interactive action buttons.",
        icon: "MousePointerClick",
      },
      {
        title: "Smart Audience Segmentation & Tags",
        description: "Target high-intent customers based on past purchase history, tags, and behavior.",
        icon: "Filter",
      },
      {
        // Compliance fix: removed unverified claim, see audit notes
        title: "Meta Cloud API Ready",
        description: "Built for WhatsApp Business API compliance and secure messaging standards.",
        icon: "ShieldCheck",
      },
    ],
    ctaText: "Explore Broadcast Marketing",
    ctaHref: "/features/broadcast",
    imageType: "broadcast",
    accentColor: "emerald",
  },
  {
    id: "chatbot",
    tag: "Autonomous 24/7 AI Sales",
    badgeText: "GPT-4o Powered",
    title: "Build Intelligent AI Chatbots in Minutes without Code",
    description:
      "Design self-driving conversational workflows that qualify leads, answer FAQs, book appointments, and close deals directly on WhatsApp while you sleep.",
    subFeatures: [
      {
        title: "Visual Drag-and-Drop Flow Canvas",
        description: "Connect triggers, conditional logic branches, forms, and custom webhooks effortlessly.",
        icon: "Workflow",
      },
      {
        title: "Generative AI Knowledge Base Sync",
        description: "Train your bot on your website URLs, PDFs, and catalog data for instant context-aware answers.",
        icon: "BrainCircuit",
      },
      {
        title: "Seamless Human Agent Handover",
        description: "Automatically transfer complex conversations to live support agents with complete context.",
        icon: "Headphones",
      },
    ],
    ctaText: "Discover AI Chatbots",
    ctaHref: "/features/ai-chatbot",
    imageType: "chatbot",
    accentColor: "cyan",
  },
  {
    id: "payments",
    tag: "Conversational Commerce",
    badgeText: "Native WhatsApp Pay",
    title: "Turn WhatsApp Chats into Your Highest Converting Storefront",
    description:
      "Showcase your entire product catalog, manage abandoned cart recovery, and collect payments seamlessly with native WhatsApp Pay, UPI, Stripe, and Razorpay.",
    subFeatures: [
      {
        title: "Interactive Multi-Product Catalogs",
        description: "Allow customers to browse items, select variants, and add to cart without leaving WhatsApp.",
        icon: "ShoppingBag",
      },
      {
        title: "Automated Abandoned Cart Sequences",
        description: "Trigger timely nudges with custom coupons that recover up to 35% of lost checkouts.",
        icon: "RotateCcw",
      },
      {
        title: "1-Click Direct In-Chat Checkout",
        description: "Collect instant payments with automated invoice generation and real-time order status updates.",
        icon: "CreditCard",
      },
    ],
    ctaText: "See WhatsApp Commerce",
    ctaHref: "/features/commerce",
    imageType: "payments",
    accentColor: "emerald",
  },
];

export const STATS_ITEMS: StatItem[] = [
  {
    id: "open-rate",
    value: "98",
    suffix: "%",
    label: "Average Open Rate",
    sublabel: "Compared to standard 18% email open rates",
    growth: "5.4x vs Email",
    icon: "MailOpen",
  },
  {
    id: "click-rate",
    value: "52",
    suffix: "%",
    label: "Click-Through Rate",
    sublabel: "On rich interactive quick-reply buttons",
    growth: "3.2x vs SMS",
    icon: "TrendingUp",
  },
  {
    id: "active-users",
    value: "2.8",
    suffix: "B+",
    label: "Global Reach",
    sublabel: "Active monthly WhatsApp users worldwide",
    growth: "180+ Countries",
    icon: "Globe",
  },
  {
    id: "response-time",
    value: "< 4",
    suffix: "s",
    label: "AI Response Time",
    sublabel: "Instant lead qualification and issue resolution",
    growth: "24/7 Availability",
    icon: "Zap",
  },
];

export const GRID_FEATURES: GridFeature[] = [
  {
    id: "team-inbox",
    icon: "Users",
    title: "Multi-Agent Live Chat Inbox",
    description:
      "Equip your sales and customer success team with a unified inbox. Assign chats, leave internal notes, filter by department, and track agent performance.",
    badge: "Collaboration",
    metrics: "Shared Inbox",
    highlightText: "Real-time presence & auto-assignment",
    href: "/features/shared-inbox",
  },
  {
    id: "analytics",
    icon: "BarChart3",
    title: "Real-Time Deep Analytics",
    description:
      "Track message delivery rates, read timestamps, button click conversions, agent first-response times, and revenue attribution across every campaign.",
    badge: "Insights",
    metrics: "Live Dashboards",
    highlightText: "Export CSVs & Webhook data",
    href: "/features/analytics",
  },
  {
    id: "flow-builder",
    icon: "GitFork",
    title: "No-Code Flow Builder",
    description:
      "Design personalized multi-step customer journeys, drip automation campaigns, and lead nurture funnels with zero coding knowledge required.",
    badge: "Automation",
    metrics: "Drag & Drop",
    highlightText: "Branching conditions & triggers",
    href: "/features/ai-chatbot",
  },
  {
    id: "ctwa-ads",
    icon: "Target",
    title: "Click-to-WhatsApp Ads (CTWA)",
    description:
      "Convert Facebook & Instagram ad clicks straight into a conversational WhatsApp sales funnel with zero drop-off and higher ROAS.",
    badge: "Acquisition",
    metrics: "Higher ROAS",
    highlightText: "Automated instant lead welcome",
    href: "/features/ctwa",
  },
  {
    id: "green-tick",
    icon: "CheckCircle2",
    title: "Green Tick Verification Guidance",
    description:
      "Build trust and credibility with Meta's official Green Verified Tick badge next to your brand name. We provide guidance on application prerequisites.",
    badge: "Trust & Safety",
    metrics: "Verified Badge",
    highlightText: "Guidance on Meta eligibility",
    href: "/contact?subject=green-tick",
  },
  {
    id: "api-integrations",
    icon: "Boxes",
    // Compliance fix: removed unverified claim, see audit notes
    title: "CRM, E-Commerce & REST APIs",
    description:
      "Connect Shopify, WooCommerce, HubSpot, Zoho, Zapier, and custom software seamlessly with high-throughput REST APIs and webhooks.",
    badge: "Ecosystem",
    // Compliance fix: removed unverified claim, see audit notes
    metrics: "Ecosystem Apps",
    highlightText: "Webhooks & developer SDKs",
    href: "/features/integrations",
  },
];

export const TRUSTED_BRANDS = [
  { name: "Apex Retail", category: "E-Commerce", logo: "AP" },
  { name: "Zenith EdTech", category: "Education", logo: "ZE" },
  { name: "Nova Health", category: "Healthcare", logo: "NO" },
  { name: "UrbanSpaces", category: "Real Estate", logo: "UR" },
  { name: "SwiftFin Pay", category: "Fintech", logo: "SW" },
  { name: "Aura Luxury", category: "D2C Fashion", logo: "AU" },
  { name: "LogiTrans Express", category: "Logistics", logo: "LO" },
  { name: "CloudScale HQ", category: "SaaS", logo: "CL" },
];

export const VALUE_PROPS_LIST = [
  "Meta Cloud API Pass-Through Rates",
  "Assisted WhatsApp Green Tick Application Guidance",
  "98% Verified Message Open Rates",
  "Zero Message Markup Fees",
  "14-Day Full Access Free Trial",
  "1,000 Free Monthly Service Conversations",
  "Shopify, WooCommerce & CRM Sync",
  "GPT-4o Context-Aware AI Chatbots",
];
