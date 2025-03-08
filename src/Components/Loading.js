import React from 'react';

import '../Components/Style.css';

//image
import logo from '../Assets/SensGrid logo.png';

const Loading = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
       <div className='absolute flex h-auto w-auto z-40'>
         <img src= {logo} alt='' className='object-cover w-32'/>
       </div>
       <div className='loader z-30'></div>
    </div>

  );
};

export default Loading;
