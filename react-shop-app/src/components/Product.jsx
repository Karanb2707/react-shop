import React from 'react'

const Product = ({post}) => {
  return (
    <div className='flex flex-col items-center justify-between gap-2 shadow-md shadow-slate-800 p-3 m-2 rounded-2xl
      transform hover:scale-105 duration-300'>
      <h1 className='font-semibold'>
        {post.title}
      </h1>
      <p className='text-[14px]'>
        {post.description.substring(0,100)}....
      </p>
      <img src={post.image} className='h-[200px] p-1'/>
      <div className='w-full flex flex-row items-center justify-between p-1 mt-2'>
        <p className='font-semibold text-green-800'>Price: {post.price} ₹</p>
        <button className='py-1 px-3 rounded-full ring ring-amber-800 bg-amber-600 text-white font-semibold'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product