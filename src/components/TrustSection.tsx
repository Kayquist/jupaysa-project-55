
import React from 'react';

const TrustSection = () => {
  const logos = [
    { name: "Microsoft", width: "120" },
    { name: "Shopify", width: "100" },
    { name: "Stripe", width: "80" },
    { name: "Amazon", width: "100" },
    { name: "Google", width: "90" },
    { name: "Meta", width: "80" }
  ];

  const stats = [
    { value: "$50B+", label: "Annual Payment Volume" },
    { value: "500K+", label: "Active Businesses" },
    { value: "150+", label: "Countries Supported" },
    { value: "99.9%", label: "Uptime Reliability" }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Logos */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide mb-6 sm:mb-8">
            Trusted by industry leaders worldwide
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <div 
                  className="bg-gray-300 rounded h-8 sm:h-10" 
                  style={{width: Math.min(parseInt(logo.width), 100) + 'px'}}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-medium mb-6 sm:mb-8">
              "Jupaysa has revolutionized our international payment processes. The speed, 
              reliability, and cost savings have been game-changing for our global expansion."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=60&h=60&fit=crop&crop=face" 
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-500">CFO, TechCorp Global</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
