import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';

const ProductsPage = () => {
  const { category } = useParams();
  const [products] = useProducts();

  const filteredProducts = products.filter(
    (product) => product.product_category === category
  );

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Products for {category.replace('_', ' ')}</h1>
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img src={product.img} alt={product.product_name} className="h-48 w-full object-cover" />
            <h2 className="text-xl font-bold mt-4">{product.product_name}</h2>
            <p className="text-gray-500 mt-2">
              <span className="line-through">{product.discount_price}</span>{' '}
              <span className="text-red-500">{product.recent_price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
