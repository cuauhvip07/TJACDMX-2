



export default function Registro() {
  return (
    <div className=" flex flex-col md:flex-row md:justify-center my-10 gap-5 items-center">
      <div>
        Imagen
      </div>
      <form className="shadow-xl py-5 px-10 rounded-lg md:w-6/12">
        <div className="space-y-2 ">

          <label htmlFor="name">Nombre:</label>
          <input 
            type="text" 
            placeholder="Tu nombre"
            className="block p-3 w-full border-gray-400 border rounded-lg"
          />
        </div>

        <div className="space-y-2 mt-5 ">

          <label htmlFor="name">Correo:</label>
          <input 
            type="email" 
            placeholder="Tu Correo"
            className="block p-3 w-full border-gray-400 border rounded-lg"
          />
        </div>

        <div className="space-y-2 mt-5 ">

          <label htmlFor="name">Contraseña:</label>
          <input 
            type="password" 
            placeholder="Contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
          />
        </div>

        <div className="space-y-2 mt-5 ">

          <label htmlFor="name">Repetir Contraseña:</label>
          <input 
            type="password" 
            placeholder="Repite tu contraseña"
            className="block p-3 w-full border-gray-400 border rounded-lg"
          />
        </div>

        

        
      </form>
    </div>
  )
}
