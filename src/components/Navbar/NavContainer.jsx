import React from 'react'
import Container from '../container'
import { Link } from 'react-router-dom'


const NavContainer = () => {
  return (
    <Container>
      <Container>
      <div className=" flex justify-between gap-10 text-purple-700 text-lg py-3">
             <div className='flex gap-16 font-bold'>
               <Link to="/" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Home</Link>
            <Link
              to="/products"
              className="hover:underline text-gray-700 hover:text-[#A72D8F]">Products</Link>
            
            <Link to="/aboutUs" className="hover:underline text-gray-700 hover:text-[#A72D8F]">About Us</Link>
               <Link to="/blogs" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Blog</Link>
               <Link  to="/contact" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Contact</Link>
           </div>
               <a href="#" className="text-purple-700 font-semibold">Limited Time Offer</a>
       </div>
      </Container>

    </Container>
  )
}

export default NavContainer
