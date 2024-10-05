<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductItem;
use App\Models\Category;
use App\Models\GalleryImage;
use App\Models\UserCart;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
        'subcategory_id',
        'title',
        'product_image',
        'description',
    ];

    public function productItems(){
        return $this->hasMany(ProductItem::class,'product_id');
    }
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function galleryImages(){
        return $this->hasMany(GalleryImage::class);
    }
    public function userCarts(){
        return $this->hasMany(UserCart::class);
    }
}
