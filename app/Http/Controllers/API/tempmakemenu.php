<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\isLogged;
use App\Models\menu;

class tempmakemenu extends Controller
{
    public function make_menu(Request $request){
        $is_logged = new isLogged;
        $state = $is_logged->checkLogin($request);
        if($state){
            $addmenu = new menu;
            $addmenu->menu_name = $request["menu_name"];
            $addmenu -> menu_type = $request["menu_type"];
            $addmenu->save();
            
        }
    }
}