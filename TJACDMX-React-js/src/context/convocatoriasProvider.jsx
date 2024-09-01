
import { createContext, useEffect, useState } from 'react';
import clienteAxios from '../config/axios';
import { toast } from 'react-toastify';

const ConvocatoriasContext = createContext();

const ConvocatoriasProvider = ({ children }) => {

    
    const [modal, setModal] = useState(false);
    const [estatus,setEstatus] = useState([])

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSubmitNuevaConvocatoria = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios.post('/api/nueva_convocatoria', datos,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

           toast.success(data.message,{
            draggable:true
           })

        } catch (error) {
            console.log(error);
        }
    }

    const handleNuevoPuntoConvocatoria = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios.post('/api/punto_convocatoria',datos,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerEstatus = async () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        
        try {
            const {data} = await clienteAxios('/api/estatus-convocatoria',{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            setEstatus(data.data)
        } catch (error) {
            console.log(error)
        }
    };

    const handleSubmitNuevoIntegrante = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios.post('/api/integrantes',datos,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable: true
            })

        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitUpdateIntegrante = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');
        try {

            const {data} = await clienteAxios.put(`/api/integrantes/${datos.id}`,{
                nombre: datos.nombre,
                apellido_paterno: datos.apellido_paterno,
                apellido_materno: datos.apellido_materno,
                fecha_inicio:datos.fecha_inicio,
                fecha_fin: datos.fecha_fin
            }, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable:true
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitUpdateConvocatoria = async (datos) => {
        const token = localStorage.getItem('AUTH_TOKEN');

        try {
            const {data} = await clienteAxios.put(`/api/nueva_convocatoria/${datos.id}`,{
                numero_conv: datos.numero_conv,
                numero_of: datos.numero_of,
                fecha: datos.fecha,
                hora_inicio_real: datos.hora_inicio_real,
                hora_fin_real: datos.hora_fin_real,
                estatus_id: datos.estatus_id,
                tipo_convocatoria_id: datos.tipo_convocatoria_id
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(data.message,{
                droggable:true
            })

        } catch (error) {
            console.log(error)
        }

    }


    useEffect(() => {
        obtenerEstatus()
    },[])





    return (
        <ConvocatoriasContext.Provider
            value={{
                modal,
                handleClickModal,
                handleSubmitNuevaConvocatoria,
                estatus,
                handleNuevoPuntoConvocatoria,
                handleSubmitNuevoIntegrante,
                handleSubmitUpdateIntegrante,
                handleSubmitUpdateConvocatoria,
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
