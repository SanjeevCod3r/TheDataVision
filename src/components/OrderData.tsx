import React, { useState } from 'react';
import { ShoppingCart, CreditCard, Mail, Phone, User, Calculator, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const OrderData = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dataQuantity, setDataQuantity] = useState('');
  const [customQuantity, setCustomQuantity] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [orderSummary, setOrderSummary] = useState<any>(null);
  const [error, setError] = useState('');

  const dataCategories = [
    { id: 'educated', name: 'Educated Person' },
    { id: 'salaried', name: 'Salaried Person', price: 0.15 },
    { id: 'self-employed', name: 'Self Employed', price: 0.18 },
    { id: 'car-owners', name: 'Car Owners', price: 1.00 },
    { id: 'bike-owners', name: 'Bike Owners', price: 0.50 },
    { id: 'goods-vehicle', name: 'Goods Vehicle', price: 2.00 },
    { id: 'job-seekers', name: 'Job Seekers', price: 0.10 },
    { id: 'hni-clients', name: 'HNI Clients', price: 5.00 },
    { id: 'home-loan', name: 'Home Loan Sales', price: 2.50 },
    { id: 'personal-loan', name: 'Personal Loan Sales', price: 2.00 },
    { id: 'car-loan', name: 'Car Loan', price: 2.50 },
    { id: 'business-loan', name: 'Business Loan Sales', price: 3.00 },
    { id: 'motor-insurance', name: 'Motor Insurance', price: 1.50 },
    { id: 'health-insurance', name: 'Health Insurance Sales', price: 2.00 },
    { id: 'life-insurance', name: 'Life Insurance Sales', price: 2.50 },
    { id: 'general-insurance', name: 'General Insurance Sales', price: 1.80 },
    { id: 'corporate', name: 'Corporate Companies', price: 4.00 },
    { id: 'manufacturing', name: 'Manufacturing Companies', price: 3.50 },
    { id: 'private-limited', name: 'Private Limited Company', price: 4.50 },
    { id: 'msme', name: 'MSME Company', price: 3.00 },
    { id: 'it-company', name: 'IT Company', price: 5.00 },
    { id: 'stock-market', name: 'Stock Market', price: 3.00 },
    { id: 'real-estate', name: 'Real Estate', price: 2.50 },
    { id: 'doctor', name: 'Doctor', price: 8.00 },
    { id: 'local-public', name: 'Local Public', price: 0.08 },
    { id: 'mobile-holder', name: 'Mobile Number Holder', price: 0.05 },
    { id: 'b2b', name: 'B2B Database', price: 3.00 },
    { id: 'b2c', name: 'B2C Database', price: 1.50 },
    { id: 'it-employees', name: 'IT Employees', price: 4.00 },
    { id: 'private-employee', name: 'Private Employee', price: 2.00 },
    { id: 'small-company', name: 'Small Company', price: 2.50 },
    { id: 'small-business', name: 'Small Business', price: 2.00 },
    { id: 'residential', name: 'Residential', price: 1.00 }
  ];

  const predefinedPackages = [
    { quantity: 5000, price: 599 },
    { quantity: 10000, price: 799 },
    { quantity: 50000, price: 1499 },
    { quantity: 100000, price: 2499 },
    { quantity: 200000, price: 3999 },
    { quantity: 500000, price: 5999 }
  ];

  const calculatePrice = () => {
    if (!selectedCategory || !dataQuantity) return 0;

    const category = dataCategories.find(cat => cat.id === selectedCategory);
    if (!category) return 0;

    let quantity = 0;
    if (dataQuantity === 'custom') {
      quantity = Math.max(5000, parseInt(customQuantity) || 5000);
    } else {
      const pkg = predefinedPackages.find(p => p.quantity.toString() === dataQuantity);
      if (pkg) {
        return pkg.price;
      }
      quantity = parseInt(dataQuantity) || 0;
    }

    return Math.round(quantity * category.price);
  };

  const handleCustomerDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value
    });
  };

  const proceedToPayment = () => {
    setError('');
    const quantity = dataQuantity === 'custom' ? parseInt(customQuantity) : parseInt(dataQuantity);
    
    if (dataQuantity === 'custom' && quantity < 5000) {
      setError('Minimum quantity for custom data must be 5000');
      return;
    }
    
    const price = calculatePrice();
    const category = dataCategories.find(cat => cat.id === selectedCategory);

    setOrderSummary({
      category: category?.name,
      quantity,
      price,
      customerDetails
    });

    setCurrentStep(3);
  };

  const initiatePayment = () => {
    const price = calculatePrice();
    
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      const options = {
        key: 'rzp_test_zlq3QdveON820t', // Replace with your Razorpay key
        amount: price * 100, // Amount in paise
        currency: 'INR',
        name: 'THE DATA VISION',
        description: `${orderSummary.category} - ${orderSummary.quantity} records`,
        image: '/logo.png',
        handler: function (response: any) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          setCurrentStep(4);
        },
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone
        },
        notes: {
          category: orderSummary.category,
          quantity: orderSummary.quantity
        },
        theme: {
          color: '#2563eb'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    document.body.appendChild(script);
  };

  const resetOrder = () => {
    setSelectedCategory('');
    setDataQuantity('');
    setCustomQuantity('');
    setCustomerDetails({ name: '', email: '', phone: '' });
    setCurrentStep(1);
    setOrderSummary(null);
  };

  if (currentStep === 4) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-md text-center">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Successful!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase! Your data will be delivered to your email within 24 hours.
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-green-800 mb-2">Order Details:</h3>
              <p className="text-green-700">Category: {orderSummary?.category}</p>
              <p className="text-green-700">Quantity: {orderSummary?.quantity?.toLocaleString()} records</p>
              <p className="text-green-700">Amount Paid: ₹{orderSummary?.price}</p>
            </div>
            <button
              onClick={resetOrder}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Order Your Data</h2>
          <p className="text-xl text-gray-600">
            Choose your data category and quantity, then proceed to secure payment
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              2
            </div>
            <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              3
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          {/* Step 1: Select Data Category and Quantity */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Step 1: Select Data Category & Quantity</h3>
              
              {/* Data Category Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose Data Category:
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                  {dataCategories.map((category) => (
                    <label key={category.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-3 w-4 h-4 text-blue-600"
                      />
                      <div>
                        <span className="font-medium text-gray-900">{category.name}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose Quantity:
                </label>
                
                {/* Predefined Packages */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {predefinedPackages.map((pkg) => (
                    <label key={pkg.quantity} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="quantity"
                        value={pkg.quantity.toString()}
                        checked={dataQuantity === pkg.quantity.toString()}
                        onChange={(e) => setDataQuantity(e.target.value)}
                        className="mr-3 w-4 h-4 text-blue-600"
                      />
                      <div className="flex-1">
                        <span className="font-medium text-gray-900">{pkg.quantity.toLocaleString()} Data</span>
                        <p className="text-lg font-bold text-blue-600">₹{pkg.price}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Custom Quantity */}
                <div className="border rounded-lg p-4">
                  <label className="flex items-center mb-3">
                    <input
                      type="radio"
                      name="quantity"
                      value="custom"
                      checked={dataQuantity === 'custom'}
                      onChange={(e) => setDataQuantity(e.target.value)}
                      className="mr-3 w-4 h-4 text-blue-600"
                    />
                    <span className="font-medium text-gray-900">Custom Quantity</span>
                  </label>
                  {dataQuantity === 'custom' && (
                    <div>
                      <input
                        type="number"
                        placeholder="Enter custom quantity (min 5000)"
                        value={customQuantity}
                        onChange={(e) => setCustomQuantity(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        min="5000"
                      />
                      {error && dataQuantity === 'custom' && (
                        <p className="mt-2 text-sm text-red-600">{error}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Price Calculator */}
              {selectedCategory && dataQuantity && (
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                      <span className="text-lg font-semibold text-gray-900">Total Amount:</span>
                    </div>
                    <span className="text-3xl font-bold text-blue-600">₹{calculatePrice()}</span>
                  </div>
                </div>
              )}

              <button
                onClick={() => setCurrentStep(2)}
                disabled={
                  !selectedCategory || 
                  !dataQuantity || 
                  (dataQuantity === 'custom' && (!customQuantity || isNaN(parseInt(customQuantity)) || parseInt(customQuantity) < 5000))
                }
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Continue to Contact Details
              </button>
              {dataQuantity === 'custom' && customQuantity && parseInt(customQuantity) < 5000 && (
                <p className="mt-2 text-sm text-red-600">Minimum quantity for custom data must be 5000</p>
              )}
            </div>
          )}

          {/* Step 2: Customer Details */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Step 2: Enter Your Contact Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={customerDetails.name}
                      onChange={handleCustomerDetailsChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={customerDetails.email}
                      onChange={handleCustomerDetailsChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={customerDetails.phone}
                      onChange={handleCustomerDetailsChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="flex-1 bg-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={proceedToPayment}
                  disabled={!customerDetails.name || !customerDetails.email || !customerDetails.phone || 
                           (dataQuantity === 'custom' && (isNaN(parseInt(customQuantity)) || parseInt(customQuantity) < 5000))}
                  className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && orderSummary && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Step 3: Payment</h3>
              
              {/* Order Summary */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data Category:</span>
                    <span className="font-medium">{orderSummary.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quantity:</span>
                    <span className="font-medium">{orderSummary.quantity?.toLocaleString()} records</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-medium">{orderSummary.customerDetails.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{orderSummary.customerDetails.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{orderSummary.customerDetails.phone}</span>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total Amount:</span>
                    <span className="text-blue-600">₹{orderSummary.price}</span>
                  </div>
                </div>
              </div>

              {/* Payment Button */}
              <div className="text-center">
                <button
                  onClick={initiatePayment}
                  className="bg-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center mx-auto space-x-2"
                >
                  <CreditCard className="w-6 h-6" />
                  <span>Pay ₹{orderSummary.price} with Razorpay</span>
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Secure payment powered by Razorpay. We accept UPI, Cards, Net Banking & Wallets.
                </p>
              </div>

              <div className="flex space-x-4 mt-8">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="flex-1 bg-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-200"
                >
                  Back to Details
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">70-80% Connectivity</h3>
            <p className="text-sm text-gray-600">We ensure high-quality data with excellent connectivity rates</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">Data delivered to your WhatsApp within 15 to 30 minutes of payment</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingCart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">7 Days Replacement</h3>
            <p className="text-sm text-gray-600">Free replacement if data doesn't meet quality standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderData;