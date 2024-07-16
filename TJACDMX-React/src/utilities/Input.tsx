
type InputProps = {
    type: string
}



export default function Input({type} : InputProps ) {
  return (
    <input 
        type={type} 
        className=" border rounded-xl py-1 w-10/12 bg-gray-100 text-center"
        id=""
        name=""
    />
  )
}
