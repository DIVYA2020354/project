
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import MainLayout from "@/layouts/MainLayout";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const OrderSummary: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Go back to cart if there are no items
  React.useEffect(() => {
    if (items.length === 0 && !orderPlaced) {
      navigate("/cart");
    }
  }, [items, navigate, orderPlaced]);

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    
    // Simulate order processing
    setTimeout(() => {
      // Generate random order number
      const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
      setOrderNumber(randomOrderNumber);
      
      setIsPlacingOrder(false);
      setOrderPlaced(true);
      clearCart();
      
      toast.success("Your order has been placed successfully!");
    }, 1500);
  };

  const handleBackToMenu = () => {
    navigate("/");
  };

  if (orderPlaced) {
    return (
      <MainLayout>
        <section className="py-12 px-4 animate-fade-in">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
              
              <p className="text-muted-foreground mb-6">
                Your order #{orderNumber} has been placed successfully.
              </p>
              
              <div className="glass-card rounded-xl p-6 mb-8 inline-block mx-auto">
                <p className="text-sm text-muted-foreground mb-2">Estimated Delivery Time</p>
                <p className="text-2xl font-bold">30-45 minutes</p>
              </div>
              
              <button
                onClick={handleBackToMenu}
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all hover:opacity-90 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Menu
              </button>
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
          <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3">
              <div className="glass-card rounded-2xl p-6 mb-6">
                <h2 className="text-lg font-medium mb-4">Delivery Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-secondary/50 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-1">Address</label>
                    <input
                      type="text"
                      placeholder="Delivery address"
                      className="w-full bg-secondary/50 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-1">Phone</label>
                    <input
                      type="tel"
                      placeholder="Contact number"
                      className="w-full bg-secondary/50 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-1">Notes</label>
                    <textarea
                      placeholder="Special instructions (optional)"
                      rows={3}
                      className="w-full bg-secondary/50 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-lg font-medium mb-4">Order Items</h2>
                
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-lg overflow-hidden mr-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-medium mb-4">Payment Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>$3.99</span>
                  </div>
                  
                  <div className="border-t pt-3 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1 + 3.99).toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handlePlaceOrder}
                    disabled={isPlacingOrder}
                    className="w-full btn-pulse bg-primary text-primary-foreground rounded-lg py-3 px-4 font-medium text-center transition-all hover:opacity-90 active:scale-95 disabled:opacity-70"
                  >
                    {isPlacingOrder ? "Processing..." : "Place Order"}
                  </button>
                  
                  <button
                    onClick={() => navigate("/cart")}
                    className="w-full btn-pulse bg-secondary text-foreground rounded-lg py-3 px-4 font-medium text-center transition-all hover:bg-secondary/80"
                  >
                    Back to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default OrderSummary;
