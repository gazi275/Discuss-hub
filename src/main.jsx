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

import Contact from './Contact/Contact.jsx';

import CardDetails from './Card/CardDetails.jsx';
import Payment from './payment/Payment.jsx';
import Comment from './Comment/Comment.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
import TablePost from './Dashboard/Componenets/tablePost.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ManageUser from './Admin/ManageUser.jsx';
import Profile from './Admin/Profile.jsx';
import Announcement from './Admin/Announcement.jsx';
import Announments from './Home/Announments.jsx';
import { Toaster } from 'react-hot-toast';

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
        path: "/notification",
        element:<Announments></Announments>
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
      {
        path:"/details/:id",
        element:<PrivateRoute>
          <CardDetails></CardDetails>
        </PrivateRoute>,
        loader:({params})=>{
     

          return fetch(`https://discuss-hubs.vercel.app/details/${params.id}`)}
      },
      {
        path: "/payment",
        element:<Payment></Payment>
      },
      {
        path: "/comment",
        element:<Comment></Comment>,
        loader: () => fetch("https://discuss-hubs.vercel.app/comment"),
      },
        
      
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "myprofile",
        element:<MyProfile></MyProfile>
      },
      {
        path: "admin",
        element:<Profile></Profile>
      },
      {
        path: "manageUser",
        element:<ManageUser></ManageUser>,
        loader: () => fetch("http://localhost:5001/users")
      },
      {
        path: "announcement",
        element:<Announcement></Announcement>
      },


      {
        path: "add",
        element:<Add></Add>
      },
      {
        path: "mypost",
        element:<TablePost></TablePost>,
        loader: () => fetch("https://discuss-hubs.vercel.app/post"),
      },
     
    
    
    
    
    ]


  }
]);

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <Toaster></Toaster>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
