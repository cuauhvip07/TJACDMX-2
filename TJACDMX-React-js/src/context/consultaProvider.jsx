import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

    const [tipoConvocatoria, setTipoConvocatoria] = useState([])
    const [convocatorias,setConvocatorias] = useState([])
    const [materias, setMaterias] = useState([])
    const [tipoPuntos, setTipoPuntos] = useState([])
    const [puntosConvocatoria, setPuntosConvocatoria] = useState([])
    const [tipoVotos, setTipoVotos] = useState([])
    const [tipoIntegrantes, setTipoIntegrantes] = useState([])
    const [integrantes, setIntegrantes] = useState([])

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

        try {
            const {data} = await clienteAxios('/api/tipo_punto',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setTipoPuntos(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerPuntoConvocatoria = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios('/api/punto_convocatoria',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setPuntosConvocatoria(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerTipoVoto = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios('/api/tipo_voto',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTipoVotos(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerTipoIntegrante = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios('/api/tipo_integrante',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setTipoIntegrantes(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerIntegrantes = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios('/api/integrantes',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            setIntegrantes(data.data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <ConsultaContext.Provider
        value={{

            tipoConvocatoria,
            convocatorias,
            materias,
            tipoPuntos,
            puntosConvocatoria,
            tipoVotos,
            tipoIntegrantes,
            integrantes,
            obtenerConvocatorias,
            obtenerTipoConvocatorias,
            obtenerMateria,
            obtenerTipoPunto,
            obtenerPuntoConvocatoria,
            obtenerTipoVoto,
            obtenerTipoIntegrante,
            obtenerIntegrantes
        }}

        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext