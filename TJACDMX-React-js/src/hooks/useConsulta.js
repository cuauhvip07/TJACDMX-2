import { useContext } from "react"
import consultaContext from "../context/consultaProvider"


const useConsulta = () => {
    const context = useContext(consultaContext)
    return context
}

export default useConsulta;