
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/sign_up',
            element: <SignUp></SignUp>
        },
    ]
  },
]);

export default router