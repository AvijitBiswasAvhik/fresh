<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Order;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function UserList(User $user){
        $user = $user->where('user_type', 'user')->with('order')->get();
        return response($user);
    }
}
