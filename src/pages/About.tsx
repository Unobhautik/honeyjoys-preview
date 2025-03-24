
import React from 'react';
import Transition from '../components/Transition';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Transition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-honey-50 py-16">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-honey-900">Our Story</h1>
                <p className="text-lg text-honey-700/80">
                  We're passionate beekeepers committed to producing the finest quality honey while supporting healthy bee populations.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Beekeeper working with hives"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-white">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-honey-900 mb-8 text-center">Our Mission</h2>
              <div className="prose prose-lg max-w-none text-honey-800">
                <p>
                  At Pure Honey, our mission is simple: to provide the highest quality, pure honey products while promoting sustainable beekeeping practices that protect and support honey bee populations.
                </p>
                <p>
                  We believe in maintaining the integrity of our honey by minimally processing it, ensuring that all the natural enzymes, antioxidants, and beneficial properties remain intact. Our honey is never pasteurized or ultra-filtered, allowing you to enjoy nature's perfect food as it was meant to be.
                </p>
                <p>
                  Beyond producing exceptional honey, we're committed to education and advocacy for honey bees, these remarkable insects that play a crucial role in our ecosystem and food supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-cream-50">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-honey-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality",
                  description: "We never compromise on quality, carefully harvesting and processing our honey to preserve its natural goodness."
                },
                {
                  title: "Sustainability",
                  description: "We practice and promote sustainable beekeeping methods that respect the natural behavior of bees and support their health."
                },
                {
                  title: "Transparency",
                  description: "We believe in complete transparency about our sourcing, harvesting methods, and the journey from hive to home."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-honey-100">
                  <h3 className="text-xl font-medium text-honey-900 mb-4">{value.title}</h3>
                  <p className="text-honey-700/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-honey-900 mb-12 text-center">Our Process</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-honey-200 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12 md:space-y-0 relative">
                {[
                  {
                    title: "Sustainable Hive Management",
                    description: "We care for our bees using natural methods, avoiding harmful chemicals and prioritizing bee health over maximum honey production."
                  },
                  {
                    title: "Careful Harvesting",
                    description: "We harvest honey only when it's fully capped and mature, ensuring optimal flavor and nutritional content."
                  },
                  {
                    title: "Minimal Processing",
                    description: "Our honey is gently strained to remove wax particles while preserving pollen, enzymes, and beneficial compounds."
                  },
                  {
                    title: "Quality Testing",
                    description: "Each batch undergoes rigorous testing for purity, moisture content, and flavor before being bottled."
                  }
                ].map((step, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                      <div className="h-12 w-12 rounded-full bg-honey-500 text-white flex items-center justify-center text-xl font-bold mb-4 md:mb-0 z-10">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-medium text-honey-900 mt-4 mb-2">{step.title}</h3>
                      <p className="text-honey-700/80">{step.description}</p>
                    </div>
                    <div className="hidden md:block w-full md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-cream-50">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-honey-900 mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "David Miller",
                  role: "Founder & Head Beekeeper",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                  bio: "With over 20 years of beekeeping experience, David founded Pure Honey with a mission to share the wonders of natural honey."
                },
                {
                  name: "Sarah Johnson",
                  role: "Operations Manager",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                  bio: "Sarah ensures our honey production maintains the highest standards of quality and sustainability."
                },
                {
                  name: "Michael Chen",
                  role: "Bee Conservation Specialist",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                  bio: "Michael focuses on developing sustainable practices that support honey bee health and population growth."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-honey-100">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-honey-900">{member.name}</h3>
                    <p className="text-honey-600 mb-3">{member.role}</p>
                    <p className="text-honey-700/80 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-honey-100">
          <div className="container px-6 md:px-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-honey-900 mb-4">Ready to Experience Our Honey?</h2>
            <p className="text-honey-700/80 max-w-2xl mx-auto mb-8">
              Explore our range of premium honey products and taste the difference that quality makes.
            </p>
            <Link
              to="/products"
              className="inline-block bg-honey-500 hover:bg-honey-600 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md"
            >
              Shop Our Products
            </Link>
          </div>
        </section>
      </div>
    </Transition>
  );
};

export default About;
