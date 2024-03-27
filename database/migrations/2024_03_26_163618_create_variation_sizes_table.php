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
        Schema::create('variation_sizes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('variation_id');
            $table->integer('height');
            $table->integer('width');
            $table->integer('cubic')->nullable();
            $table->timestamps();
            $table->foreign('variation_id')->references('id')->on('product_variations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('variation_sizes');
    }
};
