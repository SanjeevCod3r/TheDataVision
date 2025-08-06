import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Data
              <span className="block text-yellow-400">Solutions</span>
              for Your Business
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Get high-quality, verified databases with 70-80% connectivity rate. 
              Instant delivery, 7-day trial, and 15-day replacement guarantee.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">70-80% Connectivity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">Instant Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">15 Days Replacement</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </button>
              <button 
                onClick={() => window.location.hash = '#order'}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Order Now
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Connectivity Rate</span>
                <span className="text-2xl font-bold text-yellow-400">70-80%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Delivery Time</span>
                <span className="text-2xl font-bold text-yellow-400">Instant</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Trial Period</span>
                <span className="text-2xl font-bold text-yellow-400">7 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Replacement</span>
                <span className="text-2xl font-bold text-yellow-400">15 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-100">Coverage</span>
                <span className="text-2xl font-bold text-yellow-400">PAN India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;