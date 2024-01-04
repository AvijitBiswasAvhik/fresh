<?php

use Illuminate\Support\Facades\Route;

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
// Auth::routes();


