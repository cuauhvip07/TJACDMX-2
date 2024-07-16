import { ReactNode } from "react"

type LabelProps = {
    children : ReactNode
}

export default function Label({children} : LabelProps) {
  return (

    <label 
        htmlFor=""
        className="    "
    >
        {children}
    </label>
  )
}
