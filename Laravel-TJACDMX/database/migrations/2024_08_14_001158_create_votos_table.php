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
        Schema::create('votos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('punto_convocatoria_id')->constrained('punto_convocatoria','id')->onDelete('cascade');
            $table->foreignId('integrante_id')->constrained('integrante','id')->onDelete('cascade');
            $table->foreignId('tipo_voto_id')->constrained('tipo_voto','id')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votos');
    }
};
