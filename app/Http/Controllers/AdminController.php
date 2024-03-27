<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function hello(  )
    {
      return  redirect('http://127.0.0.1:8000');
    }
    
}
