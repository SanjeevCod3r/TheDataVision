import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import FAQ from './components/FAQ';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import KYC from './components/KYC';
import OrderData from './components/OrderData';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfConditions from './pages/TermsOfConditions';
import CancellationAndRefunds from './pages/CancellationAndRefunds';
import ShippingPolicy from './pages/ShippingPolicy';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1) || 'home';
      setCurrentSection(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when section changes
  useEffect(() => {
    if (currentSection !== 'home') {
      window.history.pushState({}, '', `/${currentSection}`);
    } else {
      window.history.pushState({}, '', '/');
    }
  }, [currentSection]);

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <>
            <Hero onGetStarted={() => setCurrentSection('kyc')} />
            <Services />
            <ClientReviews />
            <Milestones />
            <FAQ />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'kyc':
        return <KYC />;
      case 'order':
        return <OrderData />;
      case 'privacy-policy':
        return <PrivacyPolicy currentSection={currentSection} setCurrentSection={setCurrentSection} />;
      case 'terms-of-conditions':
        return <TermsOfConditions currentSection={currentSection} setCurrentSection={setCurrentSection} />;
      case 'cancellation-and-refunds':
        return <CancellationAndRefunds currentSection={currentSection} setCurrentSection={setCurrentSection} />;
      case 'shipping-policy':
        return <ShippingPolicy currentSection={currentSection} setCurrentSection={setCurrentSection} />;
      default:
        // Handle direct URL access by checking the current path
        const path = window.location.pathname.substring(1);
        if (path) {
          setCurrentSection(path);
          return <div className="min-h-screen">Loading...</div>;
        }
        return (
          <>
            <Hero onGetStarted={() => setCurrentSection('kyc')} />
            <Services />
            <ClientReviews />
            <Milestones />
            <FAQ />
          </>
        );
    }
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

const About = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">About THE DATA VISION</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are India's leading data solutions provider, delivering high-quality, verified databases
          to help businesses grow and reach their target audience effectively.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            To empower businesses across India with accurate, comprehensive, and actionable data 
            solutions that drive growth, enhance customer engagement, and maximize ROI.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              <span className="text-gray-600">70-80% Connectivity</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              <span className="text-gray-600">Fast Delivery</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              <span className="text-gray-600">7 Days Replacement Warranty</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
              <span className="text-gray-600">PAN India Coverage</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-semibold text-gray-900">Quality Assurance</h4>
              <p className="text-gray-600">Every database is verified and updated regularly</p>
            </div>
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="font-semibold text-gray-900">Customer Support</h4>
              <p className="text-gray-600">24/7 dedicated support for all your queries</p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-semibold text-gray-900">Data Privacy</h4>
              <p className="text-gray-600">Complete compliance with data protection regulations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default App;