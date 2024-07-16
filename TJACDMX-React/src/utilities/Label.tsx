import { ReactNode } from "react"

type LabelProps = {
    children : ReactNode,
    htmlfor: string
}

export default function Label({children,htmlfor} : LabelProps) {
  return (

    <label 
        htmlFor={htmlfor}
        className=" block mb-2 "
    >
        {children}
    </label>
  )
}
