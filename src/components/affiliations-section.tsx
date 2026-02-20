"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Affiliation {
  name: string;
  logo: string;
  large?: boolean;
}

const affiliations: Affiliation[] = [
  { name: "BCBA", logo: "/Logos/afiliations-bcba.png", large: true },
  { name: "FIATA", logo: "/Logos/afiliations-fiata.png", large: true },
  { name: "JCtrans", logo: "/Logos/afiliations-jctrans.avif", large: true },
  { name: "WCA", logo: "/Logos/afiliations-wca.png" },
];

export interface AffiliationsSectionProps extends React.HTMLAttributes<HTMLElement> {}

export const AffiliationsSection = React.forwardRef<
  HTMLElement,
  AffiliationsSectionProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full pb-20 md:pb-28 bg-muted/30 overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Affiliations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proudly affiliated with leading industry bodies and associations
          </p>
        </motion.div>

        {/* 4-logo grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {affiliations.map((affiliation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-center justify-center p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-accent/20 hover:border-accent hover:shadow-md transition-all duration-300 aspect-[3/2]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={affiliation.logo}
                alt={affiliation.name}
                className={cn(
                  "max-w-full w-auto object-contain select-none",
                  affiliation.large ? "max-h-24" : "max-h-16",
                )}
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

AffiliationsSection.displayName = "AffiliationsSection";
