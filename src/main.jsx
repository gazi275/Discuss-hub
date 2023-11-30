import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Register/Login.jsx';
import Register from './Register/Register.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import MyProfile from './Dashboard/Componenets/MyProfile.jsx';
import Add from './Dashboard/Componenets/Add.jsx';
import MyPost from './Dashboard/Componenets/MyPost.jsx';
import Contact from './Contact/Contact.jsx';
import Cards from './Home/Cards.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      
        
      
    ],
  },
  {

    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "myprofile",
        element:<MyProfile></MyProfile>
      },
      {
        path: "add",
        element:<Add></Add>
      },
      {
        path: "mypost",
        element:<MyPost></MyPost>,
        loader: () => fetch("http://localhost:5001/post"),
      },
    
    
    
    
    ]


  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>,
)
