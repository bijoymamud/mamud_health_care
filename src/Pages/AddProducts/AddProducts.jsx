import { CirclePlusIcon, ImagePlus } from 'lucide-react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa";
import { TbDiscountOff } from "react-icons/tb";
import { GiPolarStar } from "react-icons/gi";
import React from 'react'
import { useForm } from 'react-hook-form';
import Container from '../../components/container';

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
      console.log(data);
      reset()
}

  return (
    <section>

      <Container>
        <div className='grid grid-cols-4 px-10 py-20'>
          <div className='w-full col-span-2'>
            <h1>Hello</h1>
          </div>

<form onSubmit={handleSubmit(onSubmit)} className='w-full col-span-2'>
    <div className='flex items-center gap-5'>
       <div className='relative w-2/4'>
      <label className='block mb-2'>Product Name</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <CirclePlusIcon className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("productName", { required: "Product Name is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productName && <span className='text-red-600'>{ errors.productName.message}</span>}

              </div>

    <div className='relative w-2/4'>
      <label className='block mb-2'>Product Image</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <ImagePlus className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("productImg", { required: "Product Image is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productImg && <span className='text-red-600'>{ errors.productImg.message}</span>}

      
      </div>
            </div>
            
     <div className='flex items-center gap-5 mt-5'>
       <div className='relative w-2/4'>
      <label className='block mb-2'>Product Price</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <FaBangladeshiTakaSign className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("productPrize", { required: "Product Price is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productPrize && <span className='text-red-600'>{ errors.productPrize.message}</span>}

              </div>

    <div className='relative w-2/4'>
      <label className='block mb-2'>Discount Amount</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <TbDiscountOff className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("discount", { required: "Discount is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.discount && <span className='text-red-600'>{ errors.discount.message}</span>}

      </div>
            </div>

    <div className='flex items-center gap-5 mt-5'>
       <div className='relative w-2/4'>
      <label className='block mb-2'>Product Category</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <FaAlignLeft className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("category", { required: "Category is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.category && <span className='text-red-600'>{ errors.category.message}</span>}

              </div>

    <div className='relative w-2/4'>
      <label className='block mb-2'>Rating</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <GiPolarStar className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("rating", { required: " Place a rating" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.rating && <span className='text-red-600'>{ errors.rating.message}</span>}

      </div>
            </div>
    

    
            <input type="submit"
                   value="Add Product"
                   className='btn bg-blue-500 hover:bg-green-600 mt-5 w-full text-base uppercase text-white'/>
</form>
     </div>
    </Container>

    </section>
  )
}

export default AddProducts
