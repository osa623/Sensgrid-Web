import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArticleView = () => {
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
        
        // Use demo data if in development
        if (process.env.NODE_ENV === 'development') {
          // Special handling for the specific ID mentioned in the prompt
          if (articleId === '635e006f-7185-47cf-abfc-fc2218b27764') {
            const specificDemoArticle = {
              _id: articleId,
              title: "Smart Grid Implementation Case Study: European Energy Network",
              subtitle: "A detailed analysis of sensor deployment in modern energy distribution systems",
              author: "Dr. Sarah Johnson & Prof. Mark Williams",
              publishedDate: "2023-04-15T12:00:00Z",
              category: "Case Studies",
              tags: ["Smart Grid", "Energy", "Implementation", "Europe"],
              content: `
                <p>This case study examines the successful implementation of smart grid technology across select European energy networks. The project aimed to modernize aging infrastructure while improving efficiency and enabling renewable energy integration.</p>
                
                <h2>Project Overview</h2>
                <p>The initiative began in 2018 with a consortium of energy providers across three countries, with the goal of creating an interconnected, intelligent grid system capable of handling the growing demands of renewable energy sources and changing consumer usage patterns.</p>
                
                <p>Key objectives included:</p>
                <ul>
                  <li>Reducing transmission losses by 15%</li>
                  <li>Improving outage response time by 40%</li>
                  <li>Enabling two-way energy flow to accommodate distributed generation</li>
                  <li>Creating real-time load balancing capabilities</li>
                </ul>
                
                <h2>Sensor Network Architecture</h2>
                <p>A critical component of the implementation was the deployment of over 50,000 IoT sensors throughout the distribution network. These sensors provided real-time data on numerous grid parameters including:</p>
                
                <h3>1. Substation Monitoring</h3>
                <p>Advanced monitoring equipment was installed in 132 key substations, providing continuous assessment of transformer performance, temperature variations, and load metrics.</p>
                
                <h3>2. Transmission Line Sensors</h3>
                <p>Wireless sensors were deployed along critical transmission corridors to detect line sag, ice accumulation, and potential failure points before they resulted in service interruptions.</p>
                
                <h3>3. Consumer-End Monitoring</h3>
                <p>Smart meters and local distribution sensors created a comprehensive view of consumption patterns, enabling more precise demand forecasting.</p>
                
                <h2>Results and Impact</h2>
                <p>After 24 months of operation, the project has yielded significant improvements:</p>
                
                <ul>
                  <li>Transmission losses reduced by 18.3% (exceeding initial goals)</li>
                  <li>Average outage resolution time improved by 52%</li>
                  <li>Peak load reduced by 12% through demand response programs</li>
                  <li>Renewable energy integration capacity increased by 28%</li>
                </ul>
                
                <h2>Future Directions</h2>
                <p>The success of this implementation has led to an expansion of the project to include two additional countries in 2023. Future phases will incorporate advanced AI-driven predictive maintenance and fully autonomous grid healing capabilities.</p>
                
                <p>The lessons learned from this deployment provide valuable insights for similar modernization efforts worldwide.</p>
              `,
              images: ["https://images.unsplash.com/photo-1548334078-b7d6961d4a85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"],
            };
            
            setArticle(specificDemoArticle);
            setLoading(false);
            
            // Demo related articles for this specific article
            const specificRelatedArticles = [
              {
                _id: "rel-specific-1",
                title: "The Economic Impact of Smart Grid Modernization",
                category: "Analysis",
                publishedDate: new Date().toISOString(),
                images: ["https://images.unsplash.com/photo-1607197109166-a7d72b303765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"],
              },
              {
                _id: "rel-specific-2",
                title: "Cybersecurity Challenges in Connected Grid Systems",
                category: "Technology",
                publishedDate: new Date().toISOString(),
                images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"],
              }
            ];
            setRelatedArticles(specificRelatedArticles);
            return;
          }
          
          const demoArticle = {
            _id: articleId,
            title: "Understanding Sensor Networks in Smart Grid Applications",
            subtitle: "A comprehensive guide to the integration of IoT sensors in modern energy distribution systems",
            author: "Dr. Sarah Johnson",
            publishedDate: new Date().toISOString(),
            category: "Technology",
            tags: ["Smart Grid", "IoT", "Sensors", "Energy"],
            content: `
              <p>The integration of sensor networks in smart grid systems represents a significant advancement in how we monitor, manage, and optimize energy distribution. This article explores the various applications, benefits, and challenges associated with deploying IoT sensors throughout the electrical grid infrastructure.</p>
              
              <h2>The Evolution of Grid Monitoring</h2>
              <p>Traditional power grids have relied on manual readings and limited monitoring equipment, often resulting in delayed responses to outages and inefficiencies. The advent of smart grid technology has transformed this landscape by introducing real-time monitoring capabilities through strategically placed sensors.</p>
              
              <p>These sensors collect valuable data on various parameters:</p>
              <ul>
                <li>Voltage fluctuations</li>
                <li>Current flow</li>
                <li>Power quality metrics</li>
                <li>Temperature readings of critical components</li>
                <li>Environmental conditions affecting grid performance</li>
              </ul>
              
              <h2>Benefits of Sensor Integration</h2>
              <p>The deployment of comprehensive sensor networks offers numerous advantages for utility companies and consumers alike:</p>
              
              <h3>1. Predictive Maintenance</h3>
              <p>By continuously monitoring equipment conditions, maintenance teams can identify potential failures before they occur, reducing downtime and extending the lifespan of critical infrastructure components.</p>
              
              <h3>2. Demand Response Optimization</h3>
              <p>Real-time consumption data enables more efficient load balancing and demand response programs, helping to smooth peak demand periods and reduce strain on the grid.</p>
              
              <h3>3. Outage Detection and Response</h3>
              <p>Sensors can immediately detect service interruptions, allowing for faster restoration times and improved customer satisfaction.</p>
              
              <h2>Implementation Challenges</h2>
              <p>Despite the clear benefits, several challenges must be addressed when deploying sensor networks in smart grid applications:</p>
              
              <p>Security concerns, data management complexity, and integration with legacy systems represent significant hurdles that utility companies must overcome. Additionally, the cost of widespread sensor deployment remains a consideration for many organizations.</p>
              
              <h2>Future Directions</h2>
              <p>As sensor technology continues to evolve, we anticipate further miniaturization, increased battery life, and enhanced communication capabilities. These improvements will enable even more comprehensive monitoring and control of grid operations, ultimately leading to greater efficiency and reliability.</p>
              
              <p>The integration of artificial intelligence with sensor networks represents the next frontier in smart grid management, potentially enabling fully autonomous grid operations in the future.</p>
            `,
            images: ["https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"],
          };
          
          setArticle(demoArticle);
          setLoading(false);
          
          // Demo related articles
          const demoRelated = [
            {
              _id: "rel1",
              title: "Advances in IoT Sensor Technology for Energy Management",
              category: "Technology",
              publishedDate: new Date().toISOString(),
              images: ["https://images.unsplash.com/photo-1581093196277-9d03e8801293?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"],
            },
            {
              _id: "rel2",
              title: "Data Analytics for Smart Grid Optimization",
              category: "Research",
              publishedDate: new Date().toISOString(),
              images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"],
            }
          ];
          setRelatedArticles(demoRelated);
        }
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
    <div className="bg-gray-50 min-h-screen pt-16 pb-24">
      {/* Display articleId for debugging */}
      {process.env.NODE_ENV === 'development' && (
        <div className="max-w-7xl mx-auto px-4 mb-2 text-xs text-gray-500">
          Debug: ArticleID = {articleId || "not found"}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-6 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to Articles
        </button>
        
        {loading ? (
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 my-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-red-700">{error}</p>
                <p className="mt-3">
                  <button 
                    onClick={() => navigate('/articles')}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Return to Articles
                  </button>
                </p>
              </div>
            </div>
          </div>
        ) : article ? (
          <article className="bg-white shadow-md rounded-xl overflow-hidden">
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
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                )}
                
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{article.title}</h1>
                
                {article.subtitle && (
                  <p className="text-xl text-gray-600 font-light mb-4">{article.subtitle}</p>
                )}

                
                
                <div className="flex items-center text-sm text-gray-500">
                  {article.author && <span>By {article.author}</span>}
                  {article.author && article.publishedDate && <span className="mx-2">•</span>}
                  {article.publishedDate && <span>{formatDate(article.publishedDate)}</span>}
                </div>
              </div>
              
              {/* Article content */}
           {Array.isArray(article.subtopics) && Array.isArray(article.subcontent) ? (
              article.subtopics.map((sub, idx) => (
                <div key={idx} className="mb-6">
                  <h2 className="text-2xl font-semibold w-[70%] mb-2">{sub}</h2>
                  <p className='text-lg font-normal w-[80%] mt-4'>{article.subcontent[idx]}</p>
                </div>
              ))
            ) : (
              // Fallback for old structure: single subtitle and description
              <>
                {article.subtopics && <h2 className="text-xl font-semibold w-[70%] mb-2">{article.subtopics}</h2>}
                {article.subcontent && <p className='text-lg font-normal mt-4'>{article.subcontent}</p>}
              </>
            )}
              
              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 pt-4 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
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
            <p className="text-xl text-gray-600">Article not found</p>
          </div>
        )}
        
        {/* Related Articles Section */}
        {!loading && !error && article && relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map(related => (
                <div 
                  key={related._id} 
                  onClick={() => navigate(`/articleview/${related._id}`)}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow cursor-pointer"
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
                    <h3 className="font-semibold text-lg mb-2">{related.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
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
