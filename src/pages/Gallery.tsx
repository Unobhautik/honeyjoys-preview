
import React, { useEffect } from 'react';
import Transition from '../components/Transition';
import { products } from '../data/products';
import { ImageIcon, Star, User } from 'lucide-react';
import { Helmet } from 'react-helmet';

const GalleryPage: React.FC = () => {
  // Collect all product images
  const productImages = products.map(product => ({
    id: product.id,
    name: product.name,
    imageUrl: product.imageUrl,
    description: product.description
  }));

  // Add structured data for image gallery
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "KalpRaj Honey Product Gallery",
    "description": "Explore our beautiful collection of premium honey products",
    "image": productImages.map(item => item.imageUrl)
  };

  return (
    <Transition>
      <Helmet>
        <title>Product Gallery - KalpRaj Honey</title>
        <meta name="description" content="Browse our collection of premium, raw, and unfiltered honey products from KalpRaj Honey. View high-quality images of Ajmo, Suva, Til, and Saunf honey varieties." />
        <meta name="keywords" content="honey gallery, honey products, pure honey images, KalpRaj Honey products" />
        <link rel="canonical" href="https://kalprajhoney.com/gallery" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen pt-24 pb-20">
        {/* Gallery Hero */}
        <section className="bg-honey-50 py-12">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-honey-900 mb-4">Product Gallery</h1>
            <p className="text-lg text-honey-700/80 max-w-2xl mx-auto">
              Explore our beautiful collection of premium honey products
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {productImages.map((item) => (
                <div key={item.id} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-full h-full relative">
                    <img 
                      src={item.imageUrl} 
                      alt={`KalpRaj ${item.name} Honey - Premium quality raw honey product`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3 text-white w-full">
                        <h3 className="font-medium truncate">{item.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default GalleryPage;
