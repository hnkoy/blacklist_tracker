<?php

namespace App\Http\Controllers\School;

use App\Http\Controllers\Controller;
use App\Http\Requests\School\StoreSchoolRequest;
use App\Models\School;
use App\Services\school\SchoolService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use PhpParser\Node\Stmt\TryCatch;

class SchoolController extends Controller {
    //

    public function __construct( private SchoolService $school_service ) {
    }

    public function index() {
        $data_list = $this->school_service->toGetAll();
        return Inertia::render( 'School/Page', [ 'school_data'=>$data_list ] );
    }

    public function create() {

        return Inertia::render( 'School/form/CreatePage' );
    }

    public function store( StoreSchoolRequest $request ) {
        try {
            $input = $request->validated();
            // dd( $input );
            $this->school_service->toAdd( $input );
            return redirect()->route( 'schools' )->with( 'success', 'School created successfully.' );

        } catch ( \Throwable $th ) {
            Log::error( 'Error creating school: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ] );

            return redirect()->route( 'school.create' )->with( 'error', 'Failed to create school. Please try again later.' );

        }

    }

    public function edit( $id ) {
        $school = $this->school_service->toGetById( $id );
        //  dd( $school );
        return Inertia::render( 'School/form/EditPage', [ 'school'=>$school ] );
    }

    public function show( $id ) {
        $school = $this->school_service->toGetById( $id );
        //  dd( $school );
        return Inertia::render( 'School/show/Page', [ 'school'=>$school ] );
    }

    public function update( StoreSchoolRequest $request, $id ) {

        try {
            $inputs = $request->validated();
            // dd($inputs);
            $course = $this->school_service->toUpdate( $inputs, $id );

            return redirect()->route( 'schools' )->with( 'success', 'School updated successfully.' );

        } catch ( \Throwable $th ) {
            Log::error( 'Error updating school: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ] );

            return redirect()->route( 'schools' )->with( 'error', 'Failed to update school. Please try again later.' );

        }

    }

    public function destroy( $id ) {

        try {
            $this->school_service->toDelete( $id );

            return redirect()->back()->with( 'success', 'item deleted successfully' );

        } catch ( \Throwable $th ) {
            Log::error( 'Error deleting school: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ] );

            return redirect()->route( 'schools' )->with( 'error', 'Failed to delete school. Please try again later.' );

        }

    }
}
