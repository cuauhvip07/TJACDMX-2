
import { Link } from "react-router-dom"

export default function Informacion() {
  return (
    <div>
      <h1 className=" text-center font-bold text-xl mt-5">Menú de Opciones</h1>
      <div className=" flex flex-col items-center mt-10 space-y-5">

        <div className="w-9/12">
          <Link to='/convocatorias'>
            <div className=" bg-red-500 text-center text-white font-bold uppercase py-2">
              Convocatorias
            </div>
          </Link>
        </div>

        <div className="w-9/12">
          <Link to='/convocatorias'>
            <div className=" bg-green-500 text-center text-white font-bold uppercase py-2">
              Asistencia
            </div>
          </Link>
        </div>

        <div className="w-9/12">
          <Link to='/magistrados'>
            <div className=" bg-purple-500 text-center text-white font-bold uppercase py-2">
              Magistrados
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
