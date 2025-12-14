import type { Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const brandColors: Record<string, { bg: string; ring: string; text: string }> = {
  "LYS INTENSE": { bg: "from-purple-600 to-pink-600", ring: "ring-purple-500/30", text: "text-white" },
  "BOOM": { bg: "from-gray-700 to-gray-900", ring: "ring-gray-600/30", text: "text-white" },
  "AL JARA": { bg: "from-rose-600 to-purple-700", ring: "ring-rose-500/30", text: "text-white" },
};

export function ProductCard({ product }: ProductCardProps) {
  const brandColor = brandColors[product.brand] || { bg: "from-primary", ring: "ring-primary/30", text: "text-primary-foreground" };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-500",
        "hover:shadow-2xl hover:-translate-y-2 hover:ring-4 hover:ring-offset-4",
        brandColor.ring
      )}
      data-testid={`card-product-${product.id}`}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
      
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Premium brand badge with glow */}
        <div className="absolute top-4 left-4 z-20">
          <Badge 
            className={cn(
              "px-4 py-1.5 text-xs font-semibold tracking-wide shadow-lg",
              "bg-gradient-to-r", brandColor.bg, brandColor.text,
              "ring-2 ring-white/50 backdrop-blur-sm"
            )}
            data-testid={`badge-brand-${product.id}`}
          >
            {product.brand}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 space-y-4 bg-gradient-to-b from-transparent to-card">
        <h3 className="font-bold text-lg leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Variants – soft pills */}
        {product.variants && product.variants.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {product.variants.slice(0, 4).map((variant, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary/80 border border-primary/20"
                data-testid={`badge-variant-${product.id}-${index}`}
              >
                {variant}
              </Badge>
            ))}
            {product.variants.length > 4 && (
              <Badge variant="outline" className="px-3 py-1 text-xs font-medium rounded-full border-primary/30">
                +{product.variants.length - 4}
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Card>
  );
}