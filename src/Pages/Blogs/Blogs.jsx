import React from 'react'
import useBlogData from '../../Hooks/useBlogData/useBlogData'
import Container from '../../components/container';
import { ReactTyped } from 'react-typed';

const Blogs = () => {
  const [blogs] = useBlogData();
  console.log(blogs)
  return (
      <section>
          
      <Container>
        {/* <h2 className='flex flex-col h-[70vh] justify-center items-center'>Blogs info comming soon...!</h2> 
        text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        */}
        
        <div>
        <ReactTyped
            strings={[
              "Blogs info comming soon...!",
              
            ]}
            typeSpeed={60}
            backSpeed={50}
            loop
            className="flex  h-[70vh] justify-center items-center md:text-4xl text-xl font-extrabold "
            
          />
        </div>

          </Container>
      
    </section>
  )
}

export default Blogs
