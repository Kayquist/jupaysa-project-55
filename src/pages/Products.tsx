
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CreditCard, Smartphone, Globe, Building } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: CreditCard,
      title: "Payment Gateway",
      description: "Accept payments online with our secure payment gateway.",
      price: "2.9% + $0.30 per transaction"
    },
    {
      icon: Smartphone,
      title: "Mobile SDK",
      description: "Integrate payments into your mobile applications.",
      price: "Custom pricing"
    },
    {
      icon: Globe,
      title: "Global Accounts",
      description: "Open multi-currency accounts worldwide.",
      price: "From $25/month"
    },
    {
      icon: Building,
      title: "Enterprise Solutions",
      description: "Tailored payment solutions for large businesses.",
      price: "Contact sales"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-6">
                Our Products
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Choose from our range of payment products designed to meet your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="text-yellow-600 font-semibold">{product.price}</div>
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

export default Products;
