
import React from "react";
import { Food } from "@/data/foods";
import { useCart } from "@/context/CartContext";
import { PlusCircle } from "lucide-react";

interface FoodCardProps {
  food: Food;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group food-card h-full glass-card rounded-xl overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        <img
          src={food.image}
          alt={food.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
        
        {food.popular && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-1 rounded-full">
              Popular
            </span>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            food.dietary === "Vegetarian" 
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" 
              : food.dietary === "Vegan" 
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
          }`}>
            {food.dietary}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-balance">{food.name}</h3>
          <span className="font-semibold ml-2">${food.price.toFixed(2)}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {food.description}
        </p>
        
        <div className="mt-auto">
          <button
            onClick={() => addToCart(food)}
            className="w-full btn-pulse flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-2 font-medium text-sm transition-all hover:opacity-90 active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
