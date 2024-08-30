
import { Link } from "react-router-dom"
import useConsulta from "../../hooks/useConsulta"
import { useEffect } from "react"
import { formatearFecha } from "../../helpers/formatearFecha"

export default function Integrantes() {

    const {obtenerIntegrantes,integrantes} = useConsulta()

    useEffect(() => {
        obtenerIntegrantes()
    },[])


  return (
    <div>
        <div className=" bg-red-500 inline-block text-white ml-5 mt-5 p-2 rounded-lg">
            <Link
                to='/magistrados/nuevo-integrante'
            >
                <button>Añadir integrante</button>
            </Link>
        </div>
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-5">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Apellidos
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Cargo
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Fecha de inicio del cargo
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Fecha de finalización del cargo
                        </th>


                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {integrantes.map(integrante => (
                        <>
                            <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700" key={integrante.id}>
                        
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {integrante.nombre}
                                </td>
                                <td className="px-6 py-4">
                                {`${integrante.apellido_paterno} ${integrante.apellido_materno}`}
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {integrante.tipo_integrante.tipo_integrante}
                                </td>
                                <td className="px-6 py-4">
                                    {formatearFecha(integrante.fecha_inicio)}
                                </td>
                                <td className="px-6 py-4">
                                {formatearFecha(integrante.fecha_fin)}
                                </td>

                                <td className="px-6 py-4">
                                    <div className=" flex flex-col gap-5">
                                        <Link 
                                            to={`/magistrados/actualizar/${integrante.id}`} 
                                            className=" bg-orange-400 hover:bg-orange-300 text-center rounded-full text-black py-0.5 inline-block"
                                            state={{integrante}}
                                        >
                                            <p>Actualizar</p>
                                        </Link>

                                        <a href="" className=" bg-red-500 hover:bg-red-400 text-white text-center rounded-full py-0.5 inline-block font-bold">
                                            <p>Eliminar</p>
                                        </a>
                                    </div>
                                </td>
                
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}
