

import { useForm } from "react-hook-form"
import Alert from "../components/Alert"
import { useState } from "react"


export default function Registro() {


  const {register, handleSubmit, formState: {errors}, watch} = useForm()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''

  })

  const password = watch("password")

  const onSubmit = (data ) => {
    setUser(data)
    
    try {
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className=" flex flex-col md:flex-row md:justify-center my-16 gap-5 items-center">
      <div>
        Imagen
      </div>
      <form className="shadow-xl py-5 px-10 rounded-lg md:w-6/12" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-center font-bold text-3xl mb-5">Crear una Cuenta</h2>
        <div className="space-y-2 ">

          <label htmlFor="name" className=" font-bold uppercase">Nombre:</label>
          <input 
            type="text" 
            placeholder="Tu nombre"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="name"
            {...register('name',{
              required: "El nombre es obligatorio"
            })}
          />
        </div>

        {errors.name && <Alert>{errors.name.message}</Alert>}

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

        <div className="space-y-2 mt-5 ">

          <label htmlFor="password" className=" font-bold uppercase">Contraseña: <span className="block text-xs text-gray-400">*Debe contener un numero y un simbolo especial</span></label>
          <input 
            type="password" 
            placeholder="Contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="password"
            {...register('password',{
              required: 'La contraseña es obligatoria',
              pattern: {
                value:/^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: 'La contrseña debe de contener un numero y un simbolo especial'
              }
            })}
          />
        </div>

        {errors.password && <Alert>{errors.password.message}</Alert>}

        <div className="space-y-2 mt-5 ">

          <label htmlFor="password_confirmation" className=" font-bold uppercase">Repetir Contraseña:</label>
          <input 
            type="password" 
            placeholder="Repite tu contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="password_confirmation"
            {...register('password_confirmation',{
              validate: value => value === password || 'Las contraseñas no coinciden'
            })}
          />
        </div>

        {errors.password_confirmation && <Alert>{errors.password_confirmation.message}</Alert>}

        <input 
          type="submit" 
          className="mt-5 bg-orange-400 w-full rounded-lg py-2 font-bold uppercase cursor-pointer"
          value="Crear Cuenta"
        />

        
      </form>
    </div>
  )
}
