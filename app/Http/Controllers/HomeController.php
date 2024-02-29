<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreProductControllerRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function res(StoreProductControllerRequest $request)
    {
        // Validation rules
        

        // If validation passes, continue with your logic
        // For example, you can access validated data using $request->title
        return response()->json(['message' => 'Validation passed']);
    }




    public function index(Request $request)
    {
        $hello = 'hh';
        if ($request->hasFile('file')) {
            // Get the file from the request
            $file = $request->file('file');

            // Generate a unique filename for the image
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();

            // Store the file in the storage directory (e.g., storage/app/public/images)
            $file->storeAs('public/images', $filename);

            // Return a success response
            $hello = 'File uploaded successfully';
        }
        return view('home', ['hello' => $hello]);
    }

    public function login()
    {
        return view('home');
    }
    public function productView()
    {
        return view('home');
    }
    public function createUser(UserRequest $request)
    {
        $data = $request->validated();
        $data['name'] = ucfirst($request->firstName).' '.ucfirst($request->lastName);
        User::create($data);
        if ($data) {
            return response('hello world');
        }
        
    }
}
