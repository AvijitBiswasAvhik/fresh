<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Requests\StoreProductControllerRequest;
use App\Models\ProductItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\GalleryImage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StoreProductControllerRequest $request)
    {

        //$productData = $request->validated();





        $path = public_path('product/main-image');
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }

        // Store the image in the public/product/main-image directory
        $imagePath = $request->file('image')->store('public/product/main-image');

        // Get the URL of the stored image
        $imageUrl = Storage::url($imagePath);


        $mainData = [];
        $mainData['title'] = $request->title;
        $mainData['category_id'] = $request->firstCategory;
        $mainData['subcategory_id'] = $request->subCategory;
        $mainData['product_image'] = $imageUrl;
        $mainData['description'] = $request->shortDescription;
        $parentProduct = Product::create($mainData);
        if ($parentProduct) {
            $sku = Str::random(12);
            $productItem = new ProductItem([
                'sku' => $sku,
                'quantity' => $request->quantity,
                'product_image' => $imageUrl,
                'price' => $request->price,
                'discount_price' => $request->discountPrice,
            ]);


            if ($parentProduct->productItems()->save($productItem)) {

                if ($request->file('gallery-image0')) {
                    for ($i = 0; $i < 4; $i++) {
                        if ($request->file('gallery-image' . $i)) {
                            $galleryPath =  Storage::url($request->file('gallery-image' . $i)->store('public/product/gallery-image'));

                            $galleryData = new GalleryImage([
                                'product_gallery_image' => $galleryPath,
                            ]);

                            $gallery = $parentProduct->galleryImages()->save($galleryData);
                        }
                    }
                    if ($gallery) {
                        return response(json_encode($gallery), 200);
                    }
                }
            }
        }
    }
    /*send cart data to fornt */
    public function cartData(Request $request)
    {
        $data = $request->all();
        // foreach(){

        // }
        $allData = [];
        for ($i = 0; $i < count($data); $i++) {
            $productItems = ProductItem::where('sku', $data[$i]['sku'])->first();
            $product = Product::find($productItems->product_id);
            array_push($allData, $product->load('productItems'));
        }
        return response($allData);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request, Category $categories)
    {
        $cat = $request->cat;
        if ($cat) {
            
            $category = $categories->where('category',$cat)->first();
           if ($category) {
            $product = $category->products->load('productItems')->load('category')->load('galleryImages');
            return response(json_encode($product));
           }else {
            return response(json_encode($product->with('productItems')->get()));
           }
            
        }
       
    }
    /**show the single product */
    public function singleProduct(Product $product, Request $request)
    {
        $productItem = ProductItem::where('sku', $request->query('sku'))->first();
        $product = Product::find($productItem->product_id);
        $data = $product->load('productItems')->load('galleryImages');
        return response(json_encode($data));
    }
    public function relatedProduct(Product $product, Request $request, Category $categories)
    {
        $category = $categories->find($request->query('category'));
        $product = $category->products->load('productItems')->load('category')->load('galleryImages');
        return response(json_encode($product));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
