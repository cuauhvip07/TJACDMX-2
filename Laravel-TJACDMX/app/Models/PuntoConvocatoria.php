<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PuntoConvocatoria extends Model
{
    use HasFactory;
    protected $table = 'punto_convocatoria';

    public function materia ()
    {
        return $this->belongsTo(Materia::class,'materia_id');
    }

    public function tipo_punto()
    {
        return $this->belongsTo(TipoPunto::class,'tipo_punto_id');
    }
}
