import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Blogs from "../Pages/Blogs/Blogs";
import LoginPage from "../Pages/Login/Login";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import Products from "../Pages/Products/Products";
import AddProducts from "../Pages/AddProducts/AddProducts";
import AboutUsSection from "../Pages/AboutUs/AboutUs";
import PlaceOrderPage from "../Pages/PlaceOrderPage/PlaceOrderPage";
import ProductsPage from "../Pages/CategoryProduct/ProductsPage";
import Dashboard from "../Layout/Dashborad";
import UserHome from "../Layout/Dashboard/UserDashboard/UserHome";
import MyOrderCart from "../Layout/Dashboard/UserDashboard/MyOrderCart";
import PaymentHistory from "../Layout/Dashboard/UserDashboard/PaymentHistory";
  

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
          },
          {
            path: "/category-products/:id",
            element: <ProductsPage/>
          },
          {
            path: '/addProducts',
            element: <AddProducts/>
          },
          {
            path: '/placeOrder',
            element: <PlaceOrderPage/>
          },
          {
            path: '/aboutUs',
            element:<AboutUsSection/>
          },
        
    ],  
  },

  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'userHome',
        element: <UserHome/>
      },
      {
        path: 'mycart',
        element: <MyOrderCart/>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory/>
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