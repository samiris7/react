import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/Rootlayout';
import ItemsPages from './components/ItemPages';
import AboutPage from './pages/app_data/AboutPage';
import ContactPage from './pages/app_data/ContactPage';
import HomePage from './components/HomePage';


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'items/:Random',
          element: <ItemsPages />
        },
        // {
        //   path: 'item-detail/:id',
        //   element: <ItemDetail />
        // },
        {
          path: 'about-page',
          element: <AboutPage />
        },
        {
          path: 'contact-page',
          element: <ContactPage />
        }
      ]
    },



  ]);



  return <RouterProvider router={router} />
}

export default App