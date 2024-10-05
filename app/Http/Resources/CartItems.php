<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Product;
use stdClass;

use function PHPSTORM_META\map;

class CartItems extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $data = $this->map(function ($item) {

            $product = Product::findOrFail($item->product_id);
            $productItems = $product->productItems;

       
            return [
                
                'id' => $item->id,
                'product_name' => $item->product_name,
                'qty' => $item->qty ? $item->qty : 1,
                'price' => $productItems[0]->discount_price,
                'product_title' => $product->title,
                'product_image' => $productItems[0]->product_image,
                'product_items' => "hello",
                'total_price' =>  $item->qty ? $item->qty * $productItems[0]->discount_price : $productItems[0]->discount_price,
                'sku'=> $productItems[0]->sku,
                'product_id' => $item->product_id,
                'productItems' => $productItems,
                // Add other fields as needed
            ];
        })->all();
         $subTotal = array_reduce($data,function ($cItem,$item){
             return $cItem + $item['total_price'];
         },0);
         $extra = new stdClass();
         $extra->subTotal = $subTotal;
         $extra->user_id = auth()->user()->id;
         
        return ['cartData'=> [...$data],'extraData' => $extra];
    }
}
