<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlackListReason extends Model
{
    /** @use HasFactory<\Database\Factories\BlackListReasonFactory> */
    use HasFactory;
    protected $fillable = [
		'school_black_list_id',
		'common_reason_id',
        'comment'
	];

    public function commonReason()
	{
		return $this->belongsTo(CommonReason::class);
	}

    public function schoolBlackList()
	{
		return $this->belongsTo(SchoolBlackList::class);
	}
}
