<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoConvocatoria extends Model
{
    use HasFactory;

    protected $table = 'tipo_convocatoria';

    public function convocatoria ()
    {
        return $this->hasMany(Convocatoria::class);
    }
}
