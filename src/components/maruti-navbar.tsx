"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Ship } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface MarutiNavbarProps extends React.HTMLAttributes<HTMLElement> {
  navigationLinks?: NavLink[];
  darkHero?: boolean;
}

// Navigation links
const defaultNavigationLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "#industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const MarutiNavbar = React.forwardRef<HTMLElement, MarutiNavbarProps>(
  (
    {
      className,
      navigationLinks = defaultNavigationLinks,
      darkHero = false,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = React.useCallback(
      (href: string) => {
        if (href.startsWith("#")) {
          // Hash-based scroll: only works on home page
          const id = href.replace("#", "");
          if (pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          } else {
            router.push(`/${href}`);
          }
        } else {
          router.push(href);
        }
      },
      [pathname, router],
    );

    const isActive = React.useCallback(
      (href: string) => {
        if (href.startsWith("#")) return false;
        if (href === "/") return pathname === "/";
        return pathname === href;
      },
      [pathname],
    );

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4 md:px-6",
          scrolled
            ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
            : "border-b border-transparent bg-transparent",
          className,
        )}
        {...props}
      >
        <div className="container mx-auto flex max-w-screen-2xl items-center justify-between gap-4 py-2">
          {/* Left side - Logo */}
          <div className="flex flex-1 min-w-0 items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className={cn(
                      "group h-9 w-9 hover:bg-accent hover:text-accent-foreground",
                      darkHero && !scrolled
                        ? "text-white hover:text-white"
                        : "",
                    )}
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                              isActive(link.href)
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80",
                            )}
                          >
                            {link.label}
                          </button>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            <a
              href="/"
              className={cn(
                "flex items-center gap-2 transition-colors",
                darkHero && !scrolled
                  ? "text-white hover:text-white/80"
                  : "text-foreground hover:text-foreground/80",
              )}
            >
              <Ship
                className={cn(
                  "h-8 w-8 transition-colors",
                  scrolled ? "text-primary" : "text-primary",
                )}
                strokeWidth={2}
              />
              <div className="flex flex-col">
                <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                  Maruti Mumbai Cargo{" "}
                  <span className="hidden sm:inline">
                    <br />
                    Pvt. Ltd.
                  </span>
                </span>
                <span
                  className={cn(
                    "text-xs leading-tight transition-colors",
                    scrolled
                      ? "text-muted-foreground"
                      : "text-muted-foreground",
                  )}
                ></span>
              </div>
            </a>
          </div>

          {/* Center - Navigation menu */}
          {!isMobile && (
            <div className="flex-1 flex flex-col items-center gap-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ram.png"
                alt=""
                className="h-7 w-auto object-contain"
              />
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                          isActive(link.href)
                            ? "bg-accent text-accent-foreground"
                            : darkHero && !scrolled
                              ? "text-white/90 hover:text-white"
                              : "text-foreground/80 hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Right side - CTA buttons */}
          <div className="flex shrink-0 md:flex-1 items-center justify-end gap-3">
            <Button
              size="sm"
              className="text-sm font-medium px-4 h-9 rounded-md shadow-sm bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

MarutiNavbar.displayName = "MarutiNavbar";
