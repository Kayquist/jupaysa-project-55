
import React from 'react';
import { Globe, Shield, Zap, DollarSign, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Send and receive payments in 150+ countries with local banking networks."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Enterprise-grade encryption and compliance with international standards."
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description: "Lightning-fast payments with real-time processing and confirmation."
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Save up to 85% on international transfer fees with transparent pricing."
    },
    {
      icon: Clock,
      title: "24/7 Processing",
      description: "Round-the-clock payment processing with automated settlements."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated account managers and multilingual customer support."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Jupaysa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive payment solutions that help businesses scale globally 
            with confidence, security, and efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-yellow-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Global Payments?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that trust Jupaysa for their international payment needs.
            </p>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Download App Today
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
