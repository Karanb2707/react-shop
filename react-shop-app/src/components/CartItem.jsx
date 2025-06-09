import React from 'react'

const CartItem = ({ item }) => {
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
        <button>
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem