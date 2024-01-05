import React, { useContext } from 'react'
import { CartContext } from '../context/cart'
import './products.css'
const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);

  const removeFromCart = (itemId) => {
    const updatedCart = cart.items.filter(item => item.id !== itemId);
    cart.setItems(updatedCart);
  };
  const cartItems = cart.items.map((item, index) => {
    return (
      <div className='w-[80%] h-[120px] m-2 p-2 bg-gray-300 rounded-lg flex flex-col' key={index}>
        <div>
          <h1 className='text-md'>{item.title}</h1>
        </div>
        <div className='flex flex-row items-center justify-between m-2'>
          <p className='font-bold'>{item.price} $</p>
          <button type='button' className='w-[90px] h-[40px] m-2 text-white hover:bg-red-600 p-2 rounded-md bg-red-500' onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      </div>
    )
  })
  return (
    <div className='w-[300px] relative m-2 rounded-md p-2 border-2 '>
        <h1 className='text-4xl'>
          Cart
        </h1>
        <div className='overflow-scroll xyz h-[500px] flex flex-col items-center pt-4'>
            {cartItems}
        </div>
        <div className='absolute bottom-2 w-[90%] p-3'>
          <div className='w-[100%] h-[2px] bg-black'>
            {/* line */}
          </div>
          <h1 className='text-2xl mt-4'>Total {total} $</h1>
        </div>
    </div>
  )
}
export default Cart;