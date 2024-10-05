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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id');  // Foreign key referencing the orders table
            $table->unsignedBigInteger('product_id');  // Foreign key for the product (optional)
            $table->string('product_name');  // Store the product name
            $table->integer('quantity');
            $table->decimal('unit_price', 10, 2);  // Price per unit
            $table->decimal('total_price', 10, 2);
            $table->timestamps();
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
