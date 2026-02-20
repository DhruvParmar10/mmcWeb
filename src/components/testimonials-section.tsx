"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Company {
  name: string;
  logo: string; // path to logo image
}

const allCompanies: Company[] = [
  { name: "Hapag-Lloyd", logo: "/Logos/hapag-lloyd-ag.png" },
  { name: "OOCL", logo: "/Logos/Oocl_logo.png" },
  { name: "Evergreen", logo: "/Logos/Evergreen square.png" },
  {
    name: "Hyundai Merchant Marine",
    logo: "/Logos/Hyundai_Merchant_Marine.png",
  },
  {
    name: "Emirates Shipping Line",
    logo: "/Logos/emirates-shipping-line.webp",
  },
  { name: "MSC", logo: "/Logos/msc.png" },
  { name: "ZIM", logo: "/Logos/ZIM_Logo.svg" },
];

const secondRowCompanies: Company[] = [
  { name: "Tata", logo: "/Logos/Tata_logo.svg.webp" },
  { name: "Mahindra", logo: "/Logos/mahindra-rise-customer-logo.png" },
  { name: "York", logo: "/Logos/york-simplymilesahead.png" },
  { name: "SAF-Holland", logo: "/Logos/Saf-holland.png" },
  { name: "Econship", logo: "/Logos/econship.webp" },
  { name: "Partner", logo: "/Logos/logoinner.png" },
];

export interface TestimonialsProps extends React.HTMLAttributes<HTMLElement> {}

export const TestimonialsSection = React.forwardRef<
  HTMLElement,
  TestimonialsProps
>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn(
        "relative w-full py-20 md:py-32 bg-background overflow-hidden",
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
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Partnering with the world's leading shipping and logistics companies
          </p>
        </motion.div>

        {/* First Infinite Scroll Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll">
              {[...allCompanies, ...allCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-44 h-24 flex items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-accent/30 hover:border-accent transition-all duration-300"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-12 max-w-full w-auto object-contain select-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Second Infinite Scroll Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-reverse">
              {[...secondRowCompanies, ...secondRowCompanies].map(
                (company, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-44 h-24 flex items-center justify-center p-4 rounded-lg border border-border bg-card hover:bg-accent/30 hover:border-accent transition-all duration-300"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-h-12 max-w-full w-auto object-contain select-none"
                      draggable={false}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Happy Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                10k+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Shipments Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Countries Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Customer Support
              </div>
            </div>
          </div>
        </motion.div>
        {/* Bottom Border */}
        <div className="mt-20 border-t border-border" />
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";
