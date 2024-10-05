<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductItem;

class OrderItems extends Model
{
    use HasFactory;
    protected $fillable = [
        'order_id',         // Foreign key referencing the orders table
        'product_id',       // Foreign key for the product (optional)
        'product_name',     // Product name
        'quantity',         // Quantity of the product
        'unit_price',       // Price per unit
        'total_price',      // Total price for the product (quantity * unit_price)
    ];
    public function order(){
        return $this->belongsTo(Order::class);
    }
    public function product(){
        return $this->belongsTo(Product::class,'product_id');

    }
    public function productItem(){
        return $this->belongsTo(ProductItem::class,'product_id','product_id');

    }

    
}
