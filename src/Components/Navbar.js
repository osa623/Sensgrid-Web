import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//images
import namelogo from '../Assets/SensGrid logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
        <li className="p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm">
          <Link to='/' onClick={closeNav}>Home</Link>
        </li>
        <li className="p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm">
          <Link to='/aboutUs' onClick={closeNav}>About Us</Link>
        </li>
        <li className="p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm">
          <Link to='/contactUs' onClick={closeNav}>Contact Us</Link>
        </li>
        <li className="p-4 hover:text-baseprimary dark:hover:text-gray-300 mds:text-sm">
          <Link to='/treeView' onClick={closeNav}>Social Tree</Link>
        </li>
      </ul>
      <div className="flex items-center justify-center lgs:w-[20vw] mds:w-[20vw]">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5 peer-checked:bg-blue-500"></div>
          </label>
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
              color: darkMode ? 'white' : 'secondary'
            }}>
              <div className="flex items-center justify-center">
                <img src={namelogo} alt="bwlogo" className="h-16 w-auto m-4" />
              </div>
              {/* Use Link component for mobile navigation */}
              <li className="p-4 border-b text-center"
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/' onClick={closeNav}>Home</Link>
              </li>
              <li className="p-4 border-b text-center"
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/aboutUs' onClick={closeNav}>About Us</Link>
              </li>
              <li className="p-4 border-b text-center"
              style={{
                borderColor: darkMode ? 'gray-500' : 'gray-600'
              }}>
                <Link to='/contactUs' onClick={closeNav}>Contact Us</Link>
              </li>
              <li className="p-4 border-b text-center"
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