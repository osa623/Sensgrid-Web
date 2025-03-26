import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route,  useLocation } from 'react-router-dom';

//Pages
import Home from './Pages/landingPage.js';
import Navbar from './Components/Navbar.js';
import Loading from './Components/Loading.js';
import BlogPage from './Pages/Blog.js';
import ContactUs from './Pages/ContactUs.js';
import Footer from './Components/Footer.js';
import AboutUs from './Pages/AboutUs.js';
import TreeView from './Pages/TreeView.js';




const AppContent = () => {

  const [isLoading , setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    
    if (!isLoading) {
      setIsLoading(true);

      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(loadingTimer);
    }
  }, [location]);

  useEffect(()=> {
    if(darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className="relative flex-col min-h-auto overflow-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-grow">
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path='/blog/:id' element={<BlogPage darkMode={darkMode} />} />
            <Route path='/contactUs' element={<ContactUs darkMode ={darkMode}/>}/>
            <Route path='/aboutUs' element={<AboutUs darkMode ={darkMode}/>}/>
            <Route path='/treeView' element={<TreeView darkMode ={darkMode}/>}/>
            
          </Routes>
        )}
        <Footer/>
      </div>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
