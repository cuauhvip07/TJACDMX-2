
type InputProps = {
    type: string
    accept?: string
    id: string
    name:string
}



export default function Input({type,accept,id,name} : InputProps ) {
  return (
    <input 
        type={type} 
        className=" border rounded-xl py-1 w-10/12 bg-gray-100 text-center focus:bg-gray-300"
        id={id}
        name={name}
        accept={accept}
    />
  )
}
