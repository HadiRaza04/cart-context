import React, { useEffect, useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { CartContext } from '../context/cart';
import './products.css'
import spinner from'../assets/icons8-loading-circle.gif'

const Products = () => {
    // const [data, setData] = useState([]);
    // useEffect(() => {
        //     fetch("https://dummyjson.com/products")
        //     .then(res => res.json())
        //     .then(res => setData(res.products))
        // }, [])
        
    const cart = useContext(CartContext);
    const getProducts = async () => {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        return data.products;
    }
    
    const {
            isLoading,
            error,
            data
        } = useQuery({ queryKey: ['products'], queryFn: getProducts })

    if(isLoading) {
        return (
            <img src={spinner} alt="spinner" className='h-[100px] w-[100px] bg-transparent m-auto'/>
        )
    };
    if(error) return "Error" + error.message;
        
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