import { Testimonial } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Head of Growth",
    company: "LuxeSkin Cosmetics (D2C)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote:
      "Migrating from AiSensy to Zechsoft transformed our retention engine. Our abandoned cart recovery soared by 38% in the first 45 days, and the GPT-4 chatbot handles over 70% of routine delivery inquiries without any human agent intervention!",
    rating: 5,
    industry: "E-Commerce",
    stats: {
      label: "Cart Recovery Lift",
      value: "+38%",
    },
  },
  {
    id: "test-2",
    name: "Rahul Mehra",
    role: "VP of Marketing",
    company: "NextGen EdTech Academy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote:
      "We run high-intent Click-to-WhatsApp Meta Ads directly into Zechsoft's automated qualification funnel. We halved our counseling cost-per-lead and saw webinar attendance jump from 22% to 64% with timely WhatsApp broadcast reminders.",
    rating: 5,
    industry: "EdTech",
    stats: {
      label: "Webinar Attendance",
      value: "64%",
    },
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Operations Director",
    company: "MediCare Diagnostics Network",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote:
      "Zechsoft's multi-agent shared inbox and automated PDF lab report dispatch simplified operations for our 12 diagnostic clinics. Patients receive their reports in seconds on WhatsApp, and no-shows dropped by 60%.",
    rating: 5,
    industry: "Healthcare",
    stats: {
      label: "No-Show Reduction",
      value: "-60%",
    },
  },
];

export const REVIEW_PLATFORMS = [
  { name: "G2 Crowd", rating: "4.9 / 5.0", badge: "Leader in WhatsApp API" },
  { name: "Capterra", rating: "4.8 / 5.0", badge: "Best Value 2026" },
  { name: "Trustpilot", rating: "4.9 / 5.0", badge: "Excellent" },
  { name: "Shopify App Store", rating: "5.0 / 5.0", badge: "Top Rated Plugin" },
];
