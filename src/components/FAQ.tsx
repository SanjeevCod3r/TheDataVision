import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: 'What is the connectivity rate of your database?',
      answer: 'We guarantee a 70-80% connectivity rate on all our databases. This means 7-8 out of 10 contacts you receive will be active and reachable.'
    },
    {
      question: 'How quickly will I receive my data after payment?',
      answer: 'We provide fast delivery! Once your payment is confirmed, you will receive your database within 10 to 20 minutes via WhatsApp or Excel file.'
    },
    {
      question: 'Do you offer a trial period?',
      answer: 'Yes, we offer a 7-day trial period for all our databases. If you\'re not satisfied with the quality, you can request a replacement within this period.'
    },
    {
      question: 'What if the data doesn\'t meet my expectations?',
      answer: 'We offer a 7-day replacement warranty. If the connectivity rate falls below our promised standards, we will replace the data with fresh, verified contacts at no extra cost.'
    },
    {
      question: 'Do you provide data for specific cities or states?',
      answer: 'Yes, we provide city-wise and state-wise data coverage across PAN India. You can request data for specific locations, pin codes, or regions.'
    },
    {
      question: 'How do you ensure data quality and freshness?',
      answer: 'Our databases are updated regularly and verified through multiple channels. We use advanced verification systems to ensure data accuracy and remove inactive numbers.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including UPI, Net Banking, Credit/Debit Cards, and digital wallets through our secure Razorpay integration.'
    },
    {
      question: 'Can I get customized data based on specific criteria?',
      answer: 'Absolutely! We provide customized databases based on your specific requirements like age group, income level, profession, location, and other demographic criteria.'
    },
    {
      question: 'Is the data GDPR compliant and legally sourced?',
      answer: 'Yes, all our data is sourced through legal means and is compliant with data protection regulations. We ensure complete privacy and security of all information.'
    },
    {
      question: 'Do you provide ongoing support after purchase?',
      answer: 'Yes, we provide 24/7 customer support via phone, email, and WhatsApp. Our team is always ready to help with any queries or issues you might have.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our data services
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;