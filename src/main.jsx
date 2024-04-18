import React from 'react'
import ReactDOM from 'react-dom';
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
import Contact from './component/Contact.jsx';
import Private from './component/private.jsx';
import Update from './component/Update.jsx';
import Profile from './component/userPrifile.jsx';
import Error from './component/error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
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
      },
      {
        path: '/con',
        element:<Private><Contact></Contact></Private>
      },
      {
        path: '/up',
        element: <Update></Update>
      },
      {
        path: '/user',
        element: <Private><Profile></Profile></Private>
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
