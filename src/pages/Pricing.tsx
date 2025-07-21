
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to $10,000 monthly volume",
        "Basic payment processing",
        "Email support",
        "Standard reporting"
      ]
    },
    {
      name: "Growth",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to $100,000 monthly volume",
        "Advanced payment features",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited monthly volume",
        "Custom integrations",
        "Dedicated account manager",
        "White-label options",
        "24/7 phone support"
      ]
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg sm:text-xl text-green-700 max-w-3xl mx-auto px-4">
                Choose the plan that fits your business needs. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-6 sm:p-8 border-2 ${plan.popular ? 'border-yellow-500 relative' : 'border-green-200'}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-800 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-green-600">{plan.period}</span>}
                    </div>
                    <p className="text-green-700">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-yellow-600 mr-3" />
                        <span className="text-green-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-yellow-500 hover:bg-yellow-600 text-green-800' : 'bg-green-800 hover:bg-green-700 text-white'}`}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
