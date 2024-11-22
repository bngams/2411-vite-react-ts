// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Cart } from "../models/Cart";
import { CartItem } from "../models/CartItem";

interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void; // Accept CartItem with product and qty
  updateQty: (productId: number, qty: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [], updatedAt: new Date() });

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find(
        (item) => item.product.id === newItem.product.id
      );

      const updatedItems = existingItem
        ? prevCart.items.map((item) =>
            item.product.id === newItem.product.id
              ? { ...item, qty: item.qty + newItem.qty }
              : item
          )
        : [...prevCart.items, newItem];

      return { items: updatedItems, updatedAt: new Date() };
    });
  };

  const updateQty = (productId: number, qty: number) => {
    setCart((prevCart) => {
      const updatedItems =
        qty > 0
          ? prevCart.items.map((item) =>
              item.product.id === productId ? { ...item, qty } : item
            )
          : prevCart.items.filter((item) => item.product.id !== productId);

      return { items: updatedItems, updatedAt: new Date() };
    });
  };

  const clearCart = () => {
    setCart({ items: [], updatedAt: new Date() });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
