<?php

namespace App\Services\school;

use App\Models\School;
use Illuminate\Database\Eloquent\Model;

class TeacherService {

    /**
    *
    * @param array $inputs
    * @return Model
    */

    public function toAdd( array $inputs ): Model {
        $school = School::create( $inputs );
        return $school;
    }

    public function toGetById( $id ): Model |null {
        $school = School::
        with( 'blackListedTeachers' )
        ->findOrFail( $id );
        return $school;
    }

    public function toGetByName( $name ){
        $school = School::where( 'name', $name )
        ->with( 'blackListedTeachers' )
        ->withCount( 'blackListedTeachers' )
        ->get();
        return $school;
    }

    /**
    *
    * @param array $inputs
    * @param mixed $id
    * @return Model
    */

    public function toUpdate( array $inputs, $id ): Model {
        $school = $this->toGetById( $id );

        foreach ( $inputs as $property => $value )
        $school->$property = $value;
        $school->update();

        return $school;
    }

    /**
    *
    * @param mixed $id
    * @return Model
    */

    public function toDelete( $id ): Model {
        $school = $this->toGetById( $id );
        $school->delete();

        return $school;
    }

}
