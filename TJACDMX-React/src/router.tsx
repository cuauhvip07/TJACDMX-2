
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Convocatorias from "./views/Convocatorias/Convocatorias";
import ConvocatoriaDetail from "./views/Convocatorias/ConvocatoriaDetail";
import ConvocatoriasMake from "./views/Convocatorias/ConvocatoriasMake";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <Login/>
            },
            {
                path: '/registro',
                element: <Registro/>
            },
            {
                path:'/convocatorias',
                element:<Convocatorias/>
            },
            {
                path:'/convocatorias/:id', // El id hace que sea dinamica la url
                element: <ConvocatoriaDetail/>
            },
            {
                path:'/convocatorias/crear',
                element: <ConvocatoriasMake/>
            },
            {
                path:'/:id/puntos-convocatoria'
                
            }
           
        ]
    }
])

export default router;