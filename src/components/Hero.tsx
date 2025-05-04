
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;

      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-cream-100 -z-10" />

      {/* Floating hexagons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 transition-transform duration-200 ease-out">
          <div className="absolute top-1/4 left-1/4 h-40 w-40 bg-honey-200 rounded-full opacity-20 blur-xl" />
          <div className="absolute top-2/3 right-1/3 h-60 w-60 bg-honey-300 rounded-full opacity-25 blur-xl" />
          <div className="absolute bottom-1/4 left-1/2 h-32 w-32 bg-honey-400 rounded-full opacity-20 blur-xl" />
        </div>
      </div>

      <div className="container px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left content */}
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="inline-block bg-honey-100 text-honey-800 px-4 py-1 rounded-full text-sm font-medium">
                100% Pure & Natural
              </h4>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-honey-900">
                Experience Nature's <br />
                <span className="text-honey-600">Liquid Gold</span>
              </h1>
              
              <p className="text-lg md:text-xl text-honey-800/80 max-w-xl mx-auto lg:mx-0">
                Discover the finest selection of raw, unfiltered honey sourced directly from sustainable apiaries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <button
                onClick={() => navigate('/products')}
                className="bg-honey-500 hover:bg-honey-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors duration-300 shadow-lg shadow-honey-500/20"
              >
                Shop Now <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('/about')}
                className="bg-white hover:bg-honey-50 text-honey-800 px-8 py-3 rounded-lg font-medium border border-honey-200 transition-colors duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right content - Updated honey jar image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-honey-400/30 to-honey-200/30 rounded-full animate-spin-slow opacity-70" />
              <div className="absolute inset-8 bg-gradient-to-bl from-honey-300/40 to-honey-100/40 rounded-full animate-spin-slow opacity-70" style={{ animationDelay: "1s", animationDirection: "reverse" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full flex items-center justify-center p-12">
                  <img
                    src="/lovable-uploads/8665a257-149a-41cc-95f3-031a5613f829.png"
                    alt="Premium honey jar with wooden dipper"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
