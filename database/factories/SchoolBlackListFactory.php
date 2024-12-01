<?php

namespace Database\Factories;

use App\Models\School;
use App\Models\StudentTeacher;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SchoolBlackList>
 */
class SchoolBlackListFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'school_id'=>School::all()->random()->id,
           'student_teacher_id'=>StudentTeacher::all()->random()->id,
           'reference_number'=>uniqid()
        ];
    }
}
