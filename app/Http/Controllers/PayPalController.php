<?php

// app/Http/Controllers/PayPalController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Resources\CartItems;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use Illuminate\Support\Facades\Auth;
use App\Models\withPayment;
use Illuminate\Support\Facades\Validator;
use App\Models\UserCart;

class PayPalController extends Controller
{
    public $config;
    public $tokenG;
    public $rediUser;
    public function __construct()
    {
        $this->config =  [
            'mode'    => 'sandbox', // Can only be 'sandbox' Or 'live'. If empty or invalid, 'live' will be used.
            'sandbox' => [
                'client_id'         => env('PAYPAL_SANDBOX_CLIENT_ID', ''),
                'client_secret'     => env('PAYPAL_SANDBOX_CLIENT_SECRET', ''),
                'app_id'            => 'APP-80W284485P519543T',
            ],
            'payment_action' => env('PAYPAL_PAYMENT_ACTION', 'Sale'), // Can only be 'Sale', 'Authorization' or 'Order'
            'currency'       => env('PAYPAL_CURRENCY', 'USD'),
            'notify_url'     => env('PAYPAL_NOTIFY_URL', ''), // Change this accordingly for your application.
            'locale'         => env('PAYPAL_LOCALE', 'en_US'), // force gateway language  i.e. it_IT, es_ES, en_US ... (for express checkout only)
            'validate_ssl'   => env('PAYPAL_VALIDATE_SSL', true),
        ];
    }

    public function createPayment(Request $request)
    {
        //return response(json_encode($request->all()));
        if ($request->input('id') != auth()->user()->id) {
            return redirect()->route('paypal.cancel');
        }
        $provider = new PayPalClient;
        //$provider = \PayPal::setProvider();
        //return response($request->all());

        $provider->setApiCredentials(config('paypal'));
        $userAuth = auth()->user();
        $userCart = UserCart::with('product.productItems')->where('user_id', $userAuth->id)->get();
        $cart = new CartItems($userCart);
        $cartArray = $cart->toArray(request());
        $subTotal = $cartArray['extraData']->subTotal;

        // Return the extraData
        //return response()->json($extraData);
        $paymentData = [
            'intent' => 'CAPTURE',

            'application_context' => [
                'return_url' => route('paypal.success'),
                'cancel_url' => route('paypal.cancel'),
            ],
            'purchase_units' => [
                [
                    'amount' => [
                        'value' => $subTotal, // Set your total amount
                        'currency_code' => 'USD',
                    ],
                ]
            ]
        ];


        $accessToken = $provider->getAccessToken();

        $response = $provider->createOrder($paymentData);


        if (isset($response['links'][1]['href'])) {


            $url = $response['links'][1]['href'];

            // Parse the URL
            $parsedUrl = parse_url($url);
            // Parse the query string into an associative array
            parse_str($parsedUrl['query'], $queryParams);
            // Get the token value
            $token = $queryParams['token'];
            $data = [
                'user_id' => $request->input('id'),
                'token' => $token,
                'payment_method' => 'paypal',
            ];

            withPayment::create($data);
            return $url;
        } else {
            return redirect()->route('paypal.cancel');
        }
    }

    public function executePayment(Request $request)
    {
        $token = $request->query('token');
        $this->tokenG = $token;
        $user = withPayment::where('token', $token)->first();
        $this->rediUser = $user;
        $provider = new PayPalClient();
        $provider->setApiCredentials(config('paypal'));

        $paymentId = $request->input('paymentId');
        $token = $request->input('token');

        $accessToken = $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($token);

        //dd($response);
        if (isset($response['status']) && $response['status'] === 'COMPLETED') {
            // Payment successful
            //return redirect()->route('checkout')
            $orderData = [
                'user_id' => $user->user_id,
                'order_number' => mt_rand(10000000, 99999999),
                'status' => 'pending',
                'total_amount' => $response['purchase_units'][0]['payments']['captures'][0]['amount']['value'],
                'payment_status' => 'paid',
                'payment_method' => 'paypal',
                'transaction_id' => $response['purchase_units'][0]['payments']['captures'][0]['id'],
            ];

            $order = $this->storeOrder($orderData);
            if ($order) {
                return redirect()->route('checkout');
            } else {
              return redirect()->route('paypal.cancel');
            }
        } else {
            // Payment failed
            return redirect()->route('paypal.cancel');
        }
    }


    public function storeOrder($orderData)
    {
        // Validate the incoming order data
        $validator = Validator::make($orderData, (new StoreOrderRequest)->rules());

        // Check if the validation fails
        if ($validator->fails()) {
            //dd($orderData);
            return response()->json([
                'errors' => $validator->errors()
            ], 422); // HTTP status 422: Unprocessable Entity
        }

        // If validation passes, get the validated data
        $validatedData = $validator->validated();

        // Create the order using the validated data
        $order = Order::create($validatedData);

        $orderItems = $this->orderItems(); // Fetch order items

        if (!empty($orderItems)) {
            $item = $order->orderItems()->createMany($orderItems);
            UserCart::where('user_id', $this->rediUser->user_id)->delete();

            return true;
            // Insert the order items
        }
        // Return the created order
        // HTTP status 201: Created
    }

    public function orderItems()
    {
        // Fetch the cart items for the user, loading related products and product items
        $cartItems = UserCart::with(['product', 'productItems'])
            ->where('user_id', $this->rediUser->user_id)
            ->get();

        // Convert cart items to an array
        $cartArray = $cartItems->toArray();

        // Map through the cart items and construct the desired array structure
        $data = array_map(function ($item) {
            // Ensure 'productItems' is a collection and access the first item (if applicable)
            $firstProductItem = $item['product_items'][0] ?? null; // Handle the case if no product items exist

            return [
                'product_id' => $item['product_id'],
                'product_name' => $item['product']['title'],  // Assuming product has 'title'
                'quantity' => $item['qty'],
                'unit_price' => $firstProductItem ? $firstProductItem['discount_price'] : null,
                'total_price' => $firstProductItem ? $firstProductItem['discount_price'] * $item['qty'] : null,
            ];
        }, $cartArray);

        // Return the formatted array of cart data
        return $data;
    }
}
