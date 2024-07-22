

import { devtools } from "zustand/middleware";
import { convocatoriaSlice } from "./convocatoriaSlice";
import { create } from "zustand";

export const useConv = create(devtools((...a) => ({
    ...convocatoriaSlice(...a)
})))