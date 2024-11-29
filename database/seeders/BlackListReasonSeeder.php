<?php

namespace Database\Seeders;

use App\Models\BlackListReason;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlackListReasonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        BlackListReason::factory(100)->create();
    }
}
