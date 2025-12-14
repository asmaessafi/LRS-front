import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { type Category, categoryLabels, allCategories } from "@shared/schema";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="w-full py-6" data-testid="filter-bar">
      <ScrollArea className="w-full">
        <div className="flex items-center gap-3 px-1">
          {/* "Tous" button – cute & soft */}
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="md"
            onClick={() => onCategoryChange("all")}
            className={cn(
              "shrink-0 px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 md",
              activeCategory === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/30"
                : "bg-white/90 dark:bg-background/90 backdrop-blur-sm text-foreground/80 hover:bg-pink-50 hover:text-pink-600"
            )}
            data-testid="button-filter-all"
          >
            Tous
          </Button>

          {/* Category buttons – same cute style */}
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="md"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "shrink-0 px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/30"
                  : "bg-white/90 dark:bg-background/90 backdrop-blur-sm text-foreground/80 hover:bg-pink-50 hover:text-pink-600"
              )}
              data-testid={`button-filter-${category}`}
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        {/* Cute & minimal scrollbar */}
        <ScrollBar
          orientation="horizontal"
          className="mt-3 h-1.5 bg-transparent [&_[data-orientation=horizontal]]:bg-transparent [&_[role=slider]]:bg-pink-400/50 [&_[role=slider]]:rounded-full [&_[role=slider]]:transition-all hover:[&_[role=slider]]:bg-pink-500/70"
        />
      </ScrollArea>
    </div>
  );
}