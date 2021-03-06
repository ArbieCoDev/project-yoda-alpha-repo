<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('users', 'UsersController@index');
// Route::post('users/login', 'Auth\LoginController@apiLogin');

Route::group(['middleware' => ['jwt.auth','api-header']], function () {
  
    // all routes to protected resources are registered here  
    Route::get('users/list', function(){
        $users = App\User::all();
        
        $response = ['success'=>true, 'data'=>$users];
        return response()->json($response, 201);
    });
});
Route::group(['middleware' => 'api-header'], function () {
  
    // The registration and login requests doesn't come with tokens 
    // as users at that point have not been authenticated yet
    // Therefore the jwtMiddleware will be exclusive of them
    Route::post('users/login', 'UsersController@login');
    Route::post('users/register', 'UsersController@register');
    Route::post('users/getDetails', 'UsersController@get_user_details');

    Route::get('files/index','FilesController@index');
    Route::post('files/upload','FilesController@upload');

    Route::get('courses/index','CoursesController@index');
    Route::get('assignments/index','AssignmentsController@index');
    Route::get('quizzes/index','QuizzesController@index');
    Route::get('projects/index','ProjectsController@index');
    Route::get('grades/index','GradesController@index');
    Route::get('messages/index','MessagesController@index');
    Route::get('profile/index','ProfileController@index');
});