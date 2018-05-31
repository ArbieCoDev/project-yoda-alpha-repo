<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSignOnPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('yoda_sign_on_pages', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->text('url');
            $table->text('sso_data');
            $table->integer('is_sso');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sign_on_pages');
    }
}
