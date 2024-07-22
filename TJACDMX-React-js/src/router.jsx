import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Login from "./views/Login";
import Registro from "./views/Registro";
import ConvocatoriaDetail from "./views/Convocatorias/ConvocatoriaDetail";
import Convocatorias from "./views/Convocatorias/Convocatorias";
import ConvocatoriasMake from "./views/Convocatorias/ConvocatoriasMake";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Login/>
            },
            {
                path:'/registro',
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
            
        ]
    }
])

export default router;