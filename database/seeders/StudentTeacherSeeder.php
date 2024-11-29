<?php

namespace Database\Seeders;

use App\Models\StudentTeacher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentTeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        StudentTeacher::factory(50)->create();
    }
}
