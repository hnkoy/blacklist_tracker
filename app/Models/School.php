<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolFactory> */
    use HasFactory;

    protected $fillable = [
		'name',
        'location',
	];

    public function blackList()
	{
		return $this->hasMany(SchoolBlackList::class);
	}

    public function blackListedTeachers()
	{
		return $this->belongsToMany(StudentTeacher::class, 'school_black_lists')
					->withTimestamps();
	}
}
