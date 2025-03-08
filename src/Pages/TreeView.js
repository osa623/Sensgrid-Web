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


  return (
    <div className="relative flex-col h-screen bg-primary items-center justify-center mt-24">
     <div className='relative flex bg-transparent w-[35rem] h-[25rem] items-center justify-center'>
      <div className='relative flex  w-[10rem] h-[25rem] top-0 bg-transparent items-start justify-center z-20 lgs:p-2 overflow-hidden'>
        <div className='absolute bg-primary rounded-full w-[5rem] h-[5rem] items-center justify-center lgs:mt-8 z-30' style={{
          boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
        }}>
        </div>
        <div className='absolute bg-secondary w-[0.1rem] h-screen items-center justify-center z-20' style={{

        }}>
        </div>

      </div>
      <div className='flex w-[25rem] h-[25rem] items-start justify-start top-0 bg-transparent z-30 lgs:p-2'>
        <div className='flex bg-primary-400 w-[30rem] h-[20rem] items-center justify-center'>
        </div>
      </div>

     </div>
     <div className='relative flex bg-transparent w-[35rem] h-[25rem] items-center justify-center'>
      <div className='relative flex  w-[10rem] h-[25rem] top-0 bg-transparent items-start justify-center z-20 overflow-hidden'>
        <div className='absolute bg-primary rounded-full w-[5rem] h-[5rem] items-center justify-center lgs:mt-8 z-30' style={{
          boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
        }}>
        </div>
        <div className='absolute bg-secondary w-[0.1rem] h-screen items-center justify-center z-20' style={{

        }}>
        </div>

      </div>
      <div className='flex w-[25rem] h-[25rem] items-start justify-start top-0 bg-transparent z-30 lgs:p-2'>
        <div className='flex bg-primary-400 w-[30rem] h-[20rem] items-center justify-center'>
        </div>
      </div>

     </div>
     <div className='relative flex bg-transparent w-[35rem] h-[25rem] items-center justify-center'>
      <div className='relative flex  w-[10rem] h-[25rem] top-0 bg-transparent items-start justify-center z-20 overflow-hidden'>
        <div className='absolute bg-primary rounded-full w-[5rem] h-[5rem] items-center justify-center lgs:mt-8 z-30' style={{
          boxShadow:'0px 2px 10px 10px rgba(0,0,0,0.2)'
        }}>
        </div>
        <div className='absolute bg-secondary w-[0.1rem] h-screen items-center justify-center z-20' style={{

        }}>
        </div>

      </div>
      <div className='flex w-[25rem] h-[25rem] items-start justify-start top-0 bg-transparent z-30 lgs:p-2'>
        <div className='flex bg-primary-400 w-[30rem] h-[20rem] items-center justify-center'>
        </div>
      </div>

     </div>
    </div>
  );
};

export default TreeView;