<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IntegranteVotacionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id'=> $this->id,
            'nombre'=>$this->nombre,
            'apellido_paterno'=>$this->apellido_paterno,
            'apellido_materno'=>$this->apellido_materno,
            'votacion'=> new VotacionResource($this->votacion->first())
        ];
    }
}
