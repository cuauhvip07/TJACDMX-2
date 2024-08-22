<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoPunto extends Model
{
    use HasFactory;

    protected $table = 'tipo_punto';   // Cuando el modelo no sabe con que tabla conectarla se debe de especificar
}
