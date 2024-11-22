// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Cart } from "../models/Cart";
import { CartItem } from "../models/CartItem";

interface CartActions {
    type: "ADD_TO_CART" | "UPDATE_QTY" | "CLEAR_CART",
    payload: {
        item?:CartItem;
        id: number; // cart id
    }   
} 

interface CartContextType {
  cart: Cart;
  dispatch: Function;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ items: [], updatedAt: new Date() });

  const reducer = (cart: CartItem, action: CartActions) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // setCart...
            break;
        case "CLEAR_CART":
            // setCart...
            break;
        default:
            break;
    }
  } 
  

  console.log(reducer);
  

  return (
    <CartContext.Provider value={{ cart, dispatch}}>
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
