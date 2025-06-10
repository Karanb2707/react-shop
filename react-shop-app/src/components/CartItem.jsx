import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success('Item removed!');
  }

  return (
    <div className='flex flex-row gap-4 p-2 ring-2 ring-green-700 m-2 items-center justify-evenly rounded-3xl'>
      <div className='p-2'>
        <img src={item.image} className='h-[160px] w-[250px]' />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[16px] font-semibold'>
          {item.title}
        </h1>
        <p className='text-[14px]'>
          {item.description.substring(0, 100)}....
        </p>
        <p className='text-[16px] font-semibold'>
          Price: <span className='text-green-700'>{item.price} ₹</span>
        </p>
        <div>
          <FaTrashAlt className='text-[20px] text-red-600 cursor-pointer' onClick={removeFromCart}/>
        </div>
      </div>
    </div>
  )
}

export default CartItem