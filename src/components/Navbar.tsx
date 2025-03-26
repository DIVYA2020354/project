
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Moon, Sun, ShoppingBag, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-lg md:text-xl font-medium tracking-tight"
          >
            Taste<span className="font-bold">Delight</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary/80 ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/cart" 
              className={`text-sm font-medium transition-colors hover:text-primary/80 ${
                location.pathname === "/cart" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Cart
            </Link>
            <Link 
              to="/order-summary" 
              className={`text-sm font-medium transition-colors hover:text-primary/80 ${
                location.pathname === "/order-summary" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Order
            </Link>
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-[18px] h-[18px]" />
              ) : (
                <Moon className="w-[18px] h-[18px]" />
              )}
            </button>

            <Link 
              to="/cart" 
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="View cart"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-medium animate-fade-in">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="p-2 md:hidden rounded-full hover:bg-secondary transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[57px] bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary/80 ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className={`text-sm font-medium transition-colors hover:text-primary/80 ${
              location.pathname === "/cart" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={closeMenu}
          >
            Cart
          </Link>
          <Link
            to="/order-summary"
            className={`text-sm font-medium transition-colors hover:text-primary/80 ${
              location.pathname === "/order-summary" ? "text-primary" : "text-muted-foreground"
            }`}
            onClick={closeMenu}
          >
            Order
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
