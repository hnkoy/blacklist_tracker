<?php

namespace App\Http\Controllers\BlackList;

use App\Http\Controllers\Controller;
use App\Http\Requests\BlackList\BlackListStoreRequest;
use App\Models\AttachedDocument;
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
        $filePath='';
        if($request->document_type=='IMAGE') {
            $request->validate(['file_path' => 'required|file|mimes:jpg,jpeg,png|max:5120']);
            $url = $request->file('file_path')->store('uploads', 'public');
            $filePath=env('APP_URL').'/storage/'.$url;
        }

        if($request->document_type=='PDF') {
            $request->validate(['file_path' => 'required|file|mimes:pdf|max:5120']);
            $url = $request->file('file_path')->store('uploads', 'public');
            $filePath=env('APP_URL').'/storage/'.$url;
        }
        if($request->document_type=='AUDIO') {
            $request->validate(['file_path' => 'required|file|mimes:mp3|max:5120']);
            $url = $request->file('file_path')->store('uploads', 'public');
            $filePath=env('APP_URL').'/storage/'.$url;
        }
        if($request->document_type=='VIDEO') {
            $filePath = $request->file_path;
        }



        AttachedDocument::create([
            'school_black_list_id' => $request->school_black_list_id,
            'document_type' => $request->document_type,
            'file_path' => $filePath,
        ]);

        return redirect()->back()->with( 'success', 'Proof document added successfully.' );
    }
}
