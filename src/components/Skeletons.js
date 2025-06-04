export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="aspect-square bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
      </div>
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded mb-2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded mb-3 w-3/4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="h-8 bg-gray-200 rounded w-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
            </div>
          ))}
          <div className="h-4 bg-gray-200 rounded w-12 ml-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductsGridSkeleton({ count = 8 }) {
  return (
    <div className="container mx-auto px-4 pb-8">
      {/* Category filter skeleton */}
      <div className="mb-8 flex flex-wrap gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-10 bg-gray-200 rounded-full w-24 animate-pulse relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>
        ))}
      </div>

      {/* Products grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(count)].map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image skeleton */}
          <div className="aspect-square bg-gray-200 rounded-lg animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
          </div>

          {/* Product info skeleton */}
          <div>
            {/* Category */}
            <div className="h-4 bg-gray-200 rounded w-24 mb-4 animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
            </div>

            {/* Title */}
            <div className="space-y-2 mb-6">
              <div className="h-8 bg-gray-200 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 bg-gray-200 rounded animate-pulse relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
                  </div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-20 ml-2 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-200 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
            </div>

            {/* Price */}
            <div className="h-10 bg-gray-200 rounded w-32 mb-6 animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
            </div>

            {/* Quantity and button */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
                </div>
                <div className="h-10 bg-gray-200 rounded w-32 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
                </div>
              </div>
              <div className="h-12 bg-gray-200 rounded w-full animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
            </div>

            {/* Product details */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="h-6 bg-gray-200 rounded w-32 mb-4 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
              </div>
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex">
                    <div className="h-4 bg-gray-200 rounded w-20 mr-4 animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent shimmer"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShimmerEffect() {
  return (
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
  );
}
