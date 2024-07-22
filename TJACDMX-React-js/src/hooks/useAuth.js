import { toast } from 'react-toastify';
import clienteAxios from "../config/axios"


export const useAuth = ({middleware,url}) => {

    const registro = async (datos,setErrores) => {
        
        try {
            const {data} = await clienteAxios.post('/api/registro',datos);
            localStorage.setItem('AUTH_TOKEN',data.token)
            toast.success('Registrado Correctamente',{
                draggable:true
            })
        } catch (error) {
            if(error.response && error.response.data && error.response.data.errors){
                const ServerErrores = error.response.data.errors
                setErrores(ServerErrores)
            }
        }
    }

    

    return {
        registro,
    }
}