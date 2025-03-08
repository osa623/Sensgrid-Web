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
        <img src={namelogo} alt="bwlogo" className="lgs:scale-100 w-auto m-4 mds:h-8 mds:m-2 lgs:h-12  sms:h-10" />
      </div>
      <ul className="hidden md:flex lgs:flex  items-center font-dmsans justify-center text-secondary text-lg cursor-pointer lgs:w-[60vw] lgs:space-x-4"
      style={{
        fontWeight:'300'
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
        <li on className="p-4 hover:text-baseprimary mds:text-sm">
          Contact Us
        </li>
        <li on className="p-4 hover:text-baseprimary mds:text-sm">
           <Link to='/treeView'>Social Tree</Link>
        </li>
      </ul>
      <div className="flex items-center lgs:w-[20vw] mds:w-[20vw]"/>

      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} color="#000000" /> : <AiOutlineMenu size={30} color="#000000" />}
      </div>

      <div className={`fixed left-0 top-0 sms:w-[80vw] overflow-hidden mds:w-[80vw] h-full border-r rounded-r-2xl border-r-gray-400 bg-gray-900 transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='relative flex-col h-screen bg-primary w-auto flex justify-between items-center'>
              <div className='flex flex-col w-[75vw] h-auto'>
                  <ul className="p-4 font-dmsans text-secondary items-center lgs:text-sm justify-center">
                    <div className="flex items-center justify-center">
                      <img src={namelogo} alt="bwlogo" className="h-16 w-auto m-4" />
                    </div>
                    {/* Use Link component for mobile navigation */}
                    <li className="p-4 border-b border-gray-600 text-center">
                     Home
                    </li>
                    <li  className="p-4 border-b border-gray-600 text-center">
                      Our Clients
                    </li>
                    <li className="p-4 border-b border-gray-600 text-center">
                      Features
                    </li>
                    <li  className="p-4 border-b border-gray-600 text-center">
                      About Us
                    </li>
                    <li o className="p-4 border-b border-gray-600 text-center">
                      Blog
                    </li>
                    <li o className="p-4 border-b border-gray-600 text-center">
                      Contact Us
                    </li>
                    <li o className="p-4 border-b border-gray-600 text-center">
                      Social Tree
                    </li>
                  </ul>
              </div>

              <div className='w-[80vw] flex flex-col items-center  justify-center h-auto'>
                  
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
