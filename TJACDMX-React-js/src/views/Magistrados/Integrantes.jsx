
import { Link } from "react-router-dom"

export default function Integrantes() {

    
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

                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white  even:bg-gray-50 border-b dark:border-gray-700" >
                        
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Cuauh
                        </td>
                        <td className="px-6 py-4">
                            Villalba Menosaza xomdoxpasm
                        </td>
                        <td className="px-6 py-4">
                            12/12/12
                        </td>
                        <td className="px-6 py-4">
                            15/2/98
                        </td>
                    
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
