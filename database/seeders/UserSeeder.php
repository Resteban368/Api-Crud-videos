<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create(
            [
                'name' => 'Admin',
                'lastname' => 'Yandy',
                'role_id' => '1',
                'email' => 'admin@demo.com',
                'email_verified_at' => now(),
                'password' => Hash::make('demo'),
                'remember_token' => bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2)),
                'is_active' => 1,
                'phone' => '555555555'
            ]
        );

        $cliente = User::create(
            [
                'name' => 'Contact',
                'lastname' => 'Esteban',
                'role_id' => '2',
                'email' => 'cliente@demo.com',
                'email_verified_at' => now(),
                'password' => Hash::make('demo'),
                'remember_token' => bin2hex(openssl_random_pseudo_bytes((6 - (6 % 2)) / 2)),
                'is_active' => 1,
                'phone' => '666666666'
            ]
        );
    }
}
