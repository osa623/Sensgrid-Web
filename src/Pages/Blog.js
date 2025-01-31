import { useLocation } from 'react-router-dom';

const Blog = () => {
  const location = useLocation();
  const blog = location.state?.tool; // Retrieve blog data

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (

    <div className='relative h-auto w-auto justify-center items-center'>
      <div className='flex lgs:h-[8rem] w-full h-auto'/>

        <div className="flex flex-col lgs:w-[75rem] mx-auto p-4 bg-white rounded-lg shadow-lg">

        <div className='flex lgs:w-[70rem] justify-between items-center'>
            <h1 className="lgs:text-5xl font-bold text-blue-900" style={{
                fontWeight:'500'
              }}>{blog.title}</h1>
              <p className="text-md text-gray-600">{blog.date}</p>
               
        </div>

          <h2 className="lgs:text-xl text-gray-600">{blog.subtitle}</h2>

           <div className="flex items-center mt-6">
            <img src={blog.profileimage} alt={blog.authorName} className="lgs:border-2 border-blue-600 w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{blog.authorName}</h3>
              <p className="text-xs text-gray-600">{blog.authorTitle}</p>
            </div>
          </div>

          <img src={blog.image} alt={blog.title} className="lgs:w-[50rem] lgs:mt-5 rounded-lg mb-4" style={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}/>
          <div className="text-gray-800 lgs:w-[70vw] space-y-4">
            {blog.introduction.map((paragraph, index) => (
              <p key={index} className="">{paragraph}</p>

            ))}
          </div>

          <div className='flex flex-col h-auto w-auto lgs:mt-8'>

          <div className='flex lgs:w-[70rem] justify-between items-center lgs:mt-4'>
            <h1 className="lgs:text-3xl font-bold text-blue-900" style={{
                fontWeight:'500'
              }}>{blog.topic2}</h1>              
          </div>
         <img src={blog.subimage01} alt={blog.title} className="lgs:w-[50rem] lgs:mt-5 rounded-lg mb-4" style={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}/>
            
            
              <h2 className=" lgs:w-[70vw] lgs:text-2xl  text-secondary">{blog.subtopic1}</h2>

              <h2 className=" lgs:w-[70vw] lgs:text-md lgs:mt-5  text-secondary">{blog.subdescription1}</h2>

              <h2 className=" lgs:w-[70vw] lgs:text-2xl lgs:mt-5  text-secondary">{blog.subtopic12}</h2>

              <div className="text-gray-800 lgs:w-[50vw] lgs:mt-5 space-y-4">
              {blog.subdescription12.map((paragraph, index) => (
                <p key={index}>
                  {/* Split the paragraph into parts to bold the first part */}
                  {paragraph.split(":").map((part, i) => (
                    <span key={i}>
                      {i === 0 ? <strong>{part}:</strong> : part}
                    </span>
                  ))}
                </p>
              ))}

            </div>

            
         



          </div>


          <div className='flex flex-col h-auto w-auto lgs:mt-8'>

          <div className='flex lgs:w-[70rem] justify-between items-center lgs:mt-4'>
            <h1 className="lgs:text-3xl font-bold text-blue-900" style={{
                fontWeight:'500'
              }}>{blog.topic2}</h1>              
          </div>
          <img src={blog.subimage02} alt={blog.title} className="lgs:w-[50rem] lgs:mt-5 rounded-lg mb-4" style={{
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}/>
            
            
              <h2 className=" lgs:w-[70vw] lgs:text-2xl  text-secondary">{blog.subtopic21}</h2>

              <h2 className=" lgs:w-[70vw] lgs:text-md lgs:mt-5  text-secondary">{blog.subdescription21}</h2>

              <h2 className=" lgs:w-[70vw] lgs:text-2xl lgs:mt-5  text-secondary">{blog.subtopic22}</h2>

              <div className="text-gray-800 lgs:w-[50vw] lgs:mt-5 space-y-4">
              {blog.subdescription22.map((paragraph, index) => (
                <p key={index}>
                  {/* Split the paragraph into parts to bold the first part */}
                  {paragraph.split(":").map((part, i) => (
                    <span key={i}>
                      {i === 0 ? <strong>{part}:</strong> : part}
                    </span>
                  ))}
                </p>
              ))}

            </div>

            




          </div>

        
        

        </div>
    </div>

  );
};

export default Blog;
