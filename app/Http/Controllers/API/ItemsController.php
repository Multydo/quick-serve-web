<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\isLogged;
use App\Http\Controllers\API\Session_controler;
use Illuminate\Support\Facades\DB;
use Throwable;

class ItemsController extends Controller
{
    public function getItems(Request $request){
        $is_logged = new isLogged;
        $state = $is_logged->checkLogin($request);
        if($state){
            $data =[
                "key"=>"menu_name",
                "data"=>""
            ];
            $sessionCon = new Session_controler;
            $menu_name = $sessionCon->session_selector("get",$data);
            
            $items = DB::table($menu_name[0])
            ->get()
            ;
            return response()->json($items);
        }
    }
    public function addItem(Request $request){
        $is_logged=new isLogged;
        $state = $is_logged->checkLogin($request);
        if($state){
            $itemData = $request->json()->all();
            $data =[
                "key"=>"menu_name",
                "data"=>""
            ];
             $sessionCon = new Session_controler;
            $menu_name = $sessionCon->session_selector("get",$data);
        
           try{

                $table_name = $menu_name[0];
            
                DB::table($table_name)->insert([
                    'dish_name' => $itemData["item_name"],
                    'dish_price' =>$itemData["item_price"],
                    'dish_description' =>$itemData["item_desc"],
                ]);
               return response()->json(true);
            }catch(Throwable $e){
                return response()->json(false);
            }
            
            
        }
    }

    public function delete_item(Request $request){
         $is_logged=new isLogged;
        $state = $is_logged->checkLogin($request);
        if($state){
            $itemData = $request->json()->all();
            $data =[
                "key"=>"menu_name",
                "data"=>""
            ];
             $sessionCon = new Session_controler;
            $menu_name = $sessionCon->session_selector("get",$data);
        
           try{

                $table_name = $menu_name[0];
            
               DB::table($table_name)
                    ->where('dish_name', $itemData)
                    ->delete();
               return response()->json(true);
            }catch(Throwable $e){
                return response()->json(false);
            }
            
            
        }
    }

    public function edit_item(Request $request){
        $is_logged=new isLogged;
        $state = $is_logged->checkLogin($request);
        if($state){
             $itemData = $request->json()->all();
            $data =[
                "key"=>"menu_name",
                "data"=>""
            ];
             $sessionCon = new Session_controler;
            $menu_name = $sessionCon->session_selector("get",$data);
        
           try{

                $table_name = $menu_name[0];

                $oldName = $itemData["old_name"];
                $itemName = $itemData["item_name"];
                $itemPrice = $itemData["item_price"];
                $itemDesc = $itemData["item_desc"];
            
               DB::table($table_name)
                ->where('dish_name', $oldName)
                ->update([
                    'dish_name' => $itemName,
                    'dish_price' => $itemPrice,
                    'dish_description' => $itemDesc,
                ]);
               return response()->json(true);
            }catch(Throwable $e){
                return response()->json(false);
            }
        }
    }
}