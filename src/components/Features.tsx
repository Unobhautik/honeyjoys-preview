
import React from 'react';
import { Drop, Leaf, Heart, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Drop className="h-8 w-8" />,
      title: "100% Pure",
      description: "Our honey is 100% pure and unfiltered, preserving all the natural enzymes and beneficial properties."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable",
      description: "Sourced from sustainable apiaries that prioritize bee health and environmental responsibility."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health Benefits",
      description: "Rich in antioxidants, minerals, and enzymes that support immune health and overall wellbeing."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Each batch is carefully tested to ensure the highest standards of quality and flavor."
    }
  ];

  return (
    <section className="py-20 bg-cream-50">
      <div className="container px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-honey-900">Why Choose Our Honey?</h2>
          <p className="text-honey-700/80 max-w-2xl mx-auto">
            We're committed to providing the highest quality honey while supporting sustainable beekeeping practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-honey-100 hover-slide-up"
            >
              <div className="h-14 w-14 rounded-full bg-honey-100 flex items-center justify-center text-honey-600 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-medium text-honey-900 mb-3">{feature.title}</h3>
              <p className="text-honey-700/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
