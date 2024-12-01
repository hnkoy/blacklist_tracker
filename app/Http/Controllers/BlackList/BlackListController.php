<?php

namespace App\Http\Controllers\BlackList;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlackList\BlackListStoreRequest;
use App\Models\CommonReason;
use App\Models\School;
use App\Models\StudentTeacher;
use App\Services\blackList\BlackListService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class BlackListController extends Controller
{

    public function __construct(private BlackListService $black_list_service) {}
    public function index(){
        $data_list = $this->black_list_service->toGetAll();

        return Inertia::render('Dashboard',['black_list_data' => $data_list]);
    }

    public function create() {
        $schools=School::all();
        $studentTeachers=StudentTeacher::all();
        $reasons=CommonReason::all();

        return Inertia::render( 'BlackList/form/CreatePage',['schools'=>$schools,'studentTeachers'=>$studentTeachers,'reasons'=>$reasons] );
    }


    public function store( BlackListStoreRequest $request ) {

        try {
            $input = $request->all();
            $input['reference_number']=uniqid();
            $blackList=$this->black_list_service->toAdd( $input );

            // Attach reasons to the blackList record
            $blackList->blackListReasons()->createMany($request->reasonContent);



            return redirect()->route( 'blackList.attach',$blackList->id )->with( 'success', 'blackList created, add proof document to complete.' );

        } catch ( \Throwable $th ) {
            Log::error( 'Error creating blackList record: ' . $th->getMessage(), [
                'stack' => $th->getTraceAsString()
            ] );

            return redirect()->route( 'blackList.create' )->with( 'error', 'Failed to create blackList record. Please try again later.' );

        }

    }

    public function attach( $id ) {
        $blackList=$this->black_list_service->toGetById( $id );
        return Inertia::render( 'BlackList/form/AttachedDocumentPage',['blackList'=>$blackList] );
    }

    public function storeDocument(Request $request) {
        $input = $request->all();
    
        $file = $input['file_path']->getClientOriginalName();
        $filePathWithPublic = $input['file_path']->storeAs('public/images', $file);
        return $filePathWithPublic;
        // Store the file
        // if ($request->hasFile('file_path')) {
        //     $path = $request->file('file_path')->store('uploads', 'public');

        //     // Return success response
        //     return back()->with('success', 'File uploaded successfully');
        // }

    }
}
