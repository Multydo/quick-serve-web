<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
class user_loginController extends Controller
{
    public function user_login(Request $request){
        $credentials = $request->only("email","password");
        if(Auth::attempt($credentials)){
            return response()->json("authentication successful");
        }
}
}