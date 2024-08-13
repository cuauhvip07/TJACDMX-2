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
        Schema::create('punto_convocatoria', function (Blueprint $table) {
            $table->id();
            $table->foreignId('convocatoria_id')->constrained('convocatorias','id')->onDelete('cascade');
            $table->integer('numero_orden');
            $table->integer('numero_orden_dia');
            $table->text('descripcion');
            $table->foreignId('materia_id')->constrained('materias','id')->onDelete('cascade');
            $table->foreignId('tipo_punto_id')->constrained('tipo_punto','id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('punto_convocatoria');
    }
};
