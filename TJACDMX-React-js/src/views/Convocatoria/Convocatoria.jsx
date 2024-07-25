import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { formatearFecha } from "../../helpers/formatearFecha";
import { DocumentIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";



export default function Convocatoria() {
    const navigate = useNavigate()


    useAuth({middleware: 'auth'});
    
    const location = useLocation()
    const convocatoria = location.state?.convocatoria
    
    useEffect(() => {
      if (!convocatoria) {
        // Si no hay convocatoria, redirigir a la página de error
        navigate('/convocatorias');
      }
    }, [convocatoria]);
  
  
  
    return (
        <div className="container mx-auto flex flex-col items-center">
            <h3 className=" text-center font-bold text-xl md:text-3xl my-5 uppercase">Convocatoria: {convocatoria.numero_of}</h3>

            <div className="">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-3 mx-2 md:mx-0">
                    <div>
                        <p className=" font-bold uppercase md:text-lg">Numero de Convocatoria: <span className=" font-normal normal-case">{convocatoria.numero_conv}</span></p>
                    </div>
        
                    <div>
                        <p className="  font-bold uppercase md:text-lg">Numero de Oficio: <span className=" font-normal normal-case"> {convocatoria.numero_of}</span></p>
                    </div>
        
                    <div>
                        <p className="  font-bold uppercase md:text-lg">Fecha: <span className=" font-normal normal-case">{formatearFecha(convocatoria.fecha)}</span></p>
                    </div>
        
                    <div>
                        <p className="  font-bold uppercase md:text-lg">Hora de inicio real: <span className=" font-normal normal-case">{convocatoria.hora_inicio_real}</span></p>
                    </div>
        
                    <div>
                        <p className="  font-bold uppercase md:text-lg">Hora de Finalizacion real: <span className=" font-normal normal-case">{convocatoria.hora_fin_real}</span></p>
                    </div>
                </div>
            </div>


        </div>
    )
}
