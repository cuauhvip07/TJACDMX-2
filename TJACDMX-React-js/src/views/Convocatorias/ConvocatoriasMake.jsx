import { useForm } from "react-hook-form";
import { estatus } from "../../data/estatus";
import Label from "../../utilities/Label";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useConv from "../../hooks/useConv";
import { useAuth } from "../../hooks/useAuth";



export default function ConvocatoriasMake() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})
    const {handleSubmitNuevaConvocatoria} = useConv()

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
                <h3 className=" font-bold  text-xl">Crea una convocatoria.</h3>
                <p className=" text-sm">Todos los campos son obligatorios*</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className=" space-y-5 md:space-y-10">
                        <div>
                            <Label
                                htmlfor='numero_conv'
                            >
                                Numero de Convocatoria: 
                            </Label>

                            <input
                                type='number'
                                id='numero_conv'
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.numero_conv ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("numero_conv",{
                                    required: "Todos los campos son obligatorios"
                                })}
                            />

                            {errors.numero_conv && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.numero_conv.message}</p>}

                        </div>
                                    {/* Falta validar la nomenclatura del oficio */}
                        <div>
                            <Label
                                htmlfor='numero_of'
                            >
                                Numero de Oficio: 
                            </Label>

                            <input
                                type='text'
                                id='numero_of'
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.numero_of ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("numero_of",{
                                    required: "Todos los campos son obligatorios"
                                })}
                            />

                            {errors.numero_of && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.numero_of.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='fecha'
                            >
                                Fecha: 
                            </Label>

                            <input
                                type='date'
                                id="fecha"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.fecha ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("fecha",{
                                    required:"La fecha es obligatoria"
                                })}
                            />

                            {errors.fecha && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.fecha.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='archivo'
                            >
                                Archivo del Oficio: 
                            </Label>

                            <input
                                type='file'
                                accept=".pdf"
                                id="archivo"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.archivo ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("archivo",{
                                    required: 'Este campo es obligatorio',
                                })}
                            />

                            {errors.archivo && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.archivo.message}</p>}

                        </div>

                    </div>

                    <div className="space-y-5 md:space-y-10">
                        <div>
                            <Label
                                htmlfor="hora_inicio_real"
                            >
                                Hora de inicio real: 
                            </Label>

                            <input
                                type='time'
                                id="hora_inicio_real"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.hora_inicio_real ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("hora_inicio_real",{
                                    required: 'La hora de incio es obligatoria'
                                })}
                            />

                            {errors.hora_inicio_real && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.hora_inicio_real.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor="hora_fin_real"
                            >
                                Hora finalizacion real: 
                            </Label>

                            <input
                                type='time'
                                id="hora_fin_real"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.hora_fin_real ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("hora_fin_real",{
                                    required: 'La hora de incio es obligatoria'
                                })}
                            />
                            {errors.hora_fin_real && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.hora_fin_real.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor="status"
                            >
                                Estatus: 
                            </Label>
                            <select 
                                name="status" 
                                id="status" 
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.status ? ' bg-red-100' : 'bg-gray-100'}`}
                            >
                                <option value="" disabled selected>-- Seleccione una opción --</option>
                               {estatus.map( status => (
                                <option key={status.id} value={status.id}>{status.status}</option>
                               ))}
                            </select>

                            {errors.status && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.status.message}</p>}
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
                <ToastContainer draggable />
            </form>
        </div>
    </div>
  )
}
