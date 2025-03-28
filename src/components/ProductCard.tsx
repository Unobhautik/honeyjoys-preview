
import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-honey-100 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Info icon overlay */}
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-70 group-hover:opacity-100 transition-opacity z-10">
            <Info size={16} className="text-honey-600" />
          </div>
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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
          >
            Buy Now
          </a>
        </div>
      </div>

      {/* Detailed Product Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl bg-white p-0 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 h-full">
            {/* Product Image */}
            <div className="relative h-60 md:h-full bg-honey-50">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Product Details */}
            <div className="p-6 flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-honey-900">{product.name}</DialogTitle>
                <div className="flex items-center justify-between">
                  <DialogDescription className="text-honey-700 mt-1">Premium Quality Honey</DialogDescription>
                  <span className="text-xl font-medium text-honey-600">{product.price}</span>
                </div>
              </DialogHeader>
              
              <div className="mt-4 space-y-4 flex-grow">
                <h4 className="font-medium text-honey-800">Description</h4>
                <p className="text-honey-700/90">{product.description}</p>
                
                <h4 className="font-medium text-honey-800 pt-2">Benefits</h4>
                <ul className="list-disc list-inside text-honey-700/90 space-y-1">
                  <li>100% Pure & Natural</li>
                  <li>Rich in Antioxidants</li>
                  <li>Raw & Unfiltered</li>
                  <li>No Additives or Preservatives</li>
                </ul>
                
                <h4 className="font-medium text-honey-800 pt-2">Usage</h4>
                <p className="text-honey-700/90">
                  Perfect for sweetening tea, coffee, or drizzled over breakfast dishes, 
                  desserts, and salad dressings.
                </p>
              </div>
              
              <div className="mt-6 space-y-3">
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-honey-500 hover:bg-honey-600 text-white text-center py-3 rounded-lg font-medium transition-colors"
                >
                  Buy Now on Amazon
                </a>
                <button 
                  className="block w-full border border-honey-200 hover:bg-honey-50 text-honey-800 text-center py-3 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
