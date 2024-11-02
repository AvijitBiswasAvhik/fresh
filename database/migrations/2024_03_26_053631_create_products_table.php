<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('subcategory_id');
            // $table->unsignedBigInteger('description_long_id');
            // $table->unsignedBigInteger('feature_id');
            // $table->unsignedBigInteger('product_image_id');
           // $table->string('short_description_id');
            $table->string('title',100);
            $table->string('product_image',100);
            $table->string('description',250);
            
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('subcategory_id')->references('id')->on('categories')->onDelete('cascade');
            // $table->foreign('description_long_id')->references('id')->on('description_longs')->onDelete('cascade');
            // $table->foreign('feature_id')->references('id')->on('features')->onDelete('cascade');
            // $table->foreign('product_image_id')->references('id')->on('product_images')->onDelete('cascade');
            // $table->foreign('short_description_id')->references('id')->on('short_descriptions')->onDelete('cascade');

            

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
