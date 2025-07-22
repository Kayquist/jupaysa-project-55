import React from 'react';
import { Wallet, QrCode, Smartphone, CreditCard, Zap, History } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import qrCodeImage from '@/assets/qr-code.jpg';
import digitalWalletImage from '@/assets/digital-wallet.jpg';

const DigitalWallet = () => {
  const features = [
    {
      icon: Wallet,
      title: "Multi-Channel Funding",
      description: "Fund your wallet via bank transfer, debit/credit card, or USSD for maximum convenience"
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      description: "Instant P2P transfers and merchant payments with simple QR code scanning"
    },
    {
      icon: Zap,
      title: "Real-Time Notifications",
      description: "Get instant payment confirmations and transaction alerts"
    },
    {
      icon: History,
      title: "Complete Transaction History",
      description: "Track all your payments with detailed transaction records and receipts"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Digital Wallet & QR Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of digital payments with our comprehensive wallet solution featuring instant QR code transactions
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

          {/* Visual Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Digital Wallet Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={digitalWalletImage} 
                  alt="Digital Wallet Interface" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
              </div>
              
              {/* QR Code Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-6 flex items-center justify-center">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code Payment" 
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Instant Payments</p>
                  <p className="text-xs text-gray-500">POS, USSD & QR supported</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWallet;