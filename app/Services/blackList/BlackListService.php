<?php

namespace App\Services\blackList;

use App\Models\SchoolBlackList;
use Illuminate\Database\Eloquent\Model;

class BlackListService {

    /**
    *
    * @param array $inputs
    * @return Model
    */

    public function toAdd( array $inputs ): Model {
        $blacklist = SchoolBlackList::create( $inputs );
        return $blacklist;
    }

    /**
    *
    * @param mixed $n
    * @return \Illuminate\Support\Collection
    */

    public function toGetAll( $n = 100 ) {
        $blacklist = SchoolBlackList::with( 'school' )
        ->with( 'studentTeacher' )
        ->with( 'blackListedReasons' )
        ->with( 'AttachedDocuments' )
        ->withCount( 'blackListedReasons' )
        ->withCount( 'AttachedDocuments' )
        ->paginate( $n );

        return $blacklist;
    }

    public function toGetById( $id ): Model |null {
        $blacklist = SchoolBlackList::with( 'school' )
        ->with( 'blackListedReasons' )
        ->with( 'AttachedDocuments' )
        ->findOrFail( $id );
        return $blacklist;
    }

    public function toGetBySchool( $school_id ): Model |null {
        $blacklist = SchoolBlackList::where( 'school_id', $school_id )
        ->with( 'school' )
        ->with( 'blackListedReasons' )
        ->with( 'AttachedDocuments' )
        ->withCount( 'blackListedReasons' )
        ->withCount( 'AttachedDocuments' )
        ->first();
        return $blacklist;
    }

    public function toGetByTeacher( $student_teacher_id ) {
        $blacklist = SchoolBlackList::where( 'student_teacher_id', $student_teacher_id )
        ->with( 'school' )
        ->with( 'blackListedReasons' )
        ->with( 'AttachedDocuments' )
        ->withCount( 'blackListedReasons' )
        ->withCount( 'AttachedDocuments' )
        ->get();
        return $blacklist;
    }

    /**
    *
    * @param mixed $id
    * @return Model
    */

    public function toDelete( $id ): Model {
        $blacklist = $this->toGetById( $id );
        $blacklist->delete();

        return $blacklist;
    }

}
