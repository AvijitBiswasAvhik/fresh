<?php

namespace App\Http\Controllers;

use App\Models\UserCart;
use App\Http\Requests\StoreUserCartRequest;
use App\Http\Requests\UpdateUserCartRequest;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\CartItems;
use App\Models\ProductItem;

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
        $data['user_id'] = auth()->id();
        $productExists = UserCart::where('user_id', auth()->id())->where('product_id', $data['product_id'])
            ->exists();
        if ($productExists == false) {
            $status = UserCart::create($data);
            return response('your product successfully added');
        }

        return response('you already have this product');
    }

    /**
     * Display the specified resource.
     */
    public function show(UserCart $userCart)
    {

        // Fetch authenticated user
        $user = auth()->user();

        // Retrieve UserCart items for the authenticated user and eager load the related products
        $cartItems = UserCart::where('user_id', $user->id)->with('product')->get();

        // Extract the related products from the cart items
        $products = $cartItems->pluck('product')->unique();

        // Eager load product_items for the retrieved products
        $productsWithItems = Product::whereIn('id', $products->pluck('id'))->with('productItems')->get();

        return response($productsWithItems);
    }
    public function CartPage($id = null)
    {

        // Get the currently authenticated user
        $user = auth()->user();

        // Fetch cart items for the authenticated user
        $userCart = UserCart::with('product.productItems')->where('user_id', $user->id)->get();
        $cart = new CartItems($userCart);
       return response($cart);


       // return response()->json($cartData);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function addQty(UserCart $cart, Request $request)
    {
        $cartId = $request->id;
        $add = UserCart::findOrFail($cartId);
        $add['qty'] = $add['qty'] + 1;
        $add->save();

        return $this->CartPage($cartId);
    }
    public function deleteQty(UserCart $cart, Request $request)
    {
        $cartId = $request->id;
        $add = UserCart::findOrFail($cartId);
        $add['qty'] = $add['qty'] - 1;
        if ($add['qty'] >= 1) {
            $add->save();
        }
        return $this->CartPage($cartId);
    }
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
    public function destroy(UserCart $userCart,Request $request)
    {
        $cartId = $request->id;
        $userCart->destroy($cartId);
        return $this->CartPage();
           
    }
}
