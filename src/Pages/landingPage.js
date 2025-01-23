import React, { useState } from 'react'

//backgrounds
import background from '../Assets/HeroSection.jpg';
import background1 from '../Assets/background3.jpg';

//details images
import dropdown from '../Assets/dropdown.png';
import onTheProgramming from '../Assets/onTheFlyProgramming.png';
import RealTimeMonitoring from '../Assets/Real-Time-Monitoring.png';
import Security from '../Assets/Security.png';
import Accuracy from '../Assets/Accuracy.png';
import CloudBaseDashboard from '../Assets/Cloud Base Dashboard.png';
import EnergyEfficiency from '../Assets/Energy Efficiency.png';

//partners images
import dSI from '../Assets/DSISport.png';
import dHL from '../Assets/DHL.png';
import Mobitel from '../Assets/SLTMobitel.png';

//sensegrid intro images
import sensegrid from '../Assets/sensgrid1.png';
import sensegrid1 from '../Assets/sensegrid2.png';
import sensegrid2 from '../Assets/object02.png';

//object images
import object from '../Assets/object01.png';
import namelogo from '../Assets/SensGrid logo.png';


const details = [
    {
      id: 1,
      title: 'On-the-Fly Programming',
      description: 'Fine-tune features and modify behavior in real-time operations as they happen.',
      image : onTheProgramming
    },
    {
      id: 2,
      title: 'Real-Time Monitoring',
      description: 'Instant insights to track and optimize.',
      image : RealTimeMonitoring
    },
    {
      id: 3,
      title: 'Security',
      description: 'Robust safeguards to protect data and ensure system integrity.',
      image : Security
    },
    {
      id: 4,
      title: 'Energy Efficiency',
      description: 'Optimize power usage to lower costs and reduce waste.',
      image : EnergyEfficiency
    },
    {
      id: 5,
      title: 'Accuracy',
      description: 'Precision data tracking for reliable and actionable insights.',
      image : Accuracy
    },
    {
      id: 6,
      title: 'Cloud-Based Dashboard',
      description: 'Access live reports and analytics anytime, anywhere.',
      image : CloudBaseDashboard
    }
  ];

  const partners = [
    {
      id: 1,
      description: 'Empower your business with real-time fine-tuning capabilities that adapt to dynamic operational needs. Monitor, modify, and optimize workflows seamlessly to ensure peak performance and instant adaptability to changing environments.',
      image: dSI
    },
    {
      id: 2,
      description: 'Gain actionable insights at lightning speed with powerful analytics tools. Track performance metrics, identify areas of improvement, and make data-driven decisions to optimize your operations and stay ahead of the competition.',
      image: dHL
    },
    {
      id: 3,
      description: 'Protect your systems and data with robust, industry-leading safeguards. Ensure compliance, secure sensitive information, and maintain system reliability with advanced security measures designed for total peace of mind.',
      image: Mobitel
    },
];



const LandingPage = () => {

    const [sectionExplanded , setSectionExpanded] = useState(false);   
    const [offersec , setOfferSec] = useState(false);
    const [introSec , setIntroSec] = useState(false);

    const handleSectionExpand = () => {

        setSectionExpanded(!sectionExplanded);
    };

    const handleOfferSec = () => {

        setOfferSec(!offersec);
    };

    const handleIntroSec = () => {

        setIntroSec(!introSec);
    };


  return (


            <div className='relative h-auto w-auto'>

                    {/* Hero Section */}
                    <section className='relative flex-col h-[100vh] lgs:mb-3 w-full z-10'>
                                
                                <div className='absolute flex-col lg:w-full lgs:h-[100vh] z-20'>

                                    <div className="relative w-full h-[80vh] overflow-hidden">
                                        <img
                                        src={background}
                                        alt="Beach View"
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                        />
                                    </div>
                                    <div className='flex bg-transparent lgs:w-[100vw] lgs:h-[20vh]'/>


                                </div>

                                <div className='absolute flex-col flex w-full lgs:h-[100vh] z-30'>

                                        <div className='relative flex flex-col bg-transparent items-center justify-center w-[100vw] h-[80vh]'>
                                            
                                            <div className='flex flex-col items-center cursor-pointer justify-center lgs:space-y-4 lgs:w-[80vw] mds:w-[60vw]'>
                                                <h2 className='font-dmsans lg:text-7xl mds:text-6xl text-primary'>Powering the <span className='font-bold text-baseprimary'>Next Generation</span></h2>
                                                <h2 className='font-dmsans lg:text-7xl mds:text-6xl text-baseprimary'>of Smart <span className='font-bold text-primary'>IoT Solutions</span></h2>
                                            </div>
                                            <div className='flex w-auto h-auto lgs:mt-8'>
                                                <button className='flex bg-blue-800 lgs:w-[10rem] lgs:h-[3rem] items-center justify-center cursor-pointer  text-primary font-dmsans text-md p-4 rounded-3xl hover:bg-blue-900 hover:text-baseprimary'
                                                style={{
                                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                                }}>
                                                Get Started
                                                </button>
                                        </div>

                                        </div>




                                </div>

                                <div className={`absolute ${sectionExplanded ? '-bottom-2' : 'bottom-10' } flex-col bg-transparent lgs:w-[100vw] lgs:h-auto z-50 transfrom-700 duration-700 ease-in-out`}>

                                    <div className='flex bg-transparent items-center justify-center lg:w-[100vw] lg:h-auto space-x-6'>
                                    
                                        <div className={`relative flex lgs:w-[60rem] overflow-hidden ${sectionExplanded ? 'lgs:h-[20rem]' : 'lgs:h-[12rem]'} bg-theme01 rounded-3xl transform-all duration-700 ease-in-out`} style={{
                                            boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                        }}>
                                            <div className='absolute flex w-full blur-sm h-auto overflow-hidden z-20'>
                                                <img src={'background2'} alt='' className='flex object-cover'/>
                                            </div>
                                            <div className={`absolute flex flex-col    ${sectionExplanded ? 'lgs:h-[20rem] lgs:space-y-5' : 'lgs:h-[12rem] lgs:space-y-2'}  items-center justify-center lgs:w-[60rem] overflow-hidden transform-all duration-700 ease-in-out z-30`}>
                                                <h2 className={`font-kanit ${sectionExplanded ? 'text-5xl' : 'text-8xl'}  text-primary font-bold text-center transform-all duration-700 ease-in-out`}>
                                                    INDUSTRY {''}<span className='font-kanit font-thin text-primary'>4.0</span>
                                                </h2>
                                                <div
                                                        className={`${
                                                            sectionExplanded ? 'lgs:w-[45rem] opacity-100' : 'lgs:w-[45rem] opacity-0 pointer-events-none'
                                                        } transition-all duration-700 ease-in-out`}
                                                        >
                                                        {sectionExplanded && (
                                                            <p className="font-kanit text-primary text-md text-center" style={{
                                                                fontWeight:'200'
                                                            }}>
                                                            Revolutionizing the Industry 2.0 era with innovative IoT solutions, our platform is designed
                                                            to seamlessly integrate advanced technologies to drive efficiency, connectivity, and
                                                            sustainability. Proudly powered by SLTMobitel, we aim to empower businesses and industries
                                                            with reliable, state-of-the-art infrastructure and smart solutions that pave the way for a
                                                            smarter, more connected future.
                                                            </p>
                                                        )}
                                                        </div>

                                                
                                                <div className='flex flex-col h-auto w-auto lgs:mt-2 cursor-pointer hover:mt-4 items-center justify-center transform-all duration-700 ease-in-out' onClick={handleSectionExpand}>
                                                    <h2 className='font-kanit text-md text-primary'
                                                    style={{
                                                        fontWeight:'100'
                                                    }}>
                                                        Let's Find Out
                                                    </h2>
                                                    <img src= {dropdown} alt='' className='object-cover lgs:h-5'/>
                                                </div>
                                            </div>

                                        </div>

                                        

                                    </div>
                                    
                                </div>  

                                




                    </section>

                    {/* Offering Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>

                        <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                        </div>

                        <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center'>
                            <div className='group flex flex-col w-auto h-auto'>
                                    <h2 className='group flex flex-col font-kanit text-center font-medium text-8xl text-theme01 transform-all duration-1000 ease-in-out'>
                                        What We Provide{''} 
                                    </h2>  
                                    <h2 className='flex flex-col font-kanit text-4xl text-theme01' style={{
                                        fontWeight:'100'
                                    }}>
                                        Unified Control System for Sensors and Machines{''}<div className='flex lgs:w-1/4 h-[0.1rem] bg-green-500 group-hover:lgs:w-full  transform-all duration-1000 ease-in-out'/>
                                </h2>   

                            </div>
                        </div> 

                        <div className='flex lgs:w-[80vw] h-auto items-center lgs:space-x-5 justify-center lgs:mt-6 lgs:p-5'>

                            {details.slice(0,3).map((tool) => (

                                <div key={tool.id} className='group overflow-hidden flex flex-col lgs:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' style={{
                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'
                                }}>
                                    <div className='relative flex flex-col lgs:h-[10rem] lgs:w-[20rem] justify-center rounded-md overflow-hidden items-center group-hover:scale-150 transform-all duration-700 ease-in-out z-20'>
                                        <img src={tool.image} alt='' className='object-cover'/>
                                    </div>
                                    <div className='flex flex-col lgs:h-[2rem] lgs:w-[20rem] bg-theme01 justify-center items-center z-30'>
                                        <h2 className='font-dmsans text-center lgs:w-[15rem] text-md text-primary'
                                            style={{
                                                fontWeight:'600'
                                            }}>
                                                {tool.title}
                                            </h2>
                                    </div>
                                    <div className='flex flex-col lgs:h-[6rem] lgs:w-[20rem] bg-primary rounded-b-lg justify-center items-center z-30'>
                                            <p className='font-kanit text-center lgs:w-[15rem] text-sm text-secondary'
                                            style={{
                                                fontWeight:'200'
                                            }}>
                                                {tool.description}
                                            </p>
                                    </div>

                                </div>

                            ))} 

                        </div>     

                        <div className='flex lgs:w-[80vw] h-auto items-center lgs:space-x-5 justify-center lgs:p-5'>


                            {details.slice(3,6).map((tool) => (

                            <div key={tool.id} className='group overflow-hidden flex flex-col lgs:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'
                            }}>
                                <div className='relative flex flex-col lgs:h-[10rem] lgs:w-[20rem] justify-center rounded-md overflow-hidden items-center group-hover:scale-150 transform-all duration-700 ease-in-out z-20'>
                                    <img src={tool.image} alt='' className='object-cover'/>
                                </div>
                                <div className='flex flex-col lgs:h-[2rem] lgs:w-[20rem] bg-theme01 justify-center items-center z-30'>
                                    <h2 className='font-dmsans text-center lgs:w-[15rem] text-md text-primary'
                                        style={{
                                            fontWeight:'600'
                                        }}>
                                            {tool.title}
                                        </h2>
                                </div>
                                <div className='flex flex-col lgs:h-[6rem] lgs:w-[20rem] bg-primary rounded-b-lg justify-center items-center z-30'>
                                        <p className='font-kanit text-center lgs:w-[15rem] text-sm text-secondary'
                                        style={{
                                            fontWeight:'200'
                                        }}>
                                            {tool.description}
                                        </p>
                                </div>

                            </div>

                            ))} 

                    </div> 

                      <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                        </div>     


                    </section>

                    {/* Partners Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>
                    <div className='relative flex lgs:w-full lgs:h-auto lgs:p-5 items-center justify-center bg-primary'>
                    <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center z-30'>
                        <div className='group flex flex-col w-auto h-auto'>
                                <h2 className='group flex flex-col font-kanit text-center font-medium text-8xl text-theme01 transform-all duration-1000 ease-in-out'>
                                    Our Partners{''} 
                                </h2>  
                                <h2 className='flex flex-col font-kanit text-4xl text-theme01' style={{
                                    fontWeight:'100'
                                }}>
                                    Partnering with Leaders to Build Success Together.{''}<div className='flex lgs:w-1/4 h-[0.1rem] bg-green-500 group-hover:lgs:w-full  transform-all duration-1000 ease-in-out'/>
                               </h2>   

                        </div>

                        <div className='flex lgs:w-[80vw] h-auto items-center lgs:space-x-5 justify-center lgs:mt-12'>
                                    
                            {partners.slice(0,3).map((tool) => (

                            <div key={tool.id} className='flex flex-col lgs:w-[25rem] overflow-hidden bg-primary cursor-pointer items-center justify-center rounded-lg lgs:h-[25rem]' style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) '
                            }}>
                                    <div className='relative flex flex-col lgs:h-[10rem] lgs:w-[25rem] bg-primary justify-center rounded-t-md overflow-hidden items-center '>
                                        <img src={tool.image} alt='' className='object-cover h-40'/>
                                    </div>
                                    <div className='flex flex-col lgs:h-[10rem] lgs:w-[20rem] bg-primary rounded-b-lg justify-center items-center'>
                                            <p className='flex font-dmsans text-center lgs:w-[20rem] text-sm text-secondary'
                                            style={{
                                                fontWeight:'300'
                                            }}>
                                                {tool.description}
                                            </p>
                                    </div>
                                    <div className='relative flex flex-col lgs:h-[5rem] lgs:w-[25rem] bg-primary rounded-b-lg justify-center items-center'>
                                                <div className='absolute right-0 bottom-0 flex lgs:w-[15rem] rounded-tl-full items-center justify-center  lgs:h-[5rem] bg-gradient-to-r from-blue-950 to-theme01'>
                                                        <h2 className='text-lg font-dmsans text-primary'style={{
                                                            fontWeight:'200'
                                                        }}>
                                                            See more
                                                        </h2>
                                                </div>
                                    </div>
                            </div>

                            ))}    

                        </div>

                    </div> 

                    </div>


                    </section>

                    {/* Introduction Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>

                            <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                                        <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                            </div>
                            <div className={`relative flex flex-col bg-gradient-to-t overflow-hidden ${introSec ? 'h-[100rem] from-primary to-primary' : 'h-[15rem] from-blue-950 to-theme01'} w-full items-center justify-start transform-all duration-1000 ease-in-out`}>
                                    <div className='flex flex-col w-full h-auto items-center justify-start mt-12'>
                                                <h2 className={`font-kanit ${introSec ? 'text-6xl text-theme01' : 'text-5xl  text-primary'} text-primary text-center transform-all duration-700 ease-in-out`}
                                                style={{
                                                    fontWeight:'100'
                                                }}>
                                                    Want to Know More About {''}<h2 className='flex font-kanit items-center justify-center text-baseprimary' style={{fontWeight:'800' , paddingLeft: '0.8rem'}}>
                                                    {''}<span className='text-theme01'>SENSE</span>GRID     
                                                    </h2>
                                                </h2>
                                                
                                                <div className='flex flex-col h-auto w-auto lgs:mt-2 cursor-pointer hover:mt-4 items-center justify-center transform-all duration-700 ease-in-out' onClick={handleIntroSec}>
                                                                <h2 className={`font-kanit ${introSec ? 'text-2xl text-secondary' : 'text-2xl text-primary'}  transform-all duration-700 ease-in-out`}
                                                                style={{
                                                                    fontWeight:'100'
                                                                }}>
                                                                    Let's Observe
                                                                </h2>
                                                                <img src= {dropdown} alt='' className='object-cover lgs:h-5'/>
                                                </div>
                                                <div className='flex flex-col lgs:w-auto h-auto lgs:mt-4 items-center justify-center'>
                                                    <div className = 'flex flex-col lgs:w-[80vw] h-auto  items-center lgs:space-y-5 justify-evenly'>
                                                       <div className='flex w-auto lgs:w-[80vw] justify-evenly items-center'>
                                                           
                                                       <img src={sensegrid} alt='' className='object-cover lgs:w-[30rem] lgs:h-auto'/>

                                                            <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center justify-center lgs:space-y-4'>
                                                                <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                style={{fontWeight:'200'}}>
                                                                Who We Are
                                                                </h2>  
                                                                <p className='font-kanit text-md text-center text-secondary' style={{
                                                                    fontWeight:'200'
                                                                }}>
                                                                SenseGrid, powered by SLTMobitel, specializes in delivering advanced Industrial IoT solutions. Our focus is on improving efficiency, productivity, and sustainability across industries through innovative technologies. We are committed to providing customized, reliable, and transformative solutions that meet the unique needs of modern industrial operations.
                                                                </p>                                       
                                                            </div>
                                                        
                                                       </div>
                                                       <div className='flex w-auto lgs:w-[80vw] lgs:mt-12 justify-evenly items-center'>

                                                                <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center justify-center lgs:space-y-4'>
                                                                    <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Achievements
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md text-center text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Successfully designed and manufactured cutting-edge IoT solutions through the SLT-Mobitel Innovation Center.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md text-center text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Empowered industries with real-time monitoring and predictive technologies, significantly reducing downtime.
                                                                    </h2> 
                                                                                                                                        <h2 className='font-kanit text-md text-center text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Delivered cost-effective and scalable solutions tailored to diverse industrial sectors, fostering productivity and growth.
                                                                    </h2>                                      
                                                                </div>
                                                           
                                                           <img src={sensegrid1} alt='' className='object-cover lgs:w-[35rem] rounded-xl lgs:h-auto'/>
    

                                                            
                                                        </div>
                                                        <div className='flex w-auto lgs:w-[80vw] lgs:mt-12 justify-evenly items-center'>
                                                           
                                                           <img src={sensegrid2} alt='' className='object-cover lgs:w-[30rem] lgs:h-auto'/>
    
                                                                <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center justify-center lgs:space-y-4'>
                                                                    <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Solutions
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Machine Condition Monitoring: Real-time insights for predictive maintenance and enhanced performance
                                                                    </h2> 
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Process Optimization and Monitoring: Automated systems for increased efficiency and tailored dashboards.
                                                                    </h2> 
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Environment Monitoring Solutions: Comprehensive systems for regulatory compliance and advanced analytics.
                                                                    </h2>
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                   Energy Management Solutions: Tools for optimizing energy usage and reporting sustainability metrics.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Supply Chain Monitoring: Inventory tracking and logistics optimization for better visibility.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Remote Monitoring and Control: IoT-enabled solutions for efficient remote access and operations.
                                                                    </h2>                                           
                                                                </div>
                                                            
                                                        </div>
      

                                                    </div>


                                                </div>
                                                

                                    </div>  


                            </div>

                    </section>

                    {/* Introduction Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-center h-screen w-full'>

                   
                    </section>


            </div>

  )
}

export default LandingPage
