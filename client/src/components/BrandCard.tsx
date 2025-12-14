import { Card, CardContent } from "@/components/ui/card";

interface BrandCardProps {
  name: string;
  description: string;
  imageUrl: string;
  color: string;
}

export function BrandCard({ name, description, imageUrl, color }: BrandCardProps) {
  return (
    <Card 
      className="group overflow-visible transition-all duration-300 hover:shadow-xl hover-elevate"
      data-testid={`card-brand-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden rounded-t-lg ${color}`}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg tracking-wide" data-testid={`text-brand-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>
            {name}
          </h3>
        </div>
      </div>
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-brand-desc-${name.toLowerCase().replace(/\s+/g, "-")}`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
