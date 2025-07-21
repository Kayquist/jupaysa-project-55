
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the center of everything we do."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to solve complex payment challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every interaction and transaction."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building a more connected global economy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6">
                About Jupaysa
              </h1>
              <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto px-4">
                We're on a mission to make global payments simple, secure, and accessible for businesses worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6">Our Story</h2>
                <p className="text-green-700 mb-4 sm:mb-6">
                  Founded in 2020, Jupaysa emerged from a simple observation: global payments were too complex, 
                  too expensive, and too slow for modern businesses. Our founders, having experienced these 
                  challenges firsthand, set out to build a better solution.
                </p>
                <p className="text-green-700 mb-4 sm:mb-6">
                  Today, we serve over 500,000 businesses across 150+ countries, processing billions in 
                  payments annually. But we're just getting started.
                </p>
              </div>
              <div className="order-1 lg:order-2 bg-yellow-100 rounded-2xl p-6 sm:p-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop" 
                  alt="Team collaboration"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Our Values</h2>
              <p className="text-lg sm:text-xl text-green-700">The principles that guide everything we do</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                    <p className="text-green-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
