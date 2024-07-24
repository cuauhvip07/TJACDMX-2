import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

    const [tipoConvocatoria, setTipoConvocatoria] = useState([])

    const obtenerTipoConvocatorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')

        try {
            const {data} = await clienteAxios('/api/tipo_convocatoria',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            setTipoConvocatoria(data.data)

        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        obtenerTipoConvocatorias()
    },[])

  

    return (
        <ConsultaContext.Provider
        value={{

            tipoConvocatoria,
            
        }}

        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext