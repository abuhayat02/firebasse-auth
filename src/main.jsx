import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/pages/Home/Home';
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/Contact';
import  Login  from './Components/pages/Login/Login';
import Regester from './Components/Register/Regester.jsx'


let myRouters = createBrowserRouter([
  {
    path : '/',
    errorElement : <p>Page not found</p>,
    element : <Root></Root>,
    children : [
      {
        path : '/',
        element : <Home></Home> ,
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Regester></Regester>
      }
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={myRouters} >

    </RouterProvider>
  </StrictMode>,
)
