import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BrandFeatures = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation triggers when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1 });
    } else {
      controls.start({ y: 50, opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      className='mx-auto border-b-2 border-pink-500 mb-5 w-2/3 pt-5 -mt-[40px] bg-gradient-to-tl from-pink-100 to-white drop-shadow-xl'
      initial={{ y: 50, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className='text-center text-2xl font-semibold'>
        Explore curated collections from{' '}
        <span className='text-pink-600 font-bold text-3xl'>20+</span> renowned brands <br />
        all in one place at <span className='text-pink-600 font-bold text-3xl'>Mamud Health Care</span>
      </p>

      <div className='flex items-center justify-around mt-5'>
        <img
          className='w-1/5'
          src='https://www.biolandbd.com/public/back_end/assets/company_logo/logo1.png'
          alt='Brand 1'
        />

        <img
          className='w-1/5'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/OMRON_Logo.svg/799px-OMRON_Logo.svg.png'
          alt='Brand 2'
        />

        <img
          className='w-1/5'
          src='https://1000logos.net/wp-content/uploads/2017/05/Phillips-Logo-2008.png'
          alt='Brand 3'
        />

        <img
          className='w-1/5'
          src='https://b6c6u5k5.rocketcdn.me/wp-content/uploads/2022/05/logo.png'
          alt='Brand 4'
        />
      </div>
    </motion.section>
  );
};

export default BrandFeatures;
