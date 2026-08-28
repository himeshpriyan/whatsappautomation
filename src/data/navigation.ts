import { NavItem } from "@/types";

export const NAV_LINKS: NavItem[] = [
  {
    label: "Product",
    href: "/features",
    children: [
      {
        label: "WhatsApp Marketing & Broadcast",
        description: "Send personalized high-converting promotional broadcasts with 98% open rates.",
        href: "/features/broadcast",
        icon: "Megaphone",
        badge: "Popular",
      },
      {
        label: "AI Chatbot Builder",
        description: "Automate customer inquiries 24/7 with zero-code drag-and-drop conversational bots.",
        href: "/features/ai-chatbot",
        icon: "Bot",
        badge: "AI Powered",
      },
      {
        label: "No-Code Flow Builder & Automation",
        description: "Design multi-step drip campaigns, branching conditions, and automated lead funnels.",
        href: "/features/automation",
        icon: "GitFork",
        badge: "Visual Canvas",
      },
      {
        label: "Multi-Agent Shared Inbox",
        description: "Collaborate with your team on a single official WhatsApp number.",
        href: "/features/shared-inbox",
        icon: "Users",
      },
      {
        label: "WhatsApp Commerce & Payments",
        description: "Send rich catalog items and collect 1-click payments directly in WhatsApp chat.",
        href: "/features/whatsapp-commerce",
        icon: "ShoppingBag",
        badge: "New",
      },
      {
        label: "Click-to-WhatsApp Ads Automation",
        description: "Capture Meta ad leads instantly on WhatsApp and auto-qualify prospects.",
        href: "/features/ctwa",
        icon: "Target",
      },
      {
        label: "CRM & API Integrations",
        description: "Connect Shopify, WooCommerce, HubSpot, Zoho, Zapier & REST Webhooks.",
        href: "/features/integrations",
        icon: "Boxes",
      },
      {
        label: "Campaign Analytics & Insights",
        description: "Track real-time delivery, button CTRs, agent CSAT, and sales revenue attribution.",
        href: "/features/analytics",
        icon: "BarChart3",
      },
      {
        label: "Green Tick Verification Guidance",
        description: "Assisted onboarding and eligibility review for Meta Official Business Account badge.",
        href: "/features/green-tick",
        icon: "CheckCircle2",
      },
    ],
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      {
        label: "E-Commerce & D2C",
        description: "Recover abandoned carts, send automated dispatch tracking & product recommendations.",
        href: "/industries#ecommerce",
        icon: "ShoppingCart",
      },
      {
        label: "EdTech & Education",
        description: "Automate admission counseling, fee reminders, webinar reminders & lead scoring.",
        href: "/industries#education",
        icon: "GraduationCap",
      },
      {
        label: "Healthcare & Clinics",
        description: "Automate doctor appointments, lab report deliveries & prescription refills.",
        href: "/industries#healthcare",
        icon: "HeartPulse",
      },
      {
        label: "Real Estate",
        description: "Send brochure PDFs, schedule site visits, and qualify property buyers automatically.",
        href: "/industries#realestate",
        icon: "Building2",
      },
      {
        label: "Banking & FinTech",
        description: "Deliver instant KYC updates, statement requests, EMI alerts, and secure OTPs.",
        href: "/industries#fintech",
        icon: "CreditCard",
      },
      {
        label: "Travel & Hospitality",
        description: "Send boarding passes, itinerary bookings, hotel check-in forms, and concierge support.",
        href: "/industries#travel",
        icon: "Plane",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const FOOTER_LINKS = {
  platform: [
    { label: "WhatsApp Broadcast", href: "/features/broadcast" },
    { label: "AI Chatbot Builder", href: "/features/ai-chatbot" },
    { label: "Automation / Flow Builder", href: "/features/automation" },
    { label: "Shared Team Inbox", href: "/features/shared-inbox" },
    { label: "WhatsApp Commerce", href: "/features/whatsapp-commerce" },
    { label: "Click to WhatsApp Ads", href: "/features/ctwa" },
    { label: "Integrations & APIs", href: "/features/integrations" },
    { label: "Campaign Analytics", href: "/features/analytics" },
    { label: "Green Tick Verification", href: "/features/green-tick" },
  ],
  industries: [
    { label: "E-commerce & Retail", href: "/industries#ecommerce" },
    { label: "Education & EdTech", href: "/industries#education" },
    { label: "Healthcare & Wellness", href: "/industries#healthcare" },
    { label: "Real Estate", href: "/industries#realestate" },
    { label: "Banking & Financial Services", href: "/industries#fintech" },
    { label: "Travel & Hospitality", href: "/industries#travel" },
  ],
  resources: [
    { label: "Documentation & API", href: "/features/integrations" },
    { label: "Case Studies & ROI", href: "/about" },
    { label: "WhatsApp Template Library", href: "/industries" },
    { label: "Pricing Calculator", href: "/pricing" },
    { label: "Meta API Policy Guide", href: "/pricing#faq" },
    { label: "Blog & Guides", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/about" },
    { label: "Terms of Service", href: "/about" },
    { label: "Data Security Policy", href: "/about" },
    { label: "Messaging Compliance", href: "/about" },
    { label: "Service SLA Details", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
  ],
};
