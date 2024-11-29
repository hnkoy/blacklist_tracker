<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttachedDocument extends Model
{
    /** @use HasFactory<\Database\Factories\AttachedDocumentFactory> */
    use HasFactory;

    protected $fillable = [
		'school_black_list_id',
		'document_type',
        'file_path'
	];


}
