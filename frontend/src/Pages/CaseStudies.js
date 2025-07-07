import React from 'react'
import { CheckCircle, Users, BarChart3, Zap, TrendingUp, Award, Phone, Mail, MapPin } from 'lucide-react';

import caseStudy from '../Assets/casestudy.jpg';

const CaseStudies = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Sample</span>
              <div className="ml-2 flex space-x-1">
                <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Solutions</a>
              <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Services</a>
              <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
              <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`py-12 lg:py-20 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-4xl lg:text-6xl font-bold mb-6 ${darkMode ? 'text-blue-600' : 'text-gray-900'}`}>
                How Sample Group accelerated digitalization with ThingsBoard
              </h1>
              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Discover how Sample Group, one of Europe's largest retail companies, transformed their operations through IoT implementation. From smart store environments to advanced analytics, explore how ThingsBoard enabled seamless connectivity across 500,000+ devices in 13,900 locations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className={`border px-8 py-3 rounded-lg font-semibold transition-colors ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src={caseStudy}
                  alt="Sample Group Building" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500,000+</div>
                    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Connected Devices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">13,900</div>
                    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              What problem did they face?
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              The Sample Group, a global retail company, faced several challenges in managing the technology used in its
              supermarkets. These requirements were expanding into customer-facing applications for grocery store digitalization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Challenges</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Difficult device management</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Each store used different devices, requiring frequent troubleshooting and maintenance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Inconsistent customer experiences</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Different platforms across stores led to varied customer experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Limited scalability</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Existing systems couldn't handle the growing number of connected devices.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Key Results</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Unified IoT Platform</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ThingsBoard IoT platform helped consolidate all operations under a single platform.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Improved Customer Experience</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Consistent interfaces across all stores, making it easier for retail managers and customers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Enhanced Scalability</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>The platform can handle over 500,000 devices seamlessly across 13,900 locations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How ThingsBoard Powers Sample */}
      <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How ThingsBoard powers Sample?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Challenges in managing a large retail network
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The Sample Group operates thousands of retail locations across Europe, each with unique IoT requirements. 
                Their challenge was ensuring seamless connectivity and operational efficiency across this vast network while 
                maintaining standardized experiences for both customers and staff.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                With over 500,000 devices deployed across 13,900 locations, the complexity was immense. They needed a solution 
                that could handle massive scale while providing the granular control necessary for retail operations.
              </p>
            </div>
            <div>
              <img 
                src="/api/placeholder/600/400" 
                alt="Retail Network Management" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/api/placeholder/600/400" 
                alt="IoT Operations Dashboard" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Transforming retail operations with ThingsBoard
              </h3>
              <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                By partnering with ThingsBoard, the Sample Group achieved significant improvements. The ThingsBoard IoT 
                platform was able to interconnect over 500,000 devices across all store locations, enabling real-time monitoring, 
                automated responses, and comprehensive analytics.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The solution provided centralized device management, real-time monitoring capabilities, and advanced analytics. 
                Moreover, the flexibility of ThingsBoard enabled the Sample Group to quickly adapt to changing business requirements and add new features as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              How ThingsBoard helps retail businesses improve operations with IoT?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className={`p-8 rounded-xl shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Easy device management</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Enables one thousand of users devices to their clients throughout from one to one 
                source. ThingsBoard makes it simple for devicing services for a more customer-centric approach.
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Real-time data and reports</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Get the right information and insights about every device, ThingsBoard provides 
                real-time analytics to help you make better business decisions.
              </p>
            </div>

            <div className={`p-8 rounded-xl shadow-lg border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Smart automation with alerts</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Configure intelligent rules and actions, triggering automated responses based on 
                device behavior and environmental factors.
              </p>
            </div>
          </div>

          {/* Dashboard Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Device Management Dashboard</h4>
              <div className={`rounded-lg p-4 shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Device Status</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Online</span>
                    <span className="font-medium">98.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Warning</span>
                    <span className="font-medium">1.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Offline</span>
                    <span className="font-medium">0.3%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Real-time Analytics</h4>
              <div className={`rounded-lg p-4 shadow-sm ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Performance Metrics</span>
                  <TrendingUp className="w-4 h-4 text-green-500" />
                </div>
                <div className={`h-32 rounded flex items-end justify-center ${darkMode ? 'bg-gradient-to-t from-gray-600 to-transparent' : 'bg-gradient-to-t from-blue-50 to-transparent'}`}>
                  <div className="text-2xl font-bold text-blue-600">↗</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className={`py-16 ${darkMode ? 'bg-gray-700' : 'bg-gray-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              An Award-Winning Collaboration
            </h2>
            <p className={`text-lg mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-200' : 'text-blue-100'}`}>
              This innovative partnership between Sample Group and ThingsBoard has been recognized with prestigious 
              awards. The collaboration has redefined how ThingsBoard empowers the retail industry, 
              demonstrating excellence in IoT implementation and digital transformation.
            </p>
            <div className="bg-white p-8 rounded-xl inline-block">
              <div className="text-2xl font-bold text-blue-600 mb-2">TOP RETAIL 2024</div>
              <div className="text-gray-600">Innovation Excellence Award</div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default CaseStudies
