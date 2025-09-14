import React from 'react';
import { FileText, Scale, AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';

const TermsOfConditions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Scale className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Conditions</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
          
          {/* Acceptance of Terms */}
          <div>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using THE DATA VISION services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Service Description</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>THE DATA VISION provides:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High-quality verified databases with 70-80% connectivity</li>
                <li>Various data categories including individual, business, and specialized datasets</li>
                <li>Fast delivery within 15-30 minutes of payment confirmation</li>
                <li>7-day replacement warranty for quality assurance</li>
                <li>PAN India coverage with city-wise and state-wise data</li>
              </ul>
            </div>
          </div>

          {/* User Obligations */}
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">User Obligations</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>By using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the data only for legitimate business purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect privacy rights and data protection laws</li>
                <li>Not resell or redistribute the data without permission</li>
                <li>Maintain confidentiality of login credentials</li>
                <li>Provide accurate information during registration and ordering</li>
              </ul>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
            <div className="space-y-4 text-gray-700">
              <p>You may not use our data for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Spam, unsolicited communications, or harassment</li>
                <li>Fraudulent or illegal activities</li>
                <li>Violation of privacy or data protection laws</li>
                <li>Creating competing databases or services</li>
                <li>Any activity that could harm our reputation or business</li>
              </ul>
            </div>
          </div>

          {/* Payment Terms */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All payments must be made in advance before data delivery</li>
                <li>Payments are processed securely through Razorpay</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Refunds are subject to our Cancellation and Refunds Policy</li>
                <li>Failed payments may result in service suspension</li>
              </ul>
            </div>
          </div>

          {/* Data Quality & Delivery */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Data Quality & Delivery</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We guarantee 70-80% connectivity rate for our databases</li>
                <li>Data is delivered within 15-30 minutes of payment confirmation</li>
                <li>Minimum order quantity is 5,000 records for custom orders</li>
                <li>7-day replacement warranty for quality issues</li>
                <li>Sample packages available for evaluation</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                All content, trademarks, and data on this website are the property of THE DATA VISION. 
                The data provided is licensed for your use according to these terms and is not sold to you.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                THE DATA VISION shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use of our services. Our total liability shall not 
                exceed the amount paid for the specific service.
              </p>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the service, to understand our practices.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, 
                for any breach of these Terms of Conditions.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Conditions, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">Email: legal@thedatavision.com</p>
              <p className="text-gray-700">Phone: +91 9876543210</p>
            </div>
          </div>

          {/* Updates */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on this page. Your continued use of the service after any changes constitutes 
              acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfConditions;
