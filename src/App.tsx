import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ClientReviews from './components/ClientReviews';
import FAQ from './components/FAQ';
import Milestones from './components/Milestones';
import Contact from './components/Contact';
import KYC from './components/KYC';
import OrderData from './components/OrderData';
import Footer from './components/Footer';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const AnimatedFeature = ({ icon, title, description, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ delay }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

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
        return <About />;
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

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100 opacity-10"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              filter: 'blur(40px)'
            }}
            animate={{
              y: [0, Math.random() * 100 - 50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
        >
          <motion.span 
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            WHO WE ARE
          </motion.span>
          <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About THE DATA VISION
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We are India's leading data solutions provider, delivering high-quality, verified databases
            to help businesses grow and reach their target audience effectively.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={fadeInUp} className="mb-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10">Our Mission</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-0 opacity-70" style={{ bottom: '5px' }}></span>
              </h3>
              <p className="text-lg text-gray-600">
                To empower businesses across India with accurate, comprehensive, and actionable data 
                solutions that drive growth, enhance customer engagement, and maximize ROI.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10">Why Choose Us?</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-0 opacity-70" style={{ bottom: '5px' }}></span>
              </h3>
              <motion.ul className="space-y-4" variants={staggerContainer}>
                {[
                  '70-80% Connectivity',
                  'Fast Delivery',
                  '7 Days Replacement Warranty',
                  'PAN India Coverage'
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center group"
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-3 transform group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring' }}
            whileHover={{ 
              y: -10,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 relative">
              <span className="relative z-10">Our Commitment</span>
              <span className="absolute bottom-0 left-0 w-24 h-2 bg-blue-600 -z-0 opacity-20" style={{ bottom: '5px' }}></span>
            </h3>
            <div className="space-y-8">
              <motion.div 
                className="p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border-l-4 border-blue-600 group hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-xl text-gray-900 mb-2 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Quality Assurance
                </h4>
                <p className="text-gray-600 ml-9">Every database is verified and updated regularly with our advanced validation processes.</p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gradient-to-r from-green-50 to-white rounded-xl border-l-4 border-green-600 group hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-xl text-gray-900 mb-2 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  24/7 Customer Support
                </h4>
                <p className="text-gray-600 ml-9">Round-the-clock dedicated support team to assist you with all your queries and concerns.</p>
              </motion.div>
              
              <motion.div 
                className="p-6 bg-gradient-to-r from-purple-50 to-white rounded-xl border-l-4 border-purple-600 group hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-xl text-gray-900 mb-2 flex items-center">
                  <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Data Privacy & Compliance
                </h4>
                <p className="text-gray-600 ml-9">Complete compliance with all data protection regulations and industry standards.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="mt-24 grid md:grid-cols-4 gap-8 text-center"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          {[
            { number: '10,000+', label: 'Happy Clients' },
            { number: '50M+', label: 'Data Records' },
            { number: '95%', label: 'Accuracy Rate' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default App;