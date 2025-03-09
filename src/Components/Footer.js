import React from 'react';
import {Link} from 'react-router-dom';

//images
import namelogo from '../Assets/SensGrid logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            {/* Grid Layout */}
            <div className="flex grid-cols-1 justify-evenly place-items-start mds:grid-cols-2 lgs:grid-cols-4 gap-6">
              
              {/* Logo & About */}
              <div>
              <img src={namelogo} alt="bwlogo" className="lgs:scale-100 sms:w-[40vw] w-auto mds:h-8 mds:m-2 lgs:h-16  sms:h-10" />
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
                  <li><Link to='/home' className="hover:text-blue-400">Home</Link></li>
                  <li><Link to='/aboutUs' className="hover:text-blue-400">About Us</Link></li>
                  <li><Link to='/contactUs' className="hover:text-blue-400">Contact Us</Link></li>
                  <li><Link to='/treeView' className="hover:text-blue-400">Social Tree</Link></li>

                </ul>
              </div>
    
    
              {/* Newsletter */}

    
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
