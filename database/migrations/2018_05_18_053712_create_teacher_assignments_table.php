<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeacherAssignmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teacher_assignments', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->integer('created_by_user_id');
            $table->integer('course_id');
            $table->integer('schoolyear_id');
            $table->text('title');
            $table->text('data');
            $table->dateTime('deadline');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacher_assignments');
    }
}
