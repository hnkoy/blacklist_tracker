<?php

use App\Http\Controllers\BlackList\BlackListController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\School\SchoolController;
use App\Http\Controllers\StudentTeacher\StudentTeacherController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

    return redirect()->route('register');
});


Route::get('/dashboard', [BlackListController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // routes school management
    Route::get('/schools', [SchoolController::class, 'index'])->name('schools');
    Route::get('/schools/create', [SchoolController::class, 'create'])->name('school.create');
    Route::post('/schools/store', [SchoolController::class, 'store'])->name('school.store');
    Route::delete('/schools/destroy/{id}', [SchoolController::class, 'destroy'])->name('school.destroy');
    Route::get('/schools/edit/{id}', [SchoolController::class, 'edit'])->name('school.edit');
    Route::put('/schools/update/{id}', [SchoolController::class, 'update'])->name('school.update');
    Route::get('/schools/{id}', [SchoolController::class, 'show'])->name('school.show');
    Route::post('/schools/search', [SchoolController::class, 'SearchByName'])->name('school.search');

    // routes student teacher  management
    Route::get('/studentTeachers', [StudentTeacherController::class, 'index'])->name('studentTeachers');
    Route::get('/studentTeachers/create', [StudentTeacherController::class, 'create'])->name('studentTeachers.create');
    Route::post('/studentTeachers/store', [StudentTeacherController::class, 'store'])->name('studentTeachers.store');
    Route::delete('/studentTeachers/destroy/{id}', [StudentTeacherController::class, 'destroy'])->name('studentTeachers.destroy');
    Route::get('/studentTeachers/edit/{id}', [StudentTeacherController::class, 'edit'])->name('studentTeachers.edit');
    Route::put('/studentTeachers/update/{id}', [StudentTeacherController::class, 'update'])->name('studentTeachers.update');
    Route::get('/studentTeachers/import', [StudentTeacherController::class, 'import'])->name('studentTeachers.import');
    Route::post('/studentTeachers/importPost', [StudentTeacherController::class, 'importPost'])->name('studentTeachers.importPost');

    Route::get('/studentTeachers/show/{id}', [StudentTeacherController::class, 'show'])->name('studentTeachers.show');
    Route::post('/studentTeachers/search', [StudentTeacherController::class, 'SearchByName'])->name('studentTeacher.search');

    // blakList routes
    Route::get('/blackList/create', [BlackListController::class, 'create'])->name('blackList.create');
    Route::post('/blackList/store', [BlackListController::class, 'store'])->name('blackList.store');
    Route::get('/blackList/attach/{reference}', [BlackListController::class, 'attach'])->name('blackList.attach');
    Route::post('/blackList/storeDocument', [BlackListController::class, 'storeDocument'])->name('blackList.storeDocument');

});

require __DIR__.'/auth.php';
