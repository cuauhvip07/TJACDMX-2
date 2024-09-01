<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convocatoria extends Model
{
    use HasFactory;

    protected $fillable = [
        'numero_conv',
        'numero_of',
        'fecha',
        'archivo',
        'hora_inicio_real',
        'hora_fin_real',
        'estatus_id',
        'tipo_convocatoria_id'
    ];

    public function tipoConvocatoria()
    {
        return $this->belongsTo(TipoConvocatoria::class,'tipo_convocatoria_id');
    }

    public function estatus()
    {
        return $this->belongsTo(Estatus::class,'estatus_id');
    }
}
