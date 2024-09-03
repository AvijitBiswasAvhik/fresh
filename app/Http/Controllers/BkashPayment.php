<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class BkashPayment extends Controller
{
    private $userName;
    private $password;
    private $appKey;
    private $appSecretKey;
    private $headers;

    public function __construct()
    {
        $this->userName = '01969691847';
        $this->password = '%TyCtOB>[3h';
        $this->appKey = 'FNmZbC5Heyk0RDRax4WNSNEPtc';
        $this->appSecretKey = 'Tc8fSFbdUUY1dLl3Z6PDmLv9v7nKOAn0M4HjBNPoGk85oBF7Zs89';
        $this->headers = [
            "Content-Type" => "application/json",
            "Accept" => "application/json",
        ];
    }

    public function grantToken()
    {
        try {
            $response = Http::withHeaders(array_merge($this->headers, [
                "username" => $this->userName,
                "password" => $this->password,
            ]))
            ->post("https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant", [
                'app_key' => $this->appKey,
                'app_secret' => $this->appSecretKey
            ]);

            // Decode the response to an array
            $responseData = $response->json();

            // Check if the response has the expected status code and message
            if (isset($responseData['statusCode']) && $responseData['statusCode'] === '0000' && $responseData['statusMessage'] === 'Successful') {
                return response($this->createPayment($responseData['id_token'], 1));
            } else {
                // Handle the case where the response does not have the expected status code
                return response()->json(['error' => 'Failed to grant token', 'details' => $responseData], 400);
            }
        } catch (\Exception $exception) {
            // Log the error message for debugging purposes
            Log::error('Error in grantToken: ' . $exception->getMessage());
            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }


public function createPayment($idToken, $price)
{

    try {
        $response = Http::withHeaders([
            "Content-Type" => "application/json",
            "Accept" => "application/json",
            "Authorization" => $idToken,
            "X-App-Key" => $this->appKey,
        ])
            ->post('https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/create', [

                "mode" => "0011",
                "payerReference" => "01969691847",
                "callbackURL" => "https://avijitbiswas.me/home",
                "amount" => $price,
                "currency" => "BDT",
                "intent" => "sale",
                "merchantInvoiceNumber" => "Inv0124"

            ]);

        $data = $this->sendResponse($response);

        if ($data['statusMessage'] == "Successful") {
            $buyer = auth()->user();
            $buyerTable = Buyer::find($buyer->id);
            $cartData = $this->buyerController->sentCartData(true);


            //$payment = Payment::where('buyer_id', '=', $buyer->id)->first();
            //$order = Order::find($buyer->id);

            $orderData = [
                'payment_id' => $data["paymentID"],
                'status' => 'active',
                'quantity' => $cartData['total_product'],
                'total_amount' => $data['amount'],
                'payment_method' => 'bkash',
                'payment' => 'processing',
                'order_number' => Str::random(10),

            ];

            $confirmOrder = $buyerTable->confirmOrder()->create($orderData); //ConfirmOrder::create($paymentData);
            if ($confirmOrder) {

                //return response($cartData['to']);

                //return response($paymentData);

                $products = $buyerTable->products->pluck('id')->toArray();


                $paymentData = [
                    'buyer_id' => $buyer->id,
                    'id_token'   => $idToken,
                    'payment_id' => $data["paymentID"],
                    'amount' => $data["amount"],

                    // 'amount'   => 100, // You can uncomment this line and set the amount value.
                ];

                $payment = $confirmOrder->payment()->create($paymentData);
                if ($payment) {
                    $confirmOrder->products()->attach($products);
                    return $data;
                }
            }
        }
    } catch (\Exception $exception) {
        return response()->json(['error' => 'Internal Server Error'], 500);
    };
}
