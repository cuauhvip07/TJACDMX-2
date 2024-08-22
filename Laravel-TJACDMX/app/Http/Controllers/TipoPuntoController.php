<?php

namespace App\Http\Controllers;

use App\Http\Resources\TipoPuntoCollection;
use App\Models\TipoPunto;
use Illuminate\Http\Request;

class TipoPuntoController extends Controller
{
    public function index()
    {
        return new TipoPuntoCollection(TipoPunto::all());
    }
}
