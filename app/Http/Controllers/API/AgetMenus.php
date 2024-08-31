<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\menu;
use App\Http\Controllers\API\isLogged;
use App\Http\Controllers\API\Session_controler;
use Illuminate\Support\Facades\DB;



class AgetMenus extends Controller
{
   public function get_admin_menus(Request $request){
    $is_logged = new isLogged ;
    $state = $is_logged->checkLogin($request);
    if($state){
        $menusData = menu::all()->toarray();
        return response()->json(
            $menusData,201
        );
    }else{
        return response()->json([
            "message" => "user not loged in"
        ],401);
    }

   } 
   public function save_menu(Request $request){
    $is_logged = new isLogged;
    $state = $is_logged->checkLogin($request);
    if($state){
        $data = $request->json()->all();
        $new_menu =menu::where("menu_name",$data["old_name"])->first();
        if($new_menu){
           $new_menu -> menu_name = $data["new_name"];
        $new_menu -> menu_type = $data["type"];
        $new_menu->save();
        return true; 
        }
        else{
            return response()->json($new_menu);
        }
        
    }
   }
   public function delete_menu(Request $request){
    $is_logged = new isLogged;
    $state = $is_logged->checkLogin($request);
    if($state){
        $data = $request->json()->all();
       $del_menu = menu::where("menu_name", $data["name"]);
       if($del_menu){
        $del_menu->delete();
        return true;
       }
        
    }
   }
   public function save_menu_name(Request $request){
    $is_logged = new isLogged;
    $state = $is_logged -> checkLogin($request);
    
    if($state){
        $menu_name = $request->json()->all();
        $data=[
            "key"=>"menu_name",
            "data"=>$menu_name
        ];
        $sessionCon = new Session_controler;
        $state = $sessionCon->session_selector("put",$data);
        if($state){
            return true;
        }
       
    }
   }
   public function add_menu(Request $request){
     $is_logged = new isLogged;
    $state = $is_logged -> checkLogin($request);
    if($state){
      $data = $request ->json()->all();
     $new_menu = new menu;
     $new_menu->menu_name = $data["menu_name"];
     $new_menu ->menu_type = $data["menu_type"];
        $new_menu->save();
        $menu_name = $request["menu_name"];
            DB::statement("CREATE TABLE $menu_name (
        dish_id INT(20) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        dish_name VARCHAR(200) UNIQUE NOT NULL,
        dish_price FLOAT NOT NULL,
        dish_description VARCHAR(200) NULL
        3
        
    )");
        return response()->json(true,201);
    }
   }
}