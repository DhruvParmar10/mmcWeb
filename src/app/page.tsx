import { MarutiNavbar } from "@/components/maruti-navbar";
import { HeroSection } from "@/components/hero-section";
import { WorldSection } from "@/components/world-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { AffiliationsSection } from "@/components/affiliations-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative w-full">
      <MarutiNavbar />
      <HeroSection
        ctaText="Contact Us"
        subheadline="30 years of excellence in customs clearing, freight forwarding, and logistics solutions across India and worldwide."
        stats={[
          { value: "30+", label: "Years of Experience" },
          { value: "10k+", label: "Shipments Delivered" },
          { value: "99%", label: "Customer Satisfaction" },
        ]}
      />
      <WorldSection />
      <TestimonialsSection />
      <ServicesSection />
      <FeaturesSection />
      <AffiliationsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
