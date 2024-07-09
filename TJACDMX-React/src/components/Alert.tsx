import { ReactNode } from "react"


type AlertProps = {
    children: ReactNode
}

export default function Alert({children} : AlertProps) {
  return (
    <>
        <p className=" border-l-2 border-red-700 bg-red-400 text-white font-bold uppercase">{children}</p>
    </>
  )
}
