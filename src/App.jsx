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



const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'about-page',
          element: <Aboutpage />,


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

