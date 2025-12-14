import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { type Category, categoryLabels, allCategories } from "@shared/schema";

interface FilterBarProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  return (
    <div className="w-full py-4" data-testid="filter-bar">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex items-center gap-2 pb-2">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
            className="shrink-0"
            data-testid="button-filter-all"
          >
            Tous
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className="shrink-0"
              data-testid={`button-filter-${category}`}
            >
              {categoryLabels[category]}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
