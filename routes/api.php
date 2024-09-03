<?php

use App\Http\Controllers\data;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserPaymentMethodController;
use App\Http\Controllers\DataFlow;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserCartController;
use App\Http\Controllers\BkashPayment;
use App\Models\UserCart;

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
    Route::post('admin/product-add', [ProductController::class, 'create']);
    Route::post('add-to-cart', [UserCartController::class, 'store']);
    Route::get('product/categories', [DataFlow::class, 'getCategories']);
    Route::post('set-profile-image', [HomeController::class, 'setProfileImage']);
    
    }

);
Route::get('product/{cat}', [ProductController::class, 'show']);
Route::get('product-view', [ProductController::class, 'singleProduct']);
Route::get('related-product', [ProductController::class, 'relatedProduct']);
Route::post('cart-data', [ProductController::class, 'cartData']);
Route::get('user/data', [data::class, 'data']);
Route::post('user/login', [HomeController::class, 'login']);
