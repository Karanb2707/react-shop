import React from 'react'

const Product = ({post}) => {
  const selected = false;
  return (
    <div className='flex flex-col items-center justify-between gap-2 shadow-md shadow-slate-800 p-3 m-2 rounded-2xl
      transform hover:scale-105 duration-300'>
      <h1 className='font-semibold text-[15px]'>
        {post.title}
      </h1>
      <p className='text-[12px]'>
        {post.description.substring(0,100)}....
      </p>
      <img src={post.image} className='h-[160px] p-1'/>
      <div className='w-full flex flex-row items-center justify-between p-1 mt-2'>
        <p className='font-semibold text-green-800 text-[14px]'>Price: {post.price} ₹</p>
        <button className='py-1 px-2 rounded-full ring ring-amber-800 bg-amber-600 text-white font-semibold text-[14px] cursor-pointer'>
          {
            selected ? <p>Remove Item</p> : <p>Add to Cart</p>
          }
        </button>
      </div>
    </div>
  )
}

export default Product