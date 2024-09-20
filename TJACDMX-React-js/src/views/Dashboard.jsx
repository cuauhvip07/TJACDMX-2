
import { Link } from "react-router-dom"


export default function Dashboard() {
  return (
    <div className=" mt-5 ml-5">
      <div className=" grid grid-cols-3 gap-5">

        <div className=" bg-yellow-400 p-3 rounded-xl">
          <Link
            to='/magistrados'
          >
            <div className=" h-48 flex items-center justify-between">
              <p className=" font-bold uppercase text-xl">Magistrados</p>
              <div>
                <img src="src/img/magistrado.png" alt="Imagen magistrado" className=" size-20"/>
              </div>
            </div>
          </Link>
        </div>

        

      </div>
    </div>
  )
}
