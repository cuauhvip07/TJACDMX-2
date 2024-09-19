import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import useConv from "../../hooks/useConv";
import useConsulta from "../../hooks/useConsulta";
import Label from "../../utilities/Label";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";




export default function ConvocatoriaMake() {

    const location = useLocation()
    const navigate = useNavigate()

    const convocatoria = location.state?.convocatoria || {}
    const puntoConvocatoria = location.state?.punto || false

    console.log(puntoConvocatoria)

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})

    const {handleNuevoPuntoConvocatoria} = useConv()
    const {obtenerMateria,obtenerTipoPunto,materias,tipoPuntos} = useConsulta();

    useEffect(() => {
        obtenerMateria()
        obtenerTipoPunto()

        if(puntoConvocatoria){
            reset({
                numero_orden: puntoConvocatoria.numero_orden,
                num_orden: puntoConvocatoria.numero_orden_dia,
                materia: puntoConvocatoria.materia_id,
                tipo_punto: puntoConvocatoria.tipo_punto_id,
                descripcion: puntoConvocatoria.descripcion,
                comentarios: puntoConvocatoria.comentarios
            })
        }
            
    },[])
    

    const onSubmit = (data) => {

        const formData =  new FormData()

        if(data.fundamento_legal.length > 0){
            for(let i = 0 ; i < data.fundamento_legal.length; i++){
                formData.append('archivos[]',data.fundamento_legal[i])
            }
        }

        
        formData.append('numero_orden',data.numero_orden)
        formData.append('num_orden',data.num_orden);
        formData.append('materia_id',data.materia);
        formData.append('tipo_punto_id',data.tipo_punto);
        formData.append('descripcion',data.descripcion);
        formData.append('comentarios',data.comentarios);
        formData.append('convocatoria_id',convocatoria.id)


        if(puntoConvocatoria){
            formData.append('id', puntoConvocatoria.id)
        }

        handleNuevoPuntoConvocatoria(formData)




      
        setTimeout(() => {
            navigate(`/convocatorias`)
        }, 2000);



        reset()
    }

    

    return (
        <div className=" mt-10 flex justify-center">
        
        <div className=" shadow-lg w-7/12 mt-10 md:px-20 md:py-10 px-7 py-7">
            <form
                className=" w-full "
                onSubmit={handleSubmit(onSubmit)}
            >
                <h3 className=" font-bold  text-xl">Crea un Punto de la Convocatoria.</h3>
                <p className=" text-sm">Todos los campos son obligatorios*</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className=" space-y-5 md:space-y-10">
                        <div>
                            <Label
                                htmlfor='numero_orden'
                            >
                                Numero de Orden: 
                            </Label>

                            <input
                                type='number'
                                id='numero_orden'
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.numero_orden ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("numero_orden", puntoConvocatoria?.id ? {} :{
                                    required: "El numero de orden es obligatorio"
                                })}
                            />

                            {errors.numero_orden && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.numero_orden.message}</p>}

                        </div>

                        <div>
                            <Label
                                htmlfor='fundamento_legal'
                            >
                                Archivo del Fundamento Legal: 
                            </Label>
                            
                            {puntoConvocatoria && (
                                <label htmlFor='fundamento_legal' className='text-sm text-gray-400'>*Suba todos los archivos, los anteriores se eliminaran</label>
                            )}

                            <input
                                type='file'
                                id="fundamento_legal"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.fundamento_legal ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("fundamento_legal", puntoConvocatoria?.id ? {} : {
                                    required: "El archivo es obligatorio"
                                })}
                                accept=".pdf"
                                multiple
                            />

                            {errors.fundamento_legal && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.fundamento_legal.message}</p>}

                        </div>

                       

                        <div>
                            <Label
                                htmlfor='num_orden'
                            >
                                Numero orden del dia: 
                            </Label>

                            <input
                                type='number'
                                id="num_orden"
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.num_orden ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("num_orden", puntoConvocatoria?.id ? {} : {
                                    required:"El numero de orden del dia es obligatorio"
                                })}
                            />

                            {errors.num_orden && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.num_orden.message}</p>}

                        </div>
                        
                        


                        

                    </div>

                    <div className="space-y-5 md:space-y-10">
                        

                       

                        <div>
                            <Label
                                htmlfor="materia"
                            >
                                Materia: 
                            </Label>
                            <select 
                                name="materia" 
                                id="materia" 
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.status ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register('materia', puntoConvocatoria?.id ? {} :{
                                    required: 'Debe seleccionar una materia'
                                })}
                            >
                                <option value="" disabled>-- Seleccione una opción --</option>
                                {materias.map(materia => (
                                    <option key={materia.id} value={materia.id}>{materia.materia}</option>
                                ))}

                            </select>

                            {errors.materia && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.materia.message}</p>}
                        </div>


                        <div>
                            <Label
                                htmlfor="tipo_punto"
                            >
                                Tipo de Punto: 
                            </Label>
                            <select 
                                name="tipo_punto" 
                                id="tipo_punto" 
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.tipo_punto ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register('tipo_punto', puntoConvocatoria?.id ? {} : {
                                    required: 'Debe de seleccionar un tipo de punto'
                                })}
                            >
                                <option value="" disabled >-- Seleccione una opción --</option>
                                {tipoPuntos.map(tipo => (
                                    <option value={tipo.id} key={tipo.id}>{tipo.nombre}</option>
                                ))}
                                
                            </select>

                            {errors.tipo_punto && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.tipo_punto.message}</p>}
                        </div>



                    </div>
                </div>

                <div className=" mt-5">
                    <Label
                        htmlfor="descripcion"
                    >
                        Descripción: 
                    </Label>

                    <textarea 
                        name="descripcion" 
                        id="descripcion"
                        placeholder="Descripción"
                        className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.descripcion ? ' bg-red-100' : 'bg-gray-100'}`}
                        {...register("descripcion", puntoConvocatoria?.id ? {} : {
                            required: 'La descripcion es obligatoria'
                        })}
                    >

                    </textarea>

                    {errors.descripcion && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.descripcion.message}</p>}

                </div>

                <div className=" mt-5">
                    <Label
                        htmlfor="comentarios"
                    >
                        Comentarios u Observaciones: 
                    </Label>

                    <textarea 
                        name="comentarios" 
                        id="comentarios"
                        placeholder="Comentarios u Obersaciones"
                        className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.comentarios ? ' bg-red-100' : 'bg-gray-100'}`}
                        {...register("comentarios", puntoConvocatoria?.id ? {} :{
                            required: 'Los comnetarios son obligatorios'
                        })}
                    >

                    </textarea>

                    {errors.comentarios && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.comentarios.message}</p>}

                </div>

                <div className=" flex justify-center mt-10">
                    <input 
                        type="submit" 
                        className=" bg-orange-400 w-full md:w-8/12 rounded-lg py-1 cursor-pointer hover:bg-orange-500"
                        value={puntoConvocatoria ? 'Actualizar' : 'Crear'}
                    />
                </div>
                
            </form>
        </div>
    </div>
    )
}
