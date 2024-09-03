<?php

namespace App\Http\Controllers;

use App\Http\Resources\IntegranteVotacionCollection;
use App\Models\Integrante;
use Illuminate\Http\Request;

class IntegranteVotacionController extends Controller
{
   public function index(Request $request)
    {
        
        return new IntegranteVotacionCollection(Integrante::all());
        
    }
}
