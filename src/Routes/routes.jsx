import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Ridesharers from "../Layouts/Ridesharers/Ridesharers";
import RidesharersHome from "../Pages/RidesharersPages/RidesharersHome/RidesharersHome";
import AdminPanel from "../Layouts/AdminPanel/AdminPanel";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },

        ]
    },
    {
        path: '/ridesharers',
        element:<Ridesharers></Ridesharers>,
        children: [
            {
                path: '/ridesharers',
                element: <RidesharersHome></RidesharersHome>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminPanel></AdminPanel>,
        children: [
            {
                path: '/admin',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
])

export default router;