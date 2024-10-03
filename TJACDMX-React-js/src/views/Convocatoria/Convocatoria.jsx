import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useConsulta from "../../hooks/useConsulta";
import useConv from "../../hooks/useConv";



export default function Convocatoria() {

    const location = useLocation()
    const convocatoria = location.state?.convocatoria


    const {puntosConvocatoria,obtenerPuntoConvocatoria} = useConsulta()
    const {handleDeletePuntoConvocatoria} = useConv()

    useEffect(() => {
        obtenerPuntoConvocatoria(convocatoria.id)
    },[])

    const navigate = useNavigate()


    const {user} = useAuth({middleware: 'auth'});
    
    
    useEffect(() => {
      if (!convocatoria) {
        // Si no hay convocatoria, redirigir a la página de error
        navigate('/convocatorias');
      }
    }, [convocatoria]);
  
  
  
    return (
        <div className="container mx-auto flex flex-col items-center">
            <h3 className=" text-center font-bold text-xl md:text-3xl my-5 uppercase">Convocatoria: {convocatoria.numero_of}</h3>

        
            <div className=" mt-10 w-full">
               {user && user.admin === 1 && (
                    <Link 
                    to={`/convocatorias/${convocatoria.numero_of}/crear`} 
                    state={{convocatoria}} 
                    className=" mb-5 p-2 bg-red-500 text-white rounded-md"
                    >
                        +Añadir nueva orden
                    </Link>
               )}
                
                {puntosConvocatoria.length !== 0 ? (

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
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acción
                            </th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        
                        {puntosConvocatoria.map( punto => (
                            <tr className="odd:bg-white even:bg-gray-50 border-b " key={punto.id}>
                            
                            
                                
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
                                    {punto.descripcion}
                                </td>
                                <td className="px-6 py-4">
                                    <div className=" flex flex-col gap-3">
                                        <Link
                                            className=" bg-green-500 hover:bg-green-400 text-center rounded-full text-black p-1 inline-block font-bold"
                                            to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}`}
                                            state={{punto,convocatoria}}
                                        >
                                            Ver Información
                                        </Link>

                                        <Link 
                                            to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}/votacion`}
                                            state={punto.id}
                                            className=" bg-blue-500 hover:bg-blue-400 text-center rounded-full text-white p-1 inline-block font-bold"
                                        >
                                            Votos
                                        </Link>

                                        

                                        {user && user.admin === 1 && (
                                            <>
                                                <Link 
                                                to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}/actualizar`}
                                                className=" bg-orange-400 hover:bg-orange-300 text-center rounded-full text-black p-1 inline-block"
                                                state={{ punto,convocatoria }}
                                                >
                                                    <p>Actualizar</p>
                                                </Link>

                                                <Link
                                                    className=" bg-red-500 hover:bg-red-400 text-center rounded-full text-white p-1 inline-block font-bold"
                                                    onClick={() => handleDeletePuntoConvocatoria(punto.id)}
                                                    state={{ convocatoria}}
                                                >
                                                    Eliminar
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </td>
                            
                        
                        </tr>
                        ))}
                        
                    </tbody>
                    </table>
                ) : (
                    <p className=" mt-20 font-bold text-xl text-center">Agrega una orden para que se visualice aquí</p>
                )}
            </div>


        </div>
    )
}
