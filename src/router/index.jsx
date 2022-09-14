import Car from "../pages/Car/Car";
import Index from "../pages/Index/Index";
import { Navigate } from 'react-router-dom'
import VRHome from "../pages/VRHome";
export default [
    {
        path: "/",
        element: <Navigate to="index"></Navigate>,
    },
    {
        path: 'index',
        element: <Index></Index>
    }, {
        path: 'car',
        element: <Car></Car>
    }, {
        path: 'home',
        element: <VRHome></VRHome>
    }
]