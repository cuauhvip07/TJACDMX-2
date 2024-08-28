<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       $this->call(TipoConvocatoriaSeeder::class);
       $this->call(TipoPuntoSeeder::class);
       $this->call(EstatusSeeder::class);
       $this->call(MateriasSeeder::class);
       $this->call(TipoVotoSeeder::class);
       $this->call(TipoIntegranteSeeder::class);
    }
}
