import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex bg-blue-500 from-neutral-50  justify-between pl-4 h-16 text-2xl align-middle pt-2 '>



      <NavLink className=' px-2 h-12 hover:bg-red-950 rounded-2xl' >Demo</NavLink>

      <NavLink className='px-2 h-12 hover:bg-red-950 rounded-2xl' to={'about-page'}>about</NavLink>

      <NavLink className='px-2 h-12 hover:bg-red-950 rounded-2xl' to={'contact-page'}> Contact</NavLink>
    </div>





  )
}

export default Header
