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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();  // Unique order identifier
            $table->unsignedBigInteger('user_id');  // Foreign key for the user
            $table->enum('status', ['pending', 'completed', 'canceled', 'refunded'])->default('pending');
            $table->decimal('total_amount', 10, 2);
            $table->string('currency', 3)->default('USD');  // Currency code
            $table->enum('payment_status', ['paid', 'unpaid', 'failed'])->default('unpaid');
            $table->string('payment_method')->nullable();  // PayPal, Credit Card, etc.
            $table->string('transaction_id')->nullable();  // PayPal Transaction ID
            $table->decimal('shipping_amount', 10, 2)->nullable();
            $table->decimal('tax_amount', 10, 2)->nullable();
            $table->decimal('discount_amount', 10, 2)->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
