import React from 'react';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Digital Delivery</h2>
                <p className="text-gray-700">
                  All our products are delivered digitally via secure download links or direct email delivery. 
                  No physical items will be shipped.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Delivery Timeframe</h2>
                <p className="text-gray-700">
                  Most orders are processed and delivered within 15 to 30 minutes of payment confirmation. 
                  In some cases, it may take up to 24 hours. You will receive an email with download 
                  instructions once your order is ready.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Order Processing</h2>
                <p className="text-gray-700 mb-2">Orders are processed in the order they are received. Processing includes:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Payment verification</li>
                  <li>Data preparation and formatting</li>
                  <li>Quality assurance checks</li>
                  <li>Secure file preparation</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Delivery Method</h2>
                <p className="text-gray-700">
                  Digital products will be delivered to the email address provided during checkout. 
                  Please ensure you enter a valid email address. The delivery email will include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>Download links for your purchased data</li>
                  <li>Instructions for accessing your files</li>
                  <li>Your order confirmation and receipt</li>
                  <li>Support contact information</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Failed Deliveries</h2>
                <p className="text-gray-700">
                  If you do not receive your order within the specified timeframe, please check your spam/junk folder. 
                  If you still cannot locate the email, please contact our support team with your order details.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Download Expiration</h2>
                <p className="text-gray-700">
                  Download links are valid for 7 days from the date of delivery. We recommend downloading 
                  and saving your files immediately upon receipt.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about our shipping policy, please contact us at:
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

export default ShippingPolicy;
