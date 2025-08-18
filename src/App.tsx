import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import FAQ from './components/FAQ';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import KYC from './components/KYC';
import OrderData from './components/OrderData';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

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
        return <AboutUs />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services />;
      case 'kyc':
        return <KYC />;
      case 'order':
        return <OrderData />;
      default:
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

  return (
    <div className="min-h-screen bg-white">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      {renderCurrentSection()}
      <Footer />
    </div>
  );
}


export default App;