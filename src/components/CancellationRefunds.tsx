import React from 'react';
import { RotateCcw, DollarSign, Clock, AlertCircle, CheckCircle, Mail, Phone } from 'lucide-react';

const CancellationRefunds = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <RotateCcw className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cancellation & Refunds Policy</h1>
          <p className="text-xl text-gray-600">
            Understanding our cancellation and refund procedures for data services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
          
          {/* Overview */}
          <div>
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Policy Overview</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Due to the digital nature of our data services, all sales are generally final. However, 
                we understand that exceptional circumstances may arise, and we are committed to providing 
                fair solutions for our customers.
              </p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-900">Before Data Delivery:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Orders can be cancelled within 15 minutes of payment if data has not been delivered</li>
                <li>Full refund will be processed within 5-7 business days</li>
                <li>Cancellation requests must be made via email or phone</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6">After Data Delivery:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cancellations are not typically accepted once data is delivered</li>
                <li>Exceptions may be made for technical issues or data quality problems</li>
                <li>Each case will be reviewed individually</li>
              </ul>
            </div>
          </div>

          {/* Refund Eligibility */}
          <div>
            <div className="flex items-center mb-4">
              <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Refund Eligibility</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Refunds may be considered in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Technical failure preventing data delivery</li>
                <li>Data quality significantly below promised standards (less than 60% connectivity)</li>
                <li>Duplicate charges or payment processing errors</li>
                <li>Data delivered does not match the ordered category</li>
                <li>System errors resulting in incorrect data delivery</li>
              </ul>
            </div>
          </div>

          {/* Quality Guarantee */}
          <div>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">7-Day Quality Guarantee</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We offer a 7-day replacement warranty:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>If connectivity rate is below 70%, we provide free replacement data</li>
                <li>Replacement data will be of equal or better quality</li>
                <li>Claims must be made within 7 days of data delivery</li>
                <li>Proof of connectivity testing may be required</li>
                <li>Replacement is subject to availability and verification</li>
              </ul>
            </div>
          </div>

          {/* Refund Process */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
            <div className="space-y-4 text-gray-700">
              <p>To request a refund:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact our support team within the eligible timeframe</li>
                <li>Provide order details and reason for refund request</li>
                <li>Submit any supporting documentation if required</li>
                <li>Allow 2-3 business days for review and approval</li>
                <li>Approved refunds are processed within 5-7 business days</li>
              </ol>
            </div>
          </div>

          {/* Non-Refundable Situations */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Non-Refundable Situations</h2>
            <div className="space-y-4 text-gray-700">
              <p>Refunds will not be provided in the following cases:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Change of mind after data delivery</li>
                <li>Failure to use the data effectively</li>
                <li>External factors affecting your business results</li>
                <li>Requests made after the 7-day guarantee period</li>
                <li>Data used for prohibited purposes</li>
                <li>Violation of terms and conditions</li>
              </ul>
            </div>
          </div>

          {/* Partial Refunds */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Partial Refunds</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                In certain circumstances, partial refunds may be offered based on the extent of the issue 
                and the portion of data affected. This is determined on a case-by-case basis.
              </p>
            </div>
          </div>

          {/* Payment Method Refunds */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Method Refunds</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refunds are processed to the original payment method</li>
                <li>Credit card refunds may take 5-10 business days to appear</li>
                <li>UPI and wallet refunds are typically processed within 2-3 business days</li>
                <li>Bank transfer refunds may require additional verification</li>
              </ul>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you're not satisfied with our refund decision, you may escalate the matter to our 
                senior management team. We are committed to finding fair solutions for all parties involved.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refunds</h2>
            <p className="text-gray-700 mb-4">
              To request a cancellation or refund, please contact us immediately:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">refunds@thedatavision.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+91 9876543210</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Please include your order number and detailed reason for the refund request.
            </p>
          </div>

          {/* Updates */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              This policy may be updated from time to time. Any changes will be posted on this page 
              with an updated revision date. Continued use of our services after changes constitutes 
              acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CancellationRefunds;
