<?php

namespace App\Http\Controllers;

use App\Http\Resources\TipoConvocatoriaCollection;
use App\Models\TipoConvocatoria;
use Illuminate\Http\Request;

class TipoConvocatoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new TipoConvocatoriaCollection(TipoConvocatoria::all());
    }

    
}
