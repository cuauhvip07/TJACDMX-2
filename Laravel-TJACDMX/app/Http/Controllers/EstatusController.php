<?php

namespace App\Http\Controllers;

use App\Http\Resources\EstatusCollection;
use App\Models\Estatus;
use Illuminate\Http\Request;

class EstatusController extends Controller
{
    public function index()
    {
        return new EstatusCollection(Estatus::all());
    }
}
