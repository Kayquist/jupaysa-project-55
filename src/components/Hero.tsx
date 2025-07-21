
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-yellow-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Global Payments
                <span className="block text-green-600">Made Simple</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Streamline your international business payments with Jupaysa's secure, 
                fast, and cost-effective global payment solutions.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Bank-level security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>150+ countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-gray-300 w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">$50B+</div>
                <div className="text-xs sm:text-sm text-gray-500">Processed annually</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-xs sm:text-sm text-gray-500">Active businesses</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-500">Uptime guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Jupaysa Dashboard"
                className="w-full h-48 sm:h-64 object-cover rounded-lg"
              />
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Total Volume</span>
                  <span className="text-lg font-semibold text-green-600">+12.5%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-white rounded-lg shadow-lg p-2 sm:p-4 animate-bounce">
              <div className="text-xs text-gray-500">Payment Status</div>
              <div className="text-green-600 font-semibold text-sm">✓ Completed</div>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-white rounded-lg shadow-lg p-2 sm:p-4">
              <div className="text-xs text-gray-500">Exchange Rate</div>
              <div className="text-yellow-600 font-semibold text-sm">1.23 USD/EUR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
