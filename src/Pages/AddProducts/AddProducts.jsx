import { CirclePlusIcon, ImagePlus } from 'lucide-react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbDiscountOff } from "react-icons/tb";
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
      {errors.productName && <span>{ errors.productName.message}</span>}

              </div>

    <div className='relative w-2/4'>
      <label className='block mb-2'>Product Image</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <ImagePlus className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("productName", { required: "Product Name is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productName && <span>{ errors.productName.message}</span>}

      
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
          {...register("productPrize", { required: "Product Name is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productPrize && <span>{ errors.productPrize.message}</span>}

              </div>

    <div className='relative w-2/4'>
      <label className='block mb-2'>Discount Amount</label>
    
      <div className='flex items-center'>
        <div className='absolute left-3'>
          <TbDiscountOff className='w-5 h-5 text-gray-300'/>
        </div>
        <input
          type="text"
          {...register("productName", { required: "Product Name is required" })}
          className="input input-bordered w-full pl-10"
        />
      </div>
      {errors.productName && <span>{ errors.productName.message}</span>}

      
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
