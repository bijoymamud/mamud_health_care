
import React from 'react';
import Container from '../../components/container';
import { Link } from 'react-router-dom';

const Categories = () => {
  
  const categories = [
    {
      name: 'BP Machine',
      id:1,
      category: "bp_machine",
      img: 'https://aalaquis.com/wp-content/uploads/2023/03/Omron-3-series-bp-monitor.png',
    },
    {
      name: 'Diabetic Machine',
      id: 2,
      product_category: "diabetic_machine",
      img: 'https://www.microvisione.com/wp-content/uploads/2024/08/BIOLAND.png',
    },
    {
      name: 'Nebulizer Machine',
      id: 3,
      category: "nebulizer",
      img: 'https://kripamedservices.in/wp-content/uploads/2024/01/nebulizer.png'
    },
    {
      name: 'Scissor',
      id: 4,
      category: "scissor",
      img: 'https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-surgical-tool-set-for-medical-procedures-precision-instruments-organized-in-a-png-image_14117079.png'
    },
   
  ];

  return (
      <Container className="pt-20 mb-5 ">
          <div className="bg-white">
                      
              <h1 className='text-center mb-14'>
              <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">Explore by Categories</span>
              </h1>

      <div className="flex justify-start gap-20">
 
       
        <div className="grid grid-cols-4 gap-10">
          {categories.map((category, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.img}
                alt={category.name}
                className="h-[300px] w-[300px]"
              />
            
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
                <Link
                  to={`/category-products/${category.id}`}
                  className="px-4 py-2 bg-purple-700 text-white rounded-lg">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Categories;


