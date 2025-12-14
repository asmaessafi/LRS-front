// 

import { Link } from "wouter";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-purple-950 via-purple-900 to-indigo-900 text-white overflow-hidden" data-testid="footer">
      {/* Subtle premium overlay with gradient shine */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-transparent to-indigo-600/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info – Premium logo and description */}
          <div className="space-y-6">
            <div className="group">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-br from-pink-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                LRS
              </h3>
              <p className="text-sm md:text-base font-light tracking-widest uppercase text-white/70">
                Laboratoires Réunis de Soin
              </p>
            </div>
            <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xs">
              Cosmétiques et produits d'hygiène de haute qualité, fabriqués en Tunisie depuis 2009 avec passion et excellence.
            </p>
          </div>

          {/* Contact – Elegant list with subtle hover glow */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold tracking-wide text-pink-300">Contact</h4>
            <ul className="space-y-5 text-sm md:text-base">
              <li className="flex items-start gap-4 group">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-pink-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-pink-300" />
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">
                  Zone industrielle, Oued Chaabouni,<br />Route Aéroport km4, 3071 Sfax, Tunisie
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-pink-500/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-pink-300" />
                </div>
                <a
                  href="tel:+21674680235"
                  className="text-white/80 group-hover:text-white transition-all duration-300 hover:underline"
                  data-testid="link-phone"
                >
                  +216 74 68 02 35
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-pink-500/20 transition-all duration-300">
                  <MessageCircle className="h-5 w-5 text-pink-300" />
                </div>
                <a
                  href="https://wa.me/21626565555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 group-hover:text-white transition-all duration-300 hover:underline"
                  data-testid="link-whatsapp"
                >
                  +216 26 56 55 55
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-pink-500/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-pink-300" />
                </div>
                <a
                  href="mailto:admin@lrs.com"
                  className="text-white/80 group-hover:text-white transition-all duration-300 hover:underline"
                  data-testid="link-email"
                >
                  admin@lrs.com
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications – Premium badges with glow */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold tracking-wide text-pink-300">Certifications</h4>
            <ul className="space-y-4">
              {["pH Neutral", "Recycled Plastic", "Dermatologically Tested", "ISO 22000"].map((cert) => (
                <li key={cert} className="flex items-center gap-4 group">
                  <div className="relative">
                    <span className="block w-3 h-3 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 shadow-lg shadow-pink-500/50" />
                    <span className="absolute inset-0 w-3 h-3 rounded-full bg-pink-400/50 blur-md animate-pulse" />
                  </div>
                  <span className="text-white/90 text-sm md:text-base font-medium group-hover:text-white transition-colors">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social – Premium icons with glassmorphism and hover scale */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold tracking-wide text-pink-300">Suivez-nous</h4>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/laboratoiresLRS"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-pink-500/30 hover:scale-110 transition-all duration-500 shadow-xl"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="h-7 w-7 text-white group-hover:text-pink-300 transition-colors" />
                <span className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://instagram.com/lys_intense"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-pink-500/30 hover:scale-110 transition-all duration-500 shadow-xl"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-7 w-7 text-white group-hover:text-pink-300 transition-colors" />
                <span className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              {/* <a
                href="https://linkedin.com/company/laboratoires-reunis-de-soin"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-pink-500/30 hover:scale-110 transition-all duration-500 shadow-xl"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-7 w-7 text-white group-hover:text-pink-300 transition-colors" />
                <span className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a> */}
            </div>
            <div className="space-y-1 text-xs md:text-sm text-white/60 font-light">
              <p>@Lys.Intense</p>
              <p>@laboratoires_reunis_de_soin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar – Elegant divider with subtle shine */}
      <div className="relative border-t border-white/10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p className="font-light">&copy; 2025 LRS – Tous droits réservés</p>
            <div className="flex items-center gap-8">
              <Link href="/a-propos" className="hover:text-pink-300 transition-colors duration-300 font-medium" data-testid="link-footer-about">
                À propos
              </Link>
              <Link href="/produits" className="hover:text-pink-300 transition-colors duration-300 font-medium" data-testid="link-footer-products">
                Produits
              </Link>
              <Link href="/contact" className="hover:text-pink-300 transition-colors duration-300 font-medium" data-testid="link-footer-contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}