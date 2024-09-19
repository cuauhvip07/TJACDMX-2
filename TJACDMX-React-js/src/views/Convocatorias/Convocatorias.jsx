import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom";
import useConv from "../../hooks/useConv";
import useSWR from "swr";
import clienteAxios from "../../config/axios";
import useConsulta from "../../hooks/useConsulta";



export default function Convocatorias() {

    const {user} = useAuth({middleware:'auth'});
    const {handleDeleteConvocatoria} = useConv()
    const {obtenerConvocatoria} = useConsulta()

    const {data,error,isLoading} = obtenerConvocatoria()

    if (isLoading) return <p>Cargando...</p>
    if (error) return <p>Hubo un error</p>
    
    

    return (
  
      <div className=" mt-10">
          <h2 className=" text-center font-bold text-2xl mb-5 ">Convocatorias</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
            {user && user.admin === 1 && (
                <Link to='/convocatorias/crear' className="block mb-5 p-2 bg-red-500 text-white rounded-md  w-1/2 md:w-1/5 ">
                    + Agregar una nueva
                </Link>
            )}

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Numero de Convocatoria
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Numero de oficio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Estatus
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Tipo de Convocatoria
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map(convocatoria => (
                        <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700" key={convocatoria.id} >
                            
                            <>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {convocatoria.numero_conv}
                                </td>
                                <td className="px-6 py-4">
                                    {convocatoria.numero_of}
                                </td>
                                <td className="px-6 py-4">
                                    <p className=" text-center font-bold rounded-md inline-block px-5 py-1 text-black">{convocatoria.estatus.estatus}</p>
                                </td>
                                <td className="px-6 py-4">
                                    {convocatoria.tipo_convocatoria.nombre}
                                </td>
                                <td className="px-6 py-4 w-2/12">
                                    
                                    <div className=" flex flex-col gap-3">
                                        <Link
                                            className=" bg-green-500 hover:bg-green-400 text-center rounded-full text-black p-1 inline-block font-bold"
                                            to={`/convocatorias/${convocatoria.numero_of}/informacion`}
                                            state={{ convocatoria }} 
                                        >
                                            Checar Convocatoria
                                        </Link>
                                        <Link
                                            className=" bg-blue-400 hover:bg-blue-300 text-center rounded-full text-black p-1 inline-block font-bold"
                                            to={`/convocatorias/${convocatoria.numero_of}`}
                                            state={{ convocatoria }} 
                                        >
                                            Ver Puntos de la convocatoria
                                        </Link>

                                        {user && user.admin === 1 && (
                                            <>
                                                <Link 
                                                to={`/convocatorias/actualizar/${convocatoria.numero_of}`}
                                                className=" bg-orange-400 hover:bg-orange-300 text-center rounded-full text-black p-1 inline-block"
                                                state={{ convocatoria }}
                                                >
                                                    <p>Actualizar</p>
                                                </Link>

                                                <button 
                                                    className=" bg-red-500 hover:bg-red-400 text-white text-center rounded-full p-1 inline-block font-bold"
                                                    onClick={() => handleDeleteConvocatoria({id: convocatoria.id, numero_of: convocatoria.numero_of})}
                                                >
                                                    <p>Eliminar</p>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                    
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
  