
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DigitalWallet from '@/components/DigitalWallet';
import GlobalTransfers from '@/components/GlobalTransfers';
import AILoans from '@/components/AILoans';
import AgentNetwork from '@/components/AgentNetwork';
import ComprehensiveFeatures from '@/components/ComprehensiveFeatures';
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
      <DigitalWallet />
      <GlobalTransfers />
      <AILoans />
      <AgentNetwork />
      <ComprehensiveFeatures />
      <VideoShowcase />
      <ExchangeCalculator />
      <Services />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
