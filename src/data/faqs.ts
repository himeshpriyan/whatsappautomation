import { FAQItemData } from "@/types";

export const FAQS_DATA: FAQItemData[] = [
  {
    id: "faq-1",
    question: "What is Zecsoft and how is it different from the standard WhatsApp Business App?",
    answer:
      "Zecsoft is built directly on the official Meta WhatsApp Business Cloud API. Unlike the standard free WhatsApp Business App (which is limited to 4 linked devices and has strict anti-spam broadcast limits of 256 contacts), Zecsoft allows you to send unlimited broadcasts to opted-in users, assign unlimited human agents on a single phone number, build automated AI chatbots, integrate with your CRM/e-commerce store, and apply for the official Meta Green Tick badge.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Is there any risk of my WhatsApp number getting banned when using Zecsoft?",
    answer:
      "Zero ban risk! Zecsoft uses the 100% official Meta WhatsApp Cloud API. We enforce compliance with WhatsApp's Business Messaging guidelines and template approval workflows, ensuring your business phone number remains healthy, verified, and protected from arbitrary bans associated with unauthorized third-party scrapers.",
    category: "API & Setup",
  },
  {
    id: "faq-3",
    question: "Can I migrate my existing WhatsApp Business number to Zecsoft?",
    answer:
      "Yes! You can either use a fresh virtual phone number or migrate your existing business number. If your number is currently registered on WhatsApp or WhatsApp Business mobile apps, we provide a simple 5-minute unlinking and API registration wizard with zero downtime.",
    category: "API & Setup",
  },
  {
    id: "faq-4",
    question: "How does the pricing and WhatsApp conversation fee work?",
    answer:
      "Our pricing consists of a transparent monthly or annual subscription (for software access, multi-agent inbox, chatbot builder, CRM integrations) plus Meta's official conversation charges at direct pass-through rates. Meta also provides 1,000 free service (customer-initiated) conversations each month for every WhatsApp Business account.",
    category: "Pricing",
  },
  {
    id: "faq-5",
    question: "Can I build AI chatbots without any programming skills?",
    answer:
      "Absolutely! Zecsoft includes an intuitive drag-and-drop visual canvas. You can configure branching logic, keyword triggers, interactive button menus, form collection steps, and even connect GPT-4 AI knowledge bases trained on your website FAQs and catalogs in just a few clicks.",
    category: "Features",
  },
  {
    id: "faq-6",
    question: "Do you offer assistance with getting the official WhatsApp Green Tick badge?",
    answer:
      "Yes! All customers on our Scale / Pro and Enterprise plans receive complimentary end-to-end guidance and direct application submission to Meta for the official Green Verified Tick badge next to their brand name.",
    category: "General",
  },
  {
    id: "faq-7",
    question: "Which e-commerce and CRM tools can I integrate with Zecsoft?",
    answer:
      "Zecsoft provides native 1-click integrations with Shopify, WooCommerce, Magento, HubSpot, Zoho CRM, Salesforce, Google Sheets, Zapier, Make (Integromat), Razorpay, Stripe, and rich REST APIs/Webhooks to connect to any custom internal backend.",
    category: "Features",
  },
  {
    id: "faq-8",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a full-featured 14-day free trial with no credit card required. You can test broadcast campaigns, configure chatbot flows, test API webhooks, and explore all team inbox features immediately upon signing up.",
    category: "Pricing",
  },
];
