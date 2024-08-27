import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { formatearFecha } from "../../helpers/formatearFecha";
import useConsulta from "../../hooks/useConsulta";



export default function Convocatoria() {
    const navigate = useNavigate()


    useAuth({middleware: 'auth'});
    
    const location = useLocation()
    const convocatoria = location.state?.convocatoria

    const {puntosConvocatoria} = useConsulta()
    
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
                    state={{convocatoria}} 
                    className=" mb-5 p-2 bg-red-500 text-white rounded-md"
                >
                +Añadir nueva orden
               </Link>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Numero de Orden
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Materia
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tipo de Punto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        
                        {puntosConvocatoria.map( punto => (
                            <tr className="odd:bg-white even:bg-gray-50 border-b " key={punto.numero_orden}>
                            
                            <>
                                
                                <td className="px-6 py-4">
                                    {punto.numero_orden}
                                </td>
                                <td className="px-6 py-4">
                                    {punto.materia.materia}
                                </td>
                                <td className="px-6 py-4">
                                    {punto.tipo_punto.tipo_punto}
                                </td>
                                <td className="px-6 py-4">
                                    <Link 
                                        to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}`}
                                        state={{punto}}
                                    >
                                        Ver
                                    </Link>
                                </td>
                            </>
                        
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>


        </div>
    )
}
