<?php

namespace Database\Seeders;

use App\Models\CommonReason;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommonReasonSeeder extends Seeder {
    /**
    * Run the database seeds.
    */

    public function run(): void {
        CommonReason::create( [
            'title' => 'Unethical Behavior',
        ] );
        CommonReason::create( [
            'title' => 'Misconduct with Students',
        ] );
        CommonReason::create( [
            'title' => 'Criminal Activities',
        ] );
        CommonReason::create( [
            'title' => 'Professional Negligence',
        ] );
        CommonReason::create( [
            'title' => 'Breach of School Policies',
        ] );
        CommonReason::create( [
            'title' => 'Substance Abuse',
        ] );
        CommonReason::create( [
            'title' => 'Defiance of Authority',
        ] );
        CommonReason::create( [
            'title' => 'Endangering Student Safety',
        ] );
        CommonReason::create( [
            'title' => 'Inappropriate Use of Technology',
        ] );
        CommonReason::create( [
            'title' => 'Poor Role Modeling',
        ] );

    }
}
