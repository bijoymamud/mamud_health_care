
import { MailPlus, PhoneCall, Search } from 'lucide-react';
import { FaUserAlt, FaQuestionCircle } from 'react-icons/fa';
import Container from '../container';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-between items-center  pt-1 text-sm">
      <span className='text-purple-700 '>Welcome to Mamud Health Care!</span>

      {/* Top Right Links */}
      <div className="flex space-x-4 mt-2 md:mt-0">
        <button className="flex items-center space-x-1 text-purple-700 ">
          <FaQuestionCircle />
          <span>Need Help</span>
        </button>
        <div className="flex items-center space-x-1">
          <FaUserAlt />
          
            <div>
              <Link
              to="/signup"
              className='hover:text-purple-900'>Sign Up</Link> / 
              
              <Link
              to="/login" 
              className='hover:text-purple-900'> Sign In</Link>
            </div>
        </div>
      </div>
    </div>

    {/* Search and Navigation Section */}
    <div className="flex flex-col md:flex-row justify-between items-center pb-2 md:space-x-4">
        <Link to="/">
        <img
        className="w-[100px]"
        src="https://i.ibb.co.com/djYQ4Ww/Black-and-White-Circle-Business-Logo-1.png"
        alt="logo"
      />
        </Link>

      <div className="flex items-center w-full md:w-1/3 bg-gray-50 drop-shadow-md rounded-full px-4 py-2 space-x-1">
        <Search size={20} className="text-purple-500 font-bold" />
        <input
          type="text"
          placeholder="Search essential medical equipment and more..."
          className="bg-transparent outline-none w-full text-gray-700"
        />
      </div>

      <div className="flex justify-between gap-5 items-center">
        <button className="hover:text-purple-900">
          <div className="flex items-center justify-end space-x-2 mb-1">
            <PhoneCall size={18} className="text-[#A72D8F]" />
            <span>Call Us</span>
          </div>
          <span className="text-black font-semibold">01712907897</span>
        </button>

        <button className="hover:text-purple-900">
          <div className="flex items-center justify-end space-x-2 mb-1">
            <MailPlus size={18} className="text-[#A72D8F]" />
            <span>Email</span>
          </div>
          <span className="text-black font-semibold">bijoymamud@gmail.com</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
