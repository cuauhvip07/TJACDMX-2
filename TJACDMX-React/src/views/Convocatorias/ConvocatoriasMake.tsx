import { estatus } from "../../data/estatus";
import Input from "../../utilities/Input";
import Label from "../../utilities/Label";


export default function ConvocatoriasMake() {
  return (
    <div className=" mt-10 flex justify-center">
        
        <div className=" shadow-lg w-7/12 mt-10 px-20 py-10">
            <form className=" w-full ">
                <h3 className=" font-bold  text-xl">Crea una convocatoria.</h3>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className=" space-y-10">
                        <div>
                            <Label
                                htmlfor='numero_orden'
                            >
                                Numero de Orden: 
                            </Label>

                            <Input
                                type='number'
                                id={'numero_orden'}
                                name={'numero_orden'}
                            />

                        </div>

                        <div>
                            <Label
                                htmlfor='fecha'
                            >
                                Fecha: 
                            </Label>

                            <Input
                                type='date'
                                id={'fecha'}
                                name={'fecha'}
                            />

                        </div>

                        <div>
                            <Label
                                htmlfor='archivo'
                            >
                                Archivo del Oficio: 
                            </Label>

                            <Input
                                type='file'
                                accept=".pdf"
                                name="archivo"
                                id="archivo"
                            />

                        </div>

                    </div>

                    <div className="space-y-10">
                        <div>
                            <Label
                                htmlfor="hora_inicio_real"
                            >
                                Hora de inicio real: 
                            </Label>

                            <Input
                                type='time'
                                id="hora_inicio_real"
                                name="hora_inicio_real"
                            />

                        </div>

                        <div>
                            <Label
                                htmlfor="hora_fin_real"
                            >
                                Hora finalizacion real: 
                            </Label>

                            <Input
                                type='time'
                                name="hora_fin_real"
                                id="hora_fin_real"
                            />

                        </div>

                        <div>
                            <Label
                                htmlfor="status"
                            >
                                Estatus: 
                            </Label>
                            <select 
                                name="status" 
                                id="status" 
                                className="border rounded-xl py-1 w-10/12 bg-gray-100 text-center focus:bg-gray-300"
                            >
                                <option value="" disabled selected>-- Seleccione una opción --</option>
                               {estatus.map( status => (
                                <option value={status.id}>{status.status}</option>
                               ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className=" flex justify-center mt-10">
                    <input 
                        type="submit" 
                        className=" bg-orange-400 w-8/12 rounded-lg py-1 cursor-pointer hover:bg-orange-500"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}
