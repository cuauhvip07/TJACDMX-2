import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

    const [tipoConvocatoria, setTipoConvocatoria] = useState([])
    const [convocatorias,setConvocatorias] = useState([])

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

    const obtenerConvocatorias = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios('/api/nueva_convocatoria',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setConvocatorias(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerTipoConvocatorias()
        obtenerConvocatorias()
    },[])

  

    return (
        <ConsultaContext.Provider
        value={{

            tipoConvocatoria,
            convocatorias,
            
        }}

        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext