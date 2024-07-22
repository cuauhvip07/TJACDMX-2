import { devtools } from "zustand/middleware";
import { convocatoriaSlice, convocatoriaSliceProps } from "./convocatoriaSlice";
import { create } from "zustand";

export const useConv = create<convocatoriaSliceProps>()(devtools((...a) => ({
    ...convocatoriaSlice(...a)
})))