// src/Categories.js
import React from 'react';
import Container from '../../components/container';
import { ChevronRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Diabetic Machine', img: 'https://www.microvisione.com/wp-content/uploads/2024/08/BIOLAND.png' },
    { name: 'BP Machine', img: 'https://aalaquis.com/wp-content/uploads/2023/03/Omron-3-series-bp-monitor.png' },
    { name: 'Nebulizer Machine', img: 'https://kripamedservices.in/wp-content/uploads/2024/01/nebulizer.png' },
    { name: 'Scissor', img: 'https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-surgical-tool-set-for-medical-procedures-precision-instruments-organized-in-a-png-image_14117079.png' },
   
  ];

  return (
      <Container className="pt-20 mb-5 ">
          <div className="bg-white">
                      
              <h1 className='text-center mb-14'>
              <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F] ">Explore by Categories</span>
              </h1>

      <div className="flex justify-start gap-20">
 
        {/* <aside className="p-4 bg-gray-100 rounded-lg shadow-md">
         
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
       
          <ul className="space-y-4">
            {categories.map((category, index) => (
              <li key={index} className="text-gray-700 hover:text-purple-700 cursor-pointer">
                {category.name}
              </li>
            ))}
          </ul>
      
          <button className="mt-8  w-full px-4 flex items-center py-3 border border-pink-700 text-pink-600 rounded-lg hover:bg-purple-700 hover:text-white transition font-bold">
            All Categories <ChevronRight size={20} className='mt-1' />
          </button>
        </aside> */}

       
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
                <button className="px-4 py-2 bg-purple-700 text-white rounded-lg">
                  Explore
                </button>
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