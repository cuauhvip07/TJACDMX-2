import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useConv from "../../hooks/useConv";
import useConsulta from "../../hooks/useConsulta";
import Label from "../../utilities/Label";




export default function ConvocatoriaMake() {

    const navigate = useNavigate()
    const convocatoria = location.state?.convocatoria

    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    useAuth({middleware:'admin'})

    const {handleSubmitNuevaConvocatoria,estatus} = useConv()
    const {tipoConvocatoria,materias} = useConsulta();


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
                                {...register("numero_orden",{
                                    required: "El numero de orden es obligatorio"
                                })}
                            />

                            {errors.numero_orden && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.numero_orden.message}</p>}

                        </div>

                        {/* <div>    Fudamento legal que es un archivo
                            <Label
                                htmlfor='fundamento_legal'
                            >
                                Fundamento Legal: 
                            </Label>

                            <input
                                type='text'
                                id='fundamento_legal'
                                className={`border rounded-xl py-1 w-full text-center focus:bg-gray-300  ${errors.fundamento_legal ? ' bg-red-100' : 'bg-gray-100'}`}
                                {...register("fundamento_legal",{
                                    required: "Todos los campos son obligatorios"
                                })}
                            />

                            {errors.fundamento_legal && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.fundamento_legal.message}</p>}

                        </div> */}

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
                                {...register("num_orden",{
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
                                {...register('materia',{
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
                                {...register('tipo_punto',{
                                    required: 'Debe de seleccionar un tipo de convocatoria'
                                })}
                            >
                                <option value="" disabled >-- Seleccione una opción --</option>
                                <option value="1"  >Opcion</option>
                                
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
                        placeholder="Comentarios u Obersaciones"
                        className={`border rounded-xl py-1 w-full focus:bg-gray-300  ${errors.descripcion ? ' bg-red-100' : 'bg-gray-100'}`}
                        {...register("descripcion",{
                            required: 'Las obervaciones son obligatorias'
                        })}
                    >

                    </textarea>

                    {errors.descripcion && <p className=" bg-red-300 border-l-4 border-red-600 text-center uppercase  rounded text-sm mt-2">{errors.descripcion.message}</p>}

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
