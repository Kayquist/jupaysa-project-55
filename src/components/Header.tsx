
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-800 shadow-sm border-b border-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/cc53e2fd-ad5b-46c4-bec1-5369a8ae1fd1.png" 
                alt="Jupaysa Logo" 
                className="h-8 w-auto sm:h-10 md:h-12"
              />
              <span className="ml-2 sm:ml-3 text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">Jupaysa</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link to="/solutions" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm lg:text-base">
              Solutions
            </Link>
            <Link to="/products" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm lg:text-base">
              Products
            </Link>
            <Link to="/pricing" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm lg:text-base">
              Pricing
            </Link>
            <Link to="/resources" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm lg:text-base">
              Resources
            </Link>
            <Link to="/about" className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm lg:text-base">
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-yellow-400 hover:text-yellow-200 hover:bg-green-700 text-sm lg:text-base px-2 lg:px-4">
                Download App
              </Button>
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm lg:text-base px-3 lg:px-4">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400 hover:text-yellow-300 p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-green-700 bg-green-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/solutions" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-green-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/products" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-green-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/pricing" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-green-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-green-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-yellow-400 hover:text-yellow-300 hover:bg-green-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-4 pb-2 border-t border-green-700 space-y-2">
                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="w-full text-yellow-400 hover:text-yellow-200 hover:bg-green-700">
                    Download App
                  </Button>
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    Get Started
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
