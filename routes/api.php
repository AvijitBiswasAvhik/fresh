<?php

use App\Http\Controllers\data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserPaymentMethodController;
use App\Http\Controllers\DataFlow;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::post('user/create', [HomeController::class, 'createUser']);
Route::middleware(['auth:sanctum'])->group(
    function(){
    Route::post('user/is-login', [HomeController::class, 'isLogin']);
    Route::post('user/submit-adress', [HomeController::class, 'setAdress']);
    Route::get('user/logout', [HomeController::class, 'logout']);
    Route::get('user/payment-method-create', [UserPaymentMethodController::class, 'create']);
    Route::get('users/payment-type', [DataFlow::class, 'paymentType']);
    Route::post('users/payment-data/save', [UserPaymentMethodController::class, 'store']);
    Route::get('users/payment-data/show', [UserPaymentMethodController::class, 'show']);
    Route::post('admin/get-res', [HomeController::class, 'res']);
    }

);
Route::get('user/data', [data::class, 'data']);
Route::post('user/login', [HomeController::class, 'login']);
