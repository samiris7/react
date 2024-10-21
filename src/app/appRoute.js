import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/RootLayout";
import AddForm from "../features/post/AddForm";
import EditForm from "../features/post/EditForm";
import Allcocktails from "../features/cocktails/Allcocktails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Allcocktails />
    },

    {
      path: 'Logo',
      element: <RootLayout />
    },
    {
      path: 'add-form',
      element: <AddForm />
    },
    {
      path: 'edit-form/:id',
      element: <EditForm />
    }

    ]
  },



]);