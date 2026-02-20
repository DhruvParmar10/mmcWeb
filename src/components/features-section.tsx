"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Clock, Shield, Users, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const features: Feature[] = [
  {
    icon: <Clock className="h-10 w-10" />,
    title: "30 Years Experience",
    description:
      "Over a decade and a half of proven excellence in the shipping and logistics industry.",
    stat: "30+",
    statLabel: "Years",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Secure & Reliable",
    description:
      "Your cargo is safe with us. We ensure secure handling from origin to destination.",
    stat: "99%",
    statLabel: "On-Time",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Expert Team",
    description:
      "Dedicated professionals with deep expertise in customs, freight, and logistics.",
    stat: "500+",
    statLabel: "Clients",
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Global Network",
    description:
      "Extensive network connecting Mumbai with major ports and cities worldwide.",
    stat: "50+",
    statLabel: "Countries",
  },
];

export interface FeaturesSectionProps
  extends React.HTMLAttributes<HTMLElement> {}

export const FeaturesSection = React.forwardRef<
  HTMLElement,
  FeaturesSectionProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("relative w-full py-20 md:py-32 bg-muted/30", className)}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Excellence in every shipment, trust in every delivery
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                    {feature.stat}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {feature.statLabel}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesSection.displayName = "FeaturesSection";
