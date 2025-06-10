import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({ item }) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('Item removed!');
  }

  return (
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>
          {item.title}
        </h1>
        <p>
          {item.description}
        </p>
        <p>
          {item.price}
        </p>
        <button onClick={removeFromCart}>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem