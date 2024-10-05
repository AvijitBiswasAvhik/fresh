<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class withPayment extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'token',
        'payment_method',
    ];
}
