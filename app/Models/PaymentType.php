<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserPaymentMethod;

class PaymentType extends Model
{
    use HasFactory;
    public function usePaymentMethod(){
        return $this->hasMany(UserPaymentMethod::class);
    }
}
