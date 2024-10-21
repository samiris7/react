// Import necessary modules
import { RouterProvider } from 'react-router-dom'; // Correct for React Router v6
import { router } from './app/appRoute'; // Ensure the correct path to your router config
import { useGettodosQuery } from './features/todos/todosApi';

const App = () => {


  return <RouterProvider router={router} />;
};

export default App;





