import { Leaf, Recycle, ShieldCheck, Award, Users, MapPin, Package, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { 
    icon: Leaf, 
    label: "pH Neutral", 
    description: "Toutes nos formules sont équilibrées pour respecter le pH naturel de votre peau et de vos cheveux." 
  },
  { 
    icon: Recycle, 
    label: "Recycled Plastic", 
    description: "Nous utilisons des emballages en plastique recyclé pour réduire notre impact environnemental." 
  },
  { 
    icon: ShieldCheck, 
    label: "Dermatologically Tested", 
    description: "Chaque produit est testé dermatologiquement pour garantir une tolérance optimale." 
  },
  { 
    icon: Award, 
    label: "ISO 22000", 
    description: "Notre système de management de la sécurité alimentaire est certifié selon la norme internationale." 
  },
];

const stats = [
  { icon: Calendar, value: "2009", label: "Année de création" },
  { icon: MapPin, value: "200+", label: "Points de vente" },
  { icon: Package, value: "120+", label: "Produits" },
  { icon: Users, value: "3", label: "Marques" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24" data-testid="page-about">
      <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Présentation de LRS
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-subtitle">
              Laboratoires Réunis de Soin – Une entreprise tunisienne dédiée à la beauté et au bien-être depuis plus de 15 ans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="pt-6 pb-5">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground" data-testid="text-history-title">
                Notre Histoire
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-4" data-testid="text-history-content">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">LRS</strong> est une société à responsabilité limitée (S.A.R.L) créée le <strong className="text-foreground">11 mai 2009</strong>. 
                  Tous nos produits suivent une chaîne de production <strong className="text-foreground">100 % tunisienne</strong> dans une démarche responsable et durable.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui, nous sommes fiers de compter plus de <strong className="text-foreground">200 points de vente</strong> et <strong className="text-foreground">3 marques</strong> – 
                  LYS INTENSE, BOOM et AL JARA – avec plus de <strong className="text-foreground">120 produits</strong> différents pour répondre à tous vos besoins.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre distribution s'étend au-delà de la Tunisie vers la <strong className="text-foreground">Libye, l'Algérie et l'Afrique de l'Ouest</strong>, 
                  témoignant de la qualité et de la confiance que nos clients nous accordent.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre gamme complète comprend : soins capillaires, hygiène corporelle, déodorants, produits enfants et bébés… 
                  Tous nos produits passent par des <strong className="text-foreground">contrôles rigoureux</strong> pour garantir une qualité irréprochable.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop"
                  alt="Production LRS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-500/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card" data-testid="section-commitments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-commitments-title">
              Nos Engagements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              La qualité, la sécurité et le respect de l'environnement sont au cœur de notre démarche.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.label} className="h-full" data-testid={`commitment-${cert.label.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardContent className="pt-6 pb-5 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <cert.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{cert.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Notre Mission
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Offrir des produits cosmétiques et d'hygiène de haute qualité, accessibles à tous, 
            tout en respectant l'environnement et en contribuant au développement de l'industrie tunisienne.
          </p>
        </div>
      </section>
    </div>
  );
}
