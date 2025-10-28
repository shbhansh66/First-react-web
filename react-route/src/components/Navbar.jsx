import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-gray-100 h-15 w-full bg-cyan-900 p-4 flex justify-between'>
<h1 className='font-bold text-2xl md:text-4xl'>Shubhanshu</h1>
<div className='flex gap-4 md:text-xl md:gap-6'>
  <Link to='/' className='underline'>Home</Link>
  <Link to='/About' className='underline'>About</Link>
   <Link to='/Contact' className='underline'>Contact </Link>
  <Link to='/Product' className='underline'>Product</Link>
  
 
</div>
    </div>
  )
}

export default Navbar
