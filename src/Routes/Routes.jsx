import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Brands from "../Pages/Brands/Brands";
import CardDetails from "../Pages/Brands/CardDetails";
import PreOrder from "../Pages/PreOrder/PreOrder";
import Product from "../components/SharedPage/Product/Product";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'brands/',
          element:<Brands></Brands>
        },
        {
          path:'/CardDetails',
          element:<CardDetails></CardDetails>
        },
        {
          path:'preOrder',
          element: <PreOrder></PreOrder>
        },
        {
          path:'product',
          element:<Product></Product>
        }
      ]
    },
  ]);