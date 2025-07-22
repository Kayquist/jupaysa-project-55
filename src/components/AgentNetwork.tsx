import React from 'react';
import { Users, Briefcase, TrendingUp, CreditCard, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AgentNetwork = () => {
  const agentFeatures = [
    {
      icon: Users,
      title: "Agent Onboarding",
      description: "Streamlined verification system for new agents with comprehensive training"
    },
    {
      icon: CreditCard,
      title: "POS Integration",
      description: "Seamless POS device integration for instant transactions and payments"
    },
    {
      icon: TrendingUp,
      title: "Commission Tracking",
      description: "Real-time earnings tracking with transparent commission structure"
    },
    {
      icon: Briefcase,
      title: "Business Solutions",
      description: "Bulk payment processing and invoicing tools for enterprise clients"
    }
  ];

  const networkStats = [
    { number: "10,000+", label: "Active Agents", icon: Users },
    { number: "50,000+", label: "POS Devices", icon: CreditCard },
    { number: "₦50B+", label: "Monthly Volume", icon: TrendingUp },
    { number: "99.9%", label: "Uptime", icon: Award }
  ];

  const benefits = [
    "Competitive commission rates up to 2.5%",
    "24/7 technical support and training",
    "Real-time transaction monitoring",
    "Flexible payout schedules",
    "Marketing support and materials",
    "Performance-based bonuses"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Agent & Merchant Network
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our thriving network of agents and merchants with advanced POS integration and comprehensive business solutions
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {networkStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {agentFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-600" />
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

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Agent Benefits & Rewards
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                Become an Agent Today
              </Button>
            </div>
          </div>
        </div>

        {/* Cross-Border Business Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Cross-Border Business Solutions
            </h3>
            <p className="text-orange-100 max-w-2xl mx-auto">
              Specialized payment solutions for businesses paying suppliers in China from Nigeria with secure international gateways
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Supplier Payments</h4>
              <p className="text-orange-100 text-sm">Direct payments to Chinese suppliers with competitive exchange rates</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Bulk Processing</h4>
              <p className="text-orange-100 text-sm">Process multiple international payments with detailed invoicing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">Secure Gateways</h4>
              <p className="text-orange-100 text-sm">Integration with trusted international payment gateways</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentNetwork;