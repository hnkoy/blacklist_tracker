<?php

namespace App\Http\Controllers\BlackList;

use App\Http\Controllers\Controller;
use App\Services\blackList\BlackListService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlackListController extends Controller
{

    public function __construct(private BlackListService $black_list_service) {}
    public function index(){
        $data_list = $this->black_list_service->toGetAll();

        return Inertia::render('Dashboard',['black_list_data' => $data_list]);
    }
}
