import React from 'react';
import { Truck, Clock, Download, Smartphone, Mail, Phone, CheckCircle, AlertTriangle } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Truck className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-xl text-gray-600">
            Digital delivery information for our data services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
          
          {/* Digital Delivery Overview */}
          <div>
            <div className="flex items-center mb-4">
              <Download className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Digital Delivery Overview</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                THE DATA VISION provides exclusively digital products. All data is delivered electronically 
                through secure digital channels. No physical shipping is involved in our services.
              </p>
            </div>
          </div>

          {/* Delivery Methods */}
          <div>
            <div className="flex items-center mb-4">
              <Smartphone className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Delivery Methods</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>We deliver data through the following secure channels:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>WhatsApp:</strong> Primary delivery method for most orders</li>
                <li><strong>Email:</strong> Secure email delivery with encrypted attachments</li>
                <li><strong>Secure Download Links:</strong> Password-protected download portals</li>
                <li><strong>Cloud Storage:</strong> Temporary secure cloud storage access</li>
              </ul>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div>
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Delivery Timeline</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Standard Delivery: 15-30 Minutes</span>
                </div>
                <p className="text-green-700">Most orders are delivered within 15-30 minutes of payment confirmation.</p>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900">Delivery Schedule:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Business Hours:</strong> Monday to Saturday, 9:00 AM to 8:00 PM IST</li>
                <li><strong>Weekend Delivery:</strong> Available with possible slight delays</li>
                <li><strong>Holiday Delivery:</strong> May experience delays during national holidays</li>
                <li><strong>Large Orders:</strong> Orders above 500K records may take up to 2 hours</li>
              </ul>
            </div>
          </div>

          {/* Delivery Process */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Process</h2>
            <div className="space-y-4 text-gray-700">
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li><strong>Payment Confirmation:</strong> Order processing begins after successful payment</li>
                <li><strong>Data Preparation:</strong> Our system prepares and validates your specific data request</li>
                <li><strong>Quality Check:</strong> Automated quality verification ensures data standards</li>
                <li><strong>Secure Packaging:</strong> Data is securely packaged in appropriate formats</li>
                <li><strong>Delivery Notification:</strong> You receive delivery confirmation via your preferred method</li>
                <li><strong>Access Instructions:</strong> Clear instructions provided for accessing your data</li>
              </ol>
            </div>
          </div>

          {/* File Formats */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">File Formats & Specifications</h2>
            <div className="space-y-4 text-gray-700">
              <p>Data is delivered in the following formats:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Excel (.xlsx):</strong> Most common format for easy viewing and filtering</li>
                <li><strong>CSV (.csv):</strong> Universal format compatible with all systems</li>
                <li><strong>Text (.txt):</strong> Simple text format for basic applications</li>
                <li><strong>JSON (.json):</strong> Structured format for technical integrations</li>
              </ul>
              <p className="mt-4">
                <strong>File Size:</strong> Files are optimized for easy download and handling. 
                Large datasets may be split into multiple files for convenience.
              </p>
            </div>
          </div>

          {/* Delivery Confirmation */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Confirmation</h2>
            <div className="space-y-4 text-gray-700">
              <p>You will receive confirmation through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>SMS notification to your registered mobile number</li>
                <li>Email confirmation with delivery details</li>
                <li>WhatsApp message with download instructions</li>
                <li>Order status update in your account (if applicable)</li>
              </ul>
            </div>
          </div>

          {/* Access & Security */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Access & Security</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Password Protection:</strong> All files are password-protected for security</li>
                <li><strong>Limited Access:</strong> Download links expire after 7 days for security</li>
                <li><strong>Secure Transmission:</strong> All data transfers use SSL encryption</li>
                <li><strong>Access Logs:</strong> We maintain delivery logs for support purposes</li>
              </ul>
            </div>
          </div>

          {/* Delivery Issues */}
          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Delivery Issues</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>If you don't receive your data within the expected timeframe:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Check your spam/junk folders for email deliveries</li>
                <li>Verify your WhatsApp is active and receiving messages</li>
                <li>Ensure your phone number and email are correct</li>
                <li>Contact our support team immediately</li>
              </ul>
              
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-yellow-800">
                  <strong>Note:</strong> We are not responsible for delivery failures due to incorrect 
                  contact information provided by the customer.
                </p>
              </div>
            </div>
          </div>

          {/* Re-delivery Policy */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Re-delivery Policy</h2>
            <div className="space-y-4 text-gray-700">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free re-delivery within 7 days if delivery failed due to technical issues</li>
                <li>Re-delivery requests must include original order details</li>
                <li>Maximum of 3 re-delivery attempts per order</li>
                <li>Additional charges may apply for re-delivery after 7 days</li>
              </ul>
            </div>
          </div>

          {/* International Delivery */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Delivery</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Digital delivery is available worldwide. However, delivery times may vary based on 
                time zones and local internet connectivity. International customers should consider 
                time zone differences when expecting delivery.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Support</h2>
            <p className="text-gray-700 mb-4">
              For delivery-related queries or issues, contact our support team:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">delivery@thedatavision.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">+91 9876543210</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Support available Monday to Saturday, 9:00 AM to 8:00 PM IST
            </p>
          </div>

          {/* Updates */}
          <div className="border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700">
              This shipping policy may be updated to reflect changes in our delivery processes or 
              technology improvements. Updates will be posted on this page with revision dates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
