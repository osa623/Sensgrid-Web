import React from 'react';

//images
import namelogo from '../Assets/SensGrid logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid Layout */}
            <div className="flex grid-cols-1 justify-between place-items-start mds:grid-cols-2 lgs:grid-cols-4 gap-6">
              
              {/* Logo & About */}
              <div>
              <img src={namelogo} alt="bwlogo" className="lgs:scale-100 w-auto mds:h-8 mds:m-2 lgs:h-16  sms:h-10" />
                <p className="mt-2 text-gray-400">
                  Innovating the future with cutting-edge technology.
                </p>
              </div>
    
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Quick Links</h3>
                <ul className="mt-2 space-y-2 font-dmsans" style={{
                  fontWeight:'100'
                }}>
                  <li><a href="#" className="hover:text-blue-400">Home</a></li>
                  <li><a href="#" className="hover:text-blue-400">Our Clients</a></li>
                  <li><a href="#" className="hover:text-blue-400">Features</a></li>
                  <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                </ul>
              </div>
    
    
              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Subscribe</h3>
                <p className="mt-2 text-gray-400">Get the latest updates right to your inbox.</p>
                <div className="mt-3 flex">
                  <input type="email" placeholder="Your email" className="p-2 rounded-l bg-gray-800 text-white outline-none w-full" />
                  <button className="bg-blue-500 px-4 py-2 rounded-r hover:bg-blue-600">Subscribe</button>
                </div>
              </div>
    
            </div>
    
            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
              &copy; {new Date().getFullYear()} SenseGrid. All Rights Reserved.
            </div>
          </div>
        </footer>
      );
}

export default Footer
