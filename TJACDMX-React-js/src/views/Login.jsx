
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import Alert from "../components/Alert"
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";


export default function Login() {

  const {register, handleSubmit, formState: {errors}} = useForm()
  const {login} = useAuth({middleware: 'guest', url: '/'});
  const [errores,setErrores] = useState({})

  const onSubmit = (data) => {
    login(data,setErrores)
  }

  setTimeout(() => {
    setErrores({})
  },10000)


  return (
  <div className=" flex flex-col md:flex-row md:justify-center my-16 gap-20 items-center">
   
   <img className=" size-3/12" src="../public/tjacdmximg.png" alt="Imagen TJACDMX" />
    <div className='shadow-xl py-5 px-10 rounded-lg md:w-6/12'>
      <form onSubmit={handleSubmit(onSubmit)} >  
        <h2 className="text-center font-bold text-3xl mb-5">Crear una Cuenta</h2>
      

        <div className="space-y-2 mt-5 ">

          <label htmlFor="email" className=" font-bold uppercase">Correo:</label>
          <input 
            type="email" 
            placeholder="Tu Correo"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="email"
            {...register('email',{
              required: "El email es obligatorio",
              pattern: {
                value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
                message: 'El correo es invalido o no cumple con la estructura'
              }
            })}
          />
        </div>

        {errors.email && <Alert>{errors.email.message}</Alert>}
        {errores.email && <Alert>{errores.email[0]}</Alert>}
        {errores[0] && <Alert>{errores[0]}</Alert>}

      
        

        <div className="space-y-2 mt-5 ">

          <label htmlFor="password" className=" font-bold uppercase">Contraseña: </label>
          <input 
            type="password" 
            placeholder="Contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="password"
            {...register('password',{
              required: 'La contraseña es obligatoria',
            })}
          />
        </div>

        {errors.password && <Alert>{errors.password.message}</Alert>}

        <input 
          type="submit" 
          className="mt-5 bg-orange-400 w-full rounded-lg py-2 font-bold uppercase cursor-pointer"
          value="Iniciar Sesión"
        />

        
      </form>
      <div className='mt-5'>
        <Link to='/registro' >¿No tienes cuenta? <span className=' uppercase font-bold'>Crear una</span></Link>
      </div>
    </div>

  </div>
  )
}
