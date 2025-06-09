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
          <div>
            <div>
              {
                cart.map((item) => {
                  return <CartItem item={item} key={item.id} />
                })
              }
            </div>
            <div>
              <h1>Your Cart</h1>
              <h2>Summary</h2>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
              <h1>Total Amount: {totalAmt}</h1>
              <button>Checkout</button>
            </div>
          </div> :

          <div>
            <h1>No Item Selected!</h1>
            <Link to='/'>
              <button>
                Shop Now
              </button>
            </Link>
          </div>
      }
    </div>
  )
}

export default Cart