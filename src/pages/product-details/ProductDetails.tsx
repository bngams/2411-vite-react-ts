import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_MOCK } from "../../mocks/products.mock";
import ProductCard from "../../components/products/product-card/ProductCard";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find the product by ID
  const product = PRODUCTS_MOCK.find(
    (item) => item.id === parseInt(id || "0", 10)
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-extrabold mb-4 text-red-500">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Main title */}
      <h1 className="text-4xl font-extrabold mb-4">{product.title}</h1>
      {/* Display detailed product card */}
      <ProductCard product={product} mode="detail" />
    </div>
  );
};

export default ProductDetails;
