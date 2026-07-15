"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type CartItem = {
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string, size: string) => void;
  increaseQuantity: (name: string, size: string) => void;
  decreaseQuantity: (name: string, size: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("goyada-cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("goyada-cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find(
        (p) => p.name === item.name && p.size === item.size
      );

      if (existing) {
        return prev.map((p) =>
          p.name === item.name && p.size === item.size
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, item];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (name: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.name === name && item.size === size))
    );
  };

  // INCREASE
  const increaseQuantity = (name: string, size: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // DECREASE
  const decreaseQuantity = (name: string, size: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}