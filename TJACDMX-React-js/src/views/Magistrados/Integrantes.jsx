
import { Link } from "react-router-dom"
import useConsulta from "../../hooks/useConsulta"
import { useEffect } from "react"

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
                                <td className="px-6 py-4">
                                    {integrante.fecha_inicio}
                                </td>
                                <td className="px-6 py-4">
                                {integrante.fecha_fin}
                                </td>

                                <td className="px-6 py-4">
                                <p>Actualizar</p>
                                <p>Eliminar</p>
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
