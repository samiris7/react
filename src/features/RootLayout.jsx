import React from 'react'
import { Outlet } from 'react-router'
import Header from '../ui/Header'
import App from '../App'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div >
  )
}

export default RootLayout