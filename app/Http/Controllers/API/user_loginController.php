<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class user_loginController extends Controller
{
    public function user_login(Request $request){
        $credentials = $request->only("email","password");
        if(Auth::attempt($credentials)){
            $useremail=$request["email"];
      
            $userrole=User::where("email",$useremail)->first();
            
            return response()->json(["role"=>$userrole["role"]]);
        }
}
}