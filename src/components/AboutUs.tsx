import React from 'react';
import { Database, Users, Shield, Award, Target, Eye, Heart, TrendingUp, CheckCircle, Star, Globe, Clock } from 'lucide-react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      description: 'Visionary leader with 10+ years in data solutions'
    },
    {
      name: 'Priya Sharma',
      position: 'Head of Data Quality',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      description: 'Expert in data verification and quality assurance'
    },
    {
      name: 'Amit Patel',
      position: 'Technical Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      description: 'Technology innovator driving our platform development'
    },
    {
      name: 'Neha Singh',
      position: 'Customer Success Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
      description: 'Dedicated to ensuring exceptional customer experiences'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Data Privacy & Security',
      description: 'We prioritize the highest standards of data protection and privacy compliance, ensuring all information is handled with utmost care and security.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to delivering 70-80% connectivity rates and verified data sets us apart as a leader in the industry.'
    },
    {
      icon: Users,
      title: 'Customer-Centric Approach',
      description: 'Every solution is tailored to meet our clients\' specific needs, with 24/7 support and personalized service.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Growth',
      description: 'We continuously evolve our technology and services to stay ahead of market demands and deliver cutting-edge solutions.'
    }
  ];

  const services = [
    {
      category: 'B2B Solutions',
      items: ['Corporate Database', 'Manufacturing Companies', 'IT Companies', 'MSME Database', 'Private Limited Companies']
    },
    {
      category: 'B2C Solutions',
      items: ['Individual Consumers', 'Educated Professionals', 'Salaried Individuals', 'Self-Employed', 'Local Public']
    },
    {
      category: 'Financial Services',
      items: ['Loan Leads', 'Insurance Prospects', 'Investment Clients', 'Banking Customers', 'Credit Seekers']
    },
    {
      category: 'Specialized Data',
      items: ['Vehicle Owners', 'Healthcare Professionals', 'Real Estate Prospects', 'Stock Market Investors', 'HNI Clients']
    }
  ];

  const achievements = [
    { number: '5000+', label: 'Satisfied Clients', icon: Users },
    { number: '10M+', label: 'Data Records', icon: Database },
    { number: '75%', label: 'Avg Connectivity', icon: TrendingUp },
    { number: '99%', label: 'Client Retention', icon: Star }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=1"
              alt="THE DATA VISION Team"
              className="rounded-2xl mx-auto w-full max-w-4xl h-64 object-cover shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About THE DATA VISION</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            India's premier data solutions provider, empowering businesses with high-quality, verified databases 
            to accelerate growth, enhance customer engagement, and maximize return on investment.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize access to high-quality business data across India, enabling companies of all sizes 
              to reach their target audience effectively and grow their business exponentially.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become India's most trusted and comprehensive data solutions platform, setting industry standards 
              for quality, reliability, and customer satisfaction in the digital age.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-600 leading-relaxed">
              We promise to deliver verified, high-connectivity data with complete transparency, ethical practices, 
              and unwavering commitment to our clients' success and data privacy.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 with a vision to revolutionize how businesses access and utilize data in India, 
                  THE DATA VISION began as a small startup with big dreams. Our founders recognized the growing 
                  need for reliable, verified business data in an increasingly digital marketplace.
                </p>
                <p>
                  Starting with just a handful of clients and a basic database, we've grown exponentially through 
                  our unwavering commitment to quality and customer satisfaction. Today, we serve over 5,000 
                  businesses across India, from small startups to large enterprises.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, strategic partnerships, and most importantly, 
                  the trust our clients place in us. We've built not just a business, but a community of successful 
                  entrepreneurs and companies who rely on our data to fuel their growth.
                </p>
                <p>
                  As we look to the future, we remain committed to our core values while embracing new technologies 
                  and expanding our services to meet the evolving needs of modern businesses.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&dpr=1"
                alt="Our Growth Journey"
                className="rounded-xl w-full h-80 object-cover shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Service Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{service.category}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{achievement.number}</h3>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose THE DATA VISION?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Guaranteed Quality</h3>
              <p className="text-gray-600">70-80% connectivity rate with 15-day replacement guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Delivery</h3>
              <p className="text-gray-600">Immediate data delivery with 7-day trial period</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PAN India Coverage</h3>
              <p className="text-gray-600">Complete coverage across all states and cities in India</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
              <p className="text-gray-600">GDPR compliant with highest security standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support and assistance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of helping businesses achieve growth</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Join thousands of successful businesses who trust THE DATA VISION for their data needs. 
              Let's discuss how we can help you achieve your growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-md hover:shadow-lg">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;