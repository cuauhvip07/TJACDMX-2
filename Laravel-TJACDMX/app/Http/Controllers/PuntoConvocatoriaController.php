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
        $punto_convocatoria = new PuntoConvocatoria;
        $punto_convocatoria->numero_conv = $request->numero_conv;
        $punto_convocatoria->numero_of = $request->numero_of;
        $punto_convocatoria->fecha = $request->fecha;
        $punto_convocatoria->archivo = 'asassad.jpg';
        $punto_convocatoria->hora_inicio_real = $request->hora_inicio_real;
        $punto_convocatoria->hora_fin_real = $request->hora_fin_real;
        $punto_convocatoria->tipo_convocatoria_id = $request->tipo_convocatoria_id;
        $punto_convocatoria->estatus_id = $request->estatus_id;
        $punto_convocatoria->save();

        return[
            'message' => 'Datos guardados exitosamente'
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
