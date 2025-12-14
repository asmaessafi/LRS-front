import type { Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const brandColors: Record<string, string> = {
  "LYS INTENSE": "bg-primary text-primary-foreground",
  "BOOM": "bg-orange-500 text-white dark:bg-orange-600",
  "AL JARA": "bg-rose-500 text-white dark:bg-rose-600",
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card 
      className="group overflow-visible transition-all duration-300 hover:shadow-lg hover-elevate"
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-muted">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <Badge 
          className={`absolute top-3 left-3 ${brandColors[product.brand]} text-xs font-medium`}
          data-testid={`badge-brand-${product.id}`}
        >
          {product.brand}
        </Badge>
      </div>
      <CardContent className="p-4 space-y-2">
        <h3 className="font-medium text-base leading-tight line-clamp-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground" data-testid={`text-product-desc-${product.id}`}>
          {product.description}
        </p>
        {product.variants && product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {product.variants.slice(0, 3).map((variant, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs"
                data-testid={`badge-variant-${product.id}-${index}`}
              >
                {variant}
              </Badge>
            ))}
            {product.variants.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{product.variants.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
