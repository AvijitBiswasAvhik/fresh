<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderItemsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|exists:users,id',  // Ensures user_id exists in the users table
            'order_number' => 'required|numeric|digits:8|unique:orders,order_number', // Unique order_number
            'status' => 'required|string|in:pending,completed,canceled', // Only allow these statuses
            'total_amount' => 'required|numeric|min:0', // Ensure total_amount is a positive number
            'payment_status' => 'required|string|in:paid,unpaid', // Either 'paid' or 'unpaid'
            'payment_method' => 'required|string|in:paypal,credit_card,bank_transfer', // Limit to specific payment methods
            'transaction_id' => 'required|string',

        ];
    }
}
