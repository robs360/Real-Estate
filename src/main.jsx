import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Banner.jsx';
import Details from './component/details.jsx';

import Login from './component/Login2.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './component/AuthProvider.jsx';
import Signup from './component/signup.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        loader: () => fetch('/blog.json'),
        element: <Details></Details>
      },
    
      {
        path: '/log',
        element: <Login></Login>
      },
      {
        path: '/reg',
        element: <Signup></Signup>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
