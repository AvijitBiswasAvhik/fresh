<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\ValidateToken;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\data;
use App\Http\Controllers\FaceBookController;
use App\Http\Controllers\PayPal;
use App\Http\Controllers\PayPalController;

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

//Route::get('/data', [App\Http\Controllers\data::class, 'data'])->name('home');
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/login', [App\Http\Controllers\HomeController::class, 'login'])->name('login');
Route::get('/product-view', [App\Http\Controllers\HomeController::class, 'productView'])->name('product-view');
Route::get('/products', [App\Http\Controllers\HomeController::class, 'index'])->name('products');
Route::get('/products/{category}', [App\Http\Controllers\HomeController::class, 'index'])->name('products-category');
Route::get('/checkout', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/account&security', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/cart-view', [App\Http\Controllers\HomeController::class, 'index'])->name('checkout');
Route::get('/chatbot', [App\Http\Controllers\HomeController::class, 'index'])->name('chatbot');
//Auth::routes();
//Route::middleware(['auth:sanctum'])->get('/admin', [App\Http\Controllers\AdminController::class, 'hello'])->name('admin');
Route::middleware([ValidateToken::class])->group(function () {
    Route::get('/admin', [App\Http\Controllers\HomeController::class, 'index']);
    Route::get('/admin/product-add', [App\Http\Controllers\HomeController::class, 'index'])->name('product-add');
    Route::get('/admin/product-list', [App\Http\Controllers\HomeController::class, 'index'])->name('product-list');
    Route::get('/admin/user-list', [App\Http\Controllers\HomeController::class, 'index'])->name('user-list');
});
Route::get('/accese-denied',function(){
    return view('accese-denied');
})->name('access.denied');
Route::post('user/create', [HomeController::class, 'createUser']);
Route::get('paypal/success', [PayPalController::class, 'executePayment'])->name('paypal.success');
Route::get('paypal/cancel', [PayPalController::class, 'cancelPayment'])->name('paypal.cancel');

Route::get('/order', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('auth/facebook',[FaceBookController::class,'redirectToFacebook']);
Route::get('auth/facebook/callback', [FacebookController::class, 'handleFacebookCallback']);