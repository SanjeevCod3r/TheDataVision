import React from 'react';
import { Star, Quote, MessageSquare, ThumbsUp } from 'lucide-react';

const ClientReviews = () => {
  const reviews = [
    {
      name: 'Rajesh Kumar',
      company: 'Digital Marketing Agency',
      rating: 5,
      review: 'Exceptional data quality! The connectivity rate is exactly as promised. Our campaign performance increased by 60% after using their database.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Priya Sharma',
      company: 'Insurance Broker',
      rating: 5,
      review: 'Outstanding service and support. The replacement policy saved us when we had connectivity issues. Highly recommended for insurance leads.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Amit Patel',
      company: 'Real Estate Consultant',
      rating: 5,
      review: 'The Data Vision has transformed our business. Real estate leads are accurate and result in actual conversions. Best ROI we\'ve ever achieved.',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Neha Singh',
      company: 'Loan Consultant',
      rating: 5,
      review: 'Instant delivery and amazing data quality. The categorized data helps us target the right customers. Our loan approval rate has doubled.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Suresh Gupta',
      company: 'Automobile Dealer',
      rating: 5,
      review: 'Car owner database is incredibly accurate. We\'ve seen a significant increase in sales inquiries. The Data Vision is our go-to data partner.',
      avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Kavita Agarwal',
      company: 'Health Insurance Agent',
      rating: 5,
      review: 'Professional service with genuine support. The health insurance leads are high-quality and the connectivity rate is as promised. Excellent value!',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of businesses across India for premium data solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-200 relative">
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic">"{review.review}"</p>

              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-blue-600">5000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">75%</h3>
              <p className="text-gray-600">Avg. Connectivity Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600">99%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* JustDial Review Section */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Reviews on JustDial</h3>
        <div className="max-w-4xl mx-auto bg-blue-50 p-6 rounded-xl">
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg text-gray-700 mb-4">
            "Exceptional service and support. The Data Vision team goes above and beyond to ensure customer satisfaction."
          </p>
          <a 
            href="https://jsdl.in/RSL-PLP1748190744" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Read Our Reviews on JustDial
          </a>
        </div>
      </div>

      {/* Share Your Feedback Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Experience</h3>
        <div className="max-w-4xl mx-auto bg-gray-50 p-6 rounded-xl">
          <ThumbsUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <p className="text-lg text-gray-700 mb-6">
            We value your feedback! Share your experience with The Data Vision and help us serve you better.
          </p>
          <a 
            href="https://jsdl.in/RSL-JPD1747931771" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Share Your Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;