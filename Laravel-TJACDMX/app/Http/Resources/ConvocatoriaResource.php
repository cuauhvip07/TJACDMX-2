<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConvocatoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'numero_conv' => $this->numero_conv,
            'numero_of' => $this->numero_of,
            'fecha'=>$this->fecha,
            'archivo' => $this->archivo,
            'hora_inicio_real' => $this->hora_inicio_real,
            'hora_fin_real' => $this->hora_fin_real,
            'estatus_id' => $this->estatus_id,
            'tipo_convocatoria' => [
                'nombre' => $this->tipoConvocatoria->nombre
            ]
        ];
    }
}
