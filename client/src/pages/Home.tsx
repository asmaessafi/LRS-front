// import { Link } from "wouter";
// import { useQuery } from "@tanstack/react-query";
// import { Button } from "@/components/ui/button";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Hero } from "@/components/Hero";
// import { BrandCard } from "@/components/BrandCard";
// import { ProductCard } from "@/components/ProductCard";
// import { type Product } from "@shared/schema";
// import { ArrowRight, Leaf, Recycle, ShieldCheck, Award } from "lucide-react";

// const brands = [
//   {
//     name: "LYS INTENSE",
//     description: "Notre marque phare proposant une gamme complète de soins pour le corps et les cheveux. Des formules douces et efficaces pour toute la famille.",
//     imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=450&fit=crop",
//     color: "bg-gradient-to-br from-primary to-primary/80",
//   },
//   {
//     name: "BOOM",
//     description: "La gamme styling dédiée aux hommes. Cires, gels et produits coiffants pour un look impeccable au quotidien.",
//     imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=450&fit=crop",
//     color: "bg-gradient-to-br from-orange-500 to-orange-600",
//   },
//   {
//     name: "AL JARA",
//     description: "Gels douche premium aux parfums raffinés. Une expérience sensorielle unique pour des moments de bien-être.",
//     imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=450&fit=crop",
//     color: "bg-gradient-to-br from-rose-500 to-rose-600",
//   },
// ];

// const certifications = [
//   { icon: Leaf, label: "pH Neutral", description: "Formules équilibrées" },
//   { icon: Recycle, label: "Recycled Plastic", description: "Emballages responsables" },
//   { icon: ShieldCheck, label: "Dermatologically Tested", description: "Sécurité garantie" },
//   { icon: Award, label: "ISO 22000", description: "Qualité certifiée" },
// ];

// function ProductSkeleton() {
//   return (
//     <div className="rounded-lg border bg-card overflow-hidden">
//       <Skeleton className="aspect-[3/4] w-full" />
//       <div className="p-4 space-y-3">
//         <Skeleton className="h-5 w-3/4" />
//         <Skeleton className="h-4 w-1/2" />
//         <div className="flex gap-1">
//           <Skeleton className="h-5 w-16" />
//           <Skeleton className="h-5 w-16" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const { data: products = [], isLoading } = useQuery<Product[]>({
//     queryKey: ["/api/products"],
//   });

//   const featuredProducts = products.slice(0, 8);

//   return (
//     <div className="min-h-screen" data-testid="page-home">
//       <Hero />

//       <section className="py-16 md:py-24 bg-background" data-testid="section-intro">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6" data-testid="text-intro-title">
//             Des produits sains, respectueux et accessibles
//           </h2>
//           <p className="text-base md:text-lg text-muted-foreground leading-relaxed" data-testid="text-intro-description">
//             Shampoings, après-shampoings, gels douche, déodorants, masques capillaires, huiles, roll-on… 
//             Des produits de haute qualité pour tous les âges et tous les types de peau et cheveux. 
//             Du soin quotidien aux gammes spécialisées, découvrez plus de 120 produits pour toute la famille.
//           </p>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-card" data-testid="section-brands">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-brands-title">
//               Nos Marques
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Trois marques complémentaires pour répondre à tous vos besoins en cosmétiques et hygiène.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             {brands.map((brand) => (
//               <BrandCard key={brand.name} {...brand} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24 bg-background" data-testid="section-featured">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4" data-testid="text-featured-title">
//               Produits Phares
//             </h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Découvrez notre sélection de produits les plus appréciés par nos clients.
//             </p>
//           </div>
          
//           {isLoading ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <ProductSkeleton key={i} />
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {featuredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           )}
          
//           <div className="text-center mt-12">
//             <Link href="/produits">
//               <Button size="lg" className="group" data-testid="button-view-all-products">
//                 Découvrir tous les produits
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 md:py-20 bg-primary/5" data-testid="section-certifications">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-xl md:text-2xl font-semibold text-foreground" data-testid="text-certifications-title">
//               Nos Engagements Qualité
//             </h2>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
//             {certifications.map((cert) => (
//               <div key={cert.label} className="text-center" data-testid={`certification-${cert.label.toLowerCase().replace(/\s+/g, "-")}`}>
//                 <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
//                   <cert.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-medium text-foreground text-sm">{cert.label}</h3>
//                 <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { ProductCard } from "@/components/ProductCard";
import { type Product } from "@shared/schema";
import { ArrowRight, Leaf, Recycle, ShieldCheck, Award } from "lucide-react";

const brands = [
  {
    name: "LYS INTENSE",
    description: "Notre marque phare proposant une gamme complète de soins pour le corps et les cheveux. Des formules douces et efficaces pour toute la famille.",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=450&fit=crop",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
  },
  {
    name: "BOOM",
    description: "La gamme styling dédiée aux hommes. Cires, gels et produits coiffants pour un look impeccable au quotidien.",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=450&fit=crop",
    color: "bg-gradient-to-br from-gray-700 to-gray-900",
  },
  {
    name: "AL JARA",
    description: "Gels douche premium aux parfums raffinés. Une expérience sensorielle unique pour des moments de bien-être.",
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=450&fit=crop",
    color: "bg-gradient-to-br from-rose-600 to-purple-700",
  },
];

const certifications = [
  { icon: Leaf, label: "pH Neutral", description: "Formules équilibrées" },
  { icon: Recycle, label: "Recycled Plastic", description: "Emballages responsables" },
  { icon: ShieldCheck, label: "Dermatologically Tested", description: "Sécurité garantie" },
  { icon: Award, label: "ISO 22000", description: "Qualité certifiée" },
];

function ProductSkeleton() {
  return (
    <div className="group rounded-2xl border bg-card overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30" data-testid="page-home">
      <Hero />

      {/* Intro – Elegant with subtle accent */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-8">
            Des produits sains, respectueux et accessibles
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
            Shampoings, après-shampoings, gels douche, déodorants, masques capillaires, huiles, roll-on…<br />
            Plus de 120 produits de haute qualité pour tous les âges et tous les types de peau et cheveux.<br />
            Du soin quotidien aux gammes spécialisées, pour toute la famille.
          </p>
        </div>
      </section>

      {/* Brands – Premium cards with refined gradients */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent mb-4">
              Nos Marques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trois univers complémentaires pour sublimer votre quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {brands.map((brand) => (
              <BrandCard key={brand.name} {...brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products – Eye-catching grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent to-purple-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-4">
              Produits Phares
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les incontournables plébiscités par nos clients
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/produits">
              <Button 
                size="xl" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                data-testid="button-view-all-products"
              >
                Découvrir tous les produits
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications – Clean, premium icons with subtle accent */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Nos Engagements Qualité
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {certifications.map((cert) => (
              <div key={cert.label} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/10 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500">
                  <cert.icon className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.label}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}