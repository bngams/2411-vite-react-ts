// src/models/CartItem.ts
import { Product } from "./Product";

export type CartItem = {
  product: Product;
  qty: number;
}

export type CartItems = CartItem[]; 