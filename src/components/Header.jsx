import React from 'react'
import { NavLink } from 'react-router-dom'
import Lund from '../pages/Contact'
const Header = () => {
  return (
    <div className='flex bg-red-500 from-neutral-50  justify-between pl-4'>



      <NavLink > <h1>Demo</h1></NavLink>

      <NavLink to={'about-page'}>about</NavLink>
      <div className='pr-3'>
        <NavLink to={'contact-page'}> Contact</NavLink>
      </div>





    </div>
  )
}

export default Header
