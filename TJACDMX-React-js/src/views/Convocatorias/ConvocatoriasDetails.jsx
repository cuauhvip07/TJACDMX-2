

import React from 'react'
import { useLocation } from 'react-router-dom'
import { formatearFecha } from '../../helpers/formatearFecha'

export default function ConvocatoriasDetails() {

    const location = useLocation()

    const convocatoria = location.state?.convocatoria

    console.log(convocatoria)

  return (
    <>
        <h1 className=" text-center text-xl font-bold mt-5">Numero de oficio: {convocatoria.numero_of}</h1>
        <div className="mt-5 mx-auto container">
            <div className=" shadow-lg p-4  ">
                <div className=" space-y-10">
                <>
                    <p className=" font-bold">Numero de Convocatoria: <span className=" font-normal">{convocatoria.numero_conv}</span></p>

                    <p className=" font-bold">Fecha: <span className=" font-normal">{formatearFecha(convocatoria.fecha)}</span></p>

                    <p className=" font-bold">Hora de inicio real: <span className=" font-normal">{convocatoria.hora_inicio_real}</span></p>

                    <p className=" font-bold">Hora de finalización real: <span className=" font-normal">{convocatoria.hora_fin_real}</span></p>

                    <p className=" font-bold">Tipo de Convocatoria: <span className=" font-normal">{convocatoria.tipo_convocatoria.nombre}</span></p>

                    <p className=" font-bold">Estatus: <span className=" font-normal">{convocatoria.estatus.estatus}</span></p>

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
