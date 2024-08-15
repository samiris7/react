import React from 'react'

import { Outlet } from 'react-router'

const Rootlayout = () => {
  return (
    <div>

      <Outlet />
    </div>
  )
}

export default Rootlayout
