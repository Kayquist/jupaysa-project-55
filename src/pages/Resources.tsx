
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Video, FileText, MessageCircle } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      items: ["API Reference", "Integration Guides", "Best Practices"]
    },
    {
      icon: Video,
      title: "Tutorials",
      description: "Step-by-step video tutorials",
      items: ["Getting Started", "Advanced Features", "Troubleshooting"]
    },
    {
      icon: FileText,
      title: "Blog & Guides",
      description: "Industry insights and how-to guides",
      items: ["Payment Trends", "Compliance", "Case Studies"]
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Get help when you need it",
      items: ["Help Center", "Contact Support", "Community Forum"]
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
                Resources & Support
              </h1>
              <p className="text-xl text-green-700 max-w-3xl mx-auto">
                Everything you need to succeed with Jupaysa payments.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resourceCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-green-50 rounded-xl p-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-3">{category.title}</h3>
                    <p className="text-green-700 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-green-600 hover:text-yellow-600 cursor-pointer">
                          {item}
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

export default Resources;
