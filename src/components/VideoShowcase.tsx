
import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const VideoShowcase = () => {
  const features = [
    "Lightning-fast international transfers",
    "Real-time exchange rates",
    "Multi-currency business accounts",
    "Automated payment reconciliation",
    "24/7 global customer support",
    "Enterprise-grade security"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Video Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" 
                alt="Jupaysa Platform Demo"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors group">
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 text-black ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-xl sm:text-2xl font-bold text-yellow-500">$2.5B+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Processed monthly</div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Experience the Future of Global Payments
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              See how Jupaysa revolutionizes international business payments with 
              our comprehensive platform that combines speed, security, and simplicity.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Watch Demo
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
