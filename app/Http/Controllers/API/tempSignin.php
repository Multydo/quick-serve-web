<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class tempSignin extends Controller
{
public function singin(Request $request)
{
// Validate the incoming request data
/*$validatedData = $request->validate([
'user_fname' => 'required|string|max:255',
'user_lname' => 'required|string|max:255',
'user_email' => 'required|string|email|max:255|unique:users',
'user_password' => 'required|string|min:8',
'role' => 'required|string|in:admin,user', // Adjust roles as needed
]);*/

// Create a new user using the validated data
$new_user = User::create([
'user_fname' => $request['user_fname'],
'user_lname' => $request['user_lname'],
'email' => $request['email'],
'password' => $request['password'],
'role' => $request['role'], // Ensure this column exists in your users table
]);

return response()->json($new_user);
}
}