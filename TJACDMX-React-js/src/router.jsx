import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Convocatorias from "./views/Convocatorias/Convocatorias";
import AuthLayout from "./Layouts/AuthLayout";
import Dashboard from "./views/Dashboard";
import ConvocatoriasMake from "./views/Convocatorias/ConvocatoriasMake";
import Convocatoria from "./views/Convocatoria/Convocatoria";
import ConvocatoriaMake from "./views/Convocatoria/ConvocatoriaMake";
import ConvocatoriaDetail from "./views/Convocatoria/ConvocatoriaDetail";



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
            },
            {
                path: '/convocatorias/:numero_of/crear',
                element: <ConvocatoriaMake/>
            },
            {
                path: '/convocatorias/:numero_of/:num_orden',
                element: <ConvocatoriaDetail/>
            }
        ]
    }
])

export default router;