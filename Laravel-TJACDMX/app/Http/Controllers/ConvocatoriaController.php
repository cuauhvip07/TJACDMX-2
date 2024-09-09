<?php

namespace App\Http\Controllers;

use App\Http\Resources\ConvocatoriaCollection;
use App\Models\Convocatoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $convocatorias = Convocatoria::with('tipoConvocatoria')
                                  ->with('estatus')
                                  ->orderBy('numero_conv', 'ASC')
                                  ->get()
                                  ->map(function ($convocatoria) {
                                      // Construye la URL completa para el archivo
                                      $convocatoria->archivo_url = url('storage/uploads/' . $convocatoria->archivo);
                                      return $convocatoria;
                                  });

    return new ConvocatoriaCollection($convocatorias);

    return [
        'message' => $convocatoria
    ];
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

        if($request->id) {
            $convocatoria = Convocatoria::find($request->id);

            if ($request->hasFile('archivo')) {
                // Verificar si hay un archivo existente y eliminarlo
                if ($convocatoria->archivo && Storage::disk('public')->exists($convocatoria->archivo)) {
                    Storage::disk('public')->delete($convocatoria->archivo);
                }
        
                // Subir el nuevo archivo y actualizar la ruta
                $path = $request->file('archivo')->store('uploads', 'public');
                $convocatoria->archivo = $path;
            }
        
            // Actualizar el resto de la información
            $convocatoria->update($request->except('archivo'));

        } else{
            $convocatoria = new Convocatoria;
            if ($request->hasFile('archivo')) {
                $file = $request->file('archivo');
                $path = $file->store('uploads', 'public');
                $ruta = $path;
                $convocatoria->archivo = $ruta;
            }
        }

        $convocatoria->numero_conv = $request->numero_conv;
        $convocatoria->numero_of = $request->numero_of;
        $convocatoria->fecha = $request->fecha;
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
    public function update(Request $request, string $id)
    {

    }   

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Convocatoria $convocatoria, string $id)
    {

        $convocatoria = Convocatoria::find($id);
        if($convocatoria->archivo && Storage::disk('public')->exists($convocatoria->archivo)) {
            Storage::disk('public')->delete($convocatoria->archivo);
        }
        $convocatoria->delete();

        return [
            'message' => 'Convocatoria eliminada correctamente'
        ];
    }
}
