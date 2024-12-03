import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import Products from "../Pages/Products/Products";
  

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
          },
          {
            path: '/contact',
            element: <Contact/>
          },
          {
            path: '/blogs',
            element: <Blogs/>
          },
          {
            path: '/products',
            element:<Products/>
          }
    ],
        
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/signup',
    element: <SignUpPage/>
  }
  ]);