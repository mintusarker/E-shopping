import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './main/Main';
import Login from './form/Login';
import SignUp from './form/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
