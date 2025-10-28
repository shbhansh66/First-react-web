import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
      <div className='w-full h-screen flex justify-center items-center '>
        <div className='absolute top-16'>
        <Link to='/product/men' className='underline mr-4 text-xl'>Men</Link>
         <Link to='/product/women' className='underline mr-4 text-xl'>Women</Link>

        </div>
        <h1 className='text-4xl text-red-500 font-bold'>Product</h1>
    </div>
  )
}

export default Product
