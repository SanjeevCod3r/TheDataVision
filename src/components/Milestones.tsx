import React from 'react';
import { Users, Database, TrendingUp, Award, Clock, Shield } from 'lucide-react';

const Milestones = () => {
  const milestones = [
    {
      icon: Users,
      number: '5000+',
      title: 'Happy Clients',
      description: 'Businesses trust us for their data needs'
    },
    {
      icon: Database,
      number: '10M+',
      title: 'Data Records',
      description: 'Verified and updated database entries'
    },
    {
      icon: TrendingUp,
      number: '75%',
      title: 'Average Connectivity',
      description: 'Consistently high-quality data delivery'
    },
    {
      icon: Award,
      number: '99%',
      title: 'Client Satisfaction',
      description: 'Rated excellent by our customers'
    },
    {
      icon: Clock,
      number: '24/7',
      title: 'Customer Support',
      description: 'Round-the-clock assistance'
    },
    {
      icon: Shield,
      number: '100%',
      title: 'Data Security',
      description: 'Complete privacy and compliance'
    }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to provide quality data solutions'
    },
    {
      year: '2021',
      title: '1000+ Clients',
      description: 'Reached our first major milestone of serving 1000 businesses'
    },
    {
      year: '2022',
      title: 'PAN India Expansion',
      description: 'Extended our services across all states in India'
    },
    {
      year: '2023',
      title: '5M+ Data Records',
      description: 'Built one of India\'s largest verified business databases'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading data solutions provider'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Background */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-blue-700 text-white p-12 mb-16">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Milestones & Achievements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building trust through consistent performance and quality service delivery
            </p>
          </div>
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Data Visualization"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <milestone.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">{milestone.number}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
              <p className="text-sm text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Data Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-inherit`}>
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <h4 className="text-2xl font-bold text-blue-600 mb-2">{achievement.year}</h4>
                        <h5 className="text-xl font-semibold text-gray-900 mb-3">{achievement.title}</h5>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 hidden md:block"></div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Story?</h3>
          <p className="text-gray-600 mb-8">Be part of thousands of businesses that trust THE DATA VISION for their growth</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div>

        {/* Stats Visualization */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Data That Drives Decisions</h3>
              <p className="text-blue-100 mb-6">
                Our comprehensive database powers businesses across India with accurate, verified information. 
                We help you connect with your target audience effectively.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">📊</span>
                  <span>Real-time data updates</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">🔍</span>
                  <span>Advanced filtering options</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-white/20 p-1 rounded-full mr-3">🔄</span>
                  <span>Regular database maintenance</span>
                </li>
              </ul>
              <button className="mt-6 bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-200">
                Explore Our Data Solutions
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Data Analytics Dashboard"
                className="w-full rounded-lg shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;