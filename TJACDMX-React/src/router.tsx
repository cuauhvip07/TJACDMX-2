
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Convocatorias from "./views/Convocatorias";
import ConvocatoriaDetail from "./views/ConvocatoriaDetail";


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
            }
           
        ]
    }
])

export default router;