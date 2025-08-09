import React from 'react';

const CancellationAndRefunds: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cancellation and Refunds Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Order Cancellation</h2>
                <p className="text-gray-700">
                  You may cancel your order within 24 hours of placing it, provided that we have not already 
                  started processing your order. Once we begin processing your order, it cannot be cancelled.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Refund Eligibility</h2>
                <p className="text-gray-700 mb-2">Refunds will be issued under the following circumstances:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>If we are unable to fulfill your order</li>
                  <li>If there is an error in the data provided</li>
                  <li>If you cancel your order within the allowed cancellation period</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  No refunds will be issued for change of mind after the data has been delivered.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
                <p className="text-gray-700">
                  To request a refund, please contact our customer support team with your order details. 
                  Refund requests will be processed within 5-7 business days of approval.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
                <p className="text-gray-700">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>Custom data reports or datasets that have been specifically prepared for you</li>
                  <li>Data that has been downloaded or accessed</li>
                  <li>Services that have already been performed</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about our cancellation and refunds policy, please contact us at:
                </p>
                <p className="text-gray-700 mt-2">
                  Email: support@thedatavision.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (EST)
                </p>
              </section>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CancellationAndRefunds;
