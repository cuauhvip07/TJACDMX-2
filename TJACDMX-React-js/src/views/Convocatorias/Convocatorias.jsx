import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom";
import useConsulta from "../../hooks/useConsulta";



export default function Convocatorias() {

    const {user} = useAuth({middleware:'auth'});
    const {convocatorias} = useConsulta()

    return (
  
      <div className=" mt-10">
          <h2 className=" text-center font-bold text-2xl mb-5 ">Convocatorias</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
            {user && user.admin === 1 && (
                <Link to='/convocatorias/crear' className="block mb-5 p-2 bg-red-500 text-white rounded-md  w-1/2 md:w-1/5 ">
                    + Agregar una nueva
                </Link>
            )}

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                    {convocatorias.map(convocatoria => (
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={convocatoria.id} >
                            
                            <>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/convocatorias/${convocatoria.numero_of}`}
                                        state={{ convocatoria }} 
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
  