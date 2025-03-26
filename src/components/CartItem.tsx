
import React from "react";
import { useCart } from "@/context/CartContext";
import { MinusCircle, PlusCircle, Trash2 } from "lucide-react";
import { Food } from "@/data/foods";

interface CartItemProps {
  item: Food & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const [isLoading, setIsLoading] = React.useState(true);

  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center py-4 space-x-4 animate-fade-in">
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        {isLoading && (
          <div className="absolute inset-0 bg-secondary animate-pulse" />
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-muted-foreground">
              {item.dietary} • {item.category}
            </p>
          </div>
          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={decrementQuantity}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
              aria-label="Decrease quantity"
            >
              <MinusCircle className="w-5 h-5" />
            </button>
            
            <span className="font-medium text-sm w-6 text-center">
              {item.quantity}
            </span>
            
            <button
              onClick={incrementQuantity}
              className="p-1 rounded-full hover:bg-secondary transition-colors"
              aria-label="Increase quantity"
            >
              <PlusCircle className="w-5 h-5" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(item.id)}
            className="p-1 text-destructive hover:bg-secondary rounded-full transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
