<?php

namespace App\Http\Controllers;

use App\Http\Resources\PuntoConvocatoriaCollection;
use App\Models\PuntoConvocatoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PuntoConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return new PuntoConvocatoriaCollection(PuntoConvocatoria::where('convocatoria_id', $request->convocatoria_id)->get());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
 
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // Si existe un ID, se está actualizando un punto de convocatoria existente
    if ($request->id) {
        $punto_convocatoria = PuntoConvocatoria::find($request->id);
    } else {
        // Si no hay ID, se está creando un nuevo punto de convocatoria
        $punto_convocatoria = new PuntoConvocatoria;
    }

    // Actualizar los campos del punto de convocatoria
    $punto_convocatoria->numero_orden = $request->numero_orden;
    $punto_convocatoria->numero_orden_dia = $request->num_orden;
    $punto_convocatoria->descripcion = $request->descripcion;
    $punto_convocatoria->comentarios = $request->comentarios;
    $punto_convocatoria->materia_id = $request->materia_id;
    $punto_convocatoria->tipo_punto_id = $request->tipo_punto_id;
    $punto_convocatoria->convocatoria_id = $request->convocatoria_id;

    // Solo eliminar archivos antiguos y subir nuevos si se han subido nuevos archivos
    if ($request->hasFile('archivos')) {
        // Eliminar los archivos antiguos si existen
        $archivos = json_decode($punto_convocatoria->archivos, true);
        if (!empty($archivos)) {
            foreach ($archivos as $archivo) {
                Storage::delete('public/' . $archivo);
            }
        }

        // Subir los nuevos archivos
        $file_paths = [];
        foreach ($request->file('archivos') as $file) {
            $path = $file->store('uploads', 'public');
            $file_paths[] = $path;
        }

        // Guardar la nueva lista de archivos
        $punto_convocatoria->archivos = json_encode($file_paths);
    }

    // Guardar el punto de convocatoria
        $punto_convocatoria->save();
        
        return[
            "message" => 'Campos guardados correctamente'
        ];


        
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $punto_convocatoria = PuntoConvocatoria::find($id);

        $archivos = json_decode($punto_convocatoria->archivos,true);

        if(!empty($archivos)){
            foreach($archivos as $archivo){
                Storage::delete('public/'.$archivo);
            }
        }

       $punto_convocatoria->delete();

        return[
            'message' => 'Punto de convocatoria eliminado correctamente'
        ];
       
    }
}
