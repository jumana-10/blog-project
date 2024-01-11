import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Profile from './Pages/Profile.jsx';
import Write from './Pages/Write.jsx';
import Subscription from './Pages/Subscription.jsx';
import SingleBlog from './Pages/SingleBlog.jsx';


const router = createBrowserRouter(
  [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",  
      element: <Home />,
      },
      {
        path: "/blog",  
      element: <Blog />,
      },
      {
        path: "/subscription",  
      element: <Subscription />,
      },
      {
        path: "/profile",  
      element: <Profile />,
      },
      {
        path: "/write",  
      element: <Write />,
      },
      {
        path:"/blogs/:id",
        element: <SingleBlog />,
        loader:({params}) => fetch(`/Api/api/blogsData.json/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
