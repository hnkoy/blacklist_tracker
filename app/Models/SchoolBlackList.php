<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolBlackList extends Model
{
    /** @use HasFactory<\Database\Factories\SchoolBlackListFactory> */
    use HasFactory;

    protected $fillable = [
		'school_id',
        'student_teacher_id',
	];

    public function school()
	{
        return $this->belongsTo(School::class);

	}

    public function Teacher()
	{
        return $this->belongsTo(StudentTeacher::class);

	}

    public function blackListedReasons()
	{
		return $this->belongsToMany(CommonReason::class, 'black_list_reasons')
                    ->withPivot('comment')
					->withTimestamps();
	}

    public function AttachedDocuments()
	{
		return $this->hasMany(AttachedDocument::class);
	}
}
