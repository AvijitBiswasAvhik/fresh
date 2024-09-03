<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreProductControllerRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Http\Requests\login;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Carbon;
use App\Http\Requests\StoreAddressRequest;
use App\Http\Requests\StoreProfileImage;
use App\Models\Address;
use Illuminate\Support\Facades\Storage;

use function PHPSTORM_META\map;

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

    public function login(login $login)
    {


        $arr = $login->validated();
        if (Auth::attempt($arr)) {
            $user = Auth::user();
            $token = $user->createToken('user');
            if ($token) {
                $nUser = User::find($user->id);
                if ($nUser) {
                    $nUser->token = $token->plainTextToken;
                    $nUser->save();
                    return response($token);
                }
            }
        } else {
            return response()->json(["errors" => ['loginFailed' => 'The Email or Password does not match our records']], 401);
        }
    }
    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();

        return response('Youre logged out', 200);
    }
    public function productView()
    {
        return view('home');
    }
    public function createUser(UserRequest $request)
    {
        $data = $request->validated();
        $data['name'] = ucfirst($request->firstName) . ' ' . ucfirst($request->lastName);
        $user = User::create($data);
        if ($user) {
            $token = $user->createToken('AppName');
            if ($token) {
                $nUser = User::find($user->id);
                if ($nUser) {
                    $nUser->token = $token->plainTextToken;
                    $nUser->save();
                }
            }
            return response()->json(['token' => $token], 201);
        }
    }
    public function setAdress(StoreAddressRequest $request)
    {
        $requestData = $request->validated();
        $data = [];
        $data['region'] = $requestData['region'];
        $data['street_number'] = $requestData['streetNumber'];
        $data['address_line1'] = $requestData['addressLine1'];
        $data['address_line2'] = $requestData['addressLine2'];
        $data['city'] = $requestData['city'];
        $data['postal_code'] = $requestData['postalCode'];
        $data['country_id'] = 123;
        $data['user_id'] = Auth::user()->id;
        $address = Address::create($data);
        if ($address) {
            return response('success', 200);
        }
        //  $address = Address;
        $user = User::find(Auth::user()->id);
        return response(json_encode($user->address));
    }





    public function isLogin(Request $request)
    {
        $user = auth()->user();
        return response(json_encode($user));
    }
    public function setProfileImage(StoreProfileImage $request)
    {
        $imagePath = $request->file('image')->store('public/user/image');

        // Get the URL of the stored image
        $imageUrl = Storage::url($imagePath);
        $user = auth()->user();
        if ($user && $imageUrl) {
            $user = User::find($user->id);
            $user->image = $imageUrl;
            $user->save();
            return response($imageUrl);
        }
        
        
    }
}
