import React from 'react'
import { useParams } from 'react-router-dom'

const Course = () => {
  const params = useParams();
  return (
     <div className='w-full h-screen flex justify-center items-center '>
        <h1 className='text-4xl font-bold'>{params.courseId} Course Details</h1>
    </div>
  )
}

export default Course
