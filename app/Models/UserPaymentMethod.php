<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\PaymentType;
use App\Models\User;

class UserPaymentMethod extends Model
{
    use HasFactory;
    protected $fillable = [
        'payment_type_id',
        'user_id',
        'account_number',
        'expiry_date',
        'provider',
    ];
    public function paymentType(){
        return $this->belongsTo(PaymentType::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
