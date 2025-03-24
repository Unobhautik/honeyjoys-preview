
import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: string;
  amazonUrl: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-honey-100">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="font-serif font-medium text-lg text-honey-900">{product.name}</h3>
          <span className="text-honey-600 font-medium">{product.price}</span>
        </div>
        <p className="text-honey-700/80 text-sm line-clamp-2">{product.description}</p>
        
        {/* View on Amazon Button */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-honey-800 hover:text-honey-600 transition-colors"
        >
          View on Amazon <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
      
      {/* Buy Button (Appears on Hover) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-gradient-to-t from-white via-white to-transparent pt-12">
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-honey-500 hover:bg-honey-600 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-md"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
