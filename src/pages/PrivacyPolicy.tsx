import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: August 9, 2024
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to THE DATA VISION. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-2">We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Identity Data: Includes first name, last name, username or similar identifier.</li>
                <li>Contact Data: Includes billing address, delivery address, email address, and telephone numbers.</li>
                <li>Technical Data: Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Data</h2>
              <p className="text-gray-700">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>To register you as a new customer</li>
                <li>To process and deliver your order including managing payments, fees, and charges</li>
                <li>To manage our relationship with you</li>
                <li>To enable you to participate in a prize draw, competition, or complete a survey</li>
                <li>To improve our website, products/services, marketing, or customer relationships</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Your Legal Rights</h2>
              <p className="text-gray-700 mb-2">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                Email: privacy@thedatavision.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Data Street, Tech City, TC 12345, India
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
