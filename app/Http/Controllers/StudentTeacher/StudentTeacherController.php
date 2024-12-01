<?php

namespace App\Http\Controllers\StudentTeacher;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentTeacher\ImportStudentTeacherRequest;
use App\Http\Requests\StudentTeacher\StoreStudentTeacherRequest;
use App\Imports\StudentTeacherImport;
use App\Models\University;
use App\Services\studentTeacher\TeacherService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class StudentTeacherController extends Controller
{
    public function __construct(private TeacherService $teacherService) {}
    public function index(){
        $data_list = $this->teacherService->toGetAll();
        return Inertia::render('StudentTeacher/Page',['student_teacher_data'=>$data_list]);

    }

    public function create() {
        $universities=University::all();

        return Inertia::render( 'StudentTeacher/form/CreatePage',['universities'=>$universities] );
    }

    public function store( StoreStudentTeacherRequest $request ) {
        try {
            $input = $request->validated();
            // dd($input);
            $this->teacherService->toAdd( $input );
            return redirect()->route( 'studentTeachers' )->with( 'success', 'student teacher created successfully.' );

        } catch ( \Throwable $th ) {
            Log::error('Error creating school: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ]);

            return redirect()->route('studentTeachers.create')->with('error', 'Failed to create student Teacher. Please try again later.');

        }

    }


    public function edit($id) {
        $studentTeacher = $this->teacherService->toGetById( $id );
        $universities=University::all();

        return Inertia::render( 'StudentTeacher/form/EditPage',['universities'=>$universities,
        'studentTeacher'=>$studentTeacher] );
    }

    public function show($id) {
        $studentTeacher = $this->teacherService->toGetById( $id );

        return Inertia::render( 'StudentTeacher/show/Page',[
        'studentTeacher'=>$studentTeacher] );
    }


    public function update( StoreStudentTeacherRequest $request, $id ) {

        try {
            $inputs = $request->validated();
            // dd($inputs);
            $course = $this->teacherService->toUpdate( $inputs, $id );

            return redirect()->route( 'studentTeachers' )->with( 'success', 'Item updated successfully.' );

        } catch ( \Throwable $th ) {
            Log::error( 'Error updating student teacher: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ] );

            return redirect()->route( 'studentTeachers' )->with( 'error', 'Failed to update . Please try again later.' );

        }

    }

    public function destroy($id)
    {

        try {
            $this->teacherService->toDelete($id);

            return redirect()->back()->with('success', 'item deleted successfully');

        } catch ( \Throwable $th ) {
            Log::error('Error creating school: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ]);

            return redirect()->route('studentTeachers')->with('error', 'Failed to create school. Please try again later.');

        }



    }

    public function import() {


        return Inertia::render( 'StudentTeacher/form/ImportPage');
    }

    public function importPost(ImportStudentTeacherRequest $request) {

            Excel::import(new StudentTeacherImport(), $request->file('file'));
            return redirect()->route( 'studentTeachers' )->with( 'success', 'file imported successfully.' );



    }
}
