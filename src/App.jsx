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


import Rootlayout from './components/Rootlayout'
import HomePage from './pages/HomePage'




const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,

    }

  ])
  return <RouterProvider router={router} />
}

export default App

