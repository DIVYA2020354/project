
export interface Food {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Appetizers" | "Main Courses" | "Desserts" | "Beverages";
  dietary: "Vegetarian" | "Non-Vegetarian" | "Vegan";
  image: string;
  popular?: boolean;
}

export const foods: Food[] = [
  {
    id: "1",
    name: "Classic Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, and extra virgin olive oil",
    price: 14.99,
    category: "Main Courses",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1000&auto=format&fit=crop",
    popular: true
  },
  {
    id: "2",
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms, shallots, white wine, and Parmesan",
    price: 18.99,
    category: "Main Courses",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1633964913849-96cde64d9ef4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon with lemon herb butter, served with seasonal vegetables",
    price: 24.99,
    category: "Main Courses",
    dietary: "Non-Vegetarian",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
    popular: true
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
    price: 9.99,
    category: "Desserts",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, garlic croutons, Parmesan cheese, and Caesar dressing",
    price: 12.99,
    category: "Appetizers",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Beef Burger",
    description: "Angus beef patty with cheddar, lettuce, tomato, onion, and special sauce",
    price: 16.99,
    category: "Main Courses",
    dietary: "Non-Vegetarian",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    popular: true
  },
  {
    id: "7",
    name: "Tiramisu",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone",
    price: 8.99,
    category: "Desserts",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "8",
    name: "Bruschetta",
    description: "Toasted baguette topped with diced tomatoes, garlic, basil, and balsamic glaze",
    price: 10.99,
    category: "Appetizers",
    dietary: "Vegan",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "9",
    name: "Iced Matcha Latte",
    description: "Premium green tea powder with milk, sweetener, and ice",
    price: 5.99,
    category: "Beverages",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1634356395105-8c3cb88bd537?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "10",
    name: "Chicken Alfredo Pasta",
    description: "Fettuccine pasta with grilled chicken and creamy Alfredo sauce",
    price: 19.99,
    category: "Main Courses",
    dietary: "Non-Vegetarian",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "11",
    name: "Fresh Berry Parfait",
    description: "Layers of Greek yogurt, mixed berries, granola, and honey",
    price: 7.99,
    category: "Desserts",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "12",
    name: "Miso Soup",
    description: "Traditional Japanese soup with tofu, seaweed, and green onions",
    price: 6.99,
    category: "Appetizers",
    dietary: "Vegetarian",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000&auto=format&fit=crop"
  }
];

export const categories = Array.from(
  new Set(foods.map(food => food.category))
);

export const dietary = Array.from(
  new Set(foods.map(food => food.dietary))
);
