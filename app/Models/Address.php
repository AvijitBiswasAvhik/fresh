<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Address extends Model
{
    use HasFactory;
    protected $fillable =[
        'user_id',
        'unit_number',
        'street_number',
        'address_line1',
        'address_line2',
        'city',
        'region',
        'postal_code',
        'country_id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }

}
