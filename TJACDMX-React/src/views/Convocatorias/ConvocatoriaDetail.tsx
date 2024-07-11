import { DocumentIcon, MusicalNoteIcon } from "@heroicons/react/24/solid"




export default function ConvocatoriaDetail() {


  return (
    <div className="container mx-auto flex flex-col items-center">
      <h3 className=" text-center font-bold text-3xl my-5 uppercase">Convocatoria: TJACDMX-234FF-23XW</h3>
      <div className=' shadow-xl mt-10 p-5 w-8/12'>
        <div className=" space-y-3 my-5 flex flex-col">

          <div>
            <p className=" font-bold uppercase text-lg">Numero de Convocatoria: <span className=" font-normal normal-case">3</span></p>
          </div>

          <div>
            <p className=" font-bold uppercase text-lg">Numero de Oficio: <span className=" font-normal normal-case">3</span></p>
          </div>

          <div>
            <p className=" font-bold uppercase text-lg">Fecha: <span className=" font-normal normal-case">03 - Julio - 2025</span></p>
          </div>

          <div>
            <p className=" font-bold uppercase text-lg">Hora de inicio real: <span className=" font-normal normal-case">03:34 pm</span></p>
          </div>

          <div>
            <p className=" font-bold uppercase text-lg">Hora de Finalizacion real: <span className=" font-normal normal-case">03:56 pm</span></p>
          </div>

          
        </div>

        <div className=" flex justify-around">
          <DocumentIcon 
            className=" size-7 cursor-pointer text-gray-400 hover:text-black transition"
            title="Visualizar archivo"
            />
          
          <MusicalNoteIcon 
            className=" size-7 cursor-pointer text-gray-400 hover:text-black transition"
            title="Reproudcir audio"
          />
          
        </div>

        
      </div> 
    </div>
  )
}
