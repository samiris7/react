// import React from 'react'
// import { age, func } from './app_data/data';
// import HomePage from './pages/HomePage';
// import Contact from './pages/Contact';


// const App = () => {

//   return (
//     <div>
//       <HomePage />
//       <Contact />




//     </div>
//   )
// }

// export default App
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Aboutpage from './pages/Aboutpage'
import Contact from './pages/Contact'

import Rootlayout from './components/Rootlayout'
import Card from './pages/Card'
import Header from './components/Header'



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,

      children: [
        {
          index: true,
          element: <Header />
        },
        {
          path: 'card',
          element: <Card />,


        },
        {
          path: 'contact-page',
          element: <HomePage />,


        }
      ]
    }

  ])
  return <RouterProvider router={router} />
}

export default App

