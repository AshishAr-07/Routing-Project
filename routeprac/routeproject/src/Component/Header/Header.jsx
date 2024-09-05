import React from 'react'
import {  NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='container flex '>
<div className='w-1/2 bg-red-700 text-center text-3xl p-5'>
Router FC
</div>
<div className='w-1/2 bg-black'>
<ul className=' text-white text-3xl flex justify-center item-center gap-10 p-5'>
    <NavLink to="/" className={({isActive}) =>
     `${isActive} ? "text-orange" : "text-white"`  }> 
    <li>Home</li>
    </NavLink>
    <NavLink to="/about" className={({isActive}) =>
     `${isActive} ? "text-orange" : "text-white"`  }> 
    <li>About</li>
    </NavLink>
    <NavLink to="/service" className={({isActive}) =>
     `${isActive} ? "text-orange" : "text-white"`  }> 
    <li>Service</li>
    </NavLink>
</ul>
</div>
    </div>
  )
}

export default Header