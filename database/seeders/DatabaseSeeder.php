<?php

namespace Database\Seeders;

use App\Models\StudentTeacher;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            SchoolSeeder::class,
            UniversitySeeder::class,
            StudentTeacher::class,
            SchoolBlackListSeeder::class,
            CommonReasonSeeder::class,
            BlackListReasonSeeder::class,
            AttachedDocumentSeeder::class,


        ]);
        User::factory()->create(
            [
            'name' => 'Henock',
            'email' => 'henocknkoy9@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('Henock@2002'),]
        );
    }
}
