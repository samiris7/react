import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Header = () => {
  return (

    <div className='flex justify-evenly p-6 bg-purple-500 m-3'>

      <NavLink to={'Homepage'}>Homepage</NavLink>
      <NavLink to={'contact-page'}>Contact</NavLink>
      <NavLink to={'about'}>About</NavLink>
    </div>

  )
}

export default Header
