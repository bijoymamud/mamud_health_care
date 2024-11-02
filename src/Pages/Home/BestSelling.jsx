import React from 'react'
import Container from '../../components/container'
import useBestSelling from '../../Hooks/useBestSelling/useBestSelling'
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { FaRightLeft, FaStar } from 'react-icons/fa6';

const BestSelling = () => {
    const [bestProducts] = useBestSelling();
    console.log(bestProducts)



  return (
    <section className='py-10'>
    <Container>
              <div className='flex items-center justify-between pb-'>
                  <div>
                  <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] text-xl ">Best Selling</span>
                  <div className="divider h-[2px] mt-0 bg-[#CB2584]"></div>
                  </div>

                  <div>
                      <button className='flex items-center gap-1 text-lg text-pink-700 font-bold mb-5 border-2 border-pink-700 hover:border-amber-600 p-1 px-2'>
                      <h1 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">View All</h1><ChevronRight size={24} />
                     </button>
                  </div>
              </div>

              <div className='grid grid-cols-5 gap-3 '>
                  {
                      bestProducts.map((product) => <div
                          className="card bg-base-100 shadow-md shadow-pink-200 border">
                      <figure className="px-3 pt-3">
                        <img
                          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          alt="Shoes"
                          className="rounded-xl" />
                      </figure>
                      <div className=" px-3 py-3">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                          <button className=" mt-5 mx-auto border-2 border-pink-700 p-1 px-5 flex items-center gap-1 bg-gradient-to-r from-[#CB2584] to-[#792D8F]  text-white rounded-md"><ShoppingCart size={20}/>Add Item</button>
                        </div>
                      </div>
                    </div>)
                 }
              </div>
      </Container>
    </section>
  )
}

export default BestSelling
