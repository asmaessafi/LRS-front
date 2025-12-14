import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { FilterBar } from "@/components/FilterBar";
import { type Product, type Category, categoryLabels } from "@shared/schema";
import { Package } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

function ProductSkeleton() {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-1">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
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
    <div className="min-h-screen pt-20 md:pt-24" data-testid="page-products">
      <section className="py-8 md:py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="text-products-title">
            Nos Produits
          </h1>
          <p className="text-muted-foreground" data-testid="text-products-subtitle">
            Découvrez notre gamme complète de plus de 120 produits cosmétiques et d'hygiène.
          </p>
        </div>
      </section>

      <section className="sticky top-16 md:top-20 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FilterBar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </section>

      <section className="py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!showLoading && !isError && (
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground" data-testid="text-products-count">
                {products.length} produit{products.length > 1 ? "s" : ""}
                {activeCategory !== "all" && (
                  <span> dans <span className="font-medium text-foreground">{categoryLabels[activeCategory]}</span></span>
                )}
              </p>
            </div>
          )}

          {showLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </div>
          ) : isError ? (
            <div className="text-center py-16" data-testid="error-products">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                <Package className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Erreur de chargement</h3>
              <p className="text-muted-foreground">
                Impossible de charger les produits. Veuillez réessayer plus tard.
              </p>
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16" data-testid="empty-products">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Package className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Aucun produit trouvé</h3>
              <p className="text-muted-foreground">
                Essayez une autre catégorie ou consultez tous nos produits.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
