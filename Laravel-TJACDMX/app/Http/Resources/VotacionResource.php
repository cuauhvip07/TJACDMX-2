<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VotacionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'punto_convocatoria_id' => $this->punto_convocatoria_id,
            'integrante_id'=>$this->integrante_id,
            'tipo_voto_id'=>$this->tipo_voto_id,
            // 'integrante'=>[
            //     'nombre'=>$this->integrante->nombre,
            //     'apellido_paterno'=>$this->integrante->apellido_paterno,
            //     'apellido_materno'=>$this->integrante->apellido_materno,
            //     'fecha_inicio'=>$this->integrante->fecha_inicio,
            //     'fecha_fin'=>$this->integrante->fecha_fin,
            //     'tipo_integrante_id'=>$this->integrante->tipo_integrante_id
            // ]
        ];
    }
}
