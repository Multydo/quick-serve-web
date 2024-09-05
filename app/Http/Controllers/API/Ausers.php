<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class Ausers extends Controller
{
    public function getusers(Request $request){
        $is_logged = new isLogged ;
        $state = $is_logged->checkLogin($request);
        if($state){
            $users = User::select('user_id', 'user_fname', 'user_lname', 'role')->get();
            $userid = $users->pluck('user_id')->toArray();
            $userfname = $users->pluck('user_fname')->toArray();
            $userlname = $users->pluck('user_lname')->toArray();
            $role = $users->pluck('role')->toArray();



            return response()->json([
                "userid"=>$userid,
                "userfname"=>$userfname,
                "userlname"=>$userlname,
                "role"=>$role

            ],200);
        }else{
            return response()->json([
                "message"=>"user not autherized"
            ],401);
        }


    }
}