
import { createContext, useEffect, useState } from 'react';
import clienteAxios from '../config/axios';

const ConvocatoriasContext = createContext();

const ConvocatoriasProvider = ({ children }) => {

    
    const [modal, setModal] = useState(false);
    const [estatus,setEstatus] = useState([])

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSubmitNuevaConvocatoria = (datos) => {
        console.log(datos)
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
                estatus
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
