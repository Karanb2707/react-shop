import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useEffect, useState } from 'react';

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setTotalAmt(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
      {
        cart.length > 0 ?
          <div className='w-full lg:w-7/12 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto mt-4'>
            <div className='flex flex-col'>
              {
                cart.map((item) => {
                  return <CartItem item={item} key={item.id} />
                })
              }
            </div>
            <div className='h-[220px] flex flex-col m-2 border-2 border-yellow-600 p-4 rounded-3xl justify-between'>
              <h1 className='text-2xl font-semibold'>Your Cart</h1>

              <div className='flex flex-col gap-4'>
                <h2 className='text-[18px] mt-2 font-semibold'>Summary</h2>

                <div className='font-semibold'>
                  <span>Total Items : {cart.length}</span>
                  <h1>Total Amount : {totalAmt} ₹</h1>
                </div>
                <button className='py-1 w-[180px] text-[16px] font-semibold text-white bg-blue-600 ring ring-blue-900 rounded-3xl'>
                  Checkout
                </button>
              </div>
            </div>
          </div> :

          <div className='flex flex-col items-center justify-center mt-[250px] gap-4'>
            <h1 className='text-[18px] font-semibold'>No Item Selected!</h1>
            <Link to='/'>
              <button className='py-2 px-4 ring-2 ring-green-900 rounded-2xl text-[16px] text-white bg-green-600 font-semibold cursor-pointer'>
                Shop Now
              </button>
            </Link>
          </div>
      }
    </div>
  )
}

export default Cart