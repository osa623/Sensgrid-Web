import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';

//backgrounds
import backgroundVideo from '../Assets/backgroundVideo.mp4';
import backgroundImageDetail from '../Assets/swiperBackground.jpg';

//details images
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


//blog01
import blog01 from '../Assets/image01.png';
import portfolio1 from '../Assets/Nishan.png';
import subimage01 from '../Assets/blogimage02.png';
import subimage02 from '../Assets/blogimage03.png';
import subimage03 from '../Assets/Picture1.png';

//blog02
import blog02 from '../Assets/image02.png';
import portfolio2 from '../Assets/Madeesha.png';
import blog2chart from '../Assets/blog2chart.png';
import blog2chart2 from '../Assets/blog2chart2.png';

//portraits
import portrait from '../Assets/Portrait.jpg';


//powered By images
import espressif from '../Assets/espressif.png';
import nvidia from '../Assets/nvidia.png';
import rasberryPi from '../Assets/rasberryPi.png';
import arduino from '../Assets/arduino.png';

//css
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import '../Components/Swiper.css';
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaArrowCircleUp, FaArrowUp } from 'react-icons/fa';



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
      subimage03: subimage03,
        subdescription31:  "When selecting between AP and STA modes, several factors should be considered to ensure optimal performance and integration.",
        subdescription32 : [
            "Network Infrastructure plays a key role in this decision. If an existing Wi-Fi network is available, STA mode allows devices to seamlessly integrate into the current setup without the need to create a separate network. Conversely, if the device needs to operate independently or in an environment without existing Wi-Fi, AP mode enables it to establish its own network for direct connections.",
            "Device Roles and Communication are also critical. Devices designed to act as central hubs, managing multiple client devices like smart home controllers, are best suited for AP mode. In contrast, devices that need to send data to a central server or the cloud benefit from STA mode, leveraging the existing network for connectivity.",
            "Power Consumption is another consideration, as STA mode is generally more energyefficient, making it ideal for battery-powered devices due to its reduced connection management overhead.",
            "Security Considerations must also be evaluated; AP mode can enhance security by creating a dedicated network that isolates traffic, while STA mode relies on the security protocols of the existing network, which may simplify management but requires trust in the network's safeguards",
            "Lastly, Scalability is important for deployment. AP mode is well-suited for scenarios involving a limited number of devices connecting directly to a central device. For largescale deployments, STA mode is preferable, as it allows devices to utilize a robust existing network infrastructure, accommodating numerous devices without requiring each one to manage its own network."
    ],
        topic4: "Conclusion",
        subimage04: "",
        subtopic41: " ",
        subdescription41: "Choosing between AP and STA modes for your IoT project depends on the specific requirements of your application. AP mode is ideal for scenarios where the device needs to create its own network, act as a central hub, or operate in environments without existing infrastructure. On the other hand, STA mode is better suited for devices that need to connect to an existing network, prioritize power efficiency, or integrate seamlessly into large-scale deployments. By carefully evaluating factors such as network infrastructure, device roles, power consumption, security, and scalability, you can determine which mode best aligns with your project's goals. Both modes have their unique advantages, and the right choice will ensure optimal performance and functionality for your IoT solution.",
        subtopic42 : " ",
        subdescription42 : [],

        topic5: "",
        subimage05: "",
        subtopic51: "",
        subdescription51: "",
        subtopic52 : "",
        subdescription52 : [],

        topic6: "",
        subimage06: "",
        subtopic61: "",
        subdescription61: "",
        subtopic62 : "",
        subdescription62 : [],

        },
    {
        id: 2,
        title: 'ESP32 FOTA Using GitHub  Repositories',
        subtitle: 'Simplifying OTA Updates with GitHub',
        introduction: [],
        image: blog02,
        profileimage : portfolio2,
        authorName : 'Madeehsa Lakshan',
        authorTitle : 'Associate Embedded Engineer',
        date: 'January 25, 2025',
        topic1:'Introduction',
      subimage01: 'blog02',
      subtopic1: '',
      subdescription1: 'Firmware Over-The-Air (FOTA) is one of the most important features of IoT devices, which allows users to upgrade firmware without physical access to the devices. This FOTA update mechanism allows a device to update itself based on data received while the normal firmware is running. This blog post will discuss the implementation of FOTA updates for ESP32 using a GitHub (private or public) repository (SSL).',
      subtopic12: '',
      subdescription12: [],
        topic2: "How it works",
        subimage02: blog2chart,
        subtopic21: "",
        subdescription21: "ESP32 connects to the internet and establishes a secure connection with the GitHub server. Then ESP periodically checks with the saved version file and compares with the current version. If a new version is detected, end devices download the firmware binary file to a different partition and perform an OTA update.",
        subtopic22 : "",
        subdescription22 : [],
        topic3: "Use Case:  ESP32 FOTA update using GitHub private repositories",
        subimage03: blog2chart2,
        subdescription31:  "",
        subdescription32 : [],
    topic4: "Key Components and Architecture",
    subimage04: "",
    subtopic41: "Firmware Version Management",
    subdescription41: "",
    subtopic42 : "A JSON file on GitHub stores the current firmware version and download URL",
    subdescription42 : [
        "A JSON file on GitHub stores the current firmware version and download URL",
        "The ESP32 compares its current version with the server-side version",
        "If a new version is detected, it initiates the download and update process"       
   ],
   topic5: "",
   subimage05: "",
   subtopic51: "Secure Connectivity",
   subdescription51: "",
   subtopic52 : "Security is paramount in this implementation",
   subdescription52 : [

    "Uses WiFiClientSecure for encrypted connections",
    "Supports loading custom Root CA certificates",
    "Authenticates GitHub API requests using Personal Access Tokens (PAT)",
    "Stores WiFi credentials securely in LittleFS"
           
  ],

  topic6: "",
  subimage06: "",
  subtopic61: "Rollback Mechanism",
  subdescription61: "",
  subtopic62 : "An innovative feature allows hardware-triggered firmware rollback",
  subdescription62 : [
    "A dedicated pin can trigger a return to the previous firmware version",
    "Provides a safety net if a new firmware update causes unexpected issues"
          
 ],

  
      },
];

const testimonial = [
    {
      id: 1,
      description: 'SenseGrid team delivered a seamless industrial plant monitoring solution at our Galle factory that exceeded our expectations. Their expertise, proactive communication, and unwavering support ensured a smooth implementation and boosted our production efficiency. We highly recommend SenseGrid Products for their exceptional service and commitment to client success. Looking forward to expand to our subsidiaries.',
      name : 'Mr. Sanderuwan',
      image: portrait
    },
    {
      id: 2,
      description: 'SenseGrid team has been an outstanding partner in deploying our DHL warehouse monitoring system. Their technical expertise, quick implementation and support have resulted in seamless implementation and greatly enhanced operational oversight. We highly recommend SenseGrid solution for their professionalism and dedication to delivering top-tier monitoring solutions.',
      name : 'Mr. Abewardena',
      image: portrait
    },
    {
    id: 3,
    description: 'SenseGrid team has been an outstanding partner in deploying our DHL warehouse monitoring system. Their technical expertise, quick implementation and support have resulted in seamless implementation and greatly enhanced operational oversight. We highly recommend SenseGrid solution for their professionalism and dedication to delivering top-tier monitoring solutions.',
    name : 'Mr. Nimantha',
    image: portrait
  }

];

const DYN = [
    { 
        id: 1, 
        title: 'IoT and Smart Mobility Integration',
        image : backgroundImageDetail,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed turpis nec ipsum malesuada vehicula. Curabitur faucibus velit nec erat elementum, id tempus ligula pharetra.' 
    },
    { 
        id: 2, 
        title: 'Real-Time Data Processing in IoT', 
        image : backgroundImageDetail,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod libero vel urna ultricies, id malesuada erat sagittis. Duis ut tortor in velit auctor tincidunt at non augue.' 
    },
    { 
        id: 3, 
        title: 'Edge Computing in IoT Networks', 
        image : backgroundImageDetail,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed justo ac ligula ultricies convallis. Sed varius ex ut nunc tristique, ut dignissim libero dignissim.' 
    },
    { 
        id: 4, 
        title: 'Sensor Fusion in IoT Applications', 
        image : backgroundImageDetail,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec lectus nec urna feugiat dapibus non ac lorem. Donec rhoncus nunc et ligula convallis, sit amet aliquet neque scelerisque.' 
    },
    { 
        id: 5, 
        title: 'AI-Powered IoT for Traffic Management', 
        image : backgroundImageDetail,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis metus et arcu vehicula, in tristique velit mattis. Ut convallis dolor et ligula vestibulum, non dapibus libero cursus.' 
    }
];




const LandingPage = ({darkMode}) => {


    //other hooks
    const [sectionExplanded , setSectionExpanded] = useState(false);   
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    


    const handleSectionExpand = () => {

        setSectionExpanded(!sectionExplanded);
    };


    useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
        setLoading(false);       
        console.log("Fetched articles:", response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
        

        
      }
    };
    fetchArticles();
  }, []);

    


    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting); // Set visibility when section is visible
          },
          { threshold: 0.1 } // Trigger when at least 10% of the section is visible
        );
    
        const currentSectionRef = sectionRef.current;
        if (currentSectionRef) {
          observer.observe(currentSectionRef);
        }
    
        return () => {
          if (currentSectionRef) observer.unobserve(currentSectionRef);
        };
      }, []);

      useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);

    






  return (


            <div className={`relative h-auto w-auto ${darkMode ? 'bg-darkTheme' : ''}`}>

                    {/* Hero Section */}
                    <section  className={`relative flex-col lgs:h-[100vh] bg-transparent sms:h-[60vh] mds:h-[30rem] lgs:mb-3 w-full z-10`}>
                                
                                <div className='absolute flex-col w-full lgs:h-[100vh]  z-20'>

                                    <div className="hidden relative bg-transparent lgs:flex sms:flex flex-col w-[100vw] h-[80vh] sms:h-auto overflow-hidden z-30">
                                        <video src={backgroundVideo} autoPlay loop muted className='object-cover sms:h-[50vh]'/>
                                    </div>
                                    
                                    
                                    

                                    <div className='flex bg-transparent lgs:w-[100vw] lgs:h-[20vh] sms:'/>


                                </div>

                                <div className='absolute flex-col flex w-full lgs:h-[100vh] z-30'>

                                        <div className='relative flex flex-col bg-transparent  items-center justify-center sms:mt-36 mds:mt-24 sms:justify-start  w-[100vw] lgs:h-[80vh]'>
                                            
                                            <div className='flex flex-col items-center cursor-pointer justify-center lgs:space-y-4 sms:w-[70vw] lgs:w-[80vw] mds:w-[60vw] overflow-hidden'>
                                                <h2 className='font-dmsans lg:text-7xl sms:text-4xl text-center mds:text-5xl text-shadow-xl text-primary' data-aos='fade-down'>Powering the <span className='font-bold text-shadow-xl text-baseprimary' data-aos='fade-up'>Next Generation</span></h2>
                                                <h2 className='font-dmsans lg:text-7xl sms:text-4xl text-center mds:text-5xl text-shadow-xl text-baseprimary' data-aos='fade-up'>of Smart <span className='font-bold text-shadow-xl text-primary'>IoT Solutions</span></h2>
                                            </div>
                                            <div className='hidden lgs:flex sms:flex w-auto h-auto lgs:mt-8 sms:mt-3'>
                                                <Link to={'/aboutUs'} className='flex bg-blue-800 w-[10rem] lgs:h-[3rem] items-center justify-center cursor-pointer  text-primary font-dmsans text-md p-4 rounded-3xl hover:bg-blue-900 hover:text-baseprimary'
                                                style={{
                                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                                }}>
                                                Who are we?
                                                </Link>
                                        </div>

                                        </div>




                                </div>

                                <div className={`absolute ${sectionExplanded ? 'lgs:-bottom-2 sms:bottom-20 mds:bottom-4' : 'bottom-20 sms:bottom-0' } flex-col lgs:w-[100vw] lgs:h-auto sms:h-[15vh]  z-50 transfrom-700 duration-700 ease-in-out`}>

                                    <div className={`flex  items-center justify-center w-[100vw]  lg:h-auto  space-x-6 overflow-hidden`}>
                                    
                                        <div className={`relative flex lgs:w-[60rem] sms:w-[90vw] mds:w-[75vw]  overflow-hidden ${sectionExplanded ? 'lgs:h-[20rem] h-[25rem] sms:mt-12' : 'lgs:h-[12rem] h-[25rem] sms:mt-0'} items-center justify-center ${darkMode ? 'border-2 bg-gray-900' : 'bg-theme01'}   rounded-3xl sms:py-3 transform-all duration-700 ease-in-out`}
                                             style={{
                                            boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)',
                                        }}>
                                            <div className='absolute flex w-full blur-sm h-auto overflow-hidden z-20'>
                                                <img src={'background2'} alt='' className='flex object-cover'/>
                                            </div>
                                            <div className={`absolute flex flex-col ${sectionExplanded ? 'lgs:h-[20rem] space-y-5' : 'lgs:h-[12rem] space-y-2'} ${darkMode ? ' bg-gray-900' : 'bg-theme01'}  items-center justify-center  lgs:w-[60rem] overflow-hidden sms:py-2 transform-all duration-700 ease-in-out z-30`}>
                                                <h2 className={`font-bricolagegrotesque ${sectionExplanded ? 'lgs:text-5xl text-4xl' : 'lgs:text-8xl text-5xl'}  text-primary font-bold text-center transform-all duration-700 ease-in-out`}>
                                                    INDUSTRY {''}<span className='font-kanit font-thin text-primary'>4.0</span>
                                                </h2>
                                                <div
                                                        className={`${
                                                            sectionExplanded ? 'lgs:w-[45rem] opacity-100 ' : 'lgs:w-[45rem] opacity-0 pointer-events-none'
                                                        } transition-all duration-700 ease-in-out`}
                                                        >
                                                        {sectionExplanded && (
                                                            <p className="hidden lgs:flex before:ont-kanit text-primary text-md sms:text-sm sms:w-[75vw] mds:w-[60vw] text-center" style={{
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

                                                        <p className="hidden sms:flex font-kanit text-primary text-md sms:text-sm sms:w-[75vw] mds:w-[60vw] text-center" style={{
                                                                fontWeight:'200'
                                                            }}>
                                                            Revolutionizing the Industry 2.0 era with innovative IoT solutions, our platform is designed
                                                            to seamlessly integrate advanced technologies to drive efficiency, connectivity, and
                                                            sustainability. Proudly powered by SLTMobitel, we aim to empower businesses and industries
                                                            with reliable, state-of-the-art infrastructure and smart solutions that pave the way for a
                                                            smarter, more connected future.
                                                            </p>

                                                
                                                <div className='flex flex-col h-auto w-auto lgs:mt-2 cursor-pointer hover:mt-4 items-center justify-center transform-all duration-700 ease-in-out' onClick={handleSectionExpand}>
                                                    {sectionExplanded ? (<FaArrowAltCircleDown className='text-primary text-2xl mt-2 h-6' />) : (<FaArrowCircleUp className='text-primary text-2xl mt-2 h-6' />)}
                                                    
                                                </div>
                                            </div>

                                        </div>

                                        

                                    </div>
                                    
                                </div>  

                                




                    </section>

                    {/* Submit Section */}
                    <div className={`relative flex  justify-center ${darkMode ? 'flex bg-darkTheme' : ''} items-center bg-transparent`}>
                        {/* Background Image */}

                        <div className="relative flex flex-col h-auto w-full bg-transparent overflow-hidden z-40">

                                <div
                                className="absolute w-full h-auto items-center lgs:mt-12 justify-center z-30"
                            >
                                
                                </div>

                                {/* Primary Section */}
                                <div className={`flex flex-col w-full h-auto ${sectionExplanded ? 'sms:mt-24' : 'sms:mt-0'} transition-all duration-700 ease-in-out  sms:mt-52 items-center cursor-pointer justify-center`}>
                                <div className="relative flex lgs:h-[15rem] h-[10rem] w-full sms:mt-12 items-center justify-center">
                                    <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent overflow-hidden">
                                    <div className="flex w-auto h-auto" data-aos='fade-right'>
                                        <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                                        style={{
                                            fontWeight:'200'
                                        }}>
                                            WHAT
                                        </h2>
                                        <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                                            fontWeight:'900',
                                            boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                        }}>
                                            WE DO
                                        </h2>
                                    </div>
                                    </div>
                                </div>
                                </div> 


                                {/* Swiper Container */}
                                <div className="hidden relative lgs:flex mds:flex  w-full items-center justify-center bg-transparent z-30">
                                    
                                    <Swiper
                                        effect="coverflow"
                                        grabCursor={true}
                                        centeredSlides={true}
                                        loop={true}
                                        slidesPerView="auto"
                                        coverflowEffect={{
                                            rotate: 0,
                                            stretch: 0,
                                            depth: 100,
                                            modifier: 2.5,
                                        }}
                                        pagination={{ clickable: true }}
                                        navigation={false}
                                        modules={[EffectCoverflow]}
                                        className="flex lgs:h-[40rem] items-center justify-center p-24"
                                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                                    >
                                        {DYN.map((tool, index) => {
                                            let opacity = 0.8;

                                            if (index === activeIndex) {
                                                opacity = 1;
                                            } else if (index === activeIndex - 1 || index === activeIndex + 1) {
                                                opacity = 1;
                                            }

                                            return (
                                                <SwiperSlide className="group" key={index}>

                                                    <div className={`relative flex-col flex lgs:h-[25rem] lgs:w-[25rem]  mds:h-[30rem] ${darkMode ? 'border-4' : 'border-0'}  bg-transparent rounded-2xl  items-center justify-center`}>

                                                    <div className="absolute bg-blue-500 lgs:h-[25rem] lgs:w-[25rem] items-center justify-center overflow-hidden z-30 rounded-2xl">
                                                        <img src= {tool.image} alt='' className='onject-cover lgs:h-[25rem] lgs:w-full'/>
                                                    </div>
                                                    <div className="absolute lgs:flex flex-col bg-transparent lgs:h-[25rem] overflow-hidden lgs:w-[25rem] items-center justify-center z-40 rounded-2xl">
                                                         <div className={`flex ${darkMode ? 'bg-gradient-to-t from-secondary to-transparent ' : 'bg-gradient-to-t from-primary to-transparent '}   rounded-t-2xl lgs:w-full lgs:h-[10rem]`}/>
                                                         <div className={`flex ${darkMode ? 'bg-secondary ' : 'bg-primary '}  lgs:w-full lgs:h-[10rem] `}/>
                                                         <div className={`flex ${darkMode ? 'bg-gradient-to-b from-secondary to-transparent ' : 'bg-gradient-to-b from-primary to-transparent '}   rounded-b-2xl lgs:w-full lgs:h-[10rem]`}/>
                                                    </div>

                                                      <div className='absolute flex flex-col lgs:h-[25rem] mds:h-[20rem] w-[25rem] bg-transparent rounded-2xl z-50  items-center justify-center'
                                                      style={{boxShadow:'inset 0px 0px 10px 2px rgba(0,0,0,0.5) , 0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'}}>
                                                        <h2 className={`flex font-bricolagegrotesque ${darkMode ? 'text-primary ' : 'text-primary'}  text-primary lgs:w-[20rem] bg-theme01 rounded-xl p-4 lgs:text-3xl text-center`}>
                                                            {tool.title}
                                                        </h2> 
                                                        <p className={`font-poppoins text-center w-[15rem]  ${darkMode ? 'text-primary ' : 'text-secondary'}  lgs:mt-5 text-md `}
                                                        style={{
                                                            fontWeight:'200'
                                                        }}>
                                                            {tool.description}
                                                        </p>
                                                      </div>
            
                                                    </div>
       
                                                </SwiperSlide>
                                                
                                            );
                                        })}
                                    </Swiper>
                                    
                                </div>

                                {/* Swiper for mobile Container */}
                                <div className={`hidden sms:flex sms:flex-col w-[100vw] h-auto  items-center lgs:space-x-5 sms:space-y-5 justify-center mt-12 lgs:p-5`}>

                                    {DYN.slice(0,6).map((tool) => (

                                        <div className="flex flex-col h-[25rem] bg-transparent  items-center justify-center" data-aos='fade-up'>

                                        <div className={`relative flex-col flex lgs:h-[25rem] lgs:w-[25rem]  mds:h-[30rem] ${darkMode ? 'border-4' : 'border-0'}  bg-transparent rounded-2xl  items-center justify-center`}>

                                                    <div className="absolute bg-blue-500 h-[25rem] w-[25rem] items-center justify-center overflow-hidden z-30 rounded-2xl">
                                                        <img src= {tool.image} alt='' className='object-cover h-[25rem] lgs:w-full'/>
                                                    </div>
                                                    <div className="absolute lgs:flex flex-col bg-transparent h-[25rem] overflow-hidden w-[25rem] items-center justify-center z-40 rounded-2xl">
                                                        <div className={`flex ${darkMode ? 'bg-gradient-to-t from-secondary to-transparent ' : 'bg-gradient-to-t from-primary to-transparent '}   rounded-t-2xl w-full h-[10rem]`}/>
                                                        <div className={`flex ${darkMode ? 'bg-secondary ' : 'bg-primary '}  w-full h-[10rem] `}/>
                                                        <div className={`flex ${darkMode ? 'bg-gradient-to-b from-secondary to-transparent ' : 'bg-gradient-to-b from-primary to-transparent '}   rounded-b-2xl w-full h-[10rem]`}/>
                                                    </div>

                                                    <div className='absolute flex flex-col h-[25rem] mds:h-[20rem] w-[25rem] bg-transparent rounded-2xl z-50  items-center justify-center'
                                                    style={{boxShadow:'inset 0px 0px 10px 2px rgba(0,0,0,0.5) , 0px 4px 20px 1px rgba(0, 0, 0, 0.2) , inset 0px 5px 20px 1px rgba(255, 255, 255, 0.2)'}}>
                                                        <h2 className={`flex font-bricolagegrotesque ${darkMode ? 'text-primary ' : 'text-primary'}  text-primary lgs:w-[20rem] bg-theme01 rounded-xl p-4 text-xl text-center`}>
                                                            {tool.title}
                                                        </h2> 
                                                        <p className={`font-poppoins text-center w-[15rem]  ${darkMode ? 'text-primary ' : 'text-secondary'}  mt-5 text-md `}
                                                        style={{
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

                    {/* Offering Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>

                        <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center overflow-hidden'>
                                    
                                   <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                        
                        </div>

                         {/* Topic Section */}
                        <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center'>
                        <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                            <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent overflow-hidden">
                               <div className="flex w-auto h-auto" data-aos='fade-right'>
                                  <h2 className="font-dmsans text-primary bg-theme01  p-4 lgs:text-7xl text-5xl text-center"
                                  style={{
                                    fontWeight:'200'
                                  }}>
                                    WHAT
                                  </h2>
                                  <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                                    fontWeight:'900',
                                    boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                  }}>
                                    WE OFFER
                                  </h2>
                               </div>
                            </div>
                        </div>
                        </div> 

                        <div className='hidden sms:flex lgs:flex sms:flex-col w-[80vw] h-auto items-center lgs:space-x-5 sms:space-y-5 justify-center mt-12 lgs:p-5'>

                            {details.slice(0,3).map((tool) => (

                                <div ref={sectionRef} key={tool.id} className='hidden group overflow-hidden lgs:flex sms:flex flex-col sms:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' data-aos='fade-up' data-aos-delay={`${300 + tool.id * 50}`}style={{
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

                            <div ref={sectionRef} key={tool.id} className='hidden group overflow-hidden lgs:flex sms:flex flex-col sms:w-[20rem] cursor-pointer bg-primary rounded-lg lgs:h-[18rem]' data-aos='fade-up' data-aos-delay={`${300 + tool.id * 50}`} style={{
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
                                        data-aos='fade-up'
                                        data-aos-delay={`${200 + tool.id * 150}`}
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


                      <div className='flex bg-transparent lgs:w-auto h-[5rem] items-center lgs:space-x-2 overflow-hidden justify-center'>
                                   <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='zoom-in'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='zoom-in'/>
                                    <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                        </div>     


                    </section>

                    {/* Partners Section */}
                    <section  className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>
                    <div className='relative flex lgs:w-full lgs:h-auto lgs:p-5 items-center justify-center'>
                    <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center z-30'>
                        <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                            <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
                               <div className="flex w-auto h-auto" data-aos='fade-left'>
                                  <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-4xl text-center"
                                  style={{
                                    fontWeight:'200'
                                  }}>
                                    TRUSTED
                                  </h2>
                                  <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-4xl lgs:text-7xl items-center justify-center text-center" style={{
                                    fontWeight:'900',
                                    boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                  }}>
                                    PARTNERS
                                  </h2>
                               </div>
                            </div>
                        </div>

                        <div className='flex sms:flex-col w-[80vw] h-auto items-center mds:space-x-5 lgs:space-x-5 sms:space-y-5 justify-center mt-12'>
                                    
                            {partners.slice(0,3).map((tool) => (

                            <div key={tool.id} className='flex flex-col lgs:w-[25rem] sms:w-[22rem] mds:w-[20rem] overflow-hidden bg-primary cursor-default items-center justify-center rounded-lg lgs:h-[25rem]'                                         data-aos='fade-up'
                                        data-aos-delay={`${200 + tool.id * 50}`} style={{
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
                                                <div className='absolute right-0 bottom-0 flex w-[15rem] mds:w-[12rem] rounded-tl-full items-center justify-center h-[4rem] mds:h-[3rem] bg-gradient-to-r from-blue-950 to-theme01'>
                                                        <h2 className='text-lg mds:text-sm font-dmsans text-primary'style={{
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

                    {/* Blog Section */}
                    <section className='flex flex-col overflow-hidden items-center justify-start sms:mt-5 h-auto w-full'>

                            <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center'>
                                        <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                        <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]'/>
                                        <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}  />
                            </div>
                            <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                            <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
                               <div className="flex w-auto h-auto " data-aos='fade-right'>
                                  <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                                  style={{
                                    fontWeight:'200'
                                  }}>
                                    LATEST
                                  </h2>
                                  <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                                    fontWeight:'900',
                                    boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                  }}>
                                    BLOGS
                                  </h2>
                               </div>
                            </div>
                           </div>
                           <div className='flex sms:flex-col sms:h-auto sms:p-5  w-full items-center justify-center mds:space-x-5 lgs:space-x-5 sms:space-y-4 mt-12'>

                            {articles.slice(0,4).filter(article => article.status === 'published').map((tool)=> (
                                <div key={tool.id} className='flex flex-col w-[25rem] sms:w-[22rem] overflow-hidden bg-primary cursor-default items-center justify-center rounded-lg lgs:h-[22rem]'
                                                                        data-aos='fade-up'
                                                                        data-aos-delay={`${100 + tool.id * 50}`} style={{
                                boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) '
                            }}>
                                    <div className='relative flex flex-col h-[12rem] w-[25rem] sms:w-[22rem] bg-primary justify-center rounded-t-md overflow-hidden items-center '>
                                        <img src={tool.images[0]} alt='' className='object-cover overflow-hidden scale-150 sms:h-40'/>
                                        <div className='absolute top-0 right-0 flex flex-col h-[2rem] w-[5rem] rounded-bl-2xl bg-blue-700 justify-center items-center'
                                        style={{
                                            boxShadow: '0px 5px 8px 2px rgba(0, 0, 0, 0.5) , inset 0px 4px 5px 2px rgba(255, 255, 255, 0.4)',
                                        }}>
                                            <span className='text-primary font-dmsans text-md'>blog #{tool.id}</span>
                                        </div>
                                    </div>
                                    <div className='flex flex-col h-[5rem] mt-6  w-[25rem] sms:w-[22rem] bg-transparent lgs:rounded-t-xl justify-center items-start p-2'>
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
                                    <div className='flex h-[5rem] w-[25rem] sms:w-[22rem]  bg-transparent  justify-center items-center sms:p-1'>
                                       <div className='flex w-[15rem] sms:w-[15rem] h-[5rem] items-center justify-start p-2'>


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
                                       <div className='flex w-[10rem] sms:w-[7rem] h-[4rem] items-center justify-center'>

                                         <div  onClick={() => navigate(`/articleview/${tool.articleid}`, { state: { tool } })}  className='flex w-[8rem] sms:w-[6rem] sms:h-[3rem] h-[2.5rem] bg-blue-600 rounded-xl cursor-pointer items-center justify-center' style={{
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

                    {/* Client Reviews Section */}
                    <section  className='flex flex-col overflow-hidden items-center justify-center h-auto w-full'>

                      <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center overflow-hidden'>
                                    
                                   <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                        
                        </div>


                        <div className='relative flex lgs:w-full lgs:h-auto lgs:p-5 items-center justify-center '>
                        <div className='flex flex-col w-full h-auto items-center cursor-pointer justify-center z-30'>

                            <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                                <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
                                <div className="flex w-auto h-auto " data-aos='fade-left'>
                                    <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                                    style={{
                                        fontWeight:'200'
                                    }}>
                                        CLIENT
                                    </h2>
                                    <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl  items-center justify-center text-center" style={{
                                        fontWeight:'900',
                                        boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                    }}>
                                        REVIEWS
                                    </h2>
                                </div>
                                </div>
                            </div>

                            <div className='flex sms:flex-col w-[80vw] mds:w-[90vw] h-auto items-center mds:space-x-5 lgs:space-x-5 sms:space-y-5 justify-center mt-12'>
                                        
                                {testimonial.slice(0,3).map((tool) => (

                                <div key={tool.id} className='flex flex-col w-[30rem] sms:w-[22rem]  overflow-hidden bg-primary cursor-pointer items-center justify-center rounded-lg lgs:h-[25rem]'                                         data-aos='fade-up'
                                             style={{
                                    boxShadow: '0px 4px 20px 1px rgba(0, 0, 0, 0.5) '
                                }}>
                                        <div className='relative flex flex-col h-[10rem] w-[25rem] sms:w-[22rem] bg-primary justify-center rounded-t-md overflow-hidden items-center '>
                                        <div className='absolute h-[5rem] w-[25rem] mds:w-[15rem] sms:w-[22rem] top-0 bg-theme01 z-40 rounded-b-full'/>
                                           <div className='flex h-auto w-auto overflow-hidden rounded-full z-50'> 
                                            <img src={tool.image} alt='' className='object-cover h-28 mds:h-20'/>
                                          </div>
                                        </div>
                                        <div className='flex flex-col h-[15rem] w-[25rem] mds:w-[20rem] bg-primary rounded-b-lg justify-start items-center smsLp-4'>
                                                <p className='flex font-dmsans text-center w-[22rem] h-[12rem] sms:w-[75vw]   mds:w-[10rem] lgs:p-2 text-sm mds:text-xs text-secondary'
                                                style={{
                                                    fontWeight:'300'
                                                }}>
                                                    {tool.description}
                                                </p>
                                                <h2 className='text-md font-dmsans text-center'>
                                                    - {tool.name}
                                                </h2>
                                        </div>
  
                                </div>

                                ))}    

                            </div>
                            <div className='hidden sms:flex lgs:flex mds:flex bg-transparent lgs:w-auto h-[5rem]  items-center justify-center'/>

                        </div> 

                        </div>


                    </section>

                    {/* Powered By Section */}
                    <section  className='flex flex-col overflow-hidden items-center justify-center h-auto w-full lgs:p-12'>

                      <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center overflow-hidden'>
                                    
                                   <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                        
                        </div>


                            <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                                <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent">
                                <div className="flex w-auto h-auto " data-aos='fade-right'>
                                    <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                                    style={{
                                        fontWeight:'200'
                                    }}>
                                        POWERED
                                    </h2>
                                    <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                                        fontWeight:'900',
                                        boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                    }}>
                                        BY
                                    </h2>
                                </div>
                                </div>
                            </div>

                            {/*mobile responsive configs for this section */}
                            <div className='hidden sms:flex flex-col items-center justify-center lgs:mt-12 h-auto w-auto pt-5 ' data-aos='zoom-in'>

                                    
                            <Marquee style={{
                            width:'80%',
                            height:'10%',
                            justifyItems: 'center',
                            overflow: 'hidden',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(10px)',

                            

                            }}>
                            <div
                            className={`flex flex-col w-auto sms:h-[10vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            

                                <img src={rasberryPi} alt="supta" style={{
                                    width:'100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}/>
                            

                            </div>

                            <div 
                            className={`flex flex-col w-auto sms:h-[10vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>

                            <img src={arduino} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius:'inherit'

                            }}/>

                            </div>
                            <div
                            className={`flex flex-col w-auto sms:h-[10vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            <img src={nvidia} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit'

                            }}/>

                            </div>

                            <div
                            className={`flex flex-col w-auto sms:h-[10vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            <img src={espressif} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit'

                            }}/>


                            </div>

                            </Marquee>
                                    


                            </div> 


                            {/*larger responsive configs for this section */}
                            <div className='hidden mds:flex lgs:flex  flex-col items-center justify-center lgs:mt-12  h-auto w-auto pt-5 ' data-aos='zoom-in' style={{
                                
                            }}>
                            <Marquee style={{
                            width:'60%',
                            height:'50%',
                            justifyItems: 'center',
                            overflow: 'hidden',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(10px)',

                            

                            }}>
                            <div
                            className={`flex flex-col w-auto mds:h-[15vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            

                                <img src={rasberryPi} alt="supta" style={{
                                    width:'100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}/>
                            

                            </div>

                            <div 
                            className={`flex flex-col w-auto mds:h-[15vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>

                            <img src={arduino} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius:'inherit'

                            }}/>

                            </div>
                            <div
                            className={`flex flex-col w-auto mds:h-[15vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            <img src={nvidia} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit'

                            }}/>

                            </div>

                            <div
                            className={`flex flex-col w-auto mds:h-[15vh] border-2 items-center justify-center lgs:h-[10vh] ${darkMode ? 'bg-primary' : ''} m-2 hover:scale-110 transition duration-1000 ease-in-out`} style={{
                                borderRadius: '20px',
                                overflow:'hidden'
                                
                            }}>
                            <img src={espressif} alt="supta" style={{
                                width:'100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 'inherit'

                            }}/>


                            </div>

                            </Marquee>
                            </div> 

                       <div className='flex bg-transparent lgs:w-auto lgs:h-[5rem] items-center lgs:space-x-2 justify-center overflow-hidden'>
                                    
                                   <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                                    <div className= 'flex bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= 'flex  bg-theme01 rounded-2xl lgs:w-[0.5rem] lgs:h-[0.5rem]' data-aos='fade-up'/>
                                    <div className= {`flex ${darkMode ? 'bg-primary' : 'bg-secondary'} lgs:w-[8rem] lgs:h-[0.1rem] rounded-r-2xl`}/>
                        
                        </div>





                    </section>


            </div>

  )
}

export default LandingPage
