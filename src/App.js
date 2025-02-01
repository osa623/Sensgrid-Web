import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route,  useLocation } from 'react-router-dom';

//Pages
import Home from './Pages/landingPage.js';
import Navbar from './Components/Navbar.js';
import Loading from './Components/Loading.js';
import BlogPage from './Pages/Blog.js';




const AppContent = () => {

  const [isLoading , setIsLoading] = useState(false);
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


  return (
    <div className="relative flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/blog/:id' element={<BlogPage />} />
          </Routes>
        )}
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
