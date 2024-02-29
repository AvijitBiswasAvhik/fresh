<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/login', [App\Http\Controllers\HomeController::class, 'login'])->name('login');
Route::get('/product-view', [App\Http\Controllers\HomeController::class, 'productView'])->name('product-view');
Route::get('/products', [App\Http\Controllers\HomeController::class, 'index'])->name('products');
Route::get('/products/{category}', [App\Http\Controllers\HomeController::class, 'index'])->name('products-category');
Route::get('/checkout',[App\Http\Controllers\HomeController::class, 'index'])->name('checkout');
// Auth::routes();
Route::get('/admin',[App\Http\Controllers\HomeController::class, 'index'])->name('admin');
Route::get('/admin/product-add',[App\Http\Controllers\HomeController::class, 'index'])->name('product-add');
Route::get('/admin/product-list',[App\Http\Controllers\HomeController::class, 'index'])->name('product-list');
Route::post('user/create', [HomeController::class, 'createUser']);