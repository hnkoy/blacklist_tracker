<?php

namespace Database\Seeders;

use App\Models\SchoolBlackList;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SchoolBlackListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SchoolBlackList::factory(100)->create();
    }
}
