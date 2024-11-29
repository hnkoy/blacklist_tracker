<?php

namespace App\Services\studentTeacher;

use App\Models\StudentTeacher;
use Illuminate\Database\Eloquent\Model;


class TeacherService {

    /**
    *
    * @param array $inputs
    * @return Model
    */

    public function toAdd( array $inputs ): Model {
        $teacher = StudentTeacher::create( $inputs );
        return $teacher;
    }

    public function toGetById( $id ): Model |null {
        $teacher = StudentTeacher::
        with('schoolBlackListed')
        ->withCount('schoolBlackListed')
        ->findOrFail( $id );
        return $teacher;
    }

    public function toGetByName( $name ){
        $teacher = StudentTeacher::where('name', $name)
        ->with('schoolBlackListed')
        ->withCount('schoolBlackListed')
        ->get();
        return $teacher;
    }

    /**
    *
    * @param array $inputs
    * @param mixed $id
    * @return Model
    */

    public function toUpdate( array $inputs, $id ): Model {
        $teacher = $this->toGetById( $id );

        foreach ( $inputs as $property => $value )
        $teacher->$property = $value;
        $teacher->update();

        return $teacher;
    }

    /**
    *
    * @param mixed $id
    * @return Model
    */

    public function toDelete( $id ): Model {
        $teacher = $this->toGetById( $id );
        $teacher->delete();

        return $teacher;
    }

}