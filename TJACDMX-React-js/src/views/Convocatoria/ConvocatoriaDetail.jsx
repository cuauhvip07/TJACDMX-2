import { useLocation } from "react-router-dom"


export default function ConvocatoriaDetail() {

    const location = useLocation()

    const puntoConvocatoria = location.state?.punto || {}
   

    const {numero_orden,descripcion,comentarios,tipo_punto:{tipo_punto},materia:{materia},numero_orden_dia} = puntoConvocatoria


    return (
        <>
            <h1 className="text-center text-xl font-bold mt-5">
                Número de Orden del día: {numero_orden_dia}
            </h1>
            <div className="mt-5 mx-auto container">
                <div className="shadow-lg p-4">
                    <div className=" grid grid-cols-5 gap-3">
                        <p className="font-bold">Numero de orden: <span className="font-normal">{numero_orden}</span></p>
                        <p className="font-bold">Descripción: <span className="font-normal">{descripcion}</span></p>
                        <p className="font-bold">Materia: <span className="font-normal">{materia}</span></p>
                        <p className="font-bold">Comentarios: <span className="font-normal">{comentarios}</span></p>
                        <p className="font-bold">Tipo de Punto: <span className="font-normal">{tipo_punto}</span></p>
                    </div>
    
                    
                </div>

                {/* Sección para mostrar los archivos */}
                {puntoConvocatoria.archivo_urls && puntoConvocatoria.archivo_urls.length > 0 && (
                    <div className="mt-4 flex flex-col items-center">
                        <h4 className="font-bold">Archivos:</h4>
                        <ul>
                            {puntoConvocatoria.archivo_urls.map((archivo_url, index) => (
                                <li key={index}>
                                    <a
                                        href={archivo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Ver archivo {index + 1}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                
            </div>
        </>
    )    
}
