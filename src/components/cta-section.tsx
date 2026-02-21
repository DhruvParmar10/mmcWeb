"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {}

export const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative w-full py-20 md:py-32 bg-background",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/80 p-1"
          >
            <div className="bg-card rounded-xl p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
                  >
                    Ready to Ship Your Cargo?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground mb-8"
                  >
                    Get a free quote today and experience hassle-free logistics
                    solutions from Mumbai's trusted cargo partner.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Link href="/contact#contact-form">
                      <Button
                        size="lg"
                        className="text-base font-semibold px-8 h-12 rounded-lg shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 group"
                      >
                        Get Free Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>

                {/* Right Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Call Us
                      </h4>
                      <p className="text-muted-foreground">
                        +91 9821048434 && +91 9167068259
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Sat, 9AM-6PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email Us
                      </h4>
                      <p className="text-muted-foreground break-all">
                        mukeshparmar@marutilogistics.in
                      </p>
                      <p className="text-sm text-muted-foreground">
                        24/7 Email Support
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Visit Us
                      </h4>
                      <p className="text-muted-foreground">
                        902, Parvati Hub, Roshan Nagar, OFF. chandawarkar road,
                        Borivali(West), Mumbai-400092, Maharashtra
                      </p>
                      <p className="text-sm text-muted-foreground">India</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  },
);

CTASection.displayName = "CTASection";
