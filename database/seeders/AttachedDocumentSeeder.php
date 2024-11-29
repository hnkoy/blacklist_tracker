<?php

namespace Database\Seeders;

use App\Models\AttachedDocument;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AttachedDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        AttachedDocument::factory(100)->create();
    }
}
