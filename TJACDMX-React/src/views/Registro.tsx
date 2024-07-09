

import { useForm } from "react-hook-form"
import Alert from "../components/Alert"
import { DraftUser, User } from "../types"


export default function Registro() {

  const {register, handleSubmit, formState: {errors}} = useForm<DraftUser>()

  const onSubmit = (data : DraftUser ) => {
    console.log(data)
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

        {errors && <Alert>{errors.name?.message}</Alert>}

        <div className="space-y-2 mt-5 ">

          <label htmlFor="email" className=" font-bold uppercase">Correo:</label>
          <input 
            type="email" 
            placeholder="Tu Correo"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="email"
          />
        </div>

        <div className="space-y-2 mt-5 ">

          <label htmlFor="password" className=" font-bold uppercase">Contraseña:</label>
          <input 
            type="password" 
            placeholder="Contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="password"
          />
        </div>

        <div className="space-y-2 mt-5 ">

          <label htmlFor="password_repeat" className=" font-bold uppercase">Repetir Contraseña:</label>
          <input 
            type="password_repeat" 
            placeholder="Repite tu contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
            id="password_repeat"
          />
        </div>

        <input 
          type="submit" 
          className="mt-5 bg-orange-400 w-full rounded-lg py-2 font-bold uppercase cursor-pointer"
          value="Crear Cuenta"
        />

        
      </form>
    </div>
  )
}
