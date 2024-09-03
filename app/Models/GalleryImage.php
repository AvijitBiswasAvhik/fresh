<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class GalleryImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_id',
        'product_gallery_image',
    ];
    public function product(){
        return $this->belongsTo(Product::class);
    }

}
