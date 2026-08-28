import { FAQItemData } from "@/types";

export const FAQS_DATA: FAQItemData[] = [
  {
    id: "faq-1",
    question: "What is Zechsoft and how is it different from the standard WhatsApp Business App?",
    answer:
      // Compliance fix: removed unverified claim, see audit notes
      "Zechsoft connects directly with the WhatsApp Business Cloud API. Unlike the standard free WhatsApp Business App (which is limited to linked devices and has strict broadcast limitations), Zechsoft allows you to send scheduled broadcasts to opted-in users, assign multiple team agents on a single phone number, build automated AI chatbots, integrate with your CRM/e-commerce store, and receive assistance applying for the Meta Green Tick badge.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Is there any risk of my WhatsApp number getting banned when using Zechsoft?",
    answer:
      // Compliance fix: removed unverified claim, see audit notes
      "Zechsoft utilizes official WhatsApp Cloud API protocols and enforces adherence to WhatsApp's Business Messaging policies, opt-in guidelines, and template approval workflows, protecting your business phone number from arbitrary bans associated with unauthorized scraping tools.",
    category: "API & Setup",
  },
  {
    id: "faq-3",
    question: "Can I migrate my existing WhatsApp Business number to Zechsoft?",
    answer:
      "Yes! You can either use a fresh virtual phone number or migrate your existing business number. If your number is currently registered on WhatsApp or WhatsApp Business mobile apps, we provide a step-by-step onboarding wizard to register your number with the Cloud API.",
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
      "Absolutely! Zechsoft includes an intuitive drag-and-drop visual canvas. You can configure branching logic, keyword triggers, interactive button menus, form collection steps, and connect GPT-4 AI knowledge bases trained on your website FAQs and catalogs in just a few clicks.",
    category: "Features",
  },
  {
    id: "faq-6",
    question: "Do you offer assistance with getting the official WhatsApp Green Tick badge?",
    answer:
      "Yes! Customers on our Pro and Enterprise plans receive guidance and support for submitting their application to Meta for the official Green Verified Tick badge next to their brand name.",
    category: "General",
  },
  {
    id: "faq-7",
    question: "Which e-commerce and CRM tools can I integrate with Zechsoft?",
    answer:
      "Zechsoft provides integrations with Shopify, WooCommerce, Magento, HubSpot, Zoho CRM, Salesforce, Google Sheets, Zapier, Make (Integromat), Razorpay, Stripe, and REST APIs/Webhooks to connect to your custom internal backend.",
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
