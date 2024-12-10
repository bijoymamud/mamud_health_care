
import React from 'react';
import Container from '../../components/container';
import useProducts from '../../Hooks/useProducts/useProducts';

const Categories = () => {
  const [products, isLoading] = useProducts()
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


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Container from '../../components/container';
// import { Link } from 'lucide-react';

// const Categories = () => {
//   const navigate = useNavigate();
//   const categories = [
//     { name: 'Diabetic Machine', img: 'https://www.microvisione.com/wp-content/uploads/2024/08/BIOLAND.png', key: 'diabetic_machine' },
//     { name: 'BP Machine', img: 'https://aalaquis.com/wp-content/uploads/2023/03/Omron-3-series-bp-monitor.png', key: 'bp_machine' },
//     { name: 'Nebulizer Machine', img: 'https://kripamedservices.in/wp-content/uploads/2024/01/nebulizer.png', key: 'nebulizer_machine' },
//     { name: 'Scissor', img: 'https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-surgical-tool-set-for-medical-procedures-precision-instruments-organized-in-a-png-image_14117079.png', key: 'scissor' },
//   ];

//   const handleExplore = (categoryKey) => {
//     navigate(`/products/${categoryKey}`);
//   };

//   return (
//     <Container className="pt-20 mb-5">
//       <div className="bg-white">
//         <h1 className="text-center mb-14">
//           <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CB2584] to-[#792D8F]">
//             Explore by Categories
//           </span>
//         </h1>
//         <div className="flex justify-start gap-20">
//           <div className="grid grid-cols-4 gap-10">
//             {categories.map((category, index) => (
//               <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
//                 <img src={category.img} alt={category.name} className="h-[300px] w-[300px]" />
//                 <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition-opacity duration-300">
//                   <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
//                   <button
//                     to="/categoryProduct"
//                     className="px-4 py-2 bg-purple-700 text-white rounded-lg"
//                     onClick={() => handleExplore(category.key)}
//                   >
//                     Explore
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Categories;
