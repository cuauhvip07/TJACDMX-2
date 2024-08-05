import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { formatearFecha } from "../../helpers/formatearFecha";



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

            <div className=" mt-10 w-full">
               <Link 
                    to={`/convocatorias/${convocatoria.numero_of}/crear`} 
                    state={convocatoria} 
                    className=" mb-5 p-2 bg-red-500 text-white rounded-md"
                >
                +Añadir nueva orden
               </Link>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Numero de Orden
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Materia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            
                            <>
                                
                                <td className="px-6 py-4">
                                    1
                                </td>
                                <td className="px-6 py-4">
                                    Español
                                </td>
                                <td className="px-6 py-4">
                                    <Link 
                                        to={`/convocatorias/${convocatoria.numero_of}/1`}
                                    >
                                        Ver
                                    </Link>
                                </td>
                            </>
                        
                        </tr>
                        
                    </tbody>
                </table>
            </div>


        </div>
    )
}
