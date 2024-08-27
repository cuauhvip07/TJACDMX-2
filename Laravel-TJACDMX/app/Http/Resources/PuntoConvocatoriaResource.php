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
            'numero_orden'=>$this->numero_orden,
            'descripcion'=>$this->descripcion,
            'materia'=>[
                'materia'=>$this->materia->materia
            ],
            'comentarios'=>$this->comentarios,
            'tipo_punto'=>[
                'tipo_punto'=>$this->tipo_punto->nombre
            ],
            'numero_orden_dia'=>$this->numero_orden_dia
        ];
    }
}
