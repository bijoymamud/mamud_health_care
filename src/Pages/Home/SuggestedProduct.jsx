import React from 'react'
import Container from '../../components/container'
import useSuggestedProduct from '../../Hooks/useSuggestedProduct/useSuggestedProduct'
import { ShoppingCart, Star } from 'lucide-react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const SuggestedProduct = () => {

    const [suggestedProducts] = useSuggestedProduct();
  console.log(suggestedProducts)
  
  const handleAddCart = (product) => {
    console.log(product)
  }

  return (
    <section className='md:py-10'>
      
    <Container>
    <div className='flex mb-2'>
                <div>
                  <span className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] text-xl ">Suggested For You</span>
                  <div className="divider mt-0 h-[2px] bg-[#CB2584]"></div>
                  </div>
              </div>     

              
  <div className='grid grid-cols-5 gap-4'>
            {
              suggestedProducts.map((product) =><div
              className="card bg-base-100 shadow-md shadow-pink-200 border">
          <figure className="px-3 pt-3 flex flex-col justify-between h-full">
            <img
              src={ product.img}
              alt={product.product_name}
              className="rounded-xl w-[150px] h-[150px]" />
          </figure>
          <div className=" px-3 py-3 flex flex-col justify-between">
             <div>
                 <h2 className="card-title">{ product.product_name}</h2>
                  
                 <p className='flex items-top '>Price: <span className='font-bold ms-2'>{product.recent_price}</span><FaBangladeshiTakaSign className='text-xs' /></p>
                                    
                                    <p className='flex items-top'>Discount: <span className=' text-red-400 ms-2 line-through'> { product.discount}</span><FaBangladeshiTakaSign className='text-xs'/></p>

                                    <p ><span className='flex items-center gap-1'>Rating: { product.rating}<Star size={16} className='text-yellow-500'/></span></p>
             </div>
            <div className="card-actions">
                      
                      <button onClick={()=>handleAddCart(product)} className=" mt-5 mx-auto p-1 px-5 flex items-center gap-1 bg-gradient-to-r from-[#CB2584] to-[#792D8F] hover:from-[#5C236E] hover:to-[#c0478b] text-white rounded-md "><ShoppingCart size={20} />Add Item</button>
                      
                  </div>
                  
          </div>
        </div>)        
        }
    </div>
    

    </Container>
          
    </section>
  )
}

export default SuggestedProduct
