import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Rootlayout from './pages/app_data/Rootlayout'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [

        {
          path: 'about',
          element: <About />,


        },
        {
          path: 'contact-page',
          element: <Contact />,


        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App