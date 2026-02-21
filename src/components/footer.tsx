"use client";

import * as React from "react";
import {
  Ship,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "relative w-full bg-card border-t border-border",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          {/* Main Footer Content */}
          <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Ship className="h-8 w-8 text-primary" strokeWidth={2} />
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight text-foreground">
                    Maruti Mumbai Cargo <br></br> Pvt. Ltd.
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                30 years of excellence in customs clearing, freight forwarding,
                and logistics solutions across India and worldwide.
              </p>
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Our Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/services#sea-freight"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Sea Freight
                  </a>
                </li>
                <li>
                  <a
                    href="/services#air-shipments"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Air Shipments
                  </a>
                </li>
                <li>
                  <a
                    href="/services#custom-clearing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Custom Clearing
                  </a>
                </li>
                <li>
                  <a
                    href="/services#freight-forwarding"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Freight Forwarding
                  </a>
                </li>
                <li>
                  <a
                    href="/services#door-to-door-delivery"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Door-to-Door Delivery
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      902, Parvati Hub, Roshan Nagar,
                      <br />
                      OFF. Chandawarkar Road, Borivali (West),
                      <br />
                      Mumbai - 400092, Maharashtra, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <a
                      href="tel:+919322228428"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 93222 28428
                    </a>
                    <a
                      href="tel:+919167068259"
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 91670 68259
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <a
                      href="mailto:mukeshparmar@marutilogistics.in"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      mukeshparmar@marutilogistics.in
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Maruti Mumbai Cargo Pvt Ltd. All
                rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  },
);

Footer.displayName = "Footer";
