<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ConvocatoriaController;
use App\Http\Controllers\EstatusController;
use App\Http\Controllers\IntegrantesController;
use App\Http\Controllers\IntegranteVotacionController;
use App\Http\Controllers\MateriasController;
use App\Http\Controllers\PuntoConvocatoriaController;
use App\Http\Controllers\TipoConvocatoriaController;
use App\Http\Controllers\TipoIntegranteController;
use App\Http\Controllers\TipoPuntoController;
use App\Http\Controllers\TipoVotoController;
use App\Http\Controllers\VotacionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user',function(Request $request){
        return $request->user();
    });

    // Route::post('/logout',[AuthController::class, 'logout']);
    Route::apiResource('/estatus-convocatoria', EstatusController::class);
    Route::apiResource('/tipo_convocatoria', TipoConvocatoriaController::class);
    Route::apiResource('/nueva_convocatoria',ConvocatoriaController::class);
    Route::apiResource('/punto_convocatoria',PuntoConvocatoriaController::class);
    Route::apiResource('/materia',MateriasController::class);
    Route::apiResource('/tipo_punto',TipoPuntoController::class);
    Route::apiResource('/tipo_voto',TipoVotoController::class);
    Route::apiResource('/tipo_integrante',TipoIntegranteController::class);
    Route::apiResource('/integrantes',IntegrantesController::class);
    Route::apiResource('/votacion',VotacionController::class);
    Route::apiResource('/integrante_votacion',IntegranteVotacionController::class);
});

Route::post('/registro',[AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);