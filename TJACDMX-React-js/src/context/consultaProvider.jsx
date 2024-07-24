import { createContext } from "react";


const ConsultaContext = createContext()

const ConsultaProvider = ({children}) => {

  

    return (
        <ConsultaContext.Provider
        value={{
            
        }}
        >{children}</ConsultaContext.Provider>
    )
}


export { ConsultaProvider}
export default ConsultaContext