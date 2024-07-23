import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Login from "./views/Login";
import Registro from "./views/Registro";
import ConvocatoriaDetail from "./views/Convocatorias/ConvocatoriaDetail";
import Convocatorias from "./views/Convocatorias/Convocatorias";
import ConvocatoriasMake from "./views/Convocatorias/ConvocatoriasMake";
import AuthLayout from "./Layouts/AuthLayout";
import Dashboard from "./views/Dashboard";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [

            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/registro',
                element: <Registro/>
            },
            
        ]
    },
    {
        path:'/',
        element: <AuthLayout/>,
        children:[
            {
                index: true,
                element: <Dashboard/> 
            }
        ]
    }
])

export default router;