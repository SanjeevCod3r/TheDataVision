import React from 'react';

const TermsOfConditions: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                These Terms and Conditions ("Terms") govern your use of THE DATA VISION website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-700">
                THE DATA VISION provides data services including but not limited to data collection, processing, 
                and analysis. We reserve the right to modify or discontinue our services at any time without notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 mb-2">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring that you exit from your account at the end of each session</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Payment and Billing</h2>
              <p className="text-gray-700">
                All payments are processed through secure payment gateways. By providing payment information, 
                you represent and warrant that you have the legal right to use the payment method provided.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700">
                All content included on our website, including text, graphics, logos, and software, is the 
                property of THE DATA VISION or its content suppliers and is protected by copyright and other laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700">
                In no event shall THE DATA VISION be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, data, or use.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will provide notice of any changes 
                by posting the new Terms on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: legal@thedatavision.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Data Street, Tech City, TC 10001
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfConditions;
