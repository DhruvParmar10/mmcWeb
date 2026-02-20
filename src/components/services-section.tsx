"use client";

import * as React from "react";
import { motion } from "motion/react";
import {
  Ship,
  Plane,
  Package,
  TrendingUp,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Ship className="h-8 w-8" />,
    title: "Sea Freight",
    description:
      "Comprehensive sea cargo solutions with 30 years of shipping industry expertise.",
  },
  {
    icon: <Plane className="h-8 w-8" />,
    title: "Air Shipments",
    description:
      "Fast and reliable air freight services for time-sensitive cargo worldwide.",
  },
  {
    icon: <Package className="h-8 w-8" />,
    title: "Custom Clearing",
    description:
      "Expert customs clearing services ensuring smooth import/export operations.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Freight Forwarding",
    description:
      "End-to-end freight forwarding solutions for commercial and personal cargo.",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Door-to-Door Delivery",
    description:
      "Complete transportation from port to factory or factory to port with door delivery.",
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Logistics Management",
    description:
      "Comprehensive logistics planning and analytics for household and commercial goods.",
  },
];

export interface ServicesSectionProps extends React.HTMLAttributes<HTMLElement> {}

export const ServicesSection = React.forwardRef<
  HTMLElement,
  ServicesSectionProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full pt-0 pb-20 md:pb-32 bg-background",
        className,
      )}
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
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cargo and logistics solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-lg border border-border bg-card hover:bg-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-4 text-primary group-hover:text-accent-foreground transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-accent-foreground transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground group-hover:text-accent-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

ServicesSection.displayName = "ServicesSection";
