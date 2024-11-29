<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentTeacher extends Model
{
    /** @use HasFactory<\Database\Factories\StudentTeacherFactory> */
    use HasFactory;

    protected $fillable = [
		'firstname',
        'lastname',
        'gender',
        'province',
        'city',
        'street_address',
        'university_id'
	];

    public function university()
	{
        return $this->belongsTo(University::class);

	}


    public function schoolBlackListed()
	{
		return $this->belongsToMany(School::class, 'school_black_lists')
					->withTimestamps();
	}
}
