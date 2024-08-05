

export default function ConvocatoriaDetail() {
  return (
    <>
        <h1 className=" text-center text-xl font-bold mt-5">Punto de Convocatoria: 1</h1>
        <div className=" grid grid-cols-1 md:grid-cols-[3fr_9fr] mt-5 mx-auto container">
        
            <aside className="flex justify-center mb-5 md:mb-0">
                <div className="">
                    <h2 className=" font-bold">Votaciones.</h2>
                    <div className=" space-y-2 mt-3">
                        <p>Juan: A favor</p>
                        <p>Carlos: En contra</p>
                        <p>Juan: Abstinencia</p>
                        <p>Juan: Inasistencia</p>
                    </div>
                </div>
            </aside>

            <div className=" shadow-lg p-4 md:w-10/12">
                <div className=" space-y-2">
                   <p className=" font-bold">Numero de orden: <span className=" font-normal">1</span></p>
                   <p className=" font-bold">Descripción: <span className=" font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsa vero sequi ut repellendus nesciunt, veritatis perspiciatis optio similique corporis, vel natus reprehenderit ab accusantium esse odit non, neque commodi.</span></p>
                   <p className=" font-bold">Meteria: <span className=" font-normal">Nombre de la materia</span></p>
                   <p className=" font-bold">Comentarios: <span className=" font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dicta est quo nobis. Neque architecto dolorem esse nostrum ab, vero ducimus voluptate ea tenetur, repellat velit in assumenda nam praesentium.</span></p>
                   <p className=" font-bold">Asunto Usuario: <span className=" font-normal">Asunto del usuario</span></p>
                </div>
            </div>

        </div>
        <div>
            <p className=" text-center">Archivo:</p>
        </div>
    </>
  )
}
