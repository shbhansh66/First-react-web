import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const Navigate=useNavigate();
  return (
    <div className='w-full h-10 flex items-center gap-2 mx-2 absolute top-16'>
       <button onClick={()=>{
        Navigate('/')
       }} className='rounded-sm shadow-lg shadow-green-500 text-white font-bold active:scale-95 bg-green-500 px-5 py-1'>Return to Home</button>
       <button onClick={()=>{
        Navigate(-1)
       }} className='rounded-sm shadow-lg shadow-green-500 text-white font-bold active:scale-95 bg-green-500 px-5 py-1'>Back</button>
       <button onClick={()=>{
        Navigate(+1)
       }} className='rounded-sm shadow-lg shadow-green-500 text-white font-bold active:scale-95 bg-green-500 px-5 py-1'>Next</button>
    </div>
  )
}

export default Navbar2
