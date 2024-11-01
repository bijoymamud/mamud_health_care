
import { MailPlus, PhoneCall, Search } from 'lucide-react';
import { FaUserAlt, FaQuestionCircle } from 'react-icons/fa';
import Container from '../container';

const Navbar = () => {
  return (
    <header >
      <div className='shadow-xl'>
      <Container>
      <div className="flex flex-col md:flex-row justify-between items-center text-purple-700 py-2 text-sm">
       
       <span>Welcome to worldwide ShopAway!</span>
       
       {/* Top Right Links */}
       <div className="flex space-x-4 mt-2 md:mt-0">
         <button className="flex items-center space-x-1 hover:text-purple-900">
           <FaQuestionCircle />
           <span>Need Help</span>
         </button>
         <button className="flex items-center space-x-1 hover:text-purple-900">
           <FaUserAlt />
           <span>Sign Up/Sign In</span>
         </button>
         
       </div>
     </div>

     {/* Search and Navigation Section */}
     <div className="flex flex-col md:flex-row justify-between  items-center py-3 md:space-x-4">
            
                 <h1 className="text-purple-700 text-3xl font-semibold">ShopAway</h1>
                      
                 <div className="flex items-center w-full md:w-1/3 bg-gray-50  rounded-full px-4 py-2 space-x-1">
                            <Search size={20} className="text-purple-500 font-bold" />
                           <input
                               type="text"
                               placeholder="Search essential medical equipments and more..."
                               className="bg-transparent outline-none w-full text-gray-700"/>
                       </div>
                
             <div className='flex justify-between gap-5 items-center'>
             <button className=" hover:text-purple-900">
                     <div className='flex items-center justify-end space-x-2 mb-1'>
                     <PhoneCall size={18} className='text-[#A72D8F]'/>
                     <span>Call Us</span>
                       </div>
                   <span className="text-black font-semibold">01712907897</span>
                 </button>
                 
                 <button className=" hover:text-purple-900">
                     <div className='flex items-center justify-end space-x-2 mb-1'>
                     <MailPlus size={18} className='text-[#A72D8F]'/>
                     <span>Email</span>
                </div>
               <span className="text-black font-semibold">bijoymamud@gmail.com</span>
                 </button>
       
             </div>
         </div>


        
      </Container>
      </div>
      
      <Container>
      <div className=" flex justify-between gap-10 text-purple-700 text-lg mb-5 py-4">
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
      
     
    </header>
  );
};

export default Navbar;
