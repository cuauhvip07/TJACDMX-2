import Input from "../../utilities/Input";
import Label from "../../utilities/Label";


export default function ConvocatoriasMake() {
  return (
    <div className=" mt-10 flex justify-center">
        
        <div className=" shadow-lg w-7/12 mt-10 px-20 py-10">
            <form className=" w-full ">
                <h3 className=" font-bold  text-xl">Crea una convocatoria.</h3>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className="space-y-2">
                        <div>
                            <Label>Numero de Orden: </Label>

                            <Input
                                type='number'
                                
                            />

                        </div>

                        <div>
                            <Label>Numero de Orden: </Label>

                            <Input
                                type='number'
                                
                            />

                        </div>

                    </div>

                    <div className="space-y-2">
                        <div>
                            <Label>Numero de Orden: </Label>

                            <Input
                                type='number'
                                
                            />

                        </div>

                        <div>
                            <Label>Numero de Orden: </Label>

                            <Input
                                type='number'
                                
                            />

                        </div>
                    </div>
                </div>

                <div className=" flex justify-center">
                    <input 
                        type="submit" 
                        className=" bg-orange-400 w-8/12 mt-5 rounded-lg py-1 cursor-pointer hover:bg-orange-500"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}
