<?php

namespace App\Http\Controllers;

use App\Http\Resources\PuntoConvocatoriaCollection;
use App\Models\PuntoConvocatoria;
use Illuminate\Http\Request;

class PuntoConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return new PuntoConvocatoriaCollection(PuntoConvocatoria::where('convocatoria_id', $request->convocatoria_id)
        ->get()
        // ->map(function ($punto){
        //     if($punto->archivos){
        //         $punto->archivo_url = url('storage/'.$punto->archivos);
        //     }
        // })
        );
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

        $punto_convocatoria = new PuntoConvocatoria;
        $punto_convocatoria->numero_orden = $request->numero_orden;
        $punto_convocatoria->numero_orden_dia = $request->num_orden;
        $punto_convocatoria->descripcion = $request->descripcion;
        $punto_convocatoria->comentarios = $request->comentarios;
        $punto_convocatoria->materia_id = $request->materia_id;
        $punto_convocatoria->tipo_punto_id = $request->tipo_punto_id;
        $punto_convocatoria->convocatoria_id = $request->convocatoria_id;


        if($request->hasFile('archivos')) {
            $file_paths = [];

            foreach($request->file('archivos') as $file){
                $path = $file->store('uploads','public');
                $file_paths[] = $path;
            }

            
            $punto_convocatoria->archivos = json_encode($file_paths);
        }

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
        //
    }
}
