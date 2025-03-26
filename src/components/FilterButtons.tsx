
import React from "react";
import { categories, dietary } from "@/data/foods";

interface FilterButtonsProps {
  activeCategory: string | null;
  activeDietary: string | null;
  onCategoryChange: (category: string | null) => void;
  onDietaryChange: (dietary: string | null) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  activeCategory,
  activeDietary,
  onCategoryChange,
  onDietaryChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              activeCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80 text-foreground"
            }`}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Dietary</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onDietaryChange(null)}
            className={`px-3 py-1 text-xs rounded-full transition-all ${
              activeDietary === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80 text-foreground"
            }`}
          >
            All
          </button>
          
          {dietary.map((diet) => (
            <button
              key={diet}
              onClick={() => onDietaryChange(diet)}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                activeDietary === diet
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              }`}
            >
              {diet}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterButtons;
