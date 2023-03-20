

import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { SiderMenu } from "./components/SiderMenu";
import { ToDo } from "./components/Todo";
import { LoginPage } from "./screens/LoginPage";
import { ProfilePage } from "./screens/ProfilePage";



export const router = createBrowserRouter([

    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:':id',
        element:<ProfilePage/>,
    },
      {
    path:':id/posts',
    element:<Posts/>
   },
   {
    path:':id/gallery',
    element:<Gallery/>
   },
   {
    path:':id/todo',
    element:<ToDo/>
   }
 
])



