import { Testimonial } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "Head of Growth & Retention",
    company: "LuxeVogue D2C",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "Migrating from AiSensy to Zecsoft transformed our retention engine. Our abandoned cart recovery soared by 38% in the first 45 days, and the GPT-4 chatbot handles over 70% of routine delivery inquiries without any human agent intervention!",
    stats: {
      label: "Cart Recovery Increase",
      value: "+38%",
    },
    industry: "E-Commerce",
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    role: "Director of Admissions",
    company: "Global EdTech Institute",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "The Click-to-WhatsApp Ads integration is phenomenal. We get verified phone numbers instantly, students engage in real-time interactive counseling flows, and our cost-per-qualified-lead dropped by 45% compared to standard landing pages.",
    stats: {
      label: "Lead Acquisition Cost",
      value: "-45% CAC",
    },
    industry: "Education",
  },
  {
    id: "3",
    name: "Rajesh Kulkarni",
    role: "Chief Operating Officer",
    company: "CareFirst Health Network",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "Zecsoft's multi-agent shared inbox and automated PDF lab report dispatch simplified operations for our 12 diagnostic clinics. Patients receive their reports in seconds on WhatsApp, and no-shows dropped by 60%.",
    stats: {
      label: "Appointment No-Shows",
      value: "-60%",
    },
    industry: "Healthcare",
  },
];

export const REVIEW_PLATFORMS = [
  { name: "G2 Crowd", rating: "4.9/5", reviews: "250+ reviews", badge: "Leader 2026" },
  { name: "Capterra", rating: "4.8/5", reviews: "180+ reviews", badge: "Top Performer" },
  { name: "Trustpilot", rating: "4.9/5", reviews: "400+ reviews", badge: "Excellent" },
  { name: "ProductHunt", rating: "5.0/5", reviews: "Featured", badge: "#1 Product of the Day" },
];
