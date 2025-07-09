import React from 'react';
import {Link} from 'react-router-dom';

//images
import namelogo from '../Assets/SensGrid logo.png';

const Footer = ({darkmode}) => {
    return (
        <footer className={`py-6 ${darkmode ? 'bg-gray-900 text-white border-t-2' : 'bg-gray-100 text-gray-800'}`}>
          <div className="max-w-6xl mx-auto px-4">
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src={namelogo} 
                  alt="SensGrid Logo" 
                  className="h-8 w-auto" 
                />
              </div>
    
              {/* Links */}
              <div className="flex flex-wrap gap-6 text-sm">
                <Link to='/' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Home</Link>
                <Link to='/aboutUs' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>About Us</Link>
                <Link to='/articles' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Articles</Link>
                <Link to='/contactUs' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Contact Us</Link>
                <Link to='/caseStudies' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Case Studies</Link>
                <Link to='/treeView' className={`transition-colors ${darkmode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}>Social Tree</Link>

              </div>
            </div>
    
            {/* Copyright */}
            <div className={`mt-4 pt-4 border-t text-center text-sm ${darkmode ? 'border-gray-700 text-gray-400' : 'border-gray-300 text-gray-600'}`}>
              &copy; {new Date().getFullYear()} SenseGrid. All Rights Reserved.
            </div>
          </div>
        </footer>
      );
}

export default Footer


