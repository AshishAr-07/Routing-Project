import React from 'react'
import { useParams } from 'react-router-dom'


function Services() {
  const {serId} =useParams()
  console.log(serId)
  return (
   
    <div className='text-4xl h-[50vh] flex justify-center items-center text-white bg-red-600 '>Services {serId}</div>
    
  )
}

export default Services