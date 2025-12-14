import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";
import { type Product, type Category, categoryLabels } from "@shared/schema";
import { Package } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductSkeleton() {
  return (
    <div className="group rounded-2xl border bg-card overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-6 space-y-4">
        <Skeleton className="h-6 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-full rounded-lg" />
        <Skeleton className="h-4 w-2/3 rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

async function fetchProducts(category: Category | "all"): Promise<Product[]> {
  const url = category === "all" 
    ? "/api/products" 
    : `/api/products?category=${category}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const { data: products = [], isLoading, isFetching, isError } = useQuery<Product[]>({
    queryKey: ["/api/products", activeCategory],
    queryFn: () => fetchProducts(activeCategory),
    staleTime: 0,
    refetchOnMount: true,
  });

  const showLoading = isLoading || isFetching;

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-b from-purple-50/50 via-white to-pink-50/30" data-testid="page-products">
      {/* Premium header */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 bg-clip-text text-transparent mb-6">
            Nos Produits
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
            Découvrez notre gamme complète de plus de 120 produits cosmétiques et d’hygiène<br />
            Formulés avec passion pour sublimer votre beauté au quotidien
          </p>
        </div>
      </section>

      {/* Sticky Filter Bar – already enhanced */}
      <section className="sticky top-16 md:top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          {!showLoading && !isError && (
            <div className="flex items-center justify-between mb-10">
              <p className="text-lg text-gray-600 font-medium">
                {products.length} produit{products.length > 1 ? "s" : ""} affiché{products.length > 1 ? "s" : ""}
                {activeCategory !== "all" && (
                  <span className="ml-2 text-primary font-semibold">
                    — {categoryLabels[activeCategory]}
                  </span>
                )}
              </p>
            </div>
          )}

          {/* Loading / Error / Empty / Grid */}
          {showLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-24">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-destructive/10 flex items-center justify-center">
                <Package className="w-12 h-12 text-destructive" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Erreur de chargement</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Impossible de charger les produits pour le moment. Veuillez réessayer plus tard.
              </p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-muted/50 flex items-center justify-center">
                <Package className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Aucun produit trouvé</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Essayez une autre catégorie ou consultez l’ensemble de notre catalogue.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}