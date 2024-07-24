<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('convocatorias', function (Blueprint $table) {
            $table->id();
            $table->integer('numero_conv');
            $table->string('numero_of');
            $table->date('fecha');
            $table->string('archivo');
            $table->time('hora_inicio_real');
            $table->time('hora_fin_real');
            $table->foreignId('tipo_convocatoria_id')->constrained('tipo_convocatoria','id')->onDelete('cascade');
            $table->foreignId('estatus_id')->constrained('estatus','id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('convocatorias');
    }
};
