<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Integrante extends Model
{
    use HasFactory;

    protected $table = 'integrante';

    protected $fillable = [
        'nombre',
        'apellido_paterno',
        'apellido_materno',
        'fecha_inicio',
        'fecha_fin',

    ];

    public function tipo_integrante()
    {
        return $this->belongsTo(TipoIntegrante::class,'tipo_integrante_id');
    }
}
