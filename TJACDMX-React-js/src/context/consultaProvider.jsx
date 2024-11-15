import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import useSWR from "swr";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

    const [tipoConvocatoria, setTipoConvocatoria] = useState([])
    const [materias, setMaterias] = useState([])
    const [tipoPuntos, setTipoPuntos] = useState([])
    const [puntosConvocatoria, setPuntosConvocatoria] = useState([])
    const [tipoVotos, setTipoVotos] = useState([])
    const [tipoIntegrantes, setTipoIntegrantes] = useState([])

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

    const obtenerPuntoConvocatoria = async (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios(`/api/punto_convocatoria?convocatoria_id=${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setPuntosConvocatoria(data.data || [])
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

    const obtenerIntegrantes = () => {


        const token = localStorage.getItem('AUTH_TOKEN');
        
        const fetcher = () => clienteAxios('/api/integrantes',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(datos => datos.data)

        const {data,error, isLoading} = useSWR('/api/integrantes',fetcher, {refreshInterval: 1000})
        return {data,error,isLoading}    

        
        
    }

    const obtenerVotos =  (id) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const  fetcher = () =>  clienteAxios(`/api/votacion?punto_convocatoria_id=${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(datos => datos.data)
            
            const {data,error,isLoading} = useSWR(`/api/votacion?punto_convocatoria_id=${id}`,fetcher,{refreshInterval: 1000})

            return {data,error,isLoading}

        } catch (error) {
            console.log(error)
        }

    }

    const obtenerConvocatoria = () => {

        const token = localStorage.getItem('AUTH_TOKEN');

        const fetcher = () => clienteAxios('/api/nueva_convocatoria',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then(datos => datos.data)

        const {data,error, isLoading} = useSWR('/api/nueva_convocatoria',fetcher, {refreshInterval: 1000})

        return {data,error,isLoading}
    

    }


    return (
        <ConsultaContext.Provider
        value={{

            tipoConvocatoria,
            materias,
            tipoPuntos,
            puntosConvocatoria,
            tipoVotos,
            tipoIntegrantes,
            obtenerTipoConvocatorias,
            obtenerMateria,
            obtenerTipoPunto,
            obtenerPuntoConvocatoria,
            obtenerTipoVoto,
            obtenerTipoIntegrante,
            obtenerIntegrantes,
            obtenerVotos,
            obtenerConvocatoria,
        }}

        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext