import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LogoMarquee from "@/components/home/LogoMarquee";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeatureHighlightBlocks from "@/components/home/FeatureHighlightBlocks";
import StatsBar from "@/components/home/StatsBar";
import FeatureGrid from "@/components/home/FeatureGrid";
import ValuePropsMarquee from "@/components/home/ValuePropsMarquee";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SecondaryCtaBanner from "@/components/home/SecondaryCtaBanner";
import FaqAccordion from "@/components/home/FaqAccordion";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trusted-By Logo Marquee */}
      <LogoMarquee />

      {/* 3. 3-Step Onboarding Guide */}
      <HowItWorksSection />

      {/* 4. Feature Highlight Blocks (Alternating Layout) */}
      <FeatureHighlightBlocks />

      {/* 5. Stats Bar */}
      <StatsBar />

      {/* 6. Feature Grid Section */}
      <FeatureGrid />

      {/* 7. Value Props Marquee */}
      <ValuePropsMarquee />

      {/* 8. Social Proof & Testimonials */}
      <TestimonialsSection />

      {/* 9. Secondary CTA Banner */}
      <SecondaryCtaBanner />

      {/* 10. FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
