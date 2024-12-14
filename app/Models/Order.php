<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItems;
use App\Models\User;


class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_number',       // Unique order identifier
        'user_id',            // Foreign key for the user
        'status',             // Order status (pending, completed, canceled, refunded)
        'total_amount',       // Total amount of the order
        'currency',           // Currency code (e.g., USD)
        'payment_status',     // Payment status (paid, unpaid, failed)
        'payment_method',     // Payment method (PayPal, Credit Card, etc.)
        'transaction_id',     // PayPal Transaction ID or similar
        'shipping_amount',    // Shipping cost
        'tax_amount',         // Tax amount
        'discount_amount',    // Discount applied
    ];
    public function orderItems(){
        return $this->hasMany(OrderItems::class,'order_id');
    }
    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function order(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    
}
