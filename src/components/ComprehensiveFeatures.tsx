import React from 'react';
import { 
  CreditCard, Smartphone, Shield, Wifi, Database, Lock, 
  HeadphonesIcon, BarChart3, Globe, Code, UserCheck, FileCheck 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ComprehensiveFeatures = () => {
  const bankingFeatures = [
    {
      icon: CreditCard,
      title: "Virtual & Physical Cards",
      description: "Get instant virtual debit cards or order physical cards with global acceptance"
    },
    {
      icon: Database,
      title: "Multi-Bank Linking",
      description: "Connect multiple bank accounts via Open Banking API for unified management"
    },
    {
      icon: Wifi,
      title: "Bill Payments",
      description: "Pay electricity, water, TV, internet bills and more with instant confirmation"
    },
    {
      icon: Smartphone,
      title: "Airtime & Data",
      description: "Top up airtime and data for all networks with cashback rewards"
    }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "AI Fraud Detection",
      description: "Advanced machine learning algorithms monitor and prevent fraudulent activities"
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Bank-grade encryption protects all your transactions and personal data"
    },
    {
      icon: BarChart3,
      title: "Risk Analysis",
      description: "Real-time transaction monitoring with intelligent anomaly detection"
    },
    {
      icon: FileCheck,
      title: "Dispute Resolution",
      description: "Comprehensive chargeback handling and transaction dispute management"
    }
  ];

  const appFeatures = [
    {
      icon: Smartphone,
      title: "Cross-Platform Apps",
      description: "Native Android, iOS apps and responsive web dashboard for all devices"
    },
    {
      icon: HeadphonesIcon,
      title: "Live Support",
      description: "24/7 customer support with live chat and intelligent chatbot assistance"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed spending analytics and transaction insights to manage your finances"
    },
    {
      icon: Globe,
      title: "Customizable Themes",
      description: "Personalize your app experience with multiple theme options and settings"
    }
  ];

  const developerFeatures = [
    {
      icon: Code,
      title: "Developer APIs",
      description: "Comprehensive APIs for custom business integrations and third-party applications"
    },
    {
      icon: Database,
      title: "Secure Integration",
      description: "Secure APIs for wallet, payment, and authentication features integration"
    },
    {
      icon: Shield,
      title: "Authentication APIs",
      description: "Robust authentication and authorization APIs with multi-factor support"
    },
    {
      icon: Globe,
      title: "Partner Platform",
      description: "White-label solutions for businesses to integrate our payment infrastructure"
    }
  ];

  const kycTiers = [
    {
      tier: "Tier 1",
      title: "Basic KYC",
      requirements: ["Phone Number", "Email", "BVN"],
      limits: "Low transaction limits",
      color: "bg-blue-50 border-blue-200"
    },
    {
      tier: "Tier 2", 
      title: "Advanced KYC",
      requirements: ["Valid ID", "Selfie Verification", "Address Proof"],
      limits: "Medium transaction limits",
      color: "bg-green-50 border-green-200"
    },
    {
      tier: "Tier 3",
      title: "Full Compliance", 
      requirements: ["Bank Statement", "Utility Bill", "Source of Funds"],
      limits: "High transaction limits",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Financial Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive suite of features designed to power your entire financial journey
          </p>
        </div>

        {/* Tabbed Content */}
        <Tabs defaultValue="banking" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
            <TabsTrigger value="banking">Banking & Cards</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="mobile">Mobile & Web</TabsTrigger>
            <TabsTrigger value="developer">Developer APIs</TabsTrigger>
            <TabsTrigger value="kyc">KYC & Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="banking" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bankingFeatures.map((feature, index) => {
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
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-red-600" />
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
          </TabsContent>

          <TabsContent value="mobile" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-green-600" />
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
          </TabsContent>

          <TabsContent value="developer" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developerFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-purple-600" />
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
          </TabsContent>

          <TabsContent value="kyc" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              {kycTiers.map((tier, index) => (
                <Card key={index} className={`border-2 ${tier.color} shadow-lg`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <UserCheck className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <h3 className="text-xl font-bold text-gray-900">{tier.tier}</h3>
                      <p className="text-gray-600">{tier.title}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Requirements:</h4>
                      {tier.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span className="text-sm text-gray-600">{req}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-900">{tier.limits}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Multi-Factor Authentication
                </h3>
                <p className="text-gray-600 mb-6">
                  Enhanced security with email verification, phone number confirmation, biometric authentication, and secure password setup
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Biometric Auth</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">2FA Enabled</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FileCheck className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Secure Setup</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComprehensiveFeatures;