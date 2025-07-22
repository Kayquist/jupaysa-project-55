import React from 'react';
import { Brain, TrendingUp, PiggyBank, Users, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiLoansImage from '@/assets/ai-loans.jpg';

const AILoans = () => {
  const loanFeatures = [
    {
      icon: Brain,
      title: "AI Credit Scoring",
      description: "Advanced machine learning algorithms analyze your financial behavior for instant loan approvals"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose loan terms that work for you with automatic repayment deductions"
    },
    {
      icon: PiggyBank,
      title: "Savings Plans",
      description: "Build wealth with high-yield savings plans and interest accrual options"
    },
    {
      icon: Users,
      title: "Microfinance Integration",
      description: "Connected with trusted microfinance institutions and cooperatives"
    }
  ];

  const loanStats = [
    { label: "Approval Rate", value: "95%", color: "text-green-600" },
    { label: "Average Approval Time", value: "2 mins", color: "text-blue-600" },
    { label: "Interest Rate from", value: "12%", color: "text-purple-600" },
    { label: "Max Loan Amount", value: "₦5M", color: "text-orange-600" }
  ];

  const loanTypes = [
    { type: "Personal Loans", amount: "₦50K - ₦2M", duration: "1-24 months", rate: "12-18%" },
    { type: "Business Loans", amount: "₦100K - ₦5M", duration: "3-36 months", rate: "14-20%" },
    { type: "Emergency Loans", amount: "₦10K - ₦500K", duration: "1-12 months", rate: "15-22%" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-6">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Loans & Microfinance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get instant loan approvals with our advanced AI credit scoring system and flexible microfinance solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {loanFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

          {/* Visual Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={aiLoansImage} 
                alt="AI Loan Dashboard" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
            </div>
            
            {/* Floating Approval Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Loan Approved!</p>
                  <p className="text-xs text-gray-500">₦500,000 at 14% APR</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Instant Approval</Badge>
            </div>
          </div>
        </div>

        {/* Loan Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {loanStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Loan Types */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Available Loan Products
            </h3>
            <p className="text-gray-600">
              Choose from our range of flexible loan options designed for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="border-2 hover:border-purple-200 transition-colors">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{loan.type}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold">{loan.amount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{loan.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-semibold text-purple-600">{loan.rate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILoans;