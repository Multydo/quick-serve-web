<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use PhpParser\NodeVisitor\FirstFindingVisitor;
use App\Models\User;
use App\Models\personal_access_token;
use Illuminate\Support\Carbon;
use App\Http\Controllers\API\Session_controler;

class adminLogin extends Controller
{
    public function adminWebLogin(Request $request){
        //$request = $request1->json()->all();
       
        
        $credentials = $request->only("email" , "password");
        
        if(Auth::attempt($credentials)){
            $user_email = $request["email"];

            $user_data = User::where("email",$user_email)->first();
            $user_role = $user_data["role"];
            
            $user_username = $user_data["id"] . "_". $user_data["user_fname"];
            if($user_role == "admin"){
                $user = Auth::user();
                $token = $user->createToken($user_username)->plainTextToken;
                $tokenStatus = personal_access_token::find( $token);

                $tokenStatus->last_used_at = Carbon::now();
                $status = $tokenStatus->save();
                if($status){
                    $sessionCon = new Session_controler ;
                    $data=[
                        "key"=> "user_token",
                        "data"=>$token
                    ];
                    $sessionCon->session_selector("put",$data);
                     return response()->json([
                    "message"=>"accepted"
                ],201);
                    
                }else{
                    return response()->json([
                    "message"=>"error 0?"
                ],401);
                     
                }
            }else{
                return response()->json([
                    "message"=>"error 1?"
                ],401);
            }
        }else{
            return response()->json([
                "message"=>"error 2?",
                "data"=>$request->all()
            ],401);
        }           
    }
}