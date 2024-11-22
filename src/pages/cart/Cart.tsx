// src/pages/Cart.tsx
import React from "react";
import { useCart } from "../../providers/CartProvider";
import ProductList from "../../components/products/products-list/ProductList";

const Cart: React.FC = () => {
  const { cart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-extrabold mb-4">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-extrabold mb-4">Your Cart</h1>
      <p className="text-sm text-gray-500 mb-4">
        Last updated: {cart.updatedAt.toLocaleString()}
      </p>
      <button
        className="mb-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={clearCart}
      >
        Clear Cart
      </button>
      <ProductList
        products={cart.items.map((item) => item.product)}
        mode="shortlist"
        />
    </div>
  );
};

export default Cart;
