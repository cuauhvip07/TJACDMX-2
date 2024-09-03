
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function Informacion() {

  const location = useLocation()

  const convocatoria = location.state?.convocatoria
  const punto = location.state?.punto

  return (
    <div>
      <h1 className=" text-center font-bold text-xl mt-5">Menú de Opciones</h1>
      <div className=" flex flex-col items-center mt-10 space-y-5 ">

        <div className="w-5/12">
          <Link 
            to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}`}
            state={{punto,convocatoria}}
          
          >
            <div className=" bg-red-500 text-center text-white font-bold uppercase py-2 px-10">
              Información del Punto de la Convocatoria
            </div>
          </Link>
        </div>

        <div className="w-5/12">
          <Link 
            to={`/convocatorias/${convocatoria.numero_of}/${punto.numero_orden}/votacion`}
            state={punto.id}
          >
            <div className=" bg-green-500 text-center text-white font-bold uppercase py-2 px-10">
              Votos
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
