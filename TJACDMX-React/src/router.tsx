
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Registro from "./views/Registro";
import Login from "./views/Login";


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
            }
        ]
    }
])

export default router;