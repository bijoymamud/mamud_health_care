import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Container from "../components/container"
import { MailPlus, PhoneCall, Search } from 'lucide-react';
import { FaUserAlt, FaQuestionCircle } from 'react-icons/fa';
const Main = () => {
  return (
      <div className="relative">
       <div className="shadow-lg sticky top-0 bg-white z-50">
  <Container>
   <Navbar/>
  </Container>
      </div>
      <Container>
      <div className=" flex justify-between gap-10 text-purple-700 text-lg py-3">
             <div className='flex gap-16 font-bold'>
               <a href="#" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Home</a>
               <a href="#" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Categories</a>
               <a href="#" className="hover:underline text-gray-700 hover:text-[#A72D8F]">About Us</a>
               <a href="#" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Blog</a>
               <a href="#" className="hover:underline text-gray-700 hover:text-[#A72D8F]">Contact</a>
           </div>
               <a href="#" className="text-purple-700 font-semibold">Limited Time Offer</a>
       </div>
      </Container>

      <Outlet />
      
    </div>
  )
}

export default Main
