import React from 'react';
import Container from '../../components/container';
import { FaRightLong } from 'react-icons/fa6';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { HandCoins, ShoppingBag } from 'lucide-react';

const Banner = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://i.ibb.co.com/tqbSQ6J/Blue-and-White-Modern-Medical-Services-Banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <Container className='w-full'>
        <div className='py-5  text-center gap-5'>
          <div className='flex items-center gap-3 bg-gray-200 py-3 w-1/3 rounded-xl px-2 text-blue-600'>
            <div className='flex items-center gap-1'>
              <BsArrowUpRightCircleFill className='text-[#7F217C]'/>
              <p className='text-[#7F217C]'>Fast Delivery</p>
            </div>
            <div className='flex items-center gap-1'>
              <BsArrowUpRightCircleFill className='text-[#7F217C]'/>
              <p className='text-[#7F217C]'>Great Service</p>
            </div>
            <div className='flex items-center gap-1'>
              <BsArrowUpRightCircleFill className='text-[#7F217C]'/>
              <p className='text-[#7F217C]'>Easy Payment</p>
            </div>
          </div>
          
                  
          
        <div className='text-div flex flex-col justify-center h-[85vh]'>
        <div className='text-start flex-flex-col w-3/5'>
                          <h1 className='text-6xl font-extrabold'></h1>
                          <span className="text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] pb-2">Empowering Healthcare,</span>

                          <h1 className='text-6xl font-bold pt-4'></h1>
                          <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500/80 to-red-500 pb-2">One Instrument at a Time.</span>
                        <p className='text-gray-700 font-bold md:mt-6 text-lg'>Discover top-quality medical instruments designed to enhance precision, safety, and patient care. From diagnostic tools to surgical essentials, we provide healthcare professionals with reliable solutions for every need, backed by innovation and expertise you can trust.</p>
                      </div>   
                      
                      <div className='mt-10 flex gap-5'> 
                      <button className='text-start flex items-center font-bold gap-1 rounded-[3px] bg-gradient-to-r from-[#CB2584] to-[#792D8F] w-[165px] py-3 text-white px-2'>
                      <ShoppingBag size={20}  className='font-bold'/>
                          Shop Collection
                      </button>
                          
                      <button className='text-start flex items-center font-bold gap-1 rounded-[3px] bg-gradient-to-r from-red-500 to-yellow-500 w-[150px] py-3 text-white px-2'>
                      <HandCoins size={20}  className='font-bold'/>
                          Top Selling
                      </button>
                          
                     </div>
        </div>

        </div>
      </Container>
    </section>
  );
};

export default Banner;
