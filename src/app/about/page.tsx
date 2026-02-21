import { MarutiNavbar } from "@/components/maruti-navbar";
import { FeaturesSection } from "@/components/features-section";
import { AffiliationsSection } from "@/components/affiliations-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Ship,
  Target,
  Eye,
  Heart,
  Globe,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const milestones = [
  {
    year: "1994",
    title: "Company Founded",
    description:
      "Maruti Mumbai Cargo Pvt. Ltd. was established in Mumbai with a vision to simplify international trade logistics.",
  },
  {
    year: "2000",
    title: "BCBA Membership",
    description:
      "Became a registered member of the Board of Customs Brokers Association, cementing our expertise in customs clearance.",
  },
  {
    year: "2008",
    title: "FIATA Affiliation",
    description:
      "Joined the International Federation of Freight Forwarders Associations (FIATA), connecting us to a global network.",
  },
  {
    year: "2015",
    title: "Global Network Expansion",
    description:
      "Expanded operations to cover 50+ countries through strategic partnerships with international freight networks.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched real-time shipment tracking and digital documentation systems to enhance client experience.",
  },
  {
    year: "2024",
    title: "10,000+ Shipments",
    description:
      "Celebrated delivering over 10,000 successful shipments, maintaining a 99% customer satisfaction rate.",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide seamless, reliable, and cost-effective logistics solutions that empower businesses to grow globally — simplifying the complexities of international trade.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be India's most trusted logistics partner, known for integrity, innovation, and excellence in customs clearing and freight forwarding services.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Built on trust, transparency, and tireless dedication. We treat every shipment as our own and every client relationship as a long-term partnership.",
  },
];

const teamStats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Award, value: "30+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <div className="relative w-full">
      <MarutiNavbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary"
              >
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                30 Years of Trusted
                <br />
                Logistics Excellence
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Maruti Mumbai Cargo Pvt. Ltd. has been at the forefront of
                customs clearing, freight forwarding, and logistics solutions
                since 1994. Based in Borivali, Mumbai, we serve clients across
                India and connect them to global markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of seasoned professionals brings deep expertise in sea
                freight, air shipments, and end-to-end logistics management —
                ensuring your cargo reaches its destination safely, on time, and
                within budget.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6">
                    <CardContent className="p-0 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Mission, Vision, Values */}
      <section className="relative w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our mission, vision, and values form the foundation of everything
              we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Timeline */}
      <section className="relative w-full py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three decades of milestones, growth, and achievements
            </p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pb-8 md:pb-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <Card className="inline-block w-full md:max-w-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {milestone.year}
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm z-10" />

                  {/* Empty spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Identity */}
      <section className="relative w-full py-20 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Ship className="h-10 w-10 text-primary" strokeWidth={2} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Maruti Mumbai Cargo Pvt. Ltd.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Headquartered at 902, Parvati Hub, Roshan Nagar, Borivali (West),
              Mumbai — we stand as one of Mumbai&apos;s most trusted names in
              customs clearing and freight forwarding. Our commitment to
              excellence drives us to deliver outstanding results for every
              client.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Badge variant="secondary">BCBA Registered</Badge>
              <Badge variant="secondary">FIATA Member</Badge>
              <Badge variant="secondary">JCtrans Network</Badge>
              <Badge variant="secondary">WCA Partner</Badge>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <AffiliationsSection />
      <CTASection id="cta" />
      <Footer />
    </div>
  );
}
