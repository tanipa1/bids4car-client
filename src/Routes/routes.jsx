import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Ridesharers from "../Layouts/Ridesharers/Ridesharers";
import RidesharersHome from "../Pages/RidesharersPages/RidesharersHome/RidesharersHome";
import AdminPanel from "../Layouts/AdminPanel/AdminPanel";
import ManageUsers from "../Pages/AdminPages/ManageUsers/ManageUsers";
import ManageRidesharers from "../Pages/AdminPages/ManageRidesharers/ManageRidesharers";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FairRent from "../Pages/AdminPages/FairRent/FairRent";
import RideStatus from "../Pages/RidesharersPages/RideStatus/RideStatus";
import Passengers from "../Layouts/Passengers/Passengers";

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
            {
                path: '/about',
                element: <AboutUs></AboutUs>
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
            },
            {
                path: 'ridesharers/rideStatus',
                element: <RideStatus></RideStatus>
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminPanel></AdminPanel>,
        children: [
            {
                path: '/admin/user',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/admin/ridesharers',
                element: <ManageRidesharers></ManageRidesharers>
            },
            {
                path: '/admin/fairRent',
                element: <FairRent></FairRent>
            },
        ]
    },
    {
        path: '/passengers',
        element: <Passengers></Passengers>,
        children: [
            {
                
            }
        ]
    }
])

export default router;