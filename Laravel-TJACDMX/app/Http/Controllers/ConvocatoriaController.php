<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConvocatoriaCollection;
use App\Models\Convocatoria;
use Illuminate\Http\Request;

class ConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new ConvocatoriaCollection(Convocatoria::with('tipoConvocatoria')->get());
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


        $convocatoria = new Convocatoria;
        $convocatoria->numero_conv = $request->numero_conv;
        $convocatoria->numero_of = $request->numero_of;
        $convocatoria->fecha = $request->fecha;
        $convocatoria->archivo = 'sdflkdssd.jpg';
        $convocatoria->hora_inicio_real = $request->hora_inicio_real;
        $convocatoria->hora_fin_real = $request->hora_fin_real;
        $convocatoria->estatus_id = $request->estatus_id;
        $convocatoria->tipo_convocatoria_id = $request->tipo_convocatoria_id;
        $convocatoria->save();

        // Falta poder subir archivos

        return [
            'message' => 'Datos guardados exitosamente'
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(Convocatoria $convocatoria)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Convocatoria $convocatoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Convocatoria $convocatoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Convocatoria $convocatoria)
    {
        //
    }
}
