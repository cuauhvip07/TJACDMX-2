
import { createContext, useState } from 'react';

const ConvocatoriasContext = createContext();

const ConvocatoriasProvider = ({ children }) => {

    
    const [modal, setModal] = useState(false);

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSubmitNuevaConvocatoria = (datos) => {
        console.log(datos)
    }





    return (
        <ConvocatoriasContext.Provider
            value={{
                modal,
                handleClickModal,
                handleSubmitNuevaConvocatoria,
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
