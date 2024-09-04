import { useForm } from "react-hook-form";
import Label from "../../utilities/Label";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import useConv from "../../hooks/useConv";
import { useAuth } from "../../hooks/useAuth";
import useConsulta from "../../hooks/useConsulta";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";



export default function ConvocatoriasMake() {

    const {obtenerTipoConvocatorias,tipoConvocatoria} = useConsulta();
    const {handleSubmitUpdateConvocatoria,handleSubmitNuevaConvocatoria,estatus} = useConv()

    const navigate = useNavigate()
    const location = useLocation()

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})
    

    const convocatoria = location.state?.convocatoria || false ;

    useEffect(() => {
        obtenerTipoConvocatorias()
        if(convocatoria){
            reset({
                id: convocatoria.id,
                numero_conv: convocatoria.numero_conv,
                numero_of: convocatoria.numero_of,
                fecha: convocatoria.fecha,
                hora_inicio_real: convocatoria.hora_inicio_real,
                hora_fin_real: convocatoria.hora_fin_real,
                estatus_id: convocatoria.estatus_id,
                tipo_convocatoria_id: convocatoria.tipo_convocatoria_id
            })
        }
    },[])


    const onSubmit = async (data) => {

        const formData = new FormData()

        formData.append('numero_conv',data.numero_conv)
        formData.append('numero_of',data.numero_of)
        formData.append('fecha',data.fecha)
        formData.append('hora_inicio_real',data.hora_inicio_real)
        formData.append('hora_fin_real',data.hora_fin_real)
        formData.append('estatus_id',data.estatus_id)
        formData.append('tipo_convocatoria_id',data.tipo_convocatoria_id)
        formData.append('archivo',data.archivo[0])

        try {

            if(convocatoria){
                await handleSubmitUpdateConvocatoria(formData);
                setTimeout(() => {
                    navigate('/convocatorias')
                }, 2000);
                return
            }

            await handleSubmitNuevaConvocatoria(formData)
            setTimeout(() => {
                navigate(`/convocatorias`)
            }, 2000);

        } catch (error) {
            console.log(error)
        }

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
                                
                        
                        <div>
                            <Label
                                htmlfor='archivo'
                            >
                                Archivo: 
                            </Label>

                            <input
                                type='file'
                                id='archivo'
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.archivo ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("archivo",{
                                    required: "El archivo es obligatorio"
                                })}
                                accept=".pdf"
                            />

                            {errors.archivo && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.archivo.message}</p>}

                        </div>

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
                                    required: "El numero de oficio es obligatorio"
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

                        {/* <div>
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
                                onChange={handleFileChange}
                            />

                            {errors.archivo && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.archivo.message}</p>}

                        </div> */}

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
                                htmlfor="estatus_id"
                            >
                                Estatus: 
                            </Label>
                            <select 
                                name="estatus_id" 
                                id="estatus_id" 
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.status ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register('estatus_id',{
                                    required: 'Debe de seleccionar un tipo de estatus'
                                })}
                            >
                                <option value="" disabled>-- Seleccione una opción --</option>
                               {estatus.map( status => (
                                <option key={status.id} value={status.id}>{status.estatus}</option>
                               ))}
                            </select>

                            {errors.estatus_id && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.estatus_id.message}</p>}
                        </div>

                        <div>
                            <Label
                                htmlfor="tipo_convocatoria"
                            >
                                Tipo de Convocatoria: 
                            </Label>
                            <select 
                                name="tipo_convocatoria_id" 
                                id="tipo_convocatoria_id" 
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.tipo_convocatoria_id ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register('tipo_convocatoria_id',{
                                    required: 'Debe de seleccionar un tipo de convocatoria'
                                })}
                            >
                                <option value="" disabled >-- Seleccione una opción --</option>
                               {tipoConvocatoria.map( tipo => (
                                <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
                               ))}
                            </select>

                            {errors.tipo_convocatoria_id && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.tipo_convocatoria_id.message}</p>}
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
