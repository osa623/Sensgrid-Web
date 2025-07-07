import React from 'react'

//images
import sensegrid from '../Assets/sensgrid1.png';
import sensegrid1 from '../Assets/sensegrid2.png';
import sensegrid2 from '../Assets/object02.png';
import dropdown from '../Assets/dropdown.png';

const AboutUs = ({darkMode}) => {
  return (
                  
        <section className={`flex flex-col overflow-hidden items-center ${darkMode ? ' bg-darkTheme' : 'bg-primary' } sms:mt-16 justify-center h-auto w-full`}>

                            <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl' data-aos='zoom-in'/>
                                        <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='zoom-in'/>
                                        <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='zoom-in'/>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl' data-aos='zoom-in'/>
                            </div>
                            <div className={`relative flex flex-col bg-transparent overflow-hidden lgs:h-[100rem] sms:h-[160rem] mds:h-[100rem] w-full items-center justify-start transform-all duration-1000 ease-in-out`}
                            style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) , inset 0px 5px 20px 1px rgba(0, 0, 0, 0.2)',
                            }}>
                                    <div className='flex flex-col w-full h-auto items-center justify-start mt-12'>
                                                <h2 className={`font-kanit text-theme01 lgs:text-5xl sms:text-3xl mds:text-4xl text-center transform-all duration-700 ease-in-out`}
                                                style={{
                                                    fontWeight:'300'
                                                }}>
                                                    Want to Know More About {''}<h2 className='flex font-kanit items-center justify-center text-baseprimary' style={{fontWeight:'800' , paddingLeft: '0.8rem'}}>
                                                    {''}<span className='text-theme01'>SENSE</span>GRID     
                                                    </h2>
                                                </h2>
                                                
                                                <div className='flex flex-col h-auto w-auto lgs:mt-2 cursor-pointer hover:mt-4 items-center justify-center transform-all duration-700 ease-in-out'>
                                                                <h2 className={`font-kanit text-2xl ${darkMode ? ' text-primary' : 'text-secondary' } transform-all duration-700 ease-in-out`}
                                                                style={{
                                                                    fontWeight:'100'
                                                                }}>
                                                                    Let's Observe
                                                                </h2>
                                                            
                                                </div>
                                                <div className='flex flex-col lgs:w-auto h-auto lgs:mt-4 items-center justify-center'>
                                                    <div className = 'flex flex-col lgs:w-[80vw] mds:w-[80vw] h-auto  items-center lgs:space-y-5 mds:space-y-5 justify-evenly'>
                                                       <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] justify-evenly items-center overflow-hidden'>
                                                           
                                                       <img src={sensegrid} alt='' className='object-cover lgs:w-[30rem] mds:w-[20rem] lgs:h-auto' data-aos='fade-right' data-aos-delay='350'/>

                                                            <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center space-y-4 justify-center overflow-hidden'>
                                                                <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                data-aos='fade-down ' data-aos-delay='400'
                                                                style={{fontWeight:'200'}}>
                                                                Who We Are
                                                                </h2>  
                                                                <p className={`font-kanit text-md mds:text-sm sms:text-center  ${darkMode ? 'text-primary ' : 'text-secondary'}  text-left sms:w-[80vw] `}
                                                                data-aos='fade-left' data-aos-delay='450' style={{
                                                                    fontWeight:'200'
                                                                }}>
                                                                SenseGrid, powered by SLTMobitel, specializes in delivering advanced Industrial IoT solutions. Our focus is on improving efficiency, productivity, and sustainability across industries through innovative technologies. We are committed to providing customized, reliable, and transformative solutions that meet the unique needs of modern industrial operations.
                                                                </p>                                       
                                                            </div>
                                                        
                                                       </div>
                                                       <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] mt-12  justify-evenly items-center'>

                                                           <img src={sensegrid1} alt='' className='object-cover lgs:w-[35rem] mds:w-[20rem] sms:mt-12 sms:w-[20rem] rounded-xl lgs:h-auto'
                                                            data-aos='fade-left' data-aos-delay='350'
                                                           />

                                                           
                                                                <div className = 'flex flex-col lgs:w-[30rem] sms:w-[80vw] mds:w-[80vw] h-auto space-y-4 overflow-hidden items-center justify-center lgs:space-y-4'>
                                                                    <h2 className='font-kanit text-5xl sms:mt-6 text-theme01 text-center'
                                                                    data-aos='fade-down' data-aos-delay='350'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Achievements
                                                                    </h2>  
                                                                    <h2 className={`font-kanit text-md mds:text-sm  text-left sms:text-center mds:w-[40vw]  sms:w-[80vw]  ${darkMode ? 'text-primary ' : 'text-secondary'} `}
                                                                     data-aos='fade-right' data-aos-delay='350' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Successfully designed and manufactured cutting-edge IoT solutions through the SLT-Mobitel Innovation Center.
                                                                    </h2>  
                                                                    <h2 className={`font-kanit text-md mds:text-sm  text-left sms:text-center mds:w-[40vw]  sms:w-[80vw]  ${darkMode ? 'text-primary ' : 'text-secondary'} `}
                                                                      data-aos='fade-right' data-aos-delay='400'
                                                                     style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Empowered industries with real-time monitoring and predictive technologies, significantly reducing downtime.
                                                                    </h2> 
                                                                   <h2 className={`font-kanit text-md mds:text-sm  text-left sms:text-center mds:w-[40vw]  sms:w-[80vw]  ${darkMode ? 'text-primary ' : 'text-secondary'} `}
                                                                   data-aos='fade-right' data-aos-delay='450' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Delivered cost-effective and scalable solutions tailored to diverse industrial sectors, fostering productivity and growth.
                                                                    </h2>                                      
                                                                </div>
                                                           
    

                                                            
                                                        </div>
                                                        <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] mt-12 lgs:pt-20 justify-evenly items-center'>
                                                           
                                                           <img src={sensegrid2} alt='' className='object-cover lgs:w-[30rem] mds:w-[20rem]  lgs:h-auto'
                                                                 data-aos='fade-right' data-aos-delay='350'
                                                           />
    
                                                                <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center justify-center overflow-hidden space-y-4'>
                                                                    <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                    data-aos='fade-down' data-aos-delay='350'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Solutions
                                                                    </h2>  
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='350' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Machine Condition Monitoring: Real-time insights for predictive maintenance and enhanced performance
                                                                    </h2> 
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='400' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Process Optimization and Monitoring: Automated systems for increased efficiency and tailored dashboards.
                                                                    </h2> 
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='450' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Environment Monitoring Solutions: Comprehensive systems for regulatory compliance and advanced analytics.
                                                                    </h2>
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='500' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                   Energy Management Solutions: Tools for optimizing energy usage and reporting sustainability metrics.
                                                                    </h2>  
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='550' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Supply Chain Monitoring: Inventory tracking and logistics optimization for better visibility.
                                                                    </h2>  
                                                                    <h2 className={`font-kanit text-md mds:text-sm sms:w-[80vw]  sms:text-center text-start ${darkMode ? 'text-primary ' : 'text-secondary'}`}
                                                                    data-aos='fade-left' data-aos-delay='600' style={{
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
  )
}

export default AboutUs
