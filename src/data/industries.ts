import { IndustryUseCase } from "@/types";

export const INDUSTRY_USE_CASES: IndustryUseCase[] = [
  {
    id: "ecommerce",
    name: "E-Commerce & D2C Brands",
    slug: "ecommerce",
    icon: "ShoppingCart",
    badge: "35% Higher Cart Recovery",
    headline: "Boost Store Revenues & Automate Post-Purchase Joy on WhatsApp",
    description:
      "Transform passive browsers into repeat buyers. Automate abandoned cart recovery with dynamic coupons, send real-time dispatch tracking, and allow 1-click in-chat reordering.",
    stats: "3.4x Higher ROAS on Broadcasts",
    benefits: [
      {
        title: "Dynamic Abandoned Cart Recovery",
        description: "Trigger automated personalized messages within 30 minutes of checkout abandonment with 1-click checkout buttons.",
        metric: "38% Recovery Rate",
        templateMessage: {
          header: "🛒 Hey Sarah, your cart misses you!",
          body: "You left the *Organic Silk Serum* in your bag. Complete your purchase now and enjoy an instant 15% discount using code **ZECLUXE**.",
          cta: "⚡ Claim 15% Off & Checkout",
        },
      },
      {
        title: "Automated Shipping & Tracking Alerts",
        description: "Send live tracking links when an order is packed, shipped, out for delivery, and successfully received.",
        metric: "-55% 'Where is my order' tickets",
        templateMessage: {
          header: "📦 Order #4892 Dispatched!",
          body: "Your package is on its way via BlueDart. Estimated delivery: Tomorrow by 2:00 PM.",
          cta: "📍 Track Live Courier Status",
        },
      },
      {
        title: "Cash on Delivery (COD) Confirmation",
        description: "Verify COD orders via WhatsApp quick-reply buttons before dispatching to eliminate costly RTO returns.",
        metric: "40% Lower Return-to-Origin",
        templateMessage: {
          header: "✅ Please Confirm Your COD Order",
          body: "Order Total: $49.50. Click Confirm to dispatch or Cancel if placed by mistake.",
          cta: "👍 Confirm Order Now",
        },
      },
    ],
  },
  {
    id: "education",
    name: "Education & EdTech",
    slug: "education",
    icon: "GraduationCap",
    badge: "3x Higher Counseling Engagement",
    headline: "Nurture Student Inquiries from Lead to Enrollment",
    description:
      "Automate course brochure delivery, qualify prospective applicants with conversational bots, and send timely webinar and fee payment reminders.",
    stats: "65% Faster Student Enrollments",
    benefits: [
      {
        title: "Instant Course Brochure & Syllabus",
        description: "Send PDF syllabus and admission criteria instantly when students click on Facebook/Google Ads.",
        metric: "92% Brochure Download Rate",
        templateMessage: {
          header: "🎓 Welcome to Oxford Data Academy!",
          body: "Here is your full syllabus for the *Full Stack AI Masters Program*. Would you like to schedule a free 1-on-1 career counseling call?",
          cta: "📅 Book Free Counselor Call",
        },
      },
      {
        title: "Automated Webinar & Masterclass Nudges",
        description: "Send calendar invites and 15-minute countdown reminders directly to student WhatsApp inboxes.",
        metric: "72% Webinar Show-Up Rate",
        templateMessage: {
          header: "🔔 Starting in 15 Minutes!",
          body: "Mastering Next.js 14 with Live Demo is starting now. Click the link below to enter the live room.",
          cta: "🚀 Join Live Masterclass",
        },
      },
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    slug: "healthcare",
    icon: "HeartPulse",
    badge: "60% Drop in Appointment No-Shows",
    headline: "Deliver Compassionate Patient Care with Instant Automation",
    description:
      "Allow patients to book clinic visits, receive encrypted lab test reports, get dosage reminders, and connect with on-call specialists effortlessly.",
    stats: "99.4% Patient Satisfaction Rate",
    benefits: [
      {
        title: "Self-Service Doctor Booking",
        description: "Let patients choose available dates, time slots, and doctor specialties directly in an interactive WhatsApp flow.",
        metric: "Instant Booking in < 1 min",
        templateMessage: {
          header: "🩺 CareFirst Clinic - Booking Confirmation",
          body: "Your appointment with *Dr. Emily Chen (Cardiologist)* is scheduled for Tomorrow at 10:30 AM at Central Clinic.",
          cta: "📍 Get Clinic Directions",
        },
      },
      {
        title: "Automated Lab Report Delivery",
        description: "Securely send password-protected PDF blood tests and diagnostic reports directly to the patient's phone.",
        metric: "Zero Waiting in Clinic Queue",
        templateMessage: {
          header: "📄 Your Diagnostic Report is Ready",
          body: "Your Complete Blood Panel (CBC) test results are attached. Password is the last 4 digits of your mobile number.",
          cta: "📥 Download Medical PDF",
        },
      },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate & Developers",
    slug: "realestate",
    icon: "Building2",
    badge: "5x Site Visit Conversions",
    headline: "Qualify High-Ticket Property Buyers in Real Time",
    description:
      "Send immersive floor plans, video walkthroughs, pricing sheets, and automatically schedule VIP site visits for luxury properties.",
    stats: "48% Higher Qualified Site Visits",
    benefits: [
      {
        title: "Interactive Property Brochure & Video Tours",
        description: "Deliver virtual 3D property tours, floor layouts, and cost breakdown sheets instantly upon ad engagement.",
        metric: "88% Lead Engagement",
        templateMessage: {
          header: "🏢 Elysium Grand - Luxury 3 & 4 BHK Residences",
          body: "Discover panoramic skyline views, private plunge pools, and world-class amenities starting at $1.2M.",
          cta: "🏡 Download Floor Plan & Pricing",
        },
      },
      {
        title: "VIP Site Visit Booking & Cab Assistance",
        description: "Allow prospective buyers to select weekend visit slots and receive automated location pins.",
        metric: "2.8x Visit Confirmation",
        templateMessage: {
          header: "🚗 Site Visit Confirmed for Sunday!",
          body: "We look forward to hosting you at Elysium Grand Sales Gallery at 11:00 AM. Free valet parking is reserved.",
          cta: "🗺️ Open Google Maps Location",
        },
      },
    ],
  },
  {
    id: "fintech",
    name: "Banking & FinTech",
    slug: "fintech",
    icon: "CreditCard",
    badge: "Bank-Grade 256-bit Security",
    headline: "Deliver Secure Financial Services & Instant Account Updates",
    description:
      "Enable instant account balance queries, mini-statements, EMI payment reminders, credit card application updates, and secure OTP logins.",
    stats: "80% Reduction in Call Center Overhead",
    benefits: [
      {
        title: "Instant Statement & Balance Check",
        description: "Provide 24/7 banking concierge where customers can fetch mini-statements with secure 2FA.",
        metric: "< 2s Retrieval Time",
        templateMessage: {
          header: "💳 SwiftBank - Account Summary",
          body: "Available Balance in A/C ending with **4092**: $14,820.50. Last 3 transactions attached below.",
          cta: "📄 View Full PDF Statement",
        },
      },
    ],
  },
];
