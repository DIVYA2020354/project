
import React, { useState, useEffect } from "react";
import { foods, Food } from "@/data/foods";
import FoodCard from "@/components/FoodCard";
import SearchBar from "@/components/SearchBar";
import FilterButtons from "@/components/FilterButtons";
import MainLayout from "@/layouts/MainLayout";

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDietary, setActiveDietary] = useState<string | null>(null);
  const [filteredFoods, setFilteredFoods] = useState<Food[]>(foods);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Filter foods based on search term, category, and dietary preference
    const results = foods.filter((food) => {
      // Search term filter
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            food.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = activeCategory === null || food.category === activeCategory;
      
      // Dietary filter
      const matchesDietary = activeDietary === null || food.dietary === activeDietary;
      
      return matchesSearch && matchesCategory && matchesDietary;
    });
    
    setFilteredFoods(results);
  }, [searchTerm, activeCategory, activeDietary]);

  useEffect(() => {
    // Animate page elements on load
    setIsPageLoaded(true);
  }, []);

  return (
    <MainLayout>
      <section className={`py-12 px-4 transition-opacity duration-500 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight slide-up">
              Delicious Food, Delivered
            </h1>
            <p className="text-lg text-muted-foreground mx-auto max-w-2xl slide-up" style={{ animationDelay: "100ms" }}>
              Browse our menu and order your favorite meals with just a few clicks.
            </p>
          </div>
          
          <div className="mb-8 slide-up" style={{ animationDelay: "200ms" }}>
            <SearchBar onSearch={setSearchTerm} />
          </div>
          
          <div className="mb-10 slide-up" style={{ animationDelay: "300ms" }}>
            <FilterButtons
              activeCategory={activeCategory}
              activeDietary={activeDietary}
              onCategoryChange={setActiveCategory}
              onDietaryChange={setActiveDietary}
            />
          </div>
          
          {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFoods.map((food, index) => (
                <div 
                  key={food.id} 
                  className="slide-up" 
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
