import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Zone industrielle, Oued Chaabouni, Route Aéroport km4, 3071 Sfax, Tunisie",
    href: null,
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+216 74 68 02 35",
    href: "tel:+21674680235",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+216 26 56 55 55",
    href: "https://wa.me/21626565555",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@lrs.com",
    href: "mailto:admin@lrs.com",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Ven: 8h00 - 17h00",
    href: null,
  },
];

const socialLinks = [
  {
    icon: SiFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/laboratoiresLRS",
    handle: "@Lys.Intense",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com/lys_intense",
    handle: "@lys_intense",
  },
  // {
  //   icon: SiLinkedin,
  //   label: "LinkedIn",
  //   href: "https://linkedin.com/company/laboratoires-reunis-de-soin",
  //   handle: "@Laboratoires Réunis de Soin",
  // },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30" data-testid="page-contact">
      {/* Elegant header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-8">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
            Une question, une suggestion ou une demande de partenariat ?<br />
            Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      {/* Main content – premium two-column layout */}
      <section className="py-20 md:py-28 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Form – enhanced from ContactForm component (already premium) */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact info & social – refined with subtle premium touches */}
            <div className="space-y-12 order-1 lg:order-2">
              {/* Contact details */}
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-8">
                  Nos coordonnées
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-5 group" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links – premium glass cards */}
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-8">
                  Suivez-nous
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-7 h-7 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Distribution card – premium accent */}
              <Card className="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 text-white shadow-2xl border-0">
                <CardContent className="pt-8 pb-10 px-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="w-10 h-10" />
                    <h3 className="text-2xl font-bold">Distribution internationale</h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Nous distribuons nos produits en Tunisie, Libye, Algérie et Afrique de l’Ouest.<br />
                    Pour les demandes de partenariat ou de distribution, contactez-nous directement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}