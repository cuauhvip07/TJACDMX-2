<?php

namespace App\Http\Controllers;

use App\Models\Integrante;
use Illuminate\Http\Request;

class IntegrantesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $integrante = new Integrante;
        $integrante->nombre = $request->nombre;
        $integrante->apellido_paterno = $request->apellido_paterno;
        $integrante->apellido_materno = $request->apellido_materno;
        $integrante->fecha_inicio = $request->fecha_inicio;
        $integrante->fecha_fin = $request->fecha_fin;
        $integrante->tipo_integrante_id = $request->tipo_integrante;
        $integrante->save();
        
        return[
            'message'=>'Guardado correctamente'
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
