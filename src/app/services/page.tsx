import Image from "next/image";
import { MarutiNavbar } from "@/components/maruti-navbar";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Ship,
  Plane,
  Package,
  TrendingUp,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const serviceDetails = [
  {
    icon: Ship,
    title: "Sea Freight",
    badge: "Most Popular",
    description:
      "Comprehensive sea cargo solutions backed by 30 years of shipping industry expertise. We handle Full Container Load (FCL) and Less than Container Load (LCL) shipments with precision.",
    features: [
      "FCL & LCL shipments",
      "Port-to-port and door-to-door",
      "Real-time cargo tracking",
      "Hazardous goods handling",
      "Reefer cargo solutions",
      "Break bulk cargo",
    ],
  },
  {
    icon: Plane,
    title: "Air Shipments",
    badge: "Fast Delivery",
    description:
      "Fast and reliable air freight services for time-sensitive cargo worldwide. We partner with major airlines to ensure your shipments arrive on time, every time.",
    features: [
      "Express & standard air freight",
      "Airport-to-airport service",
      "Temperature-controlled cargo",
      "High-value cargo handling",
      "Door-to-door delivery",
      "Customs pre-clearance",
    ],
  },
  {
    icon: Package,
    title: "Custom Clearing",
    badge: "Expertise",
    description:
      "Expert customs clearing services ensuring smooth import/export operations. Our experienced team handles all documentation, tariff classifications, and regulatory compliance.",
    features: [
      "Import & export clearance",
      "Documentation preparation",
      "Tariff classification",
      "Duty optimization",
      "DGFT compliance",
      "Post-clearance audits",
    ],
  },
  {
    icon: TrendingUp,
    title: "Freight Forwarding",
    badge: "End-to-End",
    description:
      "End-to-end freight forwarding solutions for commercial and personal cargo. We coordinate every aspect of your shipment from origin to final destination.",
    features: [
      "Multi-modal transport",
      "Route optimization",
      "Insurance coverage",
      "Vendor management",
      "Supply chain consulting",
      "Project cargo",
    ],
  },
  {
    icon: MapPin,
    title: "Door-to-Door Delivery",
    badge: "Convenient",
    description:
      "Complete transportation from port to factory or factory to port with door delivery. We handle the last-mile logistics so you don't have to worry about a thing.",
    features: [
      "Factory-to-port pickup",
      "Port-to-warehouse delivery",
      "Residential delivery",
      "Dedicated fleet available",
      "GPS-tracked vehicles",
      "Same-day urban delivery",
    ],
  },
  {
    icon: CheckCircle,
    title: "Logistics Management",
    badge: "Full Suite",
    description:
      "Comprehensive logistics planning and analytics for household and commercial goods. We provide end-to-end visibility and management of your entire supply chain.",
    features: [
      "Supply chain visibility",
      "Inventory management",
      "Warehouse solutions",
      "Shipment analytics",
      "SLA management",
      "24/7 shipment monitoring",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full">
      <MarutiNavbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <Image
          src="/worldsection-ph.avif"
          alt="Services hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl text-center">
          <Badge variant="outline" className="mb-4 text-white border-white/60">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Comprehensive Cargo &amp;
            <br />
            Logistics Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            From sea freight to customs clearing, we offer a full suite of
            logistics services tailored to your business needs — backed by 30+
            years of industry experience.
          </p>
        </div>
      </section>

      <Separator />

      {/* Detailed Service Cards */}
      <section className="relative w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon className="h-7 w-7" />
                        </div>
                        <CardTitle className="text-xl">
                          {service.title}
                        </CardTitle>
                      </div>
                      <Badge
                        variant="secondary"
                        className="text-xs flex-shrink-0"
                      >
                        {service.badge}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <Separator />
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <ArrowRight className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reuse existing sections */}
      <FeaturesSection />
      <CTASection id="cta" />
      <Footer />
    </div>
  );
}
