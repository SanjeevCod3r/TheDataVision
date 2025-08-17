import React from 'react';
import { TrendingUp, Shield, Zap, BarChart2, Database, PieChart } from 'lucide-react';
import dataVisualization from '../assets/data-visualization.jpg';

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
              Get high-quality, verified databases with 70-80% connectivity. 
              Fast delivery and 7-day replacement warranty.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">70-80% Connectivity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-yellow-400" />
                <span className="text-sm font-medium">7 Days Replacement</span>
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

          {/* Data Visualization and Stats Section */}
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full">
                  <BarChart2 className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-blue-900 p-3 rounded-full">
                  <PieChart className="w-8 h-8" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Data Visualization" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  loading="lazy"
                />
              </div>
              
              <div className="bg-blue-900/90 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-2 text-yellow-400" />
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Connectivity </span>
                    <span className="text-xl font-bold text-yellow-400">70-80%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Delivery Time</span>
                    <span className="text-xl font-bold text-yellow-400">15-30 Min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Replacement</span>
                    <span className="text-xl font-bold text-yellow-400">7 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Coverage</span>
                    <span className="text-xl font-bold text-yellow-400">PAN India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;