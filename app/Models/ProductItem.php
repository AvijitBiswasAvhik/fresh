<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ProductItem extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'sku',
        'quantity',
        'product_image',
        'price',
        'discount_price',
    ];
    public function product(){
        return $this->belongsTo(Product::class);
    }
}
