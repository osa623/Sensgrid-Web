import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

//images
import img1 from '../Assets/socialTree/background1.jpg';
import img2 from '../Assets/socialTree/background2.jpg';


const treeSet = [
  {
    id: 1,
    name: 'Tree 1',
    img: img1,
    year: '2021',
    title: 'AI Revolution',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    name: 'Tree 2',
    img: img2,
    year: '2022',
    title: 'Blockchain Breakthrough',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'Tree 3',
    img: img1,
    year: '2023',
    title: 'Quantum Computing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    name: 'Tree 4',
    img: img2,
    year: '2024',
    title: 'Cybersecurity Advances',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    name: 'Tree 5',
    img: img1,
    year: '2025',
    title: 'IoT Expansion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    name: 'Tree 6',
    img: img2,
    year: '2026',
    title: '5G Networks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const TreeView = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <div className="flex flex-col h-auto bg-primary w-auto items-center justify-center mt-24 lgs:p-12">

      {/* Large View */}
      <div className='hidden lgs:flex w-auto h-auto items-center justify-center'>
      {/* First One */}
        <div className='flex flex-col w-auto h-auto items-center justify-center'>
         {treeSet.slice(0,3).map((tool, index)=> (     

          <div key={index} className='relative flex bg-transparent w-[40rem] h-[25rem] items-center justify-center'>
          <div className='relative flex  w-[10rem] h-[25rem] top-0 bg-transparent items-start justify-center z-20  overflow-hidden'>
            <div className='absolute flex bg-primary rounded-full w-[5rem] h-[5rem] items-center justify-center z-30' style={{
              boxShadow:'inset 0px 2px 10px 10px rgba(0,0,0,0.2)'
            }}>
              <img src={tool.img} alt='tree' className='rounded-full border-4 border-gray-500 object-cover w-[5rem] h-[5rem]' />
            </div>
            { index !== 2 && (
            <div className='absolute bg-secondary w-[0.1rem] h-screen items-center justify-center z-20' style={{

            }}/>
            )}
            

          </div>
          <div className='flex w-[30rem] h-[25rem] items-start justify-start top-0 bg-transparent z-30 lgs:p-2'>
            <div className='flex flex-col bg-primary-400 w-[30rem] h-[20rem] items-start rounded-3xl justify-start lgs:p-5'
            style={{
              boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
            }}>
               <h2 className='flex font-russoone text-2xl text-secondary'>
                {tool.year}
              </h2>
              <h2 className='flex font-dmsans text-2xl text-secondary' style={{
                fontWeight:'200'
              }}>
                {tool.title}
              </h2>
              <p className='flex font-dmsans lgs:mt-4 text-sm text-secondary' style={{
                fontWeight:'200'
              }}>
                {tool.description}
              </p>
            </div>
          </div>

          </div>

        ))}  
        </div>   
        
        {/* Second One */}
        <div className='flex flex-col w-auto h-auto items-center justify-center'>
         {treeSet.slice(3,6).map((tool, index)=> (     

          <div key={index} className='relative flex bg-transparent w-[40rem] h-[25rem] items-center justify-center'>
          <div className='relative flex  w-[10rem] h-[25rem] top-0 bg-transparent items-start justify-center z-20  overflow-hidden'>
            <div className='absolute flex bg-primary rounded-full w-[5rem] h-[5rem] items-center justify-center z-30' style={{
              boxShadow:'inset 0px 2px 10px 10px rgba(0,0,0,0.2)'
            }}>
              <img src={tool.img} alt='tree' className='rounded-full border-4 border-gray-500 object-cover w-[5rem] h-[5rem]' />
            </div>
            { index !== 2 && (
            <div className='absolute bg-secondary w-[0.1rem] h-screen items-center justify-center z-20' style={{

            }}/>
            )}

          </div>
          <div className='flex w-[30rem] h-[25rem] items-start justify-start top-0 bg-transparent z-30 lgs:p-2'>
            <div className='flex flex-col bg-primary-400 w-[30rem] h-[20rem] items-start rounded-3xl justify-start lgs:p-5'
            style={{
              boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
            }}>
               <h2 className='flex font-russoone text-2xl text-secondary'>
                {tool.year}
              </h2>
              <h2 className='flex font-dmsans text-2xl text-secondary' style={{
                fontWeight:'200'
              }}>
                {tool.title}
              </h2>
              <p className='flex font-dmsans lgs:mt-4 text-sm text-secondary' style={{
                fontWeight:'200'
              }}>
                {tool.description}
              </p>
            </div>
          </div>

          </div>

        ))}  
        </div> 


     </div>

      {/* mobile View medium screens*/}
      <div className='hidden sms:flex mds:flex w-auto h-auto items-center justify-center'>
          {/* First One */}
            <div className='flex flex-col w-auto h-auto items-center justify-center'>
            {treeSet.map((tool, index)=> (     

              <div key={index} className='relative flex bg-transparent w-full h-[25rem] items-center justify-center'>
              <div className='relative flex  w-[20vw] h-[25rem] top-0 bg-transparent items-start justify-center z-20  overflow-hidden'>
                <div className='absolute flex bg-primary rounded-full w-[4rem] h-[4rem] items-center justify-center z-30' style={{
                  boxShadow:'inset 0px 2px 10px 10px rgba(0,0,0,0.2)'
                }}>
                  <img src={tool.img} alt='tree' className='rounded-full border-2 border-gray-500 object-cover w-[4rem] h-[4rem]' />
                </div>
                { index !== 5 && (
                <div className='absolute bg-secondary w-[0.05rem] h-screen items-center justify-center z-20' style={{

                }}/>
                )}
                

              </div>
              <div className='flex w-[80vw] h-[25rem] items-start justify-start top-0 bg-transparent z-30 mds:p-5 p-2'>
                <div className='flex flex-col bg-primary-400 w-full h-[22rem] items-start rounded-3xl justify-start p-5'
                style={{
                  boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
                }}>
                  <h2 className='flex font-russoone text-xl text-secondary'>
                    {tool.year}
                  </h2>
                  <h2 className='flex font-dmsans text-2xl text-secondary' style={{
                    fontWeight:'200'
                  }}>
                    {tool.title}
                  </h2>
                  <p className='flex font-dmsans mt-4 text-sm mds:text-lg text-secondary' style={{
                    fontWeight:'200'
                  }}>
                    {tool.description}
                  </p>
                </div>
              </div>

              </div>

            ))}  
            </div>   


     </div>
     

    </div>
  );
};

export default TreeView;