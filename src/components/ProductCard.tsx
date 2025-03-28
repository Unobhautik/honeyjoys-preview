
import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Info, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: string;
  amazonUrl: string;
  imageUrl: string;
  images?: string[]; // Optional array of additional images
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Create an array of images, starting with the main image
  const allImages = product.images 
    ? [product.imageUrl, ...product.images] 
    : [product.imageUrl];

  return (
    <>
      <div 
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-honey-100 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Product Images Carousel */}
        <div className="relative aspect-square overflow-hidden">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {allImages.map((image, index) => (
                <CarouselItem key={`${product.id}-img-${index}`} className="h-full">
                  <div className="h-full w-full">
                    <img
                      src={image}
                      alt={`${product.name} - image ${index + 1}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
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
            {/* Product Image Carousel */}
            <div className="relative bg-honey-50 h-60 md:h-full">
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {allImages.map((image, index) => (
                    <CarouselItem key={`dialog-${product.id}-img-${index}`} className="h-full">
                      <div className="h-full w-full">
                        <img
                          src={image}
                          alt={`${product.name} - image ${index + 1}`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                
                {allImages.length > 1 && (
                  <>
                    {/* Modern navigation buttons that only appear in the dialog */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelector(`[data-carousel-prev="dialog-${product.id}"]`)?.click();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all opacity-60 hover:opacity-100 z-10"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="h-5 w-5 text-honey-800" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelector(`[data-carousel-next="dialog-${product.id}"]`)?.click();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all opacity-60 hover:opacity-100 z-10"
                      aria-label="Next image"
                    >
                      <ArrowRight className="h-5 w-5 text-honey-800" />
                    </button>
                    
                    {/* Hidden buttons that actually control the carousel */}
                    <div className="sr-only">
                      <CarouselPrevious data-carousel-prev={`dialog-${product.id}`} />
                      <CarouselNext data-carousel-next={`dialog-${product.id}`} />
                    </div>
                  </>
                )}
              </Carousel>
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
