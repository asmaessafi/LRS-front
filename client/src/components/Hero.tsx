// 

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900"
      data-testid="hero-section"
    >
      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      
      {/* Very soft glow orbs – minimal and elegant */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        {/* Refined badge – premium and discreet */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-12 mt-20">
          <span className="text-sm font-medium text-white/90 tracking-wide">Fabrication 100% Tunisienne depuis 2009</span>
        </div>

        {/* Title – luxurious typography */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6">
          LYS
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-white to-purple-200 drop-shadow-lg">
            INTENSE
          </span>
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white/90 mt-6 tracking-wide">
          Une Histoire de Passion
        </p>

        {/* Description – elegant spacing */}
        <p className="mt-12 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
          Des produits de haute qualité pour tous les âges et tous les types de peau et cheveux.<br />
          Soins quotidiens raffinés, formulés avec passion pour sublimer votre beauté naturelle.
        </p>

        {/* Buttons – premium size and style (not too big) */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6  mb-10">
          <Link href="/produits">
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-white/95 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 group"
              data-testid="button-discover-products"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Button>
          </Link>

          <Link href="/a-propos">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 hover:border-white/70 backdrop-blur-sm font-medium px-8 py-4 rounded-full transition-all duration-500"
              data-testid="button-about-us"
            >
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>

      {/* Discreet scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-12 rounded-full border border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}