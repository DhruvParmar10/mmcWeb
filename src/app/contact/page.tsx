"use client";

import * as React from "react";
import { MarutiNavbar } from "@/components/maruti-navbar";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 98210 48434", "+91 91670 68259"],
    sub: "Mon–Sat, 9AM–6PM IST",
    href: "tel:+919821048434",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["mukeshparmar@marutilogistics.in"],
    sub: "24/7 Email Support",
    href: "mailto:mukeshparmar@marutilogistics.in",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: [
      "902, Parvati Hub, Roshan Nagar,",
      "OFF. Chandawarkar Road, Borivali (West),",
      "Mumbai – 400092, Maharashtra, India",
    ],
    sub: "Mon–Sat, 9AM–6PM IST",
    href: "https://maps.google.com/?q=Parvati+Hub+Borivali+West+Mumbai",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday – Friday: 9AM – 6PM", "Saturday: 9AM – 2PM"],
    sub: "Sunday closed",
    href: null,
  },
];

const YOUR_WHATSAPP_NUMBER = "918433517659"; // +91 98210 48434

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fields, setFields] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFields((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const text = [
      `*New Inquiry from Maruti Mumbai Cargo Website*`,
      `*Name:* ${fields.firstName} ${fields.lastName}`,
      `*Email:* ${fields.email}`,
      fields.phone ? `*Phone:* ${fields.phone}` : null,
      fields.service ? `*Service:* ${fields.service}` : null,
      `*Message:*\n${fields.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${YOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative w-full">
      <MarutiNavbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a shipment inquiry or need a quote? Our team is here to help.
            Reach out to us and we&apos;ll get back to you promptly.
          </p>
        </div>
      </section>

      <Separator />

      {/* Contact Cards */}
      <section className="relative w-full py-16 bg-background">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300 group">
                    <CardHeader className="pb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="text-base">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-1">
                      {item.lines.map((line, i) =>
                        item.href ? (
                          <a
                            key={i}
                            href={item.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={i} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ),
                      )}
                      <p className="text-xs text-muted-foreground/60 pt-1">
                        {item.sub}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact Form + Map */}
      <section
        id="contact-form"
        className="relative w-full py-20 md:py-32 bg-muted/30"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-screen-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Fill in the form and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground max-w-sm">
                        Thank you for reaching out. Our team will contact you
                        within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        className="mt-2"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            required
                            value={fields.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            required
                            value={fields.lastName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          value={fields.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={fields.phone}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Input
                          id="service"
                          placeholder="e.g. Sea Freight, Custom Clearing..."
                          value={fields.service}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your shipment requirements, origin, destination, cargo type..."
                          rows={5}
                          required
                          value={fields.message}
                          onChange={handleChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-11 text-base font-semibold gap-2"
                        disabled={loading}
                      >
                        {loading ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map + Extra Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              {/* Map embed */}
              <Card className="overflow-hidden flex-1 min-h-[300px]">
                <iframe
                  src="https://maps.google.com/maps?q=Parvati+Hub,+Borivali+West,+Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Maruti Mumbai Cargo Location"
                />
              </Card>

              {/* Address card */}
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Maruti Mumbai Cargo Pvt. Ltd.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        902, Parvati Hub, Roshan Nagar,
                        <br />
                        OFF. Chandawarkar Road, Borivali (West),
                        <br />
                        Mumbai – 400092, Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <p className="text-sm text-muted-foreground">
                    Located in the heart of Borivali West, easily accessible
                    from the Western Railway line. Nearest station: Borivali.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
