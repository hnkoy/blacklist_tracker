<?php

namespace App\Imports;

use App\Models\StudentTeacher;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithChunkReading;

class StudentTeacherImport implements ToModel, WithHeadingRow, SkipsEmptyRows, WithChunkReading, WithValidation{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        return new StudentTeacher([
            'firstname'=>$row['firstname'],
            'lastname'=>$row['lastname'],
            'gender'=>$row['gender'],
            'province'=>$row['province'],
            'city'=>$row['city'],
            'street_address'=>$row['street_address'],
            'university_id'=>$row['university_code']
        ]);
    }

    public function rules(): array
    {
        return [
            'firstname' => ['required', 'string','min:2', 'max:255'],
            'lastname' => ['required', 'string','min:2', 'max:255'],
            'gender' => ['required', 'string'],
            'province' => ['required', 'string','min:2', 'max:255'],
            'city' => ['required', 'string','min:2', 'max:255'],
            'street_address' => ['required', 'string','min:5', 'max:255'],
            'university_code' => ['required','exists:universities,id'],
        ];
    }

    public function chunkSize(): int
    {
        return 5000;
    }
}
