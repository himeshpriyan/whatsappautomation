import { PricingPlan } from "@/types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Growth",
    tagline: "Ideal for startups & small businesses getting started with WhatsApp outreach.",
    priceMonthly: 29,
    priceAnnual: 23,
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/signup?plan=starter",
    freeCredits: "1,000 Free Service Conversations/mo",
    userSeats: "5 Team Agent Seats",
    features: [
      "Official WhatsApp Business API Account",
      "Broadcast Campaigns up to 5,000 contacts",
      "Visual No-Code Chatbot Builder (3 Flows)",
      "Multi-Agent Shared Team Inbox (5 Users)",
      "Automated Order & Shipping Notifications",
      "Standard CSV Contact Import & Export",
      "Shopify & WooCommerce Plugin Sync",
      "Email & Live Chat Support",
    ],
    notIncluded: [
      "GPT-4 Custom Trained AI Knowledge Base",
      "Dedicated Account Manager",
      "Custom Webhook & REST API Limits",
      "Green Tick Verification Assistance",
    ],
  },
  {
    id: "pro",
    name: "Scale & Automate",
    tagline: "For fast-growing brands scaling sales, broadcasts, and automated AI support.",
    priceMonthly: 79,
    priceAnnual: 63,
    popular: true,
    ctaText: "Get Started with Pro",
    ctaHref: "/signup?plan=pro",
    freeCredits: "5,000 Free Service Conversations/mo",
    // Compliance fix: removed unverified claim, see audit notes
    userSeats: "15 Team Agent Seats",
    features: [
      "Everything in Starter, plus:",
      "Extended Contact Broadcast Volume",
      "Unlimited AI Chatbot Flows & Logic Rules",
      "GPT-4 Powered AI Knowledge Base Support",
      "15 Team Agent Seats & Permissions",
      "Click-to-WhatsApp Ads Automation (CTWA)",
      "WhatsApp Catalog & Native Payment Checkout",
      "Assisted Green Tick Application Support",
      "HubSpot, Salesforce, Zoho & Zapier Sync",
      "Priority WhatsApp & Email Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Custom",
    tagline: "Tailored infrastructure, custom LLM agents, dedicated servers, and SLA guarantees.",
    priceMonthly: 199,
    priceAnnual: 159,
    enterprise: true,
    ctaText: "Talk to Enterprise Sales",
    ctaHref: "/contact?subject=enterprise",
    freeCredits: "Custom High-Volume Conversation Quotas",
    // Compliance fix: removed unverified claim, see audit notes
    userSeats: "Custom Seats + Enterprise RBAC",
    features: [
      "Everything in Pro, plus:",
      // Compliance fix: removed unverified claim, see audit notes
      "Custom Enterprise Support SLA",
      "Custom AI Model Fine-Tuning & Multi-Source RAG",
      "Dedicated Account Manager & Solution Architect",
      "Multi-Number & Multi-Brand Organization Suite",
      // Compliance fix: removed unverified claim, see audit notes
      "Custom Webhooks & High-Throughput API Queues",
      "Enterprise Single Sign-On (SAML / Okta / Azure AD)",
      // Compliance fix: removed unverified claim, see audit notes
      "Enterprise Security Controls & Audit Logs",
      "Onboarding & Team Training Workshops",
    ],
  },
];

export const CONVERSATION_RATES = [
  {
    category: "Marketing Conversations",
    description: "Promotional messages, offers, product drops, and announcements sent to customers.",
    rateUSD: "$0.0125 / conversation",
    rateINR: "₹0.78 / conversation",
  },
  {
    category: "Utility Conversations",
    description: "Transaction alerts, order tracking, shipping updates, and OTP authentications.",
    rateUSD: "$0.0050 / conversation",
    rateINR: "₹0.31 / conversation",
  },
  {
    category: "Authentication Conversations",
    description: "Secure login OTPs and 2FA verification codes sent via WhatsApp.",
    rateUSD: "$0.0040 / conversation",
    rateINR: "₹0.25 / conversation",
  },
  {
    category: "Service (Support) Conversations",
    description: "Customer-initiated inquiries resolved within 24-hour service windows.",
    rateUSD: "$0.0035 / conversation",
    rateINR: "₹0.22 / conversation",
  },
];
