import React from 'react';
import { Database, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  setCurrentSection?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentSection }) => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Database className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">THE DATA VISION</span>
            </div>
            <p className="text-gray-300 mb-6">
              India's premier data solutions provider, delivering high-quality, verified databases 
              to help businesses grow and reach their target audience effectively.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">KYC</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">B2B Database</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">B2C Database</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Insurance Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Loan Sales</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vehicle Owners Data</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Data Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>+91 93697-15615</p>
                  <p>+91 79850-34302</p>
                  <p>+91 82992-79268</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">thedatavison2021@gmail.com</p>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Rajajipuram E Block</p>
                  <p>Near Tadian Mandir</p>
                  <p>Lucknow, UP - 226017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-gray-400 text-sm">
                © 2026 The Data Vision. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Made by{' '}
                <a 
                  href="https://www.zestertech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ZesterTech
                </a>
              </p>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => setCurrentSection?.('privacy')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setCurrentSection?.('terms')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Conditions
              </button>
              <button 
                onClick={() => setCurrentSection?.('refunds')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cancellation and Refunds
              </button>
              <button 
                onClick={() => setCurrentSection?.('shipping')}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Shipping Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-gray-400">
            <span className="flex items-center">🔒 SSL Secured</span>
            <span className="flex items-center">✅ GDPR Compliant</span>
            <span className="flex items-center">🛡️ Data Protected</span>
            <span className="flex items-center">⚡ 99.9% Uptime</span>
            <span className="flex items-center">📞 24/7 Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;