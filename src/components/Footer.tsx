
import React from 'react';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        "International Transfers",
        "Mass Payments",
        "Marketplace Solutions",
        "API Integration",
        "Currency Exchange"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Press & Media",
        "Contact",
        "Partners"
      ]
    },
    {
      title: "Resources",
      links: [
        "Help Center",
        "API Documentation",
        "Blog",
        "Guides",
        "System Status"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Compliance",
        "Security",
        "Licenses"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 sm:mb-6">
              <img 
                src="/lovable-uploads/76ebead7-323a-44d0-b392-1673391d6795.png" 
                alt="Jupaysa Logo" 
                className="h-8 sm:h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
              Empowering businesses worldwide with secure, fast, and cost-effective 
              global payment solutions.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Github className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer Links - 2x2 grid on mobile, 4 columns on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-3 lg:mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-2 lg:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Badges Section */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8">
          <div className="text-center mb-6 lg:mb-8">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-4">Download Our App</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-3 lg:gap-4">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <div className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  <div className="text-sm">
                    <div className="text-xs text-gray-300">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                <div className="bg-black text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  <div className="text-sm">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Jupaysa. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm text-gray-400">
              <span>🔒 Bank-level security</span>
              <span>🌍 150+ countries</span>
              <span>⚡ 24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
