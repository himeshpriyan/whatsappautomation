import React from "react";
import HeroSection from "@/components/home/HeroSection";
import LogoMarquee from "@/components/home/LogoMarquee";
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

      {/* 3. Feature Highlight Blocks (Alternating Layout) */}
      <FeatureHighlightBlocks />

      {/* 4. Stats Bar */}
      <StatsBar />

      {/* 5. Feature Grid Section */}
      <FeatureGrid />

      {/* 6. Value Props Marquee */}
      <ValuePropsMarquee />

      {/* 7. Social Proof & Testimonials */}
      <TestimonialsSection />

      {/* 8. Secondary CTA Banner */}
      <SecondaryCtaBanner />

      {/* 9. FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
