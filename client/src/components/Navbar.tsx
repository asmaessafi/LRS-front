import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Produits", href: "/produits" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" data-testid="navbar">
      {/* Premium glassmorphism background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50 dark:from-background/95 dark:via-background/80 dark:to-background/60 backdrop-blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo – Ultra premium with animated gradient and glow */}
          <Link href="/" className="group flex items-center gap-4 transition-all duration-500 hover:scale-110" data-testid="link-home-logo">
            <div className="relative">
              <span className="text-4xl md:text-5xl font-black bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent drop-shadow-lg">
                LRS
              </span>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 via-pink-600/30 to-indigo-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm md:text-base font-light text-foreground/80 tracking-widest uppercase">
                Laboratoires
              </span>
              <span className="text-sm md:text-base font-light text-foreground/80 tracking-widest uppercase">
                Réunis de Soin
              </span>
            </div>
          </Link>

          {/* Desktop Navigation – Elegant pills with premium hover effects */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "relative px-8 py-3 text-base font-medium tracking-wide overflow-hidden rounded-full transition-all duration-500",
                    location === item.href
                      ? "text-white shadow-2xl"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* Active state background */}
                  {location === item.href && (
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-full" />
                  )}
                  {/* Hover shine effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <span className="relative z-10">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle – Premium icon with ripple effect */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative rounded-full w-12 h-12 hover:bg-primary/10 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            aria-label="Menu"
          >
            <div className="relative">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              <span className="absolute inset-0 bg-primary/20 rounded-full scale-0 animate-ping" />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu – Full premium overlay with slide-from-top and blur */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-20 md:top-24 bg-white/95 dark:bg-background/98 backdrop-blur-2xl border-b border-border/30 shadow-2xl transition-all duration-700 ease-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="px-8 py-12 space-y-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block transition-all duration-700",
                isOpen ? `translate-x-0 opacity-100 delay-${index * 100}` : "-translate-x-full opacity-0"
              )}
            >
              <Button
                variant={location === item.href ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start text-2xl font-light tracking-wider py-8 rounded-2xl",
                  location === item.href
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl"
                    : "hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}