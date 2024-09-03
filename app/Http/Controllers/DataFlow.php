<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\PaymentType;
use App\Models\UserPaymentMethod;
use App\Http\Requests\StoreUserPaymentMethodRequest;
use App\Models\Category;

class DataFlow extends Controller
{
    public function paymentType()
    {
        $user = auth()->user();
        $paymentType = PaymentType::all();
        return response(json_encode($paymentType));
    }
    public function getCategories(){
        $data = Category::all();
        return response(json_encode($data));
    }
}
