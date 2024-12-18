<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommonReason extends Model
{
    /** @use HasFactory<\Database\Factories\CommonReasonFactory> */
    use HasFactory;

    protected $fillable = [
		'title',
	];
}
