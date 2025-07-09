import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ArticleSection = ({darkMode, setDarkMode}) => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filters, setFilters] = useState({
    category: 'all',
    searchTerm: '',
    tag: 'all'
  });
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState(['All', 'Technology', 'Research', 'Case Studies', 'Industry News']);
  const [tags, setTags] = useState(['All', 'IoT', 'Sensors', 'Smart Grid', 'Energy', 'Data Analytics', 'AI']);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/articles');
        setArticles(response.data);
        setFilteredArticles(response.data);
        setLoading(false);
        console.log("Fetched articles:", response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setLoading(false);
        
        // Fallback data for demo purposes
        const fallbackData = [
          {
            _id: '1',
            title: 'Next Generation Smart Grid Solutions',
            subtitle: 'Exploring the future of intelligent energy distribution systems and their impact on sustainability.',
            category: 'Technology',
            tags: ['Smart Grid', 'Energy', 'Sustainability'],
            createdAt: new Date().toISOString(),
            images: ['https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']
          },
          {
            _id: '2',
            title: 'Industrial IoT Sensors: A Comprehensive Guide',
            subtitle: 'Understanding the various types of sensors used in industrial IoT applications and their benefits.',
            category: 'Research',
            tags: ['IoT', 'Sensors', 'Industry 4.0'],
            createdAt: new Date(Date.now() - 86400000).toISOString(),
            images: ['https://images.unsplash.com/photo-1581093196277-9d03e8801293?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']
          },
          {
            _id: '3',
            title: 'Data Analytics for Predictive Maintenance',
            subtitle: 'How advanced analytics helps prevent equipment failures and optimize maintenance schedules.',
            category: 'Case Studies',
            tags: ['Data Analytics', 'AI', 'Maintenance'],
            createdAt: new Date(Date.now() - 172800000).toISOString(),
            images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80']
          }
        ];
        
        setArticles(fallbackData);
        setFilteredArticles(fallbackData);
      }
    };
    fetchArticles();
  }, []);

  // Filter articles based on selected filters
  useEffect(() => {
    if (articles.length === 0) return;
    
    let result = [...articles];
    
    // Filter by category
    if (filters.category && filters.category !== 'all') {
      result = result.filter(article => 
        article.category && article.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(article => 
        (article.title && article.title.toLowerCase().includes(searchLower)) ||
        (article.subtitle && article.subtitle.toLowerCase().includes(searchLower))
      );
    }
    
    // Filter by tag
    if (filters.tag && filters.tag !== 'all') {
      result = result.filter(article => 
        article.tags && article.tags.some(tag => tag.toLowerCase() === filters.tag.toLowerCase())
      );
    }
    
    setFilteredArticles(result);
  }, [filters, articles]);

  // Handle slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === (articles.length > 3 ? 2 : articles.length - 1) ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? (articles.length > 3 ? 2 : articles.length - 1) : prev - 1
    );
  };

  // Handle filter changes
  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  // Function to handle article click
  const handleReadArticle = (articleId) => {
    navigate(`/articleview/${articleId}`);
  };

  // Get featured articles for slider (first 3 or less)
  const featuredArticles = articles.slice(0, Math.min(3, articles.length));

  return (
    <div className={`${darkMode ? ' bg-darkTheme' : 'bg-primary' }  min-h-screen pt-16 pb-24  px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 mt-12">
                                <div className="relative flex lgs:h-[15rem] h-[10rem] w-full items-center justify-center">
                                    <div className="absolute flex items-center justify-center w-full h-[28rem] bg-transparent overflow-hidden">
                                      <div className="flex w-auto h-auto" data-aos='fade-right'>
                                          <h2 className="font-dmsans text-primary bg-theme01 p-4 lgs:text-7xl text-5xl text-center"
                                          style={{
                                            fontWeight:'200'
                                          }}>
                                            OUR
                                          </h2>
                                          <h2 className="flex bg-primary p-1 flex-col font-dmsans text-theme01 lgs:p-2 text-5xl lgs:text-7xl items-center justify-center text-center" style={{
                                            fontWeight:'900',
                                            boxShadow:'0px 1px 20px 2px rgba(0,0,0,0.4)'
                                          }}>
                                            ARTICLES
                                          </h2>
                                      </div>
                                    </div>
                                </div>
          <p className={`text-md text-gray-600 max-w-4xl ${darkMode ? ' text-primary' : 'text-secondary' }  mx-auto`}>
            Stay updated with the latest trends, tools, and breakthroughs in the world of technology. From software development and AI advancements to emerging gadgets and digital solutions, our curated articles provide in-depth analysis, expert opinions, and practical tips to keep you informed and inspired. Dive into the future—one article at a time
          </p>
        </div>

        {/* Featured Articles Slider */}
        {loading ? (
          <div className="h-80 bg-gray-200 animate-pulse rounded-xl mb-12"></div>
        ) : articles.length > 0 ? (
          <div className="relative h-80 md:h-96 mb-16 rounded-xl overflow-hidden shadow-lg">
            {/* Slider navigation buttons */}
            <button 
              onClick={prevSlide} 
              className="absolute z-10 left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextSlide} 
              className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider content */}
            <div className="h-full relative">
              {featuredArticles.filter(article => article.status === 'published').map((article, index) => (
                <div 
                  key={article._id} 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="relative h-full">
                    {/* Slide background image */}
                    <div className="absolute inset-0">
                      <img 
                        src={article.images && article.images[0] ? article.images[0] : "https://via.placeholder.com/1200x600?text=Featured+Article"} 
                        alt={article.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>
                    </div>
                    
                    {/* Slide content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          {article.category || "Featured"}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                        {article.title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2">
                        {article.subtitle}
                      </p>
                      <button 
                        onClick={() => handleReadArticle(article.articleid)}
                        className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-medium text-sm rounded-md hover:bg-gray-100 transition-colors"
                      >
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {featuredArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-6 bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Filters Section */}
        <div className={`mb-10 p-5 ${darkMode ? 'bg-darkTheme border-2' : 'bg-white'} rounded-xl shadow-sm`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-grow md:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 py-2 pr-4 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.searchTerm}
                onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Category filter */}
              <div className="relative">
                <select
                  className="py-2 pl-3 pr-10 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value.toLowerCase())}
                >
                  <option value="all">All Categories</option>
                  {categories.filter(c => c !== 'All').map(category => (
                    <option key={category} value={category.toLowerCase()}>{category}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Tag filter */}
              <div className="relative">
                <select
                  className="py-2 pl-3 pr-10 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  value={filters.tag}
                  onChange={(e) => handleFilterChange('tag', e.target.value.toLowerCase())}
                >
                  <option value="all">All Tags</option>
                  {tags.filter(t => t !== 'All').map(tag => (
                    <option key={tag} value={tag.toLowerCase()}>{tag}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {/* Reset filters button */}
              <button
                onClick={() => setFilters({ category: 'all', searchTerm: '', tag: 'all' })}
                className="py-2 px-4 border border-gray-300 bg-primary rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Articles Section Label */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-primary' : 'text-secondary'}`}>
            {filters.searchTerm || filters.category !== 'all' || filters.tag !== 'all' ? 'Search Results' : 'All Articles'}
          </h2>
          <p className={`text-gray-600 text-sm ${darkMode ? 'text-primary' : 'text-secondary'}`}>
            {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
          </p>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gray-300 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded animate-pulse mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => article.status === 'published').map((article) => (
              <div key={article._id} className={`${darkMode ? 'border-2 drop-shadow-md bg-darkTheme' : 'bg-primary' }  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full`}>
                {/* Article Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.images && article.images[0] ? article.images[0] : "https://via.placeholder.com/400x240?text=Article+Image"}
                    alt={article.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Article Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">

                    {/* Category badge */}
                    {article.keywords.map((keyword, index) => (
                      <span key={index} className="inline-block border-2 mr-2 px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full mb-3">
                        {keyword}
                      </span>
                    ))}


                    {/* Category badge */}
                    {article.category && (
                      <span className="inline-block px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full mb-3">
                        {article.category}
                      </span>
                    )}
                    <h3 className={`text-xl font-bold ${darkMode ? ' text-primary' : 'text-secondary' }  mb-2 line-clamp-2`}>
                      {article.title || "Untitled Article"}
                    </h3>
                    
                    <p className="text-gray-500 text-sm mb-4">
                      {new Date(article.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    
                    <p className={`text-gray-600 mb-4 line-clamp-3 ${darkMode ? 'text-primary' : 'text-secondary'}`}>
                      {article.subtitle || "No content available"}
                    </p>
                  </div>
                  
                  {/* Article Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{article.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Article Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <button 
                    onClick={() => handleReadArticle(article.articleid)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 flex items-center"
                  >
                    Read More 
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-xl text-gray-600 font-semibold">No matching articles found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search filters</p>
            <button 
              onClick={() => setFilters({ category: 'all', searchTerm: '', tag: 'all' })}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        

      </div>
    </div>
  );
};

export default ArticleSection
