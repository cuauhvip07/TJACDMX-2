
import { useForm } from "react-hook-form";
import Label from "../../utilities/Label";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useConv from "../../hooks/useConv";
import { useAuth } from "../../hooks/useAuth";
import useConsulta from "../../hooks/useConsulta";
import { useEffect } from "react";



export default function AddIntegrante() {
   
    const { obtenerTipoIntegrante,tipoIntegrantes} = useConsulta()

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})

    useEffect(() => {
        obtenerTipoIntegrante()
    },[])

    
    

    const onSubmit = (data) => {


        toast.success('Convocatoria Creada Correctamente',{
            draggable:true
        })
        reset()
    }

  return (
    <div className=" mt-10 flex justify-center">
        
        <div className=" shadow-lg w-7/12 mt-10 md:px-20 md:py-10 px-7 py-7">
            <form
                className=" w-full "
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3 className=" font-bold  text-xl">Añadir nuevo integrante.</h3>
                <p className=" text-sm">Todos los campos son obligatorios*</p>
                
                    <div className=" space-y-5 md:space-y-10 mt-5">
                        <div>
                            <Label
                                htmlfor='nombre'
                            >
                                Nombre: 
                            </Label>

                            <input
                                type='text'
                                id='nombre'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.nombre ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("nombre",{
                                    required: "El nombre es obligatorio"
                                })}
                            />

                            {errors.nombre && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.nombre.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='apellido_paterno'
                            >
                                Apellido Paterno: 
                            </Label>

                            <input
                                type='text'
                                id='apellido_paterno'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.apellido_paterno ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("apellido_paterno",{
                                    required: "El apellido es obligatorio"
                                })}
                            />

                            {errors.apellido_paterno && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.apellido_paterno.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='apellido_materno'
                            >
                                Apellido Materno: 
                            </Label>

                            <input
                                type='text'
                                id='apellido_materno'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.apellido_materno ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("apellido_materno",{
                                    required: "El apellido es obligatorio"
                                })}
                            />

                            {errors.apellido_materno && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.apellido_materno.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='tipo_integrante'
                            >
                                Tipo de Integrante:
                            </Label>

                            <select 
                                name="tipo_integrante" 
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.tipo_integrante ? ' bg-red-100' : 'bg-gray-100'}`}
                                id="tipo_integrante"
                            >
                           
                            {tipoIntegrantes.map(integrante => (
                                <option key={integrante.id} value={integrante.id}>{integrante.tipo}</option>
                            ))}

                           </select>

                            {errors.tipo_integrante && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.tipo_integrante.message}</p>}

                        </div>

                        <div className=" flex justify-between">

                        <div className="" >
                            <Label
                                htmlfor='nombre'
                            >
                                Nombre: 
                            </Label>

                            <input
                                type='date'
                                id='nombre'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.nombre ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("nombre",{
                                    required: "El nombre es obligatorio"
                                })}
                            />

                            {errors.nombre && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.nombre.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='nombre'
                            >
                                Nombre: 
                            </Label>

                            <input
                                type='date'
                                id='nombre'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.nombre ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("nombre",{
                                    required: "El nombre es obligatorio"
                                })}
                            />

                            {errors.nombre && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.nombre.message}</p>}

                        </div>

                        </div>

                    </div>
                

                <div className=" flex justify-center mt-10">
                    <input 
                        type="submit" 
                        className=" bg-orange-400 w-full md:w-8/12 rounded-lg py-1 cursor-pointer hover:bg-orange-500"
                        value="Crear"
                    />
                </div>
                
            </form>
        </div>
    </div>
  )
}
