


export default function Convocatorias() {
    return (
  
      <div className=" mt-10">
          <h2 className=" text-center font-bold text-2xl mb-5 ">Convocatorias</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg container mx-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Numero de Convocatoria
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Numero de oficio
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Estatus
                          </th>
  
                          <th scope="col" className="px-6 py-3">
                              Tipo de Convocatoria
                          </th>
  
                          <th scope="col" className="px-6 py-3">
                              Action
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              1
                          </th>
                          <td className="px-6 py-4">
                              TJACDMX-123K-D122-D
                          </td>
                          <td className="px-6 py-4">
                              <p className=" bg-green-400 text-center font-bold rounded-md inline-block px-5 py-1 text-black">Regular</p>
                          </td>
                          <td className="px-6 py-4">
                              Regular
                          </td>
                          <td className="px-6 py-4">
                              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver</a>
                          </td>
                      </tr>
                     
                  </tbody>
              </table>
          </div>
  
      </div>
    )
  }
  