import React from 'react';
import { UserPlus, Zap, Smartphone, CreditCard, TrendingUp, Headphones } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Easy Account Opening",
      description: "Get started in minutes with our streamlined account setup process"
    },
    {
      icon: Zap,
      title: "Instant Transfer",
      description: "Send money globally with lightning-fast processing times"
    },
    {
      icon: Smartphone,
      title: "Airtime/Data Top Up",
      description: "Recharge your phone with cashback rewards on every transaction"
    },
    {
      icon: CreditCard,
      title: "Instant Debit Card",
      description: "Get your debit card instantly with zero maintenance fees"
    },
    {
      icon: TrendingUp,
      title: "Amazing Daily Interest",
      description: "Earn competitive daily interest on your account balance"
    },
    {
      icon: Headphones,
      title: "Quick Customer Service",
      description: "24/7 support team ready to help with any questions or issues"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Your Financial Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover all the tools and services designed to make your financial life easier
          </p>
        </div>

        {/* Scrollable Cards Container */}
        <div className="relative">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 pb-4 snap-x snap-mandatory">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="flex-shrink-0 w-72 sm:w-80 snap-start bg-white hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {features.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;