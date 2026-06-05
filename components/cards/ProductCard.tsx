import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
      
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
        fill
          src="/images/hero-home.png"
          alt="Product"
        />
      </div>

      {/* Content Section */}
      <div className="space-y-3 p-4">
        
        {/* Category */}
        <p className="text-sm text-gray-500">
          Fitness Equipment
        </p>

        {/* Product Name */}
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900">
          Premium Adjustable Dumbbells
        </h3>

        {/* Price + Rating */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-black">
            ₹4,999
          </p>

          <div className="flex items-center gap-1 text-sm text-yellow-500">
            ⭐ 4.8
          </div>
        </div>

        {/* Button */}
        <button className="w-full rounded-xl bg-black py-3 text-sm font-medium text-white transition hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;