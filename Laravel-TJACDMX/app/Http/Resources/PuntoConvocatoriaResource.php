<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PuntoConvocatoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id'=>$this->id,
            'numero_orden'=>$this->numero_orden,
            'descripcion'=>$this->descripcion,
            'materia'=>[
                'materia'=>$this->materia->materia
            ],
            'comentarios'=>$this->comentarios,
            'tipo_punto'=>[
                'tipo_punto'=>$this->tipo_punto->nombre
            ],
            'numero_orden_dia'=>$this->numero_orden_dia,
            'archivo_urls' => $this->archivos ? collect(json_decode($this->archivos))->map(function($archivo) {
                return url('storage/' . $archivo);
                }) : [],
        ];
    }
}
