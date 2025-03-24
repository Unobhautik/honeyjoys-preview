
import React from 'react';
import Transition from '../components/Transition';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  // Featured products (show only 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <Transition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Featured Products Section */}
        <section className="py-20 bg-white">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-honey-900">Our Featured Products</h2>
                <p className="text-honey-700/80 max-w-xl">
                  Browse our selection of premium quality honey products.
                </p>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-honey-600 hover:text-honey-800 font-medium transition-colors"
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-honey-50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 h-40 w-40 bg-honey-200 rounded-full opacity-30 blur-xl" />
          <div className="absolute -bottom-20 -right-20 h-40 w-40 bg-honey-300 rounded-full opacity-30 blur-xl" />

          <div className="container px-6 md:px-10 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-honey-900">What Our Customers Say</h2>
              <p className="text-honey-700/80 max-w-xl mx-auto">
                Read testimonials from our satisfied customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The best honey I've ever tasted! Pure, raw and full of flavor. I'll never go back to store-bought.",
                  author: "Sarah J.",
                  location: "Portland, OR"
                },
                {
                  quote: "I love how transparent this company is about their sourcing. The wildflower honey is incredible on my morning toast.",
                  author: "Michael T.",
                  location: "Chicago, IL"
                },
                {
                  quote: "Their Manuka honey helped soothe my sore throat during cold season. A bit pricey but worth every penny.",
                  author: "Emily R.",
                  location: "Denver, CO"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-honey-100 relative">
                  <div className="absolute -top-4 left-8 text-5xl text-honey-400">"</div>
                  <p className="text-honey-800 mb-6 relative z-10">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-honey-200 flex items-center justify-center text-honey-600 font-medium">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-medium text-honey-900">{testimonial.author}</h4>
                      <p className="text-honey-600 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-honey-900 text-white text-center">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Difference Today</h2>
            <p className="text-honey-100/80 max-w-2xl mx-auto mb-8">
              Try our premium honey products and taste the difference that quality makes.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-honey-500 hover:bg-honey-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-honey-600/20"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default Index;
