"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface WorldSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const WorldSection = React.forwardRef<HTMLDivElement, WorldSectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full bg-background overflow-hidden py-16 md:py-20",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left — dotted world map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 shrink-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/world.svg"
                alt="World map"
                className="w-full h-auto object-contain select-none"
                draggable={false}
              />
            </motion.div>

            {/* Right — text + images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-full md:w-1/2 flex flex-col gap-6"
            >
              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-muted-foreground leading-tight">
                  We Spread Around
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                  The World
                </h2>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
                Maruti Mumbai Cargo is a trusted customs clearing, freight
                forwarding, and logistics partner built for businesses that
                value speed, transparency, and reliability. From local
                deliveries to global freight, we handle every shipment with
                precision and care.
              </p>

              {/* Three images */}
              <div className="flex gap-3">
                {[
                  "/worldsection-ph.avif",
                  "/worldsection-ph2.avif",
                  "/worldsection-ph3.jpg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="flex-1 aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`Logistics ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  },
);

WorldSection.displayName = "WorldSection";
