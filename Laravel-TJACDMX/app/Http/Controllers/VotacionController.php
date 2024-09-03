<?php

namespace App\Http\Controllers;

use App\Http\Resources\IntegranteCollection;
use App\Http\Resources\IntegranteResource;
use App\Http\Resources\IntegranteVotacionCollection;
use App\Http\Resources\VotacionCollection;
use App\Models\Integrante;
use App\Models\Votacion;
use Illuminate\Http\Request;

class VotacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $puntoConvocatoriaId = $request->input('punto_convocatoria_id');
    
        $integrantes = Integrante::with(['votacion' => function($query) use ($puntoConvocatoriaId) {
            $query->where('punto_convocatoria_id', $puntoConvocatoriaId);
        }])->get();
    
        return new IntegranteVotacionCollection($integrantes);
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

        $voto = new Votacion;
        $voto->punto_convocatoria_id = $request->punto_convocatoria_id;
        $voto->integrante_id = $request->integrante_id;
        $voto->tipo_voto_id = $request->tipo_voto_id;
        $voto->save();

        return [
            'message'=>'Voto guardado correctamente'
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
        $voto = Votacion::find($id);
        $voto->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
