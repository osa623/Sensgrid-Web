import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleView = ({ darkMode }) => {
  // Get the articleId directly - this should match the route parameter name
  const params = useParams();
  const articleId = params.id || params.articleId; // Try both parameter names
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  console.log("URL Parameters:", params);
  console.log("Article ID being used:", articleId);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!articleId) {
        console.error("No article ID found in URL parameters");
        setError("Article not found. Invalid article identifier.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log(`Attempting to fetch article with ID: ${articleId}`);
        
        // Replace with your actual API endpoint
        const response = await axios.get(`http://localhost:5000/api/articles/${articleId}`);
        console.log("API response:", response.data);
        
        setArticle(response.data);
        setLoading(false);
        
        // Fetch related articles based on tags or category
        if (response.data.tags && response.data.tags.length > 0) {
          fetchRelatedArticles(response.data.category, response.data.tags);
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        
        // More detailed error information
        if (error.response) {
          console.error("Response status:", error.response.status);
          console.error("Response data:", error.response.data);
        }
        
        setError("Failed to load the article. It may have been removed or is temporarily unavailable.");
        setLoading(false);
        

      }
    };

    fetchArticle();
    // Scroll to top when loading a new article
    window.scrollTo(0, 0);
  }, [articleId, params]);

  const fetchRelatedArticles = async (category, tags) => {
    try {
      // In a real app, you would fetch related articles based on category/tags
      const response = await axios.get(`http://localhost:5000/api/articles?category=${category}&limit=2`);
      
      // Filter out the current article
      const filtered = response.data.filter(article => article._id !== articleId);
      setRelatedArticles(filtered.slice(0, 2));
    } catch (error) {
      console.error("Error fetching related articles:", error);
      // We won't set an error state here since related articles are not critical
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen pt-16 pb-24`}>
      {/* Display articleId for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className={`max-w-7xl mx-auto px-4 mb-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Debug: ArticleID = {articleId || "not found"}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className={`mb-6 flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Articles
        </button>
        
        {loading ? (
          <div className="animate-pulse space-y-8">
            <div className={`h-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-3/4`}></div>
            <div className={`h-6 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-1/2`}></div>
            <div className={`h-64 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded`}></div>
            <div className="space-y-4">
              <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded`}></div>
              <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded`}></div>
              <div className={`h-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded w-5/6`}></div>
            </div>
          </div>
        ) : error ? (
          <div className={`${darkMode ? 'bg-red-900 border-red-700' : 'bg-red-50 border-red-500'} border-l-4 p-4 my-8`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className={`${darkMode ? 'text-red-300' : 'text-red-700'}`}>{error}</p>
                <p className="mt-3">
                  <button 
                    onClick={() => navigate('/articles')}
                    className={`${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white px-4 py-2 rounded-md text-sm font-medium transition-colors`}
                  >
                    Return to Articles
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : article ? (
          <article className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-xl overflow-hidden`}>
            {/* Featured image */}
            {article.images && article.images[0] && (
              <div className="h-80">
                <img 
                  src={article.images[0]} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="px-6 lg:px-10 py-8">
              {/* Article metadata */}
              <div className="mb-6">
                {article.category && (
                  <span className={`inline-block px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} text-sm font-medium rounded-full mb-3`}>
                    {article.category}
                  </span>
                )}
                
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>{article.title}</h1>
                
                {article.subtitle && (
                  <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} font-light mb-4`}>{article.subtitle}</p>
                )}

                
                
                <div className={`flex items-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {article.author && <span>By {article.author}</span>}
                  {article.author && article.publishedDate && <span className="mx-2">•</span>}
                  {article.publishedDate && <span>{formatDate(article.publishedDate)}</span>}
                </div>
              </div>
              
              {/* Article content */}
           {Array.isArray(article.subtopics) && Array.isArray(article.subcontent) ? (
              article.subtopics.map((sub, idx) => (
                <div key={idx} className="mb-6">
                  <h2 className={`text-2xl font-semibold w-[70%] mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{sub}</h2>
                  <p className={`text-lg font-normal w-[80%] mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{article.subcontent[idx]}</p>
                </div>
              ))
            ) : (
              // Fallback for old structure: single subtitle and description
              <>
                {article.subtopics && <h2 className={`text-xl font-semibold w-[70%] mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{article.subtopics}</h2>}
                {article.subcontent && <p className={`text-lg font-normal mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{article.subcontent}</p>}
              </>
            )}
              
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className={`mt-8 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className={`px-3 py-1 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'} text-sm rounded-full`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        ) : (
          <div className="text-center py-12">
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Article not found</p>
          </div>
        )}
        
        {/* Related Articles Section */}
        {!loading && !error && article && relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}>Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(related => (
                <div 
                  key={related._id} 
                  onClick={() => navigate(`/articleview/${related._id}`)}
                  className={`${darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white'} rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow cursor-pointer`}
                >
                  {related.images && related.images[0] && (
                    <div className="h-48">
                      <img 
                        src={related.images[0]} 
                        alt={related.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{related.title}</h3>
                    <div className={`flex justify-between text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span>{related.category}</span>
                      {related.publishedDate && (
                        <span>{formatDate(related.publishedDate)}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleView;
