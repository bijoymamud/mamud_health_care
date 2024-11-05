import React from 'react'
import Container from '../../components/container'
import { Link } from 'react-router-dom'
import { BadgeDollarSign } from 'lucide-react'

const LatestDeal = () => {
  return (
    <section className='md:mt-20 md:pt-20 md:pb-10'>
    <Container>
              <div className='grid grid-cols-3 gap-5'>
                  
                  <div className='bg-[#66DAFF75] rounded-l-xl border'>
                      <div className='flex items-center justify-between'>
                          <div className='w-3/5 ps-4'>
                              <h1 className='text-xl font-semibold flex items-center gap-1 text-pink-700'>Latest Deal <BadgeDollarSign size={20} className='text-green-600' /></h1>
                              <h1 className='mb-5 text-xl font-extrabold'>Diabetic Strips </h1>
                              <button className='font-bold  bg-black/80 text-white/90 hover:bg-green-700 hover:text-white p-1 rounded-[5px]'>Shop Now</button>
                          </div>
                          <img  className='w-2/5 rounded-bl-[50px] shadow-md shadow-pink-400' src="https://www.lysunbio.com/uploads/202235326/wholesale-diabetic-test-strips29114366603.png" alt="" />
                      </div>
                  </div>
                  
                  <div className='bg-[#DE9C8575] rounded-l-xl border'>
                      <div className='flex items-center justify-between'>
                          <div className='w-3/5 ps-4'>
                              <h1 className='text-xl font-semibold flex items-center gap-1 text-pink-700'>Latest Deal <BadgeDollarSign size={20} className='text-green-600' /></h1>
                              <h1 className='mb-5 text-xl font-extrabold'>Statoscope</h1>
                              <button className='font-bold  bg-black/80 text-white/90 hover:bg-green-700 hover:text-white p-1 rounded-[5px]'>Shop Now</button>
                          </div>
                          <img  className='w-2/5 rounded-bl-[50px] shadow-md shadow-pink-400' src="https://img.freepik.com/premium-photo/medical-stethoscope-doctors-wellness-online-health-background-images-hd-wallpapers_976375-12205.jpg" alt="" />
                      </div>
                  </div>

                  <div className='bg-[#3734A96E] rounded-l-xl border'>
                      <div className='flex items-center justify-between'>
                          <div className='w-3/5 ps-4'>
                              <h1 className='text-xl font-semibold flex items-center gap-1 text-pink-700'>Latest Deal <BadgeDollarSign size={20} className='text-green-600' /></h1>
                              <h1 className='mb-5 text-xl font-extrabold'>Diabetic Neddles </h1>
                              <button className='font-bold  bg-black/80 text-white/90 hover:bg-green-700 hover:text-white p-1 rounded-[5px]'>Shop Now</button>
                          </div>
                          <img  className='w-2/5 rounded-bl-[50px] shadow-md shadow-pink-400' src="https://m.media-amazon.com/images/I/7193G-oiZlL._AC_UF1000,1000_QL80_.jpg" alt="" />
                      </div>
                  </div>

              </div>         
      </Container>
    </section>
  )
}

export default LatestDeal
