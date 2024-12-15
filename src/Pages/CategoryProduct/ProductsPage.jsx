import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import Container from '../../components/container';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const ProductsPage = () => {
  const { id } = useParams();
  const [products] = useProducts();

  const handleViewDetails = (data) => {
    console.log("working on view details")
  }



  return (
    <Container className="py-20">
      <div className="container mx-auto pt-10">
        <div>
        <h1 className='mb-14'>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">Our Products for You</span>
            <div className="divider w-[364px] h-[2px] mt-1 bg-[#CB2584]"></div>

        </h1>
     </div>
      <div className="grid grid-cols-5 gap-5">
        {products?.filter((product) =>product.catagory_id == id)
        ?.map((product) => (
          <div key={product.id} className="border  rounded-lg p-2 shadow-md shadow-pink-200">
            <img  src={product.img} alt={product.product_name} className=" h-[250px] mx-auto object-cover" />
            <h2 className="text-lg font-bold mt-4 ps-2">{product.product_name}</h2>
            <div className="mt-2 ps-2">  
              <h1 className='text-black/60 font-semibold flex gap-3'>Regular Price: <span className="line-through text-red-500 flex">{product.discount_price}<FaBangladeshiTakaSign className='text-xs' /></span></h1>{' '}

              <h1 className='text-black/60 font-semibold flex gap-3'>Recent Price: <span className="text-black flex">{product.recent_price} <FaBangladeshiTakaSign className='text-xs' /></span></h1>
             
            </div>

            <div className='mt-5 mb-1'>
              <button
                onClick={()=>handleViewDetails()}
                className='h-[34px] w-[130px] bg-gradient-to-r from-[#CB2584] to-[#792D8F] hover:from-[#5C236E] hover:to-[#c0478b] text-white flex items-center justify-center mx-auto rounded-md'>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default ProductsPage;