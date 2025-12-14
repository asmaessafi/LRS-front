import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
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
    href: "https://facebook.com/Lys.Intense",
    handle: "@Lys.Intense",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://instagram.com/lys_intense",
    handle: "@lys_intense",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/laboratoires-reunis-de-soin",
    handle: "@Laboratoires Réunis de Soin",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 md:pt-24" data-testid="page-contact">
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-title">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-contact-subtitle">
              Une question, une suggestion ou une demande de partenariat ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <Card data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6" data-testid="text-contact-info-title">
                  Informations de contact
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-6" data-testid="text-social-title">
                  Suivez-nous
                </h2>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-card border border-card-border hover-elevate transition-all"
                      data-testid={`link-social-${social.label.toLowerCase()}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.label}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Distribution internationale</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    Nous distribuons nos produits en Tunisie, Libye, Algérie et Afrique de l'Ouest. 
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
