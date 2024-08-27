
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
        console.log(datos)
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
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
