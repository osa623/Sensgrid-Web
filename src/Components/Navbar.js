import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//images
import namelogo from '../Assets/SensGrid logo.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full lgs:w-[100vw] flex items-center justify-evenly sms:justify-between mds:justify-between bg-primary px-4 z-50 transition-all duration-300'
    style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }}>
      <div className="flex items-center justify-center lgs:w-[20vw]">
        <img src={namelogo} alt="bwlogo" className="h-12 lgs:scale-150 w-auto m-4 mds:h-8 mds:m-2 lgs:h-12  sms:h-12" />
      </div>
      <ul className="hidden md:flex lgs:flex  items-center font-dmsans justify-center text-secondary text-lg cursor-pointer lgs:w-[60vw] lgs:space-x-4"
      style={{
        fontWeight:'400'
      }}>
        {/* Use Link component for routing */}
        <li className="p-4 hover:text-baseprimary mds:text-sm">
          Home
        </li>
        <li className="p-4 hover:text-baseprimary mds:text-sm">
          Our Clients
        </li>
        <li className="p-4 hover:text-baseprimary mds:text-sm">
          Features
        </li>
        <li className="p-4 hover:text-baseprimary mds:text-sm">
          About Us
        </li>
        <li on className="p-4 hover:text-baseprimary mds:text-sm">
          Blog
        </li>
      </ul>
      <div className="flex items-center lgs:w-[20vw] mds:w-[20vw]"/>

      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
      </div>

      <div className={`fixed left-0 top-0 sms:w-[80vw] overflow-hidden mds:w-[80vw] h-full border-r rounded-r-2xl border-r-gray-400 bg-gray-900 transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='relative flex-col h-screen bg-gray-900 w-auto flex justify-between items-center'>
              <div className='flex flex-col w-[75vw] h-auto'>
                  <ul className="p-4 font-dmsans text-primary items-center justify-center">
                    <div className="flex items-center justify-center">
                      <img src={'namelogo'} alt="bwlogo" className="h-16 w-auto m-4" />
                    </div>
                    {/* Use Link component for mobile navigation */}
                    <li className="p-4 border-b border-gray-600 text-center">
                     About Me
                    </li>
                    <li  className="p-4 border-b border-gray-600 text-center">
                      Projects
                    </li>
                    <li className="p-4 border-b border-gray-600 text-center">
                      Skills
                    </li>
                    <li  className="p-4 border-b border-gray-600 text-center">
                      Services
                    </li>
                    <li o className="p-4 border-b border-gray-600 text-center">
                      Contact Me
                    </li>
                  </ul>
              </div>

              <div className='w-[80vw] flex flex-col items-center  justify-center h-auto'>
                  
                   
                        <div className='flex w-[75vw] items-center justify-center p-6 gap-8'>
                          <Link to={'https://www.facebook.com/Baos623/'} className="flex items-center justify-center text-gray-400 hover:text-primary h-6 w-6 transition-transform cursor-pointer">
                                                                <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  fill="currentColor"
                                                                  class="text-gray-400 h-6 w-auto"
                                                                  viewBox="0 0 320 512">
                                                                  <path
                                                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                                </svg>
                          </Link>
                          <Link to={'https://www.instagram.com/baos.623/'} className="flex items-center justify-center text-gray-400 hover:text-primary h-6 w-6 transition-transform cursor-pointer">
                                                                <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  fill="currentColor"
                                                                  class="text-gray-400 h-6 w-auto"
                                                                  viewBox="0 0 448 512">
                                                                      <path
                                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                                </svg>
                          </Link>
                          <Link to={'https://www.youtube.com/@baos_623'} className="flex items-center justify-center text-gray-400 hover:text-primary h-6 w-6  transition-transform cursor-pointer">
                                                                <svg
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  fill="currentColor"
                                                                  className="flex text-gray-400 h-6 w-auto"
                                                                  viewBox="0 0 576 512">
                                                                  <path
                                                                    d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                                </svg>
                          </Link>
                          <Link to={'https://www.tiktok.com/@baos_623'} className="flex items-center justify-center text-gray-400 hover:text-primary h-6 w-6 transition-transform cursor-pointer">
                                                                  <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    class="text-gray-400 h-6 w-auto"
                                                                    viewBox="0 0 448 512">
                                                                    <path
                                                                      d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                                                                  </svg>
                          </Link>
                        </div>
           


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
