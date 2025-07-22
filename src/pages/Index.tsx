
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import VideoShowcase from '@/components/VideoShowcase';
import ExchangeCalculator from '@/components/ExchangeCalculator';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Services />
      <VideoShowcase />
      <ExchangeCalculator />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
