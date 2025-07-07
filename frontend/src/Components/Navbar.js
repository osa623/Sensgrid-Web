import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

//images
import namelogo from '../Assets/SensGrid logo.png';

const Navbar = ({darkMode, setDarkMode}) => {
  const [nav, setNav] = useState(false);
  const location = useLocation();

  // Helper function to check if current route is active
  const isActive = (path) => location.pathname === path;

  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false); // Close the mobile menu
  };

  return (
    <div className={`fixed w-full lgs:w-[100vw] flex items-center justify-evenly sms:justify-between mds:justify-between px-4 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-primary'}`}
    style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}>
      <div className="flex items-center justify-center lgs:w-[20vw]">
        <img src={namelogo} alt="bwlogo" className="lgs:scale-100 w-auto m-4 mds:h-8 mds:m-2 lgs:h-12  sms:h-10" />
      </div>
      <ul className={`hidden mds:flex lgs:flex items-center font-dmsans justify-center lgs:text-sm text-lg cursor-pointer lgs:w-[60vw] lgs:space-x-4 ${darkMode ? 'text-white' : 'text-secondary'}`}
      style={{
        fontWeight:'300'
      }}>
        {/* Use Link component for routing */}
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/') ? 'text-blue-600 border-2 bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/' onClick={closeNav}>Home</Link>
          </li>
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/aboutUs') ? 'text-blue-600 border-2   bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/aboutUs' onClick={closeNav}>About Us</Link>
          </li>
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/articles') ? 'text-blue-600 border-2 bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/articles' onClick={closeNav}>Articles</Link>
          </li>
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/contactUs') ? 'text-blue-600 border-2 bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/contactUs' onClick={closeNav}>Contact Us</Link>
          </li>
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/caseStudies') ? 'text-blue-600 border-2 bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/caseStudies' onClick={closeNav}>Case Studies</Link>
          </li>
          <li className={`p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm transition-all duration-200 ${isActive('/treeView') ? 'text-blue-600 border-2 bg-baseprimary bg-opacity-10 rounded-lg' : ''}`}>
            <Link to='/treeView' onClick={closeNav}>Social Tree</Link>
          </li>
              </ul>
              <div className="flex items-center justify-center lgs:w-[20vw] mds:w-[20vw]">
          <div className="flex items-center">
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-2 rounded-full flex items-center gap-2"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        
        </button>
          </div>
              </div>

              <div className="md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} color={darkMode ? "#FFFFFF" : "#000000"} /> : <AiOutlineMenu size={30} color={darkMode ? "#FFFFFF" : "#000000"} />}
              </div>

              <div className={`fixed left-0 top-0 sms:w-[80vw] overflow-hidden mds:w-[80vw] h-full border-r rounded-r-2xl transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'} ${darkMode ? 'bg-gray-700 border-r-gray-500' : 'bg-gray-900 border-r-gray-400'}`}
              >
          <div className={`relative flex-col h-screen w-auto flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-primary'}`}>
            <div className='flex flex-col w-[75vw] h-auto'>
              <ul className="p-4 font-dmsans items-center text-sm justify-center"
              style={{
                color: darkMode ? 'white' : 'black'
              }}>
                <div className="flex items-center justify-center">
            <img src={namelogo} alt="bwlogo" className="h-16 w-auto m-4" />
                </div>
                {/* Use Link component for mobile navigation */}
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/' onClick={closeNav}>Home</Link>
              </li>
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/aboutUs') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/aboutUs' onClick={closeNav}>About Us</Link>
              </li>
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/articles') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/articles' onClick={closeNav}>Articles</Link>
              </li>
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/contactUs') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/contactUs' onClick={closeNav}>Contact Us</Link>
              </li>
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/caseStudies') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/caseStudies' onClick={closeNav}>Case Studies</Link>
              </li>
              <li className={`p-4 border-b text-center transition-all duration-200 ${isActive('/treeView') ? 'text-baseprimary border-l-4 border-l-baseprimary bg-baseprimary bg-opacity-5' : ''}`}
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/treeView' onClick={closeNav}>Social Tree</Link>
              </li>
            </ul>
          </div>

          <div className='w-[80vw] flex flex-col items-center justify-center h-auto'>
            <div className='flex flex-col bg-transparent items-center justify-center mb-8 space-y-5'>
              <div className='flex w-[50vw] items-center justify-center h-auto gap-4'>
                <div className='h-1 w-1 rounded-full bg-baseprimary'/>
                <div className='h-1 w-1 rounded-full bg-baseprimary'/>
                <div className='h-1 w-1 rounded-full bg-baseprimary'/>
                <div className='h-1 w-1 rounded-full bg-baseprimary'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;