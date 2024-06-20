<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nombres = [
            'Administrador', //1
            'Contact',   //2
        ];
        foreach ($nombres as $nombre) {
            Role::create(['name' => $nombre]);
        }
    }
}
