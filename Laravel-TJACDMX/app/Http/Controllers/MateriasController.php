<?php

namespace App\Http\Controllers;

use App\Http\Resources\MateriaCollection;
use App\Models\Materia;
use Illuminate\Http\Request;

class MateriasController extends Controller
{
    public function index()
    {
        return new MateriaCollection(Materia::all());
    }
}
