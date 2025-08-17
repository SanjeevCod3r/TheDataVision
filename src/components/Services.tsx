import React from 'react';
import { Users, Car, Building, TrendingUp, Shield, Heart, Home, Briefcase } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    { icon: Users, title: 'Individual Services', items: ['Educated person', 'Salaried person', 'Self employed', 'Job seekers', 'HNI clients', 'Local public', 'Mobile number holder'] },
    { icon: Car, title: 'Vehicle Owners', items: ['Car owners', 'Bike owner', 'Goods vehicle', 'Commercial Vehicle'] },
    { icon: Building, title: 'Multiple Companies', items: ['Manufacturing companies', 'Private limited company', 'MSME company', 'SME Company', 'Small company', 'Small business'] },
    { icon: TrendingUp, title: 'Investment & Finance', items: ['Stock market', 'Real estate', 'Personal loan sales', 'Car loan', 'Business loan sales', 'Home loan sales'] },
    { icon: Shield, title: 'Insurance Services', items: ['Motor insurance', 'Health insurance sales', 'Life insurance sales', 'General insurance sales'] },
    { icon: Briefcase, title: 'Professional Services', items: ['Doctor', 'IT employs', 'Private employee', 'B2B database', 'B2C database', 'Tour and Travel', 'Import and Export'] },
  ];

  const pricingPlans = [
    { data: '5,000', price: '₹599', popular: false },
    { data: '10,000', price: '₹799', popular: false },
    { data: '1 Lakh', price: '₹2,499', popular: true },
    { data: '2 Lakh', price: '₹3,999', popular: false },
    { data: '5 Lakh', price: '₹6,000', popular: false },
    { data: '10 Lakh', price: '₹7,000', popular: false },
  ];

  const specialPricing = [
    { category: 'Car Owners', price: '₹1 per Number', icon: Car },
    { category: 'Commercial Vehicle', price: '₹2 per Number', icon: Building },
    { category: 'Pin Code Wise Data', price: '₹0.50 per Number', icon: TrendingUp },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Image */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 mb-16 p-8 md:p-12">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Data Services</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive database solutions across multiple categories with guaranteed quality and connectivity
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.location.hash = '#order'}
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Get Started
              </button>
              <button 
                onClick={() => window.location.hash = '#contact'}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Data Analytics"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Features with Image */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">August Special Pricing</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">✅</span>
                  <span>70–80% Connectivity Rate</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">⚡</span>
                  <span>Fast Delivery in 15-30 Minutes</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">🔍</span>
                  <span>Sample Package Available</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">🔄</span>
                  <span>7 Days Replacement Guarantee</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">📍</span>
                  <span>City-wise & State-wise PAN India Coverage</span>
                </li>
              </ul>
              <button 
                onClick={() => window.location.hash = '#order'}
                className="mt-8 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-200"
              >
                View All Plans
              </button>
            </div>
            <div className="hidden md:block h-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Data Analytics Dashboard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 ${plan.popular ? 'ring-4 ring-blue-600 transform scale-105' : ''}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.data} Data</h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>
                <button 
                  onClick={() => window.location.hash = '#order'}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Category Pricing */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">📊 Category-Wise Special Pricing</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {specialPricing.map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.category}</h4>
                <p className="text-2xl font-bold text-blue-600">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">🌐 Web & App Development | SEO | Digital Marketing | Social Media Marketing </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;