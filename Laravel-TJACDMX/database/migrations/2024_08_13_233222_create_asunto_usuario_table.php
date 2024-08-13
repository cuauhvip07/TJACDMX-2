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
        Schema::create('asunto_usuario', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('users','id')->onDelete('cascade');
            $table->foreignId('punto_convocatoria_id')->constrained('punto_convocatoria','id')->onDelete('cascade');
            $table->string('archivo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asunto_usuario');
    }
};
