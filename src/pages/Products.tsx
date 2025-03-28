
import React, { useState } from 'react';
import Transition from '../components/Transition';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Search } from 'lucide-react';

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Transition>
      <div className="min-h-screen pt-24 pb-20 bg-cream-50">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-honey-900">Our Products</h1>
            <p className="text-honey-700/80 max-w-2xl mx-auto text-sm md:text-base">
              Discover our range of premium honey products, each carefully harvested and processed to preserve all natural benefits.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto mt-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-honey-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-9 pr-4 py-2 border border-honey-200 rounded-lg focus:ring-2 focus:ring-honey-500 focus:border-transparent bg-white placeholder-honey-400 text-honey-800 transition-all duration-200"
              />
            </div>
          </div>

          {/* Products Grid - Updated to be denser */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-honey-800 mb-2">No products found</h3>
              <p className="text-honey-600">
                Try adjusting your search query or browse all our products.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 bg-honey-500 hover:bg-honey-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default Products;
