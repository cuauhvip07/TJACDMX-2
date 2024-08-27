import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"
import useConsulta from "../../hooks/useConsulta"


export default function ConvocatoriaDetail() {

    const {register,handleSubmit, formState:{errors}, reset} = useForm()

    const location = useLocation()

    const puntoConvocatoria = location.state?.punto || {}
    
    const {tipoVotos} = useConsulta()

    const {numero_orden,descripcion,comentarios,tipo_punto:{tipo_punto},materia:{materia},numero_orden_dia} = puntoConvocatoria


    const onSubmit = () => {
        console.log('submit')
    }

  return (
    <>
        <h1 className=" text-center text-xl font-bold mt-5">Número de Orden del día: {numero_orden_dia}</h1>
        <div className=" grid grid-cols-1 md:grid-cols-[3fr_9fr] mt-5 mx-auto container">
        
            <aside className="flex justify-center mb-5 md:mb-0">
                <form 
                    onSubmit={handleSubmit(onSubmit)}

                >
                    <div className="">
                        <h2 className=" font-bold">Votaciones.</h2>
                        <div className=" space-y-2 mt-3">
                            <p>Juan: A favor</p>
                            <p>Carlos: En contra</p>
                            <p>Juan: Abstinencia</p>
                            <p>Juan: Inasistencia</p>
                        </div>
                    </div>
                </form>
            </aside>

            <div className=" shadow-lg p-4 md:w-10/12 ">
                <div className=" space-y-10">
                <>
                    <p className=" font-bold">Numero de orden: <span className=" font-normal">{numero_orden}</span></p>
                    <p className=" font-bold">Descripción: <span className=" font-normal">{descripcion}</span></p>
                    <p className=" font-bold">Meteria: <span className=" font-normal">{materia}</span></p>
                    <p className=" font-bold">Comentarios: <span className=" font-normal">{comentarios}</span></p>
                    <p className=" font-bold">Tipo de Punto: <span className=" font-normal">{tipo_punto}</span></p>
                </>
                </div>
            </div>

        </div>
        <div>
            <p className=" text-center">Archivo:</p>
        </div>
    </>
  )
}
