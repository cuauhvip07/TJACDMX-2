import { useLocation } from 'react-router-dom';
import { formatearFecha } from '../../helpers/formatearFecha';
import { useState } from 'react';

export default function ConvocatoriasDetails() {
    const location = useLocation();
    const convocatoria = location.state?.convocatoria;

    const [mostrar,setMostrar] = useState(false);


    const onHandleClickMostrar = () => {
        setMostrar(!mostrar)
    }

    if (!convocatoria) {
        return <p>No hay información de convocatoria disponible.</p>;
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold mt-5">Numero de oficio: {convocatoria.numero_of}</h1>
            <div className="mt-5 mx-auto container">
                <div className="shadow-lg p-4 h-auto">
                    <div className="flex  justify-between h-auto ">
                        <div className=' space-y-10  w-7/12'>
                            <p className="font-bold">Numero de Convocatoria: <span className="font-normal">{convocatoria.numero_conv}</span></p>
                            <p className="font-bold">Fecha: <span className="font-normal">{formatearFecha(convocatoria.fecha)}</span></p>
                            <p className="font-bold">Hora de inicio real: <span className="font-normal">{convocatoria.hora_inicio_real}</span></p>
                            <p className="font-bold">Hora de finalización real: <span className="font-normal">{convocatoria.hora_fin_real}</span></p>
                            <p className="font-bold">Tipo de Convocatoria: <span className="font-normal">{convocatoria.tipo_convocatoria.nombre}</span></p>
                            <p className="font-bold">Estatus: <span className="font-normal">{convocatoria.estatus.estatus}</span></p>
                        </div>

                        <div className=' flex items-center w-2/12 h-auto'>
                            <button 
                                className=' bg-red-500 p-2 rounded-lg text-white font-semibold  transition-colors hover:bg-red-400 '
                                onClick={() => onHandleClickMostrar()}
                            >
                                {mostrar ? 'Ocultar Archivo' : 'Mostrar Archvo'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
               
               

                {mostrar && (
                    <>
                        <h3 className=' text-center mt-7 font-bold text-xl uppercase '>Visualizador de archivo</h3>
                        <div className='  mt-6'>
                            <embed src={`${import.meta.env.VITE_API_URL}/storage/${convocatoria.archivo}`} type="application/pdf" width="100%" height="1000px" />
                        </div>
                    </>
                )}

               
                
               
            </div>
        </>
    );
}
