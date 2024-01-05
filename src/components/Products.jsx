import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/cart';
import './products.css'
const Products = () => {
    const [data, setData] = useState([]);
    const cart = useContext(CartContext);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res => setData(res.products))
    }, [])
    const items = data.map((item) => {
        return(
            <div className='w-[250px] relative p-2 m-2 h-[300px] rounded-md bg-gray-300' key={item.id}>
                <h3 className='text-2xl'>{item.title}</h3>
                <p>{item.description}</p>
                <h4 className='text-xl font-bold m-[10px]'>Price: {item.price} $</h4>
                <div className='flex absolute bottom-1'>
                    <button type='button' className='w-[100px] h-[50px] m-2 text-white hover:bg-blue-600 p-2 rounded-md bg-blue-500' onClick={() => cart.setItems([{title: item.title, price: item.price, id:item.id}, ...cart.items])}>Add to cart</button>
                </div>
            </div>
        )
    })
  return (
    <>
        <h1 className=' text-4xl '>Products</h1>
        <div className='w-[900px] flex flex-wrap items-center justify-center overflow-auto xyz'>
            {items}
        </div>
    </>
  )
}
export default Products