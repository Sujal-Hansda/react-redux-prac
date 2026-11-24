
import React from "react";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-[#181818] border border-white/10 rounded-2xl p-4 text-white shadow-lg hover:border-lime-400/40 transition-all">

      {/* Image */}
      <div className="h-52 bg-[#222] rounded-xl overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Title & Price */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold truncate">
          {product.title}
        </h2>

        <p className="text-2xl font-bold text-lime-400 mt-2">
          ${product.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-400">Quantity</span>
        <span className="text-sm bg-[#252525] px-4 py-2 rounded-lg">
          1
        </span>
      </div>

      {/* Add to Cart */}
      <button
        className="w-full mt-5 flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold py-3 rounded-xl transition-colors"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;
