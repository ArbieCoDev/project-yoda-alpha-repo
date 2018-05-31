<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;

class FilesController extends Controller
{
    public function index(){
        echo 'files';
    }

    public function upload(Request $request){

        $file = $request->file;
        $file_name = time().$file->getClientOriginalName();
        $destinationPath = 'uploads';
        $file->move($destinationPath,time().$file_name);

        $files = new Files;
        $files->created_at = time();
        $files->updated_at = time();
        $files->user_id = 1;
        $files->file_name = $file_name;
        $files->file_type = $file->getClientOriginalExtension();

        $files->save();
        
    }

    public function getFiles(){
        //get files
    }
}
