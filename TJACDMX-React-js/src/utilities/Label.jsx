

export default function Label({children,htmlfor} ) {
  return (

    <label 
        htmlFor={htmlfor}
        className=" block mb-2 "
    >
        {children}
    </label>
  )
}
