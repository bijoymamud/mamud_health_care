import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import Container from '../../components/container';

const ProductsPage = () => {
  const { id } = useParams();
  const [products] = useProducts();



  return (
    <Container className="py-20">
      <div className="container mx-auto pt-10">
        <div>
        <h1 className='mb-14'>
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">Our Products for You</span>
            <div className="divider w-[364px] h-[2px] mt-1 bg-[#CB2584]"></div>

        </h1>
     </div>
      <div className="grid grid-cols-4 gap-5">
        {products?.filter((product) =>product.catagory_id == id)
        ?.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img  src={product.img} alt={product.product_name} className="w-full h-[250px] mx-auto object-cover" />
            <h2 className="text-xl font-bold mt-4">{product.product_name}</h2>
            <p className="text-gray-500 mt-2">
              <span className="line-through">{product.discount_price}</span>{' '}
              <span className="text-red-500">{product.recent_price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
    </Container>
  );
};

export default ProductsPage;