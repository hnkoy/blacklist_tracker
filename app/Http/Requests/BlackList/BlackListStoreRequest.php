<?php

namespace App\Http\Requests\BlackList;

use Illuminate\Foundation\Http\FormRequest;

class BlackListStoreRequest extends FormRequest {
    /**
    * Determine if the user is authorized to make this request.
    */

    public function authorize(): bool {
        return true;
    }

    /**
    * Get the validation rules that apply to the request.
    *
    * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
    */

    public function rules(): array {
        return [
            'school_id' => [ 'required', 'exists:schools,id' ],
            'student_teacher_id' => [ 'required', 'exists:student_teachers,id' ],
            'reasonContent' => [ 'required', 'array', 'min:1' ], // Ensure it's an array with at least one element

        ];
    }
}
