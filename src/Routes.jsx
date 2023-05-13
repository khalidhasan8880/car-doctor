
import {
  createBrowserRouter
} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import ServiceDetails from "./Pages/ServiceDetails";
import CheckOut from "./Pages/CheckOut";
import AddNewService from "./Pages/AddNewService";
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
            path: '/checkout/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/add_new_service',
            element: <AddNewService></AddNewService>
        },
        {
            path: '/service/:id',
            element: <ServiceDetails></ServiceDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/service/${params.id}`)
        },
        {
            path: '/sign_up',
            element: <SignUp></SignUp>
        },
    ]
  },
]);

export default router