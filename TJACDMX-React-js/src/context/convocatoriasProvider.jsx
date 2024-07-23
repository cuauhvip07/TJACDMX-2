
import { createContext, useState } from 'react';

const ConvocatoriasContext = createContext();

const ConvocatoriasProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    const handleClickModal = () => {
        setModal(!modal);
    };

    return (
        <ConvocatoriasContext.Provider
            value={{
                modal,
                handleClickModal,
            }}
        >
            {children}
        </ConvocatoriasContext.Provider>
    );
};

export { ConvocatoriasProvider };
export default ConvocatoriasContext;
