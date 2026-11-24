
import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-[#181818] border border-white/10 rounded-2xl p-4 animate-pulse">

      {/* Image Skeleton */}
      <div className="h-52 bg-[#292929] rounded-xl"></div>

      {/* Title */}
      <div className="mt-4 space-y-3">
        <div className="h-5 bg-[#292929] rounded-md w-3/4"></div>

        {/* Price */}
        <div className="h-7 bg-[#292929] rounded-md w-1/3"></div>
      </div>

      {/* Quantity */}
      <div className="flex justify-between items-center mt-5">
        <div className="h-4 bg-[#292929] rounded w-20"></div>
        <div className="h-9 bg-[#292929] rounded-lg w-16"></div>
      </div>

      {/* Button */}
      <div className="h-12 bg-[#292929] rounded-xl mt-5"></div>

    </div>
  );
};

export default ProductSkeleton;
