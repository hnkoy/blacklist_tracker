<?php

namespace Database\Factories;

use App\Models\University;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudentTeacher>
 */
class StudentTeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'gender' => fake()->rand(['M', 'F']),
            'province' => fake()->name(),
            'city' => fake()->city(),
            'street_address' => fake()->streetAddress(),
            'university_id'=>University::all()->random()->id,
        ];
    }
}
