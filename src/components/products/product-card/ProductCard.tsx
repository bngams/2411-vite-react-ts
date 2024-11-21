import { Button, Input } from "@nextui-org/react";
import { Product } from "../../../models/Product";
import { ProductDisplayProps } from "../../../models/ProductDisplayMode";
import { Link } from "react-router-dom";

type ProductCardProps = ProductDisplayProps &  {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, mode }) => {
    return (
        <div className={`border rounded-lg shadow-md p-4 ${
            mode === "list" ? "flex flex-col md:flex-row gap-4" : "flex items-center"
        }`}
        >
        {/* Thumbnail */}
        <div className={`${mode === "detail" ? "w-1/3" : "w-24 h-24"} flex-shrink-0`}>
            <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover w-full h-full rounded-md"
            />
        </div>

        {/* Product Info */}
        <div
            className={`flex flex-col ${
            mode === "list" ? "flex-1" : mode === "shortlist" ? "flex-grow" : "w-1/2 p-4"
            }`}
        >
            {/* Title */}
            <h2
            className={`text-lg font-semibold ${
                mode === "shortlist" ? "text-sm" : "text-lg"
            }`}
            >
            {product.title}
            </h2>

            {/* Description (only in `list` or `detail` mode) */}
            {mode !== "shortlist" && (
            <p className={`text-gray-600 ${mode === "list" ? "text-sm" : "text-base"}`}>
                {mode === "detail"
                ? product.description
                : `${product.description.slice(0, 100)}...`}
            </p>
            )}

            {/* Category and Price */}
            <div className="flex items-center justify-between mt-2">
            <span className="text-gray-500 text-sm capitalize">{product.category}</span>
            <span className="font-bold text-blue-500">${product.price.toFixed(2)}</span>
            </div>
        </div>

        {/* Action Buttons (only in `list` or `detail` mode) */}
        {mode !== "shortlist" && (
            <div className={`w-[30%] mt-4 md:mt-0 flex flex-col gap-2 justify-center`}>
                {mode === "list" && (
                    <Link to={`/product/${product.id}`}>
                    <Button className="w-full" color="default" variant="faded" aria-label="Decrease qty">
                        Details
                    </Button></Link>
                )}
                {mode === "detail" && (
                <div className="flex justify-between">
                    <Button isIconOnly color="default" variant="faded" aria-label="Decrease qty">
                        -
                    </Button>
                    <Input
                        isReadOnly
                        type="text"
                        defaultValue="1"
                        variant="bordered"
                        className="flex-1"
                    />
                    <Button isIconOnly color="default" variant="faded" aria-label="Increase qty">
                        +
                    </Button>
                </div>
                )} 
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Add to Cart
                </button>
                {mode === "detail" && (
                    <button className="w-full px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                    Buy Now
                    </button>
                )}
            </div>
        )}
        </div>
    );
};

export default ProductCard;