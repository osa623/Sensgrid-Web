import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

//blog01
import blog01 from '../Assets/image01.png';
import portfolio1 from '../Assets/Nishan.png';
import subimage01 from '../Assets/blogimage02.png';
import subimage02 from '../Assets/blogimage03.png';

//blog02
import blog02 from '../Assets/image02.png';
import portfolio2 from '../Assets/Madeesha.png';


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


const blog = [
    {
      id: 1,
      title: 'WiFi AP vs. STA Mode in IoT devices.',
      subtitle: 'Which One is Right for Your Project?',
      introduction: [
        'Typically, IoT devices can run on two modes as AP (Access Point) and STA(Station). Station Mode (STA) is the standard mode for most WiFi devices. In this mode, a device connects to an existing network, much like your smartphone does when it connects to your home WiFi. In this scenario, your phone is functioning in Station Mode.',
        'In contrast, Access Point Mode (AP) transforms the device into an access point. Instead of joining a network, the device creates its own network, allowing other devices to connect directly to it. '
      ],
      image: blog01,
      profileimage : portfolio1,
      authorName : 'Nishan Dananjaya',
      authorTitle : 'Associate Embedded Engineer',
      date: 'January 28, 2025',
      topic1:'Why AP mode, what are the use cases? ',
      subimage01: subimage01,
      subtopic1: 'Why Use AP Mode?',
      subdescription1: 'AP mode offers numerous advantages for IoT devices, enabling them to create independent networks that facilitate seamless connectivity for other devices. Additionally, IoT devices can function as central hubs, managing connections for multiple wireless clients. AP mode seamlessly integrates with both wired and wireless networks, enhancing flexibility in various deployment scenarios',
      subtopic12: 'Use Cases',
      subdescription12: [
        'Smart Home Systems: AP mode is ideal for connecting multiple IoT devices within a smart home, ensuring reliable and efficient communication between devices. ',
        'Industrial IoT Gateways: In industrial environments, AP mode enables a gateway to collect and manage data from multiple connected devices, improving operational efficiency. ',
        'Remote Monitoring Systems: For applications such as agriculture or wildlife monitoring, AP mode allows multiple sensors to connect to a centralized device, providing real-time data collection and analysis. '
      ],
        topic2: "Why STA mode, what are the use cases?",
        subimage02: subimage02,
        subtopic21: "Why Use STA Mode?",
        subdescription21: "STA mode allows IoT devices to connect to existing Wi-Fi networks, providing seamless integration into established network infrastructures. This mode enables key functionalities such as cloud-based data storage, firmware updates, and remote access. Additionally, STA mode is more power-efficient than AP mode, making it ideal for battery-operated devices.",
        subtopic22 : "Use Cases",
        subdescription22 : [
            "Smart Appliances: Home devices like smart refrigerators, thermostats, and lighting systems use STA mode to connect to the home Wi-Fi network, allowing users to control them remotely via smartphones or voice assistants.",
            "Wearable Technology: Devices such as smartwatches and fitness trackers operate in STA mode to sync data with smartphones or cloud services, providing users with real-time health and activity information.",
            "Industrial Automation: In industrial settings, sensors and machinery equipped with IoT capabilities connect in STA mode to the facility's Wi-Fi network, enabling centralized monitoring, data collection, and process optimization."
      ],
      topic3: "How to select the AP or STA mode for your project?",
        subtopic31: "Key Considerations",
        subdescription31:  "When selecting between AP and STA modes, several factors should be considered to ensure optimal performance and integration.",
        subtopic32: "Selection Criteria",
        subdescription32 : [
            "Network Infrastructure: If an existing Wi-Fi network is available, STA mode allows devices to integrate seamlessly. If the device needs to operate independently or in an environment without existing Wi-Fi, AP mode enables it to establish its own network for direct connections.",
            "Device Roles and Communication: Devices designed as central hubs, managing multiple client devices (e.g., smart home controllers), are best suited for AP mode. In contrast, devices that send data to a central server or the cloud benefit from STA mode, leveraging the existing network for connectivity.",
            "Power Consumption: STA mode is generally more energy efficient, making it ideal for battery-powered devices due to its reduced connection management overhead.",
            "Security Considerations: AP mode can enhance security by creating a dedicated network that isolates traffic, while STA mode relies on the security protocols of the existing network, simplifying management but requiring trust in the network's safeguards.",
            "Scalability: AP mode is suitable for a limited number of devices connecting to a central hub, whereas STA mode is ideal for large-scale deployments, allowing devices to utilize an existing robust network infrastructure without requiring each one to manage its own network."
    ],


    },
    {
        id: 2,
        title: 'ESP32 FOTA Using GitHub  Repositories',
        subtitle: 'Simplifying OTA Updates with GitHub',
        introduction: [
          'Typically, IoT devices can run on two modes as AP (Access Point) and STA(Station). Station Mode (STA) is the standard mode for most WiFi devices. In this mode, a device connects to an existing network, much like your smartphone does when it connects to your home WiFi. In this scenario, your phone is functioning in Station Mode.',
          'In contrast, Access Point Mode (AP) transforms the device into an access point. Instead of joining a network, the device creates its own network, allowing other devices to connect directly to it. '
        ],
        image: blog02,
        profileimage : portfolio2,
        authorName : 'Madeehsa Lakshan',
        authorTitle : 'Associate Embedded Engineer',
        date: 'January 25, 2025'
  
      },
];





const LandingPage = () => {

    const [sectionExplanded , setSectionExpanded] = useState(false);   
    const [offersec , setOfferSec] = useState(false);
    const [introSec , setIntroSec] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const handleSectionExpand = () => {

        setSectionExpanded(!sectionExplanded);
    };

    const handleOfferSec = () => {

        setOfferSec(!offersec);
    };

    const handleIntroSec = () => {

        setIntroSec(!introSec);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting); // Set visibility when section is visible
          },
          { threshold: 0.1 } // Trigger when at least 10% of the section is visible
        );
    
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
      }, []);






  return (


            <div className='relative h-auto w-auto'>

                    {/* Hero Section */}
                    <section className='relative flex-col lgs:h-[100vh] sms:h-[60vh] mds:h-[30rem] lgs:mb-3 w-full z-10'>
                                
                                <div className='absolute flex-col w-full lgs:h-[100vh]  z-20'>

                                    <div className="hidden relative lgs:flex flex-col w-[100vw] h-[80vh] overflow-hidden">
                                        <img
                                        src={background}
                                        alt="Beach View"
                                        layout="fill"
                                        objectFit="cover"
                                        priority
                                        />
                                    </div>
                                    
                                    <div className="hidden bg-gradient-to-t from-theme01 to-blue-950 sms:flex mds:flex  w-full h-[50vh] mds:h-[20rem] overflow-hidden"/>

                                    <div className='flex bg-transparent lgs:w-[100vw] lgs:h-[20vh] sms:'/>


                                </div>

                                <div className='absolute flex-col flex w-full lgs:h-[100vh] z-30'>

                                        <div className='relative flex flex-col bg-transparent items-center justify-center sms:mt-36 mds:mt-24 sms:justify-start  w-[100vw] lgs:h-[80vh]'>
                                            
                                            <div className='flex flex-col items-center cursor-pointer justify-center lgs:space-y-4 sms:w-[70vw] lgs:w-[80vw] mds:w-[60vw]'>
                                                <h2 className='font-dmsans lg:text-7xl sms:text-4xl text-center mds:text-5xl text-primary'>Powering the <span className='font-bold text-baseprimary'>Next Generation</span></h2>
                                                <h2 className='font-dmsans lg:text-7xl sms:text-4xl text-center mds:text-5xl text-baseprimary'>of Smart <span className='font-bold text-primary'>IoT Solutions</span></h2>
                                            </div>
                                            <div className='hidden lgs:flex w-auto h-auto lgs:mt-8 sms:mt-6'>
                                                <button className='flex bg-blue-800 lgs:w-[10rem] lgs:h-[3rem] items-center justify-center cursor-pointer  text-primary font-dmsans text-md p-4 rounded-3xl hover:bg-blue-900 hover:text-baseprimary'
                                                style={{
                                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                                }}>
                                                Get Started
                                                </button>
                                        </div>

                                        </div>




                                </div>

                                <div className={`absolute ${sectionExplanded ? 'lgs:-bottom-2 sms:bottom-20 mds:bottom-4' : 'bottom-20 sms:bottom-0' } flex-col bg-transparent lgs:w-[100vw] lgs:h-auto sms:h-[20vh] z-50 transfrom-700 duration-700 ease-in-out`}>

                                    <div className='flex bg-transparent items-center justify-center w-[100vw] lg:h-auto space-x-6'>
                                    
                                        <div className={`relative flex lgs:w-[60rem] sms:w-[90vw] mds:w-[75vw] overflow-hidden ${sectionExplanded ? 'lgs:h-[20rem] h-[20rem]' : 'lgs:h-[12rem] h-[8rem]'} bg-theme01 items-center justify-center  rounded-3xl transform-all duration-700 ease-in-out`} style={{
                                            boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                        }}>
                                            <div className='absolute flex w-full blur-sm h-auto overflow-hidden z-20'>
                                                <img src={'background2'} alt='' className='flex object-cover'/>
                                            </div>
                                            <div className={`absolute flex flex-col ${sectionExplanded ? 'lgs:h-[20rem] space-y-5' : 'lgs:h-[12rem] space-y-2'}  items-center justify-center lgs:w-[60rem] overflow-hidden transform-all duration-700 ease-in-out z-30`}>
                                                <h2 className={`font-kanit ${sectionExplanded ? 'lgs:text-5xl text-4xl' : 'lgs:text-8xl text-5xl'}  text-primary font-bold text-center transform-all duration-700 ease-in-out`}>
                                                    INDUSTRY {''}<span className='font-kanit font-thin text-primary'>4.0</span>
                                                </h2>
                                                <div
                                                        className={`${
                                                            sectionExplanded ? 'lgs:w-[45rem] opacity-100' : 'lgs:w-[45rem] opacity-0 pointer-events-none'
                                                        } transition-all duration-700 ease-in-out`}
                                                        >
                                                        {sectionExplanded && (
                                                            <p className="font-kanit text-primary text-md sms:text-sm sms:w-[75vw] mds:w-[60vw] text-center" style={{
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
                                                    <img src= {dropdown} alt='' className='object-cover h-5'/>
                                                </div>
                                            </div>

                                        </div>

                                        

                                    </div>
                                    
                                </div>  

                                




                    </section>

                    {/* Offering Section */}
                    <section ref={sectionRef} className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>

                        <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                    <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                        </div>

                        <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center'>
                            <div className='group flex flex-col w-auto h-auto'>
                                    <h2 className='group flex flex-col font-kanit text-center font-medium lgs:text-8xl mds:text-5xl sms:text-4xl text-theme01 transform-all duration-1000 ease-in-out'>
                                        What We Provide{''} 
                                    </h2>  
                                    <h2 className='flex flex-col font-kanit lgs:text-4xl mds:text-xl sms:text-md text-theme01' style={{
                                        fontWeight:'200'
                                    }}>
                                        Unified Control System for Sensors and Machines{''}<div className='flex lgs:w-1/4 h-[0.1rem] bg-green-500 group-hover:lgs:w-full  transform-all duration-1000 ease-in-out'/>
                                </h2>   

                            </div>
                        </div> 

                        <div className='hidden sms:flex lgs:flex sms:flex-col w-[80vw] h-auto items-center lgs:space-x-5 sms:space-y-5 justify-center mt-12 lgs:p-5'>

                            {details.slice(0,3).map((tool) => (

                                <div ref={sectionRef} key={tool.id} className='hidden group overflow-hidden lgs:flex sms:flex flex-col sms:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' style={{
                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'
                                }}>
                                    <div className={`relative flex flex-col h-[10rem] w-[20rem] justify-center rounded-md  ${isVisible ? 'sms:scale-150' : 'sms:scale-100'} overflow-hidden items-center group-hover:scale-150 transform-all duration-700 ease-in-out z-20`}>
                                        <img src={tool.image} alt='' className='object-cover'/>
                                    </div>
                                    <div className='flex flex-col h-[2rem] w-[20rem] bg-theme01 justify-center items-center z-30'>
                                        <h2 className='font-dmsans text-center lgs:w-[15rem] text-md text-primary'
                                            style={{
                                                fontWeight:'600'
                                            }}>
                                                {tool.title}
                                            </h2>
                                    </div>
                                    <div className='flex flex-col h-[6rem] w-[20rem] bg-primary rounded-b-lg justify-center items-center z-30'>
                                            <p className='font-kanit text-center w-[15rem] text-sm text-secondary'
                                            style={{
                                                fontWeight:'200'
                                            }}>
                                                {tool.description}
                                            </p>
                                    </div>

                                </div>

                            ))} 


                        </div>     

                        <div className='hidden sms:flex lgs:flex sms:flex-col w-[80vw] h-auto items-center lgs:space-x-5 sms:mt-6  sms:space-y-5 justify-center lgs:p-5'>

                        {details.slice(3,6).map((tool) => (

                            <div ref={sectionRef} key={tool.id} className='hidden group overflow-hidden lgs:flex sms:flex flex-col sms:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'
                            }}>
                                <div className={`relative flex flex-col h-[10rem] w-[20rem] justify-center rounded-md  ${isVisible ? 'sms:scale-150' : 'sms:scale-100'} overflow-hidden items-center group-hover:scale-150 transform-all duration-700 ease-in-out z-20`}>
                                    <img src={tool.image} alt='' className='object-cover'/>
                                </div>
                                <div className='flex flex-col h-[2rem] w-[20rem] bg-theme01 justify-center items-center z-30'>
                                    <h2 className='font-dmsans text-center lgs:w-[15rem] text-md text-primary'
                                        style={{
                                            fontWeight:'600'
                                        }}>
                                            {tool.title}
                                        </h2>
                                </div>
                                <div className='flex flex-col h-[6rem] w-[20rem] bg-primary rounded-b-lg justify-center items-center z-30'>
                                        <p className='font-kanit text-center w-[15rem] text-sm text-secondary'
                                        style={{
                                            fontWeight:'200'
                                        }}>
                                            {tool.description}
                                        </p>
                                </div>

                            </div>

                            ))}
                       </div> 

                       {/* Medium Screen Section*/}

                       <div className='hidden mds:grid grid-cols-2 gap-5 w-[80vw] h-auto items-center justify-center place-items-center mt-12 mx-auto'>
                                {details.map((tool) => (
                                    <div
                                        key={tool.id}
                                        className='group overflow-hidden flex-col mds:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]'
                                        style={{
                                            boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2), inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                        }}
                                    >
                                        <div className='relative flex flex-col h-[10rem] w-[20rem] justify-center rounded-md overflow-hidden items-center group-hover:scale-150 transform-all duration-700 ease-in-out z-20'>
                                            <img src={tool.image} alt='' className='object-cover' />
                                        </div>
                                        <div className='flex flex-col h-[2rem] w-[20rem] bg-theme01 justify-center items-center z-30'>
                                            <h2
                                                className='font-dmsans text-center lgs:w-[15rem] text-md text-primary'
                                                style={{
                                                    fontWeight: '600',
                                                }}
                                            >
                                                {tool.title}
                                            </h2>
                                        </div>
                                        <div className='flex flex-col h-[6rem] w-[20rem] bg-primary rounded-b-lg justify-center items-center z-30'>
                                            <p
                                                className='font-kanit text-center w-[15rem] text-sm text-secondary'
                                                style={{
                                                    fontWeight: '200',
                                                }}
                                            >
                                                {tool.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                       </div>


                      <div className='flex bg-transparent lgs:w-auto h-[5rem] items-center lgs:space-x-2 justify-center'>
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
                                <h2 className='group flex flex-col font-kanit text-center font-medium lgs:text-8xl mds:text-5xl sms:text-4xl text-theme01 transform-all duration-1000 ease-in-out'>
                                    Our Partners{''} 
                                </h2>  
                                <h2 className='flex flex-col font-kanit lgs:text-4xl sms:text-md mds:text-xl text-theme01' style={{
                                    fontWeight:'200'
                                }}>
                                    Partnering with Leaders to Build Success Together.{''}<div className='flex lgs:w-1/4 h-[0.1rem] bg-green-500 group-hover:lgs:w-full  transform-all duration-1000 ease-in-out'/>
                               </h2>   

                        </div>

                        <div className='flex sms:flex-col w-[80vw] h-auto items-center mds:space-x-5 lgs:space-x-5 sms:space-y-5 justify-center mt-12'>
                                    
                            {partners.slice(0,3).map((tool) => (

                            <div key={tool.id} className='flex flex-col lgs:w-[25rem] sms:w-[22rem] mds:w-[20rem] overflow-hidden bg-primary cursor-pointer items-center justify-center rounded-lg lgs:h-[25rem]' style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) '
                            }}>
                                    <div className='relative flex flex-col h-[10rem] lgs:w-[25rem] mds:w-[15rem] sms:w-[22rem] bg-primary justify-center rounded-t-md overflow-hidden items-center '>
                                        <img src={tool.image} alt='' className='object-cover h-40 mds:h-20'/>
                                    </div>
                                    <div className='flex flex-col h-[10rem] lgs:w-[20rem] mds:w-[20rem] bg-primary rounded-b-lg justify-center items-center smsLp-4'>
                                            <p className='flex font-dmsans text-center w-[20rem]  mds:w-[10rem] text-sm mds:text-xs text-secondary'
                                            style={{
                                                fontWeight:'300'
                                            }}>
                                                {tool.description}
                                            </p>
                                    </div>
                                    <div className='relative flex flex-col h-[5rem] lgs:w-[25rem] sms:w-[22rem] mds:w-[20rem]  bg-primary rounded-b-lg justify-center items-center'>
                                                <div className='absolute right-0 bottom-0 flex w-[15rem] rounded-tl-full items-center justify-center h-[4rem] bg-gradient-to-r from-blue-950 to-theme01'>
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
                        <div className='hidden sms:flex mds:flex bg-transparent lgs:w-auto h-[5rem] items-center justify-center'/>

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
                            <div className={`relative flex flex-col bg-primary overflow-hidden ${introSec ? 'lgs:h-[100rem] sms:h-[160rem] mds:h-[100rem]' : 'lgs:h-[15rem] sms:h-[15rem] mds:h-[15rem]'} w-full items-center justify-start transform-all duration-1000 ease-in-out`}
                            style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) , inset 0px 5px 20px 1px rgba(0, 0, 0, 0.2)',
                            }}>
                                    <div className='flex flex-col w-full h-auto items-center justify-start mt-12'>
                                                <h2 className={`font-kanit text-theme01 ${introSec ? 'lgs:text-3xl sms:text-3xl mds:text-4xl' : 'lgs:text-4xl text-3xl'} text-center transform-all duration-700 ease-in-out`}
                                                style={{
                                                    fontWeight:'100'
                                                }}>
                                                    Want to Know More About {''}<h2 className='flex font-kanit items-center justify-center text-baseprimary' style={{fontWeight:'800' , paddingLeft: '0.8rem'}}>
                                                    {''}<span className='text-theme01'>SENSE</span>GRID     
                                                    </h2>
                                                </h2>
                                                
                                                <div className='flex flex-col h-auto w-auto lgs:mt-2 cursor-pointer hover:mt-4 items-center justify-center transform-all duration-700 ease-in-out' onClick={handleIntroSec}>
                                                                <h2 className={`font-kanit ${introSec ? 'text-2xl text-secondary' : 'text-xl text-secondary'}  transform-all duration-700 ease-in-out`}
                                                                style={{
                                                                    fontWeight:'100'
                                                                }}>
                                                                    Let's Observe
                                                                </h2>
                                                                <img src= {dropdown} alt='' className='object-cover h-6 '/>
                                                </div>
                                                <div className='flex flex-col lgs:w-auto h-auto lgs:mt-4 items-center justify-center'>
                                                    <div className = 'flex flex-col lgs:w-[80vw] mds:w-[80vw] h-auto  items-center lgs:space-y-5 mds:space-y-5 justify-evenly'>
                                                       <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] justify-evenly items-center'>
                                                           
                                                       <img src={sensegrid} alt='' className='object-cover lgs:w-[30rem] mds:w-[20rem] lgs:h-auto'/>

                                                            <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center space-y-4 justify-center'>
                                                                <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                style={{fontWeight:'200'}}>
                                                                Who We Are
                                                                </h2>  
                                                                <p className='font-kanit text-md mds:text-sm text-center sms:w-[80vw] text-secondary' style={{
                                                                    fontWeight:'200'
                                                                }}>
                                                                SenseGrid, powered by SLTMobitel, specializes in delivering advanced Industrial IoT solutions. Our focus is on improving efficiency, productivity, and sustainability across industries through innovative technologies. We are committed to providing customized, reliable, and transformative solutions that meet the unique needs of modern industrial operations.
                                                                </p>                                       
                                                            </div>
                                                        
                                                       </div>
                                                       <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] mt-12  justify-evenly items-center'>

                                                                <div className = 'flex flex-col lgs:w-[30rem] sms:w-[80vw] mds:w-[80vw] h-auto space-y-4  items-center justify-center lgs:space-y-4'>
                                                                    <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Achievements
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md mds:text-sm  text-center mds:w-[40vw]  sms:w-[80vw] text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Successfully designed and manufactured cutting-edge IoT solutions through the SLT-Mobitel Innovation Center.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md mds:text-sm text-center  mds:w-[40vw]   sms:w-[80vw] text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Empowered industries with real-time monitoring and predictive technologies, significantly reducing downtime.
                                                                    </h2> 
                                                                   <h2 className='font-kanit text-md mds:text-sm  text-center  mds:w-[40vw]   sms:w-[80vw] text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Delivered cost-effective and scalable solutions tailored to diverse industrial sectors, fostering productivity and growth.
                                                                    </h2>                                      
                                                                </div>
                                                           
                                                           <img src={sensegrid1} alt='' className='object-cover lgs:w-[35rem] mds:w-[20rem] sms:mt-12 sms:w-[20rem] rounded-xl lgs:h-auto'/>
    

                                                            
                                                        </div>
                                                        <div className='flex sms:flex-col w-auto lgs:w-[80vw] mds:w-[80vw] mt-12 justify-evenly items-center'>
                                                           
                                                           <img src={sensegrid2} alt='' className='object-cover lgs:w-[30rem] mds:w-[20rem]  lgs:h-auto'/>
    
                                                                <div className = 'flex flex-col lgs:w-[30rem] h-auto items-center justify-center space-y-4'>
                                                                    <h2 className='font-kanit text-5xl text-theme01 text-center'
                                                                    style={{fontWeight:'200'}}>
                                                                    Our Solutions
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Machine Condition Monitoring: Real-time insights for predictive maintenance and enhanced performance
                                                                    </h2> 
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Process Optimization and Monitoring: Automated systems for increased efficiency and tailored dashboards.
                                                                    </h2> 
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Environment Monitoring Solutions: Comprehensive systems for regulatory compliance and advanced analytics.
                                                                    </h2>
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                   Energy Management Solutions: Tools for optimizing energy usage and reporting sustainability metrics.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
                                                                        fontWeight:'200'
                                                                    }}>
                                                                    Supply Chain Monitoring: Inventory tracking and logistics optimization for better visibility.
                                                                    </h2>  
                                                                    <h2 className='font-kanit text-md mds:text-sm sms:w-[80vw] sms:text-center text-start text-secondary' style={{
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
                    <section className='flex flex-col overflow-hidden items-center justify-start sms:mt-5 h-screen w-full'>

                            <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                                        <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= 'flex bg-secondary lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl'/>
                            </div>
                            <div className='group flex flex-col w-auto h-auto cursor-pointer'>
                                <h2 className='group flex flex-col font-kanit text-center font-medium lgs:text-8xl mds:text-5xl sms:text-4xl text-theme01 transform-all duration-1000 ease-in-out'>
                                    Blogs{''} 
                                </h2>  
                                <h2 className='flex flex-col font-kanit lgs:text-xl lgs:w-[40vw] justify-center items-center text-center sms:text-md mds:text-xl text-theme01' style={{
                                    fontWeight:'200'
                                }}>
                                    Partnering with Leaders to Build Success Together.{''}
                                    
                               </h2>   

                           </div>
                           <div className='flex sms:flex-col h-auto w-full items-center justify-center lgs:space-x-5 sms:space-y-4 mt-12'>
                            
                            {blog.map((tool)=> (
                                <div key={tool.id} className='flex flex-col lgs:w-[25rem] sms:w-[22rem] mds:w-[20rem] overflow-hidden bg-primary cursor-default items-center justify-center rounded-lg lgs:h-[22rem]' style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) '
                            }}>
                                    <div className='relative flex flex-col h-[12rem] lgs:w-[25rem] mds:w-[15rem] sms:w-[22rem] bg-primary justify-center rounded-t-md overflow-hidden items-center '>
                                        <img src={tool.image} alt='' className='object-cover scale-150 h-40 mds:h-20'/>
                                        <div className='absolute top-0 right-0 flex flex-col h-[2rem] w-[5rem] rounded-bl-2xl bg-blue-700 justify-center items-center'
                                        style={{
                                            boxShadow: '0px 5px 8px 2px rgba(0, 0, 0, 0.5) , inset 0px 4px 5px 2px rgba(255, 255, 255, 0.4)',
                                        }}>
                                            <span className='text-primary font-dmsans text-md'>blog #{tool.id}</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col h-[5rem] lgs:w-[25rem] mds:w-[20rem] sms:w-[22rem] bg-transparent lgs:rounded-t-xl justify-center items-start p-2'>
                                       <h2 className='font-dmsans text-start lgs:w-[25rem] sms:w-[22rem] lgs:text-lg sms:text-md text-blue-900' style={{
                                        fontWeight:'800'
                                       }}>
                                             {tool.title}
                                       </h2>
                                       <h2 className='font-dmsans text-start w-[25rem] text-sm sms:text-xs text-secondary' style={{
                                        fontWeight:'200'
                                       }}>
                                             {tool.subtitle}
                                       </h2>

                                    </div>
                                    <div className='flex h-[5rem] lgs:w-[25rem] mds:w-[20rem] sms:w-[22rem]  bg-transparent  justify-center items-center sms:p-1'>
                                       <div className='flex lgs:w-[15rem] sms:w-[15rem] h-[5rem] items-center justify-start lgs:p-2'>

                                         <div className='flex w-[3.5rem] h-[3.5rem] items-center justify-center lgs:border-2 border-blue-400 overflow-hidden bg-theme01 rounded-full'>
                                            <img src= {tool.profileimage} alt='' className='object-cover rounded-full'/>
                                         </div>
                                         <div className='flex flex-col ml-2'>
                                            <h2 className='font-dmsans text-sm text-secondary' style={{
                                                fontWeight:'500'
                                            }}>
                                                {tool.authorName}
                                            </h2>
                                            <h2 className='font-dmsans text-secondary' style={{
                                                fontWeight:'200',
                                                fontSize:'10px'
                                            }}>
                                                {tool.authorTitle}
                                            </h2>
                                            <h2 className='font-dmsans text-secondary' style={{
                                                fontWeight:'200',
                                                 fontSize:'9px'
                                            }}>
                                                {tool.date}
                                            </h2>
                                         </div>

                                      </div>
                                       <div className='flex lgs:w-[10rem] sms:w-[7rem]  h-[4rem] items-center justify-center'>

                                         <div  onClick={() => navigate(`/blog/${tool.id}`, { state: { tool } })}  className='flex lgs:w-[8rem] sms:w-[6rem] sms:h-[3rem] lgs:h-[2.5rem] bg-blue-600 rounded-xl cursor-pointer items-center justify-center' style={{
                                            boxShadow: '0px 5px 8px 2px rgba(0, 0, 0, 0.3) , inset 0px 4px 5px 2px rgba(255, 255, 255, 0.4)',
                                         }}>
                                           <h2 className='font-dmsans text-white text-md' style={{}}>
                                             Read
                                           </h2>'

                                         </div>

                                       </div>

                                    
                                    </div>

                            </div>
                            ))}

                           </div>
                           <div className='flex bg-transparent lgs:w-auto h-[5rem] items-center justify-center'/>
                    
                    </section>


            </div>

  )
}

export default LandingPage
