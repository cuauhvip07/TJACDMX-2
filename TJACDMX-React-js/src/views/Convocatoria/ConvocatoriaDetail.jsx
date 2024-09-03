import { useForm } from "react-hook-form"
import { useLocation } from "react-router-dom"
import useConsulta from "../../hooks/useConsulta"
import { useEffect } from "react"


export default function ConvocatoriaDetail() {

    const {register,handleSubmit, formState:{errors}, reset} = useForm()

    const location = useLocation()

    const puntoConvocatoria = location.state?.punto || {}
    
   

    const {numero_orden,descripcion,comentarios,tipo_punto:{tipo_punto},materia:{materia},numero_orden_dia} = puntoConvocatoria


    const onSubmit = () => {
        console.log('submit')
    }

  return (
    <>
        <h1 className=" text-center text-xl font-bold mt-5">Número de Orden del día: {numero_orden_dia}</h1>
        <div className="mt-5 mx-auto container">
            <div className=" shadow-lg p-4  ">
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
