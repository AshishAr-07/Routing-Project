import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
   <div className='bg-teal-700 p-10'>
   <footer class="flex flex-col space-y-10 w-full justify-center m-10 ">

<nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium text-white text-3xl">
<ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          
          <li ><NavLink to="/" className={({isActive})=> 
          `px-2 text-2xl ${isActive ? "text-orange-700" : "text-white"}` }>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=> 
          ` px-2 text-2xl ${isActive ? "text-orange-700" : "text-white"}` }>About</NavLink></li>
          <li><NavLink to="/service" className={({isActive})=> 
          ` px-2 text-2xl ${isActive ? "text-orange-700" : "text-white"}` }>Service</NavLink></li>
          
      </ul> 
    
</nav>

<p class="text-center text-gray-700 font-medium text-white">&copy; 2024 Dummy Company Ltd. All rights reservered.</p>
</footer>
   </div>
    </>
  )
}

export default Footer