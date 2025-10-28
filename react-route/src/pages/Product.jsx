import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
      <div className='w-full h-screen flex justify-center items-center '>
        <div className='absolute top-28'>
        <Link to='/product/men' className='underline mr-4 text-xl'>Men</Link>
         <Link to='/product/women' className='underline mr-4 text-xl'>Women</Link>

        </div>
        <Outlet />
    </div>
  )
}

export default Product
