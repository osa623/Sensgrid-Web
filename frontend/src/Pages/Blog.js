import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { use, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Blog = ({darkMode}) => {
  const location = useLocation();
  const blog = location.state?.tool; // Retrieve blog data




  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [location]);

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (

    <div className={`relative h-auto w-auto ${darkMode ? 'bg-darkTheme' : 'bg-primary'} justify-center items-center`}>
      <div className='flex lgs:h-[8rem] h-[5rem] w-full'/>

        <div className="flex flex-col lgs:w-[80rem] mx-auto p-4 bg-white rounded-lg shadow-lg">

        <div className='flex lgs:w-auto justify-between items-center'>
        
            <h1 className="lgs:text-5xl sms:text-xl mds:text-2xl sms:font-bold text-blue-900" style={{
                fontWeight:'700'
              }}>{blog.title}</h1>
              <p className="hidden lgs:flex text-sm text-gray-600">{blog.date}</p>
               
        </div>

          <h2 className="lgs:text-xl text-gray-600">{blog.subtitle}</h2>

           <div className="flex items-center mt-6">

            <img src={blog.profileimage} alt={blog.authorName} className="border-2 border-blue-600 lgs:w-12 lgs:h-12 w-11 h-11 rounded-full lgs:mr-4 sms:mr-2" />
            <div>
              <h3 className="text-lg sms:text-md font-semibold">{blog.authorName}</h3>
              <p className="text-xs text-gray-600">{blog.authorTitle}</p>
              <p className="hidden sms:flex text-xs text-gray-600">{blog.date}</p>
            </div>
          </div>
          
          <div className = 'flex bg-transparent lgs:w-[80vw] h-auto items-start justify-between overflow-hidden'>

              {/* Sachintha  */}
              <div className='flex flex-col bg-transparent lgs:w-[50vw] h-auto'>


              
                    <img src={blog.image} alt={blog.title} className="lgs:w-[50vw] mt-5 rounded-lg mb-4" style={{
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}/>
                    <div className="text-gray-800 lgs:w-[50vw] space-y-4">
                      {blog.introduction.map((paragraph, index) => (
                        <p key={index} className="">{paragraph}</p>

                      ))}
                    </div>

                      {/*section 01*/}
                      <div className='flex flex-col h-auto w-auto lgs:mt-8'>

                      <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4 sms:mt-5'>
                        <h1 className="lgs:text-3xl sms:text-xl  font-bold text-blue-900" style={{
                            fontWeight:'500'
                          }}>{blog.topic1}</h1>              
                      </div>
                          {blog.subimage01 && (
                                <div className="lgs:mt-5 mb-4">
                                  <img
                                    src={blog.subimage01}
                                    alt=""
                                    className="lgs:w-[50rem] rounded-lg"
                                    style={{
                                      boxShadow:
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                    }}
                                  />
                                </div>
                              )}
                        
                        
                          <h2 className=" lgs:w-[50vw] lgs:text-2xl sms:text-xl   text-secondary">{blog.subtopic1}</h2>

                          <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription1}</h2>

                          <h2 className=" lgs:w-[50vw] lgs:text-2xl sms:text-xl mt-5  text-secondary">{blog.subtopic12}</h2>

                          <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                          {blog.subdescription12.map((paragraph, index) => (
                            <p key={index}>
                            <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                              {paragraph.split(":").map((part, i) => (
                                <span key={i}>
                                  {i === 0 ? <strong>{part}:</strong> : part}
                                </span>
                              ))}
                            </p>
                          ))}

                        </div>

                      </div>

                      {/*section 02*/}
                      <div className='flex flex-col h-auto w-auto mt-8'>

                      <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4'>
                        <h1 className="lgs:text-3xl sms:text-xl font-bold text-blue-900" style={{
                            fontWeight:'500'
                          }}>{blog.topic2}</h1>              
                      </div>
                      
                      {blog.subimage02 && (
                                <div className="mt-5 mb-4">
                                  <img
                                    src={blog.subimage02}
                                    alt=""
                                    className="lgs:w-[50rem] rounded-lg"
                                    style={{
                                      boxShadow:
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                    }}
                                  />
                                </div>
                              )}
                        
                        
                          <h2 className=" lgs:w-[50vw] lgs:text-2xl  sms:text-xl text-secondary">{blog.subtopic21}</h2>

                          <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription21}</h2>

                          <h2 className=" lgs:w-[50vw] lgs:text-2xl sms:text-xl mt-5  text-secondary">{blog.subtopic22}</h2>

                          <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                          {blog.subdescription22.map((paragraph, index) => (
                            <p key={index}>
                            <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                              {paragraph.split(":").map((part, i) => (
                                <span key={i}>
                                  {i === 0 ? <strong>{part}:</strong> : part}
                                </span>
                              ))}
                            </p>
                          ))}

                        </div>

                        




                      </div>

                      {/*section 03*/}
                      <div className='flex flex-col h-auto w-auto mt-8'>

                        <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4'>
                          <h1 className="lgs:text-3xl sms:text-xl font-bold text-blue-900" style={{
                              fontWeight:'500'
                            }}>{blog.topic3}</h1>              
                        </div>
                        <img src={blog.subimage03} alt={blog.title} className="lgs:w-[50vw] mt-5 rounded-lg mb-4" style={{
                          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                        }}/>
                          
                          
                            <h2 className=" lgs:w-[50vw] lgs:text-2xl  sms:text-xl text-secondary">{blog.subtopic31}</h2>

                            <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription31}</h2>

                              {blog.subtopic32 && (
                                  <h2 className="lgs:w-[50vw] lgs:text-2xl sms:text-xl mt-5 text-secondary">
                                    {blog.subtopic32}
                                  </h2>
                                )}



                            <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                            {blog.subdescription32.map((paragraph, index) => (
                            <p key={index}>
                              <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                              {paragraph.includes(":") ? (
                                paragraph.split(":").map((part, i) => (
                                  <span key={i}>
                                    {i === 0 ? <strong>{part}:</strong> : part}
                                  </span>
                                ))
                              ) : (
                                paragraph
                              )}
                            </p>
                          ))}


                          </div>

                          




                      </div>

                      {/*section 04*/}
                      <div className='flex flex-col h-auto w-auto mt-8'>

                          <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4'>
                            <h1 className="lgs:text-3xl sms:text-xl font-bold text-blue-900" style={{
                                fontWeight:'500'
                              }}>{blog.topic4}</h1>              
                          </div>

                              {blog.subimage04 && (
                                <div className="mt-5 mb-4">
                                  <img
                                    src={blog.subimage04}
                                    alt=""
                                    className="lgs:w-[50vw] rounded-lg"
                                    style={{
                                      boxShadow:
                                        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                    }}
                                  />
                                </div>
                              )}


                            
                            
                              <h2 className=" lgs:w-[50vw] lgs:text-2xl  mt-5   sms:text-xl text-secondary">{blog.subtopic41}</h2>

                              <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription41}</h2>

                                {blog.subtopic32 && (
                                    <h2 className="lgs:w-[50vw] lgs:text-2xl sms:text-xl mt-5 text-secondary">
                                      {blog.subtopic42}
                                    </h2>
                                  )}



                              <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                              {blog.subdescription42.map((paragraph, index) => (
                              <p key={index}>
                                <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                                {paragraph.includes(":") ? (
                                  paragraph.split(":").map((part, i) => (
                                    <span key={i}>
                                      {i === 0 ? <strong>{part}:</strong> : part}
                                    </span>
                                  ))
                                ) : (
                                  paragraph
                                )}
                              </p>
                            ))}


                            </div>

              




                      </div>

                      {/*section 05*/}
                      <div className='flex flex-col h-auto w-auto mt-8'>

                        <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4'>
                          <h1 className="lgs:text-3xl sms:text-xl font-bold text-blue-900" style={{
                              fontWeight:'500'
                            }}>{blog.topic5}</h1>              
                        </div>

                            {blog.subimage05 && (
                              <div className="mt-5 mb-4">
                                <img
                                  src={blog.subimage04}
                                  alt=""
                                  className="lgs:w-[50rem] rounded-lg"
                                  style={{
                                    boxShadow:
                                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                  }}
                                />
                              </div>
                            )}


                          
                          
                            <h2 className=" lgs:w-[50vw] lgs:text-2xl  sms:text-xl text-secondary">{blog.subtopic51}</h2>

                            <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription51}</h2>

                              {blog.subtopic52 && (
                                  <h2 className="lgs:w-[50vw] lgs:text-2xl sms:text-xl mt-5 text-secondary">
                                    {blog.subtopic52}
                                  </h2>
                                )}



                            <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                            {blog.subdescription52.map((paragraph, index) => (
                            <p key={index}>
                              <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                              {paragraph.includes(":") ? (
                                paragraph.split(":").map((part, i) => (
                                  <span key={i}>
                                    {i === 0 ? <strong>{part}:</strong> : part}
                                  </span>
                                ))
                              ) : (
                                paragraph
                              )}
                            </p>
                          ))}


                          </div>






                      </div>

                      {/*section 06*/}
                      <div className='flex flex-col h-auto w-auto mt-8'>

                                    <div className='flex lgs:w-[50vw] justify-between items-center lgs:mt-4'>
                                      <h1 className="lgs:text-3xl sms:text-xl font-bold text-blue-900" style={{
                                          fontWeight:'500'
                                        }}>{blog.topic6}</h1>              
                                    </div>

                                        {blog.subimage06 && (
                                          <div className="lgs:mt-5 mb-4">
                                            <img
                                              src={blog.subimage06}
                                              alt=""
                                              className="lgs:w-[50rem] rounded-lg"
                                              style={{
                                                boxShadow:
                                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                                              }}
                                            />
                                          </div>
                                        )}


                                      
                                      
                                        <h2 className=" lgs:w-[50vw] lgs:text-2xl  sms:text-xl text-secondary">{blog.subtopic61}</h2>

                                        <h2 className=" lgs:w-[50vw] lgs:text-md mt-5  text-secondary">{blog.subdescription61}</h2>

                                          {blog.subtopic62 && (
                                              <h2 className="lgs:w-[70vw] lgs:text-2xl sms:text-xl mt-5 text-secondary">
                                                {blog.subtopic62}
                                              </h2>
                                            )}



                                        <div className="text-gray-800 lgs:w-[50vw] mt-5 space-y-4">
                                        {blog.subdescription62.map((paragraph, index) => (
                                        <p key={index}>
                                          <FontAwesomeIcon icon={faCertificate} className="h-3 w-3 mr-2 text-secondary" />
                                          {paragraph.includes(":") ? (
                                            paragraph.split(":").map((part, i) => (
                                              <span key={i}>
                                                {i === 0 ? <strong>{part}:</strong> : part}
                                              </span>
                                            ))
                                          ) : (
                                            paragraph
                                          )}
                                        </p>
                                      ))}


                                      </div>






                      </div>

              </div>

              <div className='flex bg-transparent bg-blue-600 lgs:p-5 lgs:w-[30vw] items-center justify-center h-auto'>

              {/* <div className='flex bg-blue-700 lgs:h-[150vh] lgs:w-[30vw] rounded-lg items-center justify-center'/> */}

              </div>

        </div>

        <div className='flex  bg-transparent w-auto h-[5rem] items-center space-x-2 justify-center overflow-hidden'>
                  <div className= 'flex bg-secondary w-[8rem] h-[0.1rem] rounded-r-2xl'/>
                  <div className= 'flex bg-theme01 rounded-2xl w-[0.5rem] h-[0.5rem]'/>
                  <div className= 'flex  bg-theme01 rounded-2xl w-[0.5rem] h-[0.5rem]'/>
                  <div className= 'flex bg-secondary w-[8rem] h-[0.1rem] rounded-r-2xl'/>
         </div>

    </div>

    </div>

  );
};

export default Blog;
