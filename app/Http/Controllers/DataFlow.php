<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\PaymentType;
use App\Models\UserPaymentMethod;
use App\Http\Requests\StoreUserPaymentMethodRequest;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderItems;

class DataFlow extends Controller
{
    public function paymentType()
    {
        $user = auth()->user();
        $paymentType = PaymentType::all();
        return response(json_encode($paymentType));
    }
    public function getCategories()
    {
        $data = Category::all();
        return response(json_encode($data));
    }
    public function order(Request $request)
    {
        $user = auth()->user();
       $offset = $request->query('offset'); // Get the offset from the request, default to 0
        $itemsPerPage = 3; // Define how many items to fetch

        $orders = OrderItems::whereHas('order', function ($query) use ($user) {
            $query->where('user_id', $user->id)
                ->where('status', 'pending');
        })
            ->with(['product', 'productItem', 'order'])
            ->limit($itemsPerPage) // Limit to itemsPerPage
            ->offset($offset) // Use offset for pagination
            ->get();

        return response()->json($orders); // Return the results as JSON
    }
}
