import { StateCreator } from "zustand"
import { Convocatoria } from "../types"

export type convocatoriaSliceProps = {
    convocatorias: Convocatoria[]
    addConvocatorias: (convocatoria:Convocatoria) => void
    
}

export const convocatoriaSlice : StateCreator<convocatoriaSliceProps> = (set) => ({
    
    convocatorias: [],

    addConvocatorias: (convocatoria) => {
        set((state) => ({
            convocatorias: [...state.convocatorias, convocatoria]
        }))
    }
    
})