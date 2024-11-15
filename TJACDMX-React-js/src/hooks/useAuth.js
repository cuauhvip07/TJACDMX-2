import { toast } from 'react-toastify';
import clienteAxios from "../config/axios"
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { useEffect } from 'react';


export const useAuth = ({middleware,url}) => {

    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate()

    const {data: user,error, mutate} = useSWR('/api/user', () =>
        clienteAxios('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const registro = async (datos,setErrores) => {
        
        try {
            const {data} = await clienteAxios.post('/api/registro',datos);
            localStorage.setItem('AUTH_TOKEN',data.token)
            toast.success('Registrado Correctamente',{
                draggable:true
            })
            await mutate()
            setErrores({})
        } catch (error) {
            if(error.response && error.response.data && error.response.data.errors){
                const ServerErrores = error.response.data.errors
                setErrores(ServerErrores)
            }
        }
    }

    const login = async (datos,setErrores) => {
        
        try {
            const {data} = await clienteAxios.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',data.token)
            await mutate()
            setErrores({})
        } catch (error) {
            if(error.response && error.response.data && error.response.data.errors){
                const ServerErrores = error.response.data.errors
                setErrores(ServerErrores)
            }
        }
    }

    useEffect(() => {
        if(middleware === 'guest' && url && user){
            navigate(url)
        }

        if(middleware === 'auth' && error){
            navigate('/login')
        }

        if(middleware === 'admin' && user && !user.admin){
            navigate('/')
        }

        if(middleware === 'encargado' && user && user.role < 2){
            navigate('/')
        }

    },[user,error])

    

    return {
        registro,
        user,
        error,
        login
    }
}