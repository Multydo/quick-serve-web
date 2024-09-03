<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\personal_access_token;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\API\Session_controler;
use App\Http\Controllers\API\getUserId;
use App\Models\User;

class isLogged extends Controller
{
    public function checkLogin(Request $request){

        
        // Retrieve the token from the session
        $data = [
            "key" => "user_token",
            "data" => ""
        ];
        $sessionCon = new Session_controler;

        $token = $sessionCon->session_selector("get", $data);

        $get_user_id = new getUserId;
        $user_id = $get_user_id->getId($token);
        if($user_id){
            $user_role = User::where("id",$user_id)->value("role");
           
            if($user_role == "admin"){
              return response()->json(["state" => true]);
            }
            else{
            return response()->json(["state" => false]);
        }
        }else{
            return response()->json(["state" => false]);
        }
        
}
}