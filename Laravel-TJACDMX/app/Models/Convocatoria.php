<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convocatoria extends Model
{
    use HasFactory;

    public function tipoConvocatoria()
    {
        return $this->belongsTo(TipoConvocatoria::class,'tipo_convocatoria_id');
    }
}
