// import { Leaf, Recycle, ShieldCheck, Award, Users, MapPin, Package, Calendar } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// const certifications = [
//   { 
//     icon: Leaf, 
//     label: "pH Neutral", 
//     description: "Toutes nos formules sont équilibrées pour respecter le pH naturel de votre peau et de vos cheveux." 
//   },
//   { 
//     icon: Recycle, 
//     label: "Recycled Plastic", 
//     description: "Nous utilisons des emballages en plastique recyclé pour réduire notre impact environnemental." 
//   },
//   { 
//     icon: ShieldCheck, 
//     label: "Dermatologically Tested", 
//     description: "Chaque produit est testé dermatologiquement pour garantir une tolérance optimale." 
//   },
//   { 
//     icon: Award, 
//     label: "ISO 22000", 
//     description: "Notre système de management de la sécurité alimentaire est certifié selon la norme internationale." 
//   },
// ];

// const stats = [
//   { icon: Calendar, value: "2009", label: "Année de création" },
//   { icon: MapPin, value: "200+", label: "Points de vente" },
//   { icon: Package, value: "120+", label: "Produits" },
//   { icon: Users, value: "3", label: "Marques" },
// ];

// export default function About() {
//   return (
//     <div className="min-h-screen pt-20 md:pt-24" data-testid="page-about">
//       <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-3xl">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
//               Présentation de LRS
//             </h1>
//             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" data-testid="text-about-subtitle">
//               Laboratoires Réunis de Soin – Une entreprise tunisienne dédiée à la beauté et au bien-être depuis plus de 15 ans.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-16 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//             {stats.map((stat) => (
//               <Card key={stat.label} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
//                 <CardContent className="pt-6 pb-5">
//                   <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
//                     <stat.icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
//                   <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-12 md:py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//             <div className="space-y-6">
//               <h2 className="text-2xl md:text-3xl font-semibold text-foreground" data-testid="text-history-title">
//                 Notre Histoire
//               </h2>
//               <div className="prose prose-gray dark:prose-invert max-w-none space-y-4" data-testid="text-history-content">
//                 <p className="text-muted-foreground leading-relaxed">
//                   <strong className="text-foreground">LRS</strong> est une société à responsabilité limitée (S.A.R.L) créée le <strong className="text-foreground">11 mai 2009</strong>. 
//                   Tous nos produits suivent une chaîne de production <strong className="text-foreground">100 % tunisienne</strong> dans une démarche responsable et durable.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Aujourd'hui, nous sommes fiers de compter plus de <strong className="text-foreground">200 points de vente</strong> et <strong className="text-foreground">3 marques</strong> – 
//                   LYS INTENSE, BOOM et AL JARA – avec plus de <strong className="text-foreground">120 produits</strong> différents pour répondre à tous vos besoins.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Notre distribution s'étend au-delà de la Tunisie vers la <strong className="text-foreground">Libye, l'Algérie et l'Afrique de l'Ouest</strong>, 
//                   témoignant de la qualité et de la confiance que nos clients nous accordent.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   Notre gamme complète comprend : soins capillaires, hygiène corporelle, déodorants, produits enfants et bébés… 
//                   Tous nos produits passent par des <strong className="text-foreground">contrôles rigoureux</strong> pour garantir une qualité irréprochable.
//                 </p>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
//                 <img
//                   src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop"
//                   alt="Production LRS"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
//               <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-500/10 rounded-lg -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-card" data-testid="section-commitments">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-commitments-title">
//               Nos Engagements
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               La qualité, la sécurité et le respect de l'environnement sont au cœur de notre démarche.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {certifications.map((cert) => (
//               <Card key={cert.label} className="h-full" data-testid={`commitment-${cert.label.toLowerCase().replace(/\s+/g, "-")}`}>
//                 <CardContent className="pt-6 pb-5 text-center">
//                   <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
//                     <cert.icon className="w-8 h-8 text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground mb-2">{cert.label}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-20 bg-primary text-primary-foreground">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-4">
//             Notre Mission
//           </h2>
//           <p className="text-lg text-primary-foreground/80 leading-relaxed">
//             Offrir des produits cosmétiques et d'hygiène de haute qualité, accessibles à tous, 
//             tout en respectant l'environnement et en contribuant au développement de l'industrie tunisienne.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Leaf, Recycle, ShieldCheck, Award, Users, MapPin, Package, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { icon: Leaf, label: "pH Neutral", description: "Toutes nos formules sont équilibrées pour respecter le pH naturel de votre peau et de vos cheveux." },
  { icon: Recycle, label: "Recycled Plastic", description: "Nous utilisons des emballages en plastique recyclé pour réduire notre impact environnemental." },
  { icon: ShieldCheck, label: "Dermatologically Tested", description: "Chaque produit est testé dermatologiquement pour garantir une tolérance optimale." },
  { icon: Award, label: "ISO 22000", description: "Notre système de management de la sécurité alimentaire est certifié selon la norme internationale." },
];

const stats = [
  { icon: Calendar, value: "2009", label: "Année de création" },
  { icon: MapPin, value: "200+", label: "Points de vente" },
  { icon: Package, value: "120+", label: "Produits" },
  { icon: Users, value: "3", label: "Marques" },
];

export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50" data-testid="page-about">
      {/* Elegant header with accent color */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-indigo-600/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            À Propos de LRS
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
            Laboratoires Réunis de Soin — Une entreprise tunisienne dédiée à la beauté et au bien-être depuis 2009
          </p>
        </div>
      </section>

      {/* LYS INTENSE Passion Story – Eye-catching card with gradient border */}
      <section className="py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <div className="relative bg-white rounded-3xl p-12 md:p-20 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                LYS INTENSE – Une Histoire de Passion
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-center md:text-left">
                <p>Nous voulons tous une apparence attractive et soignée. Cependant, tout le monde ne sait pas que cet objectif ne peut être atteint qu’avec une série de soins.</p>
                <p>LYS INTENSE propose des produits de haute qualité pour tous les types et tous les âges, des soins de la tête aux pieds, avec une attention particulière portée aux différentes exigences de la peau et des cheveux.</p>
                <p>Shampoings, après-shampoings, gels douche, soins hydratants, sérums, masques capillaires, roll-on et déodorants — des lignes élégantes, accessibles et respectueuses pour toute la famille.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats – Premium glass cards with accent glow */}
      <section className="py-20 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="w-10 h-10 text-purple-600" />
                </div>
                <p className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-gray-600 mt-3 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Presentation – Elegant two-column with colored accent */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                Présentation de LRS
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p><strong>LRS</strong> est une S.A.R.L fondée le <strong>11 mai 2009</strong> avec une production <strong>100 % tunisienne</strong> et une démarche responsable.</p>
                <p>Aujourd’hui : <strong>200+ points de vente</strong>, <strong>3 marques</strong> (LYS INTENSE, BOOM, AL JARA) et <strong>plus de 120 produits</strong> pour homme, femme, enfant et bébé.</p>
                <p>Présence en Tunisie et export en Libye, Algérie et Afrique de l’Ouest.</p>
                <p>Chaque produit passe des <strong>contrôles physico-chimiques et toxicologiques</strong> (cutanée, transcutanée, oculaire) avant commercialisation.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-purple-200/50">
                <img
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&h=700&fit=crop"
                  alt="Usine LRS Tunisie"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Commitments – Vibrant premium cards */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Nos Engagements
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Qualité, sécurité et respect de l’environnement au cœur de chaque produit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {certifications.map((cert) => (
              <Card key={cert.label} className="group hover:-translate-y-3 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="pt-12 pb-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cert.icon className="w-12 h-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{cert.label}</h3>
                  <p className="text-gray-600 leading-relaxed px-4">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Mission – Luxurious closing */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-700 via-pink-700 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Notre Mission</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed max-w-5xl mx-auto opacity-95">
            Offrir des produits cosmétiques et d’hygiène de haute qualité, accessibles à tous,<br className="hidden md:block" />
            tout en respectant l’environnement et en faisant rayonner l’industrie tunisienne.
          </p>
        </div>
      </section>
    </div>
  );
}