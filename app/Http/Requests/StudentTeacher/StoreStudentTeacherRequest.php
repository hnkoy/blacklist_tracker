<?php

namespace App\Http\Requests\StudentTeacher;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentTeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'firstname' => ['required', 'string','min:2', 'max:255'],
            'lastname' => ['required', 'string','min:2', 'max:255'],
            'gender' => ['required', 'string'],
            'province' => ['required', 'string','min:2', 'max:255'],
            'city' => ['required', 'string','min:2', 'max:255'],
            'street_address' => ['required', 'string','min:5', 'max:255'],
            'university_id' => ['required','exists:universities,id'],
        ];
    }
}
