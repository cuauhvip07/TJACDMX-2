
import { Link } from "react-router-dom"


export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-col items-center">

        <div className=" bg-yellow-400 w-7/12 text-center mt-10 py-2 font-bold ">
          <Link
            to='/magistrados'
          >
            <div className="">
              <p>Magistrados</p>
            </div>
          </Link>
        </div>

      </div>
    </div>
  )
}
