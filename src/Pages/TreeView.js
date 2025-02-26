import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TreeView = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const Node = ({ title, side, index }) => (
    <div 
      className={`w-full md:w-96 p-6 rounded-lg shadow-lg mb-8 bg-white relative ${
        side === 'left' ? 'md:mr-auto' : 'md:ml-auto'
      }`}
      data-aos={`fade-${side === 'left' ? 'right' : 'left'}`}
      data-aos-delay={index * 200}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">Component description goes here...</p>
      
      {/* Node Number Badge */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${
        side === 'left' ? '-right-4' : '-left-4'
      } w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white z-10`}>
        {index + 1}
      </div>

      {/* Connector Line */}
      <div className={`hidden md:block absolute top-1/2 h-0.5 bg-blue-500 ${
        side === 'left' 
          ? 'left-full -translate-y-1/2 w-32' 
          : 'right-full -translate-y-1/2 w-32'
      }`}></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 items-center justify-center lgs:mt-24">
      <div className="max-w-6xl mx-auto relative">
        {/* Central Timeline */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-blue-500 h-full top-0 z-0"></div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
          {/* Left Side Components */}
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <Node
                key={`left-${i}`}
                title={`Left Component ${i}`}
                side="left"
                index={i}
              />
            ))}
          </div>

          {/* Right Side Components */}
          <div className="space-y-8 md:mt-20">
            {[1, 2, 3].map((i) => (
              <Node
                key={`right-${i}`}
                title={`Right Component ${i}`}
                side="right"
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeView;