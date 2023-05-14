import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './main/Main';
import Home from './componant/Home/Home';
import Login from './componant/form/Login';
import SignUp from './componant/form/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
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
