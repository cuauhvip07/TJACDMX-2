import { useContext } from 'react';
import ConvocatoriasContext from '../context/convocatoriasProvider';


const useConv = () => {
    const context = useContext(ConvocatoriasContext);
    if (context === undefined) {
        throw new Error('useConvocatorias debe usarse dentro de un ConvocatoriasProvider');
    }
    return context;
};

export default useConv;
