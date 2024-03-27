<?php

namespace App\Http\Controllers;

use App\Models\UserPaymentMethod;
use App\Http\Requests\StoreUserPaymentMethodRequest;
use App\Http\Requests\UpdateUserPaymentMethodRequest;
use App\Models\PaymentType;
use App\Models\User;

class UserPaymentMethodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return 'hello world';
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserPaymentMethodRequest $request)
    {
        //return response(json_encode($request->provider));
        $data = [];
        $provider = PaymentType::find((int)$request->paymentTypeId);
        
        $userId = auth()->user()->id;
        $data['user_id'] = $userId;
        $data['payment_type_id'] = $request->paymentTypeId;
        $data['provider'] = $request->provider;
        $data['account_number'] = (int) $request->accountNumber;
        $data['expiry_date'] = $request->expiryDate;
       $method =  UserPaymentMethod::create($data);
       if ($method) {
        return response(json_encode($method));
       }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(UserPaymentMethod $userPaymentMethod)
    {
        $user = User::with('paymentMethod.paymentType')->find(auth()->user()->id);
       
        //$paymentType = $paymentMethod->paymentType;

        return response(json_encode($user));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserPaymentMethod $userPaymentMethod)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserPaymentMethodRequest $request, UserPaymentMethod $userPaymentMethod)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserPaymentMethod $userPaymentMethod)
    {
        //
    }
}
