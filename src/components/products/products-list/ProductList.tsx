import { Products } from "../../../models/Product";
import { ProductDisplayProps } from "../../../models/ProductDisplayMode";
import ProductCard from "../product-card/ProductCard";

type ProductListProps = ProductDisplayProps & {
    products: Products;
}  
  
const ProductList: React.FC<ProductListProps> = ({ mode, products }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} mode={mode} />
        ))}
        </div>
    );
};

export default ProductList;