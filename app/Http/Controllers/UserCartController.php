<?php

namespace App\Http\Controllers;

use App\Models\UserCart;
use App\Http\Requests\StoreUserCartRequest;
use App\Http\Requests\UpdateUserCartRequest;
use Illuminate\Http\Request;

class UserCartController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserCartRequest $request)
    {
        $data = $request->all();
        $status = UserCart::create($data);
        return response(json_encode($status));
    }

    /**
     * Display the specified resource.
     */
    public function show(UserCart $userCart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserCart $userCart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserCartRequest $request, UserCart $userCart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserCart $userCart)
    {
        //
    }
}
