<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Votacion extends Model
{
    use HasFactory;

    protected $table = 'votos';

    public function integrante()
    {
        return $this->belongsTo(Integrante::class,'integrante_id');
    }
}
