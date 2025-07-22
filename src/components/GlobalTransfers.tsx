import React from 'react';
import { Globe, ArrowRightLeft, TrendingUp, Bell, MapPin, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import globalTransfersImage from '@/assets/global-transfers.jpg';

const GlobalTransfers = () => {
  const transferFeatures = [
    {
      icon: ArrowRightLeft,
      title: "Send to Asia",
      description: "Send NGN to Asian countries with automatic currency conversion to local currencies"
    },
    {
      icon: TrendingUp,
      title: "Receive from Asia",
      description: "Receive funds in NGN from Asian countries directly to your wallet or bank account"
    },
    {
      icon: Bell,
      title: "Rate Alerts",
      description: "Monitor exchange rates and get notified when your preferred rates are available"
    },
    {
      icon: Globe,
      title: "Real-Time Rates",
      description: "Access live exchange rates from global FX providers for transparent pricing"
    }
  ];

  const supportedCountries = [
    { country: "China", currency: "CNY", flag: "🇨🇳" },
    { country: "Japan", currency: "JPY", flag: "🇯🇵" },
    { country: "Singapore", currency: "SGD", flag: "🇸🇬" },
    { country: "South Korea", currency: "KRW", flag: "🇰🇷" },
    { country: "Malaysia", currency: "MYR", flag: "🇲🇾" },
    { country: "Thailand", currency: "THB", flag: "🇹🇭" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-6">
            <Globe className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cross-Border Money Transfers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly send and receive money between Nigeria and Asia with competitive rates and instant processing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Visual Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={globalTransfersImage} 
                alt="Global Money Transfers" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20"></div>
              
              {/* Floating Transfer Card */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">NGN → CNY</span>
                  <span className="text-green-600 font-semibold">Live Rate</span>
                </div>
                <div className="text-lg font-bold text-gray-900">₦1 = ¥0.0092</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {transferFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Supported Countries */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Supported Asian Countries
            </h3>
            <p className="text-gray-600">
              Send money to these countries with competitive exchange rates
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {supportedCountries.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{item.flag}</div>
                <div className="text-sm font-semibold text-gray-900">{item.country}</div>
                <div className="text-xs text-gray-500">{item.currency}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Start Transfer Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTransfers;