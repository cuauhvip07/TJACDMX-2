<?php

namespace App\Http\Controllers;

use App\Models\PuntoConvocatoria;
use Illuminate\Http\Request;

class PuntoConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $punto_convocatoria->convocatoria_id = $request->convocatoria_id;
        $punto_convocatoria->materia_id = $request->materia;
        $punto_convocatoria->numero_orden = $request->numero_orden;
        $punto_convocatoria->numero_orden_dia = $request->num_orden;
        $punto_convocatoria->descripcion = $request->descripcion;
        $punto_convocatoria->comentarios = $request->comentarios;
        $punto_convocatoria->tipo_punto_id = $request->tipo_punto;
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
