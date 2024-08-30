
import { useForm } from "react-hook-form";
import Label from "../../utilities/Label";
import { useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useConv from "../../hooks/useConv";
import { useAuth } from "../../hooks/useAuth";
import useConsulta from "../../hooks/useConsulta";
import { useEffect } from "react";



export default function AddIntegrante() {
   
    const { obtenerTipoIntegrante,tipoIntegrantes} = useConsulta()
    const { handleSubmitNuevoIntegrante,handleSubmitUpdateIntegrante } = useConv()

    const navigate = useNavigate()
    const location = useLocation()

    const integrante = location.state?.integrante || false;

    console.log(integrante)

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})

    

    useEffect(() => {
        obtenerTipoIntegrante()

        if(integrante){
            
            reset({
                id: integrante.id,
                nombre: integrante.nombre,
                apellido_paterno: integrante.apellido_paterno,
                apellido_materno: integrante.apellido_materno,
                fecha_inicio:integrante.fecha_inicio,
                fecha_fin: integrante.fecha_fin,
                tipo_integrante: integrante.tipo_integrante_id


            });
        }
        
    },[])

    
    

    const onSubmit = async (data) => {

        
        try {
            if(integrante){
                await handleSubmitUpdateIntegrante(data)
                setTimeout(() => {
                    navigate('/magistrados')
                }, 2000);
                return
            }

            await  handleSubmitNuevoIntegrante(data)

            setTimeout(() => {
                navigate('/magistrados')
            }, 2000);

        } catch (error) {
            console.log(error)
        }

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
                            <Label htmlFor="tipo_integrante">
                                Tipo de Integrante:
                            </Label>

                            <select 
                                name="tipo_integrante" 
                                id="tipo_integrante"
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300 ${errors.tipo_integrante ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("tipo_integrante", {
                                    required: "Debe seleccionar un tipo de integrante"
                                })}
                            >
                                <option value="" disabled>-- Seleccione --</option>
                                {tipoIntegrantes.map(integrante => (
                                    <option key={integrante.id} value={integrante.id}>{integrante.tipo}</option>
                                ))}
                            </select>

                            {errors.tipo_integrante && (
                                <p className="bg-red-300 border-l-4 border-red-600 text-center uppercase rounded text-sm mt-2">
                                    {errors.tipo_integrante.message}
                                </p>
                            )}
                        </div>

                    

                        <div className="" >
                            <Label
                                htmlfor='fecha_inicio'
                            >
                                Fecha de Inicio en el cargo: 
                            </Label>

                            <input
                                type='date'
                                id='fecha_inicio'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.fecha_inicio ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("fecha_inicio",{
                                    required: "La fecha de inicio es obligatoria"
                                })}
                            />

                            {errors.fecha_inicio && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.fecha_inicio.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='fecha_fin'
                            >
                                Fecha de finalizacion en el cargo: 
                            </Label>

                            <input
                                type='date'
                                id='fecha_fin'
                                className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.fecha_fin ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("fecha_fin",{
                                    required: "La fecha de finalizacion es obligatoria"
                                })}
                            />

                            {errors.fecha_fin && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.fecha_fin.message}</p>}

                        </div>

                        

                    </div>
                

                <div className=" flex justify-center mt-10">
                    <input 
                        type="submit" 
                        className=" bg-orange-400 w-full md:w-8/12 rounded-lg py-1 cursor-pointer hover:bg-orange-500"
                        value={integrante ? "Actualizar" : "Agregar integrante"}
                    />
                </div>
                
            </form>
        </div>
    </div>
  )
}
