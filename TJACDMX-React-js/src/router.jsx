import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Convocatorias from "./views/Convocatorias/Convocatorias";
import AuthLayout from "./Layouts/AuthLayout";
import Dashboard from "./views/Dashboard";
import ConvocatoriasMake from "./views/Convocatorias/ConvocatoriasMake";
import Convocatoria from "./views/Convocatoria/Convocatoria";



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
            },
            {
                path:'/convocatorias',
                element: <Convocatorias/>
            },
            {
                path:'/convocatorias/crear',
                element: <ConvocatoriasMake/>
            },
            {
                path:'/convocatorias/:numero_of',
                element: <Convocatoria/>
            }
        ]
    }
])

export default router;