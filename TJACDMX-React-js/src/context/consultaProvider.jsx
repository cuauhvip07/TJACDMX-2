import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

    const [tipoConvocatoria, setTipoConvocatoria] = useState([])
    const [convocatorias,setConvocatorias] = useState([])
    const [materias, setMaterias] = useState([])

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

    const obtenerMateria = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios('/api/materia',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMaterias(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerTipoPunto = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
    }

    useEffect(() => {
        obtenerTipoConvocatorias()
        obtenerConvocatorias()
        obtenerMateria()
    },[])

  

    return (
        <ConsultaContext.Provider
        value={{

            tipoConvocatoria,
            convocatorias,
            materias,
            
        }}

        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext