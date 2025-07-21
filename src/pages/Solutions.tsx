
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Globe, Shield, Zap, DollarSign } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Globe,
      title: "International Transfers",
      description: "Send money globally with competitive exchange rates and low fees.",
      features: ["150+ countries", "Real-time tracking", "Bank-level security"]
    },
    {
      icon: Shield,
      title: "Mass Payments",
      description: "Pay multiple recipients simultaneously with our bulk payment solution.",
      features: ["Batch processing", "CSV upload", "Automated scheduling"]
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Integrate our payment infrastructure directly into your platform.",
      features: ["RESTful APIs", "Webhooks", "Developer support"]
    },
    {
      icon: DollarSign,
      title: "Currency Exchange",
      description: "Access competitive exchange rates for your business needs.",
      features: ["Real-time rates", "Forward contracts", "Risk management"]
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-800 mb-4 sm:mb-6">
                Payment Solutions
                <span className="block text-yellow-600">For Every Business</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-green-700 max-w-3xl mx-auto px-4">
                Discover our comprehensive suite of payment solutions designed to help your business grow globally.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-green-50 rounded-xl p-4 sm:p-6 lg:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-green-800 mb-3 sm:mb-4">{solution.title}</h3>
                    <p className="text-green-700 mb-4 sm:mb-6 text-sm sm:text-base">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-green-600 text-sm sm:text-base">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
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

export default Solutions;
