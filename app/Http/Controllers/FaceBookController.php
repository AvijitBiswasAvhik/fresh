<?php

namespace App\Http\Controllers;

use App\Models\FaceBook;
use App\Http\Requests\StoreFaceBookRequest;
use App\Http\Requests\UpdateFaceBookRequest;
use Laravel\Socialite\Facades\Socialite;
use SebastianBergmann\CodeCoverage\Driver\Driver;

class FaceBookController extends Controller
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
    public function redirectToFacebook(){
        return Socialite::driver('facebook')->redirect();
    }
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFaceBookRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FaceBook $faceBook)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FaceBook $faceBook)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFaceBookRequest $request, FaceBook $faceBook)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FaceBook $faceBook)
    {
        //
    }
}
