



export const convocatoriaSlice = (set) => ({
    
    convocatorias: [],

    addConvocatorias: (convocatoria) => {
        set((state) => ({
            convocatorias: [...state.convocatorias, convocatoria]
        }))
    }
    
})