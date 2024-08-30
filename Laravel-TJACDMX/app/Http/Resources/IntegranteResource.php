<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IntegranteResource extends JsonResource
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
            'nombre'=>$this->nombre,
            'apellido_paterno'=>$this->apellido_paterno,
            'apellido_materno'=>$this->apellido_materno,
            'fecha_inicio'=>Carbon::parse($this->fecha_inicio)->format('d F Y'),
            'fecha_fin'=>Carbon::parse($this->fecha_fin)->format('d F Y')
        ];
    }
}
