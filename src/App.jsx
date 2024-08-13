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
import Sample1 from './pages/Sample1'
import Sample2 from './pages/Sample2'
import Random from './pages/Random'
import Another from './pages/Another'
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

