<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        "/Alogin",
        "/singin",
        "/main",
        "/isLoged",
        "/getMenus",
        "/setmenu",
        "/save_menus",
        "/delete_menu",
        "/show_items",
        "/show_items",
        "/add_new_menu"
    ];
}