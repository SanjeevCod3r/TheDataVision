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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Milestones & Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building trust through consistent performance and quality service delivery
          </p>
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
        <div className="bg-gray-50 rounded-2xl p-8">
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Success Story?</h3>
          <p className="text-gray-600 mb-8">Be part of thousands of businesses that trust THE DATA VISION for their growth</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Milestones;