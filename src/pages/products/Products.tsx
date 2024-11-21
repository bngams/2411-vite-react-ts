import React from "react";
import { PRODUCTS_MOCK } from "../../mocks/products.mock";
import ProductList from "../../components/products/products-list/ProductList";

const Products: React.FC = () => {
  const products = PRODUCTS_MOCK;
  return(
    <>
      {/* Must become a main title component to avoid repeating syles */}
      <h1 className="text-4xl font-extrabold mb-4">Products</h1>
      <ProductList mode="list" products={products} /> 
    </>
  )
}
export default Products;