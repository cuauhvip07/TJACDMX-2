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
        // Si $request->voto_id es null, creamos un nuevo voto; de lo contrario, lo actualizamos
        $voto = $request->voto_id ? Votacion::find($request->voto_id) : new Votacion;

        // Asignamos los valores al voto, independientemente de si es nuevo o existente
        $voto->punto_convocatoria_id = $request->punto_convocatoria_id;
        $voto->integrante_id = $request->integrante_id;
        $voto->tipo_voto_id = $request->tipo_voto_id;
        $voto->save();

        // Determinamos el mensaje basado en si el voto es nuevo o actualizado
        $message = $request->voto_id ? 'Voto actualizado correctamente' : 'Voto guardado correctamente';

        return ['message' => $message];
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
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
