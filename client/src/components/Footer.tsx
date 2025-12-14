import { Link } from "wouter";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">LRS</h3>
              <p className="text-sm text-primary-foreground/80">Laboratoires Réunis de Soin</p>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Cosmétiques et produits d'hygiène de haute qualité, fabriqués en Tunisie depuis 2009.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/70" />
                <span className="text-primary-foreground/80">Zone industrielle, Oued Chaabouni, Route Aéroport km4, 3071 Sfax, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <a href="tel:+21674680235" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-phone">
                  +216 74 68 02 35
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <a href="https://wa.me/21626565555" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-whatsapp">
                  +216 26 56 55 55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-foreground/70" />
                <a href="mailto:admin@lrs.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" data-testid="link-email">
                  admin@lrs.com
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Certifications</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                pH Neutral
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Recycled Plastic
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Dermatologically Tested
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                ISO 22000
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Suivez-nous</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/Lys.Intense"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/lys_intense"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/laboratoires-reunis-de-soin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-1 text-xs text-primary-foreground/60">
              <p>@Lys.Intense</p>
              <p>@laboratoires_reunis_de_soin</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; 2025 LRS – Tous droits réservés</p>
            <div className="flex items-center gap-4">
              <Link href="/a-propos" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-about">
                À propos
              </Link>
              <Link href="/produits" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-products">
                Produits
              </Link>
              <Link href="/contact" className="hover:text-primary-foreground transition-colors" data-testid="link-footer-contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
