<?php

namespace Database\Factories;

use App\Models\SchoolBlackList;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AttachedDocument>
 */
class AttachedDocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'school_black_list_id'=>SchoolBlackList::all()->random()->id,
           'document_type' => fake()->randomElement(['pdf_file','video','audio','image']),
           'file_path' => fake()->randomElement([fake()->filePath,fake()->imageUrl()]),
        ];
    }
}
