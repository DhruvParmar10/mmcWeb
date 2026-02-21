"use client";

import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  ctaText?: string;
  subheadline?: string;
  stats?: { value: string; label: string }[];
  shipImageSrc?: string;
}

export const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      ctaText = "Contact Us",
      subheadline = "30 years of excellence in customs clearing, freight forwarding, and logistics solutions across India and worldwide.",
      stats = [
        { value: "30+", label: "Years of Experience" },
        { value: "10k+", label: "Shipments Delivered" },
        { value: "99%", label: "Customer Satisfaction" },
      ],
      shipImageSrc = "/image.png",
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full bg-background overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* ── Top: Text content ── */}
        <div className="container mx-auto px-3 md:px-6 lg:px-8 max-w-screen-xl pt-44 pb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Left: Headline + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 min-w-0"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.0] tracking-tight text-foreground mb-3">
                Fast. Reliable.
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-10">
                <span className="text-primary">
                  Global Logistics Solutions{" "}
                </span>
                {/* <span className="font-black text-foreground">Solutions</span> */}
              </h2>

              <motion.a
                href="#cta"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-base font-medium hover:bg-primary/90 active:scale-[0.98] transition-all duration-150"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Right: Subtitle */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="w-full md:w-72 lg:w-80 shrink-0 md:pt-28"
            >
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {subheadline}
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── Ship image with stats overlaid on the ocean ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-3 md:mx-6 lg:mx-10 rounded-3xl overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={shipImageSrc}
            alt="Cargo container ship aerial view"
            className="w-full object-cover object-center"
            style={{ display: "block" }}
          />

          {/* Gradient so white stats text is readable over the ocean */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

          {/* Stats + scroll button overlaid at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 lg:px-14 pb-6 md:pb-10 flex flex-wrap items-end justify-between gap-4 md:gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 md:gap-10 lg:gap-16"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 + i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none mb-1 md:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicator circle */}
            <motion.button
              aria-label="Scroll down"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white/50 hover:border-white/70 hover:text-white/80 transition-colors shrink-0"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom spacing */}
        <div className="h-8 md:h-10 bg-background" />
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";
