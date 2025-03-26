
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import MainLayout from "@/layouts/MainLayout";
import { ShoppingBag, ArrowRight, Trash2 } from "lucide-react";

const Cart: React.FC = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <section className="py-12 px-4 animate-fade-in">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
            
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/80 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all hover:opacity-90 active:scale-95"
              >
                Browse Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <section className="py-12 px-4 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="glass-card rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium">Cart Items ({totalItems})</h2>
                  
                  <button
                    onClick={clearCart}
                    className="inline-flex items-center text-sm text-destructive hover:text-destructive/80"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Clear All
                  </button>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                </div>
                
                <Link
                  to="/order-summary"
                  className="block w-full btn-pulse bg-primary text-primary-foreground rounded-lg py-3 px-4 font-medium text-center transition-all hover:opacity-90 active:scale-95"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cart;
