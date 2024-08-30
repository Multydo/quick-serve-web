<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\adminLogin;
use App\Http\Controllers\API\isLogged;


// #############################TEMP LINKS #####################################

use App\Http\Controllers\API\tempSignin;



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
ROute::post("/isLoged",[isLogged::class,"checkLogin"]);