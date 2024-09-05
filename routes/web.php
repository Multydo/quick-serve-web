<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\adminLogin;
use App\Http\Controllers\API\isLogged;
use App\Http\Controllers\API\AgetMenus;
use App\Http\Controllers\API\ItemsController;
use App\Http\Controllers\API\Ausers;



// #############################TEMP LINKS #####################################
use App\Http\Controllers\API\login;
use App\Http\Controllers\API\tempSignin;
use App\Http\Controllers\API\tempmakemenu;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view("index");
});
Route::get("/main",function(){
    return view("main");
})->name("name");

Route::post('/Alogin', [adminLogin::class,"adminWebLogin"]);
Route::post("/singin",[tempSignin::class,"singin"]);
Route::post("/isLoged",[isLogged::class,"checkLogin"]);
Route::post('/save_menus', [AgetMenus::class, 'save_menu']);
Route::post("/delete_menu",[AgetMenus::class,"delete_menu"]);

Route::post("/add_new_menu",[AgetMenus::class,"add_menu"]);
Route::get("/admin_menus",function(){
    return view("admin_menus");
});

Route::post("/show_items/edit_item",[ItemsController::class,"edit_item"]);
Route::post("/show_items/delete_items",[ItemsController::class,"delete_item"]);
Route::post("/show_items",[AgetMenus::class,"save_menu_name"]);
Route::post("/show_items/add_items",[ItemsController::class,"addItem"]);
Route::post("/show_items/get_items",[ItemsController::class,"getItems"]);
Route::get("/show_items",function(){
    return view("show_items");
});
Route::post("/getMenus",[AgetMenus::class,"get_admin_menus"]);
Route::post("/setmenu",[tempmakemenu::class,"make_menu"]);

Route::post("/users/getUsers",[Ausers::class,"getusers"]);
Route::get("/users",function (){
    return view("users");
});


Route::post("/testlog",[login::class,"user_login"]);